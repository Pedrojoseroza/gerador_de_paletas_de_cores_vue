export function hexaParaRGB(hexa) {
  // Hexadecimal será um array com dois elementos;
  const hexadecimal = hexa.split('')
  hexadecimal.shift() // Remove o #;
  const red = converteLetraParaNumero(hexadecimal.slice(0, 2))
  const green = converteLetraParaNumero(hexadecimal.slice(2, 4))
  const blue = converteLetraParaNumero(hexadecimal.slice(4, 6))
  const rgb = [red, green, blue]
  return rgb
} // Retorna um array
export function rgbParaHexa(r, g, b) {
  let hexa = ['#']
  switch (Math.floor(r / 16)) {
    case 0:
      hexa.push('0')
      break
    case 1:
      hexa.push('1')
      break
    case 2:
      hexa.push('2')
      break
    case 3:
      hexa.push('3')
      break
    case 4:
      hexa.push('4')
      break
    case 5:
      hexa.push('5')
      break
    case 6:
      hexa.push('6')
      break
    case 7:
      hexa.push('7')
      break
    case 8:
      hexa.push('8')
      break
    case 9:
      hexa.push('9')
      break
    case 10:
      hexa.push('a')
      break
    case 11:
      hexa.push('b')
      break
    case 12:
      hexa.push('c')
      break
    case 13:
      hexa.push('d')
      break
    case 14:
      hexa.push('e')
      break
    case 15:
      hexa.push('f')
      break
  }
  switch (r % 16) {
    case 0:
      hexa.push('0')
      break
    case 1:
      hexa.push('1')
      break
    case 2:
      hexa.push('2')
      break
    case 3:
      hexa.push('3')
      break
    case 4:
      hexa.push('4')
      break
    case 5:
      hexa.push('5')
      break
    case 6:
      hexa.push('6')
      break
    case 7:
      hexa.push('7')
      break
    case 8:
      hexa.push('8')
      break
    case 9:
      hexa.push('9')
      break
    case 10:
      hexa.push('a')
      break
    case 11:
      hexa.push('b')
      break
    case 12:
      hexa.push('c')
      break
    case 13:
      hexa.push('d')
      break
    case 14:
      hexa.push('e')
      break
    case 15:
      hexa.push('f')
      break
  }
  switch (Math.floor(g / 16)) {
    case 0:
      hexa.push('0')
      break
    case 1:
      hexa.push('1')
      break
    case 2:
      hexa.push('2')
      break
    case 3:
      hexa.push('3')
      break
    case 4:
      hexa.push('4')
      break
    case 5:
      hexa.push('5')
      break
    case 6:
      hexa.push('6')
      break
    case 7:
      hexa.push('7')
      break
    case 8:
      hexa.push('8')
      break
    case 9:
      hexa.push('9')
      break
    case 10:
      hexa.push('a')
      break
    case 11:
      hexa.push('b')
      break
    case 12:
      hexa.push('c')
      break
    case 13:
      hexa.push('d')
      break
    case 14:
      hexa.push('e')
      break
    case 15:
      hexa.push('f')
      break
  }
  switch (g % 16) {
    case 0:
      hexa.push('0')
      break
    case 1:
      hexa.push('1')
      break
    case 2:
      hexa.push('2')
      break
    case 3:
      hexa.push('3')
      break
    case 4:
      hexa.push('4')
      break
    case 5:
      hexa.push('5')
      break
    case 6:
      hexa.push('6')
      break
    case 7:
      hexa.push('7')
      break
    case 8:
      hexa.push('8')
      break
    case 9:
      hexa.push('9')
      break
    case 10:
      hexa.push('a')
      break
    case 11:
      hexa.push('b')
      break
    case 12:
      hexa.push('c')
      break
    case 13:
      hexa.push('d')
      break
    case 14:
      hexa.push('e')
      break
    case 15:
      hexa.push('f')
      break
  }
  switch (Math.floor(b / 16)) {
    case 0:
      hexa.push('0')
      break
    case 1:
      hexa.push('1')
      break
    case 2:
      hexa.push('2')
      break
    case 3:
      hexa.push('3')
      break
    case 4:
      hexa.push('4')
      break
    case 5:
      hexa.push('5')
      break
    case 6:
      hexa.push('6')
      break
    case 7:
      hexa.push('7')
      break
    case 8:
      hexa.push('8')
      break
    case 9:
      hexa.push('9')
      break
    case 10:
      hexa.push('a')
      break
    case 11:
      hexa.push('b')
      break
    case 12:
      hexa.push('c')
      break
    case 13:
      hexa.push('d')
      break
    case 14:
      hexa.push('e')
      break
    case 15:
      hexa.push('f')
      break
  }
  switch (b % 16) {
    case 0:
      hexa.push('0')
      break
    case 1:
      hexa.push('1')
      break
    case 2:
      hexa.push('2')
      break
    case 3:
      hexa.push('3')
      break
    case 4:
      hexa.push('4')
      break
    case 5:
      hexa.push('5')
      break
    case 6:
      hexa.push('6')
      break
    case 7:
      hexa.push('7')
      break
    case 8:
      hexa.push('8')
      break
    case 9:
      hexa.push('9')
      break
    case 10:
      hexa.push('a')
      break
    case 11:
      hexa.push('b')
      break
    case 12:
      hexa.push('c')
      break
    case 13:
      hexa.push('d')
      break
    case 14:
      hexa.push('e')
      break
    case 15:
      hexa.push('f')
      break
  }
  return hexa.join('')
}
// Retorna uma string
export function rgbToHsl(r, g, b) {
  // 1. Normalizar os valores RGB para o intervalo [0, 1]
  r /= 255
  g /= 255
  b /= 255

  // 2. Encontrar os valores máximos e mínimos
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  var h,
    s,
    l = (max + min) / 2

  // 3. Calcular saturação e matiz
  if (max == min) {
    h = s = 0 // Acromático (cinza)
  } else {
    var d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  // 4. Retornar os valores (h: 0-360, s: 0-100%, l: 0-100%)
  return {
    h: Math.min(Math.round(h * 360), 360),
    s: Math.min(Math.round(s * 100), 100),
    l: Math.min(Math.round(l * 100), 100),
  }
}
// Retorna um objeto, pqp
export function hslToRgb(h, s, l) {
  h = ((h % 360) + 360) % 360
  s = Math.min(100, Math.max(0, s)) / 100
  l = Math.min(100, Math.max(0, l)) / 100

  const c = s * Math.min(l, 1 - l)
  const f = (n) => {
    const k = (n + h / 30) % 12
    return Math.round((l - c * Math.max(-1, Math.min(k - 3, 9 - k, 1))) * 255)
  }

  return [f(0), f(8), f(4)]
}
// Retorna um array
export function converteLetraParaNumero(parLetra) {
  const parNumero = [...parLetra]
  switch (parNumero[0]) {
    case '0':
      parNumero[0] = 0
      break
    case '1':
      parNumero[0] = 1
      break
    case '2':
      parNumero[0] = 2
      break
    case '3':
      parNumero[0] = 3
      break
    case '4':
      parNumero[0] = 4
      break
    case '5':
      parNumero[0] = 5
      break
    case '6':
      parNumero[0] = 6
      break
    case '7':
      parNumero[0] = 7
      break
    case '8':
      parNumero[0] = 8
      break
    case '9':
      parNumero[0] = 9
      break
    case 'a':
      parNumero[0] = 10
      break
    case 'b':
      parNumero[0] = 11
      break
    case 'c':
      parNumero[0] = 12
      break
    case 'd':
      parNumero[0] = 13
      break
    case 'e':
      parNumero[0] = 14
      break
    case 'f':
      parNumero[0] = 15
      break
    default:
      alert('DEU MERDA!')
  }
  parNumero[0] *= 16
  switch (parNumero[1]) {
    case '0':
      parNumero[1] = 0
      break
    case '1':
      parNumero[1] = 1
      break
    case '2':
      parNumero[1] = 2
      break
    case '3':
      parNumero[1] = 3
      break
    case '4':
      parNumero[1] = 4
      break
    case '5':
      parNumero[1] = 5
      break
    case '6':
      parNumero[1] = 6
      break
    case '7':
      parNumero[1] = 7
      break
    case '8':
      parNumero[1] = 8
      break
    case '9':
      parNumero[1] = 9
      break
    case 'a':
      parNumero[1] = 10
      break
    case 'b':
      parNumero[1] = 11
      break
    case 'c':
      parNumero[1] = 12
      break
    case 'd':
      parNumero[1] = 13
      break
    case 'e':
      parNumero[1] = 14
      break
    case 'f':
      parNumero[1] = 15
      break
    default:
      alert('DEU MERDA!')
  }
  return parNumero[0] + parNumero[1]
}
