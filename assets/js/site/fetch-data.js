// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// https://fred.stlouisfed.org/docs/api/fred/
// Nice example: https://github.com/taniarascia/sandbox/blob/master/ghibli/scripts.js
// Secret API key: https://git-secret.io/


function joinUrl(root, addr) {
    const fslash = "/";
    if (root.slice(-1) == fslash) {
        return root + fslash + addr;
        
    } else {
        return root + addr;
    }

}

const fred_url = "https://fred.stlouisfed.org/docs/api/fred/category";
const subcat = "category"

var url = new URL(joinUrl(fred_url, subcat));
var params2 = {category_id: 125, file_type: json };

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));


fetch(url2, {mode:"cors"})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log("something went wrong: " + e));


//////////////////////////////////////////////////////////
// TESTING
// Uses random user site: https://randomuser.me/
// https://fetch.spec.whatwg.org/#fetch-api

// var url2 = new URL("https://randomuser.me/api");
// var params2 = {results: 10};
// Object.keys(params2).forEach(key => url2.searchParams.append(key, params2[key]));


// function createNode(element) {
//     return document.createElement(element);
// }

// function append(parent, el) {
//     return parent.appendChild(el);
// }


// fetch(url2, {mode:"cors"})
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(e => console.log("something went wrong: " + e));


// fetch('https://api.stlouisfed.org/fred/category?category_id=125&api_key=4e29f15827a4b030de5b2efea0dd044f&file_type=json')
//     .then(response => response.json())
//     .then(data => console.log(data));

//     let response = await fetch('https://api.stlouisfed.org/fred/category', {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           'API-Key': '4e29f15827a4b030de5b2efea0dd044f'
//         }
//       });

// // Example POST method implementation:
// async function getData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
//       mode: 'no-cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then(data => {
//       console.log(data); // JSON data parsed by `response.json()` call
//     });