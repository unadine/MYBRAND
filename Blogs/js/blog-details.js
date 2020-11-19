let id=location.hash.slice(1);

    const renderArticle=((article) =>{
    const title=document.querySelector('#blogTitle');
    const author=document.querySelector('#blogauthor');
    const content=document.querySelector('#blogContent');
    const picture=document.querySelector('#blogPicture');
    title.textContent=article.title;
    content.textContent=article.body;
    author.textContent=article.author;
    picture.src = article.picture;
});

db.collection('articles').doc(id).get().then((article)=>{
    renderArticle(article.data());
}) 

//comments of the blog post

const form = document.querySelector('#commentForm');

form.addEventListener('submit', (e)=>{
          e.preventDefault();
         
            db.collection('comments').add({
              commentId: id,
              name: form.name.value,
              comment: form.comment.value
              
          })
          form.name.value='';
          form.comment.value=''
          
          })

          //reading comments

          function renderComments(doc){
            let div = document.querySelector('#comments');
            let div2 = document.querySelector('.commentor');
            let name = document.createElement('div')
            let comment = document.createElement('div')
            let hr = document.createElement('hr')

            div.setAttribute('comment-id', doc.id);
            name.textContent = doc.data().name;
            comment.textContent = doc.data().comment;
            name.style.fontWeight="bold";
            comment.style.fontSize="15px";
    
            div.appendChild(name);
            div.appendChild(comment)
            div.appendChild(hr)
           
        }
        
        
        db.collection('comments').get().then((snapshot)=>{
            
            snapshot.docs.forEach(doc=>{
                if(doc.data().commentId == id){
                    renderComments(doc);
                }
             
            })
        })






