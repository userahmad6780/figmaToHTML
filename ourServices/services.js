const extensiveCareItems = [
    {   
        icon: "/assets/servicesAssets/extensiveCareIcons/personalized.svg",
        heading: "Personalized Wellness Programs",
        subHeading: "Custom health and fitness plans designed to meet individual needs, including mental and physical health components.",
    },
    {   
        icon: "/assets/servicesAssets/extensiveCareIcons/emergency.svg",
        heading: "Emergency Response Integration",
        subHeading: "Connecting users to emergency services or facilitating quick medical responses during urgent health situations.",
    },
    {   
        icon: "/assets/servicesAssets/extensiveCareIcons/health.svg",
        heading: "Health Insurance Solutions",
        subHeading: "Offering tailored health and life insurance plans, including digital management tools for easy access and claims processing. ",
    },
    {   
        icon: "/assets/servicesAssets/extensiveCareIcons/health-monitoring.svg",
        heading: "Health Monitoring Tools",
        subHeading: "Providing users with digital tools to track their vitals, medical history, and progress with personalized health plans.",
    },
    {   
        icon: "/assets/servicesAssets/extensiveCareIcons/corporate.svg",
        heading: "Corporate Health Solutions",
        subHeading: "Providing businesses with comprehensive wellness programs, health benefits, and employee care solutions. ",
    },
    {   
        icon: "/assets/servicesAssets/extensiveCareIcons/OPD.svg",
        heading: "OPD Care System",
        subHeading: "Efficient, digital-driven OPD solutions that streamline patient management and care.",
    },
];

const extensiveCareSection = document.getElementsByClassName('extensive-care-solutions');
// Generate and inject HTML
extensiveCareItems.forEach(item => {
    const html = `
        <div class="extensiveCare-item-container d-flex flex-column align-items-start">
            <div class="extensive-preIcon-wrapper">
                <img class="pre-icon default-img" src=${item.icon}>
            </div>
            <h1 class="section-heading extensiveCare-font dark-font m-0 py-1" style="text-align:start;">${item.heading}</h1>
            <h1 class="section-heading secondary-font detail-subheading dark-font" style="text-align:start">${item.subHeading}</h1>
        </div>`;
    
    // Append the HTML string to the extensiveCareSection
    extensiveCareSection[0].innerHTML += html;
});


const telemedicineSection = document.getElementById('telemedicine-section-subheading');
telemedicineSection.innerText = "Providing remote consultations with licensed healthcare professionals across various specialties. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

const familySection = document.getElementById('family-section-subheading');
familySection.innerText = "Manage and track medical info for you and your family, including vitals, appointments, and medical history in one place. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

const perscriptionSection = document.getElementById('perscription-section-subheading');
perscriptionSection.innerText = "Offering digital prescription services where users can consult, receive prescriptions, and manage their medications. Lorem ipsum dolor sit amet, aliqua."

const assistanceSection = document.getElementById('assistance-section-subheading');
assistanceSection.innerText = "Using advanced AI technology to provide instant health advice, symptom checking, and personalized care recommendations. Lorem ipsum dolor sit amet, consectetur adipiscing aliqua."

