function generatePassword() {
  const length = document.getElementById('length').value;
  const type = document.getElementById('type').value;
  const includeUppercase = document.getElementById('uppercase').checked;
  let characters = '';

  if (type === 'numbers') {
      characters = '0123456789';
  } else if (type === 'alphabets') {
      characters = 'abcdefghijklmnopqrstuvwxyz';
  } else {
      characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  }
  
  if (includeUppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  
  let password = '';
  for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  document.getElementById('password').innerText = password;
}
