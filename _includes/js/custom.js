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

// Function to copy text to clipboard
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

// Function to show notification
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
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
    transition: opacity 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Initialize bibtex button functionality
function initBibtexButtons() {
  const bibtexButtons = document.querySelectorAll('.bibtex-button');
  
  bibtexButtons.forEach((button, index) => {
    // Create bibtex display container
    const bibtexContainer = document.createElement('div');
    bibtexContainer.className = 'bibtex-display';
    
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'btn btn-sm btn-outline';
    copyButton.textContent = 'Copy';
    copyButton.style.cssText = 'float: right; margin-bottom: 0.5rem; font-size: 0.75rem;';
    
    // Create bibtex text container
    const bibtexText = document.createElement('div');
    bibtexText.style.cssText = 'clear: both;';
    
    // Map buttons to bibtex entries (in order of appearance)
    const bibtexKeys = [
      'balanced-hyperbolic',
      'hyperbolic-safety', 
      'maximally-separated',
      'terrain-traversability',
      'max-separation',
      'region-based'
    ];
    
    const bibtexKey = bibtexKeys[index];
    const bibtexContent = bibtexData[bibtexKey];
    
    if (bibtexContent) {
      bibtexText.textContent = bibtexContent;
      
      // Assemble the bibtex display
      bibtexContainer.appendChild(copyButton);
      bibtexContainer.appendChild(bibtexText);
      
      // Insert the bibtex display after the button's parent container
      const paperLinksContainer = button.closest('.paper-links');
      if (paperLinksContainer) {
        paperLinksContainer.parentNode.insertBefore(bibtexContainer, paperLinksContainer.nextSibling);
      }
      
      // Add click event to toggle display
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const isVisible = bibtexContainer.classList.contains('show');
        
        if (isVisible) {
          // Hide bibtex
          bibtexContainer.classList.remove('show');
          button.classList.remove('active');
          button.textContent = 'bibtex';
        } else {
          // Show bibtex
          bibtexContainer.classList.add('show');
          button.classList.add('active');
          button.textContent = 'hide bibtex';
        }
      });
      
      // Add copy functionality
      copyButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        copyToClipboard(bibtexContent)
          .then(() => {
            showNotification('BibTeX copied to clipboard!');
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
              copyButton.textContent = 'Copy';
            }, 2000);
          })
          .catch(() => {
            showNotification('Failed to copy BibTeX', 'error');
          });
      });
    }
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initBibtexButtons();
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

