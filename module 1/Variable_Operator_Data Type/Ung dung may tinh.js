// Hàm xử lý tính toán
function calculate(operation) {
    // Lấy giá trị từ form
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    // Kiểm tra nếu giá trị không hợp lệ
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").innerText = "Hãy nhập số hợp lệ!";
        return;
    }

    // Biến lưu kết quả
    let result;

    // Xử lý phép tính dựa trên loại operation
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            // Kiểm tra chia cho 0
            if (number2 === 0) {
                document.getElementById("result").innerText = "Không thể chia cho 0!";
                return;
            }
            result = number1 / number2;
            break;
        default:
            document.getElementById("result").innerText = "Phép tính không hợp lệ!";
            return;
    }

    // Hiển thị kết quả
    document.getElementById("result").innerText = `Kết quả: ${result}`;
}
