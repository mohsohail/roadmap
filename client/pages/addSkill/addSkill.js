'use strict';

(function () {
  let baseUrl = 'http://localhost:8000/';
  let createSkill = 'api/v1/skills';

  const skillForm = document.getElementById('skillForm');

  const createSkillMethod = (e) => {
    e.preventDefault();
    let skillName = document.querySelector('input').value;
    if (!skillName) {
      return;
    }

    let data = {
      skillName: 'hello',
      trackerType: 'simple',
      sessions: 7,
    };

    let params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(`${baseUrl}${createSkill}`, params)
      .then((data) => console.log(data))
      .catch();
  };

  skillForm.addEventListener('submit', createSkillMethod);
})();
