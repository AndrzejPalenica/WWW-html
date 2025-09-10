const text = document.querySelector('#1');
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