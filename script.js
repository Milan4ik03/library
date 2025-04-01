// Функции для соцсетей
function shareToFacebook() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + window.location.href, "_blank");
}

function shareToTwitter() {
    window.open("https://twitter.com/intent/tweet?url=" + window.location.href, "_blank");
}

// Функции для модального окна
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function confirmExit() {
    closeModal();
    alert("Вы успешно вышли!");
}

// Функции для загрузки
function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Инициализация карты Google
function initMap() {
    var location = {lat: 40.7128, lng: -74.0060}; // Местоположение
    var map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Подключение карты Google API
window.onload = function() {
    showLoading();
    setTimeout(hideLoading, 2000); // Задержка, чтобы увидеть прогрессбар
    initMap();
};

// Симуляция редактирования профиля и изменения пароля
function editProfile() {
    alert("Редактирование профиля...");
}

function changePassword() {
    alert("Изменение пароля...");
}

function manageSubscription() {
    alert("Управление подпиской...");
}
// Функция для скачивания бесплатной книги
function downloadBook(bookName) {
    alert(`Вы скачали книгу: ${bookName}`);
}

// Функция для покупки книги
function buyBook(bookName, price) {
    alert(`Вы купили книгу: ${bookName}. Стоимость: $${price}`);
}

// Обработчики событий для кнопок
document.querySelectorAll('.free-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const bookName = e.target.parentElement.querySelector('h4').textContent;
        downloadBook(bookName);
    });
});

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const bookName = e.target.parentElement.querySelector('h4').textContent;
        const price = e.target.parentElement.querySelector('.price').textContent.replace('$', '');
        buyBook(bookName, price);
    });
});
// Обработчик регистрации через email и телефон
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Здесь можно добавить логику для регистрации (например, отправка на сервер)
    alert(`Регистрация прошла успешно!\nEmail: ${email}\nТелефон: ${phone}`);
});

// Для кнопок соцсетей можно добавить переходы или вызвать SDK авторизации
document.querySelector('.google-btn').addEventListener('click', function() {
    alert("Регистрация через Google (функция не реализована).");
});

document.querySelector('.facebook-btn').addEventListener('click', function() {
    alert("Регистрация через Facebook (функция не реализована).");
});

document.querySelector('.twitter-btn').addEventListener('click', function() {
    alert("Регистрация через Twitter (функция не реализована).");
});
// Функция для скачивания бесплатной книги
function downloadBook(bookName) {
    alert(`Вы скачали книгу: ${bookName}`);
}

// Функция для покупки платной книги
function buyBook(bookName, price) {
    alert(`Вы купили книгу: ${bookName}. Стоимость: $${price}`);
}

// Обработчики событий для кнопок
document.querySelectorAll('.free-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const bookName = e.target.parentElement.querySelector('h4').textContent;
        downloadBook(bookName);
    });
});

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const bookName = e.target.parentElement.querySelector('h4').textContent;
        const price = e.target.parentElement.querySelector('.price').textContent.replace('$', '');
        buyBook(bookName, price);
    });
});
// Открытие модального окна для оплаты
function openPaymentModal(walletAddress, price) {
    // Устанавливаем адрес кошелька и сумму в модальном окне
    document.getElementById('wallet-address').textContent = walletAddress;
    document.getElementById('amount').textContent = price;

    // Показываем модальное окно
    document.getElementById('payment-modal').style.display = 'flex';
}

// Закрытие модального окна
function closePaymentModal() {
    // Закрываем модальное окно
    document.getElementById('payment-modal').style.display = 'none';
}

// В будущем: Добавить обработку криптовалютных транзакций (например, с использованием Web3.js или Ethers.js)
// Пример кода с Web3.js для отслеживания транзакции (упрощенно)
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

async function checkTransactionStatus(transactionHash) {
    const receipt = await web3.eth.getTransactionReceipt(transactionHash);
    if (receipt) {
        alert('Транзакция подтверждена! Отправляем чек на ваш email.');
        // Здесь можно отправить чек пользователю на email
    }
}
// Открытие модального окна для оплаты
function openPaymentModal(walletAddress, price) {
    // Устанавливаем адрес кошелька и сумму в модальном окне
    document.getElementById('wallet-address').textContent = walletAddress;
    document.getElementById('amount').textContent = price;

    // Показываем модальное окно
    document.getElementById('payment-modal').style.display = 'flex';
    console.log('Modal opened with wallet:', walletAddress, 'and amount:', price); // для отладки
}

// Закрытие модального окна
function closePaymentModal() {
    // Закрываем модальное окно
    document.getElementById('payment-modal').style.display = 'none';
    console.log('Modal closed'); // для отладки
}
// Инициализация PayPal
paypal.Buttons({
    createOrder: function(data, actions) {
        // Создание заказа, если нужно, вы можете сделать это на сервере
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '20.00' // Установите цену товара
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        // Когда пользователь одобряет оплату
        return actions.order.capture().then(function(details) {
            // Показываем модальное окно с процессом оплаты
            document.getElementById('payment-status-modal').style.display = 'flex';
            // Можете добавить дополнительную логику для отправки чека, например, на email

            console.log('Оплата успешно завершена', details);
            alert('Оплата прошла успешно!');
        });
    }
}).render('#paypal-button-container');

// Функция для закрытия модального окна
function closePaymentStatusModal() {
    document.getElementById('payment-status-modal').style.display = 'none';
}
// Для использования web3.js добавьте библиотеку в HTML
// <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.0/web3.min.js"></script>

let 


// Инициализация Web3 и получение аккаунта пользователя
if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
        userAccount = accounts[0]; // Получаем первый аккаунт пользователя
        console.log("Используем аккаунт:", userAccount);
    });
} else {
    alert('Ethereum кошелек (например, MetaMask) не найден!');
}

// Функция для начала оплаты
function startEthereumPayment() {
    if (web3 && userAccount) {
        // Сумма платежа в эфире (ETH)
        const amountInEther = '0.1'; // 0.1 ETH (пример)

        const transactionParameters = {
            to: '0x624DB1b9E2f4d96fE89c65133337DEb8166bCAf1', // Адрес кошелька для оплаты
            from: userAccount,
            value: web3.utils.toHex(web3.utils.toWei(amountInEther, 'ether')) // Переводим в wei
        };

        // Отправляем транзакцию
        web3.eth.sendTransaction(transactionParameters)
            .then(receipt => {
                // Успешная транзакция
                console.log('Транзакция успешно завершена:', receipt);
                document.getElementById('payment-status-modal').style.display = 'flex';
                alert('Оплата прошла успешно!');
            })
            .catch(error => {
                console.error('Ошибка при оплате:', error);
                alert('Произошла ошибка при оплате!');
            });
    } else {
        alert('Пожалуйста, подключите ваш Ethereum кошелек!');
    }
}

// Функция для закрытия модального окна
function closePaymentStatusModal() {
    document.getElementById('payment-status-modal').style.display = 'none';
}

