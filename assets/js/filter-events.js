function hideEventsBefore(beforeDate) {
  const events = document.querySelectorAll('.events-list li');

  events.forEach(event => {
    event.style.display = 'none';
  });

  events.forEach(event => {
    if (isEventAfter(event, beforeDate)) {
      event.style.display = 'block';
    }
  });
}

function isEventAfter(event, date) {
  console.log("now is "+ date)

  const dateAttribute = event.getAttribute("event-date")
  console.log("raw event: "+ event.getAttribute("id") + " has date attribute:" + dateAttribute)
  if (dateAttribute) {

    const dateEvent = Date.parse(dateAttribute)

    const result = dateEvent > date
    console.log("event: "+ event.getAttribute("id") + " has time " + dateEvent +" and shall be shown " + result)
    return result
  }
  return true;
}

function hideByType(now) {
  const filterLinks = document.querySelectorAll('.filter-link');

  // Event listener for filter links
  filterLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // event.preventDefault();

      // Get the filter type from the data-type attribute of the clicked link
      const filterType = this.getAttribute('data-type');

      const allEvents = document.querySelectorAll('.events-list li')

      // Show all events if the filter type is "all", otherwise, filter events
      const eventsToShow = filterType === 'all'
        ? allEvents
        : document.querySelectorAll(`.events-list li[data-type="${filterType}"]`);

      // Hide all events
      allEvents.forEach(event => {
        event.style.display = 'none';
      });

      // Show the filtered events
      eventsToShow.forEach(event => {
        // if (isEventAfter(event, now)) {
        //   event.style.display = 'block';
        // }
        event.style.display = 'block';
      });
    });
  });


}