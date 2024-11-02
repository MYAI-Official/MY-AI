document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Gather form data
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        timezone: document.getElementById("timezone").value,
        location: document.getElementById("location").value,
        notes: document.getElementById("notes").value
    };

    // Send data to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbx50g8g_076fJMA3uvjUKPEUAppbapyCfsQ_QW1f0P2DDrE7R0qhVPTLMAACii9azPOWg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Your appointment has been scheduled!");
        document.querySelector("form").reset(); // Clear the form
    })
    .catch(() => {
        alert("There was an error scheduling your appointment. Please try again.");
    });
});

// Add this JavaScript to prevent scroll propagation
document.querySelector('.form-scroll-container').addEventListener('wheel', function(e) {
    const scrollTop = this.scrollTop;
    const scrollHeight = this.scrollHeight;
    const height = this.clientHeight;
    
    if ((scrollTop === 0 && e.deltaY < 0) || 
        (scrollTop + height >= scrollHeight && e.deltaY > 0)) {
        return;
    }
    
    e.stopPropagation();
    e.preventDefault();
    
    // Smooth scroll
    this.scrollTo({
        top: scrollTop + e.deltaY,
        behavior: 'smooth'
    });
});
