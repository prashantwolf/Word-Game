const words = [
    "the",
    "of",
    "and",
    "a",
    "to",
    "in",
    "is",
    "you",
    "that",
    "it",
    "he",
    "was",
    "for",
    "on",
    "are",
    "as",
    "with",
    "his",
    "they",
    "I",
    "at",
    "be",
    "this",
    "have",
    "from",
    "or",
    "one",
    "had",
    "by",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "we",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "an",
    "each",
    "which",
    "she",
    "do",
    "how",
    "their",
    "if",
    "will",
    "up",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "so",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "go",
    "see",
    "number",
    "no",
    "way",
    "could",
    "people",
    "my",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part",
  ];
  
  let randomIdx = parseInt(Math.random() * words.length);
  
  
  let overFlow = document.querySelector(".overFlow");
  let correctBox = document.querySelector(".correctBox");
  let input = document.querySelector("input");
  let inCorrectId = document.querySelector("#inCorrectId");
  let correctId = document.querySelector("#correctId");
  let score = document.querySelector(".score");
  let lost = document.querySelector(".winner");
  let over1 = document.querySelector(".over1");
  let over2 = document.querySelector(".over2");
  let alert = document.querySelector(".alert");
  
  
  correctBox.innerText = words[randomIdx];
  
  let posY = 0;
  let scores = 0;
  let diff = 2;
  
  const wordFall = () => {
    let box = `<div class="correctBoxes">
      ${words[randomIdx]}
    </div>`
  
    if (over1.childElementCount == 11) {
      alert.innerText = "Congratulation";
      lost.style.display = "flex";
      return;
    } else if (over2.childElementCount == 11) {
      alert.innerText = "you Loose";
      lost.style.display = "flex";
      return;
    }
  
    if (posY == 560) {
      randomIdx = parseInt(Math.random() * words.length);
      correctBox.innerText = words[randomIdx];
      inCorrectId.innerHTML += box
      score.innerText = (parseInt(score.innerText) - 1);
  
      let speed = scores % 5;
      console.log(speed);
  
  
      if (scores > 0 && speed % 5 == 0) {
        diff += 10;
        console.log(speed + "innerspeed");
      }
      posY = 0;
  
  
  
    } else {
      posY += diff;
      correctBox.style.top = posY + "px";
    }
    requestAnimationFrame(wordFall);
  };
  
  wordFall();
  
  input.addEventListener('keypress', function (e) {
  
    let box = `<div class="correctBoxes">
      ${words[randomIdx]}
    </div>`
    console.log(e.key);
    if (e.key === 'Enter') {
      if (input.value == words[randomIdx]) {
        correctId.innerHTML += box;
        scores++;
        score.innerText = scores + 1;
        posY = 0;
        randomIdx = parseInt(Math.random() * words.length);
        correctBox.innerText = words[randomIdx];
  
      } else {
        inCorrectId.innerHTML += box;
        scores--;
        score.innerText = scores - 1;
        posY = 0;
        randomIdx = parseInt(Math.random() * words.length);
        correctBox.innerText = words[randomIdx];
      }
      input.value = "";
  
    }
  
  });
  