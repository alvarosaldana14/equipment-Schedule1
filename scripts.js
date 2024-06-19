
// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const equipmentData = [
        ["BACKHOE", "", "", "", "", "", "", "", ""],
        ["HAWKEYE CRANE", "237", "", "", "", "", "", "", ""],
        ["CRANE 217", "VIC", "", "", "", "", "", "", ""],
        // Add more equipment rows as needed
    ];

    const tableBody = document.querySelector("#equipmentTable tbody");

    equipmentData.forEach(rowData => {
        const row = document.createElement("tr");
        rowData.forEach(cellData => {
            const cell = document.createElement("td");
            if (rowData.indexOf(cellData) > 1) {
                const input = document.createElement("input");
                input.type = "text";
                input.value = cellData;
                cell.appendChild(input);
            } else {
                cell.textContent = cellData;
            }
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });

    // Add function to handle adding and deleting reservations
});
