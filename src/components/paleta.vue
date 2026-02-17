<script setup>
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
    corEscolhida: {
        type: String,
        required: true,
        default: '#000000',
    },
    tipoDePaleta: {
        type: String, 
        required: true
    }
})
const corpo = ref(null);

function atualizaPaleta () {
    
    if (!corpo.value) return;

    if (props.tipoDePaleta === 'triade') {
        triade();
    } else if (props.tipoDePaleta === 'complementar') {
        complementar();
    } else if (props.tipoDePaleta === 'monocromatico') {
        monocromatico();
    }
}

function triade() {
    corpo.value.innerHTML = "";
    const meuElemento = document.createElement('div');
    meuElemento.style.backgroundColor = props.corEscolhida;
    meuElemento.innerHTML = props.corEscolhida;
    meuElemento.classList.add('triade');
    corpo.value.appendChild(meuElemento);
    let corRGB = props.corEscolhida.split("");
    corRGB.splice(0, 1); // Remove o #
    let red = converteParaRGB(corRGB.slice(0, 2)); // Um valor númerico;
    let green = converteParaRGB(corRGB.slice(2, 4)); // Um valor númerico;
    let blue = converteParaRGB(corRGB.slice(-2)); // Um valor númerico;
    let hsl = rgbToHsl(red, green, blue); // Retorna um objeto
    hsl.h = hsl.h + 120;
    if (hsl.h > 360) {
        hsl.h = hsl.h - 360;
    }
    let segundaCor = hslToRgb(hsl.h, hsl.s, hsl.l)
    segundaCor = rgbParaHexa(segundaCor[0], segundaCor[1], segundaCor[2]);
    console.log(segundaCor);
    const meuSegundoElemento = document.createElement('div');
    meuSegundoElemento.style.backgroundColor = segundaCor;
    meuSegundoElemento.innerHTML = segundaCor;
    meuSegundoElemento.classList.add('triade');
    corpo.value.appendChild(meuSegundoElemento);
    hsl.h = hsl.h + 120;
    if (hsl.h > 360) {
        hsl.h = hsl.h - 360;
    }
    let terceiraCor = hslToRgb(hsl.h, hsl.s, hsl.l);
    terceiraCor = rgbParaHexa(terceiraCor[0], terceiraCor[1], terceiraCor[2]);
    const meuTerceiroElemento = document.createElement('div');
    meuTerceiroElemento.style.backgroundColor = terceiraCor;
    meuTerceiroElemento.innerHTML = terceiraCor;
    meuTerceiroElemento.classList.add('triade');
    corpo.value.appendChild(meuTerceiroElemento);
    
}
// Retorna um array;
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
    meuElemento.classList.add('complementar');
    corpo.value.appendChild(meuElemento);
    const meuSegundoElemento = document.createElement('div');
    meuSegundoElemento.style.backgroundColor = corOposta;
    meuSegundoElemento.innerHTML = corOposta;
    meuSegundoElemento.classList.add('complementar');
    corpo.value.appendChild(meuSegundoElemento);
    
}
function monocromatico() {
    corpo.value.innerHTML = "";
    let corRGB = props.corEscolhida.split("");
    corRGB.splice(0, 1); // Remove o #
    let red = converteParaRGB(corRGB.slice(0, 2)); // Um valor númerico;
    let green = converteParaRGB(corRGB.slice(2, 4)); // Um valor númerico;
    let blue = converteParaRGB(corRGB.slice(-2)); // Um valor númerico;
    const hsl = rgbToHsl(red, green, blue); // Retorna um objeto

    console.log(hsl);
    
    // Alterar apenas a luminosidade da cor
    
    let primeiroHsl ={...hsl};
    primeiroHsl.l = Math.min(primeiroHsl.l + 30, 100);
    console.log(primeiroHsl);
    let primeiraCor = hslToRgb(primeiroHsl.h, primeiroHsl.s, primeiroHsl.l);
    primeiraCor = rgbParaHexa(primeiraCor[0], primeiraCor[1], primeiraCor[2]);
    const primeiraDiv = document.createElement('div');
    primeiraDiv.classList.add('monocromatico');
    primeiraDiv.style.backgroundColor = primeiraCor;
    primeiraDiv.innerHTML= primeiraCor;

    let segundoHsl ={...hsl};
    segundoHsl.l = Math.min(segundoHsl.l + 15, 100);
    let segundaCor = hslToRgb(segundoHsl.h, segundoHsl.s, segundoHsl.l);
    console.log(segundaCor);
    segundaCor = rgbParaHexa(segundaCor[0], segundaCor[1], segundaCor[2]);
    console.log(segundaCor);
    const segundaDiv = document.createElement('div');
    segundaDiv.classList.add('monocromatico');
    segundaDiv.style.backgroundColor = segundaCor;
    segundaDiv.innerHTML = segundaCor;
    
    const terceiraDiv = document.createElement('div'); 
    terceiraDiv.classList.add('monocromatico');
    terceiraDiv.style.backgroundColor = props.corEscolhida;
    terceiraDiv.innerHTML = props.corEscolhida;

    let quartoHsl ={...hsl};
    quartoHsl.l = Math.max(quartoHsl.l - 15, 0);
    let quartaCor = hslToRgb(quartoHsl.h, quartoHsl.s, quartoHsl.l);
    quartaCor = rgbParaHexa(quartaCor[0], quartaCor[1], quartaCor[2]);
    const quartaDiv = document.createElement('div');
    quartaDiv.classList.add('monocromatico');
    quartaDiv.style.backgroundColor = quartaCor;
    quartaDiv.innerHTML = quartaCor;

    let quintoHsl ={...hsl};
    quintoHsl.l = Math.max(quintoHsl.l - 30, 0);
    let quintaCor = hslToRgb(quintoHsl.h, quintoHsl.s, quintoHsl.l);
    quintaCor = rgbParaHexa(quintaCor[0], quintaCor[1], quintaCor[2]);
    const quintaDiv = document.createElement('div');
    quintaDiv.classList.add('monocromatico');
    quintaDiv.style.backgroundColor = quintaCor;
    quintaDiv.innerHTML = quintaCor;
    

    corpo.value.appendChild(primeiraDiv);
    corpo.value.appendChild(segundaDiv);
    corpo.value.appendChild(terceiraDiv);
    corpo.value.appendChild(quartaDiv);
    corpo.value.appendChild(quintaDiv);
}

watch(props,atualizaPaleta);

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
} // Retorna um número
function rgbParaHexa(r, g, b) {
    let hexa = ['#'];
    switch (Math.floor(r / 16)) {
        case 0:
            hexa.push('0');break;
        case 1:
            hexa.push("1");break;
        case 2:
            hexa.push('2');break;
        case 3:
            hexa.push('3');break;
        case 4:
            hexa.push('4');break;
        case 5:
            hexa.push('5');break;
        case 6:
            hexa.push('6');break;
        case 7:
            hexa.push('7');break;
        case 8:
            hexa.push('8');break;
        case 9:
            hexa.push('9');break;
        case 10:
            hexa.push('a');break;
        case 11:
            hexa.push('b');break;
        case 12:
            hexa.push('c');break;
        case 13:
            hexa.push('d');break;
        case 14:
            hexa.push('e');break;
        case 15:
            hexa.push('f');break;
    }
    switch (r%16) {
        case 0:
            hexa.push('0');break;
        case 1:
            hexa.push("1");break;
        case 2:
            hexa.push('2');break;
        case 3:
            hexa.push('3');break;
        case 4:
            hexa.push('4');break;
        case 5:
            hexa.push('5');break;
        case 6:
            hexa.push('6');break;
        case 7:
            hexa.push('7');break;
        case 8:
            hexa.push('8');break;
        case 9:
            hexa.push('9');break;
        case 10:
            hexa.push('a');break;
        case 11:
            hexa.push('b');break;
        case 12:
            hexa.push('c');break;
        case 13:
            hexa.push('d');break;
        case 14:
            hexa.push('e');break;
        case 15:
            hexa.push('f');break;
    }
    switch (Math.floor(g / 16)) {
        case 0:
            hexa.push('0');break;
        case 1:
            hexa.push("1");break;
        case 2:
            hexa.push('2');break;
        case 3:
            hexa.push('3');break;
        case 4:
            hexa.push('4');break;
        case 5:
            hexa.push('5');break;
        case 6:
            hexa.push('6');break;
        case 7:
            hexa.push('7');break;
        case 8:
            hexa.push('8');break;
        case 9:
            hexa.push('9');break;
        case 10:
            hexa.push('a');break;
        case 11:
            hexa.push('b');break;
        case 12:
            hexa.push('c');break;
        case 13:
            hexa.push('d');break;
        case 14:
            hexa.push('e');break;
        case 15:
            hexa.push('f');break;
    }
    switch (g%16) {
        case 0:
            hexa.push('0');break;
        case 1:
            hexa.push("1");break;
        case 2:
            hexa.push('2');break;
        case 3:
            hexa.push('3');break;
        case 4:
            hexa.push('4');break;
        case 5:
            hexa.push('5');break;
        case 6:
            hexa.push('6');break;
        case 7:
            hexa.push('7');break;
        case 8:
            hexa.push('8');break;
        case 9:
            hexa.push('9');break;
        case 10:
            hexa.push('a');break;
        case 11:
            hexa.push('b');break;
        case 12:
            hexa.push('c');break;
        case 13:
            hexa.push('d');break;
        case 14:
            hexa.push('e');break;
        case 15:
            hexa.push('f');break;
    }
    switch (Math.floor(b/16)) {
        case 0:
            hexa.push('0');break;
        case 1:
            hexa.push("1");break;
        case 2:
            hexa.push('2');break;
        case 3:
            hexa.push('3');break;
        case 4:
            hexa.push('4');break;
        case 5:
            hexa.push('5');break;
        case 6:
            hexa.push('6');break;
        case 7:
            hexa.push('7');break;
        case 8:
            hexa.push('8');break;
        case 9:
            hexa.push('9');break;
        case 10:
            hexa.push('a');break;
        case 11:
            hexa.push('b');break;
        case 12:
            hexa.push('c');break;
        case 13:
            hexa.push('d');break;
        case 14:
            hexa.push('e');break;
        case 15:
            hexa.push('f');break;
    }
    switch (b%16) {
        case 0:
            hexa.push('0');break;
        case 1:
            hexa.push("1");break;
        case 2:
            hexa.push('2');break;
        case 3:
            hexa.push('3');break;
        case 4:
            hexa.push('4');break;
        case 5:
            hexa.push('5');break;
        case 6:
            hexa.push('6');break;
        case 7:
            hexa.push('7');break;
        case 8:
            hexa.push('8');break;
        case 9:
            hexa.push('9');break;
        case 10:
            hexa.push('a');break;
        case 11:
            hexa.push('b');break;
        case 12:
            hexa.push('c');break;
        case 13:
            hexa.push('d');break;
        case 14:
            hexa.push('e');break;
        case 15:
            hexa.push('f');break;
    }
    return hexa.join("");
}
// Retorna uma string
function rgbToHsl(r, g, b) {
    // 1. Normalizar os valores RGB para o intervalo [0, 1]
    r /= 255, g /= 255, b /= 255;
    
    // 2. Encontrar os valores máximos e mínimos
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    // 3. Calcular saturação e matiz
    if (max == min) {
        h = s = 0; // Acromático (cinza)
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    // 4. Retornar os valores (h: 0-360, s: 0-100%, l: 0-100%)
    return {
        h: Math.min(Math.round(h * 360), 360),
        s: Math.min(Math.round(s * 100), 100),
        l: Math.min(Math.round(l * 100), 100)
    };
}
// Retorna um objeto, pqp
function hslToRgb(h, s, l) {
  // Normaliza e limita os valores
  h = ((h % 360) + 360) % 360;
  s = Math.min(100, Math.max(0, s)) / 100;
  l = Math.min(100, Math.max(0, l)) / 100;

  const chroma = s * Math.min(l, 1 - l);

  const hueToRgb = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - chroma * Math.max(
      -1,
      Math.min(k - 3, Math.min(9 - k, 1))
    );
    return Math.round(color * 255);
  };

  return [
    hueToRgb(0), // R
    hueToRgb(8), // G
    hueToRgb(4)  // B
  ];
}
// Retorna um array

</script>

<template>
    <section ref="corpo">

    </section>

</template>

<style>
section {
    width: 10vw;
    height: 30.2vw;
    border: 5px solid gray;
}

section div {
    border-bottom: 2px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
        width: 10vw;

}
section div.complementar {
    height: 15vw;
}
section div.triade {
    height: 10vw;
}
section div.monocromatico {
    height: 5.99vw;
}
</style>