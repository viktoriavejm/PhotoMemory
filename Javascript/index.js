let inputName = document.getElementById('username').value;
let inputField = document.getElementById('username');
let ErrorMes = document.getElementById('errorMessage');
let LoginName;

inputField.addEventListener("keypress", function(event) {
  
    if (event.key === "Enter") {
      submitName()
    }
  });

function submitName() {

    let inputName = document.getElementById('username').value;
    
    // console.log(inputName + "hihi")
    if (inputName == '' || inputName.length > 10) {
        ErrorMes.innerHTML = `<p>Please make sure all fields are filled out. And max. 10 Symbols</p>`  
    }else{
        LoginName = inputName;
        localStorage.setItem('MedientechnikSemesterProjekt_Username', LoginName)
        window.location.href = "./home.html" 
    }  
    
    inputName = ''
}