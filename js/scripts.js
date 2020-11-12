// navigation
const openNav=() =>{
  document.getElementById("navigate").style.width = "100%";
  document.getElementById("navigate").style.height = "100%";
}
const closeNav=() =>{
  document.getElementById("navigate").style.width = "0"; 
}
// sign in
const modal = document.getElementById('signin');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//subscription
const secondform= document.getElementById('secondform');
secondform.addEventListener('submit',(e)=>{
  e.preventDefault();
  const secondemail = document.getElementById('secondemail').value;
   var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   if(secondemail.match(pattern)){
     error3.innerHTML="Valid email";
     error3.style.color="#00ff00";
   }
   else{
    error3.innerHTML="Please Enter Valid email";
     error3.style.color="#FFA07A";
   }
   secondform.reset();
})



