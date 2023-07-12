let computers = [
    {
        id: 1,
        img : 'asus3.png',
        cpu: 'intel core i7',
        ram: 16,
        rom: 512,
        price: 1500,
    },
    {
        id: 2,
        img : 'asus2.png',
        cpu: 'intel core i7',
        ram: 8,
        rom: 1,
        price: 1200,
    },
]

const cardsSection = document.querySelector('.cards')
const logOutBtn = document.querySelector('.logout')
const logInBtn = document.querySelector('.login')
const registerBtn = document.querySelector('.register')
const header = document.querySelector('header')
const addComp = document.querySelector('.addBtn')
const allInputs = document.querySelectorAll('input')
const modalBtn = document.querySelectorAll('.modal')
const form = document.querySelector('form')

function updateSite() {
    cardsSection.innerHTML = ''

    for(let computer of computers){
        cardsSection.innerHTML += `<div class="card">
        <button id='${computer.id}' class='deleteBtn'>x</button>
        <img src="${computer.img}" alt="">
        <div class="info">
            <p>CPU: ${computer.cpu}</p>
            <p>Ram: ${computer.ram}GB</p>
            <p>SSD: ${computer.rom}GB</p>
            <p>Price: ${computer.price}$</p>
        </div>
        <button class="details">Details</button>
    </div>`
    }

    for(let input of allInputs){
        input.value = ''
    }
}

updateSite()

function addComputer(e) {
    e.preventDefault()
    let newComputer = {
        id: computers.at(-1).id + 1,
        img: allInputs [4].value,
        cpu: allInputs[0].value,
        ram: allInputs [1].value,
        rom: allInputs [2].value,
        price: allInputs [3].value
    }
    computers.push(newComputer)
    updateSite()

    form.style = 'transform: scale(0)'
}

function deleteComputer (id) {
    computers = computers.filter (comp => comp.id !== id)

    updateSite()
}

header.addEventListener('click', (e) => {
    if(e.target.innerHTML === 'Log in' || e.target.innerHTML === 'Register'){
        logInBtn.style.display = 'none'
        registerBtn.style.display = 'none'
        logOutBtn.style.display = 'inline'
    }

    if(e.target.innerHTML === 'Log out'){
        logInBtn.style.display = 'inline'
        registerBtn.style.display = 'inline'
        logOutBtn.style.display = 'none'
    }
})

function handleClick(e){
    if (e.target.innerHTML === 'x') {
        deleteComputer(Number(e.target.id))
    }
}

addComp.addEventListener('click', addComputer)

cardsSection.addEventListener('click', handleClick)

modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        form.style.transform = 'scale(1)'
    })
})