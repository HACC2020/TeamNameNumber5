document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
    }
  });
});

const question = [
  ["what is covid", "what is covid 19"],
];
  
const reply = [
  ["The Coronavirus Disease, also known as COVID19, is a type of virus that spreads through mammals and birds, similar to the common cold. It is spread through saliva or nasal discharge (coughs or sneezes), so be sure to wash your hands and wear a mask!"],
];

const tryAgain = [
  "I can't seem to understand what you are asking. If you need specific assistance, please visit " + link() + " or https://health.hawaii.gov/coronavirusdisease2019/ for more information.",
  "This maybe beyond what I can answer. Please try again, or visit https://hawaiicovid19.com or https://health.hawaii.gov/coronavirusdisease2019/ for COVID information.",
  "Uh oh, looks like I can't answer that as of now. If you'd like to find what your problem is, try visiting https://hawaiicovid19.com or https://health.hawaii.gov/coronavirusdisease2019/.",
];

function link() { 
  var str = "https://hawaiicovid19.com";
  var result = str.link("https://hawaiicovid19.com");    
} 

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  if (compare(question, reply, text)) {
    product = compare(question, reply, text);
  } else {
    product = tryAgain[Math.floor(Math.random() * tryAgain.length)];
  }
  addChat(input, product);
}

function compare(questionArray, replyArray, text) {
  let item;
  for (let x = 0; x < questionArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (questionArray[x][y] == text) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChat(input, product) {
  const chatDiv = document.getElementById("chat");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  chatDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  chatDiv.appendChild(botDiv);
}