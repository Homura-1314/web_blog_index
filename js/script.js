import { inithitok_to } from './modules/Hitokoto.js';
import { init_img_rotion } from './modules/img_rotation.js';
import { post_data, content_logic } from './modules/date.js';
import { theme_init, Effect, music_player, initArticleFilter } from './modules/ui.js';
document.addEventListener('DOMContentLoaded', function() {
    // --- 全局功能 (所有页面都需要) ---
    theme_init();
    content_logic();

    // --- 页面专属功能 ---
    const pageId = document.body.id;

    if (pageId === 'page-index') {
        Effect(); // 3D倾斜和打字机效果仅在首页
        post_data(); // 文章列表仅在首页
        inithitok_to(); // 一言仅在首页
        initArticleFilter();
    }

    if (pageId === 'page-about') {
        Effect(); // “关于”页也用了
    }
    if (pageId === 'page-login' || pageId === 'page-register') {
        init_img_rotion(); // 背景轮播仅在登录和注册页
    }
    music_player();
});