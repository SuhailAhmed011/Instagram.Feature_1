let str = document.querySelector("h5");
let btn = document.querySelector("button");

let flag = 0;

btn.addEventListener("click", function(){
    if(flag==0){
    str.innerHTML="Friends";
    str.style.color= 'green';
    btn.innerHTML= 'Unfollow'
    flag = 1;
    
}else{
    str.innerHTML="stranger";
    str.style.color= 'red';
    btn.innerHTML= 'Follow'
    flag = 0;
}

    
})