document.getElementById("button").addEventListener("click", () => {
    // Elements for inputs and outputs
    const billAmount = parseFloat(document.getElementById("bill").value);
    const serviceRating = parseFloat(document.getElementById("service").value);
    const numberOfPeople = parseInt(document.getElementById("people").value, 10);

    const tipAmountOutput = document.getElementById("tipAmount");
    const totalAmountOutput = document.getElementById("totalAmount");
    const perPersonOutput = document.getElementById("perPerson");
    const tipPerPersonOutput = document.getElementById("tipPerPerson");

    // Input validation
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    if (isNaN(serviceRating) || serviceRating <= 0) {
        alert("Please select a valid service percentage.");
        return;
    }

    if (isNaN(numberOfPeople) || numberOfPeople <= 0) {
        alert("Please enter a valid number of people.");
        return;
    }

    // Calculate tip percentage based on service rating
    let tipPercentage;
    switch (serviceRating) {
        case 0.2:
            tipPercentage = 0.2; // 20%
            break;
        case 0.15:
            tipPercentage = 0.15; // 15%
            break;
        case 0.1:
            tipPercentage = 0.1; // 10%
            break;
        case 0.05:
            tipPercentage = 0.05; // 5%
            break;
        default:
            alert("Invalid tip percentage selected.");
            return;
    }

    // Perform calculations
    const tipAmount = billAmount * tipPercentage;
    const totalBill = billAmount + tipAmount;
    const perPerson = totalBill / numberOfPeople;
    const tipPerPerson = tipAmount / numberOfPeople;

    // Display results in the DOM
    tipAmountOutput.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountOutput.textContent = `$${totalBill.toFixed(2)}`;
    perPersonOutput.textContent = `$${perPerson.toFixed(2)}`;
    tipPerPersonOutput.textContent = `$${tipPerPerson.toFixed(2)}`;
});
