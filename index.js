const sendBtn = document.querySelector('.send-btn');
const chat = document.querySelector('.chat');

sendBtn.addEventListener('click', () =>{
    for (let i = 0; i < 1; i++) {
        const input = document.getElementById('my-message').value;
        const h2 = document.createElement("h2");
        h2.innerText = input;
        chat.appendChild(h2).classList.add('heading2');
        if(input.value = " ") {
            h2.style.display = "none"
        }
    }
});

// keypress enter event
window.addEventListener("keypress", (event) => {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      for (let i = 0; i < 1; i++) {
        const input = document.getElementById('my-message').value;
        const h2 = document.createElement("h2");
        h2.innerText = input;
        chat.appendChild(h2).classList.add('heading2');
    }
    }
  });

setTimeout(() => {
    for (let i = 0; i < 1; i++) {
        const randomMessage = [
            "Hi, how are you bro",
            "Nice, beautiful day",
            "How old are you",
            "nice to meet you",
            "were do you live",
            "tell me a joke",
            "so its my turn to tell you a joke"
        ];
         const h2 = document.createElement("h2");
         h2.innerText = randomMessage[Math.floor(Math.random() * 6)];
         chat.appendChild(h2).classList.add('heading')
    }
  }, 10000);

  setTimeout(() => {
    for (let i = 0; i < 1; i++) {
        const randomMessage = [
            "Hi, how are you bro",
            "Nice, beautiful day",
            "How old are you",
            "nice to meet you",
            "were do you live",
            "tell me a joke",
            "so its my turn to tell you a joke"
        ];
         const h2 = document.createElement("h2");
         h2.innerText = randomMessage[Math.floor(Math.random() * 6)];
         chat.appendChild(h2).classList.add('heading')
    }
  }, 20000)

  // myPromise
    //     .then(() => {
    //         const h2 = document.createElement("h2");
    //         h2.innerText = randomMessage[0];
    //         chat.appendChild(h2).classList.add('heading');
    //     })
    //     .then(() =>{
    //         const h2 = document.createElement("h2");
    //         h2.innerText = randomMessage[3];
    //         chat.appendChild(h2).classList.add('heading');
    //     })
    //     .then(() =>{
    //         const h2 = document.createElement("h2");
    //         h2.innerText = randomMessage[2];
    //         chat.appendChild(h2).classList.add('heading');
    //     })
    //     .then(() =>{
    //         const h2 = document.createElement("h2");
    //         h2.innerText = randomMessage[1];
    //         chat.appendChild(h2).classList.add('heading');
    //     })
    //     .then(() =>{
    //         const h2 = document.createElement("h2");
    //         h2.innerText = randomMessage[4];
    //         chat.appendChild(h2).classList.add('heading');
    //     })
    //     .then(() =>{
    //         const h2 = document.createElement("h2");
    //         h2.innerText = randomMessage[5];
    //         chat.appendChild(h2).classList.add('heading');
    //     })
    //     .then(() =>{
    //         const h2 = document.createElement("h2");
    //         h2.innerText = randomMessage[6];
    //         chat.appendChild(h2).classList.add('heading');
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })