// DOM Elements
const urlForm = document.getElementById('urlForm');
const urlInput = document.getElementById('urlInput');
const errorMessage = document.getElementById('errorMessage');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const historySidebar = document.getElementById('historySidebar');
const historyList = document.getElementById('historyList');
const clearHistory = document.getElementById('clearHistory');
const closeHistory = document.getElementById('closeHistory');

// Constants
const LOCAL_STORAGE_KEY = 'kildekritisk_history';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadHistory();
});

// URL Form Handling
urlForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = urlInput.value.trim();

    if (!isValidUrl(url)) {
        showError('Indtast venligst en gyldig URL');
        return;
    }

    try {
        // Simulate URL examination (in a real app, this would be an API call)
        await examineUrl(url);
        
        // Save to history
        saveToHistory(url);
        
        // Clear input and error message
        urlInput.value = '';
        hideError();
        
    } catch (error) {
        showError('Der opstod en fejl under undersøgelsen af URL\'en');
        console.error('Error examining URL:', error);
    }
});

// URL Validation
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Error Handling
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    errorMessage.classList.add('error-shake');
    
    // Remove animation class after it completes
    setTimeout(() => {
        errorMessage.classList.remove('error-shake');
    }, 500);
}

function hideError() {
    errorMessage.classList.add('hidden');
    errorMessage.textContent = '';
}

// URL Examination (Simulation)
async function examineUrl(url) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, this would make an actual API call
    console.log('Examining URL:', url);
    
    // For demo purposes, show a simple alert
    alert('URL undersøgelse gennemført!\n\nI en rigtig implementation ville dette vise detaljerede resultater af kildeanalysen.');
}

// History Management
function loadHistory() {
    const history = getHistoryFromStorage();
    renderHistory(history);
}

function saveToHistory(url) {
    const history = getHistoryFromStorage();
    const timestamp = new Date().toISOString();
    
    // Add new entry at the beginning
    history.unshift({ url, timestamp });
    
    // Keep only the last 10 entries
    if (history.length > 10) {
        history.pop();
    }
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(history));
    renderHistory(history);
}

function getHistoryFromStorage() {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function renderHistory(history) {
    historyList.innerHTML = '';
    
    history.forEach(entry => {
        const div = document.createElement('div');
        div.className = 'p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer';
        
        const url = document.createElement('div');
        url.className = 'text-sm font-medium text-gray-800 truncate';
        url.textContent = entry.url;
        
        const time = document.createElement('div');
        time.className = 'text-xs text-gray-500 mt-1';
        time.textContent = new Date(entry.timestamp).toLocaleString('da-DK');
        
        div.appendChild(url);
        div.appendChild(time);
        
        // Click to re-examine
        div.addEventListener('click', () => {
            urlInput.value = entry.url;
            urlInput.focus();
        });
        
        historyList.appendChild(div);
    });
}

// Clear History
clearHistory.addEventListener('click', () => {
    if (confirm('Er du sikker på, at du vil rydde historikken?')) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        renderHistory([]);
    }
});

// Login Modal Management
loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
    loginModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', closeLoginModal);

loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeLoginModal();
    }
});

function closeLoginModal() {
    loginModal.classList.add('hidden');
    loginModal.classList.remove('flex');
    document.body.style.overflow = '';
}

// Login Form Handling
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Simulate login (in a real app, this would be an API call)
        await simulateLogin(email, password);
        closeLoginModal();
        alert('Du er nu logget ind!');
    } catch (error) {
        alert('Login fejlede: ' + error.message);
    }
});

async function simulateLogin(email, password) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple validation for demo
    if (!email.includes('@')) {
        throw new Error('Ugyldig email');
    }
    if (password.length < 6) {
        throw new Error('Adgangskoden skal være mindst 6 tegn');
    }
}

// History Sidebar Toggle
document.addEventListener('keydown', (e) => {
    if (e.key === 'h' && e.ctrlKey) {
        toggleHistory();
    }
});

function toggleHistory() {
    historySidebar.classList.toggle('translate-x-full');
}

closeHistory.addEventListener('click', () => {
    historySidebar.classList.add('translate-x-full');
});

// Keyboard Accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!loginModal.classList.contains('hidden')) {
            closeLoginModal();
        }
        if (!historySidebar.classList.contains('translate-x-full')) {
            historySidebar.classList.add('translate-x-full');
        }
    }
});
