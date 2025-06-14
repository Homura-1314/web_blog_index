import { inithitok_to } from "./modules/Hitokoto.js";
import { init_img_rotion } from "./modules/img_rotation.js";
import { articles } from "./modules/data_basa.js";
import { initLazyLoad } from "./modules/lazy-load.js";
import {
  post_data,
  handleAuth,
  renderArticlePage,
  populateArticleSidebar,
} from "./modules/date.js";
import {
  theme_init,
  Effect,
  music_player,
  initArticleFilter,
  initRegisterFormValidation,
  initTypewriter
} from "./modules/ui.js";
document.addEventListener("DOMContentLoaded", function () {
  function handleArticlePage() {
    const renderPageForTopic = (topic) => {
      if (!topic) return;
      // 移除旧的高亮
      const currentActive = document.querySelector(".sidebar-nav a.active");
      if (currentActive) currentActive.classList.remove("active");
      // 添加新的高亮
      const newActive = document.querySelector(
        `.sidebar-nav a[data-topic="${topic}"]`
      );
      if (newActive) newActive.classList.add("active");
      renderArticlePage();
    };
    // 2. 填充侧边栏
    populateArticleSidebar();
    // 3. 首次加载时，渲染页面
    const initialTopic = new URLSearchParams(window.location.search).get(
      "topic"
    );
    renderPageForTopic(initialTopic);
    // 4. 监听侧边栏的点击事件 (事件委托)
    const sidebar = document.getElementById("sidebar-article-list");
    if (sidebar) {
      sidebar.addEventListener("click", function (e) {
        const link = e.target.closest("a");
        if (!link) return;
        e.preventDefault(); // 阻止页面跳转
        const topic = link.dataset.topic;
        const currentTopic = new URLSearchParams(window.location.search).get(
          "topic"
        );
        // 如果点击的是当前已激活的文章，则不执行任何操作
        if (topic === currentTopic) return;
        // 使用 History API 更新URL，实现无刷新跳转
        const newUrl = `article.html?topic=${topic}`;
        history.pushState({ topic: topic }, "", newUrl);
        // 渲染新页面
        renderPageForTopic(topic);
        // 将主内容区滚动到顶部
        const mainContent = document.querySelector(".article-main-content");
        if (mainContent) mainContent.scrollTo(0, 0);
      });
    }
    // 5. 监听浏览器的前进/后退按钮
    window.addEventListener("popstate", function (e) {
      const topic = e.state
        ? e.state.topic
        : new URLSearchParams(window.location.search).get("topic");
      renderPageForTopic(topic);
    });
  }
  theme_init();
  // 首先处理认证，如果需要跳转，则中断后续所有操作
  if (handleAuth()) {
    return;
  }
  const pageId = document.body.id;
  // 根据页面ID，精确调用所需函数
  switch (pageId) {
    case "page-index":
      Effect();
      post_data();
      inithitok_to();
      initArticleFilter();
      init_img_rotion();
      initTypewriter();
      initLazyLoad(articles);
      break;
    case "page-article":
      handleArticlePage();
      break;
    case "page-about":
      Effect();
      break;
    case "page-login":
      init_img_rotion();
      Effect();
      break;
    case "page-register":
      init_img_rotion();
      Effect();
      initRegisterFormValidation();
      break;
  }
  music_player(); // 所有页面都加载播放器
});
