---
title: Padel Events in Berlin
layout: default
---
<script src="{{ base.url | prepend: site.url }}/assets/js/filter-events.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function () {
    hideEventsBefore(Date.now());
    hideByType(Date.now());
});
</script>

# Upcoming Padel Events in Berlin

**To receive notifications for ALL padel events in Berlin, join our
<a href="https://chat.whatsapp.com/DMy3rVa6NHdDgQZi2pmtmi" class="global-whatsapp-link">
<img src="/assets/images/whatsapp.png" alt="WhatsApp Icon">WhatsApp group.
</a>**

<div class="filter-links">
    <a href="#all" class="filter-link" data-type="all">All 📅</a>
    <a href="#tournaments" class="filter-link" data-type="tournament">Tournaments {% include eventType.html type='tournament' %}</a>
    <a href="#courses" class="filter-link" data-type="course">Courses {% include eventType.html type='course' %}</a>
    <a href="#other" class="filter-link" data-type="other">Others {% include eventType.html type='other' %}</a>
</div>

{% assign events = site.data.events2 | sort: 'date' %}
<ul class="events-list" id="events-list">
{% for event in events %}
<li event-date="{{ event.registration_till}}" data-type="{{ event.type}}" id="{{ event.id }}">
    <h2> {% include eventType.html type=event.type %}
{{ event.name }}</h2>
    <div class="event-details">
        {% include eventDate.html date=event.date %} 
        {% include eventLocation.html id=event.location %}
    </div>
    {% include eventLink.html link=event.link %}
    <p class="event-description">{{ event.description }}</p>
 </li>   
{% endfor %}
</ul>





