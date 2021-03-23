const btn=document.querySelector('button')
 btn.addEventListener('click',changeStyle)
function changeStyle(){
  const para=document.querySelector("p");
  para.style.color='red';
  para.style.font='Impact,Charcoal,sans-serif';
  para.style.fontSize='20px';
  para.style.backgroundColor ='black';
}




