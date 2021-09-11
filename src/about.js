function component() {
    const element = document.createElement('div');
    element.innerHTML = '<h1>Welcome About Page</h1>';
    element.innerHTML += '<p>Webpack Test!</p>'
    return element;
}


document.body.appendChild(component());