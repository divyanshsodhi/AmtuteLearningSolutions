function typeText(selector, text, speed) {
    return new Promise((resolve) => {
        new Typed(selector, {
            strings: [text],
            typeSpeed: speed,
            onComplete: () => resolve(), // Resolve the promise when typing is complete
        });
    });
}

// Async function to run animations sequentially
async function runAnimations() {
    await typeText('#element', 'Welcome to', 50);
    await typeText('#element2', "Amtute", 50);
    await typeText('#element3', '  Learning Solutions!', 50);
   
}
async function runAnimations2(){
    await typeText('#element4', 'Get your Child', 50);
    await typeText('#element5', "With ", 50);
    await typeText('#element6', 'The Best Education!', 50);

}

// Start the animations
runAnimations()
.then(()=>{
    runAnimations2();
});

document.addEventListener("DOMContentLoaded",()=>{
    
})