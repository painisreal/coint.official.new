const scriptURL = 'https://script.google.com/macros/s/AKfycbwE24PtvhMpPJ0keykeLvBt9AcN-J8nh7Pyhr2Wradlw0qukmgITE6uEjSrtPF15lAe/exec'
const form = document.forms['coint']
const msgtr = document.getElementById('msgtr');
const msgr = document.getElementById('msgr');
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msgr.innerHTML = "Message Sent."
        setTimeout(function(){
                msgr.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
    })
    
    if (msgr.innerHTML == "") {
      function timemsg(){
        msgtr.innerHTML = "Sending....."
        setTimeout(function(){
                msgtr.innerHTML = ""
        },3000)
    }}
