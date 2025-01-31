const card = document.querySelector("div");

const buttons = document.querySelectorAll("button");
const colors = {
    Name: "rgb(210, 35, 35)",
    Intro: "rgb(50, 160, 75)",
    Hobby: "rgb(200, 190, 65)",
    Dream: "rgb(50, 200, 210)",
};
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        card.style.backgroundColor = colors[button.className];
    });
});

// document.querySelector(".Name").addEventListener("click", () => {
//     card.style.backgroundColor = "rgb(236, 52, 52)";
// });
// document.querySelector(".Intro").addEventListener("click", () => {
//     card.style.backgroundColor = "rgb(70, 180, 94)";
// });
// document.querySelector(".Hobby").addEventListener("click", () => {
//     card.style.backgroundColor = "rgb(226, 214, 83)";
// });
// document.querySelector(".Dream").addEventListener("click", () => {
//     card.style.backgroundColor = "rgb(63, 218, 232)";
// });
//元々自分で書いたコード↑
