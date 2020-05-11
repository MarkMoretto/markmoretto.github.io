
// import {html, render} from './node_modules/lit-html/lit-html.js';
import {html, render} from 'lit-html';

const mytemplate = (data) => html`<p>Hello, ${data.name}!</p>`

document.createElement('lit-element');
render(mytemplate('World'), document.getElementById('lit-element'));