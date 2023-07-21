---
title: Padel Events in Berlin layout: default
---
<script src="{{ base.url | prepend: site.url }}/assets/js/filter-events.js"></script>

# Upcoming Padel Events in Berlin

<style type="text/css">
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
  font-size: 16px;
  color: #007bff; /* Choose a color that fits your design */
  text-decoration: none;
}

/* Style event location link on hover (optional) */
.events-list li .event-location:hover {
  text-decoration: underline;
}

/* Style event kind */
.events-list li .event-kind {
  font-size: 16px;
}

/* Style event description */
.events-list li .event-description {
  font-size: 16px;
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

/* Mobile-friendly styles */
@media (max-width: 767px) {
  .events-list li {
    padding: 5px; /* Decrease padding for smaller screens */
  }

  .events-list li h2 {
    font-size: 20px; /* Decrease font size for smaller screens */
  }
 
  .events-list li .event-link {
  font-size: 16px;
  color: #fff; /* Text color for the link */
  background-color: #007bff; /* Background color for the link */
  padding: 8px 12px; /* Add some padding to create a button-like appearance */
  border-radius: 4px; /* Add rounded corners */
  text-decoration: none;
  }

.events-list li .event-link:hover {
  background-color: #ff5722; /* Change background color on hover */
}

}

</style>

{% assign events = site.data.events | sort: 'date' %}


<ul class="events-list">
{% for event in events %}
<li event-date="{{ event.date}}">
    <h2> {% include eventType.html type=event.type %}
{{ event.id }}</h2>
    <div class="event-details">
        <p class="event-date">{{ event.date | date: "%-d %b %Y"}}</p>
        {% include locations.html id=event.location %}
    </div>
    <p class="event-description">{{ event.description }}</p>
    {% include eventLink.html link=event.link %}
 </li>   
{% endfor %}
</ul>





