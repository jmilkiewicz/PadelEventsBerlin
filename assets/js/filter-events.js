
function hideEventsBefore(beforeDate) {
  const eventItems = document.querySelectorAll('.events-list li');
  
  eventItems.forEach(item => {
    const dateAttribute = item.getAttribute("event-date")
    if(dateAttribute){
      const dateEvent = Date.parse(dateAttribute)
      if(dateEvent < beforeDate){
        item.style.display = 'none';
      }
    }
  });
}

function hideByType(){
  const filterLinks = document.querySelectorAll('.filter-link');

  // Event listener for filter links
  filterLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // event.preventDefault();

      // Get the filter type from the data-type attribute of the clicked link
      const filterType = this.getAttribute('data-type');

      // Show all events if the filter type is "all", otherwise, filter events
      const eventsToShow = filterType === 'all'
        ? document.querySelectorAll('.events-list li')
        : document.querySelectorAll(`.events-list li[data-type="${filterType}"]`);

      // Hide all events
      document.querySelectorAll('.events-list li').forEach(event => {
        event.style.display = 'none';
      });

      // Show the filtered events
      eventsToShow.forEach(event => {
        event.style.display = 'block';
      });
    });
  });








}