module.exports = function toReadable (n) {
    const originalN = n;
    let stringDigit = "";
    let nStr = n.toString();
    n = Math.abs(n);

    if (n === 0) {
        return 'zero';
    } else if (n >= 0 && n <= 19) {
        stringDigit += numberText[n];
    } else if (n >= 20 && n <= 99) {
        stringDigit += numberText[nStr[0] + "0"];

        if (!n.toString().endsWith("0")) {
            stringDigit += " " + numberText[n % 10];
        }
    } else if (n >= 100 && n <= 999) {
        stringDigit += numberText[nStr[0] + "00"];
        
        let twoSignN = (n % 100).toString();
        
        if (twoSignN >= 0 && twoSignN <= 19) {
            stringDigit += " " + numberText[twoSignN];
        } else {
            stringDigit += " " + numberText[twoSignN[0] + "0"];
        }
        
        if (!nStr.endsWith("0") && (twoSignN >= 20 && twoSignN <= 99)) {
            stringDigit += " " + numberText[twoSignN[1]];
        }
    }
  
      stringDigit = stringDigit.replaceAll("  ", " ");
      stringDigit = stringDigit.trim();
  
      return stringDigit || originalN.toString();
  }

const numberText = {
    "0": "",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety",
    "100": "one hundred",
    "200": "two hundred",
    "300": "three hundred",
    "400": "four hundred",
    "500": "five hundred",
    "600": "six hundred",
    "700": "seven hundred",
    "800": "eight hundred",
    "900": "nine hundred",
};