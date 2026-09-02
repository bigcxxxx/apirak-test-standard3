// สลับแท็บ Executive และ Personnel
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    if (tabName === 'executives') {
        document.getElementById('executivesTab').classList.add('active');
        buttons[0].classList.add('active');
    } else if (tabName === 'personnel') {
        document.getElementById('personnelTab').classList.add('active');
        buttons[1].classList.add('active');
    }
}

// กรองข้อมูลบุคลากรตามสาขาวิชา
function filterDept(dept) {
    const cards = document.querySelectorAll('#personnelGrid .card');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // สลับคลาส active ของปุ่มตัวกรอง
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // แสดง/ซ่อนการ์ดบุคลากร
    cards.forEach(card => {
        if (dept === 'all' || card.getAttribute('data-dept') === dept) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
