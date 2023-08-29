import './style.css';
import Score from './modules/score.js';

let scoreList = [];
const addScoreBtn = document.querySelector('#add_btn');
const refreshBtn = document.querySelector('#refresh-btn');


function renderScore(obj) {
  const scoreElement = document.createElement('div');
  scoreElement.classList.add('score-item');
  scoreElement.setAttribute('value', obj.id);
  scoreElement.innerHTML = `
              <h3> ${obj.score}: ${obj.name}</h3>
         `;
  document.querySelector('.list').appendChild(scoreElement);
}

function addScore() {
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  if (name.value === '' || score.value === '') {
    throw new Error('Please fill in all fields');
  } else {
    const scoreObj = new Score(scoreList.length, score.value, name.value);
    scoreList.push(scoreObj);
    renderScore(scoreObj);
    name.value = '';
    score.value = '';
  }
  localStorage.setItem('List', JSON.stringify(scoreList));
}

addScoreBtn.addEventListener('click', addScore);

function refreshScores() {
  const scoresListElement = document.querySelector('.list');
  scoresListElement.innerHTML = '';
  scoreList.forEach((obj) => renderScore(obj));
}

refreshBtn.addEventListener('click', refreshScores);

window.onload = () => {
   scoreList = JSON.parse(localStorage.getItem('List')) || [];
  refreshScores();
};