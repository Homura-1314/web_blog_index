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
  export function init_img_rotion() {
    const slideshowContainer = document.getElementById("slideshow-container");
  if (slideshowContainer) {
    const totalImages = 27; // 图片总数
    const displayDuration = 15000; // 每张图片显示时长
    let images = [];
    for (let i = 1; i <= totalImages; i++) {
      images.push(`images/bg${i}.jpg`);
    }
    const shuffle = () => {
      // 从数组末尾开始向前遍历
      for (let i = images.length - 1; i > 0; i--) {
        // 1. 生成一个从 0 到 i (包含 i) 的随机索引
        const j = Math.floor(Math.random() * (i + 1));
        // 2. 交换当前元素 array[i] 和随机选中的元素 array[j]
        [images[i], images[j]] = [images[j], images[i]];
      }
      return images; // 返回被打乱的数组
    };
    const shuffle_images = shuffle(images)
    preloadImages(shuffle_images, () => {
      if (shuffle_images.length > 0) {
        const slides = [];
        shuffle_images.forEach((src) => {
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
