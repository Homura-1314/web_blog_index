// js/modules/date.js (最终修复版)

import { showCustomAlert } from "./ui.js";
import { articles } from "./data_basa.js";

// --- HTML模板创建函数 (保持不变，链接已修正) ---
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
  if (!article) return "";
  const imageUrl = article.image || "images/bg4.jpg";
  const title = article.title || "无标题文章";
  const excerpt = article.excerpt || "暂无描述...";
  const author = article.author || "匿名作者";
  const date = article.date || "未知日期";
  const category = (article.category || "未分类").replace("#", "").trim();
  const tags = article.tags || "";
  const html_url =
    key === "project-intro" ? "about.html" : `article.html?topic=${key}`;

  return `
        <a href="${html_url}" class="article-card" data-category="${category}">
            <div class="card-image-container"><img src="${imageUrl}" alt="${title}"></div>
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
// --- 首页数据填充函数 (保持不变) ---
export function post_data() {
  const articleKeys = Object.keys(articles);
  if (articleKeys.length === 0) return;
  const heroContainer = document.getElementById("hero-article-card");
  const recommendedGrid = document.getElementById("recommended-article-grid");
  const fullGrid = document.getElementById("full-article-grid");
  const filterBar = document.getElementById("filter-bar");
  if (heroContainer) {
    const heroArticleKey = articleKeys[0];
    heroContainer.innerHTML = createHeroArticleHTML(
      heroArticleKey,
      articles[heroArticleKey]
    );
  }
  if (recommendedGrid) {
    recommendedGrid.innerHTML = articleKeys
      .slice(1, 3)
      .map((key) => createArticleCardHTML(key, articles[key]))
      .join("");
  }
  if (fullGrid) {
    fullGrid.innerHTML = articleKeys
      .map((key) => createArticleCardHTML(key, articles[key]))
      .join("");
  }
  if (filterBar) {
    const categoryCounts = {};
    const categories = [
      ...new Set(
        articleKeys
          .map((key) => articles[key].category.replace("#", "").trim())
          .filter(Boolean)
      ),
    ];
    articleKeys.forEach((key) => {
      const cat = articles[key].category.replace("#", "").trim();
      if (cat) categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });
    let filterButtonsHTML = `<button class="filter-btn active" data-filter="全部">全部</button>`;
    categories.forEach((cat) => {
      filterButtonsHTML += `<button class="filter-btn" data-filter="${cat}">${cat}<span class="tag-count">${
        categoryCounts[cat] || 0
      }</span></button>`;
    });
    filterBar.innerHTML = filterButtonsHTML;
  }
}

// --- ✨ 重构函数 1：专门处理认证和页面保护 ---
export function handleAuth() {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navAuthLink = document.getElementById("nav-auth-link");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  if (navAuthLink) {
    if (loggedIn) {
      navAuthLink.textContent = "退出";
      navAuthLink.href = "#";
      navAuthLink.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        showCustomAlert("您已成功退出！", "操作成功").then(() => {
          if (currentPage !== "login.html") window.location.href = "login.html";
        });
      });
    } else {
      navAuthLink.textContent = "登录";
      navAuthLink.href = "login.html";
    }
  }

  const protectedPages = ["index.html", "about.html", "article.html"];
  if (protectedPages.includes(currentPage) && !loggedIn) {
    showCustomAlert("请先登录以访问该页面！", "访问受限").then(() => {
      window.location.href = "login.html";
    });
    return true; // 返回 true，表示需要中断后续脚本
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("isLoggedIn", "true");
      showCustomAlert("登录成功！即将带您进入次元空间~", "登录成功").then(
        () => {
          window.location.href = "index.html";
        }
      );
    });
  }
  return false; // 返回 false，表示一切正常
}

// --- ✨ 重构函数 2：专门渲染文章详情页 (增加幂等性检查) ---
export function renderArticlePage() {
  const banner = document.querySelector(".article-hero-banner");
  const articleWrapper = document.querySelector(".article-wrapper");
  if (
    !banner ||
    !articleWrapper ||
    articleWrapper.querySelector(".article-body-card")
  ) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const topic = params.get("topic");
  const article = articles[topic];

  if (article) {
    banner.style.backgroundImage = `url('${
      article.image || "images/bg4.jpg"
    }')`;
    document.title = `${article.title} | 三叶次元`;
    articleWrapper.innerHTML = `
            <div class="article-body-card">
                <h1 class="article-title">${article.title}</h1>
                <div class="article-meta">
                    <img src="images/avatar.png" alt="${article.author}">
                    <span>${article.author}</span><span class="separator">·</span>
                    <span>${article.date}</span><span class="separator">·</span>
                    <span class="category-tag">${article.category}</span>
                </div>
                <div class="article-content">${article.content}</div>
            </div>
        `;
    if (typeof Prism !== "undefined") Prism.highlightAll();
  } else {
    document.title = "文章未找到 | 三叶次元";
    articleWrapper.innerHTML = `
            <div class="article-body-card">
                <h1 class="article-title">文章未找到</h1>
                <div class="article-content">
                    <p>抱歉，你所要查找的文章不存在或已被移动。请检查链接是否正确，或返回首页查看其他内容。</p>
                    <a href="index.html" class="btn" style="width: auto; padding: 12px 30px; margin-top: 1rem;">返回首页</a>
                </div>
            </div>
        `;
  }
}
