    // 1. 一言(Hitokoto) API
    // 超时判断函数 async -> 异步编程
    export async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options; // 默认8秒超时
    
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
}

export function inithitok_to() {
    const hitokotoContainer = document.querySelector('.hitokoto-container');
    if (!hitokotoContainer) return;

    const textEl = document.getElementById('hitokoto');
    const fromEl = document.getElementById("hitokoto_from");
    const refreshBtn = document.getElementById('refresh-hitokoto');
    let hitokotoInterval;
    const fetchHitokoto = async () => {
        textEl.style.opacity = 0.5;
        textEl.textContent = '正在加载一言...';
        fromEl.textContent = '';
        try {
            const response = await fetchWithTimeout('https://international.v1.hitokoto.cn', { timeout: 5000 });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            textEl.style.opacity = 1;
            textEl.textContent = `“${data.hitokoto}”`;
            fromEl.textContent = `—— ${data.from_who || ''}《${data.from}》`;
        } catch (error) {
            console.error('获取一言失败:', error);
            textEl.style.opacity = 1;
            if (error.name === 'AbortError') {
                textEl.textContent = '一言加载超时了，请稍后再试 >_<';
            } else {
                textEl.textContent = '一言加载失败，请稍后再试 T_T';
            }
        }
        
    };
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            fetchHitokoto();
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