// ============================================================
// COUNTRY DATA (mô phỏng từ file JSON)
// ============================================================
const COUNTRY_DATA = {
    japan: {
        name: "Nhật Bản",
        banner: "🇯🇵",
        intro: "Nhật Bản là điểm đến du học hàng đầu châu Á với nền giáo dục tiên tiến, văn hóa phong phú và cơ hội việc làm rộng mở.",
        benefits: ["Chất lượng đào tạo hàng đầu", "Học bổng hấp dẫn", "Môi trường an toàn"],
        requirements: ["TOEFL iBT 80+ / JLPT N2", "Bằng tốt nghiệp THPT", "Chứng minh tài chính"],
        tuition: ["Học phí: 800.000 - 1.200.000 JPY/năm", "Sinh hoạt phí: 100.000 - 150.000 JPY/tháng"],
        schools: ["ĐH Tokyo", "ĐH Kyoto", "ĐH Osaka"],
        faq: ["Hỏi: Chi phí du học Nhật? Đáp: Khoảng 200-250 triệu VND/năm."]
    },
    korea: {
        name: "Hàn Quốc",
        banner: "🇰🇷",
        intro: "Hàn Quốc – Quốc gia của công nghệ và văn hóa K-pop. Hệ thống giáo dục hiện đại, chi phí hợp lý.",
        benefits: ["Học bổng chính phủ", "Môi trường năng động", "Cơ hội việc làm cao"],
        requirements: ["TOPIK 3+", "Bằng THPT", "Chứng minh tài chính"],
        tuition: ["Học phí: 4.000.000 - 8.000.000 KRW/học kỳ", "Sinh hoạt phí: 500.000 - 800.000 KRW/tháng"],
        schools: ["ĐH Quốc gia Seoul", "ĐH Korea", "ĐH Yonsei"],
        faq: ["Hỏi: Có cần tiếng Hàn? Đáp: Cần TOPIK 3 trở lên."]
    },
    taiwan: {
        name: "Đài Loan",
        banner: "🇹🇼",
        intro: "Đài Loan – Hòn đảo xinh đẹp với nền giáo dục chất lượng cao, chi phí du học phải chăng.",
        benefits: ["Học bổng đa dạng", "Chi phí thấp", "Văn hóa thân thiện"],
        requirements: ["TOCFL A2+", "Bằng THPT", "Chứng minh tài chính"],
        tuition: ["Học phí: 50.000 - 100.000 TWD/học kỳ", "Sinh hoạt phí: 15.000 - 25.000 TWD/tháng"],
        schools: ["ĐH Quốc gia Đài Loan", "ĐH Thanh Hoa", "ĐH Giao thông"],
        faq: ["Hỏi: Có học bổng không? Đáp: Có học bổng chính phủ và trường."]
    },
    china: {
        name: "Trung Quốc",
        banner: "🇨🇳",
        intro: "Trung Quốc – Cường quốc giáo dục với nhiều trường đại học top đầu thế giới.",
        benefits: ["Chất lượng đào tạo cao", "Học bổng CSC", "Cơ hội việc làm"],
        requirements: ["HSK 4+", "Bằng THPT", "Chứng minh tài chính"],
        tuition: ["Học phí: 20.000 - 60.000 CNY/năm", "Sinh hoạt phí: 3.000 - 6.000 CNY/tháng"],
        schools: ["ĐH Bắc Kinh", "ĐH Thanh Hoa", "ĐH Phục Đán"],
        faq: ["Hỏi: Học bổng CSC là gì? Đáp: Học bổng chính phủ Trung Quốc."]
    },
    usa: {
        name: "Mỹ",
        banner: "🇺🇸",
        intro: "Mỹ – Điểm đến du học số 1 thế giới với hệ thống giáo dục đa dạng và cơ hội phát triển vô tận.",
        benefits: ["Giáo dục hàng đầu", "Đa dạng ngành học", "Cơ hội nghề nghiệp"],
        requirements: ["TOEFL 100+/IELTS 7.0", "SAT/ACT", "Chứng minh tài chính"],
        tuition: ["Học phí: 20.000 - 60.000 USD/năm", "Sinh hoạt phí: 12.000 - 18.000 USD/năm"],
        schools: ["Harvard", "MIT", "Stanford"],
        faq: ["Hỏi: Chi phí tổng bao nhiêu? Đáp: 40.000 - 80.000 USD/năm."]
    },
    canada: {
        name: "Canada",
        banner: "🇨🇦",
        intro: "Canada – Quốc gia chất lượng sống cao, môi trường an toàn và chính sách định cư hấp dẫn.",
        benefits: ["Chất lượng giáo dục", "Chính sách định cư", "Môi trường đa văn hóa"],
        requirements: ["IELTS 6.5+", "Bằng THPT", "Chứng minh tài chính"],
        tuition: ["Học phí: 15.000 - 35.000 CAD/năm", "Sinh hoạt phí: 10.000 - 15.000 CAD/năm"],
        schools: ["ĐH Toronto", "UBC", "McGill"],
        faq: ["Hỏi: Có thể định cư sau tốt nghiệp? Đáp: Có chương trình PGWP."]
    },
    australia: {
        name: "Úc",
        banner: "🇦🇺",
        intro: "Úc – Đất nước của những cơ hội, với nền giáo dục đẳng cấp thế giới và khí hậu ôn hòa.",
        benefits: ["Bằng cấp quốc tế", "Môi trường an toàn", "Cơ hội việc làm"],
        requirements: ["IELTS 6.5+", "Bằng THPT", "Chứng minh tài chính"],
        tuition: ["Học phí: 20.000 - 45.000 AUD/năm", "Sinh hoạt phí: 15.000 - 20.000 AUD/năm"],
        schools: ["ĐH Melbourne", "ĐH Sydney", "ANU"],
        faq: ["Hỏi: Làm thêm được bao nhiêu? Đáp: 20 giờ/tuần, khoảng 20-25 AUD/giờ."]
    },
    germany: {
        name: "Đức",
        banner: "🇩🇪",
        intro: "Đức – Trung tâm châu Âu với nền giáo dục miễn phí và ngành công nghiệp phát triển mạnh.",
        benefits: ["Học phí thấp", "Cơ hội việc làm cao", "Chất lượng đào tạo"],
        requirements: ["IELTS 6.0+ / Tiếng Đức B1", "Bằng THPT", "Chứng minh tài chính"],
        tuition: ["Học phí: 0 - 1.500 EUR/năm", "Sinh hoạt phí: 800 - 1.200 EUR/tháng"],
        schools: ["ĐH Munich", "ĐH Heidelberg", "TU Berlin"],
        faq: ["Hỏi: Có miễn học phí không? Đáp: Hầu hết trường công lập miễn phí."]
    }
};

// ============================================================
// RENDER PAGES
// ============================================================
function renderHome() {
    return `
        <section class="page active" id="page-home">
            <div class="hero">
                <div class="hero-shapes">
                    <div class="shape"></div>
                    <div class="shape"></div>
                    <div class="shape"></div>
                </div>
                <div class="container">
                    <div class="hero-content">
                        <h1>
                            <span class="highlight">G.E.C</span> — <br />Trọn niềm tin, <br /><span style="color:var(--green);">Vững tương lai</span>
                        </h1>
                        <p>Trung tâm Ngoại ngữ & Du học G.E.C (Vkjth Educational) – Đồng hành cùng bạn chinh phục tri thức toàn cầu.</p>
                        <div class="hero-buttons">
                            <button class="btn-ripple" onclick="navigate('/tuyen-sinh')">📩 Đăng ký ngay</button>
                            <button class="btn-ripple btn-outline" onclick="toggleChat()">💬 Chat AI</button>
                        </div>
                    </div>
                    <div class="hero-image">
                        <div class="glass">
                            <div class="logo-big">G.E.C</div>
                            <p>Vkjth Educational</p>
                            <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
                                <span class="badge">🇯🇵 Nhật</span>
                                <span class="badge badge-red">🇰🇷 Hàn</span>
                                <span class="badge">🇹🇼 Đài Loan</span>
                                <span class="badge badge-red">🇨🇳 Trung</span>
                                <span class="badge">🇺🇸 Mỹ</span>
                                <span class="badge badge-red">🇨🇦 Canada</span>
                                <span class="badge">🇦🇺 Úc</span>
                                <span class="badge badge-red">🇩🇪 Đức</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card-grid reveal">
                    <div class="card">
                        <h3>🌍 Du học toàn cầu</h3>
                        <p>8 quốc gia hàng đầu với lộ trình tối ưu, chi phí hợp lý, hỗ trợ tận tâm.</p>
                    </div>
                    <div class="card">
                        <h3>📚 Đào tạo ngoại ngữ</h3>
                        <p>Tiếng Anh, Nhật, Hàn, Trung, Đức – lộ trình cá nhân hóa, cam kết đầu ra.</p>
                    </div>
                    <div class="card">
                        <h3>🤖 Tư vấn AI 24/7</h3>
                        <p>Trợ lý ảo thông minh sẵn sàng giải đáp mọi thắc mắc của bạn ngay lập tức.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderGioiThieu() {
    return `
        <section class="page" id="page-gioi-thieu">
            <div class="container">
                <h2 class="page-title">Về G.E.C</h2>
                <p class="page-sub">Trung tâm Ngoại ngữ & Du học G.E.C (Vkjth Educational) – Bắc Ninh</p>
                <div class="card-grid">
                    <div class="card">
                        <h3>🎯 Sứ mệnh</h3>
                        <p>Kiến tạo cơ hội học tập quốc tế cho thế hệ trẻ Việt Nam, kết nối tri thức toàn cầu.</p>
                    </div>
                    <div class="card">
                        <h3>🏆 Tầm nhìn</h3>
                        <p>Trở thành trung tâm giáo dục và du học uy tín hàng đầu tại Bắc Ninh và khu vực phía Bắc.</p>
                    </div>
                    <div class="card">
                        <h3>💎 Giá trị cốt lõi</h3>
                        <p>Trung thực – Tận tâm – Sáng tạo – Bền vững. Đặt lợi ích học viên lên hàng đầu.</p>
                    </div>
                </div>
                <div class="glass" style="padding:32px;margin-top:24px;">
                    <h3 style="color:var(--brown);">🏛️ Chi nhánh Bắc Ninh</h3>
                    <p>Địa chỉ: Số 1, đường Lý Thái Tổ, phường Vũ Ninh, thành phố Bắc Ninh.<br />Hotline: 1900 636 636</p>
                </div>
            </div>
        </section>
    `;
}

function renderKhoaHoc() {
    return `
        <section class="page" id="page-khoa-hoc">
            <div class="container">
                <h2 class="page-title">Khóa học</h2>
                <p class="page-sub">Đa dạng chương trình đào tạo ngoại ngữ chất lượng cao</p>
                <div class="card-grid">
                    <div class="card">
                        <h3>🇬🇧 Tiếng Anh</h3>
                        <p>Lộ trình từ cơ bản đến nâng cao, luyện thi IELTS, TOEIC, giao tiếp quốc tế.</p>
                    </div>
                    <div class="card">
                        <h3>🇯🇵 Tiếng Nhật</h3>
                        <p>Chương trình từ N5 đến N1, luyện thi JLPT, định hướng du học và làm việc.</p>
                    </div>
                    <div class="card">
                        <h3>🇰🇷 Tiếng Hàn</h3>
                        <p>Đào tạo từ sơ cấp đến cao cấp, luyện thi TOPIK, giao tiếp thành thạo.</p>
                    </div>
                    <div class="card">
                        <h3>🇨🇳 Tiếng Trung</h3>
                        <p>Luyện thi HSK, giao tiếp thương mại, văn hóa Trung Hoa.</p>
                    </div>
                    <div class="card">
                        <h3>🇩🇪 Tiếng Đức</h3>
                        <p>Chuẩn bị du học nghề Đức, luyện thi Goethe, định cư châu Âu.</p>
                    </div>
                    <div class="card">
                        <h3>🌐 Luyện thi quốc tế</h3>
                        <p>SAT, ACT, GRE, GMAT – Đồng hành cùng bạn chinh phục các kỳ thi quốc tế.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderTuyenSinh() {
    return `
        <section class="page" id="page-tuyen-sinh">
            <div class="container">
                <h2 class="page-title">Đăng ký tư vấn</h2>
                <p class="page-sub">G.E.C đồng hành cùng bạn trên mọi hành trình học tập</p>
                <div class="glass" style="padding:32px;max-width:640px;margin:0 auto;">
                    <form id="enrollForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Họ và tên *</label>
                                <input type="text" id="fullName" required placeholder="Nguyễn Văn A" />
                            </div>
                            <div class="form-group">
                                <label>Số điện thoại *</label>
                                <input type="tel" id="phone" required placeholder="0987654321" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" id="email" placeholder="example@email.com" />
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Quốc gia quan tâm</label>
                                <select id="countryInterest">
                                    <option value="Nhật Bản">Nhật Bản</option>
                                    <option value="Hàn Quốc">Hàn Quốc</option>
                                    <option value="Đài Loan">Đài Loan</option>
                                    <option value="Trung Quốc">Trung Quốc</option>
                                    <option value="Mỹ">Mỹ</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Úc">Úc</option>
                                    <option value="Đức">Đức</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Khóa học quan tâm</label>
                                <select id="courseInterest">
                                    <option value="Tiếng Anh">Tiếng Anh</option>
                                    <option value="Tiếng Nhật">Tiếng Nhật</option>
                                    <option value="Tiếng Hàn">Tiếng Hàn</option>
                                    <option value="Tiếng Trung">Tiếng Trung</option>
                                    <option value="Tiếng Đức">Tiếng Đức</option>
                                    <option value="Luyện thi quốc tế">Luyện thi quốc tế</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Nội dung cần tư vấn</label>
                            <textarea id="message" placeholder="Chia sẻ với chúng tôi về mong muốn của bạn..."></textarea>
                        </div>
                        <button type="submit" class="btn-ripple" style="width:100%;justify-content:center;">📩 Gửi đăng ký</button>
                    </form>
                    <div id="formStatus" style="margin-top:16px;text-align:center;font-weight:500;"></div>
                </div>
            </div>
        </section>
    `;
}

function renderTinTuc() {
    return `
        <section class="page" id="page-tin-tuc">
            <div class="container">
                <h2 class="page-title">Tin tức & Sự kiện</h2>
                <p class="page-sub">Cập nhật thông tin mới nhất từ G.E.C</p>
                <div class="card-grid">
                    <div class="card">
                        <span class="badge">🎉 Sự kiện</span>
                        <h3>Hội thảo du học Nhật Bản 2026</h3>
                        <p>Ngày 20/06/2026 – Gặp gỡ đại diện trường ĐH Tokyo, Osaka, Kyoto.</p>
                    </div>
                    <div class="card">
                        <span class="badge badge-red">📢 Thông báo</span>
                        <h3>Khai giảng lớp tiếng Hàn cấp tốc</h3>
                        <p>Khóa học 3 tháng giao tiếp thành thạo, khai giảng 01/07/2026.</p>
                    </div>
                    <div class="card">
                        <span class="badge">🌟 Thành tích</span>
                        <h3>Học viên đạt IELTS 8.0</h3>
                        <p>Chúc mừng bạn Trần Minh Anh đạt thành tích xuất sắc trong kỳ thi IELTS.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderDuHoc() {
    let countryTabs = '';
    const countries = ['japan', 'korea', 'taiwan', 'china', 'usa', 'canada', 'australia', 'germany'];
    const labels = {
        japan: '🇯🇵 Nhật Bản',
        korea: '🇰🇷 Hàn Quốc',
        taiwan: '🇹🇼 Đài Loan',
        china: '🇨🇳 Trung Quốc',
        usa: '🇺🇸 Mỹ',
        canada: '🇨🇦 Canada',
        australia: '🇦🇺 Úc',
        germany: '🇩🇪 Đức'
    };
    countries.forEach(c => {
        countryTabs += `<button class="btn-ripple btn-outline" data-country="${c}">${labels[c]}</button>`;
    });

    return `
        <section class="page" id="page-du-hoc">
            <div class="container">
                <h2 class="page-title">Chương trình Du học</h2>
                <p class="page-sub">Chọn quốc gia để xem chi tiết</p>
                <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:28px;" id="countryTabs">
                    ${countryTabs}
                </div>
                <div id="countryDetail" class="glass" style="padding:28px;">
                    <div id="countryLoader" style="display:flex;justify-content:center;align-items:center;min-height:200px;flex-direction:column;gap:16px;">
                        <div class="loader-ring" style="width:40px;height:40px;border-width:3px;"></div>
                        <p style="color:#888;">Đang tải dữ liệu...</p>
                    </div>
                    <div id="countryContent" style="display:none;"></div>
                </div>
            </div>
        </section>
    `;
}

function renderLienHe() {
    return `
        <section class="page" id="page-lien-he">
            <div class="container">
                <h2 class="page-title">Liên hệ</h2>
                <p class="page-sub">G.E.C sẵn sàng hỗ trợ bạn 24/7</p>
                <div class="card-grid">
                    <div class="card">
                        <h3>📍 Địa chỉ</h3>
                        <p>Số 1, đường Lý Thái Tổ, phường Vũ Ninh, TP. Bắc Ninh</p>
                    </div>
                    <div class="card">
                        <h3>📞 Hotline</h3>
                        <p>1900 636 636<br />0987 654 321</p>
                    </div>
                    <div class="card">
                        <h3>✉️ Email</h3>
                        <p>contact@gec.edu.vn</p>
                    </div>
                    <div class="card">
                        <h3>📱 Mạng xã hội</h3>
                        <div style="display:flex;gap:16px;font-size:24px;margin-top:8px;">
                            <a href="#" title="Zalo">💬</a>
                            <a href="#" title="Messenger">✉️</a>
                            <a href="#" title="Telegram">📨</a>
                            <a href="#" title="Facebook">👍</a>
                            <a href="#" title="TikTok">🎵</a>
                        </div>
                    </div>
                </div>
                <div class="glass" style="padding:24px;margin-top:20px;text-align:center;">
                    <p>💬 <strong>Telegram:</strong> @gec_edu_bot | <strong>Zalo:</strong> 0987654321</p>
                </div>
            </div>
        </section>
    `;
}

// ============================================================
// INIT PAGES
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    // Render all pages
    app.innerHTML = renderHome() + renderGioiThieu() + renderKhoaHoc() + renderTuyenSinh() + renderTinTuc() + renderDuHoc() + renderLienHe();

    // Init route
    const initRoute = window.location.pathname.slice(1) || '/';
    const validRoutes = ['/', '/gioi-thieu', '/khoa-hoc', '/tuyen-sinh', '/tin-tuc', '/du-hoc', '/lien-he', '/admin'];
    const targetRoute = validRoutes.includes('/' + initRoute) ? '/' + initRoute : '/';
    navigate(targetRoute);

    // Country tabs
    document.querySelectorAll('#countryTabs button').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#countryTabs button').forEach(b => b.style.borderColor = 'var(--brown)');
            this.style.borderColor = 'var(--red)';
            this.style.background = 'rgba(229,57,53,0.05)';
            loadCountry(this.dataset.country);
        });
    });

    // Load default country
    loadCountry('japan');

    // Enroll form
    document.getElementById('enrollForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const country = document.getElementById('countryInterest').value;
        const course = document.getElementById('courseInterest').value;
        const message = document.getElementById('message').value.trim();

        if (!name || !phone) {
            document.getElementById('formStatus').innerHTML = '⚠️ Vui lòng điền Họ tên và Số điện thoại.';
            return;
        }

        const status = document.getElementById('formStatus');
        status.innerHTML = '⏳ Đang gửi thông tin...';

        setTimeout(() => {
            const msg = `📩 ĐĂNG KÝ TƯ VẤN G.E.C\n👤 Họ tên: ${name}\n📞 SĐT: ${phone}\n✉️ Email: ${email || 'Không có'}\n🌍 Quốc gia: ${country}\n📚 Khóa học: ${course}\n💬 Nội dung: ${message || 'Không có'}`;
            console.log('📨 Telegram message:', msg);
            status.innerHTML = '✅ Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất. 🎉';
            this.reset();
        }, 800);
    });

    // Hide loader
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 800);
});

// ============================================================
// COUNTRY LOADER
// ============================================================
let currentCountry = 'japan';

function loadCountry(countryKey) {
    currentCountry = countryKey;
    const loader = document.getElementById('countryLoader');
    const content = document.getElementById('countryContent');
    loader.style.display = 'flex';
    content.style.display = 'none';

    setTimeout(() => {
        const data = COUNTRY_DATA[countryKey];
        if (!data) {
            content.innerHTML = '<p style="color:var(--red);">Không tìm thấy dữ liệu cho quốc gia này.</p>';
            loader.style.display = 'none';
            content.style.display = 'block';
            return;
        }
        let html = `
            <h3 style="font-size:28px;display:flex;align-items:center;gap:12px;">${data.banner} ${data.name}</h3>
            <p style="margin:12px 0;font-size:16px;color:#444;">${data.intro}</p>
            <h4 style="margin-top:20px;color:var(--brown);">✅ Lợi ích</h4>
            <ul style="margin:8px 0 16px 20px;">${data.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
            <h4 style="color:var(--brown);">📋 Yêu cầu</h4>
            <ul style="margin:8px 0 16px 20px;">${data.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
            <h4 style="color:var(--brown);">💰 Học phí & Chi phí</h4>
            <ul style="margin:8px 0 16px 20px;">${data.tuition.map(t => `<li>${t}</li>`).join('')}</ul>
            <h4 style="color:var(--brown);">🏫 Trường tiêu biểu</h4>
            <ul style="margin:8px 0 16px 20px;">${data.schools.map(s => `<li>${s}</li>`).join('')}</ul>
            <h4 style="color:var(--brown);">❓ FAQ</h4>
            <ul style="margin:8px 0 16px 20px;">${data.faq.map(f => `<li>${f}</li>`).join('')}</ul>
            <button class="btn-ripple" onclick="navigate('/tuyen-sinh')">📝 Đăng ký tư vấn quốc gia này</button>
        `;
        content.innerHTML = html;
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 400);
}
