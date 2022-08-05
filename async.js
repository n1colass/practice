const url = 'https://jsonplaceholder.typicode.com/users/1';

async function getData(url,key) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[`${key}`]);
}

//getData(url,'phone');

const select = document.querySelector('.dropdown__select');
const options = document.querySelector('.dropdown__options');
const arrow = document.getElementById('arrow');
let displayText = document.querySelector('.dropdown__select-text');

select.addEventListener("click", () => {
    options.classList.toggle('active');
    arrow.classList.toggle('rotate');
});

document.querySelectorAll('.dropdown__options-item').forEach( item => {
    item.addEventListener('click', ()=> {
        options.classList.remove('active');
        arrow.classList.remove('rotate');
        let text = item.querySelector('.dropdown__options-item-text').innerText;
        displayText.innerText = text;
        getData(url,text.toLowerCase());
    });
    
});