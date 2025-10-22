// Typing Animation Function
function typeText(element, text, speed = 1) {
    return new Promise((resolve) => {
        let index = 0;
        element.textContent = '';
        
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                // Auto scroll while typing
                element.scrollIntoView({ behavior: 'smooth', block: 'end' });
            } else {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

// Initialize Page with Typing Animation
async function initPage(content, statsData = null) {
    const pageContent = document.getElementById('pageContent');
    
    // Create and type main content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'typing-text';
    pageContent.appendChild(contentDiv);
    
    await typeText(contentDiv, content, 1);
    
    // Add stats grid if provided
    if (statsData && statsData.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const statsGrid = document.createElement('div');
        statsGrid.className = 'info-grid';
        pageContent.appendChild(statsGrid);
        
        for (const stat of statsData) {
            await new Promise(resolve => setTimeout(resolve, 200));
            
            const statItem = document.createElement('div');
            statItem.className = 'info-item';
            statItem.innerHTML = `
                <div class="info-label">${stat.label}</div>
                <div class="info-value">${stat.value}</div>
            `;
            statsGrid.appendChild(statItem);
        }
    }
}

// Initialize Page with Feature Boxes
async function initPageWithFeatures(content, features = null) {
    const pageContent = document.getElementById('pageContent');
    
    // Create and type main content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'typing-text';
    pageContent.appendChild(contentDiv);
    
    await typeText(contentDiv, content, 1);
    
    // Add feature boxes if provided
    if (features && features.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        for (const feature of features) {
            await new Promise(resolve => setTimeout(resolve, 300));
            
            const featureBox = document.createElement('div');
            featureBox.className = 'feature-box';
            featureBox.innerHTML = `
                <div class="feature-title">${feature.title}</div>
                <div class="feature-desc">${feature.desc}</div>
            `;
            pageContent.appendChild(featureBox);
        }
    }
}

// Initialize Matrix Page
function initMatrixPage() {
    const pageContent = document.getElementById('pageContent');
    
    const introDiv = document.createElement('div');
    introDiv.className = 'typing-text';
    introDiv.textContent = '🟢 Initializing Matrix Effect...\n\nWelcome to the Matrix. Follow the white rabbit 🐰\n\n';
    pageContent.appendChild(introDiv);
    
    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.className = 'matrix-canvas';
    canvas.width = 1000;
    canvas.height = 400;
    pageContent.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Matrix characters
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()TOKEN';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 33);
    
    // Add info text
    setTimeout(() => {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'typing-text';
        infoDiv.style.marginTop = '20px';
        infoDiv.innerHTML = `
<span style="color: #0f0;">Matrix Protocol Active</span>

The Matrix is everywhere. It is all around us.
A digital consciousness flowing through the blockchain.

<span style="color: #00aa00;">System Status: ONLINE ✓</span>
<span style="color: #00aa00;">Nodes Connected: 10,247</span>
<span style="color: #00aa00;">Network Speed: 99.9%</span>
`;
        pageContent.appendChild(infoDiv);
    }, 2000);
}