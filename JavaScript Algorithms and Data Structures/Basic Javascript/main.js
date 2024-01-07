let count = 0;

function cc(card) {
    // Only change code below this line

<<<<<<< Updated upstream
console.log(myStr);
// l
// yup

// Wow I love learning
// invest
// very cool
// gotta figure out a plan
// hmm
// more
// thinking
// day 21 of not

console.log("Pog");


=======
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            // Do nothing, no change in count for 7, 8, and 9
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if (count > 0)
        return count + " Bet";
    else
        return count + " Hold";
    // Only change code above this line
}

// Example usage:
console.log(cc(2)); // 1 Bet
console.log(cc(3)); // 2 Bet
console.log(cc(7)); // 2 Bet
console.log(cc('K')); // 1 Bet
console.log(cc('A')); // 0 Hold
>>>>>>> Stashed changes
