const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const inputText = nameInput.value.trim();
  if (inputText !== '') {
    nameOutput.textContent = inputText;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});