let outputData = '';

let encryptionKey = generateKey();
let decryptionKey = generateDecryptionKey(encryptionKey);
console.log(decryptionKey);

function encrypt(data, key) {
  for (let i = 0; i < data.length; i++) {
    newChar = key[data[i]];
    outputData += newChar ? newChar : ' ';
  }
}
function decrypt(data, key) {
  for (let i = 0; i < data.length; i++) {
    newChar = key[data[i]];
    outputData += newChar ? newChar : ' ';
  }
}
let mode = 'encryption'; // 'decryption'
const buttonEncryption = document.querySelector('#encrypt-button');
const buttonDecryption = document.querySelector('#decrypt-button');
const buttonConvert = document.querySelector('.convert-button');
const buttonFunction = document.querySelector('.func-button');
const boxOutputH1 = document.querySelector('.output-data p');
const textareaOutput = document.querySelector('.output-textarea');
const textareaInput = document.querySelector('.input-textarea');

const modalKey = document.querySelector('.key-modal');
const customKey = document.querySelector('.key');
const buttonCancel = document.querySelector('.cancel');
const buttonDone = document.querySelector('.done');

buttonEncryption.addEventListener('click', e => {
  if (mode === 'encryption') return;
  textareaInput.value = '';
  textareaOutput.value = '';
  outputData = '';
  mode = 'encryption';

  buttonFunction.innerText = 'Copy Key';

  buttonConvert.innerText = 'Encrypt';
  boxOutputH1.innerText = 'Encrypted Data';

  buttonEncryption.classList.add('active');
  buttonDecryption.classList.remove('active');
});

buttonDecryption.addEventListener('click', e => {
  if (mode === 'decryption') return;
  textareaInput.value = '';
  textareaOutput.value = '';
  outputData = '';
  mode = 'decryption';

  buttonFunction.innerText = 'Edit Key';

  buttonConvert.innerText = 'Decrypt';
  boxOutputH1.innerText = 'Decrypted Data';

  buttonDecryption.classList.add('active');
  buttonEncryption.classList.remove('active');
});

buttonConvert.addEventListener('click', e => {
  outputData = '';
  if (mode === 'encryption') {
    encrypt(textareaInput.value, encryptionKey);
    textareaOutput.value = outputData;
  }
  if (mode === 'decryption') {
    decrypt(textareaInput.value, decryptionKey);
    textareaOutput.value = outputData;
  }
});

buttonFunction.addEventListener('click', e => {
  // console.log(navigator);
  if (mode === 'encryption') {
    navigator.clipboard.writeText(JSON.stringify(encryptionKey));
    return;
  }
  modalKey.style.display = 'grid';
});

buttonCancel.addEventListener('click', e => (modalKey.style.display = 'none'));
buttonDone.addEventListener('click', e => {
  //  encryptionKey = customKey;
  decryptionKey = generateDecryptionKey(JSON.parse(customKey.value));
  console.log(JSON.parse(customKey.value));
  modalKey.style.display = 'none';
});
