const button=document.getElementById("disp");
const justcomm=document.getElementById("justcomm");
const allcomm=document.getElementById("box");
const likes=document.querySelectorAll(".like");
const trans=document.getElementById("h2trans");
const backtop=document.getElementById("backtop");
button.addEventListener("click",()=>
{
    button.style.visibility="hidden";
    justcomm.style.display="block";
    allcomm.style.display="block";
    trans.style.right="-4px";
    backtop.style.display="block";
});
likes.forEach(like=>
    {
        like.addEventListener("click",()=>
        {
            like.classList.toggle("toggleclasslike");
        })
    })
const cancel=document.getElementById("cancel");
cancel.addEventListener("click",()=>                         
{     
    allcomm.style.display="none";
    justcomm.style.display="none";
    button.style.visibility="visible"; 
    trans.style.right="100px";
    backtop.style.display="none";
});
const yourcommcancel=document.getElementById("yourcommcancel");
const yourcomm=document.getElementById("yourcomm");
const anchortagcancel=document.getElementById("anchortagcancel");
const h3=document.getElementById("h3");
const addComment=document.getElementById("addComment");
yourcommcancel.addEventListener("click",()=>
{
   yourcomm.style.display="none";
   cancel.style.bottom="0.5em";
   anchortagcancel.setAttribute("href","#commall");
   h3.style.right="3em";
   addComment.style.display="inline";
   cancel.style.marginLeft="-8em";
   cancel.style.top="0.05em";
});
addComment.addEventListener("click",()=>
{
    yourcomm.style.display="block";
    anchortagcancel.setAttribute("href","#yourcomm");
    h3.style.right="4em";
    cancel.style.marginLeft="0";
    addComment.style.display="none";
})
const nightmode=document.getElementById("nightmode");
const moon=document.getElementById("moon");
let n=1;
moon.addEventListener("click",()=>
{
    if(n%2!==0)
    {
        nightmode.textContent="sunny";
        moon.style.color="black";
        moon.style.backgroundColor="white";
        n++;
    }
   else{
    nightmode.textContent="bedtime";
    moon.style.color="white";
    moon.style.backgroundColor="#333333";
    n++;
   }
});
const thumbsup=document.getElementById("thumbsup");
const thumbsdown=document.getElementById("thumbsdown");
let a=0;
let b=0;
thumbsup.addEventListener("click",()=>
{
    if(b===0&&a===0)
   {
    a=1;
    thumbsup.classList.toggle("toggleclassup");
   }
   else if(b===0&&a===1)
   {
    a=0;
    thumbsup.classList.toggle("toggleclassup");
   }
   else if(b===1)
    {
     b=0;
     thumbsup.classList.toggle("toggleclassup");
     thumbsdown.classList.toggle("toggleclassdown");
     a=1;
    }
});
thumbsdown.addEventListener("click",()=>
{
   if(a===0&&b===0)
   {
    b=1;
    thumbsdown.classList.toggle("toggleclassdown");
   }
   else if (a===0&&b===1)
   {
    b=0;
    thumbsdown.classList.toggle("toggleclassdown");
   }
   else if(a===1)
   {
    a=0;
    thumbsdown.classList.toggle("toggleclassdown");
    thumbsup.classList.toggle("toggleclassup");
    b=1;
   }
});
const options=document.getElementById("options");
const addicon=document.getElementById("options").getElementsByClassName("material-symbols-outlined")[0];
let x=1;
options.addEventListener("click",()=>
{
    if(x%2!==0)
    {
        options.style.width="10em";
        options.style.justifyContent="flex-start";
        options.style.opacity="1";
        options.style.borderWidth="2px";
        addicon.style.opacity="1";
        x++;
    }
    else
    {
    options.style.width="2.5em";
    options.style.borderWidth="1.5px";
    options.style.opacity="0.6";
    addicon.style.opacity="0.6";
    options.style.justifyContent="center";
    x++;
    }
});
const discover=document.getElementById("discover");
discover.addEventListener("mousedown",()=>
{
   discover.style.backgroundColor="grey";
});
discover.addEventListener("mouseup",()=>
{
    discover.style.backgroundColor="white";
});
discover.addEventListener("mouseleave",()=>
{
    discover.style.backgroundColor="black";
});
discover.addEventListener("mouseenter",()=>
{
    discover.style.backgroundColor="white";
});
const login=document.getElementById("login");
const loginmodal=document.getElementById("loginmodal");
const closemodal=document.getElementById("closemodal");
const modalgo=document.getElementById("modalgo");
login.addEventListener("click",()=>
{
    loginmodal.showModal();
});
closemodal.addEventListener("click",()=>
{
    loginmodal.close();
});
modalgo.addEventListener("click",()=>
{
    loginmodal.close();
});
const signup=document.getElementById("signup");
const signupmodal=document.getElementById("signupmodal");
const loginsignup=document.getElementById("loginsignup");
loginsignup.addEventListener("click",()=>
{
    loginmodal.close();
    signupmodal.showModal();
})
signup.addEventListener("click",()=>
{
    signupmodal.showModal();
})
const closemodalsignup=document.getElementById("closemodalsignup");
closemodalsignup.addEventListener("click",()=>
{
    signupmodal.close();
})
const signuplogin=document.getElementById("signuplogin");
signuplogin.addEventListener("click",()=>
{
    signupmodal.close();
    loginmodal.showModal();
})


const optionsforscroll=
{
    rootMargin:"0px",
    threshold:0.5
};
const observer=new IntersectionObserver(scrollInstersect,optionsforscroll);
likes.forEach(x=>
    {
        observer.observe(x);
    })
function scrollInstersect(entries,observer)
{
  entries.forEach(entry=>
    {
      if(!entry.isIntersecting)
      {
        
      }
      else if(entry.isIntersecting)
      {
       
      }
    })
}
