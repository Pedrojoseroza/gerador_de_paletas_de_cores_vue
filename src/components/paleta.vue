<script setup>
import { ref, defineProps } from 'vue';
const corDominante = defineProps({
    corEscolhida: {
        type: String,
        required: true
    }
})
const paleta = [corDominante];

</script>
<template>
    <div v-for="cor in paleta"> 
        <div style="background-color: cor;"></div>
    </div>
</template>