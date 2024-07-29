/// <reference path = "data.js"/>

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


// Daten Objekte ***************************************************


// for (let i = 0; i < allImgs.length; i++) {
//     allLikes.push(allImgs[i].likes);
    
// }

// localStorage.setItem('MedientechnikSemesterProjekt_Likes', allLikes);


//Homepage *********************************************************

let Logo = document.getElementById('logoB')
let NavBar = document.querySelector('nav');
let plus = document.getElementById('plus')
let settings = document.getElementById('settings')
let home = document.getElementById('homes')
let pics = document.getElementById('ProfilContent')
let all = document.getElementById('all');
let root = document.querySelector(':root');
let unterseite;
// let likes = [];
let likes = JSON.parse(localStorage.getItem('likes')) || new Array(51).fill(0);
let clicks = JSON.parse(localStorage.getItem('clicks')) || new Array(51).fill(0);


let htmlCode = "";


if(localStorage.getItem('SemesterProjektMedientechnik_Lightmode') == null){
    localStorage.setItem('SemesterProjektMedientechnik_Lightmode', 'Lightmode')
}

let Mode = localStorage.getItem('SemesterProjektMedientechnik_Lightmode')
console.log(Mode)


function getname() {
    if (localStorage.getItem('MedientechnikSemesterProjekt_Username') == null || localStorage.getItem('MedientechnikSemesterProjekt_Username') == '') {
        document.getElementById('sayHello').innerHTML = "  Hello user!"
    } else {
        document.getElementById('sayHello').innerHTML = '  Hello ' + localStorage.getItem('MedientechnikSemesterProjekt_Username') + "!";
    }
}
// allImgs.length;
// console.log(allImgs[0].category)
getname()

let count = 0;

function generateFotos() {
    htmlCode = ""
    all.innerHTML = ""
    pics.innerHTML = ''
    count = 0;


    if(sessionStorage.getItem('medientechnikSommerprojekt_Unterseite') == '' || sessionStorage.getItem('medientechnikSommerprojekt_Unterseite') == 'Home' || sessionStorage.getItem('medientechnikSommerprojekt_Unterseite') == null){
        console.log(allImgs.length)
        // console.log("hi")
        htmlCode = ''

        for (let i = 0; i < allImgs.length; i++) {
            htmlCode += `
            <div   class="flex-container">
                <div onclick="swap(${i})" id="pic${i}"  class="row">
                    
                  <div onclick="addClicks(${i})" class="front">
                    <img src="${allImgs[count].url}" alt="">
                  </div>
        
                  <div class="back" id="foto${i}">
                    
                    <div id="divBox">
                        <h1>${allImgs[i].title}</h1>
                        <h2>Category : ${allImgs[i].category}
                        <h3>${allImgs[i].description}</h3>

                        
                    </div>
                    
                    
                  </div>
               </div>
               <div id="Icons">
                           <div id="clicks">
                                <img id="imageClickURL" src="../Pictures/click.png" alt="clicks">
                                <h3 id="clickText${i}">${clicks[i]}</h3>
                           </div>

                           <div id="likes">
                              <img onclick="addLikes(${i})" id="imageLikesURL" src="../Pictures/like.png" alt="likes">
                              <h3 id="likeText${i}">${likes[i]}</h3>
                           </div>
                </div>
            </div>`
            count++;
    }

    document.getElementById('all').innerHTML = htmlCode

    for (let i = 0; i < allImgs.length; i++) {
        document.getElementById(`foto${i}`).style.backgroundImage = `url(${allImgs[i].url})`
        document.getElementById(`foto${i}`).style.backgroundPosition = `center`
        // document.getElementById(`foto${i}`).style.opacity = `0.5`

        document.getElementById(`foto${i}`).style.backgroundImage = `url(${allImgs[i].url})`
        
    }

    


}else {
    console.log('2.' + allImgs.length)

    for (let i = 0; i < allImgs.length; i++) {
        if (allImgs[i].category == sessionStorage.getItem('medientechnikSommerprojekt_Unterseite')) {
            htmlCode += `
            <div  class="flex-container">
                <div onclick="swap(${i})" id="pic${i}"  class="row">
                    
                  <div onclick="addClicks(${i})" class="front">
                    <img src="${allImgs[i].url}" alt="">
                  </div>
        
                  <div class="back" id="fotoC${i}">
                    
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
            </div>`
            // count++; 
        
    }
}
document.getElementById('all').innerHTML = htmlCode

    for (let i = 0; i < allImgs.length; i++) {
        if(allImgs[i].category == sessionStorage.getItem('medientechnikSommerprojekt_Unterseite')){
            console.log(i)
            console.log(allImgs[i].url)
            document.getElementById(`fotoC${i}`).style.backgroundImage = `url(${allImgs[i].url})`
            
            document.getElementById(`fotoC${i}`).style.backgroundPosition = `center`
            // document.getElementById(`foto${i}`).style.opacity = `0.5`

            // document.getElementById(`fotoC${i}`).style.backgroundImage = `url(${allImgs[i].url})`
        }
}
}
}
generateFotos()




// Unterseiten - Generierung Fotos ********************************************

function generateHtmlAndSetBackground(category) {
    all.innerHTML = '';
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
        if(allImgs[i].category == category){
            console.log(i)
            console.log(allImgs[i].url)
            document.getElementById(`fotoM${i}`).style.backgroundImage = `url(${allImgs[i].url})`
            
            document.getElementById(`fotoM${i}`).style.backgroundPosition = `center`
            // document.getElementById(`foto${i}`).style.opacity = `0.5`

            // document.getElementById(`fotoC${i}`).style.backgroundImage = `url(${allImgs[i].url})`
        }
}
}

function PhotoGen(id) {
    switch(id) {
        case 1:
            generateHtmlAndSetBackground("Animals");
            break;
        case 2:
            generateHtmlAndSetBackground("Portraits");
            break;
        case 3:
            generateHtmlAndSetBackground("Food");
            break;
        case 4:
            generateHtmlAndSetBackground("Landscape");
            break;
        case 5:
            pics.innerHTML = '';
            all.innerHTML = '';
            window.location.href = './gallery.html';
            break;
        case 6:
            all.innerHTML = '';
            pics.innerHTML = '';
            window.location.href = './settings.html';
            break;
        case 7:
            all.innerHTML = '';
            pics.innerHTML = '';
            unterseite = 'Home';
            sessionStorage.setItem('medientechnikSommerprojekt_Unterseite', unterseite);
            generateFotos();
            break;
        case 8:
            all.innerHTML = '';
            pics.innerHTML = '';
            window.location.href = './profil.html';
            break;
    }
}


function addLikes(index) {
    // Erhöhen Sie die Anzahl der Likes für dieses Bild
    likes[index]++;
    
    // Speichern Sie das aktualisierte Array in localStorage
    localStorage.setItem('likes', JSON.stringify(likes));

    document.getElementById('likeText' + index).innerText = likes[index];
    
    // Optional: Ausgabe der neuen Anzahl von Likes in der Konsole
    console.log("Bild " + (index + 1) + " hat jetzt " + likes[index] + " Likes");
}

function clearLikes() {
    for (let i = 0; i < likes.length; i++) {
        likes[i] = 0; 
    }
    localStorage.setItem('likes', JSON.stringify(likes));
}


function addClicks(index) {
    clicks[index]++;
    localStorage.setItem('clicks', JSON.stringify(clicks));

    document.getElementById('clickText' + index).innerText = clicks[index];
    console.log("Bild " + (index + 1) + " hat jetzt " + clicks[index] + " Clicks");
}




//Settings ********************************************************************


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
   document.querySelector('nav').style.boxShadow = '12px 2px 39px -12px rgba(255, 255, 255, 0.75)'
   document.querySelector('section > img').style.boxShadow = 'white'
}

function setBackgroundLight() {
   console.log('Light');
   root.style.setProperty('--text', '#3d3a54');
   root.style.setProperty('--background', '#fbfbfe');
   root.style.setProperty('--primary', '#ffffff');
   root.style.setProperty('--secondary', '#ebeaff');
   root.style.setProperty('--accent', '#c6c3ff');
   document.querySelector('nav').style.boxShadow = '12px 2px 39px -12px rgba(0, 0, 0, 0.75)'
}