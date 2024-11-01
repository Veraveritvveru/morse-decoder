const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' '
};

function decode(expr) {
    const codes = {
        '10': '.',
       '11': '-',
        ' ': ' ',
    }
    
    let lettersArr = [];
    
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        if (letter === '**********') {
            letter = ' ';
        } 
    
        let innerArr = [];    //поделили по 10 знакам letter = '0010101010'
        for (let j = 0; j < letter.length; j += 2) {
            innerArr.push(letter.slice(j, j + 2))
        }
        lettersArr.push(innerArr);
    }
    
    let arrNoNull = [];                                                                //убираем 00 
    for (let i = 0; i < lettersArr.length; i++) {
        let innerArrNoNull = lettersArr[i].filter(symb => symb !== '00');
        arrNoNull.push(innerArrNoNull);
    }
   
// в точки запятые превратили
    let codedArr = arrNoNull.map(innerArr => innerArr.map(item => item = codes[item]));
    let newcodedArr = codedArr.map(item => item.join(''));
    console.log(newcodedArr);
    return newcodedArr.map(item => MORSE_TABLE[item]).join('');
}

module.exports = {
    decode
}