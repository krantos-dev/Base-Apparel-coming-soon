const emailVal = document.getElementById("emailVal");
const formButton = document.querySelector(".form__btn")
const preText = document.querySelector(".preText");

const validateIcon = document.querySelector(`.validateIcons`)
console.log("here", validateIcon)

emailVal.addEventListener("keyup", (e)=>{
    const isValidEmail = emailVal.checkValidity()

    if(isValidEmail){
        preText.textContent = "CORRECT!"
        preText.style.color ="green"
        validateIcon.innerHTML = `<i class ='fas fa-check-circle'></i>`;
        console.log( validateIcon.innerHTML)
        validateIcon.style.color="green";

    }else{
        preText.textContent = " please provide a valid email"
        preText.style.color = "red"
        validateIcon.innerHTML = `<i class = 'fas fa-exclamation-circle'></i>`;
        validateIcon.style.color="red";
        console.log('this is disabled', formButton.disabled)
        formButton.classList.add('.invalidBtn')
    }
})
