function addChangeLanguage() {

  const events = document.querySelectorAll('.events-list li');
  events.forEach(event => {
    const toggleButtons = event.querySelectorAll('.toggle-language');

    toggleButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Get the selected language
        const selectedLanguage = this.getAttribute('data-lang');

        // Find the parent event description container
        const eventDescriptions = event.querySelectorAll('.event-description');

        // Loop through child elements to toggle display based on language
        eventDescriptions.forEach(description => {
          const lang = description.getAttribute('data-lang');

          if (lang === selectedLanguage) {
            description.style.display = 'block';
          } else {
            description.style.display = 'none';
          }
        });
      });
    })

  })
};