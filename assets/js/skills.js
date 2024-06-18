AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [{
        langImage: "assets/images/techstack-page/go.png",
        langName: "Go",
        langDesc: "<li>Go is a statically typed, compiled programming language designed at Google for building simple, reliable, and efficient web applications</li>",
    },
    {
        langImage: "assets/images/techstack-page/grpc.png",
        langName: "gRPC",
        langDesc: "<li>gRPC is a high-performance, open-source universal RPC framework</li>",
    }, {
        langImage: "assets/images/techstack-page/postgresql.png",
        langName: "PostgreSQL",
        langDesc: "<li>PostgreSQL is a powerful, open-source object-relational database system</li>",
    }, {
        langImage: "assets/images/techstack-page/mongodb.png",
        langName: "MongoDB",
        langDesc: "<li>MongoDB is a general-purpose, document-based, distributed database built for modern application developers and for the cloud era</li>",
    }, {
        langImage: "assets/images/techstack-page/html.png",
        langName: "HyperText Markup Language",
        langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
    },
    {
        langImage: "assets/images/techstack-page/css.png",
        langName: "Cascading Style Sheets",
        langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
    },
    {
        langImage: "assets/images/techstack-page/sass.png",
        langName: "SASS",
        langDesc: "<li>Sass is a preprocessor scripting language that is interpreted or compiled into CSS</li>",
    },
    {
        langImage: "assets/images/techstack-page/javascript.png",
        langName: "JavaScript",
        langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
    },
    {
        langImage: "assets/images/techstack-page/git.png",
        langName: "Git",
        langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
    },
    {
        langImage: "assets/images/techstack-page/react.png",
        langName: "React (learning)",
        langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
    },

];

const displayTechStacksCards = () => {
    const entireCardTemplate =
        techStack.map((stack) => {
            return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `
        }).join('');
    techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);

// Design
const designCards = document.querySelector(".design-box");
const design = [{
        langImage: "assets/images/techstack-page/ps.png",
        langName: "Adobe Photoshop",
        langDesc: "<li>Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS</li>",
    }, {
        langImage: "assets/images/techstack-page/figma.png",
        langName: "Figma",
        langDesc: "<li>Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows</li>",
    }, {
        langImage: "assets/images/techstack-page/ai.png",
        langName: "Adobe Illustrator",
        langDesc: "<li>Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc.</li>",
    }

];

const displayDesignCards = () => {
    const entireCardTemplate =
        design.map((stack) => {
            return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `
        }).join('');
    designCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayDesignCards);