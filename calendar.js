// Uses a leap year purely as a layout skeleton so Feb 29 always has a slot.
const LAYOUT_YEAR = 2028;
const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const WEEKDAYS = ["S","M","T","W","T","F","S"];

function pad(n){ return String(n).padStart(2, "0"); }

function todayKey(){
  const d = new Date();
  return `${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}

function buildCalendar(){
  const container = document.getElementById("months");
  const today = todayKey();

for (let m = 7; m < 12; m++){    
  const monthCard = document.createElement("div");
    monthCard.className = "month-card";

    const heading = document.createElement("h2");
    heading.textContent = MONTH_NAMES[m];
    monthCard.appendChild(heading);

    const weekdayRow = document.createElement("div");
    weekdayRow.className = "weekday-row";
    WEEKDAYS.forEach(w => {
      const span = document.createElement("span");
      span.textContent = w;
      weekdayRow.appendChild(span);
    });
    monthCard.appendChild(weekdayRow);

    const grid = document.createElement("div");
    grid.className = "day-grid";

    const firstWeekday = new Date(LAYOUT_YEAR, m, 1).getDay();
    const daysInMonth = new Date(LAYOUT_YEAR, m + 1, 0).getDate();

    for (let i = 0; i < firstWeekday; i++){
      const pad_ = document.createElement("div");
      pad_.className = "day-cell pad";
      grid.appendChild(pad_);
    }

    for (let day = 1; day <= daysInMonth; day++){
      const key = `${pad(m+1)}-${pad(day)}`;
      const cell = document.createElement("a");
      cell.href = `day.html?date=${key}`;
      cell.className = "day-cell link";
      cell.textContent = day;
      if (SONGS[key]) cell.classList.add("has-song");
      if (key === today) cell.classList.add("today");
      cell.setAttribute("aria-label", `${MONTH_NAMES[m]} ${day}${SONGS[key] ? " — song added" : ""}`);
      grid.appendChild(cell);
    }

    monthCard.appendChild(grid);
    container.appendChild(monthCard);
  }
}

document.addEventListener("DOMContentLoaded", buildCalendar);
