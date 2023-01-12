window.onload = ()=>{
    if(JSON.parse(localStorage.getItem("theme"))) {
        let theme = JSON.parse(localStorage.getItem("theme"));
        setTheme(theme);
    }
    else {
        let theme = [];
        theme[0] = "black";
        theme[1] = "225";
        theme[2] = "0.125";
        localStorage.setItem("theme", JSON.stringify(theme));
    }
};
function changeTheme() {
    let theme = JSON.parse(localStorage.getItem("theme"));
    if(theme[1] == "30") {
        theme[0] = "black";
        theme[1] = "225";
        theme[2] = "0.125"
    }
    else {
        theme[0] = "white";
        theme[1] = "30";
        theme[2] = "0.875"
    }
    localStorage.setItem("theme", JSON.stringify(theme));
    setTheme();
}
function setTheme() {
    let theme = JSON.parse(localStorage.getItem("theme"));
    console.log(JSON.parse(localStorage.getItem("theme")));
    document.body.style.backgroundColor = `rgb(${theme[1]}, ${theme[1]}, ${theme[1]})`
}
/* --------------------------------------Counter-------------------------------------- */
let section_counter = document.querySelector('#section_counter');
let counters = document.querySelectorAll('.counter-item .counter');

let CounterObserver = new IntersectionObserver(
  (entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 60;
    counters.forEach((counter, index) => {
      function UpdateCounter() {
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if (initialNumber < targetNumber) {
          counter.innerText = Math.ceil(initialNumber + incPerCount);
          setTimeout(UpdateCounter, 40);
        }
      }
      UpdateCounter();

      if (counter.parentElement.style.animation) {
        counter.parentElement.style.animation = '';
      } else {
        counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
          index / counters.length + 0.5
        }s`;
      }
    });
    observer.unobserve(section_counter);
  },
  {
    root: null,
    threshold: window.innerWidth > 768 ? 0.4 : 0.3,
  }
);

CounterObserver.observe(section_counter);