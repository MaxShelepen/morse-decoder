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
};

function decode(expr) {
    MORSE_TABLE[''] = ' ';
    let elem1 = /.{1,10}/g; 
    let elem2 = /\d{1,2}/g; 
    let space = /\*{1,10}/g; 
    
    let letterArr = expr.match(elem1);
    let result = '';

    letterArr.forEach(function(element) {
       if(!space.test(element)){
        symbolsArr = element.match(elem2)} else{
        ['space']}
      
      const decodedSymbols = symbolsArr.map(function(item) {
        if (item === "10"){ return ".";}
        if (item === "11") {return "-";}
        if (item === "space"){return '';}
        if (item === '00') {return '';}
      });
      
      result += MORSE_TABLE[decodedSymbols.join('')]
    });
    return result;
  }
module.exports = {
  decode
}
