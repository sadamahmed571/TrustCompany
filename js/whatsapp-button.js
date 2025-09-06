document.addEventListener('DOMContentLoaded', function() {
        const whatsFloat = document.getElementById('whatsFloat');
        const link = whatsFloat.querySelector('a');
        
        let timeoutId;  
        
        whatsFloat.addEventListener('click', function(event) {
            if (!whatsFloat.classList.contains('active')) {
                 
                event.preventDefault();
                whatsFloat.classList.add('active');
                
                
                timeoutId = setTimeout(() => {
                    whatsFloat.classList.remove('active');
                }, 3000);
            } else {
               
                clearTimeout(timeoutId);
               
            }
        });
        
        
        whatsFloat.addEventListener('mouseleave', function() {
            whatsFloat.classList.remove('active');
            clearTimeout(timeoutId);  
        });
        
      
        document.addEventListener('click', function(event) {
            if (!whatsFloat.contains(event.target)) {
                whatsFloat.classList.remove('active');
                clearTimeout(timeoutId);  
            }
        });
    });