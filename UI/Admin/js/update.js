let id=location.hash.slice(1);

function renderArticle(article){
    const title=document.querySelector('#title');
    const summary=document.querySelector('#author');
    const content=document.querySelector('#content');
    title.value=article.title;
    content.value=article.body;
    summary.value = article.author;
}

db.collection('articles').doc(id).get().then((article)=>{
    renderArticle(article.data());
}) 

const myform=document.querySelector('#addArticle');
myform.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('articles').doc(id).update({
            body: form.body.value,
            author: form.author.value,
            title: form.title.value
    }).then(function(){
        alert('updated successfully')
    })

    myform.reset()
})