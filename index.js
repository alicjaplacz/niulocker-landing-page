const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector(".error");

form.addEventListener("submit", function(event){
  if(!email.validity.valid){
    showErrorEmail();
    event.preventDefault();
  }
});

function showErrorEmail(){
  if(email.validity.typeMismatch || email.validity.valueMissing){
    emailError.textContent = "Please provide a valid email";
    form.classList.add("invalid");
  }
  emailError.className = "error";
}
