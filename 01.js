document.addEventListener('DOMContentLoaded', function () {

});
function validateEmail() {
    // 取得輸入元素與父容器
    let emailInput = document.getElementById('email-input');
    let validatorSection = document.querySelector('.validator-section');

    // 建立新的訊息容器
    let validationMessage = document.createElement('div');
    validationMessage.classList.add('email-validation-message');
    validationMessage.classList.add('validation-message');

    // 清除之前的訊息
    let existingMessage = document.querySelector('.email-validation-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // 去除多餘空白，取得輸入值
    let emailInputValue = emailInput.value.trim();

    // 電子郵件正規表達式
    let emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 驗證輸入值並設置訊息內容與樣式
    if (emailPattern.test(emailInputValue)){
        validationMessage.innerText = "電子郵件格式正確"
        validationMessage.classList.add("valid")
    } else {
        validationMessage.innerText = "電子郵件格式不正確"
        validationMessage.classList.add("invalid")
    }
    validatorSection.appendChild(validationMessage);
}