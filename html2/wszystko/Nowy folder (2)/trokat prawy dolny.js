let d = parseInt(prompt("Wpisz liczbe całkowitą"));  
if (!isNaN(d)) { 
    let pattern = ""; 
    for (let i = 0; i < d; i++) { 
        for (let j = 0; j < d - i - 1; j++) { 
            pattern += " "; 
        } 
        for (let j = 0; j <= i; j++) { 
            pattern += "*"; 
        } 
        pattern += "\n";  
    } 
    text.innerHTML = pattern;
} 