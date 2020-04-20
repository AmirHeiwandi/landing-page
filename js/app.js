// Variable declarations
const sections = document.getElementsByTagName('section');
const navBar = document.getElementById("navbar__list");
let liElement, dataType, idType, content, sectionId, elementToScroll, attr, a, box;
let anchors = document.getElementsByTagName('a');

// Function to create nav menu based on amount of sections and sections info.
function makeMenu (){
    for (let section of sections){
        liElement = document.createElement('li');
        dataType = section.getAttribute('data-nav');
        idType = section.getAttribute('id');
        content = `<a class="menu__link" href="${idType}">${dataType}</a>`;
        liElement.innerHTML = content;
        navBar.appendChild(liElement);
    };
}

// Function to scroll to section when clicking on item from nav menu.
function scrollTo() {
    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            sectionId = anchor.getAttribute('href');
            elementToScroll = document.getElementById(sectionId);
            elementToScroll.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}

// Function to see if section is in viewport. 
// If it is, turn on active-class, if not, remove active-class.
function makeActive() {
    for (let section of sections) { 
        attr = section.getAttribute('id');
        a = document.querySelector(`[href="${attr}"]`);
        box = section.getBoundingClientRect(); 
        if (box.top <= 150 && box.bottom >= 150) { 
            section.classList.add('your-active-class');
            a.classList.add('menu__link__active');
        }
        else {
            section.classList.remove('your-active-class');
            a.classList.remove('menu__link__active');
        }
    } 
}

// Create eventlistener for when loading the page.
window.addEventListener('load', (event) => {
    makeMenu();    
    scrollTo();
});

// Create eventlistener for scrolling.
document.addEventListener('scroll', (e) => {
    makeActive();
});


