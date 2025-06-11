// 3D卡片倾斜效果
export function initTiltEffect() {
    const cards = document.querySelectorAll('.tilt-effect');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = (y / rect.height) * -10;
            const rotateY = (x / rect.width) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// 打字机效果
export function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const text = "欢迎来到我的知识空间~";
        let index = 0;
        function type() {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 120);
            }
        }
        type();
    }
}

// 主题切换
export function initThemeSwitcher() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;
    
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            body.classList.remove('dark-theme');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
        localStorage.setItem('theme', theme);
    }
    
    themeToggleBtn.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
        setTheme(newTheme);
    });

    const savedTheme = localStorage.getItem('theme') || 'dark'; // 默认暗色
    setTheme(savedTheme);
}