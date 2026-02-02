<script setup>
import  formulario from "./components/form.vue";
import paleta from "./components/paleta.vue"
let cor = "";
const enviarCor = (corEscolhida) => {
  cor = corEscolhida;
}
</script>

<template>
 <formulario @enviarCor="enviarCor"/>
 <paleta :cor-escolhida="cor"></paleta>
</template>

<style scoped></style>
