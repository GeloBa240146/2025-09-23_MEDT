let startIdx;
let endIdx;

do {
    startIdx = parseInt(prompt("Geben Sie den Start ein: "));
    endIdx = parseInt(prompt("Geben Sie das Ende ein: "));
} while (startIdx > endIdx);

let list = document.createElement("ul");

for (let i = startIdx; i <= endIdx; i++) {
    if(isPrime(i)) {
        // Dann Zahl ausgeben
        let primeNumber = document.createElement("li");
        primeNumber.innerText = i;
        
        list.appendChild(primeNumber);
    }
}

document.body.appendChild(list);

function isPrime(number) {
    if (number <= 1 ) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}