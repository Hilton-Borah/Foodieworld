let getdata = async (url) => {
    let res = await fetch(url)
    let data = await res.json()

    return data;

}


let append =(data,cont)=>{
    cont.innerHTML=""
    data.forEach((el)=>{
        let img=document.createElement("img");
        img.src=el.strMealThumb;
        img.setAttribute("id","khana")
        let t=document.createElement("h3")
        t.innerText=el.strMeal
        // let p1=document.createElement("p")
        // p1.innerText=`${"Rs."+" "+el.idMeal}`
        // let p2=document.createElement("p")
        // p2.innerText=el.strCategory
        // let p3=document.createElement("p")
        // p3.innerHTML=el.strInstructions


        let div=document.createElement("div")
        div.setAttribute("class","everydiv")
        div.onclick=()=>{
            showdetails(el)
        }
        div.append(img,t)

        cont.append(div)
    });
}

let itemrecipe=[]

let showdetails=(data)=>{
    itemrecipe.push(data)
    // console.log(data)
    localStorage.setItem("itemrecipe",JSON.stringify(itemrecipe))
    window.location.href="ingredient.html"
}


let append3=(data,cont)=>{
    cont.innerText=""
    data.forEach((el)=>{
        let div=document.createElement("div")

        let img=document.createElement("img")
        img.setAttribute("id","limg")
        img.src=el.strMealThumb

        let detadiv=document.createElement("div")
        detadiv.setAttribute("id","detadiv")
        let t=document.createElement("h3")
        t.innerText=el.strMeal
        let p1=document.createElement("p")
        p1.innerText="Origin:- "+el.strArea
        let p2=document.createElement("p")
        p2.innerText="Category:- "+el.strCategory
        let ingre=document.createElement("h4")
        ingre.innerText="Ingredient"
        let p3=document.createElement("p")
        p3.innerText=el.strIngredient1+":- "+el.strMeasure1
        let p4=document.createElement("p")
        p4.innerText=el.strIngredient2+":- "+el.strMeasure2
        let p5=document.createElement("p")
        p5.innerText=el.strIngredient3+":- "+el.strMeasure3
        let p6=document.createElement("p")
        p6.innerText=el.strIngredient4+":- "+el.strMeasure4
        let p7=document.createElement("p")
        p7.innerText=el.strIngredient5+":- "+el.strMeasure5
        let p8=document.createElement("p")
        p8.innerText=el.strIngredient6+":- "+el.strMeasure6
        let p9=document.createElement("p")
        p9.innerText=el.strIngredient7+":- "+el.strMeasure7
        let p10=document.createElement("p")
        p10.innerText=el.strIngredient8+":- "+el.strMeasure8
        let instruction=document.createElement("div")
        instruction.setAttribute("id","instruction")
        let ins=document.createElement("h4")
        ins.innerText="Instructions"
        let p11=document.createElement("p")
        p11.innerText=el.strInstructions


        instruction.append(ins,p11)


        detadiv.append(t,p1,p2,ingre,p3,p4,p5,p6,p7,p8,p9,p10)

        div.append(img,detadiv,instruction)

        cont.append(div)
    })
}



export {getdata};
export default  append;
export {append3};