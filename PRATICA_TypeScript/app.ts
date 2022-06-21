console.log('okkk')

let Button = document.getElementById('btn')
let input1 = document.getElementById('input1') as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement

function soma(n1: number, n2: number) {
  return n1 + n2
}

Button?.addEventListener('click', () => {
  console.log(soma(Number(input1.value), Number(input2.value)))
})
