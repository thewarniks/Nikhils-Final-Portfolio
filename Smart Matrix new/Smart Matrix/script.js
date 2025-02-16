gsap.to("jumar", {
    scrollTrigger: {
        trigger: "jumar",
        scrub: 3,
    }
});

gsap.to("#nav", {
    backgroundColor: "rgba(240, 248, 255, 1)",
    duration: 7,
    height: "60px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -70%",
        scrub: 2,
    },
});

// Sample data for the efficiency chart
const preloader = document.querySelector(".loader-box");

window.addEventListener("Load", () => {
    preloader.style.display = "none";
})

const efficiencyData = {
    labels: ['Room No.1', 'Room No.2', 'Room No.3', 'Room No.4', 'Room No.5'],
    datasets: [{
        label: 'Electricity Saved (%)',
        data: [75, 60, 80, 65, 70],
        backgroundColor: 'rgba(34, 197, 94, 0.6)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
    }]
};

// Create the efficiency chart
const ctx = document.getElementById('efficiencyChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: efficiencyData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// footer

