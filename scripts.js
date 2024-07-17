const socket = io();

function updateText() {
  const inputText = document.getElementById("input-text").value;
  document.getElementById("output").textContent = inputText;
  socket.emit('text-update', inputText);
}

socket.on('text-update', (data) => {
  document.getElementById("output").textContent = data;
});
