// dom manipulation

const discountIn = document.getElementById("discountInput");
const calculateBtn = document.getElementById("calculateBtn");
const discountPercentage = document.getElementById("discountPercentage");
const totalAmount = document.getElementById("totalAmount");
const discountedAmount = document.getElementById("discountedAmount");
const finalAmount = document.getElementById("finalAmount");
const discountInfo = document.getElementById("discountInfo");

// event listener

calculateBtn.addEventListener("click", () => {
  const mainInput = parseFloat(discountIn.value);
  if (isNaN(mainInput)) {
    alert("Please enter a valid number");
    return;
  }
  discountInfo.classList.remove("hidden");

  totalAmount.innerText = "$" + mainInput;
  if (mainInput < 50) {
    discountPercentage.innerText = "0";
    finalAmount.innerText = "$" + mainInput;
  } else if (mainInput >= 50 && mainInput <= 100) {
    const discount = (mainInput * 0.05).toFixed(2);
    discountedAmount.innerText = "$" + discount;
    finalAmount.innerText = "$" + (mainInput - discount);
    discountPercentage.innerText = "5";
  } else if (mainInput > 100 && mainInput <= 200) {
    const discount = (mainInput * 0.1).toFixed(2);
    discountedAmount.innerText = "$" + discount;
    finalAmount.innerText = "$" + (mainInput - discount);
    discountPercentage.innerText = "10";
  } else {
    discountPercentage.innerText = "15";
    const discount = (mainInput * 0.15).toFixed(2);
    discountedAmount.innerText = "$" + discount;
    finalAmount.innerText = "$" + (mainInput - discount);
  }
});
