const gradeInfo = document.getElementById("gradeInfo");
const gradeBtn = document.getElementById("gradeBtn");
const gradeInput = document.getElementById("gradeInput");

gradeBtn.addEventListener("click", () => {
  const eventValue = parseInt(gradeInput.value);
  gradeInfo.classList.remove("hidden");
  switch (true) {
    case eventValue >= 90 && eventValue <= 100:
      gradeInfo.innerHTML = `<p>Your Grade is = <span class="text-green-500">"A"</span></p>`;
      break;
    case eventValue >= 80 && eventValue <= 89:
      gradeInfo.innerHTML = `<p>Your Grade is = <span class="text-purple-500">"B"</span></p>`;
      break;
    case eventValue >= 70 && eventValue <= 79:
      gradeInfo.innerHTML = `<p>Your Grade is = <span class="text-yellow-500">"C"</span></p>`;
      break;
    case eventValue >= 60 && eventValue <= 69:
      gradeInfo.innerHTML = `<p>Your Grade is = <span class="text-red-500">"D"</span></p>`;
      break;
    default:
      gradeInfo.innerHTML = `<p>Your Grade is = <span class="text-red-700">"F"</span></p>`;
      break;
  }
});
