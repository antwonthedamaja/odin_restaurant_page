function elementFactory(type, class1, class2, id, text) {
    const element = document.createElement(type);
    
    if (class1) element.classList.add(class1);
    if (class2) element.classList.add(class2);
    if (id) element.setAttribute("id", id);
    if (text) element.textContent = text;
    return element;
}

const container = document.querySelector("#container");

export function basePage() {
    container.appendChild(elementFactory('header', '', '', '', ''));
    container.lastChild.appendChild(elementFactory('div', '', '', 'page1', ''));
    container.lastChild.lastChild.appendChild(elementFactory('span', '', '', '', 'Home'));
    container.lastChild.appendChild(elementFactory('div', '', '', 'page2', ''));
    container.lastChild.lastChild.appendChild(elementFactory('span', '', '', '', 'Menu'));
    container.lastChild.appendChild(elementFactory('div', '', '', 'page3', ''));
    container.lastChild.lastChild.appendChild(elementFactory('span', '', '', '', 'About Us'));
    container.appendChild(elementFactory('div', '', '', 'content', ''));
    container.appendChild(elementFactory('footer', '', '', '', ''));
}

export function tabOne() {
    const content = document.querySelector("#content");
    

}