// Tạo bảng cửu chương
const tableContainer = document.getElementById('table-container');
const table = document.createElement('table');
const maxNumber = 9; // Tạo bảng từ 2 đến 9

// Tạo dòng
for (let row = 1; row <= 9; row++) {
    const tableRow = document.createElement('tr');

    // Tạo cột cho mỗi bảng
    for (let col = 2; col <= maxNumber; col++) {
        const tableCell = document.createElement('td');
        tableCell.textContent = `${col} x ${row} = ${col * row}`;
        tableRow.appendChild(tableCell);
    }

    // Thêm dòng vào bảng
    table.appendChild(tableRow);
}

// Thêm bảng vào tài liệu HTML
tableContainer.appendChild(table);
