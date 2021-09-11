import './style.css';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = '<h1>Index.js Component</h1>'
    btn.innerHTML = 'Click Me!! and Check console';

    element.appendChild(btn);

    return element;
}


document.body.appendChild(component());