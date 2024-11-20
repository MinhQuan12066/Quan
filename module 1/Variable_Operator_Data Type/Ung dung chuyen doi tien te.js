// Định nghĩa tỉ giá giữa các loại tiền
const exchangeRates = {
    VND: { USD: 0.000041, EUR: 0.000038 },
    USD: { VND: 24300, EUR: 0.92 },
    EUR: { USD: 1.09, VND: 26500 }
};

// Hàm chuyển đổi tiền tệ
function convertCurrency() {
    // Lấy giá trị từ form
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    // Kiểm tra dữ liệu nhập vào
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Hãy nhập số tiền hợp lệ!";
        return;
    }

    // Nếu chuyển đổi cùng loại tiền
    if (fromCurrency === toCurrency) {
        document.getElementById("result").innerText = `Kết quả: ${amount} ${toCurrency}`;
        return;
    }

    // Lấy tỷ giá
    const rate = exchangeRates[fromCurrency]?.[toCurrency];
    if (!rate) {
        document.getElementById("result").innerText = "Không thể chuyển đổi giữa các loại tiền này!";
        return;
    }

    // Tính giá trị sau chuyển đổi
    const convertedAmount = (amount * rate).toFixed(2);

    // Hiển thị kết quả
    document.getElementById("result").innerText = `Kết quả: ${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}

// Gắn sự kiện cho nút Convert
document.getElementById("convert-button").addEventListener("click", convertCurrency);
