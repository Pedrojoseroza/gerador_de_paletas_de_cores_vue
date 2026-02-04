<script setup>
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
    corEscolhida: {
        type: String,
        required: true,
        default: '#000000',
    }
})
const corpo = ref(null);

function converteParaRGB(hexa) {
    // Hexadecimal será um array com dois elementos;
    const hexadecimal = hexa;
    switch (hexadecimal[0]) {
        case "0": hexadecimal[0] = 0; break;
        case "1": hexadecimal[0] = 1; break;
        case "2": hexadecimal[0] = 2; break;
        case "3": hexadecimal[0] = 3; break;
        case "4": hexadecimal[0] = 4; break;
        case "5": hexadecimal[0] = 5; break;
        case "6": hexadecimal[0] = 6; break;
        case "7": hexadecimal[0] = 7; break;
        case "8": hexadecimal[0] = 8; break;
        case "9": hexadecimal[0] = 9; break;
        case "a": hexadecimal[0] = 10; break;
        case "b": hexadecimal[0] = 11; break;
        case "c": hexadecimal[0] = 12; break;
        case "d": hexadecimal[0] = 13; break;
        case "e": hexadecimal[0] = 14; break;
        case "f": hexadecimal[0] = 15; break;
    }switch (hexadecimal[1]) {
        case "0": hexadecimal[1] = 0; break;
        case "1": hexadecimal[1] = 1; break;
        case "2": hexadecimal[1] = 2; break;
        case "3": hexadecimal[1] = 3; break;
        case "4": hexadecimal[1] = 4; break;
        case "5": hexadecimal[1] = 5; break;
        case "6": hexadecimal[1] = 6; break;
        case "7": hexadecimal[1] = 7; break;
        case "8": hexadecimal[1] = 8; break;
        case "9": hexadecimal[1] = 9; break;
        case "a": hexadecimal[1] = 10; break;
        case "b": hexadecimal[1] = 11; break;
        case "c": hexadecimal[1] = 12; break;
        case "d": hexadecimal[1] = 13; break;
        case "e": hexadecimal[1] = 14; break;
        case "f": hexadecimal[1] = 15; break;
    }
    const rgb = hexadecimal[0] * 16 + hexadecimal[1];
    
    return rgb;
} // Função comum para todos comandos
function rgbParaHexa(r, g, b) {
    let hexa = ['#'];
    switch (Math.floor(r / 16)) {
        case 0:
            hexa.push('0');
            break;
        case 1:
            hexa.push("1");
            break;
        case 2:
            hexa.push('2');
            break;
        case 3:
            hexa.push('3');
            break;
        case 4:
            hexa.push('4');
            break;
        case 5:
            hexa.push('5');
            break;
        case 6:
            hexa.push('6');
            break;
        case 7:
            hexa.push('7');
            break;
        case 8:
            hexa.push('8');
            break;
        case 9:
            hexa.push('9');
            break;
        case 10:
            hexa.push('A');
            break;
        case 11:
            hexa.push('B');
            break;
        case 12:
            hexa.push('C');
            break;
        case 13:
            hexa.push('D');
            break;
        case 14:
            hexa.push('E');
            break;
        case 15:
            hexa.push('F');
            break;
    }
    switch (r%16) {
        case 0:
            hexa.push('0');
            break;
        case 1:
            hexa.push("1");
            break;
        case 2:
            hexa.push('2');
            break;
        case 3:
            hexa.push('3');
            break;
        case 4:
            hexa.push('4');
            break;
        case 5:
            hexa.push('5');
            break;
        case 6:
            hexa.push('6');
            break;
        case 7:
            hexa.push('7');
            break;
        case 8:
            hexa.push('8');
            break;
        case 9:
            hexa.push('9');
            break;
        case 10:
            hexa.push('A');
            break;
        case 11:
            hexa.push('B');
            break;
        case 12:
            hexa.push('C');
            break;
        case 13:
            hexa.push('D');
            break;
        case 14:
            hexa.push('E');
            break;
        case 15:
            hexa.push('F');
            break;
    }
    switch (Math.floor(g / 16)) {
        case 0:
            hexa.push('0');
            break;
        case 1:
            hexa.push("1");
            break;
        case 2:
            hexa.push('2');
            break;
        case 3:
            hexa.push('3');
            break;
        case 4:
            hexa.push('4');
            break;
        case 5:
            hexa.push('5');
            break;
        case 6:
            hexa.push('6');
            break;
        case 7:
            hexa.push('7');
            break;
        case 8:
            hexa.push('8');
            break;
        case 9:
            hexa.push('9');
            break;
        case 10:
            hexa.push('A');
            break;
        case 11:
            hexa.push('B');
            break;
        case 12:
            hexa.push('C');
            break;
        case 13:
            hexa.push('D');
            break;
        case 14:
            hexa.push('E');
            break;
        case 15:
            hexa.push('F');
            break;
    }
    switch (g%16) {
        case 0:
            hexa.push('0');
            break;
        case 1:
            hexa.push("1");
            break;
        case 2:
            hexa.push('2');
            break;
        case 3:
            hexa.push('3');
            break;
        case 4:
            hexa.push('4');
            break;
        case 5:
            hexa.push('5');
            break;
        case 6:
            hexa.push('6');
            break;
        case 7:
            hexa.push('7');
            break;
        case 8:
            hexa.push('8');
            break;
        case 9:
            hexa.push('9');
            break;
        case 10:
            hexa.push('A');
            break;
        case 11:
            hexa.push('B');
            break;
        case 12:
            hexa.push('C');
            break;
        case 13:
            hexa.push('D');
            break;
        case 14:
            hexa.push('E');
            break;
        case 15:
            hexa.push('F');
            break;
    }
    switch (Math.floor(b/16)) {
        case 0:
            hexa.push('0');
            break;
        case 1:
            hexa.push("1");
            break;
        case 2:
            hexa.push('2');
            break;
        case 3:
            hexa.push('3');
            break;
        case 4:
            hexa.push('4');
            break;
        case 5:
            hexa.push('5');
            break;
        case 6:
            hexa.push('6');
            break;
        case 7:
            hexa.push('7');
            break;
        case 8:
            hexa.push('8');
            break;
        case 9:
            hexa.push('9');
            break;
        case 10:
            hexa.push('A');
            break;
        case 11:
            hexa.push('B');
            break;
        case 12:
            hexa.push('C');
            break;
        case 13:
            hexa.push('D');
            break;
        case 14:
            hexa.push('E');
            break;
        case 15:
            hexa.push('F');
            break;
    }
    switch (b%16) {
        case 0:
            hexa.push('0');
            break;
        case 1:
            hexa.push("1");
            break;
        case 2:
            hexa.push('2');
            break;
        case 3:
            hexa.push('3');
            break;
        case 4:
            hexa.push('4');
            break;
        case 5:
            hexa.push('5');
            break;
        case 6:
            hexa.push('6');
            break;
        case 7:
            hexa.push('7');
            break;
        case 8:
            hexa.push('8');
            break;
        case 9:
            hexa.push('9');
            break;
        case 10:
            hexa.push('A');
            break;
        case 11:
            hexa.push('B');
            break;
        case 12:
            hexa.push('C');
            break;
        case 13:
            hexa.push('D');
            break;
        case 14:
            hexa.push('E');
            break;
        case 15:
            hexa.push('F');
            break;
    }
    return hexa.join("");
}
function complementar() {
    corpo.value.innerHTML = "";
    let corRGB = props.corEscolhida.split("");
    corRGB.splice(0, 1); // Remove o #
    let red = converteParaRGB(corRGB.slice(0, 2)); // Um valor númerico;
    let green = converteParaRGB(corRGB.slice(2, 4)); // Um valor númerico;
    let blue = converteParaRGB(corRGB.slice(-2)); // Um valor númerico;
    // Inverte a cor a partir de agora
    const corOposta = rgbParaHexa(Math.abs(red - 255), Math.abs(green - 255), Math.abs(blue - 255));
    const meuElemento = document.createElement('div');
    meuElemento.style.backgroundColor = props.corEscolhida;
    meuElemento.innerHTML = props.corEscolhida;
    corpo.value.appendChild(meuElemento);
    const meuSegundoElemento = document.createElement('div');
    meuSegundoElemento.style.backgroundColor = corOposta;
    meuSegundoElemento.innerHTML = corOposta;
    corpo.value.appendChild(meuSegundoElemento);
    
}

watch(props, complementar);
</script>

<template>
    <section ref="corpo">

    </section>

</template>

<style>
section {
    width: 10vw;
    height: 30vw;
    border: 5px solid gray;
}

section div {
    width: 10vw;
    height: 15vw;
    border-bottom: 5px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>