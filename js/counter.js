 
const counters = document.querySelectorAll('[data-toggle="counter-up"]');

 
const updateCounter = (el) => {
 
    const finalValue = +el.innerText;
 
    const duration = 800;  
 
    const increment = finalValue / duration;

 
    let currentCount = 0;

 
    const timer = setInterval(() => {
 
        currentCount += increment;

 
        if (currentCount >= finalValue) {
 
            clearInterval(timer);
            el.innerText = finalValue;
        } else {
 
            el.innerText = Math.ceil(currentCount);
        }
    }, 1);   
};

 
const observer = new IntersectionObserver((entries, observer) => {
 
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
 
            updateCounter(entry.target);
 
            observer.unobserve(entry.target);
        }
    });
});

 
counters.forEach((counter) => {
    observer.observe(counter);
});