const events = [
    {
        title: "AI & Machine Learning Workshop",
        date: "2026-11-25",
        details: "Learn the basics of AI and ML with hands-on projects.",
        type: "Workshop"
    },
    {
        title: "Cybersecurity Seminar",
        date: "2026-12-05",
        details: "Understand modern cybersecurity threats and solutions.",
        type: "Seminar"
    },
    {
        title: "Web Development Bootcamp",
        date: "2026-12-15",
        details: "Master HTML, CSS, and JavaScript in an intensive session.",
        type: "Workshop"
    }
];

function loadEvents() {
    const eventsSection = document.getElementById("events");
    events.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("event-card");
        card.innerHTML = `
            <h3>${event.title}</h3>
            <p class="event-date">${new Date(event.date).toDateString()}</p>
            <p>${event.details}</p>
            <p><strong>Type:</strong> ${event.type}</p>
        `;
        eventsSection.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadEvents);
