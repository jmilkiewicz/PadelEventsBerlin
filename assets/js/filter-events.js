function hideEventsBefore(beforeDate) {
  const events = document.getElementById("events-list").getElementsByTagName('li');
  for (let event of events) {
    const dateAttribute = event.getAttribute("event-date")
    if (dateAttribute) {
      const dateEvent = Date.parse(dateAttribute)
      if(dateEvent < beforeDate){
        event.style.display = 'none';
      }
    }
  }
}
