
const text = document.querySelector('#text');
let a = parseInt(prompt("Wpisz liczbę całkowitą"));
if(!isNaN(a)) {
    let pattern = "";
    for (let i = 0; i <= a; i++) {
        for (let j = 0; j <= a; j++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    text.innerHTML = pattern;
}