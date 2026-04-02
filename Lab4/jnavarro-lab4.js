//jnavarro-Lab4
//ITMD-441/02

(function () {
  console.log("Lab 4 script");
 
// 1a. Change the main headline text in the hero section
  const heroHeadline = document.querySelector("section h1");
  if (heroHeadline) {
    heroHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
  }

// 1b. Edit text below the hero headline
  const heroSubtext = document.querySelector("section p");
  if (heroSubtext) {
    heroSubtext.innerHTML =
      "<em>Utilize cutting-edge strategies from Stellar Marketing to help your business <strong>thrive</strong> and <strong>excel</strong>.</em>";
  }

// 1c. Change the hero background image
  const heroSection = document.querySelector("section");
  if (heroSection) {
    heroSection.style.backgroundImage =
      "url('https://picsum.photos/id/683/1280/720')";
    heroSection.style.backgroundSize = "cover";
    heroSection.style.backgroundPosition = "center";
  }

// 1d. Remove the "Get Started" button
  const ctaButton = document.querySelector("section a");
  if (ctaButton) {
    ctaButton.remove();
  }

// 1e. Change navbar background color
  const navbar = document.querySelector("nav");
  const footer = document.querySelector("footer");
  if (navbar && footer) {
    navbar.style.backgroundColor = getComputedStyle(footer).backgroundColor;
  }

// 2a. Change icons color
  const serviceIcons = document.querySelectorAll(".material-symbols-outlined");
  serviceIcons.forEach((icon) => {
    icon.style.color = "#47C714";
  });

// 2b. Change Icon
  serviceIcons.forEach((icon) => {
    if (icon.textContent.trim() === "linked_services") {
      icon.textContent = "ads_click";
    }
  });

// 3a. Change the layout of the tiles
  const style = document.createElement("style");
  style.textContent = `
    @media (min-width: 1024px) {
      #solutions .grid {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }
  `;
  document.head.appendChild(style);

  