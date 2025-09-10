let b = parseInt(prompt("Wpisz liczbę całkowitą"));
if(!isNaN(b)) {
    let pattern = "";
    for(let i = 0; i <= b; i++) {
        for (let j = 0; j <= i; j++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    text.innerHTML = pattern;
}