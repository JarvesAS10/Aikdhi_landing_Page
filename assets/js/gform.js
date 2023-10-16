const scriptURL = 'https://script.google.com/macros/s/AKfycbzF02OSKaLbTop-gJ75WdPSN44CdX9MzRsNJgehaXDFAIGGnsoggp2PQZ5Fx8nU8e7sUg/exec'

            const form = document.forms['google-sheet']
            
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("Thanks for Contacting us! We Will Contact You Soon..." ))
              .then(() => { window.location.reload(); })
              .catch(error => console.error('Error!', error.message))
            })