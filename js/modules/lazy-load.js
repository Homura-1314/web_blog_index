export function initLazyLoad() {
  // 1. 选取所有需要懒加载的图片
  const lazyImages = document.querySelectorAll("img.lazy-load");
  // 2. 如果浏览器不支持 IntersectionObserver，则直接加载所有图片
  if (!("IntersectionObserver" in window)) {
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
      img.classList.remove("lazy-load");
    });
    return;
  }

  // 3. 创建一个观察者
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // 当图片进入或即将进入视窗时
        if (entry.isIntersecting) {
          const img = entry.target;

          // 将真实的URL赋给src属性
          img.src = img.dataset.src;

          // 添加一个'loaded'类，用于触发淡入动画
          img.classList.add("loaded");

          // 移除'lazy-load'类，并停止观察这张图片，以优化性能
          img.classList.remove("lazy-load");
          observer.unobserve(img);
        }
      });
    },
    {
      // rootMargin: '0px 0px 200px 0px' // 可以提前200px开始加载
    }
  );

  // 4. 让观察者开始观察每一张图片
  lazyImages.forEach((img) => {
    observer.observe(img);
  });
}
