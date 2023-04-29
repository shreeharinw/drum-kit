window.addEventListener("keydown",(e)=>{
  const keyPressed = document.querySelector(`.key[data-key='${e.keyCode}']`);
  keyPressed.classList.add("playing");
  setTimeout(()=>{
    console.log("this will be logged after 170ms ");
    keyPressed.classList.remove("playing");
  },200)
  console.log(e);
  const soundName = keyPressed.querySelector("span").innerText;
  const sound = document.createElement("audio");
  sound.setAttribute("src",`./sounds/${soundName}.wav`);
  sound.play();
})

// .key[data-key='65']