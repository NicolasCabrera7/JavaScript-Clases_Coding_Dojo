let likes1 = 0
let likes2 = 0
let likes3 = 0
function darLike(elemento){
    if(elemento === 'likes1'){
        likes1++;
        document.querySelector('#' + elemento).innerHTML = likes1 + ' like(s)';
    }else if(elemento === 'likes2'){
        likes2++;
        document.querySelector('#' + elemento).innerHTML = likes2 + ' like(s)';
    }else if(elemento === 'likes3'){
        likes3++;
        document.querySelector('#' + elemento).innerHTML = likes3 + ' like(s)';
    }
    
}