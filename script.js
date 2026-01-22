const letters = [
  {
    type: "text",
    content: `I know long distance is hard, my love.
But every time you miss me, remember—
someone out here is loving you deeply,
believing in you endlessly,
and waiting patiently for the day I can finally hug you🥹🤍
Marami na tayong pinagdaanan, nasa worst sitwasyon, nag-aaway,
naghiwalay, nasaktan -- pero heto parin tayo. 
I miss you everytime my Love🤗 everytime you miss me,
Please call me, talk to me, ill always make time for you mahal ko😊😘`
  },

  {
    type: "text",
    content: `Your art is beautiful because YOU are.
Even when you feel uninspired,
your hands still create magic.
Rest if you must — but never doubt your gift from God😊🎨✨ I fully understand your feelings
mahal ko, its a bit hurt sometimes especially when you're being distance,
you voice out unfilter word... but i just want you to know
that i accept you, i love you and i care for you, so if ever you feel down,
im just one call away😚 your Divine is always here😉🫰`
  },

  {
    type: "text",
    content: `It’s okay to feel sad.
I wish I could hold your face right now and tell you,
You are not alone.
You are loved — so, so much 😘❤️ i dont really know kung paano pagaanin 
feelings mo with words, how i wish i am at your side right now, cause like you said
mas masarap sa pakiramdam kapag magkasama tayo. Just always remember, its ok to feel sad,
but don't let your emotion and feelings eat you... if you ever feel sad, and don't want anyone 
to talk to, even me... just visit this website i made only for you...
type your thoughts, feelings and opinions right on the message page. 100%
sure that no one-- except you, can see those messages you've sent. Imagine me hugging you🤗
kissing you😚 and telling you comforting words and how much i love you, my jelo🥰`
  },

  {
    type: "text",
    content: `If you ever doubt yourself,
borrow my confidence in you.
I believe in you on the days you cannot.
Always.🤗 i trust you so much, how much? my whole life.
You're the only person who see the other side in me, so why doubt yourself?
You got me, you're one of a luckiest person for having a girl like me😉 charot lang
hehe. You're a good person, my love. You made me fall in love so deeply.
You may not be good at everything, but i admire you a lot. I love your existence.
I love your confidence. I love your intelligence. I love you fully at what you are, who
you are and what you have. So please don't doubt yourself na baby ko ha😚❤️`
  },

  {
    type: "text",
    content: `Happy 1 year of love, my lovelove 🥰😘❤️
Thank you for choosing me,
for loving me across the distance,
and for being my favorite person.
This website is just a tiny piece of how much I love you.🥰 The very first time i
made something special like this. Swerte mo naman, programmer girlfriend mo o HAHAHA`
  },

  {
    type: "text",
    content: `My love, i don't know the reason why you're losing your feelings on me... i don't even know how 
    to cure it, but please always remember me, the things i have done, the love for you that never
    fade, our memories at ang mga masasayang... Mahal na mahal kita sobra, sana ay lagi mong tatandaan iyon.
    Please dont hurt me again my love, masakit ng wala ka. I'm still afraid until now... Please love...
    Wag mo na akong iiwan.`
  }
];

function openLetter(index) {
  const letter = letters[index];
  const container = document.getElementById("letterText");

  container.innerHTML = "";

  if (letter.type === "text") {
    const p = document.createElement("p");
    p.textContent = letter.content;
    container.appendChild(p);
  }

  if (letter.type === "image") {
    const img = document.createElement("img");
    img.src = letter.src;
    img.className = "letter-image";

    const caption = document.createElement("p");
    caption.className = "image-caption";
    caption.textContent = letter.caption;

    container.appendChild(img);
    container.appendChild(caption);
  }

  document.getElementById("modal").style.display = "block";
}

function closeLetter() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function animateScore(finalScore) {
  let count = 0;
  const scoreDiv = document.getElementById("score");
  const total = questions.length;

  const interval = setInterval(() => {
    scoreDiv.innerHTML = `<h2>💖 Score: ${count} / ${total}</h2>`;
    count++;
    if (count > finalScore) {
      clearInterval(interval);
      showMessage(finalScore);
    }
  }, 200);
}

function goToSecret() {
  localStorage.setItem("perfectScore", "true");
  window.location.href = "secret.html";
}



function showMessage(score) {
  const total = questions.length;
  let message = "";

  if (score === total) {
    message = `
      <p>🥹❤️ PERFECT SCORE.</p>
      <p>You know me by heart… and that means everything to me.</p>
      <button onclick="goToSecret()">💍 Open Your Surprise</button>
    `;
  } else if (score >= total - 1) {
    message = `<p>😏 Almost perfect… you know me really well.</p>`;
  } else if (score >= 1) {
    message = `<p>🥺 You’re trying—and that’s cute.</p>`;
  } else {
    message = `<p>😤 GRABE KA… mag usap nga tayo.</p>`;
  }

  document.getElementById("score").innerHTML += message;
}

