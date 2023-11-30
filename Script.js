    document.addEventListener('DOMContentLoaded', function() {
        function handleHoverAndRedirect(elementId, targetUrl) {
          const element= document.getElementById(elementId);

          if (element) {
            let hoverTimeout;
  
            element.addEventListener('mouseenter', () => {
              hoverTimeout = setTimeout(() => {
                window.location.href = targetUrl;
              }, 3000); // 3000 milliseconds = 3 seconds
            });
  
            element.addEventListener('mouseleave', () => {
              clearTimeout(hoverTimeout);
            });
          } else {
            console.error(`Element with ID '${elementId}' not found.`);
          }

        }
  

        handleHoverAndRedirect('IT', '/pages/IT.html');
        handleHoverAndRedirect('LT', '/pages/LT.html');
        handleHoverAndRedirect('DM', '/pages/DM.html');
        handleHoverAndRedirect('CW', '/pages/CW.html');
    });
