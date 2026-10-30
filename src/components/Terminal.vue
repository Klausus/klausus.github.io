<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

export interface OutputLine {
  text: string;
  /** texto final resaltado en neón */
  highlight?: string;
  muted?: boolean;
}

export interface Command {
  cmd: string;
  output: OutputLine[];
}

const props = defineProps<{ commands: Command[] }>();

// Sin JS (y en el HTML inicial) se ve todo el contenido; al hidratar
// se reinicia y se "teclea" comando a comando.
const done = ref(props.commands.length);
const current = ref(-1);
const typed = ref('');

let timer: ReturnType<typeof setTimeout> | undefined;
const wait = (ms: number) => new Promise<void>((resolve) => (timer = setTimeout(resolve, ms)));

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  done.value = 0;
  await wait(400);
  for (const [i, command] of props.commands.entries()) {
    current.value = i;
    typed.value = '';
    for (const char of command.cmd) {
      typed.value += char;
      await wait(45);
    }
    await wait(250);
    current.value = -1;
    done.value = i + 1;
    await wait(350);
  }
});

onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <div class="terminal">
    <div class="dots" aria-hidden="true">
      <span class="dot neon"></span>
      <span class="dot gold"></span>
      <span class="dot cyan"></span>
    </div>

    <div class="sr-only">
      <p v-for="command in commands" :key="command.cmd">
        {{ command.cmd }}: {{ command.output.map((line) => `${line.text}${line.highlight ?? ''}`).join('. ') }}
      </p>
    </div>

    <div aria-hidden="true">
      <template v-for="(command, i) in commands" :key="command.cmd">
        <template v-if="i < done">
          <p class="prompt">$ {{ command.cmd }}</p>
          <p v-for="line in command.output" :key="line.text" :class="{ muted: line.muted }">
            {{ line.text }}<span v-if="line.highlight" class="highlight">{{ line.highlight }}</span>
          </p>
        </template>
        <p v-else-if="i === current" class="prompt">$ {{ typed }}<span class="caret">▍</span></p>
      </template>
      <p v-if="done === commands.length" class="prompt">$ <span class="caret">▍</span></p>
    </div>
  </div>
</template>

<style scoped>
.terminal {
  border: 1px solid rgba(34, 225, 240, 0.5);
  background: var(--panel);
  padding: 26px;
  font-family: var(--font-mono);
  font-size: 15px;
  box-shadow: 0 0 40px rgba(255, 61, 139, 0.15);
  min-height: 330px;
}

.dots {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot.neon {
  background: var(--neon);
}

.dot.gold {
  background: var(--gold);
}

.dot.cyan {
  background: var(--cyan);
}

p {
  margin: 0 0 4px;
  color: var(--text);
  overflow-wrap: anywhere;
}

.prompt {
  margin-top: 12px;
  color: var(--cyan);
}

.prompt:first-child {
  margin-top: 0;
}

.muted {
  color: var(--muted);
}

.highlight,
.caret {
  color: var(--neon);
}

.caret {
  animation: blink 1.1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
