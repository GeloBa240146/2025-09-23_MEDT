// Einlesen der Zahl
let number = 0;

do {
    number = parseInt(prompt("Gib eine Zahl ein: "));

    if (number > 10 || number < 1) {
        alert("Falsche Eingabe!");
    }
} while (number > 10 || number < 1);

// Tabelle erstellen
const tableContainer = document.getElementById('table-container');

let tableHTML = '<table>';
tableHTML += '<tr><th>Faktor</th><th>Ergebnis</th></tr>';


for (let i = 1; i <= 10; i++) {
    let result = i * number;
    tableHTML += '<tr><td>' + i + ' </td><td>' + result + ' </td></tr>';
}

tableHTML += '</table>';
tableContainer.innerHTML = tableHTML;