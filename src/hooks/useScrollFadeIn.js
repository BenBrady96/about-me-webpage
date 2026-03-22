import { useEffect, useRef } from 'react';

export default function useScrollFadeIn() {
  const observerRef = useRef(null);

  useEffect(() => {
    const observed = new WeakSet();

    const observer = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            if (delay > 0) {
              setTimeout(() => entry.target.classList.add('visible'), Number(delay));
            } else {
              entry.target.classList.add('visible');
            }
            observer.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observerRef.current = observer;

    const observeNew = () => {
      const elements = document.querySelectorAll('.fade-in:not(.visible)');
      for (let i = 0; i < elements.length; i++) {
        if (!observed.has(elements[i])) {
          observed.add(elements[i]);
          observer.observe(elements[i]);
        }
      }
    };

    // Initial observation
    observeNew();

    // Debounced re-scan for dynamically added elements
    let debounceTimer = null;
    const mutationObserver = new MutationObserver(() => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(observeNew, 200);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);
}
