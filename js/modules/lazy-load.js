export function initLazyLoad(articlesData) {
  const lazyImageContainers = document.querySelectorAll(".lazy-image");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((container) => {
      container.style.backgroundImage = `url(${container.dataset.src})`;
    });
    return;
  }
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const topicKey = container.dataset.topicKey;
          const article = articlesData[topicKey];
          if (article && article.image) {
            const imageUrl = article.image;
            container.style.backgroundImage = `url(${imageUrl})`;
            container.classList.add("loaded");
          }

          observerInstance.unobserve(container);
        }
      });
    },
    {
      rootMargin: "0px 0px 200px 0px",
    }
  );
  lazyImageContainers.forEach((container) => {
    observer.observe(container);
  });
}