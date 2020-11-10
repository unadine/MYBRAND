const msg_section= document.querySelector('#message-list3');
const myform = document.querySelector('#form3')
// // appending the list 
function renderComment1(doc){
    let li= document.createElement('li');
    let name=document.createElement('div');
    let comment=document.createElement('div');
    li.setAttribute('data-id', doc.id);
    name.textContent= doc.data().username;
    comment.textContent= doc.data().comment;
     name.style.fontWeight="bold";
     comment.style.fontSize="15px";
      li.appendChild(name);
      li.appendChild(comment);
    msg_section.appendChild(li);
  }
  db.collection('comment2').get().then((snapshot)=>{
         snapshot.docs.forEach(doc => {  
          renderComment1(doc);
          });
          });
        //   saving data
       myform.addEventListener('submit',(e)=>{
              e.preventDefault();
                  db.collection('comment2').add({
                       username: myform.name.value,
                       comment: myform.comment.value
                  });
                  myform.reset();       
       });