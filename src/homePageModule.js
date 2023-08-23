
export function createHomePage() {
    const contentDiv = document.querySelector("#content");

    const image = document.createElement("img");
    image.src = "homepagePic.jpg";
    image.alt = "Restaurants picture";

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Our Wonderful Restaurant";

    const copy = document.createElement("p");
    copy.textContent = "Indulge in an unforgettable dining experience"

    contentDiv.appendChild(image);
    contentDiv.appendChild(headline);
    contentDiv.appendChild(copy);

};