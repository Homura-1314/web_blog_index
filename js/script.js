import { inithitok_to } from './modules/Hitokoto.js';
import { init_img_rotion } from './modules/img_rotation.js';
import {post_data, content_logic} from './modules/date.js'
import {theme_init, Effect, music_player} from './modules/ui.js'
document.addEventListener('DOMContentLoaded', function() {
    theme_init();
    Effect();
    music_player();
    post_data();
    content_logic();
    inithitok_to();
    init_img_rotion();
    
});
