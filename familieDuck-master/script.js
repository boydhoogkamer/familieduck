// alle plaatjes van de duckfamilie in een array
let plaatjes  = document.querySelectorAll('.duck img');
let bolletjes = document.getElementById('bolletjes');
let likeButton = document.getElementsByClassName('like');

// hoogte gelijkmaken aan de eerste sectie
document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('duck')[0].clientHeight +'px';

for(let i=0; i<plaatjes.length; i++) {
    plaatjes[i].addEventListener('mouseenter', vulKopAan);
    plaatjes[i].addEventListener('mouseleave', resetKop);
    plaatjes[i].addEventListener('click', onClick);
    likeButton[i].addEventListener('click', onClickP);
}

function vulKopAan() {
    document.getElementById('duck').innerText = ": "+this.title;
    document.getElementById('kop').style.color  = this.dataset.kleur;
    this.style.border = 'solid 7px ' + this.dataset.kleur;
    document.getElementById('titel').innerHTML = this.title;
    document.getElementById('titel').style.color = this.dataset.kleur;
    document.getElementById('informatie').innerHTML = this.dataset.info;
    document.getElementById('info').style.border = 'solid 7px ' + this.dataset.kleur;
}

function resetKop() {
    document.getElementById('duck').innerText = "";
    document.getElementById('kop').style.color  = 'red';
    this.style.border = 'none';
}

function onClick() {
    this.dataset.clicks++
    this.nextSibling.innerHTML = this.dataset.clicks;

    let divbol = document.createElement("DIV");
    divbol.setAttribute("id", "bolletje");
    divbol.style.backgroundColor = this.dataset.kleur;
    document.getElementById("bolletjes").appendChild(divbol);
}

function onClickP() {
    this.previousSibling.dataset.clicks++
    this.innerHTML = this.previousSibling.dataset.clicks;
}