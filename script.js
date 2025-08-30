
        document.getElementById('contact-form').addEventListener('submit', async function(event) {
            event.preventDefault();

            const form = event.target;
            const statusModal = document.getElementById('success-modal');
            const closeBtn = document.querySelector('.close-btn');

            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                statusModal.style.display = 'block';
                form.reset();
            } else {
                console.error('Form submission failed');
            }

            closeBtn.onclick = function() {
                statusModal.style.display = 'none';
            }

            window.onclick = function(event) {
                if (event.target == statusModal) {
                    statusModal.style.display = 'none';
                }
            }
        });