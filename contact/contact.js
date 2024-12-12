const socialIcontems = [
    {   
        icon: "/assets/contactAssets/socialIcons/facebook.svg",
        heading: "Facebook",
    },
    {   
        icon: "/assets/contactAssets/socialIcons/insta.svg",
        heading: "Instagram",
    },
    {   
        icon: "/assets/contactAssets/socialIcons/tiktock.svg",
        heading: "TickTok",
    },
    {   
        icon: "/assets/contactAssets/socialIcons/youtube.svg",
        heading: "Youtube",
    },
    {   
        icon: "/assets/contactAssets/socialIcons/linkedin.svg",
        heading: "Linkedin",
    },
]

const socialIconSection = document.getElementsByClassName('social-icon-section');
// Generate and inject HTML
socialIcontems.forEach(item => {
    const html = `
        <div class="d-flex flex-column align-items-start">
            <div class="social-preIcon-wrapper">
                <img class="pre-icon default-img" src=${item.icon}>
            </div>
            <h1 class="section-heading social-font dark-font m-0 py-1">${item.heading}</h1>
        </div>`;
    
    // Append the HTML string to the extensiveCareSection
    socialIconSection[0].innerHTML += html;
});