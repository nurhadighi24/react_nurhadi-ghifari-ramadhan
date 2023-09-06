const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("inputEmail");
const textAreaInput = document.getElementById("textArea");

submitFormToAlert = () => {
  const submitButton = document.getElementById("btn-submit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const firstNameInputed = firstNameInput.value;
    const lastNameInputed = lastNameInput.value;
    const emailInputed = emailInput.value;
    const textAreaInputed = textAreaInput.value;
    alert(
      `UserName: ${firstNameInputed} ${lastNameInputed}\nEmail: ${emailInputed}\nMessage: ${textAreaInputed}`
    );
  });
};
submitFormToAlert();
