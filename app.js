document.getElementById('contactForm').addEventListener('submit', function (e) {

  e.preventDefault();
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');
  let error = document.getElementById('formError');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
    error.textContent = 'Please fill in all fields.';
    return;
  } else if (!emailPattern.test(email.value)) {
    error.textContent = 'Please enter a valid email.';
    return;
  }

  error.textContent = '';
  alert('Message sent successfully!');
  this.reset();
});


function addTask() {
  const input = document.getElementById('todoInput');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
  document.getElementById('todoList').appendChild(li);
  input.value = '';
}

function removeTask(button) {
  button.parentElement.remove();
}
