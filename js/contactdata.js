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
    msg_section.appendChild(li);
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
               db.collection('message').add({
                 name: myform.name.value,
                 email: myform.email.value,
                 message: myform.message.value
               });
               myform.reset();    
                
    });
     