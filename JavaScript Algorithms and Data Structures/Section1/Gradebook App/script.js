// function getAverage(scores) {
//     let total = 0;
//     for(const score of scores) {
//         total += score;
//     }
//
//     return total / scores.length;
// }
//
//
//
// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));



// function getAverage(scores) {
//     let sum = 0;
//
//     for (const score of scores) {
//         sum += score;
//     }
//
//     return sum / scores.length;
// }
// function getGrade(score) {
//     if(score >= 100) {
//         return "A++"
//     } else if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else if (score >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
//
// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));


function hasPassingGrade(score) {
    return score >= 60;
}
//
//
// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));



// function getAverage(scores) {
//     let total = 0;
//     for(const score of scores) {
//         total += score;
//     }
//
//     return total / scores.length;
// }
//
//
//
// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));



function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}
function getGrade(score) {
    if(score >= 100) {
        return "A++"
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));


function studentMsg(totalScores, studentScore) {
    let message = "";

    if (hasPassingGrade(studentScore)) {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
    } else {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));


// Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.

// Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.











