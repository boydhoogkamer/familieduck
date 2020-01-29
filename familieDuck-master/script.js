// alle plaatjes van de duckfamilie in een array
const plaatjes  = document.querySelectorAll('.duck img');
const bolletjes = document.getElementById('bolletjes');
const likeButton = document.getElementsByClassName('like');

// hoogte gelijkmaken aan de eerste sectie
document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('duck')[0].clientHeight +'px';

for(let i=0; i<plaatjes.length; i++) {
    plaatjes[i].addEventListener('mouseenter', vulKopAan);
    plaatjes[i].addEventListener('mouseleave', resetKop);
    plaatjes[i].addEventListener('click', onClick);
    plaatjes[i].addEventListener('dblclick', dblClick);
    likeButton[i].addEventListener('click', onClickP);
    // hier kun je nog 2 events aan toevoegen: click en dblclick
}

function vulKopAan() {
    document.getElementById('duck').innerText = ": "+this.title;
    document.getElementById('kop').style.color  = this.dataset.kleur;
}

function resetKop() {
    document.getElementById('duck').innerText = "";
    document.getElementById('kop').style.color  = 'red';
}

function onClick() {
    this.style.border = 'solid 3px ' + this.dataset.kleur;
    document.getElementById('titel').innerHTML = this.title;
    document.getElementById('titel').style.color = this.dataset.kleur;
    document.getElementById('informatie').innerHTML = this.dataset.info;
    document.getElementById('info').style.border = 'solid 3px ' + this.dataset.kleur;
}

function dblClick() {
    this.dataset.clicks++
    this.nextSibling.innerHTML = this.dataset.clicks;
    var div = document.createElement("DIV");
    var divbol = document.createElement("DIV");
    divbol.setAttribute("id", "bolletje");
    divbol.style.backgroundColor = this.dataset.kleur;
    div.appendChild(divbol);
    document.getElementById("bolletjes").appendChild(div);
}

function onClickP() {
    this.previousSibling.dataset.clicks++
    this.innerHTML = this.previousSibling.dataset.clicks;
}
