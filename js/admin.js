/* Admin Panel - FC Inclusif */

const ADMIN_PASSWORD = 'admin2026'; // À changer pour un vrai mot de passe

document.addEventListener('DOMContentLoaded', function() {
    // Check if user is on login page
    if (document.getElementById('loginForm')) {
        handleLogin();
    }

    // Check if user is on admin page
    if (document.getElementById('matchForm')) {
        checkAdminAccess();
        handleAdminFunctions();
    }

    // Handle logout
    const logoutButtons = document.querySelectorAll('#logoutBtn, #logoutBtnMobile');
    logoutButtons.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                logout();
            });
        }
    });
});

// Login Handler
function handleLogin() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('password').value;

        if (password === ADMIN_PASSWORD) {
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('adminLoginTime', new Date().getTime());
            window.location.href = 'admin.html';
        } else {
            loginError.style.display = 'block';
            loginError.textContent = '❌ Mot de passe incorrect';
            loginError.style.color = '#d32f2f';
            document.getElementById('password').value = '';
        }
    });
}

// Check Admin Access
function checkAdminAccess() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    const loginTime = localStorage.getItem('adminLoginTime');
    const sessionTimeout = 2 * 60 * 60 * 1000; // 2 hours

    if (!isLoggedIn || !loginTime) {
        window.location.href = 'login.html';
        return;
    }

    // Check if session expired
    if (new Date().getTime() - parseInt(loginTime) > sessionTimeout) {
        logout();
        return;
    }

    loadAdminData();
}

// Logout
function logout() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminLoginTime');
    window.location.href = 'login.html';
}

// Admin Functions
function handleAdminFunctions() {
    // Tab switching
    const tabs = document.querySelectorAll('.admin-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });

    // Match Form
    const matchForm = document.getElementById('matchForm');
    if (matchForm) {
        matchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addMatch();
        });
    }

    // News Form
    const newsForm = document.getElementById('newsForm');
    if (newsForm) {
        newsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addNews();
        });
    }
}

// Switch Tabs
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.admin-tab').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabName + '-tab').classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Add Match
function addMatch() {
    const matchDate = document.getElementById('matchDate').value;
    const matchTime = document.getElementById('matchTime').value;
    const matchTeam = document.getElementById('matchTeam').value;
    const matchLocation = document.getElementById('matchLocation').value;
    const matchType = document.getElementById('matchType').value;
    const matchStatus = document.getElementById('matchStatus').value;
    const matchResult = document.getElementById('matchResult').value;

    const match = {
        id: new Date().getTime(),
        date: matchDate,
        time: matchTime,
        teams: matchTeam,
        location: matchLocation,
        type: matchType,
        status: matchStatus,
        result: matchResult
    };

    let matches = JSON.parse(localStorage.getItem('fcMatches')) || [];
    matches.push(match);
    localStorage.setItem('fcMatches', JSON.stringify(matches));

    // Reset form
    document.getElementById('matchForm').reset();
    alert('✅ Match ajouté avec succès !');
    displayMatches();
}

// Add News
function addNews() {
    const newsDate = document.getElementById('newsDate').value;
    const newsTitle = document.getElementById('newsTitle').value;
    const newsContent = document.getElementById('newsContent').value;

    const news = {
        id: new Date().getTime(),
        date: newsDate,
        title: newsTitle,
        content: newsContent
    };

    let newsList = JSON.parse(localStorage.getItem('fcNews')) || [];
    newsList.push(news);
    localStorage.setItem('fcNews', JSON.stringify(newsList));

    // Reset form
    document.getElementById('newsForm').reset();
    alert('✅ Actualité ajoutée avec succès !');
    displayNews();
}

// Display Matches
function displayMatches() {
    const container = document.getElementById('matchesContainer');
    if (!container) return;

    const matches = JSON.parse(localStorage.getItem('fcMatches')) || [];
    
    if (matches.length === 0) {
        container.innerHTML = '<p style="color: var(--text-light);">Aucun match enregistré</p>';
        return;
    }

    container.innerHTML = matches.map(match => `
        <div class="admin-item">
            <div class="admin-item-content">
                <h5>${match.teams}</h5>
                <p>📅 ${new Date(match.date).toLocaleDateString('fr-FR')} à ${match.time}</p>
                <p>📍 ${match.location}</p>
                <p>Type: ${match.type} | Statut: ${match.status}</p>
                ${match.result ? `<p>Résultat: ${match.result}</p>` : ''}
            </div>
            <div class="admin-item-actions">
                <button class="btn-delete" onclick="deleteMatch(${match.id})">🗑️ Supprimer</button>
            </div>
        </div>
    `).join('');
}

// Display News
function displayNews() {
    const container = document.getElementById('newsContainer');
    if (!container) return;

    const newsList = JSON.parse(localStorage.getItem('fcNews')) || [];
    
    if (newsList.length === 0) {
        container.innerHTML = '<p style="color: var(--text-light);">Aucune actualité enregistrée</p>';
        return;
    }

    container.innerHTML = newsList.map(news => `
        <div class="admin-item">
            <div class="admin-item-content">
                <h5>${news.title}</h5>
                <p>📅 ${new Date(news.date).toLocaleDateString('fr-FR')}</p>
                <p>${news.content.substring(0, 100)}...</p>
            </div>
            <div class="admin-item-actions">
                <button class="btn-delete" onclick="deleteNews(${news.id})">🗑️ Supprimer</button>
            </div>
        </div>
    `).join('');
}

// Delete Match
function deleteMatch(id) {
    if (confirm('⚠️ Êtes-vous sûr de vouloir supprimer ce match ?')) {
        let matches = JSON.parse(localStorage.getItem('fcMatches')) || [];
        matches = matches.filter(m => m.id !== id);
        localStorage.setItem('fcMatches', JSON.stringify(matches));
        displayMatches();
    }
}

// Delete News
function deleteNews(id) {
    if (confirm('⚠️ Êtes-vous sûr de vouloir supprimer cette actualité ?')) {
        let newsList = JSON.parse(localStorage.getItem('fcNews')) || [];
        newsList = newsList.filter(n => n.id !== id);
        localStorage.setItem('fcNews', JSON.stringify(newsList));
        displayNews();
    }
}

// Load Admin Data
function loadAdminData() {
    displayMatches();
    displayNews();
}
