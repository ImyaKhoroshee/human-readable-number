module.exports = function toReadable (number) {
    let result = "";
    let arr = ["11", "12", "13", "14", "15", "16", "17", "18", "19"]
    if (number < 10) {
        result = humanReadableOne(number);
    }
    else if (number > 10 && number < 20) {
        result = humanReadableTwo(number);
    }
    else if (String(number).length === 2 && String(number)[1] === "0") {
        result = humanReadableTwoWhole(number);
    }
    else if (String(number).length === 2 && String(number)[1] != "0") {
        result = humanReadableOneTy(String(number)[0]) + " " + humanReadableOne(number%10);
    }
    else if (String(number).length === 3 && String(number).slice(-2) === "00") {
        result = humanReadableOne(Math.trunc(number/100)) + " hundred";
    }
    else if (String(number).length === 3 && String(number)[2] === "0") {
        result = humanReadableOne(Math.trunc(number/100)) + " hundred " + humanReadableTwoWhole(number%100);
    }
    else if (String(number).length === 3  && String(number)[1] != "0" && !arr.includes(String(number).slice(-2))) {
        result = humanReadableOne(Math.trunc(number/100)) + " hundred " + humanReadableOneTy(String(number)[1]) + " " + humanReadableOne(number%10);
    }
    else if (String(number).length === 3 && String(number)[1] === "0") {
        result = humanReadableOne(Math.trunc(number/100)) + " hundred " + humanReadableOne(number%10);
    }
    else if (String(number).length === 3 && arr.includes(String(number).slice(-2))) {
        result = humanReadableOne(Math.trunc(number/100)) + " hundred " + humanReadableTwo(number%100);
    }
    return result;
}

function humanReadableOne(arg) {
    switch (arg) {
        case 0: return "zero"
        case 1: return "one"
        case 2: return "two"
        case 3: return "three"
        case 4: return "four"
        case 5: return "five"
        case 6: return "six"
        case 7: return "seven"
        case 8: return "eight"
        case 9: return "nine"
    }
}

function humanReadableTwo(arg) {
    switch (arg) {
        case 11: return "eleven"
        case 12: return "twelve"
        case 13: return "thirteen"
        case 14: return "fourteen"
        case 15: return "fifteen"
        case 16: return "sixteen"
        case 17: return "seventeen"
        case 18: return "eighteen"
        case 19: return "nineteen"
    }
}

function humanReadableTwoWhole(arg) {
    switch (arg) {
        case 10: return "ten"
        case 20: return "twenty"
        case 30: return "thirty"
        case 40: return "forty"
        case 50: return "fifty"
        case 60: return "sixty"
        case 70: return "seventy"
        case 80: return "eighty"
        case 90: return "ninety"
    }
}

function humanReadableOneTy(arg) {
    switch (arg) {
        case "2": return "twenty"
        case "3": return "thirty"
        case "4": return "forty"
        case "5": return "fifty"
        case "6": return "sixty"
        case "7": return "seventy"
        case "8": return "eighty"
        case "9": return "ninety"
    }
}
