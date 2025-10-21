// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const commandInput = document.getElementById('commandInput');
    const featureItems = document.querySelectorAll('.feature-item');
    
    // Scroll ke atas saat load
    setTimeout(() => {
        const terminalBody = document.querySelector('.terminal-body');
        if (terminalBody) {
            terminalBody.scrollTop = 0;
        }
        window.scrollTo(0, 0);
    }, 100);
    
    // Fokus otomatis ke input command
    commandInput.focus();
    
    // Terminal Commands
    const commands = {
        help: () => {
            return `
<span style="color: #00ff00;">Available Commands:</span>
  help          - Menampilkan daftar perintah
  about         - Informasi tentang TOKEN
  features      - Daftar fitur
  clear         - Membersihkan terminal
  whitepaper    - Membuka whitepaper
  roadmap       - Melihat roadmap
  tokenomics    - Detail tokenomics
  community     - Link komunitas
  staking       - Info staking
  exchange      - Daftar exchange
  contact       - Informasi kontak
  matrix        - Easter egg ;)
            `;
        },
        about: () => {
            return `
<span style="color: #0f0;">TOKEN - The Future of DeFi</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Supply: 1,000,000,000 TOKEN
Network: Ethereum (ERC-20)
Status: ACTIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOKEN adalah cryptocurrency yang didesain untuk
masa depan keuangan terdesentralisasi.
            `;
        },
        features: () => {
            return `
<span style="color: #0f0;">Features:</span>
  [1] Whitepaper - Dokumentasi teknis
  [2] Roadmap - Timeline pengembangan
  [3] Tokenomics - Ekonomi token
  [4] Community - Social media links
  [5] Staking - Stake & earn rewards
  [6] Exchange - Trading platforms
            `;
        },
        clear: () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
            return '<span style="color: #00aa00;">Terminal cleared...</span>';
        },
        whitepaper: () => {
            return `
<span style="color: #0f0;">📄 Whitepaper</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Membuka whitepaper TOKEN...
Dokumen ini berisi detail teknis lengkap
tentang arsitektur dan teknologi kami.

<span style="color: #00aa00;">[LINK] https://token.example/whitepaper.pdf</span>
            `;
        },
        roadmap: () => {
            return `
<span style="color: #0f0;">🗺️ Roadmap</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Q1 2025: [✓] Token Launch
Q2 2025: [⏳] Exchange Listings
Q3 2025: [  ] Staking Platform
Q4 2025: [  ] Mobile App Launch
Q1 2026: [  ] DeFi Integration
            `;
        },
        tokenomics: () => {
            return `
<span style="color: #0f0;">💰 Tokenomics</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Supply: 1,000,000,000 TOKEN

Distribution:
  40% - Public Sale
  20% - Team & Advisors (vested)
  15% - Ecosystem Development
  15% - Marketing & Partnerships
  10% - Liquidity Pool
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `;
        },
        community: () => {
            return `
<span style="color: #0f0;">👥 Join Our Community</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Twitter: @TokenOfficial
Telegram: t.me/TokenOfficial
Discord: discord.gg/token
Reddit: r/TokenOfficial
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `;
        },
        staking: () => {
            return `
<span style="color: #0f0;">🔒 Staking Program</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Stake TOKEN dan dapatkan rewards!

APY: 12-25% (tergantung periode)
Min Stake: 1,000 TOKEN
Lock Period: 30/90/180 hari

<span style="color: #00aa00;">Status: Coming Soon Q3 2025</span>
            `;
        },
        exchange: () => {
            return `
<span style="color: #0f0;">🔄 Available Exchanges</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[1] Binance
[2] Coinbase
[3] Uniswap
[4] PancakeSwap

<span style="color: #00aa00;">Trade TOKEN now!</span>
            `;
        },
        contact: () => {
            return `
<span style="color: #0f0;">📧 Contact Information</span>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Email: info@token.example
Website: https://token.example
Support: support@token.example
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `;
        },
        matrix: () => {
            createMatrixEffect();
            return '<span style="color: #0f0;">Entering the Matrix...</span>';
        }
    };
    
    // Handle command input
    commandInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim().toLowerCase();
            executeCommand(command);
            this.value = '';
        }
    });
    
    // Execute command
    function executeCommand(command) {
        const outputArea = document.createElement('div');
        outputArea.style.marginTop = '20px';
        outputArea.style.marginBottom = '20px';
        
        // Display command
        const commandLine = document.createElement('div');
        commandLine.innerHTML = `<span style="color: #00ff00;">user@terminal:~$</span> <span style="color: #fff;">${command}</span>`;
        outputArea.appendChild(commandLine);
        
        // Display output
        const outputLine = document.createElement('div');
        outputLine.style.marginTop = '10px';
        
        if (commands[command]) {
            outputLine.innerHTML = commands[command]();
        } else if (command === '') {
            return;
        } else {
            outputLine.innerHTML = `<span style="color: #ff5555;">Command not found: ${command}</span><br><span style="color: #00aa00;">Type 'help' to see available commands.</span>`;
        }
        
        outputArea.appendChild(outputLine);
        
        // Insert before command input
        const commandLineDiv = document.querySelector('.command-line');
        commandLineDiv.parentNode.insertBefore(outputArea, commandLineDiv);
        
        // Scroll to bottom
        setTimeout(() => {
            commandLineDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 100);
    }
    
    // Feature items click handler
    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            const feature = this.getAttribute('data-feature');
            
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
            
            // Execute corresponding command
            if (commands[feature]) {
                commandInput.value = feature;
                const event = new KeyboardEvent('keypress', { key: 'Enter' });
                commandInput.dispatchEvent(event);
            }
        });
        
        // Hover sound effect (visual)
        item.addEventListener('mouseenter', function() {
            const cmd = this.querySelector('.feature-cmd');
            cmd.style.opacity = '1';
            cmd.style.color = '#0f0';
        });
        
        item.addEventListener('mouseleave', function() {
            const cmd = this.querySelector('.feature-cmd');
            cmd.style.opacity = '0.7';
            cmd.style.color = '#00ff00';
        });
    });
    
    // Matrix effect easter egg
    function createMatrixEffect() {
        const terminalBody = document.querySelector('.terminal-body');
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '9999';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);
        
        let frameCount = 0;
        const maxFrames = 200;
        
        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0f0';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            
            frameCount++;
            if (frameCount < maxFrames) {
                requestAnimationFrame(draw);
            } else {
                document.body.removeChild(canvas);
            }
        }
        
        draw();
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl + L to clear
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            executeCommand('clear');
        }
        
        // Always focus on input when typing
        if (e.target !== commandInput && !e.ctrlKey && !e.altKey && !e.metaKey) {
            commandInput.focus();
        }
    });
    
    // Click anywhere to focus input
    document.addEventListener('click', function(e) {
        if (e.target !== commandInput) {
            commandInput.focus();
        }
    });
    
    // ASCII Art animation on load
    const asciiArt = document.querySelector('.ascii-art');
    if (asciiArt) {
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.05;
            asciiArt.style.opacity = opacity;
            if (opacity >= 1) clearInterval(fadeIn);
        }, 50);
    }
    
    // Welcome message
    setTimeout(() => {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.style.color = '#00aa00';
        welcomeMsg.style.marginBottom = '20px';
        welcomeMsg.innerHTML = `
<span style="color: #0f0;">╔═══════════════════════════════════════╗</span>
<span style="color: #0f0;">║</span>  Welcome to TOKEN Terminal v1.0      <span style="color: #0f0;">║</span>
<span style="color: #0f0;">║</span>  Type 'help' for available commands   <span style="color: #0f0;">║</span>
<span style="color: #0f0;">╚═══════════════════════════════════════╝</span>
        `;
        
        const commandLineDiv = document.querySelector('.command-line');
        commandLineDiv.parentNode.insertBefore(welcomeMsg, commandLineDiv);
    }, 2500);
    
    // Typing effect for about section
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        let i = 0;
        
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                typingText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 30);
    }
    
    // Random stat updates animation
    function animateStats() {
        const statValues = document.querySelectorAll('.stat-value:not(.status-active)');
        statValues.forEach(stat => {
            const originalText = stat.textContent;
            let count = 0;
            const interval = setInterval(() => {
                if (count < 20) {
                    stat.textContent = Math.random().toString(36).substring(7).toUpperCase();
                    count++;
                } else {
                    stat.textContent = originalText;
                    clearInterval(interval);
                }
            }, 50);
        });
    }
    
    // Run animation on page load
    setTimeout(animateStats, 3000);
    
    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
        
        if (konamiCode.join('').includes(konamiSequence.join(''))) {
            executeCommand('matrix');
            konamiCode = [];
        }
    });
    
    // Parallax effect on scroll
    const terminalBody = document.querySelector('.terminal-body');
    terminalBody.addEventListener('scroll', function() {
        const scrolled = this.scrollTop;
        const asciiArt = document.querySelector('.ascii-art');
        if (asciiArt) {
            asciiArt.style.transform = `translateY(${scrolled * 0}px)`;
        }
    });
    
    // Random glitch effect
    function randomGlitch() {
        const elements = document.querySelectorAll('.section-title, .feature-title');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        if (randomElement) {
            randomElement.style.animation = 'glitch 0.3s';
            setTimeout(() => {
                randomElement.style.animation = '';
            }, 300);
        }
    }
    
    // Trigger random glitch every 10-20 seconds
    setInterval(randomGlitch, Math.random() * 10000 + 10000);
    
    // Console easter egg
    console.log('%c╔═══════════════════════════════════════╗', 'color: #00ff00; font-family: monospace;');
    console.log('%c║  TOKEN Terminal - Developer Mode     ║', 'color: #00ff00; font-family: monospace;');
    console.log('%c║  Halo Developer! 👋                   ║', 'color: #00ff00; font-family: monospace;');
    console.log('%c║  Tertarik bergabung dengan tim?      ║', 'color: #00ff00; font-family: monospace;');
    console.log('%c║  Email: careers@token.example         ║', 'color: #00ff00; font-family: monospace;');
    console.log('%c╚═══════════════════════════════════════╝', 'color: #00ff00; font-family: monospace;');
    
    // Performance: Throttle scroll events
    let scrollTimeout;
    terminalBody.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            // Scroll handling logic here
        }, 100);
    });
    
    // Add scan line effect
    const scanLine = document.createElement('div');
    scanLine.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: rgba(0, 255, 0, 0.5);
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
        animation: scan 4s linear infinite;
        pointer-events: none;
        z-index: 10000;
    `;
    document.body.appendChild(scanLine);
    
    // Add scan animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes scan {
            0% { top: 0; }
            100% { top: 100%; }
        }
    `;
    document.head.appendChild(style);
});