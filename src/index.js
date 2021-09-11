import './style.css';
import Print from './test.js';
import Events from 'events';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = '<h1>Index.js Component</h1>'
    btn.innerHTML = 'Click Me!! and Check console';

    btn.onclick = Print.bind(null, 'Hello webpack!');

    element.appendChild(btn);

    return element;
}


document.body.appendChild(component());