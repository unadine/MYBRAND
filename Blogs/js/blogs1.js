const msg_section= document.querySelector('#message-list1');
const myform = document.querySelector('#form1')
// appending the list 
function renderComment(doc){
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
  db.collection('comments').get().then((snapshot)=>{
         snapshot.docs.forEach(doc => {
            
          renderComment(doc);

          });
          });
        //   saving data
       myform.addEventListener('submit',(e)=>{
              e.preventDefault();
                  db.collection('comments').add({
                       username: myform.name.value,
                       comment: myform.comment.value
                  });
                  myform.reset();       
       });