import { fetchWithTimeout } from './Hitokoto.js'
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
    const cards = document.querySelectorAll('.tilt-effect');

    cards.forEach(card => {
        let ticking = false; // 请求动画帧的节流阀
        let currentX = 0;
        let currentY = 0;

        const updateTransform = () => {
            const rotateX = (currentY / card.offsetHeight) * -10;
            const rotateY = (currentX / card.offsetWidth) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            ticking = false;
        };

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            currentX = e.clientX - rect.left - rect.width / 2;
            currentY = e.clientY - rect.top - rect.height / 2;

            if (!ticking) {
                ticking = true;
                requestAnimationFrame(updateTransform);
            }
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
    const init_music = async () =>{
        try{
            const response = await fetchWithTimeout(metingApiUrl, { timeout:5000
        });
        if (!response.ok){
            throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        if (!data || data.length === 0){
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
        }catch (error){
            console.error('获得歌曲失败',error);
            textEl.style.autoplay = 1;
            if (error.name == 'AbortError'){
                textEl.textContent = '获得歌曲超时了, 稍后再尝试喵>_<'
            }else{
                textEl.textContent = '歌曲加载失败, 稍后再尝试喵T_T'
            }
        }
    }
    init_music();
}
}
export function initArticleFilter() {
    const filterBar = document.getElementById('filter-bar');
    if (!filterBar) return;

    // 事件委托：将事件监听器添加到父元素上，效率更高
    filterBar.addEventListener('click', (e) => {
        // 确保点击的是按钮
        if (e.target.tagName !== 'BUTTON') return;

        const button = e.target;
        
        // 切换按钮的 active 状态
        filterBar.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        const articleCards = document.querySelectorAll('#full-article-grid .article-card');

        // 筛选文章卡片
        articleCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (filterValue === '全部' || filterValue === cardCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}