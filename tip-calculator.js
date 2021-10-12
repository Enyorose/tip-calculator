// Assign initial values add billSubtotal, tipPercentage, taxRate
const billSubTotal = 30;
let subTotalPlusTax;
let billTotal;
const tipRate = .18;
const taxRate = 1.05;
let tipPercentage;
let tipAmount;

//calculate tip percentage
tipPercentage = tipRate * 100;

// Calculate tip
tipAmount = billSubTotal * tipRate;

//calculate billTotal
subTotalPlusTax = billSubTotal * taxRate
billTotal = subTotalPlusTax + tipAmount;

// Output result with template literals
console.log(`Your bill is $${billSubTotal} including tax is ${subTotalPlusTax.toFixed(2)} plus tip at ${tipPercentage}%: $${tipAmount.toFixed(2)}. Total Payment is ${billTotal.toFixed(2)}`);

