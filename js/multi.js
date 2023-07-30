const multiInput = document.getElementById("multiInput");
const multiInfo = document.getElementById("multiInfo");
const multiBtn = document.getElementById("multiBtn");

multiBtn.addEventListener("click", () => {
  multiInfo.innerHTML = "";
  const eventValue = parseInt(multiInput.value);
  for (let i = 1; i <= 10; i++) {
    multiInfo.innerHTML += `
      <p>${eventValue} * ${i} = ${eventValue * i}</p>
    <br>
    `;
  }
});
