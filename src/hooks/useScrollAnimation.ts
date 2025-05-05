
import { useEffect } from 'react';

/**
 * Hook to add scroll-triggered animations to elements
 * @param selector CSS selector for elements to animate
 * @param threshold Intersection threshold (0 to 1)
 * @param rootMargin Root margin for the observer
 */
export const useScrollAnimation = (
  selector: string = '.animate-on-scroll',
  threshold: number = 0.1,
  rootMargin: string = '0px'
) => {
  useEffect(() => {
    // Set up the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      { 
        threshold,
        rootMargin
      }
    );
    
    // Get all elements matching the selector
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      observer.observe(el);
    });
    
    // Clean up
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [selector, threshold, rootMargin]);
};

export default useScrollAnimation;
