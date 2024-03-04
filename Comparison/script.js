let btn = document.getElementsByClassName("l-bar");
let bar = document.getElementById('left-bar');

let inputForSearch = document.querySelectorAll(".input-lang");
let infoForInput = document.querySelectorAll(".info");
let searchPage = document.querySelector(".search-page-bg");

let os1 = document.getElementById("os1");
let android1 = document.getElementById("android1");
let ios1 = document.getElementById("ios1");
let games1 = document.getElementById("games1");
let web1 = document.getElementById("web1");

let os2 = document.getElementById("os2");
let android2 = document.getElementById("android2");
let ios2 = document.getElementById("ios2");
let games2 = document.getElementById("games2");
let web2 = document.getElementById("web2");

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

btn[0].addEventListener("click", function(){
    searchPage.classList.add("hide-input-info");
})


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

inputForSearch[0].addEventListener("click", function() {
    bar.classList.remove('right-bar');
    btn[0].classList.remove("bg-btn2");

    for(let i = 0; i < btn[0].childElementCount; i++){
        btn[0].children[i].classList.remove("three-lines-color");
    }
    document.querySelector('.dark-bg-off').classList.remove('dark-bg-on');
    searchPage.classList.remove("hide-input-info");
    document.querySelector("header").style.zIndex = "8";
})

searchPage.addEventListener("click", function(){
    searchPage.classList.add("hide-input-info");
})

let inputLang = document.querySelectorAll(".input-for-comp")

let btnInfo1 = document.querySelectorAll(".btn-lang1")
let btnInfo2 = document.querySelectorAll(".btn-lang2")


// for(let i; i < btnInfo1.length; i++){
//     btnInfo1[i].addEventListener("click", function(){
//         alert("dsa")
//         // getInfo1.children[i].classList.remove("short-hide")
//     })
// }

inputLang[0].addEventListener("input", (e) => { // поиск
    const value = e.target.value.toLowerCase();
    console.log(value);
    btnInfo1.forEach(elements => {
        const isVisible = elements.textContent.toLowerCase().includes(value);
        if(!isVisible){
            elements.classList.add("hide-input-info");
        }
        else if(isVisible){
            elements.classList.remove("hide-input-info");
            document.querySelector(".langs-btn1").classList.remove("hide-input-info")
        }
        
        if(value == ""){
            document.querySelector(".langs-btn1").classList.add("hide-input-info")
        }


        // elements.addEventListener("click", function(){
        //     document.querySelector(".langs-btn1").classList.add("hide-input-info")
        //     inputLang[0].value = elements.textContent;
        //     document.getElementById("btn-l-f").textContent = elements.textContent
        // })
    })
})

inputLang[0].addEventListener("click", function(){
    document.querySelector(".langs-btn2").classList.add("hide-input-info")
})

inputLang[1].addEventListener("click", function(){
    document.querySelector(".langs-btn1").classList.add("hide-input-info")
})


inputLang[1].addEventListener("input", (e) => { // поиск
    const value = e.target.value.toLowerCase();
    console.log(value);
    btnInfo2.forEach(elements => {
        const isVisible = elements.textContent.toLowerCase().includes(value);
        if(!isVisible){
            elements.classList.add("hide-input-info");
        }
        else if(isVisible){
            document.querySelector(".langs-btn2").classList.remove("hide-input-info")
            elements.classList.remove("hide-input-info");
        }

        if(value == ""){
            document.querySelector(".langs-btn2").classList.add("hide-input-info")
        }

    //    elements.addEventListener("click", function(){
    //         document.querySelector(".langs-btn2").classList.add("hide-input-info")
    //         inputLang[1].value = elements.textContent;
    //         document.getElementById("btn-l-s").textContent = elements.textContent
    //     }) 

    })
})

//btnInfo1 btnInfo2
let getInfo1 = document.querySelector(".info-of-ch1");
let getInfo2 = document.querySelector(".info-of-ch2");

// btnInfo1.addEventListener("click", function(){
//     for(let i = 0; i < btnInfo1.length; i++)
//     {
//         getInfo1[i].classList.remove("short-hide");
//     }
// })

function CleanAll1(){
    for(let i = 0; i < getInfo1.childElementCount; i++)
    {
        getInfo1.children[i].classList.add("short-hide");
    }
}

function CleanAll2(){
    for(let i = 0; i < getInfo2.childElementCount; i++)
    {
        getInfo2.children[i].classList.add("short-hide");
    }
}

function ShowAgainTheButton1(){
    for(let i = 0; i < btnInfo2.length; i++)
    {
        btnInfo2[i].classList.remove("short-hide")
    }
}

function ShowAgainTheButton2(){
    for(let i = 0; i < btnInfo1.length; i++)
    {
        btnInfo1[i].classList.remove("short-hide")
    }
}

function CleanPercents1(){
    for(let i = 0; i < 14; i++)
    {
        os1.children[i + 1].classList.add("short-hide")
        android1.children[i + 1].classList.add("short-hide");
        ios1.children[i + 1].classList.add("short-hide");
        games1.children[i + 1].classList.add("short-hide");
        web1.children[i + 1].classList.add("short-hide");
    }
}

function CleanPercents2(){
    for(let i = 0; i < 14; i++)
    {
        os2.children[i + 1].classList.add("short-hide");
        android2.children[i + 1].classList.add("short-hide");
        ios2.children[i + 1].classList.add("short-hide");
        games2.children[i + 1].classList.add("short-hide");
        web2.children[i + 1].classList.add("short-hide");
    }
}

let choise1 = 0
let choise2

let colors = ["#5c6bc0", "#0080cd", "#390091", 
"#0a6eb6", "#ffd800", "#777bb3", 
"#7700ff", "#ffffff", "#de8135", 
"#ec1622", "#377ef0", "#2dbcaf", 
"#bc0000", "#f1592a"]

let block;
let ff = 0
let prev = choise1

for(let i = 0; i < btnInfo1.length; i++){
    btnInfo1[i].addEventListener("click", function(){
        document.querySelector(".langs-btn1").classList.add("hide-input-info")
        document.querySelector(".langs-btn1").style.border = "1px solid " + colors[i]
        document.querySelector(".langs-btn1").style.boxShadow = "0 0 10px 2px " + colors[i] + " inset" + ", " + "0 0 10px 2px " + colors[i];
        inputLang[0].value = btnInfo1[i].textContent;
        for(let j = 0; j < document.getElementsByClassName("btn-l-f").length; j++){
            document.getElementsByClassName("btn-l-f")[j].textContent = btnInfo1[i].textContent
        }
        document.getElementById("first-lang").style.border = "1px solid" + colors[i];
        document.getElementById("first-lang").style.boxShadow =  "0 0 10px 2px " + colors[i];
        inputLang[0].style.border = "1px solid " + colors[i];
        inputLang[0].style.boxShadow = "0 0 10px 2px " + colors[i] + " inset" + ", " + "0 0 10px 2px " + colors[i];
        choise1 = i

        if(inputLang[1].value != ""){
            document.querySelector(".no-aviable").classList.add("short-hide");
        }
        else{
            document.querySelector(".no-aviable").classList.remove("short-hide");
        }
        let chld = document.querySelectorAll(".ch-cl1")
        chld[i].style.border = "1px solid  " + colors[i];
        chld[i].style.boxShadow = "0 0 10px 2px " + colors[i];
        for(let j = 0; j < chld[i].childElementCount; j++){
            chld[i].children[j].style.border = "1px solid  " + colors[i];
            chld[i].children[j].style.boxShadow = "0 0 10px 2px " + colors[i];
        }


        for(let j = 0; j < btnInfo1.length; j++){
            btnInfo1[j].style.border = "1px solid  " + colors[i];
            btnInfo1[j].style.boxShadow = "0 0 10px 2px " + colors[i] + " inset" + ", " + "0 0 10px 2px " + colors[i];
        }

        // document.querySelectorAll(".ch-cl1")[i].children[i].style.border = "1px solid  " + colors[i];
        // document.querySelectorAll(".ch-cl1")[i].children[i].style.boxShadow = "0 0 10px 2px " + colors[i];
        ShowAgainTheButton1();
        btnInfo2[i].classList.add("short-hide")

        document.querySelector(".percents1").style.border = "1px solid " + colors[i]
        document.querySelector(".percents1").style.boxShadow = "0 0 10px 2px " + colors[i];

        for(let j=0; j < document.querySelectorAll(".category-percent1").length; j++){
            document.querySelectorAll(".category-percent1")[j].style.border = "1px solid " + colors[i]
            document.querySelectorAll(".category-percent1")[j].style.boxShadow = "0 0 10px 2px " + colors[i];
        }
        
    })
}

for(let i = 0; i < btnInfo2.length; i++){
    btnInfo2[i].addEventListener("click", function(){
        document.querySelector(".langs-btn2").classList.add("hide-input-info")
        document.querySelector(".langs-btn2").style.border = "1px solid " + colors[i]
        document.querySelector(".langs-btn2").style.boxShadow = "0 0 10px 2px " + colors[i] + " inset" + ", " + "0 0 10px 2px " + colors[i];
        inputLang[1].value = btnInfo2[i].textContent;
        for(let j = 0; j < document.getElementsByClassName("btn-l-s").length; j++){
            document.getElementsByClassName("btn-l-s")[j].textContent = btnInfo2[i].textContent
        }
        document.getElementById("second-lang").style.border = "1px solid" + colors[i];
        document.getElementById("second-lang").style.boxShadow =  "0 0 10px 2px " + colors[i];
        inputLang[1].style.border = "1px solid " + colors[i];
        inputLang[1].style.boxShadow = "0 0 10px 2px " + colors[i] + " inset" + ", " + "0 0 10px 2px " + colors[i];
        choise2 = i
        // getInfo2.children[i].classList.remove("short-hide")

        if(inputLang[0].value != ""){
            document.querySelector(".no-aviable").classList.add("short-hide");
        }
        else{
            document.querySelector(".no-aviable").classList.remove("short-hide");
        }

        let chld = document.querySelectorAll(".ch-cl2")
        chld[i].style.border = "1px solid  " + colors[i];
        chld[i].style.boxShadow = "0 0 10px 2px " + colors[i];
        for(let j = 0; j < chld[i].childElementCount; j++){
            chld[i].children[j].style.border = "1px solid  " + colors[i];
            chld[i].children[j].style.boxShadow = "0 0 10px 2px " + colors[i];
        }

        for(let j = 0; j < btnInfo2.length; j++){
            btnInfo2[j].style.border = "1px solid  " + colors[i];
            btnInfo2[j].style.boxShadow = "0 0 10px 2px " + colors[i] + " inset" + ", " + "0 0 10px 2px " + colors[i];
        }

        ShowAgainTheButton2();
        btnInfo1[i].classList.add("short-hide")

        document.querySelector(".percents2").style.border = "1px solid " + colors[i]
        document.querySelector(".percents2").style.boxShadow = "0 0 10px 2px " + colors[i];

        for(let j=0; j < document.querySelectorAll(".category-percent2").length; j++){
            document.querySelectorAll(".category-percent2")[j].style.border = "1px solid " + colors[i]
            document.querySelectorAll(".category-percent2")[j].style.boxShadow = "0 0 10px 2px " + colors[i];
        }
    })
}

// btnInfo1[0].addEventListener("click", function(){
//     alert("dsa")
//     getInfo1.children[i].classList.remove("short-hide")
// })

let compLangs = document.getElementById("compare-languages")

inputForSearch[0].addEventListener("mouseover", function(){
    inputForSearch[0].style.border = "2px solid " + colors[choise1]
    inputForSearch[0].style.boxShadow = "0 0 10px 2px " + colors[choise1] + " inset" + ", " + "0 0 10px 2px " + colors[choise1];
})

inputForSearch[0].addEventListener("mouseout", function(){
    inputForSearch[0].style.border = "2px solid white"
    inputForSearch[0].style.boxShadow = "0 0 10px 2px " + "white" + " inset" + ", " + "0 0 10px 2px " + "white";
})

compLangs.addEventListener("mouseover", function(){
    compLangs.style.border = "none";
    // compLangs.style.background = "linear-gradient(" + "to right " + ", " + colors[choise1] + ", " + colors[choise2] + ")"
    compLangs.style.boxShadow = "-10px -4px 10px 1px " + colors[choise1] + ", " + "10px 4px 10px 1px " + colors[choise2]
}) 

// box-shadow:  10px -4px 10px 1px #0a6eb6, -10 4px 10px 1px #e11e21;

compLangs.addEventListener("mouseout", function(){
    compLangs.style.background = "none"
    compLangs.style.boxShadow = "10px -4px 10px 1px " + colors[choise1] + ", " + "-10px 4px 10px 1px " + colors[choise2]
})

compLangs.addEventListener("click", function(){

    document.querySelector(".search-page").style.border = "2px solid " + colors[choise2]
    document.querySelector(".search-page").style.boxShadow = "0 0 10px 2px " + colors[choise2] + " inset" + ", " + "0 0 10px 2px " + colors[choise2];

    for(let i =0; i <  document.querySelectorAll(".info").length; i++)
    {
        document.querySelectorAll(".info")[i].children[0].style.border = "2px solid " + colors[choise1]
        document.querySelectorAll(".info")[i].children[0].style.boxShadow = "0 0 10px 2px " + colors[choise1] + " inset" + ", " + "0 0 10px 2px " + colors[choise1];
    }

    // compLangs.style.border = "none";
    document.querySelector(".main-info").style.boxShadow = "-10px -4px 10px 1px " + colors[choise1] + ", " + "10px 4px 10px 1px " + colors[choise2]
    document.querySelector(".vs-info").style.boxShadow = "-10px -4px 10px 1px " + colors[choise1] + ", " + "10px 4px 10px 1px " + colors[choise2]
    compLangs.style.background = "linear-gradient(" + "to right " + ", " + colors[choise1] + ", " + colors[choise2] + ")"
    compLangs.style.boxShadow = "10px -4px 10px 1px " + colors[choise1] + ", " + "-10px 4px 10px 1px " + colors[choise2]
    CleanAll1()
    CleanAll2()
    getInfo1.children[choise1].classList.remove("short-hide")
    getInfo2.children[choise2].classList.remove("short-hide")
    getInfo1.classList.remove("short-hide")
    getInfo2.classList.remove("short-hide")

    CleanPercents1();
    CleanPercents2();

    document.querySelector(".vs-info").classList.remove("short-hide")
    document.querySelector(".percents1").classList.remove("short-hide")
    document.querySelector(".percents2").classList.remove("short-hide")

    os1.children[choise1 + 1].classList.remove("short-hide");
    android1.children[choise1 + 1].classList.remove("short-hide");
    ios1.children[choise1 + 1].classList.remove("short-hide");
    games1.children[choise1 + 1].classList.remove("short-hide");
    web1.children[choise1 + 1].classList.remove("short-hide");

    os2.children[choise2 + 1].classList.remove("short-hide");
    android2.children[choise2 + 1].classList.remove("short-hide");
    ios2.children[choise2 + 1].classList.remove("short-hide");
    games2.children[choise2 + 1].classList.remove("short-hide");
    web2.children[choise2 + 1].classList.remove("short-hide");
})



