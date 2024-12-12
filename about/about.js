const brandSection = document.getElementById('brand-section-subheading');
brandSection.innerText = "We are the pioneers of AI driven healthcare innovation, dedicated to simplify the access to medical services. At our core, we infuse technology with care to create a platform that connects patients, doctors, and healthcare providers in a seamless ecosystem. Our identity is rooted in trust, accessibility, and excellence — ensuring that every user experiences customized, reliable, and efficient care. With us, healthcare isn’t just a service; it’s a commitment to empowering healthier lives."

const exceptionalSection = document.getElementById('exceptional-section-subheading')
exceptionalSection.innerText = "Our mission is to bridge the gap between patients and healthcare providers, as we strive to make quality care accessible to everyone, anytime, anywhere. We are revolutionizing healthcare by providing smooth, accessible, and comprehensive digital health solutions. We aim to empower our consumers to take control of their well-being through AI driven technology, offering everything from appointments to accessible medical records — all in one place. We are creating a healthier, happier world!"

const storySection = document.getElementById('story-section-subheading')
storySection.innerText = "Our journey began with a simple yet profound idea: to make healthcare more accessible and impactful for everyone. Recognizing the challenges of traditional care systems, we set out to bridge the gap through innovative solutions. Along the way, we’ve achieved remarkable milestones, empowering countless individuals to prioritize their health. But our story is far from over—we’re just getting started."

const healthcareSection = document.getElementById('healthcare-section-subheading')
healthcareSection.innerText = "Our expertise delivers accessible, tech-driven healthcare solutions, from online consultations to wellness programs and insurance tech, designed to simplify and enhance your healthcare journey with quality and convenience."

const healthCareSolutionItems = [
    {   
        heading: "Telemedicine & Online Consultations",
        subHeading: "Providing remote consultations with licensed healthcare professionals across various specialties.",
    },
    {   
        heading: "AI-Driven Health Assistance",
        subHeading: "Using advanced AI technology to provide instant health advice, symptom checking, and personalized care recommendations.",
    },
    {   
        heading: "Health Insurance Solutions",
        subHeading: "Offering tailored health and life insurance plans, including digital management tools for easy access and claims processing.",
    },
    {   
        heading: "Personalized Wellness Programs",
        subHeading: "Custom health and fitness plans designed to meet individual needs, including mental and physical health components.",
    },
    {   
        heading: "Corporate Health Solutions",
        subHeading: "Providing businesses with comprehensive wellness programs, health benefits, and employee care solutions.",
    },
    {   
        heading: "Prescription Management",
        subHeading: "Offering digital prescription services where users can consult, receive prescriptions, and manage their medications.",
    },
    {   
        heading: "Health Monitoring Tools",
        subHeading: "Providing users with digital tools to track their vitals, medical history, and progress with personalized health plans.",
    },
    {   
        heading: "Emergency Response Integration",
        subHeading: "Connecting users to emergency services or facilitating quick medical responses during urgent health situations.",
    },
    {   
        heading: "Family Health Management",
        subHeading: "Manage and track medical info for you and your family, including vitals, appointments, and medical history in one place.",
    }
];

const healthCareSolutionsSection = document.getElementsByClassName('healthCare-solutions');
// Generate and inject HTML
healthCareSolutionItems.forEach(item => {
    const html = `
        <div class="healthCareItemSection mt-md-4">
            <h1 class="section-heading health-care-item-font dark-font m-0" style="text-align:start">${item.heading}</h1>
            <h1 class="section-heading secondary-font detail-subheading dark-font" style="text-align:start">${item.subHeading}</h1>
        </div>`;
    
    // Append the HTML string to the healthCareSolutionsSection
    healthCareSolutionsSection[0].innerHTML += html;
});