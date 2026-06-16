// ============================================================
// ADMIN LOGIN
// ============================================================
function logoutAdmin() {
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('adminLoginError').textContent = '';
    document.getElementById('adminUser').value = 'admin';
    document.getElementById('adminPass').value = '123456';
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const user = document.getElementById('adminUser').value.trim();
            const pass = document.getElementById('adminPass').value.trim();
            if (user === 'admin' && pass === '123456') {
                document.getElementById('adminLogin').style.display = 'none';
                document.getElementById('adminPanel').style.display = 'block';
                document.getElementById('adminLoginError').textContent = '';
            } else {
                document.getElementById('adminLoginError').textContent = '❌ Sai tài khoản hoặc mật khẩu.';
            }
        });
    }

    // Admin tabs
    document.querySelectorAll('.admin-tabs button').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.admin-tabs button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const tab = this.dataset.admin;
            document.getElementById('adminContent').style.display = tab === 'content' ? 'block' : 'none';
            document.getElementById('adminCountries').style.display = tab === 'countries' ? 'block' : 'none';
            document.getElementById('adminSettings').style.display = tab === 'settings' ? 'block' : 'none';
        });
    });
});
