import navbar  from "../componants/navbar.js"

document.querySelector("#navbar").innerHTML=navbar()

import {append3}  from "../componants/fetch.js"

let recipelocal=JSON.parse(localStorage.getItem("itemrecipe")) 

console.log(recipelocal)

let container=document.getElementById("recipecontainer")

append3(recipelocal,container)

let mainpage=()=>{
    window.location.href="index.html"
}
document.querySelector("#image").addEventListener("click",mainpage)

