---
title: Padel Events in Berlin layout: default
---
<script src="{{ base.url | prepend: site.url }}/assets/js/filter-events.js"></script>
<script>
window.onload = function(){
    hideEventsBefore(Date.now());
}
</script>
<style>
/* Reset default padding and margin for list items and body */
body, ul, li {
  margin: 0;
  padding: 0;
}

/* Style the event list */
.events-list {
  list-style: none;
}

/* Add a border and some spacing between each event item */
.events-list li {
  margin-bottom: 20px;
  border: 1px solid #ccc; /* Add a border to visually separate events */
  padding: 10px;
}

/* Style event name */
.events-list li h2 {
  font-size: 24px;
}

/* Style event date and location container */
.events-list li .event-details {
  display: flex; /* Use flexbox to align items horizontally */
  justify-content: space-between; /* Add space between date and location */
  align-items: center; /* Center items vertically within the container */
}

/* Style event date */
.events-list li .event-date {
  font-size: 16px;
  font-style: italic;
}

/* Style event location link */
.events-list li .event-location {
  font-size: 14px;
  color: #007bff; /* Choose a color that fits your design */
  text-decoration: none;
}

/* Style event location link on hover (optional) */
.events-list li .event-location:hover {
  text-decoration: underline;
}

/* Style event link */
.events-list li .event-link {
  font-size: 16px;
  color: #007bff; /* Choose a color that fits your design */
  text-decoration: none;
}

/* Adjust link style on hover (optional) */
.events-list li .event-link:hover {
  text-decoration: underline;
}

/* Style event description */
.events-list li .event-description {
  font-size: 16px;
}

/* Mobile-friendly styles */
@media (max-width: 767px) {
  .events-list li {
    padding: 5px; /* Decrease padding for smaller screens */
  }

  .events-list li h2 {
    font-size: 20px; /* Decrease font size for smaller screens */
  }

  .events-list li .event-location,
  .events-list li .event-link {
    font-size: 14px; /* Decrease font size for smaller screens */
  }
}

</style>

# Upcoming Padel Events in Berlin
{% assign events = site.data.events | sort: 'date' %}


<ul class="events-list" id="events-list">
{% for event in events %}
<li event-date="{{ event.date}}">
    <h2> {% include eventType.html type=event.type %}
{{ event.id }}</h2>
    <div class="event-details">
        <p class="event-date">{{ event.date | date: "%-d %b %Y"}}</p>
        {% include locations.html id=event.location %}
    </div>
    <p class="event-link">{% include eventLink.html link=event.link %}</p>
    <p class="event-description">{{ event.description }}</p>

 </li>   
{% endfor %}
</ul>





