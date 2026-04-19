<script setup>
import { ref, defineProps, watch } from 'vue'
import { usePaleta } from '@/logic.js'
const props = defineProps({
  corEscolhida: {
    type: String,
    required: true,
    default: '#000000',
  },
  tipoDePaleta: {
    type: String,
    required: true,
  },
})
const { triade, monocromatico, complementar } = usePaleta()
const paleta = ref([])

function atualizaPaleta() {
  if (props.tipoDePaleta === 'triade') {
    paleta.value = triade([], props.corEscolhida)
  } else if (props.tipoDePaleta === 'complementar') {
    paleta.value = complementar([], props.corEscolhida)
  } else if (props.tipoDePaleta === 'monocromatico') {
    paleta.value = monocromatico([], props.corEscolhida)
  }
}
watch(props, atualizaPaleta)
</script>

<template>
  <div :class="props.tipoDePaleta" class="pai">
    <div
      v-for="cor in paleta"
      :key="cor"
      :style="'background-color: ' + cor.corFundo + '; color: ' + cor.corLetra"
      @click="console.log('background-color = ' + cor)"
    >
      {{ cor.corFundo }}
    </div>
  </div>
</template>

<style scoped>
div.pai {
  display: block;
  width: 10vw;
  height: 30.2vw;
  border: 5px solid gray;
}
div > div {
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
}
div.complementar > div {
  height: 15vw;
}
div.triade > div {
  height: 10vw;
}
div.monocromatico > div {
  height: 5.99vw;
}
</style>
