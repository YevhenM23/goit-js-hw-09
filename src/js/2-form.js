const formData = {
    email: "",
    message: ""
}

const KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const input = form.elements.email;
const textarea = form.elements.message;

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
retInfo();

function handleInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
}

function retInfo() {
    const infoFromStorage = localStorage.getItem(KEY);
    const savedInfo = JSON.parse(infoFromStorage);

    if (savedInfo.email) {
        input.value = savedInfo.email;
        formData.email = savedInfo.email;
    } 
    if (savedInfo.message) {
        textarea.value = savedInfo.message;
        formData.message = savedInfo.message;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData.email.trim());
    console.log(formData.message.trim());
    
    event.currentTarget.reset();
    localStorage.removeItem(KEY);
    formData.email = "";
    formData.message = "";
}



