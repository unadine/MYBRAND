// // listen for auth status changes
auth.onAuthStateChanged(user=>{
  if(user){
    console.log('user logged in',user)
  }else{
    console.log('user logged in',user)
  }
})

const signinForm = document.querySelector('#signform')

if(signinForm){
signinForm.addEventListener('click', (e)=>{
  e.preventDefault();
    const email = signinForm['signin-email'].value;
    const password = signinForm['signin-password'].value;

    //signin users
    auth.signInWithEmailAndPassword(email, password).then(cred=>{
        console.log(cred)
        window.location.href="../MYBRAND/Admin/create.html";
        signinForm.reset();
    }).catch(error => {
        switch (error.code) {
           case 'auth/user-not-found':
            alert('wrong email and password')
             break;
           case 'auth/weak-password':
            alert('Password is not strong enough. Add additional characters including special characters and numbers.');
             break;
           default:
             console.log(error.message);
             break;
         }
     });
})
}
