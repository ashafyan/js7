//oppgave 1
function minTekst(streng) {
    if (streng === '') {
        return 'Teksten er tom';
    } else {
        return 'Teksten er ikke tom';
    }
}

console.log(minTekst(''));
console.log(minTekst('Røyken VGS'));

//oppgave 2

function minTekst(streng) {
    streng = streng.trim();
    var ordArray = streng.split(' ');
    ordArray = ordArray.filter(function(ord) {
        return ord !== '';
    });
    return ordArray;
}

console.log(minTekst(' Røyken Videregående Skole '));

//oppgave 3

function erPalindrom(tekst) {
    tekst = tekst.toLowerCase().replace(/\s/g, '');

    return tekst === tekst.split('').reverse().join('');
}

console.log(erPalindrom('MOM')); 
console.log(erPalindrom('RADAR')); 
console.log(erPalindrom('ROTATOR'));
console.log(erPalindrom('020220220')); 
console.log(erPalindrom('JavaScript')); 

//oppgave 4 

function sortertTekst(tekst) {
    return tekst.split('').sort().join('');
}

var x = 'serdar';
console.log(sortertTekst(x)); 

//oppgave 5

function tellForekomster(tekst, bokstav) {
    var regex = new RegExp(bokstav, 'g');
    var antallForekomster = tekst.match(regex).length;
    return antallForekomster;
}

var tekst = "Welcome to Norge";
var bokstav = "o";
console.log(tellForekomster(tekst, bokstav)); 




