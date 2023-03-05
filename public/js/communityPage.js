const inclusiveStatus= document.getElementById("community-inclusive-status");
var inclusiveTemp;
inclusiveStatus.addEventListener("mouseenter",()=>
{
    if(inclusiveStatus.innerHTML==="Joined")
    {
        inclusiveTemp="Joined";
        inclusiveStatus.innerHTML="Leave";
    }
});
inclusiveStatus.addEventListener("mouseleave",()=>
{
    inclusiveStatus.innerHTML=inclusiveTemp;
});