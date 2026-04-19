import { hexaParaRGB, rgbParaHexa, rgbToHsl, hslToRgb } from '@/utils.js'

export function usePaleta() {
  function triade(arr, corPrincipal) {
    let corMaisClara = rgbToHsl(...hexaParaRGB(corPrincipal))
    let corLetraClara = 'black'
    if (corMaisClara.l < 50) {
      corLetraClara = 'white'
    }
    corMaisClara.h += 120
    corMaisClara.h = Math.min(corMaisClara.h, 360)
    corMaisClara = rgbParaHexa(...hslToRgb(corMaisClara.h, corMaisClara.s, corMaisClara.l))
    arr.push({ corFundo: corMaisClara, corLetra: corLetraClara })

    let corLetraPrin = 'black'
    if (rgbToHsl(...hexaParaRGB(corPrincipal)).l < 50) {
      corLetraPrin = 'white'
    }
    arr.push({ corFundo: corPrincipal, corLetra: corLetraPrin })

    let corMaisEscura = rgbToHsl(...hexaParaRGB(corPrincipal))
    let corLetraEscura = 'black'
    corMaisEscura.h = corMaisEscura.h - 120
    corMaisEscura.h = Math.max(corMaisEscura.h, 0)
    if (corMaisEscura.l > 50) {
      corLetraEscura = 'white'
    }
    corMaisEscura = rgbParaHexa(...hslToRgb(corMaisEscura.h, corMaisEscura.s, corMaisEscura.l))
    arr.push({ corFundo: corMaisEscura, corLetra: corLetraEscura })
    return arr
  }
  // Retorna um array;
  function complementar(arr, corPrincipal) {
    let corOposta = rgbToHsl(...hexaParaRGB(corPrincipal))
    let letracorOposta = 'black'
    if (corOposta.l < 50) {
      letracorOposta = 'white'
    }
    corOposta.h += 180
    if (corOposta.h > 360) {
      corOposta.h = corOposta.h % 360
    }
    corOposta = rgbParaHexa(...hslToRgb(corOposta.h, corOposta.s, corOposta.l))
    arr.push({ corFundo: corOposta, corLetra: letracorOposta })

    let corLetraPrin = 'black'
    if (rgbToHsl(...hexaParaRGB(corPrincipal)).l < 50) {
      corLetraPrin = 'white'
    }
    arr.push({ corFundo: corPrincipal, corLetra: corLetraPrin })
    return arr
  }
  function monocromatico(arr, corPrincipal) {
    for (let i = 1; i <= 2; i++) {
      let corLetra = 'black'
      let corMaisClara = rgbToHsl(...hexaParaRGB(corPrincipal))
      corMaisClara.l += 10 * i
      corMaisClara.l = Math.min(100, corMaisClara.l)
      if (corMaisClara.l < 50) {
        corLetra = 'white'
      }
      corMaisClara = rgbParaHexa(...hslToRgb(corMaisClara.h, corMaisClara.s, corMaisClara.l))
      arr.push({ corFundo: corMaisClara, corLetra: corLetra })
    }
    let corLetraPrin = 'black'
    if (rgbToHsl(...hexaParaRGB(corPrincipal)).l < 50) {
      corLetraPrin = 'white'
    }
    arr.push({ corFundo: corPrincipal, corLetra: corLetraPrin })

    for (let i = 1; i <= 2; i++) {
      let corMaisEscura = rgbToHsl(...hexaParaRGB(corPrincipal))
      let corLetra = 'black'
      corMaisEscura.l -= 10 * i
      corMaisEscura.l = Math.max(0, corMaisEscura.l)
      if (corMaisEscura.l < 50) {
        corLetra = 'white'
      }
      console.log(hslToRgb(corMaisEscura.h, corMaisEscura.s, corMaisEscura.l))
      corMaisEscura = rgbParaHexa(...hslToRgb(corMaisEscura.h, corMaisEscura.s, corMaisEscura.l))

      arr.push({ corFundo: corMaisEscura, corLetra: corLetra })
    }
    return arr
  }
  return { triade, monocromatico, complementar }
}
