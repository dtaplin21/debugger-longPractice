export function changeTitle() {
     document.title = "mustache"

    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    const head = document.getElementById("header").children
    head[0].innerText = "Red Head"
    //console.log(head)
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    const par = document.querySelector("p");
    par.innerText = "im amazing, dirty stache, love lo"
}
