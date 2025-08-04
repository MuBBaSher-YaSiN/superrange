  
import { useEffect } from 'react';

const useStickySidebar = (sidebarClass: string, footerClass: string): void => {
  useEffect(() => {
    const sidebar = document.querySelector<HTMLElement>(sidebarClass);
    const footer = document.querySelector<HTMLElement>(footerClass);

    if (!sidebar || !footer) return;

    const sidebarHeight = sidebar.offsetHeight;
    const footerOffsetTop = footer.getBoundingClientRect().top + window.scrollY;
    const sidebarOffsetTop = sidebar.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > sidebarOffsetTop) {
        sidebar.classList.add('fixed');
      } else {
        sidebar.classList.remove('fixed');
      }

      if (scrollTop + sidebarHeight > footerOffsetTop) {
        const distanceToBottom = -(scrollTop + sidebarHeight - footerOffsetTop);
        sidebar.style.top = `${distanceToBottom}px`;
      } else {
        sidebar.style.top = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sidebarClass, footerClass]);
};

export default useStickySidebar;