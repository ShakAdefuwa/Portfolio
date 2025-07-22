// This script uses html2canvas to capture the menu as an image
document.addEventListener('DOMContentLoaded', function() {
    // Add html2canvas script
    const script = document.createElement('script');
    script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
    document.head.appendChild(script);
    
    script.onload = function() {
        // Create a button to capture the menu
        const captureBtn = document.createElement('button');
        captureBtn.textContent = 'Capture Menu as Image';
        captureBtn.style.position = 'fixed';
        captureBtn.style.top = '20px';
        captureBtn.style.right = '20px';
        captureBtn.style.padding = '10px 15px';
        captureBtn.style.backgroundColor = '#d62828';
        captureBtn.style.color = 'white';
        captureBtn.style.border = 'none';
        captureBtn.style.borderRadius = '5px';
        captureBtn.style.cursor = 'pointer';
        captureBtn.style.zIndex = '1000';
        document.body.appendChild(captureBtn);
        
        captureBtn.addEventListener('click', function() {
            const menuContainer = document.querySelector('.menu-container');
            
            if (menuContainer) {
                html2canvas(menuContainer).then(canvas => {
                    // Create a link to download the image
                    const link = document.createElement('a');
                    link.download = 'Clean_Menu.png';
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                });
            } else {
                alert('Menu container not found!');
            }
        });
    };
}); 