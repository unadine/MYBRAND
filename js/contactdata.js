const msg_section= document.querySelector('#message-list');
const myform = document.querySelector('#form')
function render(doc){
    let li= document.createElement('li');
    let name=document.createElement('div');
    let email=document.createElement('div');
    let message=document.createElement('div');
    li.setAttribute('data-id', doc.id);
    name.textContent= doc.data().username;
    email.textContent= doc.data().email;
     message.textContent= doc.data().message;
     name.style.fontWeight="bold";
     email.style.fontStyle="italic";
     email.style.fontSize="13px";
     email.style.fontWeight="bold";
     message.style.fontSize="15px";
      li.appendChild(name);
      li.appendChild(email);
      li.appendChild(message);
    // msg_section.appendChild(li);
  }
const checkEmail=(input)=>{
  const form = document.getElementById('form');  
  // const email = document.getElementById('email').value;
   var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
   if(input.match(pattern)){
     form.classList.add("valid");
     form.classList.remove("invalid");
     error1.innerHTML="Valid email";
     error1.style.color="#00ff00";
   }
   else{
    form.classList.remove("valid");
    form.classList.add("invalid"); 
    error1.innerHTML="Please Enter Valid email";
     error1.style.color="#FFA07A";
   }
  }
  const checkName=(input,min)=>{
    // const name = document.myform.name.value;
    if(input.value.trim().length>min){
      error.innerHTML="Valid name";
      error.style.color="#00ff00";
    }
    else{
      error.innerHTML="Name must be at least 4 characters long.";
      error.style.color="	#FFA07A"; 
    }
    }
    const checkMessage=(input,min)=>{
      // const message = document.myform.message.value;
      if(input.value.trim().length>min){
        form.classList.add("valid");
        form.classList.remove("invalid");
        error2.innerHTML="Valid message";
        error2.style.color="#00ff00";
        return true;
      }
      else{
       form.classList.remove("valid");
       form.classList.add("invalid"); 
       error2.innerHTML="Message must be at least 10 characters long.";
        error2.style.color="#FFA07A";
        return false;
      }
    }
  db.collection('message').get().then((snapshot)=>{
      snapshot.docs.forEach(doc => {  
       render(doc);
      // console.log(doc.data());
       });
       });
     //   saving data
    myform.addEventListener('submit',(e)=>{
           e.preventDefault();
           if( checkName(name)&& checkEmail(email) && checkMessage(message))
               db.collection('message').add({
                 name: myform.name.value,
                 email: myform.email.value,
                 message: myform.message.value
               });
               myform.reset();    
                
    });
     