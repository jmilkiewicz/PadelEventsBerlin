function hideEventsBefore(beforeDate) {
  const eventsTable = document.getElementById("events");
  for (let row of eventsTable.rows) {
    const dateAttribute = row.getAttribute("event-date")
    if (dateAttribute) {
      const dateEvent = Date.parse(dateAttribute)
      if(dateEvent < beforeDate){
        row.style.display = 'none';
      }
    }
  }
}
