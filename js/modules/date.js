// 文章数据库
const articles = {
    "docker-intro": {
        title: "docker入门",
        excerpt: "1.docker概述, 1.1 基本介绍 Docker 是一个开源的应用容器引擎，基于 Go 语言并遵从 Apache2.0 协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中...",
        image: "images/bg4.jpg",
        tags: "DOCKER",
        category: "# Docker",
        author: "花火",
        date: "Jul 28, 2022",
        content: `<h3>Docker是什么？</h3><p>Docker 是一个开源的应用容器引擎，基于 Go 语言并遵从Apache2.0协议开源。Docker可以让他们打包他们的应用以及依赖包到一个可移植的容器中，然后发布到任何流行的Linux或Windows操作系统的机器上，也可以实现虚拟化。</p><pre><code class="language-bash"># 拉取一个nginx镜像\ndocker pull nginx</code></pre><p>容器是完全使用沙箱机制，相互之间不会有任何接口。</p>`
    },
    "another-article": {
        title: "JavaScript异步编程",
        excerpt: "从回调地狱到Promise，再到async/await，一文看懂JS异步编程的演进之路，彻底搞定异步逻辑...",
        image: "https://t.mwm.moe/pc/",
        tags: "JAVASCRIPT",
        category: "# 前端核心",
        author: "醉枫",
        date: "Aug 15, 2024",
        content: `<h3>什么是异步？</h3><p>JavaScript是单线程的，但它通过事件循环实现了异步。这意味着耗时的操作（如网络请求）不会阻塞主线程的执行。</p><pre><code class="language-javascript">console.log('Start');\n\nsetTimeout(() => {\n  console.log('Timeout callback');\n}, 0);\n\nconsole.log('End');\n\n// 输出: Start, End, Timeout callback</code></pre>`
    }
};

// 渲染首页文章列表
export function renderHomeArticles() {
    const container = document.getElementById('new-article-list');
    if (!container) return;

    let html = '';
    for (const key in articles) {
        const article = articles[key];
        html += `
            <a href="article.html?topic=${key}" class="article-card-new">
                <img src="${article.image}" alt="${article.title}" class="card-bg-image">
                <div class="card-content-overlay">
                    <div class="card-tags">${article.tags} <span style="color: #888;">${article.category}</span></div>
                    <h2 class="card-title">${article.title}</h2>
                    <p class="card-excerpt">${article.excerpt}</p>
                    <div class="card-meta">
                        <img src="images/avatar.png" alt="author">
                        <span>${article.author} shared on ${article.date}</span>
                    </div>
                </div>
            </a>
        `;
    }
    container.innerHTML = html;
}

// 渲染文章详情页
export function renderArticleDetail() {
    const container = document.querySelector('.article-wrapper');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const topicId = params.get('topic');
    const article = articles[topicId];
    
    if (article) {
        document.title = `${article.title} | 创想次元`;
        container.innerHTML = `
            <div class="article-content">
                <h1>${article.title}</h1>
                <div class="card-meta" style="justify-content: flex-start; margin-bottom: 2rem;">
                    <img src="images/avatar.png" alt="author" style="width: 28px; height: 28px;">
                    <span>${article.author} shared on ${article.date}</span>
                </div>
                ${article.content}
            </div>
        `;
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    } else {
        container.innerHTML = `<div class="article-content"><h1>文章未找到</h1><p>抱歉，我们没有找到这篇次元知识。尝试返回<a href='index.html'>首页</a>看看吧。</p></div>`;
    }
}

// 登录/注册/页面保护逻辑
export function initAuthSystem() {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const navAuthLink = document.getElementById('nav-auth-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

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

    const protectedPages = ['about.html', 'contact.html', 'article.html'];
    if (protectedPages.includes(currentPage) && !loggedIn) {
        alert('请先登录以访问该页面！');
        window.location.href = 'login.html';
    }
}