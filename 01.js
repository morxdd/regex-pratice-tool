document.addEventListener('DOMContentLoaded', function () {

});
function validateEmail() {
    // 取得輸入元素與父容器
    let emailInput = document.getElementById('email-input');
    let emailResult = document.getElementById('email-result');

    // 清除之前的訊息
    if (emailResult.innerText) {
        emailResult.innerText = '';
    }

    // 去除多餘空白，取得輸入值
    let emailInputValue = emailInput.value.trim();

    // 電子郵件正規表達式
    let emailPattern = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 驗證輸入值並設置訊息內容與樣式
    if (!emailPattern.test(emailInputValue)) {
        emailResult.innerText = "電子郵件格式不正確"
        emailResult.classList.add("invalid");
        return;
    }
    emailResult.innerText = "電子郵件格式正確"
    emailResult.classList.add("invalid")

}

function validatePhone() {
    // 取得輸入元素與父容器
    let phoneInput = document.getElementById('phone-input');
    let validatorSection = document.querySelector('.phone-validator-section');

    // 建立新的訊息容器
    let validationMessage = document.createElement('div');
    validationMessage.classList.add('phone-validation-message');
    validationMessage.classList.add('validation-message');

    // 清除之前的訊息
    let existingMessage = document.querySelector('.phone-validation-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // 去除多餘空白，取得輸入值
    let phoneInputValue = phoneInput.value.trim();

    // 手機號碼正規表達式
    let phonePattern = /^09\d{8}$/;

    // 驗證輸入值並設置訊息內容與樣式
    if (phonePattern.test(phoneInputValue)) {
        validationMessage.innerHTML = "手機號碼格式正確"
        validationMessage.classList.add("valid")
    } else {
        validationMessage.innerText = "手機號碼格式不正確"
        validationMessage.classList.add("invalid")
    }
    validatorSection.appendChild(validationMessage);
}

function maskCreditCard() {
    // 取得輸入元素與父容器
    let cardInput = document.getElementById('card-input');
    let cardResult = document.getElementById('card-result');

    // 清除之前的訊息
    cardResult.innerText = '';
    cardResult.className = ''; // 清空樣式

    // 去除多餘空白，取得輸入值
    let cardInputValue = cardInput.value.replace(/\s+/g, '');

    // 驗證是否是有效的信用卡號格式
    let cardPattern = /^\d{13,19}$/; // 允許 13 至 19 位純數字

    if (!cardPattern.test(cardInputValue)) {
        cardResult.innerText = "信用卡號格式不正確"
        cardResult.classList.add("invalid")
        return;
    }

    // 遮罩信用卡號
    let maskedCard = cardInputValue.replace(/.(?=.{4})/g, '*'); // 替換除最後 4 位外的字符

    // 格式化輸出（每 4 位加一個空格，方便閱讀）
    let formattedMaskedCard = maskedCard.replace(/(.{4})/g, '$1 ').trim();

    // 顯示結果
    cardResult.innerText = `遮罩後的卡號：${formattedMaskedCard}`;
    cardResult.classList.add('valid');

}