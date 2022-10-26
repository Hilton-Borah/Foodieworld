let navbar = () => {
    return `<div><img id="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLF1o6tsOG7g0PM091bdhXImV-CtvIoH_ExNI9sX81T5rxUs9Xl-BedO49NEhMnM8GpBc&usqp=CAU" alt=""></div>
    <div id="mainsearch"><div><input type="search" id="search" placeholder="Search your favourite one" oninput="getdata()" required></div><div id="button">Get items</div></div>
    <div><a href="login.html">Sign In</a></div>
    <div><a href="signup.html">Sign Up</a></div>
    <div id="getall">Recipe of the day</div>
    <div id="acount">My acount</div>`


}


export default navbar;