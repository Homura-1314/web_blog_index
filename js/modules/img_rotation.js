  function preloadImages(urls, callback) {
    let loadedCount = 0;
    const totalCount = urls.length;
    urls.forEach(url => {
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
    const totalImages = 12; // 您的图片总数
    const displayDuration = 15000; // 每张图片显示时长

    const images = [];
    for (let i = 2; i <= totalImages; i++) {
      images.push(`images/bg${i}.jpg`);
    }
    preloadImages(images, () =>{
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
    })
  }
}
