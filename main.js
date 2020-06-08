//Calculating Tip
function calculateTip() {
    let billAmount = document.getElementById("billAmount").value;
    let service = document.getElementById("service").value;
    let peopleCount = document.getElementById("peopleCount").value;

    //Next line is for validating inputs
    if (billAmount === " " || service == 0) {
        window.alert("Please fill in required fields");
        return;
    }

    //Check for inputs that are empty or less than or equal to 1
    if (peopleCount === " " || peopleCount <= 1) {
        peopleCount = 1;
        document.getElementById("eachPerson").style.display = "none";
    } else {
        document.getElementById("eachPerson").style.display = "block";
    }

    //Calculating Tip
    let totalAmount = (billAmount * service) / peopleCount;

    //Next line allows input with 2 places after decimal point
    totalAmount = totalAmount.toFixed(2);
    //Next 2 lines are for displaying tip amount
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = totalAmount;
}
//Next 2 lines hide the tip amount when page loads
document.getElementById("totalTip").style.display = "none";
document.getElementById("eachPerson").style.display = "none";
//Button click to call function
document.getElementById("calculateTip").onclick = function () {
    calculateTip();
}