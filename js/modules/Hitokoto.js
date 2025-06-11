    // 1. 一言(Hitokoto) API
    console.log("✅ Hitokoto.js module has been loaded.");
    export function inithitok_to() {
         console.log("🚀 initHitokoto function is called!");
        const hitokotoContainer = document.querySelector('.hitokoto-container');
    if (hitokotoContainer) {
    const textEl = document.getElementById('hitokoto-text');
    const fromEl = document.getElementById('hitokoto-from');
    const copyContainer = document.getElementById('copy-hitokoto'); 
    const refreshBtn = document.getElementById('refresh-hitokoto');
    let hitokotoInterval; // 用于存放定时器的变量

    const fetchHitokoto = () => {
        textEl.style.opacity = 0.5;
        textEl.textContent = '正在加载一言...';
        fromEl.textContent = '';
        fetch('https://international.v1.hitokoto.cn')
            .then(response => response.json())
            .then(data => {
                textEl.style.opacity = 1;
                textEl.textContent = `“${data.hitokoto}”`;
                fromEl.textContent = `—— ${data.from_who || ''}《${data.from}》`;
            })
            .catch(error => {
                console.error('获取一言失败:', error);
                textEl.style.opacity = 1;
                textEl.textContent = '一言加载失败，请稍后再试 T_T';
            });
    };
    if (copyContainer) {
        copyContainer.addEventListener('click', () => {
            if (textEl.textContent.includes('加载失败') || copyContainer.classList.contains('copied')) {
                return; // 如果正在显示失败提示或已经复制，则不执行
            }
            navigator.clipboard.writeText(textEl.textContent)
                .then(() => {
                    // 添加 'copied' 类来触发CSS动效
                    copyContainer.classList.add('copied');
                    // 1.5秒后自动恢复原状
                    setTimeout(() => {
                        copyContainer.classList.remove('copied');
                    }, 1500);
                })
                .catch(err => {
                    console.error('复制失败: ', err);
                    alert('复制失败，请检查浏览器权限。'); // 保留一个备用提示
                });
        });
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            fetchHitokoto();
            // 手动刷新后，重置定时器，避免立即又刷新一次
            clearInterval(hitokotoInterval);
            startHitokotoInterval();
        });
    }

    // 定时器逻辑
     function startHitokotoInterval() {
        hitokotoInterval = setInterval(fetchHitokoto, 25000); // 每25秒自动刷新
    }

    // 页面加载时执行
    fetchHitokoto(); // 立即获取第一条
    startHitokotoInterval(); // 启动定时器
    }
    }