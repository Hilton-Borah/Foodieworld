import navbar  from "../componants/navbar.js"

document.querySelector("#navbar").innerHTML=navbar()

let btn=document.querySelector("#button")
btn.style.height="38px"
btn.style.marginTop="5px"


    let usersarray = JSON.parse(localStorage.getItem("usersarray")) || []

    class user {
        constructor(name, password, email) {
            this.name = name;
            this.password = password;
            this.email = email;
        }
        signUp(name, password, email) {
            let isValidated = false;

            isValidated =
                this.validUsername(name) && this.validPassword(password);

            if (isValidated) {
                this.name = name;
                this.password = password;
                this.email = email;

                alert("Signup successfully");

                usersarray.push(this)
                localStorage.setItem("usersarray", JSON.stringify(usersarray))

            } else {
                alert("Follow rules");
            }
        }
        validUsername(name) {
            return true;
        }
        validPassword(password) {
            // if (password.length>=6) {
            return true;
            // }

        }
        // login(name, id, email, password) {
        //     if (name === this.name && password === this.password) {
        //         console.log("login succesful");
        //     } else {
        //         console.log("credentials not match");
        //     }
        // }
    }
    class student extends user {
        constructor(name, password, email) {
            super(name, password, email);

        }
        // submitAssignment() {
        //     this.numOfAssignment++;
        // }
    }
    // class admin extends user {
    //     constructor(name, password, email, id) {
    //         super(name, password, email, id)
    //     }
    //     // remove() {

    //     // }
    // }

    document.querySelector("#form").addEventListener("submit", abcdef)

    function abcdef() {

        event.preventDefault()

        let name = document.querySelector("#name").value
        let email = document.querySelector("#email").value
        // let id = document.querySelector("#stuid").value
        let password = document.querySelector("#paswrd").value


        let s1 = new student(name, password, email)
        s1.signUp(name, password, email)

        console.log(s1)
        window.location.href = "login.html"      
        
    }
    // let select = document.querySelector("#select").value

    // if (password.length >= 6) {

        // if (select === "Student") {
            // studentsarray.push(s1)

        // }

    // if(select === "Admin") {
    //     let a1 = new admin(name, password, email, id)
    //     a1.signUp(name, password, email, id)
    //     // studentsarray.push(a1)

    //     window.location.href = "adminlogin.html"
    // }
    // else {
    //     document.querySelector("h3").innerText="password doesnot strong"
    // }
        
    // console.log(s1)

    // }


    let mainpage=()=>{
        window.location.href="index.html"
    }
    document.querySelector("#image").addEventListener("click",mainpage)