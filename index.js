const sendBtn = document.querySelector('.send-btn');
const chat = document.querySelector('.chat');

sendBtn.addEventListener('click', () =>{
    for (let i = 0; i < 1; i++) {
        const input = document.getElementById('my-message').value;
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        h2.innerText = input;
        div.style.display = "flex";
        div.style.justifyContent = "end";
        h3.innerText = "user name";
        img.src="https://cdn-icons-png.flaticon.com/512/236/236832.png";
        chat.appendChild(div).appendChild(h3).classList.add('robot2');
        chat.appendChild(div).appendChild(img).classList.add('robot2-img')
        chat.appendChild(h2).classList.add('heading2');
    }
});


// keypress enter event
window.addEventListener("keypress", (event) => {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      for (let i = 0; i < 1; i++) {
        const input = document.getElementById('my-message').value;
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const img = document.createElement("img")
        const h2 = document.createElement("h2");
        h2.innerText = input;
        div.style.display = "flex";
        div.style.justifyContent = "end";
        h3.innerText = "user name";
        img.src="https://cdn-icons-png.flaticon.com/512/236/236832.png";
        chat.appendChild(div).appendChild(h3).classList.add('robot2');
        chat.appendChild(div).appendChild(img).classList.add('robot2-img')
        chat.appendChild(h2).classList.add('heading2');
    }
    }
  });

    const awaitTimeout = delay =>
    new Promise((resolve, reject) => setTimeout(resolve, delay));


    awaitTimeout(20000).then(() => {
        for (let i = 0; i < 1; i++) {
            const randomMessage = [
                "Hi, how are you bro what is your name",
            ];
        const h2 = document.createElement("h2");
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        div.style.display = "flex";
        div.style.alignItems = "center"
        h3.innerText = "uRobot";
        img.src="image/robot.png";
        chat.appendChild(div).appendChild(img).classList.add('robot-img');
        chat.appendChild(div).appendChild(h3).classList.add('robot');
        h2.innerText = randomMessage;
        chat.appendChild(h2).classList.add('heading');
     }
    });
    awaitTimeout(35000).then(() => {
        for (let i = 0; i < 1; i++) {
            const randomMessage = [
                "How old are you",
            ];
            const h2 = document.createElement("h2");
            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const img = document.createElement("img")
            div.style.display = "flex";
            div.style.alignItems = "center"
            h3.innerText = "Robot";
            img.src="image/robot.png";
            chat.appendChild(div).appendChild(img).classList.add('robot-img');
            chat.appendChild(div).appendChild(h3).classList.add('robot');
            h2.innerText = randomMessage;
            chat.appendChild(h2).classList.add('heading');
     }
    });
    awaitTimeout(50000).then(() => {
        for (let i = 0; i < 1; i++) {
            const randomMessage = [
                "were do you live",
            ];
            const h2 = document.createElement("h2");
            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const img = document.createElement("img")
            div.style.display = "flex";
            div.style.alignItems = "center"
            h3.innerText = "Robot";
            img.src="image/robot.png";
            chat.appendChild(div).appendChild(img).classList.add('robot-img');
            chat.appendChild(div).appendChild(h3).classList.add('robot');
            h2.innerText = randomMessage;
            chat.appendChild(h2).classList.add('heading');
     }
    });
    awaitTimeout(65000).then(() => {
        for (let i = 0; i < 1; i++) {
            const randomMessage = [
                "nice to meet you",
            ];
            const h2 = document.createElement("h2");
            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const img = document.createElement("img")
            div.style.display = "flex";
            div.style.alignItems = "center"
            h3.innerText = "Robot";
            img.src="image/robot.png";
            chat.appendChild(div).appendChild(img).classList.add('robot-img');
            chat.appendChild(div).appendChild(h3).classList.add('robot');
            h2.innerText = randomMessage;
            chat.appendChild(h2).classList.add('heading');
     }
    });
    awaitTimeout(80000).then(() => {
        for (let i = 0; i < 1; i++) {
            const randomMessage = [
                "Nice, beautiful day",
            ];
            const h2 = document.createElement("h2");
            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const img = document.createElement("img")
            div.style.display = "flex";
            div.style.alignItems = "center"
            h3.innerText = "Robot";
            img.src="image/robot.png";
            chat.appendChild(div).appendChild(img).classList.add('robot-img');
            chat.appendChild(div).appendChild(h3).classList.add('robot');
            h2.innerText = randomMessage;
            chat.appendChild(h2).classList.add('heading');
     }
    });
    awaitTimeout(95000).then(() => {
        for (let i = 0; i < 1; i++) {
            const randomMessage = [
                "tell me a joke",
            ];
            const h2 = document.createElement("h2");
            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const img = document.createElement("img")
            div.style.display = "flex";
            div.style.alignItems = "center"
            h3.innerText = "Robot";
            img.src="image/robot.png";
            chat.appendChild(div).appendChild(img).classList.add('robot-img');
            chat.appendChild(div).appendChild(h3).classList.add('robot');
            h2.innerText = randomMessage;
            chat.appendChild(h2).classList.add('heading');
     }
    });
    awaitTimeout(110000).then(() => {
        for (let i = 0; i < 1; i++) {
            const randomMessage = [
                "nice one hhhhhhhhh 😂",
            ];
            const h2 = document.createElement("h2");
            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const img = document.createElement("img")
            div.style.display = "flex";
            div.style.alignItems = "center"
            h3.innerText = "Robot";
            img.src="image/robot.png";
            chat.appendChild(div).appendChild(img).classList.add('robot-img');
            chat.appendChild(div).appendChild(h3).classList.add('robot');
            h2.innerText = randomMessage;
            chat.appendChild(h2).classList.add('heading');
     }
    });
    awaitTimeout(125000).then(() => {
        for (let i = 0; i < 1; i++) {
            const randomMessage = [
                "so its my turn to tell you a joke",
            ];
            const h2 = document.createElement("h2");
            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const img = document.createElement("img")
            div.style.display = "flex";
            div.style.alignItems = "center"
            h3.innerText = "Robot";
            img.src="image/robot.png";
            chat.appendChild(div).appendChild(img).classList.add('robot-img');
            chat.appendChild(div).appendChild(h3).classList.add('robot');
            h2.innerText = randomMessage;
            chat.appendChild(h2).classList.add('heading');
     }
    });
    awaitTimeout(145000).then(() => {
        for (let i = 0; i < 1; i++) {
            const randomMessage = [
                "Hear about the new restaurant called Karma : There’s no menu: You get what you deserve 😂"
            ];
            const h2 = document.createElement("h2");
            const div = document.createElement("div");
            const h3 = document.createElement("h3");
            const img = document.createElement("img")
            div.style.display = "flex";
            div.style.alignItems = "center"
            h3.innerText = "Robot";
            img.src="image/robot.png";
            chat.appendChild(div).appendChild(img).classList.add('robot-img');
            chat.appendChild(div).appendChild(h3).classList.add('robot');
            h2.innerText = randomMessage;
            chat.appendChild(h2).classList.add('heading');
     }
    })

    
    