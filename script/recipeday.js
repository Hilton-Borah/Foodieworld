import navbar  from "../componants/navbar.js"

document.querySelector("#navbar").innerHTML=navbar()

import append  from "../componants/fetch.js"


let container=document.getElementById("container")

let searchdata=JSON.parse(localStorage.getItem("searchdata2"))||[]

append(searchdata,container)

let mainpage=()=>{
    window.location.href="index.html"
}
document.querySelector("#image").addEventListener("click",mainpage)