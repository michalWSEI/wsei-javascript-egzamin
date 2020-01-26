// Do wszystkich guzików znajdujących się na stronie dopisz event tak, aby po naciśnięciu dowolnego przycisku, w divie o id container pojawił się tekst trzymany w data-text.

const allButtonElement = document.querySelectorAll('button')

allButtonElement.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('#container').innerText = button.attributes['data-text'].value
    })
})