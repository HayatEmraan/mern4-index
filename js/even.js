const evenBtn = document.getElementById("evenBtn");
const evenInput = document.getElementById("evenInput");
const evenNumbers = document.getElementById("evenNumbers");

evenBtn.addEventListener("click", () => {
  const eventValue = evenInput.value;
  let arrayEven = "";
  let evenNumberList = [];
  evenNumbers.innerHTML = "";
  evenNumberList = [];
  evenNumbers.classList.add("hidden");
  try {
    if (Array.isArray(JSON.parse(eventValue))) {
      for (let i = 0; i < eventValue.length; i++) {
        if (parseInt(eventValue[i]) % 2 === 0) {
          evenNumberList.push(eventValue[i]);
        }
      }
    }
  } catch (error) {
    arrayEven += eventValue;
    const stringSplit = arrayEven.split(",");
    for (let i = 0; i < stringSplit.length; i++) {
      if (stringSplit[i] % 2 === 0) {
        evenNumberList.push(stringSplit[i]);
      }
    }
  }
  if (evenNumberList.length > 0) {
    evenNumbers.classList.remove("hidden");
    evenNumbers.innerHTML = "<p>Even Numbers: </p>" + evenNumberList;
  }
});
