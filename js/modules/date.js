import { showCustomAlert } from './ui.js'
const articles = {
  "project-intro": {
    title: "关于本站：三叶次元",
    excerpt:
      "一个基于原生HTML/CSS/JS构建的个人博客空间。旨在探索现代前端设计的可能性，并记录学习过程中的思考与沉淀。欢迎你的到来！",
    image: "images/bg6.jpg",
    tags: "#JavaScript #HTML #CSS #Web",
    category: "博客",
    author: "三叶hikari",
    date: "2025-6-12",
    content: `
                <h2>欢迎来到“三叶次元”！</h2>
                <p>你好！正如你所见，这是一个完全使用原生三剑客——HTML, CSS, 和 JavaScript 从零开始搭建的个人项目。它没有依赖任何主流框架,如React、Vue、srpingboot等，目的是为了回归本源，深入理解Web开发的底层逻辑。</p>
                <h3>项目特点：</h3>
                <ul>
                    <li><strong>纯原生实现：</strong> 锻炼核心的DOM操作、事件处理和模块化编程能力。</li>
                    <li><strong>响应式设计：</strong> 适配桌面和移动设备，保证在不同屏幕尺寸下都有良好的阅读体验。</li>
                    <li><strong>主题切换：</strong> 支持亮色与暗色模式一键切换，并将用户偏好保存在本地。</li>
                    <li><strong>动态交互：</strong> 包含了卡片悬停、背景轮播、打字机等多种CSS与JS实现的动效。</li>
                </ul>
                <p>创建这个网站不仅是为了展示技术，更是为了拥有一个完全属于自己的、可以自由挥洒创意的空间。希望这里的分享能给你带来一些启发。如果你对源码感兴趣，可以点击右上角的GitHub图标查看。Ciallo～(∠・ω< )⌒☆</p>
            `,
  },
  "javascript-dom": {
    title: "赋予页面生命：JavaScript与DOM交互",
    excerpt:
      "学习如何使用JavaScript操作页面元素 (DOM)，响应用户交互，让你的网页“活”起来。",
    image: "images/bg6.jpg",
    tags: "#JavaScript #DOM #Core",
    category: "核心",
    author: "三叶hikari",
    date: "2025-6-12",
    content: `<p>静态的网页虽然美丽，但却缺少互动...</p>`,
  },

  "docker-intro": {
    title: "docker入门",
    excerpt:
      "1.docker概述, 1.1 基本介绍 Docker 是一个开源的应用容器引擎，可以轻松地为任何应用创建一个轻量级的、可移植的、自给自足的容器。",
    image: "images/bg4.jpg",
    tags: "#Docker #DevOps",
    category: "服务部署",
    author: "三叶hikari",
    date: "2025-6-12",
    content: `<h3>Docker是什么？</h3><p>Docker 是一个开源的应用容器引擎...</p>`,
  },

};
function createHeroArticleHTML(key, article) {
  return `
        <div class="hero-card-bg" style="background-image: url('${article.image}');"></div>
        <div class="hero-content-part">
            <div class="tags">${article.tags}</div>
            <h2>${article.title}</h2>
            <p>${article.excerpt}</p>
            <div class="card-meta">
                <img src="images/avatar.png" alt="author">
                <span>${article.author} · ${article.date}</span>
            </div>
        </div>
        <a href="article.html?topic=${key}" class="full-card-link" aria-label="阅读文章：${article.title}"></a>
    `;
}
function createArticleCardHTML(key, article) {
    if (!article) return '';
    const imageUrl = article.image || "images/bg4.jpg"; //用一张默认图
    const title = article.title || '无标题文章';
    const excerpt = article.excerpt || '暂无描述...';
    const author = article.author || '匿名作者';
    const date = article.date || '';
    const category = (article.category || '未分类').replace('#', '').trim();
    const tags = article.tags || '';
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

  // --- 1. 获取所有容器 ---
  const heroContainer = document.getElementById("hero-article-card");
  const recommendedGrid = document.getElementById("recommended-article-grid");
  const fullGrid = document.getElementById("full-article-grid");
  const filterBar = document.getElementById("filter-bar");

  if (heroContainer) {
    const heroArticleKey = articleKeys[0];
    const heroArticle = articles[heroArticleKey];
    if (heroArticle) {
      heroContainer.innerHTML = createHeroArticleHTML(
        heroArticleKey,
        heroArticle
      );
    }
  }

  if (recommendedGrid) {
    let recommendedHTML = "";
    const recommendedKeys = articleKeys.slice(1, 3);
    recommendedKeys.forEach((key) => {
      const article = articles[key];
      if (article) {
        recommendedHTML += createArticleCardHTML(key, article);
      }
    });
    recommendedGrid.innerHTML = recommendedHTML;
  }
  if (fullGrid) {
    let fullHTML = "";
    articleKeys.forEach((key) => {
      const article = articles[key];
      if (article) {
        fullHTML += createArticleCardHTML(key, article);
      }
    });
    fullGrid.innerHTML = fullHTML;
  }

  if (filterBar) {
    const categories = new Set();
    const categoryCounts = {};

    articleKeys.forEach((key) => {
      const cat = articles[key].category.replace("#", "").trim();
      if (cat) {
        categories.add(cat);
        categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      }
    });

    let filterButtonsHTML = `<button class="filter-btn active" data-filter="全部">全部</button>`;
    categories.forEach((cat) => {
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
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navAuthLink = document.getElementById("nav-auth-link");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // 登录认证逻辑...
  if (navAuthLink) {
    if (loggedIn) {
      navAuthLink.textContent = "退出";
      navAuthLink.href = "#";
      navAuthLink.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        showCustomAlert("您已成功退出！", "操作成功").then(() => {
          window.location.href = "login.html";
        });
      });
    } else {
      navAuthLink.textContent = "登录";
      navAuthLink.href = "login.html";
    }
  }

  // 页面保护逻辑...
  const protectedPages = ["index.html", "about.html", "article.html"];
  if (protectedPages.includes(currentPage) && !loggedIn) {
    showCustomAlert("请先登录以访问该页面！", "访问受限").then(() => {
      window.location.href = "login.html";
    });
  }

  // 文章详情页渲染逻辑...
  if (currentPage === "article.html") {
    const articleWrapper = document.querySelector(".article-wrapper");
    if (!articleWrapper) return;

    const params = new URLSearchParams(window.location.search);
    const topic = params.get("topic");
    const article = articles[topic];

    if (article) {
      document.title = article.title + " | 三叶次元";
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
      if (typeof Prism !== "undefined") {
        Prism.highlightAll();
      }
    } else {
      articleWrapper.innerHTML = `<div class="article-content"><h1>文章未找到</h1><p>抱歉，我们没有找到这篇次元知识。尝试返回<a href='index.html'>首页</a>看看吧。</p></div>`;
    }
  }
  // --- 表单处理 ---
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      localStorage.setItem("isLoggedIn", "true");
      showCustomAlert(
        "登录成功！欢迎回来，即将带您进入次元空间~",
        "登录成功"
      ).then(() => {
        window.location.href = "index.html";
      });
    });
  }
}