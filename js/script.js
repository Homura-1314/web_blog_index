document.addEventListener('DOMContentLoaded', function() {

    //内容数据库 (博客文章) ---
    const articles = {
        "html-css": {
            title: "Web世界的基石：HTML & CSS入门",
            content: `<p>在广袤的数字宇宙中，每一个网站都是一个独立的世界。而构建这些世界的基础，正是HTML和CSS这对黄金搭档。</p><h3>HTML：内容的骨架</h3><p>HTML (超文本标记语言) 负责定义网页的<strong>结构和内容</strong>。它使用“标签”来包裹不同类型的内容，告诉浏览器这里是一个标题、一个段落还是一张图片。</p><pre><code class="language-html"><!DOCTYPE html>\n<html>\n<head>\n  <title>我的第一个网页</title>\n</head>\n<body>\n  <h1>欢迎来到我的世界</h1>\n  <p>这是一段描述文字。</p>\n  <img src="images/avatar.png" alt="风景图">\n</body>\n</html></code></pre><h3>CSS：样式的魔法</h3><p>如果HTML是骨架，那么CSS (层叠样式表) 就是赋予它血肉、皮肤和华丽服饰的魔法。它负责网页的<strong>外观和布局</strong>，比如颜色、字体、间距和动画效果。</p><pre><code class="language-css">/* 将所有h1标题变为蓝色 */\nh1 {\n  color: #0096fa;\n  font-family: 'ZCOOL KuaiLe', sans-serif;\n}\n\n/* 给图片添加一个圆角和阴影 */\nimg {\n  border-radius: 10px;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n}</code></pre><p>掌握了HTML和CSS，你就获得了创造静态网页世界的基本能力。这是成为一名Web开发者的第一步，也是最重要的一步。</p>`
        },
        "javascript-dom": {
            title: "赋予页面生命：JavaScript与DOM交互",
            content: `<p>静态的网页虽然美丽，但却缺少互动。要让网页“活”起来，响应用户的操作，我们就需要JavaScript这门强大的脚本语言。</p><h3>什么是DOM？</h3><p>DOM (文档对象模型) 是浏览器为HTML文档创建的一个树形结构模型。简单来说，浏览器把你的HTML代码转换成了一个可以用JavaScript来操作的对象。通过DOM，JS可以增、删、改、查页面上的任何一个元素。</p><h3>交互的核心：事件监听</h3><p>我们可以使用 <code>addEventListener</code> 方法，让页面元素“监听”用户的行为，比如点击、悬停、滚动等，并在这些行为发生时执行特定的JS代码。</p><pre><code class="language-html"><!-- HTML部分 -->\n<button id="magicButton">点我施放魔法</button>\n<p id="message">...</p></code></pre><pre><code class="language-javascript">// JavaScript部分\nconst button = document.getElementById('magicButton');\nconst message = document.getElementById('message');\n\nbutton.addEventListener('click', function() {\n  message.textContent = '✨ 魔法已经成功施放！';\n  message.style.color = '#fab1a0';\n});</code></pre><p>当用户点击按钮时，这段JS代码就会找到ID为 "message" 的段落，并修改它的文本和颜色。这就是JavaScript赋予页面生命力的基本原理。</p>`
        },
        "frontend-frameworks": {
            title: "现代Web的魔法：初识前端框架",
            content: `<p>当你构建的网页世界越来越复杂时，只用原生的HTML, CSS, 和JavaScript会变得非常繁琐和难以维护。为了解决这个问题，社区的大神们创造了“前端框架”。</p><h3>为什么需要框架？</h3><ul><li><strong>组件化：</strong> 将复杂的UI拆分为独立、可复用的小组件。</li><li><strong>数据驱动：</strong> 当数据变化时，视图（UI）自动更新，无需手动操作DOM。</li><li><strong>工程化：</strong> 提供了构建、测试、部署等一系列流程支持。</li></ul><h3>主流框架三巨头</h3><p>目前，前端领域最主流的三大框架是：</p><ul><li><strong>React：</strong> 由Facebook（Meta）维护，拥有最庞大的生态系统和社区。</li><li><strong>Vue.js：</strong> 渐进式框架，以其平缓的学习曲线和优秀的文档而闻名，非常适合初学者。</li><li><strong>Angular：</strong> 由Google维护，是一个功能全面的“全家桶”式框架，更适合大型企业级应用。</li></ul><p>学习框架是前端进阶的必经之路。它们是更高级的“魔法”，能让你以更快的速度、更优雅的方式构建出更宏大、更复杂的数字世界。</p>`
        }
    };

    // 核心逻辑（登录、路由、文章加载） ---
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const navAuthLink = document.getElementById('nav-auth-link');
    const currentPage = window.location.pathname.split('/').pop();

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

    if (currentPage === 'article.html') {
        const articleTitleEl = document.getElementById('article-title');
        const articleBodyEl = document.getElementById('article-body');
        const params = new URLSearchParams(window.location.search);
        const topic = params.get('topic');
        const article = articles[topic];
        if (article) {
            document.title = article.title + " | 创想次元";
            articleTitleEl.textContent = article.title;
            articleBodyEl.innerHTML = article.content;
            if (typeof Prism !== 'undefined') {
                Prism.highlightAll();
            }
        } else {
            articleTitleEl.textContent = "文章未找到";
            articleBodyEl.innerHTML = "<p>抱歉，我们没有找到这篇次元知识。尝试返回<a href='index.html'>首页</a>看看吧。</p>";
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

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('账号创建成功！请登录。');
            window.location.href = 'login.html';
        });
    }

    // 1. 一言(Hitokoto) API
    const hitokotoContainer = document.getElementById('hitokoto-container');
    if (hitokotoContainer) {
        const fetchHitokoto = () => {
            const hitokotoText = document.getElementById('hitokoto-text');
            const hitokotoFrom = document.getElementById('hitokoto-from');
            hitokotoText.style.opacity = 0;
            fetch('https://v1.hitokoto.cn/?c=a&c=b&c=c')
                .then(response => response.json())
                .then(data => {
                    hitokotoText.textContent = `“${data.hitokoto}”`;
                    hitokotoFrom.textContent = `——《${data.from}》`;
                    hitokotoText.style.opacity = 1;
                })
                .catch(console.error);
        };
        fetchHitokoto();
        hitokotoContainer.addEventListener('click', fetchHitokoto);
    }

    const slideshowContainer = document.getElementById("slideshow-container");
    if (slideshowContainer) {
      const totalImages = 12; // 您的图片总数
      const displayDuration = 15000; // 每张图片显示时长

      const images = [];
      for (let i = 2; i <= totalImages; i++) {
        images.push(`images/bg${i}.jpg`);
      }

      if (images.length > 0) {
        const slides = [];
        images.forEach((src) => {
          const slide = document.createElement("div");
          slide.className = "slide";
          slide.style.backgroundImage = `url(${src})`;
          slideshowContainer.appendChild(slide);
          slides.push(slide);
        });

        let currentImageIndex = 0;

        // 立即显示第一张图
        slides[currentImageIndex].classList.add("active");

        if (slides.length > 1) {
          setInterval(() => {
            const lastImageIndex = currentImageIndex;
            let nextImageIndex;
            do {
              nextImageIndex = Math.floor(Math.random() * slides.length);
            } while (nextImageIndex === currentImageIndex);

            const lastSlide = slides[lastImageIndex];
            const nextSlide = slides[nextImageIndex];

            // 1. 将上一张图标记为 'previous'，让它留在原地作为背景
            lastSlide.classList.remove("active");
            lastSlide.classList.add("previous");

            // 2. 激活下一张图的动画，它会覆盖在上一张图之上
            nextSlide.classList.remove("previous"); // 先清理状态
            nextSlide.classList.add("active");

            // 3. 在下一张图的动画开始后，再把更早的图片的previous类移除，让它回到待命状态
            // 找到除了当前和上一张之外的所有图片
            slides.forEach((slide, index) => {
              if (index !== lastImageIndex && index !== nextImageIndex) {
                slide.classList.remove("previous");
              }
            });

            currentImageIndex = nextImageIndex;
          }, displayDuration);
        }
      }
    }
    // 2. 粒子背景
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {"particles":{"number":{"value":60,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle"},"opacity":{"value":0.5,"random":false},"size":{"value":3,"random":true},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"none","random":false,"straight":false,"out_mode":"out"}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"}},"modes":{"repulse":{"distance":150,"duration":0.4},"push":{"particles_nb":4}}},"retina_detect":true});
    }

    // 3. 3D倾斜效果
    const cards = document.querySelectorAll('.tilt-effect');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = (y / rect.height) * -10;
            const rotateY = (x / rect.width) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // 4. 打字机效果
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const text = "欢迎来到我的知识空间...";
        let index = 0;
        function type() {
            if (index < text.length) {
                typewriterElement.textContent += text.charAt(index);
                index++;
                setTimeout(type, 120);
            }
        }
        type();
    }
    const aplayerContainer = document.getElementById("aplayer");

    // 只有在页面上找到了播放器的容器时，才执行所有相关逻辑
    if (aplayerContainer) {
        // --- API 配置 ---
        const apiServer = 'netease';
        const playlistId = '7747893098';
        const apiUrl = `https://api.i-meto.com/meting/api?server=${apiServer}&type=playlist&id=${playlistId}`;

        // Plan B: 使用适配MetingJS的初始化函数
        function initializeAPlayer(playlistData) {
            const aplayerSongs = playlistData.map(song => ({
                name: song.name,
                artist: song.artist,
                url: song.url,
                cover: song.pic,
                lrc: song.lrc
            }));
            
            const ap = new APlayer({
                container: document.getElementById('aplayer'),
                fixed: true,
                lrcType: 3,
                audio: aplayerSongs,
                storageName: 'aplayer-setting'
            });

            ap.list.switch(0);
            ap.pause();
        }
        function fetchPlaylistAndInit() {
            aplayerContainer.innerHTML =
            '<p style="color:white; padding: 1rem;">正在从次元空间加载音乐...</p>';
            fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.length > 0) {
                aplayerContainer.innerHTML = "";
                initializeAPlayer(data);
                } else {
                aplayerContainer.innerHTML =
                    '<p style="color:white; padding: 1rem;">歌单加载失败或为空。</p>';
                }
            })
            .catch((error) => {
                console.error("获取歌单失败:", error);
                aplayerContainer.innerHTML =
                '<p style="color:white; padding: 1rem;">网络错误，无法连接API。</p>';
            });
      }
    //    备用api方案
    //    // --- 函数定义 ---
    //   function initializeAPlayer(apiResponse) {
    //     const playlistData = apiResponse.songs;
    //     const aplayerSongs = playlistData.map((song) => ({
    //       name: song.name,
    //       artist: song.ar.map((artist) => artist.name).join(" / "),
    //       url: `https://music.163.com/song/media/outer/url?id=${song.id}.mp3`,
    //       cover: song.al.picUrl,
    //       lrc: "",
    //     }));

    //     const ap = new APlayer({
    //       container: aplayerContainer, // 直接使用外层已获取的变量
    //       fixed: true,
    //       lrcType: 1,
    //       audio: aplayerSongs,
    //       storageName: "aplayer-setting",
    //     });

    //     ap.list.switch(0);
    //     ap.pause();
    // --- 启动 ---
      // 将启动调用的也放在 if 内部
      fetchPlaylistAndInit();
    }
});
