let c = parseInt(prompt("Wpisz liczbę całkowitą"));
if(!isNaN(c)) {
    let pattern = "";
    for (let i = 0; i <= c; i++) {
        pattern += "*";
    }
    pattern += "\n";
    for(let j = 0; j < c - 2; j++) {
        pattern += "*";
        for (let i = 0; i <= c - 2; i++) {
            pattern += " ";
        }
        pattern += "*\n";
    }
    for (let i = 0; i <= c; i++) {
        pattern += "*";
    }
    pattern += "\n";
    text.innerHTML = pattern;
}
