document.addEventListener('DOMContentLoaded', function () {

});
function validateEmail() {
    // 取得輸入元素與驗證結果元素
    let emailInput = document.getElementById('email-input');
    let emailResult = document.getElementById('email-result');

    // 清除之前的訊息
    if (emailResult.innerText) {
        emailResult.innerText = '';
        emailResult.className = '';

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
    // 取得輸入元素與驗證結果元素
    let phoneInput = document.getElementById('phone-input');
    let phoneResult = document.getElementById('phone-result');

    // 清除之前的訊息
    if (phoneResult.innerText) {
        phoneResult.innerText = '';
        phoneResult.className = '';
    }

    // 去除多餘空白，取得輸入值
    let phoneInputValue = phoneInput.value.trim();

    // 手機號碼正規表達式
    let phonePattern = /^09\d{8}$/;

    // 驗證輸入值並設置訊息內容與樣式
    if (!phonePattern.test(phoneInputValue)) {
        phoneResult.innerText = "手機號碼格式不正確"
        phoneResult.classList.add("invalid")
        return
    }
    phoneResult.innerHTML = "手機號碼格式正確"
    phoneResult.classList.add("valid");
}

function maskCreditCard() {
    // 取得輸入元素與驗證結果元素
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

function validatePassword() {
    // 取得輸入元素與驗證結果元素
    let passwordInput = document.getElementById('password-input');
    let passwordResult = document.getElementById('password-result');

    // 清除之前的訊息
    passwordResult.innerText = '';
    passwordResult.className = ''; // 清空樣式

    // 去除多餘空白，取得輸入值
    let passwordValue = passwordInput.value.trim();

    // 定義驗證規則
    let lengthCheck = passwordValue.length >= 8;
    let upperCheck = /[A-Z]/.test(passwordValue);
    let lowerCheck = /[a-z]/.test(passwordValue);
    let numberCheck = /[0-9]/.test(passwordValue);
    let specialCheck = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

    if (!lengthCheck) {
        passwordResult.innerText = "密碼長度至少需要8個字符";
        passwordResult.classList.add("invalid");
        return;
    }

    // 計算密碼強度
    let strength = 0;
    if (upperCheck) strength++;
    if (lowerCheck) strength++;
    if (numberCheck) strength++;
    if (specialCheck) strength++;

    // 根據強度顯示不同訊息
    if (strength === 0 || strength === 1) {
        passwordResult.innerText = "密碼強度：弱";
        passwordResult.classList.add("invalid");
    } else if (strength === 2) {
        passwordResult.innerText = "密碼強度：中";
        passwordResult.classList.add("warning");
    } else if (strength === 3) {
        passwordResult.innerText = "密碼強度：強";
        passwordResult.classList.add("valid");
    } else {
        passwordResult.innerText = "密碼強度：非常強";
        passwordResult.classList.add("valid");
    }
}