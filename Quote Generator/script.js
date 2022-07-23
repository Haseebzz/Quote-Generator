const anime = document.getElementById('anime');
const quote = document.getElementById('quote');
const character = document.getElementById('character');
const btn = document.getElementById('generate');
let colors = ['red','orange','yellow','green','blue','indigo','violet'];
//Red, orange, yellow, green, blue, indigo, violet.
btn.addEventListener('click', getQuote);



async function getQuote(){
    let x = Math.floor(Math.random()*colors.length);
    let url = 'https://animechan.vercel.app/api/random';
    let res = await fetch(url);
    let resData = await res.json();
    anime.innerText = resData.anime;
    quote.innerText = resData.quote;
    character.innerText = '-'+resData.character;
    document.body.style.backgroundColor = colors[x];
}