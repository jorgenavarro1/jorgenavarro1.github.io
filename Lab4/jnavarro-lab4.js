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