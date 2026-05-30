// cache básico no início para consultar o DOM somente neste primeiro momento.
// os evento depois apenas consulta o elemento em cache, sem realizar DOM Query novamente

//lookup table com os elementos do DOM em cache, mapeando cada tecla para cada elemento
const drumKit = {
    a: {
        audio: document.querySelector(`audio[data-key='boom']`),
        button: document.querySelector(`button[data-key='boom']`)
    },
    s: {
        audio: document.querySelector(`audio[data-key='clap']`),
        button: document.querySelector(`button[data-key='clap']`)
    },
    d: {
        audio: document.querySelector(`audio[data-key='hihat']`),
        button: document.querySelector(`button[data-key='hihat']`)
    },
    f: {
        audio: document.querySelector(`audio[data-key='kick']`),
        button: document.querySelector(`button[data-key='kick']`)
    },
    g: {
        audio: document.querySelector(`audio[data-key='openhat']`),
        button: document.querySelector(`button[data-key='openhat']`)
    },
    h: {
        audio: document.querySelector(`audio[data-key='ride']`),
        button: document.querySelector(`button[data-key='ride']`)
    },
    j: {
        audio: document.querySelector(`audio[data-key='snare']`),
        button: document.querySelector(`button[data-key='snare']`)
    },
    k: {
        audio: document.querySelector(`audio[data-key='tink']`),
        button: document.querySelector(`button[data-key='tink']`)
    },
    l: {
        audio: document.querySelector(`audio[data-key='tom']`),
        button: document.querySelector(`button[data-key='tom']`)
    }
}

document.addEventListener('keydown', handleKeyDown);

// Object.values retorna os valores do objeto, e destructuring em button
Object.values(drumKit).forEach(({ button }) => {
    button.addEventListener('transitionend', removeTransition)
})

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function renderTransition(button) {
    button.classList.add('playing');
}

function removeTransition(e) {
    e.currentTarget.classList.remove('playing')
}

function handleKeyDown(e) {
    const key = e.key.toLowerCase();
    const pad = drumKit[key];

    //early return com guard clauses, prevenindo contra runtime errors
    if (!pad) return;
    if (!pad.audio || !pad.button) return;

    playSound(pad.audio);
    renderTransition(pad.button);
}
