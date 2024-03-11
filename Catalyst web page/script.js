
document.addEventListener('DOMContentLoaded', function () {
  const headerLeftSide = document.querySelector('.header-left-side');

  /
  function create3DBackground() {
    const textContent = headerLeftSide.innerHTML;
    const newTextContent = textContent.replace(/<h1[^>]*>(.*?)<\/h1>/g, '<h1 data-text="$1"><span class="highlight">$1</span></h1>');
    headerLeftSide.innerHTML = newTextContent;
  }

  
  create3DBackground();
});

