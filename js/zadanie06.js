const button1 = document.querySelector('#button-1')
const button2 = document.querySelector('#button-2')
const button3 = document.querySelector('#button-3')

const chlebElement = document.createElement('li').innerText = 'chleb'

button1.addEventListener('click', () => {
    document.querySelector('#shopping-list').appendChild(chlebElement)
})
button2.addEventListener('click', () => {
    document.querySelector('#shopping-list').removeChild(document.querySelector('#shopping-list').lastChild)
})
button3.addEventListener('click', () => {
    document.querySelector('#shopping-list').appendChild(document.querySelector('#shopping-list').children[1])
})