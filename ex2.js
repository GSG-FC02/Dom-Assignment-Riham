const btn=document.querySelector('button')
btn.addEventListener('click',getAttributes)
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