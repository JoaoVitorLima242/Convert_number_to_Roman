function convertNumToArray(myInt) {
  let myFunc = (num) => Number(num);
  return Array.from(String(myInt), myFunc);
}

function returnRoman(num, length) {
  let romanNumber ='';
  
  let firstLetter, middleLetter, lastLetter;

  if (length === 0) {
    firstLetter = 'I';
    middleLetter = 'V';
    lastLetter = 'X';
  } else if (length === 1) {
    firstLetter = 'X';
    middleLetter = 'L';
    lastLetter = 'C';
  } else if (length === 2) {
    firstLetter = 'C';
    middleLetter = 'D';
    lastLetter = 'M';
  } else if (length === 3) {
    firstLetter = 'M';
  }

  if(num < 4 && num > 0) {
    for(var i=0; i < num; i++ ) {
      romanNumber += firstLetter
    }
  } else if (num == 4) {
    romanNumber += firstLetter + middleLetter;
  } else if (num == 5) {
    romanNumber += middleLetter;
  } else if (num > 5 && num < 9) {
    romanNumber += middleLetter;
    for(var i=0; i < num - 5; i++ ) {
      romanNumber += firstLetter;
    } 
  } else if (num == 9) {
      romanNumber += firstLetter + lastLetter;
  }

  return romanNumber
}

function convertToRoman(myInt) {
  var intArr = convertNumToArray(myInt)

  intArr.reverse()
  let myRoman ='';

  for(var i = 0; i < intArr.length; i++) {
    myRoman =  returnRoman(intArr[i], i) + myRoman
  }

 return myRoman;
}

convertToRoman(3952);
