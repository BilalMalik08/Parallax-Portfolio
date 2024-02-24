const video = document.querySelector(".bg-video1");
const WText = document.querySelector(".welcome-text");
const boxContainer = document.querySelector(".box-container");
const heroTextContainerr = document.querySelector(".hero-text-container");
const heroImageContainerr = document.querySelector(".hero-image-container");
const authorName = document.querySelector(".name-text");
const jobTitleContainers = document.querySelectorAll(".job-title-container");
const jobTexts = document.querySelectorAll(".job-text");
const projectText = document.querySelector(".project-text");
const phones = document.querySelectorAll(".phone");
const laptop = document.querySelector(".laptop");
const githubContainer = document.querySelector(".github-container");
const thankYou = document.querySelector(".thank-you");

for (let i = 0; i < 369; i++) {
  const list = [
    0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
    205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
    211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
    133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
    259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
    260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
    144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
    24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
    270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
    316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
    156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
    79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
    283, 284, 285, 323, 324, 325, 326,
  ];

  const el = document.createElement("div");
  el.classList = list.includes(i) ? "box active" : "box";
  boxContainer.appendChild(el);
}

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  let viewportHeight = window.innerHeight;
  let videoHeight = viewportHeight * 2; // 200vh
  let scrollPercentage =
    (window.scrollY / (videoHeight - viewportHeight)) * 100;
  let fontSize = 1 + offsetY / 27 + "px";

  heroTextContainerr.style.transform = `translateY(${offsetY * 0.9}px)`;
  heroImageContainerr.style.transform = `translate(${-offsetY * 0.9}px, ${
    -offsetY * 0.9
  }px)`;
  WText.style.fontSize = fontSize;
  WText.style.transform = `translateX(${-offsetY * 0.9}px)`;
  authorName.style.transform = `translate(${-offsetY * 0.1}px,${
    -offsetY * 0.1
  }px)`;
  jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`;
  jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
  jobTexts[0].style.transform = `translateX(calc(300vh - ${offsetY}px))`;
  jobTexts[1].style.transform = `translateX(calc(-400vh + ${offsetY}px))`;
  projectText.style.transform = `translateY(calc(550vh - ${offsetY}px))`;
  phones[0].style.transform = `translateX(calc(550vh - ${offsetY}px))`;
  laptop.style.transform = `translateX(calc(-700vh + ${offsetY}px))`;
  phones[1].style.transform = `translateX(calc(810vh - ${offsetY}px))`;
  githubContainer.style.transform = `translate(calc(950vh - ${offsetY}px), calc(950vh - ${offsetY}px))`;
  thankYou.style.transform = `translate(calc(999vh - ${offsetY}px), calc(999vh - ${offsetY}px))`;

  if (scrollPercentage <= 25) {
    // For screens with scroll percentage less than or equal to 25%
    video.playbackRate = 1.0; // Normal speed to 1x
  } else if (scrollPercentage > 25 && scrollPercentage <= 50) {
    // For screens with scroll percentage between 25% and 50%
    video.playbackRate = 3.0; // Increase speed to 3x
  }

  if (window.innerWidth >= 768 && window.innerWidth <= 820) {
    heroImageContainerr.style.transform = `translateX(${offsetY * 0.9}px, ${
      offsetY * 0.9
    }px)`;
    authorName.style.transform = `translateX(${offsetY * 0.1}px)`;
    projectText.style.transform = `translateX(calc(-500vh + ${offsetY}px))`;
    phones[0].style.transform = `translateX(calc(510vh - ${offsetY}px))`;
    phones[1].style.transform = `translateX(calc(850vh - ${offsetY}px))`;
    githubContainer.style.transform = `none`;
  }

  if (window.innerWidth >= 360 && window.innerWidth <= 768) {
    let scrollPercentage =
      (window.scrollY / (videoHeight - viewportHeight)) * 100;
    let fontSize = 1 + offsetY / 55 + "px";

    heroImageContainerr.style.transform = `translate(${-offsetY * 0.9}px, ${
      -offsetY * 0.9
    }px)`;
    WText.style.fontSize = fontSize;
    WText.style.transform = `translateY(${offsetY * 0.1}px)`;
    authorName.style.transform = `translateX(${offsetY * 0.1}px)`;
    projectText.style.transform = `translateY(calc(500vh - ${offsetY}px))`;
  }
});
