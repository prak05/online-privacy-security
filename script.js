const apiKey = 'your_watson_api_key';
const serviceUrl = 'your_watson_service_url';

// Function to analyze text
function analyzeText() {
    const text = document.getElementById('data-text').value;
    fetch(`${serviceUrl}/v1/analyze?version=2021-08-01`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: text,
            features: {
                keywords: {
                    sentiment: true,
                    limit: 2
                }
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('data-result').textContent = JSON.stringify(data, null, 2);
    });
}

// Function to detect phishing
function detectPhishing() {
    const emailContent = document.getElementById('email-content').value;
    fetch(`${serviceUrl}/v1/analyze?version=2021-08-01`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: emailContent,
            features: {
                categories: {
                    limit: 3
                }
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('phishing-result').textContent = JSON.stringify(data, null, 2);
    });
}

// Function to scan file for malware (mock function, actual scanning requires backend integration)
function scanFile() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (file) {
        document.getElementById('malware-result').textContent = 'Scanning... (mock result: file is safe)';
    } else {
        document.getElementById('malware-result').textContent = 'No file selected.';
    }
}

// Function to generate strong password
function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('password-result').textContent = `Generated password: ${password}`;
}

// Function to block tracking (mock function, actual blocking requires backend integration)
function blockTracking() {
    const url = document.getElementById('tracking-url').value;
    if (url) {
        document.getElementById('tracking-result').textContent = `Blocking tracking for: ${url} (mock result)`;
    } else {
        document.getElementById('tracking-result').textContent = 'No URL entered.';
    }
}

