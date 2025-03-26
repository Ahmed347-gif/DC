document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.querySelector('.home-section');
    
    // نظام العناصر العائمة
    const techIcons = ['fa-code', 'fa-server', 'fa-database', 'fa-microchip', 
                     'fa-network-wired', 'fa-cloud', 'fa-mobile', 'fa-desktop'];
    
    const codeSnippets = [
        "class Innovation { constructor() { this.quality = 'premium'; } }",
        "const solution = new DigitalSolution();",
        "function createFuture() { return success; }",
        "interface TechStrategy { innovation: boolean; scalable: true; }",
        "type FutureTech = AI | Blockchain | IoT;",
        "export const cuttingEdge = {tech: 'Next.js', performance: '90+'}",
        "database.connect('cloud').then(initAI);",
        "AI.analyze(data).predict(marketTrends);"
    ];
    
    // إنشاء أيقونات عائمة
    for (let i = 0; i < 12; i++) {
        const icon = document.createElement('i');
        icon.className = `floating-element fas ${techIcons[Math.floor(Math.random() * techIcons.length)]}`;
        icon.style.fontSize = `${Math.random() * 2 + 1.5}rem`;
        icon.style.top = `${Math.random() * 80 + 10}%`;
        icon.style.left = `${Math.random() * 80 + 10}%`;
        icon.style.animationDelay = `${Math.random() * 5}s`;
        icon.style.animationDuration = `${Math.random() * 20 + 10}s`;
        homeSection.appendChild(icon);
    }
    
    // إنشاء أكواد عائمة
    for (let i = 0; i < 8; i++) {
        const code = document.createElement('div');
        code.className = 'floating-element';
        code.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        code.style.fontFamily = 'Courier New, monospace';
        code.style.fontSize = `${Math.random() * 0.6 + 0.8}rem`;
        code.style.top = `${Math.random() * 80 + 10}%`;
        code.style.left = `${Math.random() * 80 + 10}%`;
        code.style.animationDelay = `${Math.random() * 5}s`;
        code.style.animationDuration = `${Math.random() * 25 + 15}s`;
        homeSection.appendChild(code);
    }
    
    // إنشاء جسيمات متحركة
    const colors = [
        'rgba(67, 97, 238, 0.6)', 
        'rgba(76, 201, 240, 0.6)', 
        'rgba(247, 37, 133, 0.4)'
    ];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.top = `${Math.random() * 100 + 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        homeSection.appendChild(particle);
    }
});
