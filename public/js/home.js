const flashClose=document.getElementById("flash-close");
const successFlash=document.getElementById("success-flash");
const loadinganimation=document.getElementById("loading-animation");
const postContainer = document.getElementById("post-container");
const postLimit = 99;
const postIncrease = 9;
const pageCount = Math.ceil(postLimit / postIncrease);
let currentPage = 1;
  const addPosts = (pageIndex) => {
    currentPage = pageIndex;
    const startRange = (pageIndex - 1) * postIncrease;
    const endRange = currentPage == pageCount ? postLimit : pageIndex * postIncrease;
    for (let i = startRange + 1; i <= endRange; i++) {
        const post= document.createElement("div");
        post.className = "post";
        postContainer.appendChild(post);
    }
    loadinganimation.style.opacity="0";
  };
window.addEventListener("scroll",()=>
{
 const {scrollTop,scrollHeight,clientHeight} = document.documentElement;
 if(clientHeight + scrollTop >= scrollHeight - 5)
 {
    showloading();
 }
});
function showloading(){
    loadinganimation.style.opacity="1";
    setTimeout(addPosts(currentPage+1),1000);
}

window.onload = function () {
    addPosts(currentPage);
  };
flashClose.addEventListener("click",()=>
{
  successFlash.style.display="none";
});
