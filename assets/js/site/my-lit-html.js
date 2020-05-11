
// import {html, render} from './node_modules/lit-html/lit-html.js';
import {html, render} from 'lit-html';

const myTemplate = (name) => html`<p>Hello ${name}</p>`;


render(myTemplate('World'), document.body);