console.log('Le script est bien changé')

// capter une balsie HTML en JS 
const burgerButton = document.querySelector('.navbar-burger')

//ajouter un ecouteur d'événement 
burgerButton.addEventListener('click , event => {
    console.log('Clic sur le boutton')
})