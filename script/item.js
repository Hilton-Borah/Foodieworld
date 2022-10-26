import navbar  from "../componants/navbar.js"

document.querySelector("#navbar").innerHTML=navbar()

import { getdata } from "../componants/fetch.js"

import append  from "../componants/fetch.js"

// let container=document.querySelector("#container")

// let main2=async() =>{
//     // window.location.href="item.html"
//     // let search=document.querySelector("#search").value
//     // const url = `https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`

//     // getdata(url).then((res)=>{
//     //     append(res.meals,container)
//     // })
// }

// main2()

let container=document.getElementById("container")

let searchdata=JSON.parse(localStorage.getItem("searchdata"))||[]

// let head=document.createElement("h2")
// head.innerText=""


append(searchdata,container)

let mainpage=()=>{
    window.location.href="index.html"
}
document.querySelector("#image").addEventListener("click",mainpage)






// document.querySelector(".everydiv").addEventListener("click",showdetails)