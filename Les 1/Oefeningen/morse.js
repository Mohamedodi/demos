const morseDict = new Object();


morseDict['A'] = '·—';
morseDict['B'] = '—···';
morseDict['C'] = '—·—·';
morseDict['D'] = '—··';
morseDict['E'] = '·';
morseDict['F'] = '··—·';
morseDict['G'] = '——·';
morseDict['H'] = '····';
morseDict['I'] = '··';
morseDict['J'] = '·———';
morseDict['K'] = '—·—';
morseDict['L'] = '·—··';
morseDict['M'] = '——';
morseDict['N'] = '—·';
morseDict['O'] = '———';
morseDict['P'] = '·——·';
morseDict['Q'] = '——·—';
morseDict['R'] = '·—·';
morseDict['S'] = '···';
morseDict['T'] = '—';
morseDict['U'] = '··—';
morseDict['V'] = '···—';
morseDict['W'] = '·——';
morseDict['X'] = '—··—';
morseDict['Y'] = '—·——';
morseDict['Z'] = '——··';


morseDict['0']='—————';
morseDict['1']='·————';
morseDict['2']='··———';
morseDict['3']='···——';
morseDict['4']='····—';
morseDict['5']='·····';
morseDict['6']='—····';
morseDict['7']='——···';
morseDict['8']='———··';
morseDict['9']='————·';

morseDict['.']='·—·—·—';
morseDict[',']='——··——';
morseDict['?']='··——··';
morseDict['!']='—·—·——';
morseDict['-']='—····—';
morseDict['/']='—··—·';
morseDict[':']='———···';
morseDict['-']='—····—';
morseDict[')']='—·——·—';
morseDict[';']='—·—·—';
morseDict['(']='—·——·';
morseDict['=']='—···—';
morseDict['@']='·——·—·';
morseDict['&']='·–···';

morseDict[' ']=' ';


const reverseDict=new Object();

for (const key in morseDict) {
	reverseDict[morseDict[key]] = key;
}

const text = 'Hallo, ik ben Matthias';

let morse = [];
text.split('').forEach(element => {
	morse.push(morseDict[element.toUpperCase()]);
});

const morseText = morse.join('|');
console.log(morseText);
let translatedText =[];
console.log(reverseDict);
morseText.split('|').forEach(element=> {
	translatedText.push(reverseDict[element]);
});

console.log(translatedText.join('' ));