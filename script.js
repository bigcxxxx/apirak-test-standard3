// ฟังก์ชันสำหรับสลับแท็บหน้าจอหลัก (Site Navigation Tabs)
function switchTab(tabId, element) {
    // ซ่อน Content ของทุกแท็บ
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));

    // ลบการแสดงผล Active จากเมนูเดิม
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // แสดง Content แท็บที่เลือก และเปลี่ยนสถานะเมนูให้เป็น Active
    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');
}

// ฟังก์ชันค้นหาและกรองการ์ดรายชื่อบุคลากร (Personnel Filtering System)
function filterPersonnel() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const selectedDept = document.getElementById('departmentFilter').value;
    const cards = document.querySelectorAll('.person-card');

    cards.forEach(card => {
        const name = card.querySelector('.person-name').textContent.toLowerCase();
        const role = card.querySelector('.person-role').textContent.toLowerCase();
        const dept = card.getAttribute('data-dept');

        const matchesSearch = name.includes(searchValue) || role.includes(searchValue);
        const matchesDept = (selectedDept === 'all') || (dept === selectedDept);

        if (matchesSearch && matchesDept) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}
