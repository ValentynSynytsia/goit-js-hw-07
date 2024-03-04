const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }
    console.log({ "Email": email.trim(), "Password": password.trim()});
    event.target.reset();
}