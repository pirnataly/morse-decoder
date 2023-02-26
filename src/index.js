const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let res = [];
    for (let i = 0; i < expr.length / 10; i++) {
        arr.push(expr.substr(i * 10, 10))
        for (let entries of Object.entries(MORSE_TABLE)) {
            if (arr[i] === (entries[0].replace(/\./g, "10")).replace(/-/g, "11").padStart(10, '0')) {
                res.push(entries[1]);
            } else if (arr[i] === "**********") {
                res.push(' ');
                break
            }
        }

    }
    return res.join('');
}

module.exports = {
    decode
}


