 const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
    console.log("rowNumber: " + rowNumber + "  rowCount: " + rowCount)
    console.log(character.repeat(rowCount - rowNumber));
    return character.repeat(rowCount - rowNumber) + " rowNumber: " + rowNumber;
}

for(let i = 1; i <= count; i++) {

    console.log("i: " + i)
    rows.unshift(padRow(i, count));
}

let result = "";

for(const row of rows) {
    result = result + "\n" + row;
}

console.log(result);


console.log(rows);