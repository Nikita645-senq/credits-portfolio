function resizeAdapt() {
  if (window.innerWidth < 600) {
    document.querySelector('.desk-version').style.display = 'none'
    document.querySelector('.outOfCredits-title').style.display = 'flex'
    document.querySelector('.mobileSlaider').style.display = 'block'
    document.querySelector('.btn-try-now').style.display = 'flex'
    document.querySelector('.checkbox-try').style.display = 'flex'
    document.querySelector('.mob-big-diamond').style.display = 'block'
    document.querySelector('.mob-function-btn').style.display = 'flex'
  }
  else {
    document.querySelectorAll(".mobile").forEach((mobItem) => {
      mobItem.style.display = "none";
    });
    document.querySelector('.desk-version').style.display = 'block'
  }

  if (window.innerWidth >= 1250 && window.innerWidth < 1549) {
    document.querySelector('.desk-version-main-column').style.width = '70%'
    document.querySelector('.taimer').style.marginBottom = '15px'
    document.querySelectorAll('.nen').forEach(item => {
      item.style.paddingTop = '10px'
    })
  }
  else {
    document.querySelector('.desk-version-main-column').style.width = '90%'
  }
  if (window.innerWidth >= 1550 && window.innerWidth <= 1850) {
    document.querySelector('.desk-version-main-column').style.width = '60%'
    document.querySelector('.taimer').style.marginBottom = '15px'
    document.querySelectorAll('.nen').forEach(item => {
      item.style.paddingTop = '10px'
    })
    document.querySelector('.big-banner').style.cssText = `padding-left: 10px; padding-right: 10px;`
  }
  if (window.innerWidth >= 1852) {
    document.querySelector('.desk-version-main-column').style.width = '60%'
    document.querySelector('.taimer').style.marginBottom = '0px'
    document.querySelectorAll('.nen').forEach(item => {
      item.style.paddingTop = '0px'
    })
    document.querySelector('.big-banner').style.cssText = `padding-left: 10px; padding-right: 10px;`
  }

  const parentWidth = document.querySelector('.big-banner')
  document.querySelectorAll('.box').forEach(item => {
    if (item.offsetWidth === parentWidth.offsetWidth) {
      item.style.cssText = 'flex-direction: row; gap: 40px; background: #AA646433;'
      item.addEventListener('mouseover', () => {
        item.style.background = '#9564AA'
      })
      item.addEventListener('mouseout', () => {
        item.style.background = '#AA646433'
      })
    }
    else {
      item.style.cssText = 'flex-direction: column; gap: 10px; background: rgba(242, 233, 247, 0.4);'
      item.addEventListener('mouseover', () => {
        item.style.background = '#9564AA'
      })
      item.addEventListener('mouseout', () => {
        item.style.background = 'rgba(242, 233, 247, 0.4)'
      })
    }
  })
}
resizeAdapt()
window.addEventListener('resize', resizeAdapt)

const inpBox = document.querySelector(".custom-check div");
inpBox.addEventListener("click", () => {
  inpBox.classList.toggle("active");
});

const inpCom = document.querySelector('.checkbox-tryCom div')
inpCom.addEventListener("click", () => {
  inpCom.classList.toggle("active");
});

// burger-menu
const burgerMenu = document.querySelector(".header-burger-menu");
const burgerMenuSpans = document.querySelectorAll(".header-burger-menu span");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  burgerMenuSpans.forEach((item) => {
    item.classList.toggle("active");
    if (window.innerWidth > 600) {
      item.classList.remove("active");
    }
  });
  const diamond = document.querySelector(".header-premium");
  diamond.classList.toggle("active");
  if (diamond.classList.contains("active") === true) {
    diamond.style.display = "none";
  } else {
    diamond.style.display = "flex";
  }
  const burgerDropMenu = document.querySelector(".burger-drop-menu");
  burgerDropMenu.classList.toggle("active");
  if (burgerDropMenu.classList.contains("active")) {
    burgerDropMenu.style.display = "block";
    burgerDropMenu.style.height = "100vh";
    document.querySelector(".burger-drop-menu-content").style.zIndex = "2";
  } else {
    burgerDropMenu.style.display = "none";
    document.querySelector(".burger-drop-menu-content").style.zIndex = "-1";
  }
  if (
    document.querySelector(".burger-drop-menu-content").style.display === "none"
  ) {
    diamond.style.display = "flex";
  }
});
// burger-menu

//слайдер мобильная версия
let itemsCount = [];
document.querySelectorAll(".mobileSlaider-main").forEach((items) => {
  itemsCount.push(items.classList[1].split("")[5]);
});
let countSlaiderMob = 1;
document
  .querySelector(".mobileSlaider-container")
  .addEventListener("click", () => {
    countSlaiderMob += 1;
    if (countSlaiderMob > 6) {
      countSlaiderMob = 1;
      document.querySelectorAll(
        ".mobileSlaider-circles span"
      )[5].style.background = "#ffc500";
      document.querySelectorAll(".mobileSlaider-main")[5].style.display =
        "none";
      document.querySelectorAll(".mobileSlaider-main")[0].style.display =
        "flex";
    }
    document.querySelectorAll(".mobileSlaider-circles span")[
      countSlaiderMob - 1
    ].style.background = "red";
    document.querySelectorAll(".mobileSlaider-circles span")[
      countSlaiderMob - 2
    ].style.background = "#ffc500";
    document.querySelectorAll(".mobileSlaider-main")[
      countSlaiderMob - 1
    ].style.display = "flex";
    document.querySelectorAll(".mobileSlaider-main")[
      countSlaiderMob - 2
    ].style.display = "none";
  });
//слайдер мобильная версия

//Таймер
let timeLeft = 60 * 10 + 0;
function updateTimer() {
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");

  timeLeft--;

  if (timeLeft < 0) {
    timeLeft = 60 * 10 + 0;
  }
}
const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
//Таймер
