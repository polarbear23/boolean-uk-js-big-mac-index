/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/
//big mac prices
let bmpUS = 5.66;
let bmpUK = 5.090;
let bmpLebanon = 29904;
let bmpFrance = 8;
let bmpAustralia= 12.450;
let bmpChina= 39.000;
let bmpJapan= 720;

let impliedPurchasingPower;
let bigMacIndex;

//exchange rates
let dollarsToPounds = 1.37;
let dollarsToLebanesePounds = 0.00065;
let dollarsToEuros = 1.16;
let dollarsToAusDollars = 0.74;
let dollarsToYuan = 0.16;
let dollarsToYen = 0.0088;

//bmi:
let bmiUK;
let bmiLebanon;
let bmiFrance;
let bmiAustralia;
let bmiChina;
let bmiJapan;

// us - uk
impliedPurchasingPower = bmpUS / bmpUK;
bigMacIndex = ((dollarsToPounds - impliedPurchasingPower) / impliedPurchasingPower) * 100;
console.log(`The price of a Big Mac in the UK is: £${bmpUK}`);
console.log(`The UK's big mac index is: ${bigMacIndex}`);
bmiUK = bigMacIndex;

// us - Lebanon
impliedPurchasingPower = bmpUS / bmpLebanon;
bigMacIndex = ((dollarsToLebanesePounds - impliedPurchasingPower) / impliedPurchasingPower) * 100;
console.log(`The price of a Big Mac in Lebanon is: ل.ل.‎${bmpLebanon}`);
console.log(`Lebanons's big mac index is: ${bigMacIndex}`);
bmiLebanon = bigMacIndex;

// us - France
impliedPurchasingPower = bmpUS / bmpFrance;
bigMacIndex = ((dollarsToEuros - impliedPurchasingPower) / impliedPurchasingPower) * 100;
console.log(`The price of a Big Mac in France is: €‎${bmpFrance}`);
console.log(`France's big mac index is: ${bigMacIndex}`);
bmiFrance = bigMacIndex;

// us - Australia
impliedPurchasingPower = bmpUS / bmpAustralia;
bigMacIndex = ((dollarsToAusDollars - impliedPurchasingPower) / impliedPurchasingPower) * 100;
console.log(`The price of a Big Mac in Australia is: A$${bmpAustralia}`);
console.log(`Australia's big mac index is: ${bigMacIndex}`);
bmiAustralia = bigMacIndex;

// us - China
impliedPurchasingPower = bmpUS / bmpChina;
bigMacIndex = ((dollarsToYuan - impliedPurchasingPower) / impliedPurchasingPower) * 100;
console.log(`The price of a Big Mac in China is: CN¥${bmpChina}`);
console.log(`China's big mac index is: ${bigMacIndex}`);
bmiChina = bigMacIndex;

// us - Japan
impliedPurchasingPower = bmpUS / bmpJapan;
bigMacIndex = ((dollarsToYen - impliedPurchasingPower) / impliedPurchasingPower) * 100;
console.log(`The price of a Big Mac in Japan is: ¥${bmpJapan}`);
console.log(`Japan's big mac index is: ${bigMacIndex}`);
bmiJapan = bigMacIndex;


console.log("is china's index bigger than japans? " + (bmiChina > bmiJapan));

console.log("is France's index bigger than Australia? " + (bmiFrance > bmiAustralia));

console.log("is UK's index bigger than Lebanon? " + (bmiUK > bmiLebanon));

//prompt("Type in the country of which you would like to know the Big Mac Index of?");
//prompt("Type in the price of a Big Mac in your country?");



function bmiCalc(){
    let country = document.getElementById("country").value;
    let exchangeR = document.getElementById("exchangeR").value;
    let bmp = document.getElementById("price").value;

    impliedPurchasingPower = bmpUS / bmp;
    let bmi = ((exchangeR - impliedPurchasingPower) / impliedPurchasingPower) * 100;

    alert(`The Big Mac Index for the Country ${country} is: ${bigMacIndex}`);
    console.log(bigMacIndex);



}

