let count = 0
const countUp = () => {
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数:'　+ count
}
const change = () => {
  const changeElement = document.querySelector('#change')
  changeElement.innerText = 'ゲッツ！'
}
const reset = () => {
  count = 0
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数:'　+ count
}