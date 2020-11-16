const article = document.querySelector('#retrieve-article');
const art = document.querySelector('#article-detail');

function renderArticle(doc){
    let div = document.querySelector('#retrieve-article');
    let a = document.createElement('a');
    let tit = document.createElement('h2');
    let author = document.createElement('h4');
    // let summary = document.createElement('p');
    let image = document.createElement('img');
    let btn = document.createElement('button');
    let  hr= document.createElement('hr');
    
    div.setAttribute('article-id', doc.id);
    tit.textContent = doc.data().title;
    author.textContent = doc.data().author;
    // summary.textContent = doc.data().body;
    image.src =  doc.data().picture;
    btn.textContent='view more';
    
     div.appendChild(image);
     div.appendChild(tit);
     div.appendChild(author);
    //  div.appendChild(summary);
    tit.style.fontWeight="bold";
  
    author.style.fontStyle="italic";
   
     div.appendChild(btn);
     
     div.appendChild(hr);
     
    btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        let id=e.target.parentElement.getAttribute('article-id');
         window.location.href=`blog-details.html#${doc.id}`;
        
    })
}

db.collection('articles').get().then((snapshot)=>{
    snapshot.docs.forEach(doc=>{
     renderArticle(doc);
    })
})


























// const msg_section= document.querySelector('#message-list1');
// const myform = document.querySelector('#form1')
// // appending the list 
// function renderComment(doc){
//     let li= document.createElement('li');
//     let name=document.createElement('div');
//     let comment=document.createElement('div');
//     li.setAttribute('data-id', doc.id);
//     name.textContent= doc.data().username;
//     comment.textContent= doc.data().comment;
//      name.style.fontWeight="bold";
//      comment.style.fontSize="15px";
//       li.appendChild(name);
//       li.appendChild(comment);
//     msg_section.appendChild(li);
//   }
//   db.collection('comments').get().then((snapshot)=>{
//          snapshot.docs.forEach(doc => {
            
//           renderComment(doc);

//           });
//           });
//         //   saving data
//        myform.addEventListener('submit',(e)=>{
//               e.preventDefault();
//                   db.collection('comments').add({
//                        username: myform.name.value,
//                        comment: myform.comment.value
//                   });
//                   myform.reset();       
//        });