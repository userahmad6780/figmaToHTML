const careFeatureItems = [
    {   
        icon: "/assets/homeAssets/careFeatureIcons/heart.svg",
        heading: "Insurance Tech Suite",
        subHeading: "Streamline insurance operations with advanced digital tools. Simplify claims, policies, and customer management effortlessly.",
        arrow: "/assets/homeAssets/careFeatureIcons/arrow.svg",
    },
    {   
        icon: "/assets/homeAssets/careFeatureIcons/card.svg",
        heading: "Smart OPD Care System",
        subHeading: "Experience seamless outpatient care with our smart, digital-driven OPD solutions. Improve patient management and efficiency.",
        arrow: "/assets/homeAssets/careFeatureIcons/arrow.svg",
    },
    {
        icon: "/assets/homeAssets/careFeatureIcons/health.svg",
        heading: "Adaptable Health & Life Benefits",
        subHeading: "Tailor health and life plans to your organization's needs. Flexible solutions for comprehensive employee coverage.",
        arrow: "/assets/homeAssets/careFeatureIcons/arrow.svg",
    },
    {
        icon: "/assets/homeAssets/careFeatureIcons/heart.svg",
        heading: "Client-Centric Health Products",
        subHeading: "Discover affordable health products designed to build and sustain long-term client relationships.",
        arrow: "/assets/homeAssets/careFeatureIcons/arrow.svg",
    },
    {
        icon: "/assets/homeAssets/careFeatureIcons/program.svg",
        heading: "Integrated Wellness Programs",
        subHeading: "Promote workplace well-being with customized digital wellness solutions for healthier, happier employees.",
        arrow: "/assets/homeAssets/careFeatureIcons/arrow.svg",
    }
];

const careFeatureSection = document.getElementsByClassName('care-feature');
// Generate and inject HTML
careFeatureItems.forEach(item => {
    const html = `
        <div class="careFeature-item-container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex">
                    <img class="pre-icon" src=${item.icon} style="margin-right: 6px">
                    <h1 class="section-heading careFeature-font dark-font m-0" style="text-align:start">${item.heading}</h1>
                </div>
                <img class="post-icon" src=${item.arrow}>
            </div>
            <span class="margin-small d-block"></span>
            <h1 class="section-heading care-feature-subHeading dark-font" style="text-align:start">${item.subHeading}</h1>
        </div>`;
    
    // Append the HTML string to the careFeatureSection
    careFeatureSection[0].innerHTML += html;
});

const keyFeatureItems = [
    {   
        icon: "/assets/homeAssets/keyFeatureIcons/consult.svg",
        heading: "Consult Doctor",
        subHeading: "Talk to licensed doctors anytime, anywhere. Get expert advice, prescriptions, or second opinions through audio calls, video calls or chat.",
    },
    {   
        icon: "/assets/homeAssets/keyFeatureIcons/medicine.svg",
        heading: "Medicine",
        subHeading: "Get digital prescriptions and order over-the-counter medicines effortlessly. Enjoy quick delivery and free reminders for refills.",
    },
    {
        icon: "/assets/homeAssets/keyFeatureIcons/pharmacy.svg",
        heading: "Pharmacy",
        subHeading: "Explore a complete range of health and wellness products. Convenient shopping with trusted quality guaranteed.",
    },
    {
        icon: "/assets/homeAssets/keyFeatureIcons/vitals.svg",
        heading: "Vitals",
        subHeading: "Monitor key health metrics like blood pressure, sugar levels or BMI. Get personalized insights to manage your health better.",
    },
    {
        icon: "/assets/homeAssets/keyFeatureIcons/family.svg",
        heading: "Family Records & Checkups",
        subHeading: "Manage & track your family’s medical history effortlessly with our secure and reliable e-health records system.",
    },
    {
        icon: "/assets/homeAssets/keyFeatureIcons/lab.svg",
        heading: "Lab Tests",
        subHeading: "Book diagnostic tests easily and avoid long queues. Receive accurate, fast results directly in the app.",
    }
];

const keyFeatureSection = document.getElementsByClassName('key-feature');
// Generate and inject HTML
keyFeatureItems.forEach(item => {
    const html = `
        <div class="keyFeature-item-container">
                <div class="d-flex align-items-start">
                    <img class="pre-icon" src=${item.icon} style="margin-right: 6px">
                    <div>
                        <h1 class="section-heading keyFeature-font dark-font m-0" style="text-align:start; opacity: 33%">${item.heading}</h1>
                        <h1 class="section-heading key-feature-subHeading dark-font" style="text-align:start">${item.subHeading}</h1>
                    </div>
                </div>
        </div>`;
    
    // Append the HTML string to the keyFeatureSection
    keyFeatureSection[0].innerHTML += html;
});
