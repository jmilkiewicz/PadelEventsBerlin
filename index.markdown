---
title: Padel Events in Berlin
layout: default
---
<script src="{{ base.url | prepend: site.url }}/assets/js/filter-events.js"></script>
<script>
window.onload = function(){
    hideEventsBefore(Date.now());
}
</script>

# Upcoming Padel Events in Berlin
{% assign events = site.data.events | sort: 'date' %}
<ul class="events-list" id="events-list">
{% for event in events %}
<li event-date="{{ event.registration_till}}">
    <h2> {% include eventType.html type=event.type %}
{{ event.id }}</h2>
    <div class="event-details">
        {% include eventDate.html date=event.date %} 
        {% include eventLocation.html id=event.location %}
    </div>
    {% include eventLink.html link=event.link %}
    <p class="event-description">{{ event.description }}</p>
 </li>   
{% endfor %}
</ul>

*To receive notification on ALL padel events happening in Berlin join our <a href="https://chat.whatsapp.com/DMy3rVa6NHdDgQZi2pmtmi">whatsapp</a>* 





