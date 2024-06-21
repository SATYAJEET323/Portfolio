var typed= new Typed('.text', {
    strings: ["Web Developer","Full Stack Developer","Coder " ,"DataBase Engineer" , "Graphic Designer" , "3D Artist" , "UI/UX Designer"],
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
