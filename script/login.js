import navbar  from "../componants/navbar.js"

document.querySelector("#navbar").innerHTML=navbar()

let doc=document.querySelector("#container2")
doc.style.height="320px"

let btn=document.querySelector("#button")
btn.style.height="38px"
btn.style.marginTop="5px"

    class user {

        constructor(name, password) {

            let detailsarray = JSON.parse(localStorage.getItem("usersarray"))

            detailsarray.forEach((el) => {
                this.name = el.name;
                this.password = el.password;
            })

        }

        login(username, password) {

            if (username === this.name && password === this.password) {
                localStorage.setItem("isornot",1)
                localStorage.setItem("username",username)
                alert("Login succesful");
                window.location.href="index.html"
            }
            else {
                alert("Credentials not match!..");
            }

        }
    }

    class oneuser extends user {
        constructor(name, password) {
            super(name, password)
        }
    }

    // class admin extends user {
    //     constructor(name, password) {
    //         super(name, password)
    //     }
    // }

    document.querySelector("form").addEventListener("submit", loginuser)

    function loginuser() {
        event.preventDefault()
        let name = document.querySelector("#name").value
        let password = document.querySelector("#paswrd").value

        let s1 = new oneuser(name, password)
        s1.login(name, password)



        console.log(s1)
        // })
    }


    let mainpage=()=>{
        window.location.href="index.html"
    }
    document.querySelector("#image").addEventListener("click",mainpage)

