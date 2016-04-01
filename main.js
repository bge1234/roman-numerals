function parseRomanNumerals(input) {
  var output = 0;
  var parsed = [];
  var split = input.split('');

  //parse two-letter values
  for (var i = 0; i < split.length; i++) {
    if(split[i] === 'I' && split[i + 1] === 'V') {
      parsed.push('IV');
      i++;
    }
    else if(split[i] === 'I' && split[i + 1] === 'X') {
      parsed.push('IX');
      i++;
    }
    else if(split[i] === 'X' && split[i + 1] === 'L') {
      parsed.push('XL');
      i++;
    }
    else if(split[i] === 'X' && split[i + 1] === 'C') {
      parsed.push('XC');
      i++;
    }
    else if(split[i] === 'C' && split[i + 1] === 'D') {
      parsed.push('CD');
      i++;
    }
    else if(split[i] === 'C' && split[i + 1] === 'M') {
      parsed.push('CM');
      i++;
    }
    else
      parsed.push(split[i]);
  }

  //add together
  for (var i = 0; i < parsed.length; i++) {
    if(parsed[i] === 'I')
      output += 1;
    else if(parsed[i] === "IV")
      output += 4;
    else if(parsed[i] === 'V')
      output += 5;
    else if(parsed[i] === "IX")
      output += 9;
    else if(parsed[i] === 'X')
      output += 10;
    else if(parsed[i] === "XL")
      output += 40;
    else if(parsed[i] === 'L')
      output += 50;
    else if(parsed[i] === "XC")
      output += 90;
    else if(parsed[i] === 'C')
      output += 100;
    else if(parsed[i] === "CD")
      output += 400;
    else if(parsed[i] === 'D')
      output += 500;
    else if(parsed[i] === "CM")
      output += 900;
    else if(parsed[i] === 'M')
      output += 1000;
  }

  return output;
}

console.log(parseRomanNumerals("I") + " (I = 1)");
console.log(parseRomanNumerals("II") + " (II = 2)");
console.log(parseRomanNumerals("III") + " (III = 3)");
console.log(parseRomanNumerals("IV") + " (IV = 4)");
console.log(parseRomanNumerals("V") + " (V = 5)");
console.log(parseRomanNumerals("VI") + " (VI = 6)");
console.log(parseRomanNumerals("IX") + " (IX = 9)");
console.log(parseRomanNumerals("X") + " (X = 10)");
console.log(parseRomanNumerals("XI") + " (XI = 11)");
console.log(parseRomanNumerals("XIV") + " (XIV = 14)");
console.log(parseRomanNumerals("XVI") + " (XVI = 16)");
console.log(parseRomanNumerals("XIX") + " (IX = 19)");
console.log(parseRomanNumerals("XL") + " (XL = 40)");
console.log(parseRomanNumerals("XLIX") + " (XLIX = 49)");
console.log(parseRomanNumerals("LXIV") + " (LXIV = 64)");
console.log(parseRomanNumerals("XCIX") + " (XCIX = 99)");
console.log(parseRomanNumerals("CXLIV") + " (CXLIV = 144)");
console.log(parseRomanNumerals("CDIV") + " (CDIV = 404)");
console.log(parseRomanNumerals("DCXXII") + " (DCXXII = 622)");
console.log(parseRomanNumerals("CMIX") + " (CMIX = 909)");
console.log(parseRomanNumerals("MCIV") + " (MCIV = 1104)");
console.log(parseRomanNumerals("MMMCCCXXXIII") + " (MMMCCCXXXIII = 3333)");

var romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function recur(incoming){
  var current = romanNumerals[incoming[0]];
  var next = romanNumerals[incoming[1]];
  if (incoming.length == 1){
     return current;
  } else {
    var multiplier = (next > current) ? -1 : 1;
    return  recur(incoming.slice(1))+(current * multiplier);
  }
}

console.log(recur("CMXCIX"));
console.log(recur("XIX"));
