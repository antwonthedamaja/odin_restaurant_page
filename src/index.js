import {basePage} from "./page";
import {tabOne} from "./page";
import {tabTwo} from "./page";
import "./style.css"

basePage();
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");

let page1Trigger = true;
let page2Trigger = false;

tabOne();
page1.classList.add('selected');

page1.addEventListener('click', () => {
    if (page1Trigger === false) {
        page1.classList.add('selected');
        page2.classList.remove('selected');
        tabOne();
        page1Trigger = true;
        page2Trigger = false;
    }
});

page2.addEventListener('click', () => {
    if (page2Trigger === false) {
        page2.classList.add('selected');
        page1.classList.remove('selected');
        tabTwo();
        page2Trigger = true;
        page1Trigger = false;
    }
});