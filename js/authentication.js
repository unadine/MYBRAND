// signup
const signupForm = document.querySelector('#signform');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signemail'].value;
  const password = signupForm['signpassword'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form
    const modal = document.querySelector('#signin');
    // const instance = M.Modal.getInstance(modal);
    // instance.close();
    // M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});