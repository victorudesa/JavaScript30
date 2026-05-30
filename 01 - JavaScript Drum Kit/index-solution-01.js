//adiciona listener nas teclas no início, não precisa adicionar toda vez que uma tecla é pressionada
document.addEventListener('keydown', handleKeyDown)

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})

function playSound(sound) {
    const audio = document.querySelector(`audio[data-key='${sound}']`);
    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();
}

function renderTransition(button) {
    button.classList.add('playing')
}

function removeTransition(e) {
    e.currentTarget.classList.remove('playing')
}

const soundPerKey = {
    a: 'boom',
    s: 'clap',
    d: 'hihat',
    f: 'kick',
    g: 'openhat',
    h: 'ride',
    j: 'snare',
    k: 'tink',
    l: 'tom'
}

function handleKeyDown(e) {
    const key = e.key.toLowerCase();
    const sound = soundPerKey[key];

    if (!sound) {
        return;
    }

    const button = document.querySelector(`button[data-key='${sound}']`)
    if (!button) {
        return;
    }

    playSound(sound);
    renderTransition(button);
}
