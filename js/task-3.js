const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handler = () => {
    output.textContent = input.value.trim() || "Anonymous";
}
input.addEventListener("input", handler)


// Інший спосіб
// const handler = (event) => {
//     output.textContent = event.currentTarget.value.trim() || "Anonymous";
// }
// input.addEventListener("input", handler)