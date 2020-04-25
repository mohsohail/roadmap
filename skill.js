'use strict';
// import env from './config';

function createNode(element) {
  return document.createElement(element);
}
function appendChild(parent, el) {
  return parent.appendChild(el);
}

(function () {
  let baseUrl = 'http://localhost:8000/';
  let getSkills = 'api/v1/skills';

  let body = document.getElementById('body');

  fetch(`${baseUrl}${getSkills}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      data.data.map((item) => {
        let template = `<div class="panel"><div class="panel-head"><h1>header</h1></div><div class="panel-body flex-body"><div class="skill-name bold">${item.skillName}</div><div class="skill-tracker flex-body m-left-20"><div class="done m-left-10">done</div></div></div></div>`;

        body.insertAdjacentHTML('beforeend', template);

        let foo = document.querySelector('panel-body');
        console.log(foo);
      });
    })
    .catch((err) => console.log(err));
})();
