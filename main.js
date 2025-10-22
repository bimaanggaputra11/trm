// Typing Animation Function
function typeText(element, text, speed = 30) {
    return new Promise((resolve) => {
        let index = 0;
        element.textContent = '';
        
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

// ASCII Art
const asciiArt = `
 ████████╗ ██████╗ ██╗  ██╗███████╗███╗   ██╗
 ╚══██╔══╝██╔═══██╗██║ ██╔╝██╔════╝████╗  ██║
    ██║   ██║   ██║█████╔╝ █████╗  ██╔██╗ ██║
    ██║   ██║   ██║██╔═██╗ ██╔══╝  ██║╚██╗██║
    ██║   ╚██████╔╝██║  ██╗███████╗██║ ╚████║
    ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝
`;

const welcomeText = `> The Future of Decentralized Finance
> Click any command below to navigate`;

// Boot Sequence Text
const bootSequenceText = [
    'Initializing system...',
    'Loading modules... [OK]',
    'Starting services... [OK]',
    'Welcome to TOKEN Terminal v1.0'
];

// Command Pages Mapping
const commandPages = {
    '- about -': 'about.html',
    '- features -': 'features.html',
    '- whitepaper -': 'whitepaper.html',
    '- roadmap -': 'roadmap.html',
    '- tokenomics -': 'tokenomics.html',
    '- community -': 'community.html',
    '- staking -': 'staking.html',
    '- exchange -': 'exchange.html',
    '- contact -': 'contact.html',
    '- matrix -': 'matrix.html'
};

// Command List Data
const commands = [
    { name: '- about -', desc: '' },
    { name: '- features -', desc: '' },
    { name: '- whitepaper -', desc: '' },
    { name: '- roadmap -', desc: '' },
    { name: '- tokenomics -', desc: '' },
    { name: '- community -', desc: '' },
    { name: '- staking -', desc: '' },
    { name: '- exchange -', desc: '' },
    { name: '- contact -', desc: '' },
    { name: '- matrix -', desc: '' }
];

// Initialize Terminal
async function initTerminal() {
    // Type boot sequence
    const bootLines = document.querySelectorAll('.boot-line');
    
    for (let i = 0; i < bootLines.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 200));
        await typeText(bootLines[i], bootSequenceText[i], 20);
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const asciiSection = document.getElementById('asciiArt');
    const welcomeSection = document.getElementById('welcomeMessage');
    const commandSection = document.getElementById('commandListSection');
    
    // Display ASCII Art
    const asciiPre = document.createElement('pre');
    asciiPre.className = 'ascii-art';
    asciiSection.appendChild(asciiPre);
    await typeText(asciiPre, asciiArt, 1);
    
    // Display Welcome Message
    await typeText(welcomeSection, welcomeText, 30);
    
    // Display Command List Title
    const titleDiv = document.createElement('div');
    titleDiv.className = 'command-list-title';
    commandSection.appendChild(titleDiv);
    await typeText(titleDiv, 'Available Commands:', 30);
    
    // Display Command List
    const listDiv = document.createElement('div');
    listDiv.className = 'command-list';
    commandSection.appendChild(listDiv);
    
    for (const cmd of commands) {
        await new Promise(resolve => setTimeout(resolve, 150));
        
        const cmdLink = document.createElement('a');
        cmdLink.href = commandPages[cmd.name];
        cmdLink.className = 'command-item';
        cmdLink.innerHTML = `
            <span class="command-name">${cmd.name}</span>
            <span class="command-desc">${cmd.desc}</span>
        `;
        
        listDiv.appendChild(cmdLink);
    }
    
    // Focus on input
    document.getElementById('commandInput').focus();
}

// Navigate to Page
function navigateToPage(command) {
    const cmd = command.toLowerCase().trim();
    if (commandPages[cmd]) {
        window.location.href = commandPages[cmd];
    } else if (cmd === 'help' || cmd === '') {
        // Stay on home page
        return;
    } else {
        alert(`Command not found: '${cmd}'\nAvailable commands: ${Object.keys(commandPages).join(', ')}`);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initTerminal();
    
    const commandInput = document.getElementById('commandInput');
    
    // Execute command on Enter
    commandInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = commandInput.value;
            navigateToPage(command);
        }
    });
    
    // Focus on terminal body click
    document.getElementById('terminalBody').addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
            commandInput.focus();
        }
    });
});