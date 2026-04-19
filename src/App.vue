<script setup>
import { ref } from 'vue'
import formulario from './components/form.vue'
import paleta from './components/paleta.vue'

let cor = ref('')
const tipoDePaletas = ref('')

const pegaCor = (corEscolhida) => {
  cor.value = corEscolhida
}
const pegaPaleta = (paletaEscolhida) => {
  tipoDePaletas.value = paletaEscolhida
}
</script>

<template>
  <div class="main-container">
    <div class="content-wrapper">
      <header class="header">
        <h1>Gerador de Cores</h1>
        <p>Escolha uma cor base e suas combinações</p>
      </header>

      <main class="maior">
        <formulario @enviarCor="pegaCor" @enviarTipoDePaleta="pegaPaleta" />
        <paleta :corEscolhida="cor" :tipoDePaleta="tipoDePaletas"></paleta>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Container que ocupa a tela toda com um degradê suave */
.main-container {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: background 0.5s ease;
}

.content-wrapper {
  width: 90%;
  max-width: 1200px;
  margin: 40px auto;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
}

main.maior {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px); /* Efeito de vidro */
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
}

@media (max-width: 768px) {
  main.maior {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .header h1 {
    font-size: 1.8rem;
  }
}
</style>
