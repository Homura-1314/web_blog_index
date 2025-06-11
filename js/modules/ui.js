export function theme_init(){
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

    // 1. 定义切换函数
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            if(themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            if(themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', 'light');
        }
    }

    // 2. 按钮点击事件
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }

    // 3. 初始化主题：检查localStorage中保存的用户偏好
    const savedTheme = localStorage.getItem('theme') || 'light'; // 默认亮色主题
    setTheme(savedTheme);
}

export function Effect(){
    // 3. 3D倾斜效果
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

    // 4. 打字机效果
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

export function music_player(){
    const aplayerContainer = document.getElementById('aplayer');
    if (aplayerContainer && typeof APlayer !== 'undefined') {

    aplayerContainer.innerHTML = '<p style="text-align:center; color: #fff; padding: 20px;">正在从次元云加载音乐...</p>';
    const metingApiUrl = 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=7747893098'; 
    fetch(metingApiUrl)
        .then(response => response.json())
        .then(data => {
            if (!data || data.length === 0) {
                throw new Error("API返回的播放列表为空");
            }

            aplayerContainer.innerHTML = '';

            const ap = new APlayer({
                container: aplayerContainer,
                fixed: true,
                lrcType: 3,
                audio: data,
                autoplay: false
            });
            // 标记是否已经从sessionStorage恢复过状态
            let hasRestored = false; 
            // 1. 监听'canplay'事件，这是恢复进度的最佳时机
            ap.on('canplay', () => {
                // 如果还没有恢复过状态，就执行恢复操作
                if (!hasRestored) {
                    const lastState = JSON.parse(sessionStorage.getItem('aplayerState'));
                    if (lastState) {
                        // 检查歌曲索引是否匹配，防止恢复到错误的歌曲上
                        if (ap.list.index === lastState.index) {
                            ap.seek(lastState.time);
                            if (lastState.isPlaying) {
                                ap.play();
                            }
                        }
                    }
                    // 标记为已恢复，这样下次触发canplay时就不会再执行了
                    hasRestored = true;
                }
            });

            // 2. 切换歌曲时，需要重置'hasRestored'标记
            ap.on('listswitch', () => {
                hasRestored = false;
            });

            // 3. 保存播放状态的逻辑
            const savePlayerState = () => {
                if(ap.audio.HAVE_CURRENT_DATA) {
                    const state = {
                        index: ap.list.index,
                        time: ap.audio.currentTime,
                        isPlaying: !ap.audio.paused
                    };
                    sessionStorage.setItem('aplayerState', JSON.stringify(state));
                }
            };
            
            // 在关键事件上保存状态
            ap.on('play', savePlayerState);
            ap.on('pause', savePlayerState);
            window.addEventListener('beforeunload', savePlayerState);
            // 定时器可以更频繁地保存进度
            setInterval(savePlayerState, 2500);

        })
        .catch(error => {
            console.error('获取或初始化播放器时发生错误:', error);
            aplayerContainer.innerHTML = '<p style="text-align:center; color: #fff; padding: 20px;">音乐服务加载失败 ( T . T )</p>';
        });
}
}