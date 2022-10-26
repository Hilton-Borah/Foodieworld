import navbar from "../componants/navbar.js"

document.querySelector("#navbar").innerHTML = navbar()

import {getdata} from "../componants/fetch.js"
// let container=document.querySelector("#container")

// let searchdata=JSON.parse(localStorage.getItem("searchdata"))||[]



let main = async () => {
    let local=localStorage.getItem("isornot")

    if (local==1){
        let search = document.querySelector("#search").value
        if (search==""){
            alert("Enter something")
        } else {
            const url = `https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`
            
            getdata(url).then((res) => {
                console.log(res.meals)
                output(res.meals)
            })
        }
    } else {
        alert("You are not login, please login first")
        window.location.href="login.html"
    }
}

// let search=

document.querySelector("#button").addEventListener("click", main)

let output = (data)=> {
    localStorage.setItem("searchdata", JSON.stringify(data))
    window.location.href="item.html"
}

let allreciepe=async()=>{
    const url1="https://www.themealdb.com/api/json/v1/1/categories.php"
    getdata(url1).then((res)=>{
        append2(res.categories)
    })
}

window.addEventListener("load",allreciepe)

let append2=(data)=>{
    // document.querySelector("#indexcontainer").innerHTML=""
    data.forEach((el)=>{
        let image=document.createElement("img")
        image.src=el.strCategoryThumb

        let p=document.createElement("p")
        p.innerText=el.strCategory

        let div=document.createElement("div")
        div.append(image,p)

        document.querySelector("#indexcontainer").append(div)
    
    })
}

let main2 = async () => {
    // let search = document.querySelector("#search").value
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`
    
    getdata(url).then((res) => {
        console.log(res.meals)
        output2(res.meals)
    })
}

// document.querySelector("#button").addEventListener("click", main)
document.querySelector("#getall").addEventListener("click",main2)

let output2 = (data)=> {
    localStorage.setItem("searchdata2", JSON.stringify(data))
    window.location.href="recipeday.html"
}

let mainpage=()=>{
    window.location.href="index.html"
}

document.querySelector("#image").addEventListener("click",mainpage)

let localstorage=localStorage.getItem("username")

let acount=document.getElementById("acount")
acount.innerText=localstorage




