
const review = document.querySelector(".review");


let reviews = new Array();
reviews[0] = "Molto facile da usare!";
reviews[1] = "Davvero un bel negozio, molto conveniente";
reviews[2] = "Ottimo design!";

let counter = 0;
function loop() {
    if (counter > 2) counter = 0;
    document.querySelector('.review').firstElementChild.innerHTML = reviews[counter];
    counter++;
    setTimeout(loop, 2000);
}
loop();
