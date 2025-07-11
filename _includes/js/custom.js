// Custom JavaScript for enhanced functionality

// BibTeX data for papers
const bibtexData = {
  'balanced-hyperbolic': `@article{kasarla2025balanced,
  title={Balanced Hyperbolic Embeddings are Natural Out-of-Distribution Detectors},
  author={Kasarla, Tejaswi and van Spengler, Max and Mettes, Pascal},
  journal={arXiv preprint arXiv:2506.10146},
  year={2025}
}`,
  'hyperbolic-safety': `@inproceedings{poppi2025hyperbolic,
  title={Hyperbolic Safety-Aware Vision-Language Models},
  author={Poppi, Tobia and Kasarla, Tejaswi and Mettes, Pascal and Baraldi, Lorenzo and Cucchiara, Rita},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year={2025}
}`,
  'maximally-separated': `@inproceedings{kasarla2024maximally,
  title={Maximally Separated Active Learning},
  author={Kasarla, Tejaswi and Jha, Abhishek and Tervoort, Faye and Cucchiara, Rita and Mettes, Pascal},
  booktitle={European Conference on Computer Vision Workshop},
  year={2024}
}`,
  'terrain-traversability': `@inproceedings{dijk2024lightweight,
  title={Lightweight Uncertainty Quantification with Simplex Semantic Segmentation for Terrain Traversability},
  author={Dijk, Judith and Burghouts, Gertjan J and Katyal, Kapil D and Yeh, Bryanna Y and Knuth, Craig T and Fokkinga, Ella and Kasarla, Tejaswi and Mettes, Pascal},
  booktitle={ICRA Workshop on Resilient Off-road Autonomy},
  year={2024}
}`,
  'max-separation': `@inproceedings{kasarla2022maximum,
  title={Maximum Class Separation as Inductive Bias in One Matrix},
  author={Kasarla, Tejaswi and Burghouts, Gertjan J and van Spengler, Max and van der Pol, Elise and Cucchiara, Rita and Mettes, Pascal},
  booktitle={Advances in Neural Information Processing Systems},
  year={2022}
}`,
  'region-based': `@inproceedings{kasarla2019region,
  title={Region-Based Active Learning for Efficient Labelling in Semantic Segmentation},
  author={Kasarla, Tejaswi and Nagendar, G and Hegde, Guruprasad and Balasubramanian, Vineeth N and Jawahar, CV},
  booktitle={Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision},
  year={2019}
}`
};

// Simple function to copy text to clipboard
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return Promise.resolve();
    } catch (err) {
      document.body.removeChild(textArea);
      return Promise.reject(err);
    }
  }
}

// Simple notification function
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 16px;
    background: ${type === 'success' ? '#4CAF50' : '#f44336'};
    color: white;
    border-radius: 4px;
    z-index: 1000;
    font-size: 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    document.body.removeChild(notification);
  }, 3000);
}

// Simple initialization function
function initBibtexButtons() {
  const bibtexButtons = document.querySelectorAll('.bibtex-button');
  
  bibtexButtons.forEach((button) => {
    // Skip if already initialized
    if (button.classList.contains('bibtex-initialized')) {
      return;
    }
    
    // Mark as initialized
    button.classList.add('bibtex-initialized');
    
    // Get the paper ID from the data attribute
    const paperId = button.getAttribute('data-paper-id');
    if (!paperId) return;
    
    // Check if bibtex container already exists
    const existingContainer = document.getElementById(`bibtex-${paperId}`);
    if (existingContainer) {
      existingContainer.remove();
    }
    
    // Create bibtex display container
    const bibtexContainer = document.createElement('div');
    bibtexContainer.className = 'bibtex-display';
    bibtexContainer.id = `bibtex-${paperId}`;
    
    // Get the bibtex content from our data object
    const bibtexContent = bibtexData[paperId];
    
    if (bibtexContent) {
      bibtexContainer.textContent = bibtexContent;
      
      // Insert after the button's parent paragraph
      const parentParagraph = button.closest('p');
      if (parentParagraph && parentParagraph.parentNode) {
        parentParagraph.parentNode.insertBefore(bibtexContainer, parentParagraph.nextSibling);
      }
      
      // Add click event
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isVisible = bibtexContainer.classList.contains('show');
        
        if (isVisible) {
          bibtexContainer.classList.remove('show');
          button.textContent = 'bibtex';
          button.style.backgroundColor = '';
          button.style.color = '';
        } else {
          bibtexContainer.classList.add('show');
          button.textContent = 'hide bibtex';
          button.style.backgroundColor = '#007bff';
          button.style.color = 'white';
        }
      });
    }
  });
}

// Initialize when page is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBibtexButtons);
} else {
  initBibtexButtons();
}

// Also try after a delay as fallback
setTimeout(initBibtexButtons, 1000);

