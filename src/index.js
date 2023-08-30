import './style.css';
import { addScore, refreshScores } from './modules/funcs.js';

const addScoreBtn = document.querySelector('#add_btn');
const refreshBtn = document.querySelector('#refresh-btn');

addScoreBtn.addEventListener('click', addScore);
refreshBtn.addEventListener('click', refreshScores);

window.onload = () => {
  refreshScores();
};