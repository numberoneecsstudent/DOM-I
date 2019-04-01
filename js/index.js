const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Example: Update the img src for the logo

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// let headerImg = document.getElementById("cta-img");
// headerImg.setAttribute("src", "img/header-img.png");





//nav
const nav = document.querySelector('a')
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

//===================== Both ways below worked==================================

//let product = document.getElementsByTagName('a')[1];
//product.innerHTML = 'Product';

//let product = document.getElementsByTagName('a')[1];
//product.innerText = siteContent['nav']['nav-item-2'];

//===============================================================================
// cta

const cta_text = document.querySelector('h1')
cta_text.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button')
button.textContent = siteContent['cta']['button'];

const cta_img = document.getElementById('cta-img')
cta_img.setAttribute("src", siteContent["cta"]["img-src"]);


const main_content_img = document.getElementById('middle-img')
main_content_img.setAttribute("src", "img/mid-page-accent.jpg")

// main-content

const main_content_h4 = document.querySelector('.main content h4')
main_content_h4[0].textContent = siteContent['main-content']['features-h4'];
main_content_h4[1].textContent = siteContent['main-content']['about-h4'];
main_content_h4[2].textContent = siteContent['main-content']['services-h4'];
main_content_h4[3].textContent = siteContent['main-content']['product-h4'];
main_content_h4[4].textContent = siteContent['main-content']['vision-h4'];

const main_content_p = document.querySelector('.main-content p')
main_content_p[0].textContent = siteContent['main-content']['features-content'];
main_content_p[1].textContent = siteContent['main-content']['about-content'];
main_content_p[2].textContent = siteContent['main-content']['services-content'];
main_content_p[3].textContent = siteContent['main-content']['product-content'];
main_content_p[4].textContent = siteContent['main-content']['vision-content'];
// Contact


const contact_H4 = document.querySelector('.contact h4')
contact_H4.innerText = siteContent['contact']['contact-h4'];




const contact_p = document.querySelector('.contact p')
address.innerText = siteContent['contact']['address'];
phone.innerText = siteContent['contact']['phone'];
email.innerText = siteContent['contact']['email'];

//footer
const footer = document.querySelector('footer p')
footer.innerText = siteContent['footer']['copyright'];

 //let aTags = document.querySelectorAll("a");
// let i;
// for (i = 0; i < aTags.length; i++) {
//   aTags[i].style.color = "red";
// }

// aTags.forEach(element => {
//   element.style.color = 'blue';
// });

