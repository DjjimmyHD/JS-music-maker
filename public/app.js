window.addEventListener('keydown', function (e) {

    const music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    music.play();
    key.classList.add('playing');
    music.currentTime = 0

    if (key.classList[1] === "playing") {
       setTimeout(() => {
           key.classList.remove('playing');
       }, 0300); 

    }
});
       