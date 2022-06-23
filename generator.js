function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);




let questionPool = ["What color is nothing?", "Do you eat rice with a spoon or a fork?", "Is cereal a soup?", 
                    "Are boneless chicken wings just chicken nuggets in disguise?", "Is a thumb a finger?", "If you are at a restaurant and your waiter does not come back, are you the waiter?", 
                    "If you clean out a vacuum cleaner, does that make you the vacuum cleaner?", "Should toilet paper hang over or under the roll?", 
                    "What is the right way to pronounce gif?", "Are blondes really not as smart as brunettes or redheads?", "Are introverts too quiet, or are extroverts too loud?", 
                    "If you had the option, would you choose to live forever?", "Would you rather travel 100 years forward or 100 years backward?", 
                    "Would you rather fight one horse sized duck or 100 duck sized horses?", "Are ghosts real?", "Is life easier when you are beautiful?", 
                    "Are Santa’s elves compensated fairly?", "Does the person in the middle seat on an airplane get both armrests?", "Does pineapple belong on pizza?", 
                    "Would you rather have New York style pizza or Chicago style pizza?", "Are men with beards more attractive than clean shaven men?", "Should robots have faces?", 
                    "Which is better, Marvel or DC?", "Are the Beatles overrated?", "Are cats evil?", "If an ambulance is on its way to save someone and knocks down a person, should it stop to help them?", 
                    "Are birds real?", "Would you rather sit next to, or across from your significant other at a restaurant", "Do you like working from home, or prefer to go to a coffee shop/other co-working spaces?", 
                    "If you won the lottery, would you spend the money on yourself, or others?", "Do you prefer taking notes on your computer or on paper?", 
                    "Would you rather show up to a party early or late?"];

function questionGenerator() {
  let display = document.querySelector("#text");
  display.style.opacity="0";
  let randomQuestion = questionPool[Math.floor(Math.random() * questionPool.length)];
  display.style.opacity = '1';
  display.innerHTML = randomQuestion;
  console.log(randomQuestion);
  // splice the chosen question from the array
  var index = questionPool.indexOf(randomQuestion);
  questionPool.splice(index, 1);
  console.log(questionPool);
}
