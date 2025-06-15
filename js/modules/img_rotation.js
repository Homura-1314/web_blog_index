async function preloadImages(urls, callback) {
    let loadedCount = 0;
    const totalCount = urls.length;
    await urls.forEach(url => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === totalCount) {
                callback();
            }
        };
    });
}
export async function init_img_rotion() {
  const slideshowContainer = document.getElementById("slideshow-container");
  if (slideshowContainer) {
    async function getRandomImage() {
      const targetUrl = "https://www.loliapi.com/acg/pc/";
      try {
        const response = await fetch(targetUrl)
        if (response) {
          return response.url; // 返回图片URL
        } else {
          throw new Error("API返回错误状态码");
        }
      } catch (error) {
        console.error("Error:", error);
        throw error;
      }
    }
    const number = 10; // 图片申请的数量
    const displayDuration = 20000; // 每张图片显示时长
    let Images_list = []
    const slides = [];
    for (let i = 0; i < number; i++){
      try {
        const imageUrl = await getRandomImage();
        Images_list.push(imageUrl);
        if (Images_list.length > 0) {
          Images_list.forEach((src) => {
            const slide = document.createElement("div");
            slide.className = "slide";
            slide.style.backgroundImage = `url(${src})`;
            slideshowContainer.appendChild(slide);
            slides.push(slide);
          });
          slides[0].classList.add("active"); // 立即显示第一张图
        }
        // 添加延迟避免请求过于频繁
        await new Promise(resolve => setTimeout(resolve, 450));
    } catch (error) {
        console.error(`获取第 ${i + 1} 张图片失败:`, error);
    } // 获取20个随机图片
    }
    preloadImages(Images_list, () => {
      if (Images_list.length > 0) {
        let currentImageIndex = 0;
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
            nextSlide.classList.remove("previous");
            nextSlide.classList.add("active");
            slides.forEach((slide, index) => {
              if (index !== lastImageIndex && index !== nextImageIndex) {
                slide.classList.remove("previous");
              }
            });
            currentImageIndex = nextImageIndex;
          }, displayDuration);
        }
      }
    });
  }
}
