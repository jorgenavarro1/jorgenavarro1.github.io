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
