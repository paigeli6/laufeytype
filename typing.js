
const songs = {
    song1: {
        id: 'song1',
        name: 'From The Start',
        audio: "assets/fromthestart_trim.mp3",
        words: 'dont you notice how i get quiet when theres no one else around me and you and awkward silence dont you dare look at me that way i dont need reminders of how you dont feel the same oh the burning pain listening to you harp on bout some new soulmate shes so perfect blah blah blah oh how i wish youll wake up one day run to me confess your love at least just let me say that when i talk to you oh cupid walks right through and shoots an arrow through my heart and i sound like a loon but dont you feel it too confess i loved you from the start'.split(' '),
        timestamps: [5296, 5680, 6077, 7337, 8834, 9151, 9575, 10187, 10630, 11000, 11366, 11910, 12911, 14509, 15053, 15416, 15706, 16078, 16804, 17577, 18394, 18750, 19930,
        20292, 20655, 21263, 21716, 23405, 23765, 24128, 24560, 25558, 26069, 26341, 26703, 27042, 27402, 27780, 28744, 
        29106, 29469, 30805, 32075, 32924, 33287, 33650, 34012, 34372, 34735, 35188, 36277, 38091, 38293, 38567, 39562,
        39807, 40170, 40611, 40974, 41881, 42388, 43205, 43734, 43993, 44703, 45157, 46790, 47204, 47566, 47929, 48655, 49199,
        49425, 49788, 50054, 50311, 50764, 51127, 51943, 52987, 53446, 53893, 54528, 54981, 55616, 55761, 56849, 57444, 
        57989, 58439, 58795, 59249, 59884, 60791, 61290, 61652, 63829, 64518, 65062, 65492, 66216, 66761, 67081,
        67444, 67988, 68532, 69167, 69499, 70044, 70926, 71470, 71924, 72459, 72912, 73366],
        game_duration: 75925,
        cover: 'assets/start_albumcover.png',
        stars: 'assets/song1_stars.pdf',
        timeremain: '-1:16',
        totalchars: '427',
        smallcover: 'assets/small_cover1.png',
    },
    song2: {
        id: 'song2',
        name: 'Promise',
        audio: "assets/promise_trim.mp3", //promise_trim.mp3
        words: 'i made a promise to distance myself took a flight through aurora skies honestly i didnt think about how we didnt say goodbye just see you very soon it hurts to be something its worse to be nothing with you so i didnt call you for sixteen long days and i should get a cigarette for so much restraint no matter how long i resist temptation i will always lose it hurts to be something its worse to be nothing with you ive done the math theres no solution well never last why cant i let go of this'.split(' '),
        timestamps: [14376, 14830, 15950, 16220, 20270, 20598, 22594, 26990, 27263, 27444, 29531, 29987, 30692, 33414, 35000, 35454, 36089,
            37000, 37910, 38817, 39452, 40994, 41793, 43153, 43970, 44514, 45892, 47252, 49611, 50099, 50462, 50900, 51550, 52548, 53092, 
            53641, 53910, 54457, 56362, 56716, 69380, 70106, 70395, 71393, 72200, 75202, 75792, 76970, 78240, 82096, 82300, 82666, 83029, 85115,
            85387, 87972, 88516, 89151, 89508, 90777, 91680, 93011, 93918, 94734, 95369, 96820, 99042, 99765, 100444, 102530, 104560, 105014, 
            105528, 105800, 106435, 107614, 108074, 108568, 108823, 109458, 110547, 111363, 112630, 113086, 113540, 113808, 115531, 115920, 116370,
            118459, 118913, 119639, 123130, 123612, 124425, 125064, 125789, 126606, 127422
        ],
        game_duration: 141127,
        cover: 'assets/start_albumcover.png',
        stars: 'assets/promise_stars.pdf',
        timeremain: '-2:21',
        totalchars: '395',
        smallcover: 'assets/promise_small.png',
    },
    song3: {
        id: 'song3',
        name: 'Valentine',
        audio: "assets/valentine_trim.mp3",
        words: 'ive rejected affection for years and years now i have it and damn it its kind of weird he tells me im pretty dont know how to respond i tell him that hes pretty too can i say that dont have a clue with every passing moment i surprise myself im scared of flies im scared of guys someone please help cause i think ive fallen in love this time i blinked and suddenly i had a valentine'.split(' '),
        timestamps: [8607, 9242, 10845, 12265, 12544, 13451, 13905, 15303, 15575, 15847, 16215, 16758, 17393, 17755, 18119, 18481, 19298, 19661, 21112,
            21300, 21935, 22661, 22879, 23817, 24183, 24546, 25304, 25576, 26850, 27212, 27757, 28029, 28482, 28701, 29336, 29854, 30126, 30489,
            30850, 31273, 31577, 31789, 32062, 32876, 33241, 33876, 34609, 35549, 35793, 37063, 38605, 39058, 39456, 39548, 40182, 40725, 40914, 
            41005, 41730, 42637, 43272, 44490, 44852, 45395, 46120, 46250, 47429, 48155, 48795, 49248, 50335, 50584, 51217, 51373, 52372, 52734,
            53039, 53492
        ],
        game_duration: 58256,
        cover: 'assets/val_cover.png',
        stars: 'assets/val_stars.pdf',
        timeremain: '-0:58',
        totalchars: '304',
        smallcover: 'assets/val_small.png',
    },
    song4: {
        id: 'song4',
        name: 'Bored',
        audio: "assets/bored_trim.mp3",
        words: 'why dont we call it for what it is cant remember the last time we kissed and it tickled my heart i think that its best that we spend time apart i just yawn listening to you talk about yourself again and again im bored bored of this love oh im bored bored of this talk and maybe youre just way too vain to be interesting baby keep talkin but nobodys listening dont mean to walk out the door but baby im bored'.split(' '),
        timestamps: [1088, 1542, 1905, 4535, 4989, 5211, 5573, 6662, 7020, 8854, 9308, 10307, 10900, 11448, 11992, 12329, 14052, 14259, 14712,
            15528, 15982, 17070, 17217, 17852, 18215, 18487, 19122, 19589, 19861, 20422, 21040, 21769, 22223, 22676, 25125, 26395, 26939, 27801, 28340,
            29072, 29983, 32112, 32528, 35248, 36065, 38061, 38857, 39039, 39491, 40218, 40399, 41215, 43303, 43817, 44000, 44453, 45270, 45919, 
            46644, 47007, 47642, 47825, 48368, 48878, 49150, 49603, 51054, 51780, 52231, 53044, 53406, 54766, 56184, 56726, 57000, 57363, 57997, 
            58154, 58516, 59966, 60156, 60882, 61879
        ],
        game_duration: 70922,
        cover: 'assets/bored_cover.png',
        stars: 'assets/bored_stars.pdf',
        timeremain: '-1:10',
        totalchars: '332',
        smallcover: 'assets/bored_small.png',
    },
};

let currentSong = null;
let GAME_DURATION;
let gameTimeout;
let words = [];
let timestamps = [];
let wordsCount;
let tcLetters = 0;
let totalLetters = 0;
let syncscore; // equals tcletters / song.totalchars
let syncScoreHistory = [];
let syncInterval = null;

const audio = new Audio();

const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const game = document.getElementById('game');
const newGameBtn = document.getElementById('newGameBtn');

function loadSong(songId) {
    currentSong = songs[songId];
    audio.src = currentSong.audio;
    audio.load();
    GAME_DURATION = currentSong.game_duration;
    words = currentSong.words;
    timestamps = currentSong.timestamps;
    wordsCount = words.length;
    totalLetters = currentSong.totalchars;

    document.getElementById('bewitchedCover').src = currentSong.cover;
    document.getElementById('song1stars').src = currentSong.stars;
    document.getElementById('s1-time-remaining').textContent = currentSong.timeremain;
    document.getElementById('smallCover').src = currentSong.smallcover;

}


function addClass(el,name) {
    el.className += ' '+name;
}

function removeClass(el,name) {
    el.className = el.className.replace(name,'');
}

function formatWord(word) {
    return `<div class="word"><span class="letter">${word.split('').join('</span><span class="letter">')}</span></div>`;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });

    if (screenId == 'dashboard') {
        document.getElementById(screenId).style.display = 'grid';
    } else {
        document.getElementById(screenId).style.display = 'block';
    }

    
    const header = document.getElementById('main-header');
    if (screenId === 'menu-screen') {
        header.style.display = 'none';
    } else {
        header.style.display = 'block';
    }
}

// starting page
showScreen('menu-screen');

function returnMenu() {
    showScreen('menu-screen');
    audio.pause();
    audio.currentTime = 0;
    newGame();
}
// return to menu by clicking header
document.getElementById('title').addEventListener('click', returnMenu);
document.getElementById('homedash_btn').addEventListener('click', returnMenu);


const s1PlayBtn = document.getElementById("s1-play");
const playIcon = document.getElementById("s1playbtn");
const s1ProgressBar = document.getElementById("s1-progress-bar");
const s1ProgressFill = document.getElementById("s1-progress-fill");
const s1elapsedEl = document.getElementById('s1-time-elapsed');
const s1remainingEl = document.getElementById('s1-time-remaining');


let activeListener = false;

function updateProgressBar() {
    const s1progress = (audio.currentTime / audio.duration) * 100;
    s1ProgressFill.style.width = s1progress + '%'; 

    const knob = document.getElementById('s1-progress-knob');
    const barWidth = s1ProgressBar.clientWidth;
    const knobPosition = (s1progress / 100) * barWidth;
    knob.style.left = `${knobPosition}px`;

    const elapsed = audio.currentTime;
    const remaining = audio.duration - elapsed;
    s1elapsedEl.textContent = formatTime(elapsed);
    s1remainingEl.textContent = `-${formatTime(remaining)}`;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}


function gameplay () {
    showScreen('start-screen');
    playIcon.src="assets/start_playBtn.png";

    if (activeListener) {
        s1PlayBtn.removeEventListener("click", playButtonHandler);
    }
    s1PlayBtn.addEventListener("click", playButtonHandler);
    activeListener = true;


    s1ProgressBar.addEventListener("click", (e) => {
        const clickPos = e.offsetX;
        const containerWidth = s1ProgressBar.clientWidth;
        const seekTime = (clickPos / containerWidth) * audio.duration;

        audio.currentTime = seekTime;
        updateProgressBar();

        if (audio.paused) {
            audio.play();
            playIcon.src = "assets/start_pauseBtn.png";
            playButton.setAttribute("data-state", "pause");
        }
    });

    audio.addEventListener("timeupdate", updateProgressBar);

    // reset progress when song ends
    audio.addEventListener("ended", function() {
        s1ProgressFill.style.width = "0%";
        s1PlayBtn.setAttribute("data-state", "play");
        playIcon.src = "assets/start_playBtn.png";
        audio.pause();
        audio.currentTime = 0;
    });
}



document.getElementById('song1').addEventListener('click', function() {
    loadSong('song1');
    gameplay();
});

document.getElementById('song2').addEventListener('click', function() {
    loadSong('song2');
    gameplay();
});

document.getElementById('song3').addEventListener('click', function() {
    loadSong('song3');
    gameplay();
});

document.getElementById('song4').addEventListener('click', function() {
    loadSong('song4');
    gameplay();
});



function playButtonHandler() {
    if (audio.paused) {
        audio.play();
        this.setAttribute("data-state", "pause");
        playIcon.src = "assets/start_pauseBtn.png";
    } else {
        audio.pause();
        this.setAttribute("data-state", "play");
        playIcon.src = "assets/start_playBtn.png";
    }
}


startButton.addEventListener('click', function () {
    showScreen('game');
    game.focus();
    newGameBtn.style.display = 'inline-block';
    clearTimeout(gameTimeout);
    audio.currentTime = 0;
    audio.play();
    newGame(); 
    gameTimeout = setTimeout(gameOver, GAME_DURATION);

    setInterval(() => {
    const progressFill = document.getElementById('progress-fill');
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = percentage + '%';
    }, 100);
    
});

function recordSyncScore() {
    const mistypes = document.querySelectorAll('.letter.incorrect').length;
    const mistimed = document.querySelectorAll('.letter.correct:not(.timeCorrect)').length;

    const timeCorrect = document.querySelectorAll('.timeCorrect').length;
    const typedLetters = mistypes + mistimed + tcLetters;

    const syncScore = timeCorrect / typedLetters;
    const currentTime = audio.currentTime;

    syncScoreHistory.push({ time: Math.round(currentTime), score: syncScore });
}


function newGame() {
    clearInterval(syncInterval);
    tcLetters = 0;
    syncScore = 0;
    syncScoreHistory = [];
    document.getElementById('info').innerHTML = 'Score: 0';

    removeClass(document.getElementById('game'), 'over');
    removeClass(document.getElementById('game'), 'over');

    document.getElementById('words').innerHTML = '';
    document.getElementById('words').style.marginTop = '0px';

    document.getElementById('progress-bar').style.display = 'block';

    for (let i = 0; i < wordsCount; i++) {
        const word = words[i]; // cycles through words in order
        document.getElementById('words').innerHTML += formatWord(word);
    }
    
    document.querySelectorAll('.current').forEach(el => {
        removeClass(el, 'current');
    });


    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');

    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');
    cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 2 + 'px';
    cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';
    cursor.style.display = 'block';

    let previousHighlighted = null;

    document.querySelectorAll('.word').forEach((wordEl, index) => {
        const timestamp = timestamps[index]; // in ms
        const words = document.getElementById('words');
        const margin = parseInt(words.style.marginTop || '0px');
        setTimeout(() => {
            
            if (previousHighlighted) {
                removeClass(previousHighlighted, 'highlighted');
            }
            addClass(wordEl, 'highlighted');
            previousHighlighted = wordEl;
            
            
        }, timestamp);
    }); 

    syncInterval = setInterval(recordSyncScore, 5000);
    
}


document.getElementById('game').addEventListener('keyup', ev => {
    const key = ev.key;
    const currentLyric = document.querySelector('.word.highlighted');
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== ' ';
    const isSpace = key === ' ';
    const isBackspace = key === 'Backspace';
    const isFirstLetter = currentLetter === currentWord.firstChild;
    const extras = [...currentWord.querySelectorAll('.letter')].filter(l => l.className.includes('extra'));
    const lastExtra = extras[extras.length - 1];
    console.log('Lyric pos:', currentLyric?.getBoundingClientRect().top);
    console.log('Word pos:', currentWord.getBoundingClientRect().top);

    if (document.querySelector('#game.over')) {
        return;
    }

    if (isLetter) {
        if (currentLetter) {
            const isCorrect = key === expected;
            
            addClass(currentLetter, isCorrect ? 'correct' : 'incorrect');
            
            if (isCorrect && currentWord.classList.contains('highlighted') && !currentLetter.classList.contains('extra')) {
                addClass(currentLetter, 'timeCorrect');
                tcLetters++;
                document.getElementById('info').innerHTML = tcLetters + '';
            }

            removeClass(currentLetter, 'current');
            if (currentLetter.nextSibling){
                addClass(currentLetter.nextSibling, 'current');
            }
        } else {
            const incorrectLetter = document.createElement('span');
            incorrectLetter.innerHTML = key;
            incorrectLetter.className = 'letter incorrect extra';
            currentWord.appendChild(incorrectLetter);
        }
    }
    if (isSpace) {
        if (expected !== ' ') {
            const lettersToInvalidate = [...document.querySelectorAll('.word.current .letter:not(.correct)')];
            lettersToInvalidate.forEach(letter => {
                addClass(letter, 'incorrect');
            });
        }
        removeClass(currentWord, 'current');
        addClass(currentWord.nextSibling, 'current');
        
        if (currentLetter) {
            removeClass(currentLetter, 'current');
        }
        addClass(currentWord.nextSibling.firstChild, 'current');
    }

    if (isBackspace) {
        if (lastExtra) {
            currentWord.removeChild(lastExtra);
        }

        else if (currentLetter && isFirstLetter) {
            const prevWord = currentWord.previousSibling;
            const prevLastLetter = prevWord?.lastChild;

            // make prev word current, last letter current
            removeClass(currentWord, 'current');
            addClass(currentWord.previousSibling, 'current');
            removeClass(currentLetter, 'current');
            addClass(currentWord.previousSibling.lastChild, 'current');
            
            if (prevLastLetter.className.includes('extra')) {
                prevWord.removeChild(prevLastLetter);
            } else {
                removeClass(prevLastLetter, 'incorrect');
                removeClass(prevLastLetter, 'correct');
            }
            
        }
        else if (currentLetter && !isFirstLetter) {
            // move back one letter, invalidate letter
            removeClass(currentLetter, 'current');
            addClass(currentLetter.previousSibling, 'current');
            removeClass(currentLetter.previousSibling, 'incorrect');
            removeClass(currentLetter.previousSibling, 'correct');
        }
        else if (!currentLetter) {
            addClass(currentWord.lastChild, 'current');
            removeClass(currentWord.lastChild, 'incorrect');
            removeClass(currentWord.lastChild, 'correct');
        }


    }
    // move lines / words
    if (currentWord.getBoundingClientRect().top > 250) {
        const words = document.getElementById('words');
        const margin = parseInt(words.style.marginTop || '0px');
        words.style.marginTop = (margin - 35) + 'px';
    }

    // move cursor
    const nextLetter = document.querySelector('.letter.current');
    const nextWord = document.querySelector('.word.current');
    const cursor = document.getElementById('cursor');
    cursor.style.top = (nextLetter || nextWord).getBoundingClientRect().top + 2 + 'px';
    cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + 'px';


});

function renderChart() {
    const chartElement = document.getElementById('syncScoreChart');
    if (window.syncChart) {
        window.syncChart.destroy();
    }

    const ctx = document.getElementById('syncScoreChart').getContext('2d');

    const labels = syncScoreHistory.map(point => point.time);
    const data = syncScoreHistory.map(point => (point.score * 100).toFixed(1));

    window.syncChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'sync score (%)',
                data: data,
                borderColor: '#FF85AA',
                tension: 0.1,
                fill: {
                    target: 'origin',
                    above: 'rgba(0, 0, 0, 0.26)'
                },
                // pointRadius: 2.5,
                pointBackgroundColor: '#FF85AA',
                // pointBorderColor: '#FF85AA'
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        labelColor: function(context) {
                            return {
                                borderColor: '#FF85AA',
                                backgroundColor: '#FF85AA'
                            };
                        }
                    }
                },
                legend: {
                    display: false,
                        labels: {
                            font: {
                                size: 16,
                                family: 'Roboto Mono'
                            },
                            color: '#d9d9d9e2'
                        }
                }
            },
            scales: {
                x: {
                    min: 10,
                    title: {
                        display: true,
                        text: 'Time (seconds)',
                        font: {
                            size: 14,
                            family: 'Roboto Mono'
                        },
                        color: '#d9d9d9e2'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Roboto Mono'
                        },
                    }
                },
                y: {
                    min: 0,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Sync Score (%)',
                        font: {
                            size: 14,
                            family: 'Roboto Mono'
                        },
                        color: '#d9d9d9e2'
                    },
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Roboto Mono'
                        },
                    }
                }
            }
        }
    });
}

function gameOver() {
    clearInterval(syncInterval);
    syncInterval = null;
    addClass(document.getElementById('game'), 'over');
    
    const mistypes = document.querySelectorAll('.letter.incorrect').length;
    const mistimed = document.querySelectorAll('.letter.correct:not(.timeCorrect)').length;
    const time = audio.duration;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    document.getElementById('time').textContent = `${minutes}:${seconds}`;

    const typedLetters = mistypes + mistimed + tcLetters;
    
    const wpmmin = time / 60;
    const wpm = (typedLetters / 5) / wpmmin;

    
    showScreen('dashboard');

    renderChart();

    console.log('typedLetters: ', typedLetters);
    console.log('time: ', time);
    console.log('wpmmin: ', wpmmin);


    syncScore = tcLetters / totalLetters;
    document.getElementById('sync-score').textContent = `${Math.round(syncScore * 100)}%`;
    document.getElementById('perfect-hits').firstChild.textContent = tcLetters;
    document.getElementById('total-chars').textContent = `/${totalLetters}`;
    document.getElementById('mistypes').textContent = mistypes;
    document.getElementById('off-timed').textContent = mistimed;
    document.getElementById('wpm').textContent = Math.round(wpm);

    document.getElementById('songname').innerHTML = currentSong.name;
}

function resetGame() {
    showScreen('start-screen');
    playIcon.src="start_playBtn.png";
    game.style.display = 'none';
    startScreen.style.display = 'block';
    newGameBtn.style.display = 'none';
    audio.pause();
    audio.currentTime = 0;
    newGame();
}

document.getElementById("restart_btn").addEventListener('click',resetGame);
document.getElementById("restartdash_btn").addEventListener('click',resetGame);


newGame();

