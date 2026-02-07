<script setup>
import {ref} from 'vue'
const emits = defineEmits(['enviarCor', "enviarTipoDePaleta"]);
const corDominante = ref(' ');
const tipoDePaleta = ref('');
const escolherCor = () => {
    corDominante.value = document.getElementById('cor').value; 
    console.log(tipoDePaleta.value);
    emits('enviarCor', corDominante.value);
    emits('enviarTipoDePaleta', tipoDePaleta.value);
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
    <div>
        <ul>
            <li>
                <label>
                <input type="radio" name="tipoDePaleta" v-model="tipoDePaleta" value="complementar">
                    Complementar (Cores opostas no círculo)
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="tipoDePaleta" v-model="tipoDePaleta" value="triade">
                    Tríade (3 cores que possuem a mesma distância entre elas, preferivel em cores coloridas e mais vivas)
                </label>
            </li>
            <li>                
                <label >
                    <input type="radio" name="tipoDePaleta" v-model="tipoDePaleta" value="monocromatico">
                    Monocromático (A cor informada será a média da paleta)
                </label>
            </li>
        </ul>
    </div>
    <br>
    <input type="submit" placeholder="Gerar paleta">
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
form {
    max-width: 50vw;
}
form ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
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
input:last-of-type {
    color: white;
    background-color: black;
    font-weight: 600;
    margin-top: 10px;
}
</style>