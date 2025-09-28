//Question 1
document.getElementById("p3").style.color="red";

//Question 2
document.querySelectorAll(".abc").forEach(Element=>{
    Element.style.backgroundColor = "green";
    Element.style.border = 'solid pink';
});

//Question 3
Array.from(document.querySelectorAll('div')).find(div => div.textContent.trim() === 'E').textContent = "I'm a div";

//Question 4
document.getElementById("clicker").addEventListener("click",()=>{
    const counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
});

//Question 5
setTimeout(() => {
  const container = document.getElementById('container');
  container.style.border = '5px solid pink';
}, 1500);

//Question 6
document.getElementById('clicker').addEventListener('click', function() {
  let clickCount = 0;
  const intervalId = setInterval(function() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Hey';
    document.getElementById('appender').appendChild(newDiv);
    clickCount++;
    if (clickCount >= 6) {
      clearInterval(intervalId);
    }
  }, 500); 
});