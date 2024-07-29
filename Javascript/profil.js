/// <reference path = "home.js"/>

let Logo = document.getElementById('logoB')
let NavBar = document.querySelector('nav');
let plus = document.getElementById('plus')
let settings = document.getElementById('settings')
let pics = document.getElementById('ProfilContent')
let home = document.getElementById('homes')
let unterseite;
let profilBild = 1;
let BannerBild = 1;
let root = document.querySelector(':root');


// function openNav() {
//     if (Logo.style.rotate == '-90deg') {
//         Logo.style.rotate = '0deg'
//         NavBar.style.width = '16vw'
//         NavBar.style.textAlign = 'left'
//         Logo.style.textAlign = 'right'
//         Logo.style.paddingLeft = '0.5vw'
//     } else {
//         Logo.style.rotate = '-90deg'
//         NavBar.style.width = '8vw'
//         NavBar.style.textAlign = 'center'
//         Logo.style.textAlign = 'right'
//         plus.style.width = '2vw'
//         settings.style.width = '2vw'
//         // home.style.width = '2vw'
//     }
// }

function getname() {
    if (localStorage.getItem('MedientechnikSemesterProjekt_Username') == null) {
        document.getElementById('sayHello').innerHTML = "  Hello user!"
    } else {
        document.getElementById('sayHello').innerHTML = '  Hello ' + localStorage.getItem('MedientechnikSemesterProjekt_Username') + "!";
    }
}
// allImgs.length;
// console.log(allImgs[0].category)
getname()


if(localStorage.getItem('MedientechnikSemesterProjekt_Username') == null  || localStorage.getItem('MedientechnikSemesterProjekt_Username') == ''){
    localStorage.setItem('MedientechnikSemesterProjekt_Username', "User")
}

if (localStorage.getItem('MedientechnikSommerprojekt_Banner') == null || localStorage.getItem('MedientechnikSommerprojekt_Banner') == '') {
    localStorage.setItem('MedientechnikSommerprojekt_Banner', 1)
}

if (localStorage.getItem('MedientechnikSommerprojekt_PB') == null || localStorage.getItem('MedientechnikSommerprojekt_PB') == '') {
    localStorage.setItem('MedientechnikSommerprojekt_PB', 1)
}

function designProfil() {
    htmlCode = ""
    // all.innerHTML = ""
    pics.innerHTML = ''

    

    let profilImg = localStorage.getItem('MedientechnikSommerprojekt_PB')
    let bannerImg = localStorage.getItem('MedientechnikSommerprojekt_Banner')

    htmlCode += `
    
        <div id="Banner">
            
        </div>

        <div id="ProfilB">
            <img src="../Pictures/Unterseiten/Settings/profil${profilImg}.jpg">
        </div>


        <div id="content">
        <div id="ShowUser">
            <h5 id="showuser">${localStorage.getItem('MedientechnikSemesterProjekt_Username')}</h5>
        </div>

        <div id="ShowPic">
            <h5 id="showpic">Posted Pictures</h5>
            <div id="Pics"></div>
        </div>
        </div>

    `


    document.getElementById('ProfilContent').innerHTML = htmlCode;
    generateFotosProfil()



    document.getElementById('Banner').style.backgroundImage = `url(../Pictures/Unterseiten/Settings/banner${bannerImg}.jpg)`
    // document.getElementById('ProfilB').style.backgroundImage = "url(../Pictures/Unterseiten/Home/wintersee.jpg)"


}

designProfil()

function generateHtmlAndSetBackground(category) {
    // all.innerHTML = '';
    htmlCode = '';
    pics.innerHTML = '';

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

function PhotoGenP(id) {
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
            pics.innerHTML = '';
            // all.innerHTML = '';
            window.location.href = './gallery.html';
            break;
        case 6:
            // all.innerHTML = '';
            pics.innerHTML = '';
            window.location.href = './settings.html';
            break;
        case 7:
            // all.innerHTML = '';
            pics.innerHTML = '';
            unterseite = 'Home';
            sessionStorage.setItem('medientechnikSommerprojekt_Unterseite', unterseite);
            // generateFotos();
            window.location.href = './home.html';
            break;
        case 8:
            // all.innerHTML = '';
            pics.innerHTML = '';
            window.location.href = './profil.html';
            break;
    }
}


function generateFotosProfil() {
    htmlCode = ''


    for (let i = 0; i < postedImg.length; i++) {

        
        htmlCode += ` <div  class="flex-container">
                <div onclick="swap(${i})" id="pic${i}"  class="row">
                    
                  <div class="front">
                    <img src="${postedImg[i].url}" alt="">
                  </div>
        
                  <div class="back" id="foto${i}">
                    
                    <div id="divBox">
                        <h1>${postedImg[i].title}</h1>
                        <h2>Category : ${postedImg[i].category}
                        <h3>${postedImg[i].description}</h3>
                    </div>
                    
                  </div>
               </div>
            </div>`
    }

    document.getElementById('Pics').innerHTML = htmlCode;

    for (let i = 0; i < postedImg.length; i++) {
        document.getElementById(`foto${i}`).style.backgroundImage = `url(${postedImg[i].url})`
        document.getElementById(`foto${i}`).style.backgroundPosition = `center`
        // document.getElementById(`foto${i}`).style.opacity = `0.5`

        // document.getElementById(`foto${i}`).style.backgroundImage = `url(${allImgs[i].url})`
        
    }
}
function swap(id) {
    let row = document.querySelector(`#pic${id}.row`);
 
  
  anime({
    targets: row,
    scale: [
      {value: 1.2}, 
      {value: 1, delay: 200}],
    rotateY: {value: '+=180', delay: 200},
    duration: 200,
    easing: 'easeInOutSine'
  });
  }  

  if(localStorage.getItem('SemesterProjektMedientechnik_Lightmode') == null){
    localStorage.setItem('SemesterProjektMedientechnik_Lightmode', 'Lightmode')
}

let Mode = localStorage.getItem('SemesterProjektMedientechnik_Lightmode')
console.log(Mode)

function checkMode() {
  if (Mode == 'Darkmode') {
      setBackgroundDark();

  } else if(Mode == 'Lightmode'){
      setBackgroundLight();

  }
}

checkMode()

function setBackgroundDark() {
 console.log('Dark');
 root.style.setProperty('--text', '#ffffff');
 root.style.setProperty('--background', '#474747');
 root.style.setProperty('--primary', '#a6a6a6');
 root.style.setProperty('--secondary', '#fefef');
 root.style.setProperty('--accent', '#b9b9b9');
 document.querySelector('#showpic').style.boxShadow = '12px 2px 39px -12px rgba(255, 255, 255, 0.75)'
 document.querySelector('#showuser').style.boxShadow = '12px 2px 39px -12px rgba(255, 255, 255, 0.75)'
//  document.querySelector('section > img').style.boxShadow = 'white'
}

function setBackgroundLight() {
 console.log('Light');
 root.style.setProperty('--text', '#3d3a54');
 root.style.setProperty('--background', '#fbfbfe');
 root.style.setProperty('--primary', '#ffffff');
 root.style.setProperty('--secondary', '#ebeaff');
 root.style.setProperty('--accent', '#c6c3ff');
 document.querySelector('#showuser').style.boxShadow = '12px 2px 39px -12px rgba(0, 0, 0, 0.75)'
 document.querySelector('#showpic').style.boxShadow = '12px 2px 39px -12px rgba(0, 0, 0, 0.75)'
}

let id = localStorage.getItem('MedientechnikSommerprojekt_Banner');

function generateBanner() {
    
}
