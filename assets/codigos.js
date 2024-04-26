console.log("Hola aprendiendo a invocar código JS desde HTML");
let btn=document.getElementById("btn");
const body = document.querySelector("body");



btn.addEventListener("click", (e) => {
    
   if(body.classList.contains('dark')){
    body.classList.remove('dark');
    btn.innerHTML="Dark Mode";
   }else{
    body.classList.add('dark');
    btn.innerHTML="Light Mode";

   }
})





// btn.onclick=() => {
//     alert('Hola desde Javascript xd');
// }



