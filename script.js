const buttonClick = document.querySelector('.btn');
const contain = document.querySelector('.container');

//styling

contain.style.textAlign = 'center';

buttonClick.addEventListener('click', clickBtn);

function clickBtn(e){
    let color = ["#03396c","purple","#b3cde0","yellow","red",'black',"orange",'#9ca0a0'];
    let randomColor = color[Math.floor(Math.random() * color.length)];
        document.body.style.background = randomColor;
    
    
}