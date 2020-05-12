// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// https://fred.stlouisfed.org/docs/api/fred/
// Nice example: https://github.com/taniarascia/sandbox/blob/master/ghibli/scripts.js
// Secret API key: https://git-secret.io/

// https://dzone.com/articles/cors-in-node


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}


var url = new URL("https://api.stlouisfed.org/fred/category");
var params = { category_id: "125", api_key: "4e29f15827a4b030de5b2efea0dd044f", file_type: "json" };

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));


var crude_attrs = JSON.stringify({
    "wti": {
        "name": "West Texas Intermediate",
        "column": "DCOILWTICO",
        "start_dt": "1986-01-02"
    },
    "brent": {
        "name": "Brent - Europe",
        "column": "DCOILBRENTEU",
        "start_dt": "1987-05-20"
    }
});

var crude_params = JSON.stringify({
    'bgcolor': '#e1e9f0',
    'chart_type': 'line',
    'drp': '0',
    'fo': 'open sans',
    'graph_bgcolor': '#ffffff',
    'height': '450',
    'mode': 'fred',
    'recession_bars': 'on',
    'txtcolor': '#444444',
    'ts': '12',
    'tts': '12',
    'width': '1168',
    'nt': '0',
    'thu': '0',
    'trc': '0',
    'show_legend': 'yes',
    'show_axis_titles': 'yes',
    'show_tooltip': 'yes',
    'id': 'DCOILBRENTEU',
    'scale': 'left',
    'cosd': '1987-05-20',
    'coed': '2020-05-04',
    'line_color': '#4572a7',
    'link_values': 'false',
    'line_style': 'solid',
    'mark_type': 'none',
    'mw': '3',
    'lw': '2',
    'ost': '-99999',
    'oet': '99999',
    'mma': '0',
    'fml': 'a',
    'fq': 'Daily',
    'fam': 'avg',
    'fgst': 'lin',
    'fgsnd': '2009-06-01',
    'line_index': '1',
    'transformation': 'lin',
    'vintage_date': '2020-05-09',
    'revision_date': '2020-05-09',
    'nd': '1987-05-20'});



    // async function getFredData(myurl) {
    //     let resp = await fetch(myurl, {
    //       mode: 'no-cors',
    //       method: 'GET',
    //       credentials: 'include',
    //       cache: 'only-if-cached', // *default, no-cache, reload, force-cache, only-if-cached
    //       redirect: 'follow', // manual, *follow, error
    //       referrerPolicy: 'strict-origin-when-cross-origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //       headers: {
    //         "Accept": "application/json",
    //         "Access-Control-Allow-Origin": "https://127.0.0.1:4000/*",
    //         'Access-Control-Allow-Credentials': 'true',
    //         "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    //       }
    //       });
    //       let data = await resp.text();
    //       return data;
    //   }

    // (async () => {
    //     const res = await fetch(url);
    //     const data = await res.text();
    //     console.log(data);
    //   })();

      
    //   getFredData(url)
    //     .then(data => console.log(data)); 





// fetch(url, {mode: 'no-cors'})
//     .then(function (response) {
//       return response;
//     })
//     .then(function (resp) {
//       let tmp = resp.json();
//       var data = tmp.categories;
//       mainContainer.innerHTML = `${data.id}, ${data.name}, ${data.parent_id}`;
//     })
//     .catch(function (err) {
//       console.log(err);
//     }); 

    // fetch(url, {mode: 'cors'})
    // .then(function (response) {
    //   return response.text();
    // })
    // .then(function (resp) {
    //   alert(resp);
    // })
    // .catch(function (err) {
    //   console.log(err);
    // });

    // // Find out headers
    // var req = new XMLHttpRequest();
    // req.open('GET', document.location, false);
    // req.send(null);
    // var headers = req.getAllResponseHeaders().toLowerCase();

    // function fetchSimilarHeaders (callback) {
    //     var request = new XMLHttpRequest();
    //     request.onreadystatechange = function () {
    //         if (request.readyState === XMLHttpRequest.DONE) {
    //             //
    //             // The following headers may often be similar
    //             // to those of the original page request...
    //             //
    //             if (callback && typeof callback === 'function') {
    //                 callback(request.getAllResponseHeaders());
    //             }
    //         }
    //     };
    
    //     //
    //     // Re-request the same page (document.location)
    //     // We hope to get the same or similar response headers to those which 
    //     // came with the current page, but we have no guarantee.
    //     // Since we are only after the headers, a HEAD request may be sufficient.
    //     //
    //     request.open('HEAD', document.location, true);
    //     request.send(null);
    // }    
    // async function GetApiContent() {
    //     let response = await fetch(url, {
    //       mode: 'cors',
    //       method: "GET",
    //       credentials: 'include',
    //       referrerPolicy: 'no-referrer',
    //       headers: {
    //         "Accept": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         'Content-Type': 'application/x-www-form-urlencoded', // 'application/json'
    //         'Access-Control-Allow-Credentials': 'true',
    //         "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    //         }
    //         });
    //     let jresp = await response.json();

    //     return jresp;
    //   }
    
    //   GetApiContent().then(text => console.log(text));


    /// Using Promise, await ,async.
    // This isn't working yet.
    // async function GetApiContent() {
    //     let value = await fetch(url, {
    //         mode: "no-cors",
    //         method: "GET",
    //         headers: {
    //           Accept: "application/json",
    //           }
    //         })
    //         .then(response => JSON.stringify(response.text()))
    //         .then(text => console.log(text));
    //         return value;
    //     }
      
    //     GetApiContent();

    // function reqListener () {
    //     console.log(this.responseXML);
    //   }
  
    //   const xhr = new XMLHttpRequest(),
    //    method = "GET";
  
    //   xhr.open(method, url, true);
    //   xhr.setRequestHeader('Content-Type', 'text/xml; charset=UTF-8');
    //   xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    //   xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    //   xhr.setRequestHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    //   xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');       
    //   xhr.onreadystatechange = function() {
    //     if(xhr.readyState === XMLHttpRequest.DONE) {
    //       var status = xhr.status;
    //       if (status === 0 || (status >= 200 && status < 400)) {
    //         console.log(xhr.responseXML);
    //       }
    //     }
    //   }
  
    //   xhr.send();
//////////////////////////////////////////////////////////
// TESTING
// Uses random user site: https://randomuser.me/
// https://fetch.spec.whatwg.org/#fetch-api

// var url2 = new URL("https://randomuser.me/api");
// var params2 = {results: 10};
// Object.keys(params2).forEach(key => url2.searchParams.append(key, params2[key]));

function getUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// getUrlVars();

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