const password = document.getElementById("pass");
const confirmPassword = document.getElementById("passConfirm");
const errorMsg = document.getElementById("errorMsg");

confirmPassword.addEventListener("focusout", validatePAssword);

// This should be refactored.
function validatePAssword() {
	if (password.value !== confirmPassword.value) {
		errorMsg.textContent = "❗Password DO NOT MATCH!";
		errorMsg.style.visibility = "visible";		
		password.value = "";
		password.focus();
		password.style.backgroundColor = "#fff0f3";
		confirmPassword.value = "";
		confirmPassword.style.backgroundColor = "#fff0f3";
	} else {
		errorMsg.style.display = "none";
		confirmPassword.style.backgroundColor = "#fff";
		confirmPassword.style.color = "#000";
	}
}