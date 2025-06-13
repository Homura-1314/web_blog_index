import { fetchWithTimeout } from './Hitokoto.js'
export function theme_init(){
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    // 1. 定义切换函数
    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            if(themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            if(themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', 'light');
        }
    }
    // 2. 按钮点击事件
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('dark-theme')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }
    // 3. 初始化主题：检查localStorage中保存的用户偏好
    const savedTheme = localStorage.getItem('theme') || 'light'; // 默认亮色主题
    setTheme(savedTheme);
}

export function Effect(){
    const cards = document.querySelectorAll('.tilt-effect');
    cards.forEach(card => {
        let ticking = false; // 请求动画帧的节流阀
        let currentX = 0;
        let currentY = 0;

        const updateTransform = () => {
            const rotateX = (currentY / card.offsetHeight) * -10;
            const rotateY = (currentX / card.offsetWidth) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            ticking = false;
        };

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            currentX = e.clientX - rect.left - rect.width / 2;
            currentY = e.clientY - rect.top - rect.height / 2;

            if (!ticking) {
                ticking = true;
                requestAnimationFrame(updateTransform);
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // 4. 打字机效果
    const typewriterElement = document.getElementById("hero-subtitle");
    if (typewriterElement) {
        const text = "欢迎来到我的知识空间~";
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
}

export function music_player() {
  const aplayerContainer = document.getElementById("aplayer");
  if (!aplayerContainer || typeof APlayer === "undefined") {
    return;
  }

  aplayerContainer.innerHTML =
    '<p style="text-align:center; color: var(--text-color-secondary); padding: 20px;">正在从次元云加载音乐...</p>';

  const metingApiUrl =
    "https://api.i-meto.com/meting/api?server=netease&type=playlist&id=7747893098";

  const init_music = async () => {
    try {
      const response = await fetchWithTimeout(metingApiUrl, { timeout: 8000 });
      if (!response.ok)
        throw new Error(`HTTP error status: ${response.status}`);

      const data = await response.json();
      if (!data || data.length === 0) throw new Error("API返回的播放列表为空");

      aplayerContainer.innerHTML = "";

      const ap = new APlayer({
        container: aplayerContainer,
        fixed: true,
        lrcType: 3,
        audio: data,
        autoplay: false,
      });

      // --- ✨ 这是本次修复的核心：全新的、基于事件链的状态恢复逻辑 ✨ ---

      const lastState = JSON.parse(sessionStorage.getItem("aplayerState"));

      if (
        lastState &&
        typeof lastState.index === "number" &&
        lastState.index < data.length
      ) {
        // 步骤1: 切换到正确的歌曲。这是我们唯一需要立即执行的操作。
        ap.list.switch(lastState.index);

        // 步骤2: 定义一个一次性的'loadeddata'事件监听器。
        // 当新歌曲的数据加载完毕后，这个监听器会被触发。
        const onLoadedData = () => {
          // 步骤3: 在数据加载后，我们现在可以安全地设置播放时间。
          ap.seek(lastState.time);

          // 步骤4: 移除这个一次性的监听器，防止它再次触发。
          ap.off("loadeddata", onLoadedData);
        };

        // 步骤5: 定义一个一次性的'seeked'事件监听器。
        // 当ap.seek()操作完成，播放头成功跳转后，这个监听器会被触发。
        const onSeeked = () => {
          // 步骤6: 在跳转完成后，我们现在可以安全地恢复播放状态。
          if (lastState.isPlaying) {
            ap.play();
          }

          // 步骤7: 同样，移除这个一次性的监听器。
          ap.off("seeked", onSeeked);
        };

        // 步骤8: 绑定这两个一次性的监听器。
        ap.on("loadeddata", onLoadedData);
        ap.on("seeked", onSeeked);
      }

      // 保存状态的逻辑保持不变
      const savePlayerState = () => {
        if (ap.audio && ap.audio.HAVE_CURRENT_DATA) {
          const state = {
            index: ap.list.index,
            time: ap.audio.currentTime,
            isPlaying: !ap.audio.paused,
            url: ap.audio.src,
          };
          sessionStorage.setItem("aplayerState", JSON.stringify(state));
        }
      };

      ap.on("play", savePlayerState);
      ap.on("pause", savePlayerState);
      ap.on("timeupdate", savePlayerState);
      window.addEventListener("beforeunload", savePlayerState);
    } catch (error) {
      console.error("获取音乐播放列表失败:", error);
      aplayerContainer.innerHTML = `<p style="text-align:center; color: #E74C3C; padding: 20px;">歌曲加载失败 >_<</p>`;
    }
  };

  init_music();
}
export function initArticleFilter() {
    const filterBar = document.getElementById('filter-bar');
    if (!filterBar) return;
    filterBar.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') return;

        const button = e.target;
        filterBar.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        const articleCards = document.querySelectorAll('#full-article-grid .article-card');

        articleCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (filterValue === '全部' || filterValue === cardCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
export function initRegisterFormValidation() {
  const form = document.getElementById("registerForm");
  if (!form) return; // 如果不是注册页，则直接退出

  const usernameInput = document.getElementById("reg-username");
  const emailInput = document.getElementById("reg-email");
  const passwordInput = document.getElementById("reg-password");
  const submitBtn = document.getElementById("register-btn");

  const usernameHint = usernameInput.nextElementSibling;
  const emailHint = emailInput.nextElementSibling;
  const passwordHint = passwordInput.nextElementSibling;

  // --- 验证规则 ---
  const rules = {
    username: {
      regex: /^[a-zA-Z0-9_\u4e00-\u9fa5]{4,16}$/,
      hint: "4-16位，可包含字母、数字、中文、下划线",
      invalid: "用户名格式不正确",
    },
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      hint: "请输入有效的邮箱地址",
      invalid: "邮箱格式不正确",
    },
    password: {
      regex: /^(?=.*[A-Za-z].)(?=.*\d)[A-Za-z\d.]{8,}$/,
      hint: "至少8位，至少包含字母和数字",
      invalid: "密码强度不足",
    },
  };

  // 存储每个字段的验证状态
  const validationStatus = {
    username: false,
    email: false,
    password: false,
  };

  // --- 验证函数 ---
  function validateField(input, rule, hintElement) {
    const fieldName = input.id.split("-")[1];

    if (input.value === "") {
      hintElement.textContent = rule.hint;
      hintElement.className = "validation-hint";
      validationStatus[fieldName] = false;
    } else if (rule.regex.test(input.value)) {
      hintElement.textContent = "格式正确";
      hintElement.className = "validation-hint valid";
      validationStatus[fieldName] = true;
    } else {
      hintElement.textContent = rule.invalid;
      hintElement.className = "validation-hint invalid";
      validationStatus[fieldName] = false;
    }
    checkFormValidity();
  }

  // --- 检查整个表单是否有效 ---
  function checkFormValidity() {
    const isAllValid = Object.values(validationStatus).every(
      (status) => status === true
    );
    submitBtn.disabled = !isAllValid;
  }

  // --- 绑定事件监听器 ---
  usernameInput.addEventListener("input", () =>
    validateField(usernameInput, rules.username, usernameHint)
  );
  emailInput.addEventListener("input", () =>
    validateField(emailInput, rules.email, emailHint)
  );
  passwordInput.addEventListener("input", () =>
    validateField(passwordInput, rules.password, passwordHint)
  );

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    showCustomAlert("账号创建成功！即将跳转到登录页。", "注册成功").then(() => {
      window.location.href = "login.html";
    });
  });  
  // --- 初始化提示 ---
  usernameHint.textContent = rules.username.hint;
  emailHint.textContent = rules.email.hint;
  passwordHint.textContent = rules.password.hint;
}
export function showCustomAlert(message, title = "提示") {
  return new Promise((resolve) => {
    // 1. 创建HTML结构
    const modalHTML = `
            <div class="custom-modal-overlay">
                <div class="custom-modal-dialog" role="alertdialog" aria-labelledby="modal-title" aria-describedby="modal-message">
                    <h3 id="modal-title">${title}</h3>
                    <p id="modal-message">${message}</p>
                    <button class="btn" id="modal-confirm-btn">确定</button>
                </div>
            </div>
        `;

    // 2. 插入到页面中
    const modalWrapper = document.createElement("div");
    modalWrapper.innerHTML = modalHTML;
    document.body.appendChild(modalWrapper);

    const overlay = modalWrapper.querySelector(".custom-modal-overlay");
    const confirmBtn = modalWrapper.querySelector("#modal-confirm-btn");

    // 触发显示动画
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
    });

    // 3. 定义关闭函数
    const closeModal = () => {
      overlay.classList.remove("visible");
      // 等待动画结束后再移除DOM
      setTimeout(() => {
        document.body.removeChild(modalWrapper);
        resolve();
      }, 300);
    };

    // 4. 绑定事件
    confirmBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        // 仅当点击背景时关闭
        closeModal();
      }
    });

    // 增加Esc键关闭功能
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
        document.removeEventListener("keydown", handleEsc);
      }
    };
    document.addEventListener("keydown", handleEsc);
  });
}