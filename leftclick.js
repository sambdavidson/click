window.onload = next;

let currentLevel = -1;
let levels = [welcome, pos1, pos2, pos4, pos5, big, small, math1, magicWord, pressS, pressSpacebar, lol, samIsHandsome, deepDarkSecret, woof, end];

function next() {

    currentLevel += 1;
    clear(document.body);
    if (currentLevel > 0) {
        document.body.append(puzzleCountElement(currentLevel))
        right(document.body);
    }
    levels[currentLevel](document.body, next);
}

function clear(element) {
    while(element.firstChild) {
        element.removeChild(document.body.firstChild);
    }
}

function puzzleCountElement(n) {
    let e = document.createElement('div');
    e.innerText = `#${n}`;
    e.className = 'puzzle-count';
    return e;
}

function right(element) {
    element.classList.add('right-animation');
    let clearClassName = () => {
        element.classList.remove('right-animation');
        element.removeEventListener('animationend', clearClassName);
    };
    element.addEventListener('animationend', clearClassName);
}

function wrong(element) {
    element.classList.add('wrong-animation');
    let clearClassName = () => {
        element.classList.remove('wrong-animation');
        element.removeEventListener('animationend', clearClassName);
    };
    element.addEventListener('animationend', clearClassName);
}

function welcome(body, nextCb) {
    let header = document.createElement('h1');
    header.innerText = 'Click';
    let subheader = document.createElement('h4');
    subheader.innerText = 'created Samuel Davidson';
    let github = document.createElement('a');
    github.innerText = 'GitHub'
    github.href = 'https://www.github.com/samdamana/click';
    github.target = '_blank';
    let next = document.createElement('h2');
    next.className = 'clickable'
    next.innerText = 'click to start';
    next.onclick = nextCb
    body.append(header, subheader, github, next)
}

function pos1(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.onclick = nextCb;
    next.innerText = 'Now click me.'
    next.style.top = '80%';
    next.style.left = '50%';
    
    body.append(next);
}

function pos2(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.onclick = nextCb;
    next.innerText = 'Nice! And me next.'
    next.style.top = '10%';
    next.style.left = '20%';
    
    body.append(next);
}

function pos3(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.onclick = nextCb;
    next.innerText = 'Now me.'
    next.style.top = '30%';
    next.style.left = '60%';
    
    body.append(next);
}

function pos4(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.onclick = nextCb;
    next.innerText = 'Down here?'
    next.style.top = '90%';
    next.style.left = '80%';
    
    body.append(next);
}

function pos5(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.onclick = nextCb;
    next.innerText = 'Maybe up here?'
    next.style.top = '0%';
    next.style.left = '40%';
    
    body.append(next);
}

function big(body, nextCb) {
    let next = document.createElement('h1');
    next.className = 'clickable pos-absolute';
    next.onclick = nextCb;
    next.innerText = 'CLICK BIG!'
    next.style.top = '40%';
    next.style.left = '50%';
    
    body.append(next);
}

function small(body, nextCb) {
    let next = document.createElement('h6');
    next.className = 'clickable pos-absolute';
    next.onclick = nextCb;
    next.innerText = 'clik smol.'
    next.style.top = '20%';
    next.style.left = '80%';
    
    body.append(next);
}

function math1(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.onclick = () => {
        let answer = prompt("");
        let lower = answer.toLowerCase();
        if (lower === '3') {
            nextCb();
        } else {
            wrong(body);
        }
    }
    next.innerText = 'You got it! What is 8-5?'
    next.style.top = '30%';
    next.style.left = '30%';
    
    body.append(next);
}

function magicWord(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.onclick = () => {
        let answer = prompt("");
        if (answer === 'please') {
            nextCb();
        } else {
            wrong(body);
        }
    }
    next.innerText = 'GJ. Now whats the magic word?'
    next.style.top = '50%';
    next.style.left = '40%';
    
    body.append(next);
}

function pressS(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'pos-absolute semi-transparent';
    next.innerText = 'press s';
    next.style.top = '70%';
    next.style.left = '40%';

    let kd = (ev) => {
        if (ev.key === 's') {
            next.classList.add('clickable');
            next.classList.remove('semi-transparent');
            next.innerText = 'thanks';
            next.onclick = nextCb;
            document.body.removeEventListener('keydown', kd);
        }

    }

    document.body.addEventListener('keydown', kd);
    body.append(next);
}

function pressSpacebar(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.innerText = 'Now press spacebar';
    next.style.top = '10%';
    next.style.left = '20%';

    let kd = (ev) => {
        if (ev.key === ' ') {
            next.innerText = next.innerText + '... again';
        }

    }

    document.body.addEventListener('keydown', kd);
    next.onclick = () => {
        document.body.removeEventListener('keydown', kd);
        nextCb();
    }
    body.append(next);
}

function lol(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.onclick = nextCb;
    next.innerText = 'lol'
    next.style.top = '20%';
    next.style.left = '20%';
    
    body.append(next);
}

function samIsHandsome(body, nextCb) {
    let suffix = ' is very handsome';
    let next = document.createElement('h2');
    next.className = 'pos-absolute semi-transparent';
    next.innerText = '______' + suffix;
    next.style.top = '80%';
    next.style.left = '50%';

    let word = 'Samuel';
    let correct = 0;
    let kd = (ev) => {
        if (ev.key.toLowerCase() === word[correct].toLowerCase()) {
            correct++;
            if (correct == word.length) {
                next.innerText = word + suffix;
                next.classList.add('clickable');
                next.classList.remove('semi-transparent');
                next.onclick = nextCb;
                body.removeEventListener('keydown', kd);    
            }
            let prefix = '';
            for(let i = 0; i < word.length; i++) {
                if (i < correct) {
                    prefix += word[i];
                } else {
                    prefix += '_';
                }
            } 
            next.innerText = prefix + suffix;
        }

    }

    body.addEventListener('keydown', kd);
    body.append(next);
}

let deepestDarkestSecret = '';
let alphaNumericSpace = new RegExp("^[a-zA-Z0-9 \?\'\.\!]$");
function deepDarkSecret(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'pos-absolute semi-transparent';
    next.innerText = 'Tell me your deepest darkest secret. Press enter when done.';
    next.style.top = '50%';
    next.style.left = '50%';

    let kd = (ev) => {
        if (ev.key === 'Enter') {
            next.classList.add('clickable');
            next.classList.remove('semi-transparent');
            next.innerText = 'your secret is safe with me :)';
            next.onclick = nextCb;
            body.removeEventListener('keydown', kd);
        } else if (alphaNumericSpace.test(ev.key)) {
            deepestDarkestSecret += ev.key;
        }

    }

    body.addEventListener('keydown', kd);
    body.append(next);
}

function showYourSecret(body, nextCb) {

}

function woof(body, nextCb) {
    let header = document.createElement('h1');
    header.classList.add('pos-absolute');
    header.style.top = '10%';
    header.style.left = '50%';
    header.innerText = 'Bork?';

    let woof = document.createElement('img');
    woof.classList.add('pos-absolute', 'clickable', 'centered');
    woof.src = 'images/labdog.jpg';
    woof.style.display = 'block';
    woof.style.top = '50%';
    woof.style.left = '50%';
    woof.onclick = nextCb;

    body.append(header, woof);
}

function woof2(body, nextCb) {
    let header = document.createElement('h1');
    header.classList.add('pos-absolute');
    header.style.top = '10%';
    header.style.left = '50%';
    header.innerText = 'Bork?';

    let woof = document.createElement('img');
    woof.classList.add('pos-absolute', 'clickable', 'centered');
    woof.src = 'images/labdog.jpg';
    woof.style.display = 'block';
    woof.style.top = '50%';
    woof.style.left = '50%';
    woof.onclick = nextCb;

    body.append(header, woof);
}

function end(body, nextCb) {
    let header = document.createElement('h1');
    header.classList.add('pos-absolute');
    header.style.top = '10%';
    header.style.left = '50%';
    header.innerText = 'The End';
}
// Ending like when you play solitaire and fireworks shoot up at the end.