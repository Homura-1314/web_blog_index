import { inithitok_to } from "./modules/Hitokoto.js";
import { init_img_rotion } from "./modules/img_rotation.js";
import { articles } from "./modules/data_basa.js";
import { initLazyLoad } from "./modules/lazy-load.js";
import { post_data, handleAuth, } from "./modules/date.js";
import { handleArticlePage } from "./modules/handorTopic.js";
import {
  theme_init,
  Effect,
  music_player,
  initArticleFilter,
  initRegisterFormValidation,
  initTypewriter
} from "./modules/ui.js";
document.addEventListener("DOMContentLoaded", function () {
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
