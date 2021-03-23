const btn=document.querySelector('button')
 btn.addEventListener('click',changeStyle)
function changeStyle(){
  const para=document.querySelector("p");
  para.style.color='red';
  para.style.font='Impact,Charcoal,sans-serif';
  para.style.fontSize='20px';
  para.style.backgroundColor ='black';
}



const btn1=document.querySelector('#btn2')
btn1.addEventListener('click',getAttributes)
function getAttributes(){
  const anchor = document.querySelector("a")
   var aType= document.querySelector("#wcc").type;
    console.log(`The value of type attr. is : ` + aType)
        var aHrefLang= document.querySelector("#wcc").hreflang;
   console.log(`The value of hreflang attr. is : `+ aHrefLang)
   var aRel= document.querySelector("#wcc").rel;
   console.log(`The value of rel attr. is : `+aRel)
  var aTarget= document.querySelector("#wcc").target;
  console.log(`The value of target attr. is : `+ aTarget)
  var aHref=document.querySelector("#wcc").href;
   console.log(`The value of href attr. is : `+ aHref)
 }
