var r1=Math.random();
r1=r1*6;
r1=Math.floor(r1)+1; //random number between 1-6
var s1="images/dice"+r1+".png";
var image1=document.querySelectorAll("img")[2];
image1.setAttribute("src",s1);

var r2=Math.floor(Math.random()*6)+1;
var s2="images/dice"+r2+".png";
document.querySelectorAll("img")[3].setAttribute("src",s2);

var im="images/excited.gif";
if(r1>r2)
{
    document.querySelector("h1").textContent="Player 1 Wins";
    document.querySelectorAll("img")[0].setAttribute("src",im);
}
else if(r2>r1)
{
    document.querySelectorAll("img")[1].setAttribute("src",im);
    document.querySelector("h1").textContent=" Player 2 Wins";
}
else document.querySelector("h1").innerHTML="Draw!";

document.querySelector("h4").innerHTML="Refresh again!";