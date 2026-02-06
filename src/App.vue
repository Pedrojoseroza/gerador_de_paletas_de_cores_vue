<script setup>
import { ref } from "vue";
import  formulario from "./components/form.vue";
import paleta from "./components/paleta.vue"
let cor = ref("");
const tipoDePaletas = ref('');
const pegaCor = (corEscolhida) => {
  cor.value = corEscolhida;
}
const pegaPaleta = (paletaEscolhida) => {
  tipoDePaletas.value = paletaEscolhida;
}

</script>

<template>
  <div class="maior">
      <formulario @enviarCor="pegaCor" @enviarTipoDePaleta = "pegaPaleta"/>
      <paleta :corEscolhida="cor"
      :tipoDePaleta ='tipoDePaletas'></paleta>
   
  </div>
</template>

<style scoped>
 div.maior {
  display: flex;
  justify-content: space-around;
  padding: 10vh -0;
}
 
</style>
