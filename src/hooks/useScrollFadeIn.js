import { useEffect, useRef } from 'react';

export default function useScrollFadeIn() {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, Number(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observerRef.current = observer;

    const observe = () => {
      const elements = document.querySelectorAll('.fade-in:not(.visible)');
      elements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observe();

    // Re-observe when new content may have loaded (e.g. iframes causing reflow)
    const mutationObserver = new MutationObserver(() => {
      observe();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
