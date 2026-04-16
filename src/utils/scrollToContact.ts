export const scrollToContact = () => {
  // First, navigate to the home page if we're not already there
  const currentPath = window.location.pathname;
  
  if (currentPath !== '/') {
    // Navigate to home page with contact hash
    window.location.href = '/#contact';
  } else {
    // We're already on the home page, just scroll to contact
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If element not found, try again after a short delay
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }
};
