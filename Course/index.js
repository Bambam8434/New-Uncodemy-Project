const workSection=document.querySelector(".section-work-data");const workSectionObserve=entries=>{const[entry]=entries;if(!entry.isIntersecting)return;console.log(entries);const counterNum=document.querySelectorAll(".counter-numbers");const speed=50;counterNum.forEach(curNumber=>{const updateNumber=()=>{const targetNumber=parseInt(curNumber.dataset.number);const initialNumber=parseInt(curNumber.innerText);const incrementNumber=Math.trunc(targetNumber/speed);if(initialNumber<targetNumber){curNumber.innerText=`${initialNumber+incrementNumber}+`;setTimeout(updateNumber,10)}else{curNumber.innerText=`${targetNumber}+`}};updateNumber()})};const workSecObserver=new IntersectionObserver(workSectionObserve,{root:null,threshold:0});workSecObserver.observe(workSection);const container=document.getElementById("main-gallery");const containerWidth=container.offsetWidth;let scrollAmount=0;const step=10;let isMouseOverContainer=false;const scrollContainer=()=>{if(isMouseOverContainer){return}scrollAmount+=step;container.style.marginLeft=`-${scrollAmount}%`;if(scrollAmount>=100){scrollAmount=0}};container.addEventListener("mouseenter",()=>{isMouseOverContainer=true});container.addEventListener("mouseleave",()=>{isMouseOverContainer=false});setInterval(scrollContainer,1e3);function rightclick(){const scroll=document.querySelectorAll(".scroll");console.log(scroll);const compStyles=window.getComputedStyle(scroll[0]);console.log(compStyles);const movingWidth=parseFloat(compStyles.getPropertyValue("width"));console.log(movingWidth);const totalScrollWidth=(scroll.length-1)*movingWidth;console.log(totalScrollWidth);const cardSlidder=document.querySelector(".card-slider");console.log(cardSlidder);const slidderCompStyle=window.getComputedStyle(cardSlidder);const sliderLeft=parseFloat(slidderCompStyle.getPropertyValue("left"));console.log(sliderLeft);const sliderWidth=parseFloat(slidderCompStyle.getPropertyValue("width"));console.log(Math.abs(sliderLeft)+sliderWidth,totalScrollWidth);if(Math.abs(sliderLeft)+sliderWidth<=totalScrollWidth){const scrollValue=Math.abs(sliderLeft)+movingWidth;cardSlidder.style.left=`-${scrollValue}px`}else{console.log("else");cardSlidder.style.left="0"}}function leftclick(){const scroll=document.querySelectorAll(".scroll");const compStyles=window.getComputedStyle(scroll[0]);const movingWidth=parseFloat(compStyles.getPropertyValue("width"));const totalScrollWidth=(scroll.length-1)*movingWidth;const cardSlidder=document.querySelector(".card-slider");const slidderCompStyle=window.getComputedStyle(cardSlidder);const sliderLeft=parseFloat(slidderCompStyle.getPropertyValue("left"));console.log(sliderLeft);const sliderWidth=parseFloat(slidderCompStyle.getPropertyValue("width"));console.log(Math.abs(Math.abs(sliderLeft)+sliderWidth),sliderWidth,totalScrollWidth);if(Math.abs(Math.abs(sliderLeft)+sliderWidth)>sliderWidth+1){const scrollValue=Math.abs(sliderLeft)-movingWidth;cardSlidder.style.left=`-${scrollValue}px`}else{console.log("else");cardSlidder.style.left=`-${totalScrollWidth-sliderWidth}px`}}function leftClick(){const scroll=document.querySelectorAll(".scroll-review");const compStyles=window.getComputedStyle(scroll[0]);const movingWidth=parseFloat(compStyles.getPropertyValue("width"));const totalScrollWidth=(scroll.length-1)*movingWidth;const cardSlidder=document.querySelector(".card-slider-review");const slidderCompStyle=window.getComputedStyle(cardSlidder);const sliderLeft=parseFloat(slidderCompStyle.getPropertyValue("left"));console.log(sliderLeft);const sliderWidth=parseFloat(slidderCompStyle.getPropertyValue("width"));console.log(Math.abs(Math.abs(sliderLeft)+sliderWidth),sliderWidth,totalScrollWidth);if(Math.abs(Math.abs(sliderLeft)+sliderWidth)>sliderWidth+1){const scrollValue=Math.abs(sliderLeft)-movingWidth;cardSlidder.style.left=`-${scrollValue}px`}else{console.log("else");cardSlidder.style.left=`-${totalScrollWidth-sliderWidth}px`}}function rightClick(){const scroll=document.querySelectorAll(".scroll-review");console.log(scroll);const compStyles=window.getComputedStyle(scroll[0]);console.log(compStyles);const movingWidth=parseFloat(compStyles.getPropertyValue("width"));console.log(movingWidth);const totalScrollWidth=(scroll.length-1)*movingWidth;console.log(totalScrollWidth);const cardSlidder=document.querySelector(".card-slider-review");console.log(cardSlidder);const slidderCompStyle=window.getComputedStyle(cardSlidder);const sliderLeft=parseFloat(slidderCompStyle.getPropertyValue("left"));console.log(sliderLeft);const sliderWidth=parseFloat(slidderCompStyle.getPropertyValue("width"));console.log(Math.abs(Math.abs(sliderLeft)+sliderWidth),totalScrollWidth);if(Math.abs(Math.abs(sliderLeft)+sliderWidth)<=totalScrollWidth){const scrollValue=Math.abs(sliderLeft)+movingWidth;cardSlidder.style.left=`-${scrollValue}px`}else{console.log("else");cardSlidder.style.left="0"}}