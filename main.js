var typed= new Typed('.text', {
    strings: ["Web Developer","Coder " ,"DataBase Engineer" , "Graphic Designer" , "3D Artist" , "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyVZtkaxE0kWv-EPsBWQGL5E0CSUDziux1alDlUK6MphKhdnGrJLfEX_hvfHGxv_WOF/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

document.addEventListener("DOMContentLoaded", function() {
  const form = document.forms['submit-to-google-sheet'];
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting and redirecting

      const name = form['Name'].value.trim();
      const email = form['Email'].value.trim();
      const number = form['Number'].value.trim();
      const subject = form['Subject'].value.trim();
      const message = form['Message'].value.trim();
      
      if (!name || !email || !number || !subject || !message) {
          alert("Please fill all spaces.");
      } else {
          alert("Thank you! Your message has been sent.");
          // Optionally, clear the form fields
          form.reset();
      }
  });
});
