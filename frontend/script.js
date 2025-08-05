console.log("Script loaded"); //debug

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const status = document.getElementById('status');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        //get email value
        const email = form[0].value.trim();

        status.innerText = 'Sending...';

        try {
            //send to backend
            const response = await fetch('http://localhost:5000/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email})
            });

            if (response.ok) {
                status.innerHTML = `Check <strong>${email}</strong> to confirm your subscription!`;
            } else {
                const data = await response.json();
                status.innerText = `Error: ${data.error}`;
            }
        } catch (err) {
            status.innerText = 'Failed to connect to server.';
            console.error('FetchError:', err);
        }

        //clear form
        form.reset();

    });
});