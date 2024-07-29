
let Logo = document.getElementById('logoB')
let NavBar = document.querySelector('nav');
let root = document.querySelector(':root');
let pics = document.getElementById('settingsContent')

let unterseite = ""
let LoginName = ''

if (localStorage.getItem('SemesterProjektMedientechnik_Lightmode') == null) {
    localStorage.setItem('SemesterProjektMedientechnik_Lightmode', 'Lightmode')
}

let Mode = localStorage.getItem('SemesterProjektMedientechnik_Lightmode')
console.log(Mode)

// var Lightmode = localStorage.getItem('SemesterProjektMedientechnik_Lightmode') === 'true';
// 


// function openNav() {
//     if (Logo.style.rotate == '45deg') {
//         Logo.style.rotate = '0deg'
//         NavBar.style.width = '8vw'
//         NavBar.style.textAlign = 'center'
//     }else{
//         Logo.style.rotate = '45deg'
//         NavBar.style.width = '16vw'
//         NavBar.style.textAlign = 'left'
//     }
// }


function PhotoGenP(id) {



    if (id == 1) {
        //Animals
        // all.innerHTML = ''
        htmlCode = ""
        pics.innerHTML = ''
        unterseite = 'Animals'
        window.location.href = './home.html'


    } else if (id == 2) {
        //Portraits
        // all.innerHTML = ''
        htmlCode = ""
        pics.innerHTML = ''
        unterseite = 'Portraits'
        window.location.href = './home.html'


    } else if (id == 3) {
        //Food
        // all.innerHTML = ''
        htmlCode = ""
        pics.innerHTML = ''
        unterseite = 'Food'
        window.location.href = './home.html'


    } else if (id == 4) {
        //Land
        // all.innerHTML = ''
        htmlCode = ""
        pics.innerHTML = ''
        unterseite = 'Landscape'
        window.location.href = './home.html'


    } else if (id == 5) {
        //add Fotos
        pics.innerHTML = ''
        // all.innerHTML = ''
        window.location.href = './gallery.html'
    } else if (id == 6) {
        //settings
        // all.innerHTML = ''
        pics.innerHTML = ''

        designSettings();
    } else if (id == 7) {
        //home
        // all.innerHTML = ''
        pics.innerHTML = ''

        // generateFotos()
        unterseite = 'Home'
        window.location.href = './home.html'

    } else if (id == 8) {
        //Profil
        // all.innerHTML = ''
        pics.innerHTML = ''

        window.location.href = './profil.html'
        unterseite = 'Profil'

    }



    sessionStorage.setItem('medientechnikSommerprojekt_Unterseite', unterseite)

}


function getname() {
    if (localStorage.getItem('MedientechnikSemesterProjekt_Username') == null) {
        document.getElementById('sayHello').innerHTML = "  Hello user!"
    } else {
        document.getElementById('sayHello').innerHTML = '  Hello ' + localStorage.getItem('MedientechnikSemesterProjekt_Username') + "!";
    }
}

getname()

function generateTextChanges() {
    htmlCode = ''
    htmlCode += `
    
    <div  class="box">
        <h4>Change Username</h4>
        <img onclick="changeUsername()" src="../Pictures/edit.png">
    </div>

    <div  class="box">
        <h4>Change Profilpicture</h4>
        <img onclick="changePic()" src="../Pictures/edit.png">
    </div>

    <div  class="box">
        <h4>Change Banner</h4>
        <img onclick="changeBanner()" src="../Pictures/edit.png">
    </div>

    <div class="box" >
        <h4>Dark/Lightmode</h4>
        <label class="switch" >
            <input type="checkbox">
            <span onclick="switchBetweenModes()" class="slider round"></span>
          </label>
    </div>

    `

    document.getElementById('Content-Settings-Changes').innerHTML = htmlCode;
}

generateTextChanges()

//Changes **********************************************

//Username *********************************************

function changeUsername() {
    htmlCode = ''
    htmlCode += `
    <div id="inputNameAndText">
        <h3>Choose a new Username</h3>
        <input type="text" id="nameEingabe" placeholder="New Username">
        <div id="submitNewUsername" onclick="saveName()">Save</div> 
    </div>`

    document.getElementById('changenameAusg').innerHTML = htmlCode;
}

function saveName() {
    // LoginName = ''
    LoginName = document.getElementById('nameEingabe').value;
    console.log(LoginName)

    localStorage.setItem('MedientechnikSemesterProjekt_Username', LoginName)
    document.getElementById('changenameAusg').style.display = 'none'
    document.getElementById('sayHello').innerHTML = '  Hello ' + LoginName + '!'
}

//Banner ***********************************************

function changeBanner() {
    htmlCode = ''

    htmlCode += `
    <h2 id="chooseBanner">Choose your Banner</h2>
    <div id="changeBanner">
        <div  onclick="changeBannPic(1)"><img class="banner" src="../Pictures/Unterseiten/Settings/banner1.jpg" alt=""></div>
        <div  onclick="changeBannPic(2)"><img class="banner" src="../Pictures/Unterseiten/Settings/banner2.jpg" alt=""></div>
        <div  onclick="changeBannPic(3)"><img class="banner" src="../Pictures/Unterseiten/Settings/banner3.jpg" alt=""></div>
        <div  onclick="changeBannPic(4)"><img class="banner" src="../Pictures/Unterseiten/Settings/banner4.jpg" alt=""></div>
        <div  onclick="changeBannPic(5)"><img class="banner" src="../Pictures/Unterseiten/Settings/banner5.jpg" alt=""></div>
        <div  onclick="changeBannPic(6)"><img class="banner" src="../Pictures/Unterseiten/Settings/banner6.jpg" alt=""></div>
    </div>
    `
    document.getElementById('changebannerAusg').innerHTML = htmlCode;

}

function changeBannPic(id) {
    htmlCode = ''

    localStorage.setItem('MedientechnikSommerprojekt_Banner', id);
    document.getElementById('changebannerAusg').style.display = 'none';	
}

// Bild ************************************************

function changePic() {
    htmlCode = ''

    htmlCode += `
    <h2 id="chooseProfil">Choose your Profile Picture</h2>
    <div id="changeProfil">
        <div  onclick="changeProfilPic(1)"><img class="profil" src="../Pictures/Unterseiten/Settings/profil1.jpg" alt=""></div>
        <div  onclick="changeProfilPic(2)"><img class="profil" src="../Pictures/Unterseiten/Settings/profil2.jpg" alt=""></div>
        <div  onclick="changeProfilPic(3)"><img class="profil" src="../Pictures/Unterseiten/Settings/profil3.jpg" alt=""></div>
        <div  onclick="changeProfilPic(4)"><img class="profil" src="../Pictures/Unterseiten/Settings/profil4.jpg" alt=""></div>
        <div  onclick="changeProfilPic(5)"><img class="profil" src="../Pictures/Unterseiten/Settings/profil5.jpg" alt=""></div>
        <div  onclick="changeProfilPic(6)"><img class="profil" src="../Pictures/Unterseiten/Settings/profil6.jpg" alt=""></div>
    </div>
    `
    document.getElementById('changepicAusg').innerHTML = htmlCode;

}

function changeProfilPic(id) {
    htmlCode = ''

    localStorage.setItem('MedientechnikSommerprojekt_PB', id);
    document.getElementById('changepicAusg').style.display = 'none';	
}

//Logout ***********************************************

function logOut() {
    localStorage.setItem('MedientechnikSemesterProjekt_Username', LoginName)
    window.location.href = './index.html'
}

// Darkmode *******************************************

function changeBetweenModes() {
    if (Mode == 'Lightmode') {
        //Darkmode
        Mode = 'Darkmode';
        localStorage.setItem('SemesterProjektMedientechnik_Lightmode', Mode)
        console.log("erstes if" + Mode);
    } else if (Mode == 'Darkmode') {
        //Lightmode
        Mode = 'Lightmode';
        localStorage.setItem('SemesterProjektMedientechnik_Lightmode', Mode)
        console.log("else if" + Mode);
    }
}

function switchBetweenModes() {
    console.log("clicked")
    changeBetweenModes();

    console.log('fertig***************')
    if (Mode == 'Darkmode') {
        setBackgroundDark();
    } else if (Mode == 'Lightmode') {
        setBackgroundLight();
    }
}

// switchBetweenModes()

function checkMode() {
    if (Mode == 'Darkmode') {
        setBackgroundDark();

    } else if (Mode == 'Lightmode') {
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
// setBackgroundLight()

// switchBetweenModes()