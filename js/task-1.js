const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(element => {
    const categoryName = element.querySelector("h2").textContent;
    const categoryLength = element.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryLength}`);
})



