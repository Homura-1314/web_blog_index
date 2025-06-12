import { inithitok_to } from './modules/Hitokoto.js';
import { init_img_rotion } from './modules/img_rotation.js';
import { post_data, content_logic } from './modules/date.js';
import {
  theme_init,
  Effect,
  music_player,
  initArticleFilter,
  initRegisterFormValidation,
} from "./modules/ui.js";
document.addEventListener('DOMContentLoaded', function() {
    theme_init();
    content_logic();
    const pageId = document.body.id;
    if (pageId === 'page-index') {
        Effect();
        post_data();
        inithitok_to();
        initArticleFilter();
    }
    if (pageId === 'page-about') {
        Effect();
    }
    if (pageId === 'page-login' || pageId === 'page-register') {
        init_img_rotion();
        initRegisterFormValidation();
    }
    music_player();
});