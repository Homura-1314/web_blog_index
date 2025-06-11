const articles = {
    "html-css": {
        // --- 以下是卡片显示所必需的属性 ---
        title: "Web世界的基石：HTML & CSS入门",
        excerpt: "了解如何使用HTML构建网页结构，并用CSS为其赋予精美的样式，这是成为Web开发者的第一步。",
        image: "images/bg6.jpg", // 请务必提供一个有效的图片URL
        tags: "#HTML #CSS #Frontend",
        category: "基础",
        author: "三叶hikari",
        date: "2024-07-01",
        
        // --- 这个是文章详情页必需的属性 ---
        content: `<p>在广袤的数字宇宙中，每一个网站都是一个独立的世界...</p><p>这是文章的详细内容，可以很长，包含各种HTML标签。</p>`
    },
    
    "javascript-dom": {
        // --- 请确保这个对象也拥有和上面一样的所有属性 ---
        title: "赋予页面生命：JavaScript与DOM交互",
        excerpt: "学习如何使用JavaScript操作页面元素 (DOM)，响应用户交互，让你的网页“活”起来。",
        image: "images/bg6.jpg",
        tags: "#JavaScript #DOM #Core",
        category: "核心",
        author: "三叶hikari",
        date: "2024-07-05",
        content: `<p>静态的网页虽然美丽，但却缺少互动...</p>`
    },

    "docker-intro": {
        // --- 这个也一样，所有属性都要补全 ---
        title: "docker入门",
        excerpt: "1.docker概述, 1.1 基本介绍 Docker 是一个开源的应用容器引擎，可以轻松地为任何应用创建一个轻量级的、可移植的、自给自足的容器。",
        image: "images/bg4.jpg", // 确保这是一个有效的本地图片路径
        tags: "#Docker #DevOps",
        category: "服务部署",
        author: "花火",
        date: "Jul 28, 2022",
        content: `<h3>Docker是什么？</h3><p>Docker 是一个开源的应用容器引擎...</p>`
    }
    // ... 其他所有文章条目都应如此
};
function createHeroArticleHTML(key, article) {
     return `
        <div class="hero-content-part">
            <div class="tags">${article.tags}</div>
            <h2>${article.title}</h2>
            <p>${article.excerpt}</p>
            <div class="card-meta">
                <img src="images/avatar.png" alt="author">
                <span>${article.author} · ${article.date}</span>
            </div>
        </div>
        <a href="article.html?topic=${key}" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;" aria-label="${article.title}"></a>
    `;
}
function createArticleCardHTML(key, article) {
    if (!article) return '';

    // 如果某个属性不存在，就使用一个默认值，而不是显示'undefined'
    const imageUrl = article.image || 'images/placeholder.png'; // 比如用一张默认图
    const title = article.title || '无标题文章';
    const excerpt = article.excerpt || '暂无描述...';
    const author = article.author || '匿名作者';
    const date = article.date || '';
    const category = (article.category || '未分类').replace('#', '').trim();
    const tags = article.tags || '';

    // ... 返回 HTML 结构 ...
    // (这里的 HTML 结构和你正在使用的保持一致即可)
    return `
        <a href="article.html?topic=${key}" class="article-card" data-category="${category}">
            <div class="card-image-container">
                <img src="${imageUrl}" alt="${title}">
            </div>
            <div class="card-content">
                <div class="card-tags-container">
                    <span class="primary-tag" data-category="${category}">${category}</span>
                    <span class="secondary-tags">${tags}</span>
                </div>
                <h3>${title}</h3>
                <p class="card-excerpt">${excerpt}</p>
                <div class="card-meta">
                    <img src="images/avatar.png" alt="${author}">
                    <span>${author} · ${date}</span>
                </div>
            </div>
        </a>
    `;
}
export function post_data() {
    const articleKeys = Object.keys(articles);
    if (articleKeys.length === 0) return;

    // --- 获取所有需要填充的容器 ---
    const heroContainer = document.getElementById('hero-article-card');
    const recommendedGrid = document.getElementById('recommended-article-grid');
    const fullGrid = document.getElementById('full-article-grid');
    const filterBar = document.getElementById('filter-bar');

    // --- 修正1：完整地填充所有区域 ---
    if (heroContainer) {
        const heroArticleKey = articleKeys[0];
        const heroArticle = articles[heroArticleKey];
        if (heroArticle) {
            heroContainer.style.backgroundImage = `url('${heroArticle.image}')`;
            heroContainer.innerHTML = createHeroArticleHTML(heroArticleKey, heroArticle);
        }
    }

    if (recommendedGrid) {
        let recommendedHTML = '';
        const recommendedKeys = articleKeys.slice(1, 3);
        recommendedKeys.forEach(key => {
            const article = articles[key];
            if (article) { // <-- 关键检查
                recommendedHTML += createArticleCardHTML(key, article);
            }
        });
        recommendedGrid.innerHTML = recommendedHTML;
    }

    if (fullGrid) {
        let fullHTML = '';
        articleKeys.forEach(key => {
            const article = articles[key];
            if (article) { // <-- 关键检查
                fullHTML += createArticleCardHTML(key, article);
            }
        });
        fullGrid.innerHTML = fullHTML;
    }
    
    // --- 修正2：生成带计数的筛选按钮 (这段逻辑保持不变，但要确保它在函数内) ---
    if(filterBar) {
        const categories = new Set();
        const categoryCounts = {};

        articleKeys.forEach(key => {
            const cat = articles[key].category.replace('#', '').trim();
            if (cat) {
                categories.add(cat);
                categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
            }
        });

        let filterButtonsHTML = `<button class="filter-btn active" data-filter="全部">全部</button>`;
        categories.forEach(cat => {
            const count = categoryCounts[cat] || 0;
            filterButtonsHTML += `
                <button class="filter-btn" data-filter="${cat}">
                    ${cat}
                    <span class="tag-count">${count}</span>
                </button>
            `;
        });
        filterBar.innerHTML = filterButtonsHTML;
    }
}

export function content_logic(){
     const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const navAuthLink = document.getElementById('nav-auth-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // 登录认证逻辑...
    if (navAuthLink) {
        if (loggedIn) {
            navAuthLink.textContent = '退出';
            navAuthLink.href = '#';
            navAuthLink.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('isLoggedIn');
                alert('您已成功退出！');
                window.location.href = 'login.html';
            });
        } else {
            navAuthLink.textContent = '登录';
            navAuthLink.href = 'login.html';
        }
    }
    
    // 页面保护逻辑...
    const protectedPages = ['index.html','about.html', 'article.html'];
    if (protectedPages.includes(currentPage) && !loggedIn) {
        alert('请先登录以访问该页面！');
        window.location.href = 'login.html';
    }

    // 文章详情页渲染逻辑...
    if (currentPage === 'article.html') {
        const articleWrapper = document.querySelector('.article-wrapper');
        if (!articleWrapper) return;
        
        const params = new URLSearchParams(window.location.search);
        const topic = params.get('topic');
        const article = articles[topic];
        
        if (article) {
            document.title = article.title + " | 创想次元";
            articleWrapper.innerHTML = `
                <div class="article-content">
                    <h1>${article.title}</h1>
                    <div class="card-meta" style="justify-content: flex-start; margin-bottom: 2rem; color: var(--text-color-secondary);">
                         <span>By ${article.author} on ${article.date}</span>
                         <span class="tag">${article.category}</span>
                    </div>
                    ${article.content}
                </div>
            `;
            if (typeof Prism !== 'undefined') {
                Prism.highlightAll();
            }
        } else {
            articleWrapper.innerHTML = `<div class="article-content"><h1>文章未找到</h1><p>抱歉，我们没有找到这篇次元知识。尝试返回<a href='index.html'>首页</a>看看吧。</p></div>`;
        }
    }
    
        // 表单处理 ---
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                localStorage.setItem('isLoggedIn', 'true');
                alert('登录成功！');
                window.location.href = 'index.html';
            });
        }
        // (ui)验证账号
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('账号创建成功！请登录。');
                window.location.href = 'login.html';
            });
        }
}