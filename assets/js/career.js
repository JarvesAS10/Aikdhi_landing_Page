const scriptURL = 'https://script.google.com/macros/s/AKfycbxsTPH_yREqQR0eVl1GUDqFXBaZDb63AeiKq3CsrHXDvAT4_HLjx-M5NHEbezxeno855g/exec'

            const form = document.forms['Career-sheet']
            
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("Thanks for Contacting us! We Will Contact You Soon..." ))
              .then(() => { window.location.reload(); })
              .catch(error => console.error('Error!', error.message))
            })