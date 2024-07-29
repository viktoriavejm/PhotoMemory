/// <reference path = "data.js"/>

let Logo = document.getElementById('logoB')
let NavBar = document.querySelector('nav');
let root = document.querySelector(':root');
let pics = document.getElementById('settingsContent')

let unterseite = ""
let LoginName = ''

let Mode = localStorage.getItem('SemesterProjektMedientechnik_Lightmode')
console.log(Mode)

// var Lightmode = localStorage.getItem('SemesterProjektMedientechnik_Lightmode') === 'true';
// 


Reveal.initialize({
    hash: true,

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
});



function generateHtmlAndSetBackground(category) {
    // all.innerHTML = '';
    htmlCode = '';
    // pics.innerHTML = '';

    for (let i = 0; i < allImgs.length; i++) {
        if (allImgs[i].category == category) {
            htmlCode += `
            <div  class="flex-container">
                <div onclick="swap(${i})" id="pic${i}" class="row">
                    <div onclick="addClicks(${i})" class="front">
                        <img src="${allImgs[i].url}" alt="">
                    </div>
                    <div class="back" id="fotoM${i}">
                        <div id="divBox">
                            <h1>${allImgs[i].title}</h1>
                            <h2>Category : ${allImgs[i].category}
                            <h3>${allImgs[i].description}</h3>
                        </div>
                    </div>
                </div>
                <div id="Icons">
                           <div id="clicks">
                                <img id="ImageClickURL" src="../Pictures/click.png" alt="clicks">
                                <h3 id="clickText${i}">${clicks[i]}</h3>
                           </div>

                           <div id="likes">
                              <img onclick="addLikes(${i})" id="ImageLikesURL" src="../Pictures/like.png" alt="likes">
                              <h3 id="likeText${i}">${likes[i]}</h3>
                           </div>
                </div>
            </div>`;
        }
    }

    document.getElementById('all').innerHTML = htmlCode;

    for (let i = 0; i < allImgs.length; i++) {
        if(allImgs[i].category == sessionStorage.getItem('medientechnikSommerprojekt_Unterseite')){
            document.getElementById(`fotoM${i}`).style.backgroundImage = `url(${allImgs[i].url})`
            document.getElementById(`fotoM${i}`).style.backgroundPosition = `center`;
        }
    }
}

function PhotoGen(id) {
    switch(id) {
        case 1:
            window.location.href = './home.html';
            unterseite = "Animals";
            sessionStorage.setItem('medientechnikSommerprojekt_Unterseite', unterseite);
            break;
        case 2:
            window.location.href = './home.html';
            unterseite = "Portraits";
            sessionStorage.setItem('medientechnikSommerprojekt_Unterseite', unterseite);

            break;
        case 3:
            window.location.href = './home.html';
            unterseite = "Food";
            sessionStorage.setItem('medientechnikSommerprojekt_Unterseite', unterseite);
            break;
        case 4:
            window.location.href = './home.html';
            unterseite = "Landscape";
            sessionStorage.setItem('medientechnikSommerprojekt_Unterseite', unterseite);

            break;
        case 5:
            // pics.innerHTML = '';
            // all.innerHTML = '';
            window.location.href = './gallery.html';
            break;
        case 6:
            // all.innerHTML = '';
            // pics.innerHTML = '';
            window.location.href = './settings.html';
            break;
        case 7:
            // all.innerHTML = '';
            // pics.innerHTML = '';
            unterseite = 'Home';
            sessionStorage.setItem('medientechnikSommerprojekt_Unterseite', unterseite);
            // generateFotos();
            window.location.href = './home.html';
            break;
        case 8:
            // all.innerHTML = '';
            // pics.innerHTML = '';
            window.location.href = './profil.html';
            break;
    }
}


function getname() {
    if(localStorage.getItem('MedientechnikSemesterProjekt_Username') == null || localStorage.getItem('MedientechnikSemesterProjekt_Username') == ''){
    document.getElementById('sayHello').innerHTML = "  Hello user!"
    }else{
        document.getElementById('sayHello').innerHTML = '  Hello ' + localStorage.getItem('MedientechnikSemesterProjekt_Username') + "!";
    }
}

getname()


function generateFotosSlides() {
    htmlCode = '';
    for (let i = 0; i < allImgs.length; i++) {
        htmlCode += `<section class="slide"><img class="sliders" src="${allImgs[i].url}" alt="" /></section>`;
        
    }
    document.getElementById('imgSlides').innerHTML = htmlCode;
}

generateFotosSlides()