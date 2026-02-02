<script setup>
import {ref} from 'vue'
const emit = defineEmits(['enviarObjetos']);
const corDominante = ref(' ');
const escolherCor = () => {
    corDominante.value = document.getElementById('cor').value; 
    console.log(corDominante.value);
    emit('enviarCor', corDominante.value);
}
</script>

<template>
<h1>
    Gerador de paletas de cores
</h1>
<form @submit.prevent="escolherCor">
    <label>
            Escolha a cor dominante da paleta:
        <input type="color" id="cor" placeholder="Escolha uma cor de sua preferência" class="seletor">
    </label>
    <p>
        Escolha a composição da paleta de cor:
    </p>
    <label>
    <input type="radio" >
        Complementar (Cores opostas no círculo)
    </label>
    <br>
    <button v-on:click="escolherCor">Gerar paleta</button>
</form>
</template>
<style scoped>

* {
    margin: 10px 0 10px 40px;
}
h1 {
    margin-top: 5vh;
}
input {
margin: 0;
}
.seletor {
    width: 5vw;
    height: 5vw;
    border: 1px;
    background-color: white;
}
label,p {
    font-size: 20px;
    margin: 20px 0 ;
}
</style>