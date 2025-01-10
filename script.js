const openNav = document.getElementById('openNav');
const mySidebar = document.getElementById('mySidebar');
const closeNav = document.getElementById('closeNav');
const content = document.getElementById('content');

//openNav.addEventListener("click", () =>{
    
    
   // mySidebar.style.width = "250px";
    
//});

//closeNav.addEventListener('click', () =>{
    
    //mySidebar.style.width = 0;
//});

// function to open sidebar

function openSidebar(event){
    
    // check for mouse click or specific key press.
    
    if( event.type === 'click' || event.type === 'Enter' || event.type === ''){
        
        mySidebar.style.width = "250px";
        mySidebar.style.display = "block";
        content.style.marginLeft = '250px';
    }
}

// function to close sidebar.

function closeSidebar(event){
    
    // check for mouse click or specific key press.
    
    if(event.type === 'click' || event.type === 'Enter' || event.type === ''){
        
        mySidebar.style.width = '0';
        content.style.marginLeft = '0';
        
        setTimeout(() => {
            mySidebar.style.display = 'none'; // Hide sidebar after transition
        }, 500); // Wait for transition to complete (0.5s)
    }
}

// add eventlistner for open.

openNav.addEventListener('click', openSidebar);
openNav.addEventListener('keydown', openSidebar);

// add event listner for close.

closeNav.addEventListener('click', closeSidebar);
closeNav.addEventListener('keydown', closeSidebar);

// javascripts for sidebar active class.

window.addEventListener('DOMContentLoaded',(event) =>{
    
    // get the current page URL(pathname).
    
    const currentPage = window.location.pathname;
    
    // get all the links in sidebar.
    
    const links = document.querySelectorAll('.sidebar a');
    
    // loop through each link.
    
    links.forEach(link =>{
        
        // if links href is matches with current page's pathname add active.
        
        if(link.href.includes(currentPage)){
            
            link.classList.add('active');
        }else{
            
            link.classList.remove('active');// Remove 'active' class from other links.
        }
        
    });
});

// for auto sliding for hero section.

/*let currentIndex = 0; // Start from the first slide
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Function to update the slides
function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update pagination dots
  document.querySelectorAll('.dot').forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Function to show the next slide
function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the start
  updateSlide();
}

// Auto-slide every 3 seconds
setInterval(showNextSlide, 3000);

// Event listeners for next/previous buttons
document.querySelector('.next').addEventListener('click', showNextSlide);
document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});

// Event listeners for pagination dots
document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index; // Set the slide to the clicked dot
    updateSlide();
  });
});

// Initialize the slider
updateSlide();*/

// new encapsulated codes for first slider.

function createSlider(sliderSelector, prevButtonSelector, nextButtonSelector, interval = 3000) {
  const slides = document.querySelector(sliderSelector);
  const totalSlides = slides.querySelectorAll('.slide').length;
  let currentIndex = 0;

  // Function to show the next slide
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the start
    updateSlide();
  }

  // Function to show the previous slide
  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the end
    updateSlide();
  }

  // Function to update the slide position
  function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Event listeners for buttons
  document.querySelector(nextButtonSelector).addEventListener('click', showNextSlide);
  document.querySelector(prevButtonSelector).addEventListener('click', showPrevSlide);

  // Automatic slide change
  setInterval(showNextSlide, interval);
}

// Initialize sliders
createSlider('.slider .slides', '.slider .prev', '.slider .next');

// encapsulation codes ends here.

// javaScripts for category slider


let currentCategoryIndex = 0;
const categorySlides = document.querySelectorAll('.category-slider .slide');
const categorySlider = document.querySelector('.category-slider .slides');
const categoryPagination = document.querySelector('.category-slider .pagination');

// Show current slide
function showCategorySlide(index) {
    currentCategoryIndex = (index + categorySlides.length) % categorySlides.length;
    categorySlider.style.transform = `translateX(-${currentCategoryIndex * 100}%)`;
    updateCategoryPagination();
}

// Create pagination
function createCategoryPagination() {
    categorySlides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === currentCategoryIndex) dot.classList.add('active');
        dot.addEventListener('click', () => showCategorySlide(index));
        categoryPagination.appendChild(dot);
    });
}

// Update active dot
function updateCategoryPagination() {
    document.querySelectorAll('.category-slider .dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentCategoryIndex);
    });
}

// Event listeners for navigation
document.querySelector('.category-slider .prev').addEventListener('click', () => {
    showCategorySlide(currentCategoryIndex - 1);
});

document.querySelector('.category-slider .next').addEventListener('click', () => {
    showCategorySlide(currentCategoryIndex + 1);
});

// Auto slide
setInterval(() => {
    showCategorySlide(currentCategoryIndex + 1);
}, 3000);

// Initialize
createCategoryPagination();
showCategorySlide(currentCategoryIndex);

//createSlider('.categorySlider .slides', '.categorySlider .prev', '.categorySlider .next');encapsulation method.

// end ...categoryslider end here.

// javascripts for scrolling text.

/*const text = document.querySelector('.scrolling-text');

      let position = window.innerWidth;
      
      function scrollText(){
         
          position--;
          
          if(position <-text.offsetWidth){
              
              position = window.innerWidth;
          }
          
          text.style.left = position + 'px';
      }

setInterval(scrollText,16); */


// for circular loaders of home page

  document.querySelectorAll('.circular-loader').forEach(loader => {
    const percentage = loader.dataset.percentage;
    loader.style.setProperty('--percentage', percentage);
  });

 //Example: Show loader for 3 seconds
//window.onload = function () {
//const loaderSection = document.querySelector(".loaders");
//setTimeout(() => {
 //loaderSection.style.display = "none"; // Hide loader after 3 seconds
 //}, 3000);
//};




