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

console.log(parseRomanNumerals("I") + " = 1?");
console.log(parseRomanNumerals("II") + " = 2?");
console.log(parseRomanNumerals("III") + " = 3?");
console.log(parseRomanNumerals("IV") + " = 4?");
console.log(parseRomanNumerals("V") + " = 5?");
console.log(parseRomanNumerals("VI") + " = 6?");
console.log(parseRomanNumerals("IX") + " = 9?");
console.log(parseRomanNumerals("X") + " = 10?");
console.log(parseRomanNumerals("XI") + " = 11?");
console.log(parseRomanNumerals("XIV") + " = 14?");
console.log(parseRomanNumerals("XVI") + " = 16?");
console.log(parseRomanNumerals("XIX") + " = 19?");
console.log(parseRomanNumerals("XL") + " = 40?");
console.log(parseRomanNumerals("XLIX") + " = 49?");
console.log(parseRomanNumerals("LXIV") + " = 64?");
console.log(parseRomanNumerals("XCIX") + " = 99?");
console.log(parseRomanNumerals("CXLIV") + " = 144?");
console.log(parseRomanNumerals("CDIV") + " = 404?");
console.log(parseRomanNumerals("DCXXII") + " = 622?");
console.log(parseRomanNumerals("CMIX") + " = 909?");
console.log(parseRomanNumerals("MCIV") + " = 1104?");
console.log(parseRomanNumerals("MMMCCCXXXIII") + " = 3333?");
