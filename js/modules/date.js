const articles = {
    "html-css": {
        title: "Web世界的基石：HTML & CSS入门",
        content: `<p>在广袤的数字宇宙中，每一个网站都是一个独立的世界...</p><pre><code class="language-html"><!DOCTYPE html>...</code></pre><h3>CSS：样式的魔法</h3><p>如果HTML是骨架...</p><pre><code class="language-css">h1 {\n  color: #0096fa;\n}</code></pre><p>掌握了HTML和CSS，你就获得了创造静态网页世界的基本能力...</p>`,
        excerpt: "了解如何使用HTML构建网页结构，并用CSS为其赋予精美的样式，这是成为Web开发者的第一步。",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
        tags: "HTML/CSS",
        category: "#基础",
        author: "三叶hikari",
        date: "2024-07-01"
    },
    "javascript-dom": {
        title: "赋予页面生命：JavaScript与DOM交互",
        content: `<p>静态的网页虽然美丽，但却缺少互动...</p><h3>什么是DOM？</h3><p>DOM (文档对象模型) 是浏览器为HTML文档创建的一个树形结构模型...</p><pre><code class="language-html"><button id="magicButton">点我施放魔法</button>...</code></pre><pre><code class="language-javascript">const button = document.getElementById('magicButton');...</code></pre><p>当用户点击按钮时，这段JS代码就会找到ID为 "message" 的段落...</p>`,
        excerpt: "学习如何使用JavaScript操作页面元素 (DOM)，响应用户交互，让你的网页“活”起来。",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2670&auto=format&fit=crop",
        tags: "JAVASCRIPT",
        category: "#核心",
        author: "三叶hikari",
        date: "2024-07-05"
    },
    "docker-intro": {
        title: "docker入门",
        excerpt: "1.docker概述, 1.1 基本介绍 Docker 是一个开源的应用容器引擎...",
        image: "images/bg4.jpg",
        tags: "DOCKER",
        category: "# Docker",
        author: "花火",
        date: "Jul 28, 2022",
        content: `<h3>Docker是什么？</h3><p>Docker 是一个开源的应用容器引擎...</p><pre><code class="language-bash">docker pull nginx</code></pre><p>容器是完全使用沙箱机制...</p>`
    },
};
export function post_data() {
    const newArticleListContainer = document.getElementById('new-article-list');
    if (!newArticleListContainer) return;

    let allArticlesHTML = '';
    for (const key in articles) {
        if (Object.hasOwnProperty.call(articles, key)) {
            const article = articles[key];
            allArticlesHTML += `
                <a href="article.html?topic=${key}" class="article-card">
                    <div class="card-image-container">
                        <img src="${article.image}" alt="${article.title}">
                    </div>
                    <div class="card-content">
                        <h3>${article.title}</h3>
                        <p class="card-excerpt">${article.excerpt}</p>
                        <div class="card-meta">
                            <span><i class="fas fa-calendar-alt"></i> ${article.date}</span>
                            <span class="tag">${article.category}</span>
                        </div>
                    </div>
                </a>
            `;
        }
    }
    newArticleListContainer.innerHTML = allArticlesHTML;
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