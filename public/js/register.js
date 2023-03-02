
const signupcheckbox=document.getElementById('signupcheckbox');
const passwordsignup=document.getElementById('passwordsignup');
signupcheckbox.addEventListener('click',()=>
{
    if(passwordsignup.type==="password")
    passwordsignup.type="text";
    else
    passwordsignup.type="password";
});