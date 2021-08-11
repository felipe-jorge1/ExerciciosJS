let tabs = document.querySelector(".tabs");
let tabsHeader = tabs.querySelector(".tabs__header");
let tabsBody = tabs.querySelector(".tabs__body");
let tabsSelector = tabs.querySelector(".tabs__selector");
let tabsHeaderNodes = tabs.querySelectorAll(".tabs__header > div");
let tabsBodyNodes = tabs.querySelectorAll(".tabs__body > div");

for(let i=0; i<tabsHeaderNodes.length; i++) {
    tabsHeaderNodes[i].addEventListener("click", function(){
        tabsHeader.querySelector(".active").classList.remove("active");
        tabsHeaderNodes[i].classList.add("active");
        tabsBody.querySelector(".active").classList.remove("active");
        tabsBodyNodes[i].classList.add("active");
        tabsSelector.style.left = `calc(calc(calc(33% - 42px) * ${i}) + 10px)`;
    });
}