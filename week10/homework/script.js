var toggleAssistClick=function(){
    if(document.getElementById("toggleAssist").checked){
        document.getElementById("hamburgerIcon").src="./images/x.png";
    }
    else{
        document.getElementById("hamburgerIcon").src="./images/hamburger-flat-icon.png";
    }
}
var cat1Click=function(){
    document.getElementById("mainImage").src="./images/cat1.png";
}
var cat2Click=function(){
    document.getElementById("mainImage").src="./images/cat2.png";
}
var cat3Click=function(){
    document.getElementById("mainImage").src="./images/cat3.png";
}
var cat4Click=function(){
    document.getElementById("mainImage").src="./images/cat4.png";
}

document.getElementById("toggleAssist").addEventListener("click", toggleAssistClick);

document.getElementById("cat1").addEventListener("click", cat1Click);
document.getElementById("cat2").addEventListener("click", cat2Click);
document.getElementById("cat3").addEventListener("click", cat3Click);
document.getElementById("cat4").addEventListener("click", cat4Click);