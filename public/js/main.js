let titre = document.querySelector('.titre')
let nav = document.querySelector('nav')
let navListe = document.querySelector('.navListe')
let liens = nav.querySelectorAll('a')
let sectionUne = document.querySelector(".sectionRecent_product")
let child = sectionUne.querySelectorAll('.child')
let addCart = sectionUne.querySelectorAll('.black')
let viewArticle = sectionUne.querySelectorAll('.red')
let imageProduct = sectionUne.querySelectorAll('img')
let whiteBlack = document.querySelector('.white_black')
let sombre = whiteBlack.querySelector('.black')
let clair = whiteBlack.querySelector('.white')
let header = document.querySelector('header')
let sectionHeader = header.querySelector('.section_header')
let bolderSection = document.querySelector('.bolder')
let troisGrosBlock = document.querySelector('.troisCadre')
let divTroisGrosBlock = troisGrosBlock.querySelectorAll('div')
sombre.addEventListener('click', ()=>{
    document.body.style.backgroundColor="black"
    header.style.backgroundColor="black"
    nav.style.backgroundColor="black"
    nav.style.color ="white"
    navListe.style.backgroundColor="black"
    liens.forEach(element=>{
        element.style.color="white"
        clair.style.backgroundColor="white"
    })
    sombre.style.border="1px solid red"
    sectionHeader.style.backgroundColor="black" 
    sectionHeader.style.border="5px red solid" 
    bolderSection.style.color="white"
    divTroisGrosBlock.forEach(element=>{
        element.style.border="10px solid black"
    })
})
clair.addEventListener('click', ()=>{
    document.body.style.backgroundColor= "white"
    header.style.backgroundColor="white"
    nav.style.backgroundColor="white"
    nav.style.color ="black"
    navListe.style.backgroundColor="white"
    liens.forEach(element=>{
        element.style.color="black"
    })
    sombre.style.border="transparent"
    sombre.style.border="transparent"
    sectionHeader.style.backgroundColor="#F3F3F3" 
    sectionHeader.style.border="transparent" 
    bolderSection.style.color="black"
    divTroisGrosBlock.forEach(element=>{
        element.style.border="10px solid white"
    })

})

window.addEventListener("scroll", () => {
    if (window.scrollY > 270) {
        navListe.prepend(titre)
        navListe.style.position = "fixed"
        navListe.style.backgroundColor="white"
        navListe.style.zIndex=2
    } else if (window.scrollY < 270) {
        nav.prepend(titre)
        navListe.style.position = "relative"
    }

})
addCart.forEach(element => {
    element.addEventListener('click', () => {
        alert('Element ajouté a au pannier ! ')
    })
})
viewArticle.forEach(element => {
    element.addEventListener('click', () => {
        alert('Nous sommes desolé , la page est en maintenance')
    })
})

let carrousel = document.querySelector('.carrousel')
let btnGauche = carrousel.querySelector('#gauche')
let btndroit = carrousel.querySelector('#droite')
let btnMilieuGauche = carrousel.querySelector('#milieu_gauche')
let btnMilieuDroit = carrousel.querySelector('#milieu_droite')
let image1 = document.createElement('img')
let image2 = document.createElement('img')
let image3 = document.createElement('img')
let image4 = document.createElement('img')
let image5 = document.createElement('img')
let image6 = document.createElement('img')
let image7 = document.createElement('img')
let image8 = document.createElement('img')
let image9 = document.createElement('img')
let image10 = document.createElement('img')
image1.src = "../../public/img/products_mini/product-luxry-sofa.jpg"
image2.src = "../../public/img/products_mini/product-gloves.jpg"
image3.src = "../../public/img/products_mini/product-cups.jpg"
image4.src = "../../public/img/products_mini/product-bag.jpg"
image5.src = "../../public/img/products_mini/product-tshitr.jpg"
image6.src = "../../public/img/products_mini/product-plates.jpg"
image7.src = "../../public/img/products_mini/product-modern-sofa.jpg"
image8.src = "../../public/img/products_mini/product-bed.jpg"
image9.src = "../../public/img/products_mini/product-shoes.jpg"
let parentCarrousel = carrousel.querySelector('.parent')
let case1 = document.querySelector('.case1')
let case2 = document.querySelector('.case2')
let case3 = document.querySelector('.case3')
let case4 = document.querySelector('.case4')
 case1.innerHTML=child[0].innerHTML
 case2.innerHTML=child[1].innerHTML
 case3.innerHTML=child[2].innerHTML
 case4.innerHTML=child[3].innerHTML
 let hoverCase = parentCarrousel.querySelectorAll('.hover')
 hoverCase.forEach(element=>{
     element.remove()
 })

let a = 4
btndroit.addEventListener('click', () => {
    if(a>8) {
        a=0
    }
    let variable ; 
    case1.innerHTML= variable
    case1.innerHTML = case2.innerHTML
    case2.innerHTML = case3.innerHTML
    case3.innerHTML = case4.innerHTML
    case4.innerHTML =child[a].innerHTML
 a++
     case1.style.animation = "lancerGauche .3s ease"
    setTimeout(() => {
   case1.style.animation = ""
    }, 200);
})
btnMilieuDroit.addEventListener('click', () => {
    if(a>8) {
        a=0
    }
    let variable ; 
    case1.innerHTML= variable
    case1.innerHTML = case2.innerHTML
    case2.innerHTML = case3.innerHTML
    case3.innerHTML = case4.innerHTML
    case4.innerHTML =child[a].innerHTML
    console.log(a)
 a++
     case1.style.animation = "lancerGauche .3s ease"
    setTimeout(() => {
   case1.style.animation = ""
    }, 200);
})
btnMilieuGauche.addEventListener('click', () => {
    if(a>8) {
        a=0
    }
    let variable ; 
    case1.innerHTML= variable
    case1.innerHTML = case2.innerHTML
    case2.innerHTML = case3.innerHTML
    case3.innerHTML = case4.innerHTML
    case4.innerHTML =child[a].innerHTML
    console.log(a)
 a++
     case1.style.animation = "lancerGauche .3s ease"
    setTimeout(() => {
   case1.style.animation = ""
    }, 200);
})
btnGauche.addEventListener('click', () => {

    case1.style.animation = "lancerDroit 1.5s ease-out"
    case2.style.animation = "lancerDroit 1.6s ease-out"
    case3.style.animation = "lancerDroit 1.7s ease-out"
    case4.style.animation = "lancerDroit 1.8s ease-out"

    setTimeout(() => {
    case1.style.animation = ""
    }, 700)

})

// CREATION CARROUSEL RESPONSIVE 

let grosseDiv = document.querySelector('.inscriptionDiv')
let inscriptionBtn = document.querySelector('.inscriptionBtn')
let connexionbtn2 = document.querySelector('.btn1_connexion')
let confirmDiv = document.querySelector('.inscription')
let quitterInscription = document.querySelector('.quitter')
let connexion = document.querySelector('.connexion')
connexion.addEventListener('click', ()=>{
    grosseDiv.style.display="block"
    document.body.className = ' stop-scrolling'

})
document.body.classList.remove('stop-scrolling')
quitterInscription.addEventListener('click', ()=>{
    grosseDiv.style.display="none"
    document.body.className=""
})
inscriptionBtn.addEventListener('click', ()=>{
   confirmDiv.style.display="inline"
})
connexionbtn2.addEventListener('click', ()=>{
    confirmDiv.style.display="none"
})
let monUl = document.querySelector('.monUl')
mesLi = monUl.querySelectorAll('li')
let ecran = screen.width
let burger = document.querySelector('.burger')
burger.addEventListener("click", ()=>{ 
            monUl.classList.toggle('monUlBurger')
        })






