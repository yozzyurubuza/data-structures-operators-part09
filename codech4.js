'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const convertButton = document.querySelector('button');

//Retrieve Text after clicking button
convertButton.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  //Put text into array - Should only accept the word with the pattern a_b
  //Convert everything into lowercase for easier manipulation
  console.log(text);
  let splitText = [...text.toLowerCase().split('\n')];

  //Remove words without underscore
  const splitTextSet = new Set(splitText);
  console.log(splitTextSet);

  for (const texts of splitTextSet) {
    if (!texts.includes('_')) {
      splitTextSet.delete(texts);
    }
  }
  splitText = [...splitTextSet];

  //Convert Text into Camel Case
  const camelText = [];

  for (const camel of splitText) {
    //1. Remove Spaces, 2. remove underscore, 3. uppercase B from a_b into uppercase, 3.1 Join, 4. padend spaces, 5.insert repeat emoji based on array size

    //1-2
    let tempCamel = [];
    tempCamel = [...camel.trim().split('_')];

    //For every 2nd word and succeeding, change 1st letter to uppercase
    for (let i = 1; i < tempCamel.length; i++) {
      tempCamel[i] = tempCamel[i][0].toUpperCase() + tempCamel[i].slice(1);
    }

    //3.1 Join
    camelText.push(tempCamel.join(''));
  }
  console.log(camelText);
  //4-5
  for (let j = 0; j < camelText.length; j++) {
    console.log(`${camelText[j].padEnd(20, ' ')}${'✅'.repeat(j + 1)}`);
  }
});

/* Test Data

asdqwe
asd_qwe
asd_qwe1
asd_qwe2_qwe3

underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

*/

//Jonas Schmedtmann Implementation

/*

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
});

*/
