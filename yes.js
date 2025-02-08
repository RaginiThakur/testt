const febHolidays = [
    "ye pyaar ka cycle hai",
    "I'm so grateful I met you❤️",
    "Thanks for being the best part of my life😊",
    "You are the most special person in my life🥰",
    "Thanks for always support me and make me feel like i can achieve everything 🤩",
    "Tum or tumhari shayari jo thodi funny hoti hai 🤨",
    "Thanks for handling me gussa handle krna most of the time ❤",
    "Sabko lagta hai ue kya hi apbe bnde ko kuch bolti hogi per unko kya pta tum kitne pareshan ho🤐",
    "You're my everything ✔",
    "You are my soulmate ✨💕",
    "Thoda sa time nikal kai bhi mere se milne kai liye",
    "Thanks hmesha meri sari faltu baate sunne kai liye🤭",
    "I will always be there for you ❣️",
    "I'll always do my best to keep you happy or tumhe bhi krna hai for sure🥺",
    "Acche lagte hai wo pal jo tumhare",
    "sath bitaye hain virtually or offline💓",
    "I don't want to lose you 😒",
    "You're the best baby!! 💖",
    "Jada likhungi tho uddoge hwa mai ",
    "I Love You The Most💖💖",
    "Bandar🐒"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  