document.addEventListener('DOMContentLoaded', function () {

});
function validateEmail() {
    let emailInput = document.getElementById('email-input');
    let validatorSection = document.querySelector('.validator-section');
    let emailErrorMessage = document.createElement('div');
    emailErrorMessage.classList.add('email-error-message');

    // 清除之前的錯誤訊息
    let existingError = document.querySelector('.email-error-message');
    if (existingError) {
        existingError.remove();
    }
    let emailInputValue = emailInput.value.trim();

    // 電子郵件正規表達式
    let emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(
        emailPattern.test('pomin1995qoot@gmail.com')
    );
}