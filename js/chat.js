// ============================================================
// AI CHAT
// ============================================================
function toggleChat() {
    const chat = document.getElementById('aiChat');
    const toggle = document.getElementById('aiToggle');
    chat.classList.toggle('open');
    toggle.classList.toggle('active');
    if (chat.classList.contains('open')) {
        document.getElementById('chatInput').focus();
    }
}

function sendChat() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (!msg) return;
    const container = document.getElementById('chatMessages');
    // User message
    const userDiv = document.createElement('div');
    userDiv.className = 'msg user';
    userDiv.textContent = msg;
    container.appendChild(userDiv);
    input.value = '';
    container.scrollTop = container.scrollHeight;

    // Bot response (simulate AI)
    const botDiv = document.createElement('div');
    botDiv.className = 'msg bot';
    botDiv.textContent = '⏳ Đang suy nghĩ...';
    container.appendChild(botDiv);
    container.scrollTop = container.scrollHeight;

    setTimeout(() => {
        const responses = [
            'Cảm ơn bạn! G.E.C có các khóa học tiếng Anh, Nhật, Hàn, Trung, Đức. Bạn muốn tìm hiểu thêm về quốc gia nào? 😊',
            'G.E.C hỗ trợ du học 8 quốc gia: Nhật, Hàn, Đài Loan, Trung Quốc, Mỹ, Canada, Úc, Đức. Hãy cho tôi biết bạn quan tâm đến nước nào nhé! 🌍',
            'Bạn có thể đăng ký tư vấn trực tiếp tại trang Tuyển sinh hoặc gọi hotline 1900 636 636. Chúng tôi luôn sẵn sàng hỗ trợ! 💪',
            'G.E.C có cơ sở tại Bắc Ninh với đội ngũ tư vấn giàu kinh nghiệm. Bạn có thể đến trung tâm để được tư vấn trực tiếp nhé! 📍',
            'Học bổng du học luôn được cập nhật thường xuyên. Hãy theo dõi trang Tin tức để không bỏ lỡ cơ hội nào! 🎓'
        ];
        botDiv.textContent = responses[Math.floor(Math.random() * responses.length)];
        container.scrollTop = container.scrollHeight;
    }, 800);
}
