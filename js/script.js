const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('.submit-btn');


function toggleError(e) {
    const inputLab = e.currentTarget.nextElementSibling
    checkInput(e.currentTarget, inputLab);
  
}

function checkInput(input, inputLab) {
    input.classList.toggle('input-error', !input.checkValidity());
    inputLab.classList.toggle('input-error-hide', !input.classList.contains('input-error'));
}

for (const input of inputs) {
    input.addEventListener('change', toggleError);
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    for (const input of inputs) {
        const inputLab = input.nextElementSibling
        checkInput(input, inputLab);
   }
} )