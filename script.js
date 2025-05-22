document.getElementById('shotForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const machine = document.getElementById('machine').value;
  const shotCount = document.getElementById('shotCount').value;
  const logEntry = `Machine ${machine} at ${shotCount} shots`;
  const li = document.createElement('li');
  li.textContent = logEntry;
  document.getElementById('logList').appendChild(li);
  e.target.reset();
});

document.getElementById('messageForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const message = document.getElementById('messageInput').value;
  const li = document.createElement('li');
  li.textContent = message;
  document.getElementById('messages').appendChild(li);
  e.target.reset();
});
