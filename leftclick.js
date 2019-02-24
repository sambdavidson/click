window.onload = next;

let currentLevel = 7;
let levels = [welcome, pos1, pos2, pos4, pos5, big, small, magicWord, pressSpacebar];

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
    github.href = 'www.github.com/samdamana';
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
    next.style.top = '20%';
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

function magicWord(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.onclick = () => {
        let answer = prompt("What is the magic word?");
        if (answer === 'please') {
            nextCb();
        } else {
            wrong(document.body);
        }
    }
    next.innerText = 'whats the magic word?'
    next.style.top = '50%';
    next.style.left = '40%';
    
    body.append(next);
}

function pressSpacebar(body, nextCb) {
    let next = document.createElement('h2');
    next.className = 'clickable pos-absolute';
    next.innerText = 'Okay! Now press spacebar.';
    next.style.top = '70%';
    next.style.left = '40%';

    let kd = (ev) => {
        console.log(ev);
        if (ev.key === ' ') {
            next.innerText = 'lol cool thanks';
            document.body.removeEventListener('keydown', kd);
        }

    }

    document.body.addEventListener('keydown', kd);
    next.onclick = () => {
        document.body.removeEventListener('keydown', kd);
        nextCb();
    }
    body.append(next);
}

// Ending like when you play solitaire and fireworks shoot up at the end.