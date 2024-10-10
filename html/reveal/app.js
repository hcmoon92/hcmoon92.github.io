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
        // Create a new section for the fetched markdown content
        const slidesContainer = document.getElementById('slides-container');
        slidesContainer.innerHTML = `
          <section data-markdown>
            <textarea data-template>
              ${markdown}
            </textarea>
          </section>
        `;
  
        // Reinitialize reveal.js to render the new content
        Reveal.sync();
      })
      .catch(error => {
        console.error('Error loading markdown:', error);
      });
  }
  
  // Initial load (optional: load first file by default)
  loadSelectedMarkdown();
  