import { renderHome } from "./Home";
import { renderMenu } from "./Menu";
import { renderAbout } from "./About";
import "./navStyling.css"

console.log("Hellow")

const content = document.querySelector("#content")
renderHome();


const about = document.querySelector("#about");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");

let contentStuff = renderHome();
    content.innerHTML = " ";
    content.appendChild(contentStuff);

menu.addEventListener('click',()=>{
    let contentStuff = renderMenu()
    content.innerHTML = " ";
    content.appendChild(contentStuff)
})

about.addEventListener('click',()=>{
    let contentStuff = renderAbout();
    content.innerHTML = " ";
    content.appendChild(contentStuff);

})

home.addEventListener('click',()=>{
    let contentStuff = renderHome();
    content.innerHTML = " ";
    content.appendChild(contentStuff);

})



