
document.addEventListener("DOMContentLoaded", () => {
  const machineList = document.getElementById("machine-list");
  const machines = [1, 3, 5, 6, 8, 9, 10, 11, 12, 13];

  machines.forEach((num) => {
    const card = document.createElement("div");
    card.className = "machine-card";
    card.innerHTML = `
      <h3>Machine #${num}</h3>
      <label>Shot Count: <input type="number" class="shot-count" data-machine="${num}" /></label>
      <label>Cycle Time: <input type="number" class="cycle-time" data-machine="${num}" value="9.5" /></label>
      <p>Time Remaining: <span class="time-remaining" data-machine="${num}">--</span></p>
    `;
    machineList.appendChild(card);
  });

  machineList.addEventListener("input", (e) => {
    const target = e.target;
    const machine = target.dataset.machine;
    const shotInput = document.querySelector(`.shot-count[data-machine='${machine}']`);
    const cycleInput = document.querySelector(`.cycle-time[data-machine='${machine}']`);
    const timeRemaining = document.querySelector(`.time-remaining[data-machine='${machine}']`);

    const shot = parseInt(shotInput.value);
    const cycle = parseFloat(cycleInput.value);
    const remaining = 2000 - shot;

    if (!isNaN(shot) && !isNaN(cycle) && cycle > 0 && remaining > 0) {
      const time = (remaining * cycle) / 60;
      timeRemaining.textContent = `${time.toFixed(1)} min`;
    } else {
      timeRemaining.textContent = "--";
    }
  });
});
