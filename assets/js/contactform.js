const scriptURL = 'https://script.google.com/macros/s/AKfycbyA7_SBKeFMWAkW2RDr3jk4UO-oQfKdXi909SjpIZYeN3W-buLJ8GRX6Ag0BrVfxYWMGQ/exec'

            const form = document.forms['Contact-sheet']
            
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("Thanks for Contacting us! We Will Contact You Soon..." ))
              .then(() => { window.location.reload(); })
              .catch(error => console.error('Error!', error.message))
            })