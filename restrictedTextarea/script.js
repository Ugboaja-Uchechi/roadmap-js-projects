const textArea = document.querySelector('#text');
const textLength = document.querySelector('.max-length');
const textCount = document.querySelector('.text-count');
const maxLength = 250;

textLength.innerHTML = maxLength;


textArea.addEventListener('input', (e) => {
  e.preventDefault();
  if (textArea.value.length > maxLength) {
    textArea.value = textArea.value.slice(0, maxLength);
    textArea.style.border = '2px solid red';
  } else {
    textArea.style.border = '2px solid #c2c5cb';
  }
  textLimit();
});

function textLimit() {
  textCount.innerHTML = maxLength - textArea.value.length;
}
