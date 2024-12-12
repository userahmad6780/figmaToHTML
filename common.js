const milestonesItems = [
    {
        value: "15 M+",
        text: "Active Users"
    },
    {
        value: "3 K+",
        text: "Health Providers"
    },
    {
        value: "2 M+",
        text: "Downloads from app stores"
    },
    {
        value: "4.7",
        text: "Rating out of 5"
    }
];

const milestonesCategorySection = document.getElementsByClassName('milestones-category');
// Generate and inject HTML
milestonesItems.forEach(item => {
    const html = `
        <div class="milestones-item-container">
            <h1 class="section-heading quaternary-font light-font">${item.value}</h1>
            <h1 class="section-heading milestones-subHeading dark-font">${item.text}</h1>
        </div>`;
    
    // Append the HTML string to the milestonesCategorySection
    milestonesCategorySection[0].innerHTML += html;
});
