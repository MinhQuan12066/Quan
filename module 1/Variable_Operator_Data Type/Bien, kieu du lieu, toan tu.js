// Nhập điểm các môn học
let vatLy = parseFloat(prompt("Nhập điểm Vật lý:"));
let hoaHoc = parseFloat(prompt("Nhập điểm Hóa học:"));
let sinhHoc = parseFloat(prompt("Nhập điểm Sinh học:"));

// Tính tổng điểm
let tongDiem = vatLy + hoaHoc + sinhHoc;

// Tính điểm trung bình
let diemTrungBinh = tongDiem / 3;

// Hiển thị kết quả
console.log("Tổng điểm: " + tongDiem);
console.log("Điểm trung bình: " + diemTrungBinh.toFixed(2));
alert("Tổng điểm: " + tongDiem + "\nĐiểm trung bình: " + diemTrungBinh.toFixed(2));

// bài 2
// Nhập giá trị nhiệt độ ở độ Celsius
let celsius = parseFloat(prompt("Nhập nhiệt độ ở độ Celsius (°C):"));

// Chuyển đổi sang độ Fahrenheit
let fahrenheit = (celsius * 9 / 5) + 32;

// Hiển thị kết quả
console.log(`${celsius}°C tương ứng với ${fahrenheit}°F.`);
alert(`${celsius}°C tương ứng với ${fahrenheit}°F.`);

// bài 3
// Nhập bán kính hình tròn từ người dùng
let radius = parseFloat(prompt("Nhập bán kính của hình tròn (r):"));

// Kiểm tra bán kính có hợp lệ không
if (radius > 0) {
    // Tính diện tích hình tròn
    let area = Math.PI * Math.pow(radius, 2);

    // Hiển thị kết quả
    console.log(`Diện tích hình tròn với bán kính ${radius} là ${area.toFixed(2)}.`);
    alert(`Diện tích hình tròn với bán kính ${radius} là ${area.toFixed(2)}.`);
} else {
    console.log("Bán kính phải là số dương.");
    alert("Bán kính phải là số dương.");
}
// bài 4
// Nhập bán kính hình tròn từ người dùng
let radius = parseFloat(prompt("Nhập bán kính của hình tròn (r):"));

// Kiểm tra bán kính có hợp lệ không
if (radius > 0) {
    // Tính chu vi hình tròn
    let circumference = 2 * Math.PI * radius;

    // Hiển thị kết quả
    console.log(`Chu vi hình tròn với bán kính ${radius} là ${circumference.toFixed(2)}.`);
    alert(`Chu vi hình tròn với bán kính ${radius} là ${circumference.toFixed(2)}.`);
} else {
    console.log("Bán kính phải là số dương.");
    alert("Bán kính phải là số dương.");
}

