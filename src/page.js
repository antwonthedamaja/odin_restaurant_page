function elementFactory(type, class1, class2, id, text) {
    const element = document.createElement(type);
    if (class1) element.classList.add(class1);
    if (class2) element.classList.add(class2);
    if (id) element.setAttribute("id", id);
    if (text) element.innerHTML = text;
    return element;
}

export function basePage() {
    const container = document.querySelector("#container");
    container.appendChild(elementFactory('header', undefined, undefined, undefined, undefined));
    container.lastChild.appendChild(elementFactory('div', undefined, undefined, 'page1', undefined));
    container.lastChild.lastChild.appendChild(elementFactory('span', undefined, undefined, undefined, 'Home'));
    container.lastChild.appendChild(elementFactory('div', undefined, undefined, 'page2', undefined));
    container.lastChild.lastChild.appendChild(elementFactory('span', undefined, undefined, undefined, 'Menu'));
    container.lastChild.appendChild(elementFactory('div', undefined, undefined, 'page3', undefined));
    container.lastChild.lastChild.appendChild(elementFactory('span', undefined, undefined, undefined, 'About Us'));
    container.appendChild(elementFactory('div', undefined, undefined, 'content', undefined));
    container.appendChild(elementFactory('footer', undefined, undefined, undefined, undefined));
    container.lastChild.appendChild(elementFactory('div', undefined, undefined, undefined, '<em>*Note I am not the person in the picture. Thanks to Paul Dilett for his likeness</em>'));
}

export function tabOne() {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    content.appendChild(elementFactory('h1', undefined, undefined, undefined, `Welcome to Antwon's Pizzeria!`));
    const img = elementFactory('img', undefined, undefined, undefined, undefined);
    img.setAttribute('src', '/src/picture.png')
    content.appendChild(img);
    content.appendChild(elementFactory('div', undefined, undefined, 'alt', `<em>Antwon in his kitchen</em>`));
    content.appendChild(elementFactory('div', undefined, undefined, 'text-container', `<b>When the moon hits your eye and you want a pizza pie</b>, come try the Pizza Tower or any of your favorites 
    at Antwon's Pizzeria. Antwon D'Maja has been making pizza since he opened his first pizzeria in the year of 1868.`));
    content.lastChild.appendChild(elementFactory('p', undefined, undefined, undefined, `Though he is not from Italy, he prides his work as an authentic Italian experience and has wowed Pizza
    Enthusiast critics such as Vinny Vinesauce, Doctor Don Wario M.D, and Jabroni Mike with his Za's. Come try
    some Pizza today!`));
}

export function tabTwo() {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    
}