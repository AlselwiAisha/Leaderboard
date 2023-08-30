import Score from './score.js';
import ScoreList from './List.js';

const scoreList = new ScoreList();

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AVdkzz5NAIgs0R81WwJw/scores/';

//* ----------------Scores API-Fetch Function-----------//
const fetchScores = async () => {
  const data = await fetch(url);
  const json = await data.json();
  return json.result;
};

// *----------------renderScore Function----------------//
function renderScore(obj) {
  const scoreEl = document.createElement('li');
  scoreEl.classList.add('score-item');
  scoreEl.setAttribute('value', obj.id);
  scoreEl.innerHTML = `
                <h3>${obj.user} : ${obj.score} </h3>
           `;
  document.querySelector('.list').appendChild(scoreEl);
}

// *-----------------Scores Refresh Function----------------//
const refreshScores = async () => {
  scoreList.list = await fetchScores();
  const list = document.querySelector('.list');
  list.innerHTML = '';
  scoreList.list.forEach((obj) => renderScore(obj));
};

// *------------------Score AddFunction---------------------//
const addScore = async () => {
  const user = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  if (user === '' || score === '' || score < 0) {
    throw new Error('Please fill in all fields');
  } else {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';

    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(new Score(user, score)),

    });
    // to refresh list
    refreshScores();
  }
};

export {
  addScore, refreshScores,
};