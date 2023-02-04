const login=document.getElementById('login');
const signup=document.getElementById('signup');
const signupcheckbox=document.getElementById('signupcheckbox');
const passwordsignup=document.getElementById('passwordsignup');
const onboard =document.getElementById("onboard");
const successnext=document.getElementById("success-next");
signupcheckbox.addEventListener('click',()=>
{
    if(passwordsignup.type==="password")
    passwordsignup.type="text";
    else
    passwordsignup.type="password";
});
