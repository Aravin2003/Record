const logincheckbox=document.getElementById('logincheckbox');
const passwordlogin=document.getElementById('passwordlogin');
logincheckbox.addEventListener('click',()=>
{
    if(passwordlogin.type==="password")
    passwordlogin.type="text";
    else
    passwordlogin.type="password";
});
