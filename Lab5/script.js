const form = document.getElementById("tipForm");

form.addEventListener("input", function () {
    let tipRange = document.getElementById("tipRange");
    let tipDisplay = document.getElementById("tipDisplay");

    tipDisplay.textContent = tipRange.value + "%";
    
    let bill = parseFloat(document.getElementById("billTotal").value);
    let tipPercent = document.getElementById("tipRange").value;
    let currency = document.getElementById("currency").value;

    let totalWithTaxField = document.getElementById("totalWithTax");
    let tipAmountField = document.getElementById("tipAmount");
    let finalTotalField = document.getElementById("finalTotal");
    let errorMsg = document.getElementById("errorMsg");

    if (isNaN(bill) || bill < 0) {
        errorMsg.textContent = "Enter a positive dollar amount";
        clearFields();
        return;
    } else {
        errorMsg.textContent = "";
    }

    if (bill === 0) {
        clearFields();
        return;
    }

    let tax = bill * 0.11;
    let totalWithTax = bill + tax;

    let tipAmount = bill * (tipPercent / 100);
    let finalTotal = totalWithTax + tipAmount;

    let rate = 1;
    let symbol = "$";

    if (currency === "eur") {
        rate = 0.95;
        symbol = "€";
    } else if (currency === "inr") {
        rate = 85;
        symbol = "₹";
    }

    let convertedTip = tipAmount * rate;
    let convertedFinal = finalTotal * rate;

    totalWithTaxField.value = "$" + totalWithTax.toFixed(2);
    tipAmountField.value = symbol + convertedTip.toFixed(2);
    finalTotalField.value = symbol + convertedFinal.toFixed(2);
});

function clearFields() {
    document.getElementById("totalWithTax").value = "";
    document.getElementById("tipAmount").value = "";
    document.getElementById("finalTotal").value = "";
}