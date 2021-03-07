const buttonClick = document.querySelector('.btn');



//Add event listener
buttonClick.addEventListener('click', clickBtn);

function clickBtn(e){
    let color = ["#bfb5b2","#f7347a","#03396c","purple", "brown","#b3cde0","yellow","red",'black',"orange",'#9ca0a0'];
    let randomColor = color[Math.floor(Math.random() * color.length)];
        document.body.style.background = randomColor;
        
    
}