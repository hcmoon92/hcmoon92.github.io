// Ensure the DOM is loaded before running this script
document.addEventListener('DOMContentLoaded', function() {
  
    // Function to load selected Markdown file
    function loadSelectedMarkdown() {
      const selector = document.getElementById('markdown-selector');
      const selectedFile = selector.value;
      
      fetchMarkdown(selectedFile);
    }
  
    // Function to fetch and load the markdown file content
    function fetchMarkdown(file) {
      fetch(file)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error loading ${file}`);
          }
          return response.text();
        })
        .then(markdown => {
          // Ensure the slides container exists before modifying its content
          const slidesContainer = document.getElementById('slides-container');
          if (slidesContainer) {
            slidesContainer.innerHTML = `
              <section data-markdown>
                <textarea data-template>
                  ${markdown}
                </textarea>
              </section>
            `;
            
            // Reinitialize reveal.js to render the new content
            Reveal.sync();
          } else {
            console.error('Slides container not found.');
          }
        })
        .catch(error => {
          console.error('Error loading markdown:', error);
        });
    }
  
    // Initial load (optional: load first file by default)
    loadSelectedMarkdown();
  
    // Attach event listener to dropdown to load selected markdown on change
    const selector = document.getElementById('markdown-selector');
    selector.addEventListener('change', loadSelectedMarkdown);
  
  });
  