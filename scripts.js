const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')


for(let card of cards){
    card.addEventListener("click",function(){
        cardId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src =`https://rocketseat.com.br/${cardId}`
    })
}

document.querySelector('.modal_close').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modal.classList.remove("maximized")
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector('.modal_max').addEventListener('click', () => {
    if (modal.classList == "modal"){
        modal.classList.add("maximized")
    }
    else{
        modal.classList.remove("maximized")
    }
})