AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [{
    title: "GO Backend Developer Of E-Gov Gateway (ШЭП)",
    cardImage: "assets/images/experience-page/nitec.png",
    place: "«NATIONAL INFORMATION TECHNOLOGIES» JSC",
    time: "(January, 2024 - June, 2024)",
    desp: "<li>Developed and optimized CRUD functionalities for the Electronic Government Gateway's administrative interface, enhancing efficiency and user experience.</li><li>Implemented a streamlined process for downloading certificates, ensuring secure and rapid access for end-users.</li><li>Enhanced system performance and reliability through the development and execution of comprehensive unit tests.</li>",
}, ];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
        (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [{
        title: "Chef Days Show Astana 2024",
        cardImage: "assets/images/experience-page/chef_day.png",
        description: "Volunteered at the Chef Days Show Astana 2024 (17-18 February), a culinary event showcasing over 50 chefs and featuring cooking demonstrations, product exhibitions, and industry talks.",
    },
    {
        title: "FIDE World Chess Championship 2023 Astana",
        cardImage: "assets/images/experience-page/fide.png",
        description: "Volunteered at the FIDE World Chess Championship 2023 Astana (7 April - 1 May), an international chess tournament featuring the world's top players.",
    },
    {
        title: "IT Fest 2023 Astana",
        cardImage: "assets/images/experience-page/itfest.jpg",
        description: "Participated in IT Fest 2023 Astana, a dynamic event held in celebration of the 25th anniversary of the NNEF Public Foundation."
    },
    {
        title: "2024 IEEE AITU: Digital Generation Conference",
        cardImage: "assets/images/experience-page/ieee.jpg",
        description: "Volunteered at the IEEE (4-5 April), the conference convened scientific papers from a range of countries, such as Kazakhstan, India, Ukraine, Pakistan, Germany, Bangladesh, and Malaysia.",
    }, {
        title: "2024 IEEE SIST International Conference",
        cardImage: "assets/images/experience-page/ieeesist.jpg",
        description: "The 2024 IEEE 4th International Conference on Smart Information Systems and Technologies (SIST)"
    }
];

const showCards = () => {
    let output = "";
    volunteershipcards.forEach(
        ({ title, cardImage, description }) =>
        (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
    );
    volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [{
        title: "HackNU/24 2024",
        subtitle: "Participant",
        image: "assets/images/experience-page/hacknu.png",
        desp: "HackNU/24 is a 24-hour hackathon that brings together developers, designers, and entrepreneurs to create innovative solutions to real-world problems.",
        href: "https://hack.nuacm.kz",
    },
    {
        title: "NU OPEN 2023 January",
        subtitle: "Participant",
        image: "assets/images/experience-page/nuopen.png",
        desp: "NU OPEN - is the annual programming ICPC styled competition organized by NU ACM SC, which is aimed at promoting and developing competitive programming in Kazakhstan. ",
        href: "https://open.nuacm.kz",
    },
    {
        title: "AITU OPEN 2023",
        subtitle: "Participant",
        image: "assets/images/experience-page/aituopen.png",
        desp: "AITU OPEN - team Olympiad in sports programming! At the competition, tasks on algorithmic programming will be offered that correspond to the level of scientific content and mathematics, and require knowledge of algorithms and data structures to complete.",
        href: "https://aituopen.astanait.edu.kz",
    },
    {
        title: "Proggy Buggy 2024 May",
        subtitle: "Participant",
        image: "assets/images/experience-page/pbmay.png",
        desp: "Proggy-Buggy is a programming Olympiad organized by DataArt. It has been running since 2014, attracting over 10,000 participants from 60 countries. The competition, held twice a year, consists of 13 algorithmic problems that participants must solve within a 42-minute time limit.",
        href: "https://www.proggy-buggy.com",
    }
];

const showCards3 = () => {
    let output = "";
    mentor.forEach(
        ({ title, image, subtitle, desp, href }) =>
        (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
    );
    hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);