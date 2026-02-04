<script setup>
import {ref} from 'vue'
const emits = defineEmits(['enviarCor']);
const corDominante = ref(' ');
const escolherCor = () => {
    corDominante.value = document.getElementById('cor').value; 
    emits('enviarCor', corDominante.value);
}
</script>

<template>
    <div>    
        <h1>
    Gerador de paletas de cores
</h1>
<form @submit.prevent="escolherCor">
    <label>
            Escolha a cor dominante da paleta:
            <br>
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
    <button>Gerar paleta</button>
</form>
</div>

</template>

<style scoped>
div {
    display: block;
}
template {
    display: block;
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