document.addEventListener("DOMContentLoaded", function () {
    showStep(1);
});

function showStep(step) {
    document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
    document.getElementById(`step${step}`).classList.add("active");
}

function nextStep(step) {
    if (step === 4) {
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (!service || !date || !time || !name || !email) {
            alert("Please fill all the details!");
            return;
        }

        document.getElementById("confirmationText").innerHTML = `
        <strong>Services :</
        strong> ${service}<br>
        <strong>Date:</
        strong>${date}<br>
        <strong>Time :</
        strong> ${time}<br>
        <strong>Name:</
        strong>${name}<br>
        <strong>Email:</
        strong>${email}<br>
        ` ;
        }
    showStep(step);
}

function prevStep(step) {
    showStep(step);
}

document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("successMessage").classList.remove("hidden");
});