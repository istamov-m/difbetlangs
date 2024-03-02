let l1 = document.getElementById("languages");

let getInfAbtDisplay = document.getElementsByClassName("dif-show");

let openBtn = document.querySelector(".open-search-page");
let exitBtn = document.querySelector(".exit");
let btn = document.getElementsByClassName("l-bar");
let compare = document.querySelector(".comparison");

let p2 = document.getElementsByClassName("p2");  //краткое сравнение

let cpp = document.getElementsByClassName("C++");
let java = document.getElementsByClassName("Java");

let newInfo = document.querySelector(".hide-info");
let inputForSearch = document.querySelectorAll(".input-lang");
let infoForInput = document.querySelectorAll(".info");

let searchPage = document.querySelector(".search-page-bg");
let bar = document.getElementById('left-bar');


for(let i = 0; i < btn.length; i++) // появление левой панели
{
    btn[i].addEventListener("click", function(){
        bar.classList.toggle('right-bar');
        document.querySelector('.dark-bg-off').classList.toggle('dark-bg-on');
        btn[0].classList.toggle("bg-btn2");

        for(let i = 0; i < btn[0].childElementCount; i++){
            btn[0].children[i].classList.toggle("three-lines-color");
        }
    });
}

btn[0].addEventListener("mouseover", function(){
    // btn[0].children.forEach(elements => {
    //     elements.classList.add("three-lines");
    // })
    for(let i = 0; i < btn[0].childElementCount; i++){
        btn[0].children[i].classList.add("three-lines");
    }
})

btn[0].addEventListener("mouseout", function(){
    for(let i = 0; i < btn[0].childElementCount; i++){
        btn[0].children[i].classList.remove("three-lines");
    }
})


// document.querySelecwtor(".open-search-page").addEventListener("click", function(){
//     searchPage.classList.remove("hide-input-info");
//     document.querySelector(".open-search-page").classList.add("input-lang-change")
//     document.querySelector("header").style.zIndex = "8"
//     document.querySelector(".input-lang").classList.add("input-lang-change-position");
// })

// document.querySelector(".exit").addEventListener("click", function(){
//     searchPage.classList.add("hide-input-info");
//     document.querySelector(".input-lang").classList.remove("input-lang-change-position");
// })

inputForSearch[0].addEventListener("click", function() {
    searchPage.classList.remove("hide-input-info");
    document.querySelector("header").style.zIndex = "8"
})

searchPage.addEventListener("click", function(){
    searchPage.classList.add("hide-input-info");
})

inputForSearch[0].addEventListener("input", (e) => { // поиск
    const value = e.target.value.toLowerCase();
    console.log(value);
    infoForInput.forEach(elements => {
        const isVisible = elements.children[0].children[1].textContent.toLowerCase().includes(value);
        if(!isVisible){
            elements.classList.add("hide-input-info");
        }
        else if(isVisible){
            elements.classList.remove("hide-input-info");
        }
    })
})

inputForSearch[1].addEventListener("input", (e) => { // поиск
    const value = e.target.value.toLowerCase();
    console.log(value);
    document.querySelectorAll(".btn-lang").forEach(elements => {
        const isVisible = elements.textContent.toLowerCase().includes(value);
        if(!isVisible){
            elements.classList.add("hide-input-info");
        }
        else if(isVisible){
            elements.classList.remove("hide-input-info");
        }
        // elements.classList.toggle("hide-input-info", !isVisible)
    })
})


let getInfo = document.querySelectorAll(".short-hide");
let btnInfo = document.querySelectorAll(".btn-lang");

function CleanAll(){
    for(let i = 0; i < btnInfo.length; i++)
    {
        getInfo[i].classList.add("short-hide");
    }
}

for(let i = 0; i < btnInfo.length; i++)
{
    btnInfo[i].addEventListener("click", function(){
        CleanAll();
        getInfo[i].classList.remove("short-hide")

        document.querySelector(".b2").textContent = btnInfo[i].textContent;
        document.querySelector(".vs-info").classList.remove("hide-info");
    })
}

