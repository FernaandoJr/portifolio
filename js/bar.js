const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
          entry.target.classList.add('bar-status-animation');
          
      }
    });
  });
  
const progressBar = document.querySelectorAll('.bar-status')

progressBar.forEach((el) =>observer.observe(el))
