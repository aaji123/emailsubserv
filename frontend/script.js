document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const status = document.getElementById('status');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        //get email value
        const email = form[0].value.trim();

        status.innerHTML = `✅ Great! We'll send a confirmation to <strong>${email}</strong>.`;

        //clear form
        form.reset();


    });
});