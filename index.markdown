---
title: home 
layout: default
---

# Padel Events in Berlin

##  Upcoming events:

{% assign events = site.data.events | sort: 'date' %}

 <ul class="post-list">
{% for event in events %}
  <li class="">
    <span class="post-list-heading">{{ event.date}} {% include eventType.html type=event.type %}
{{ event.id }}
</span>

<h3 class="post-content">
 {{ event.description }}
</h3>
<h4>
{% include locations.html id=event.location %}
</h4>
<h4>
{% include eventLink.html link=event.link %}
</h4>

  </li>
{% endfor %}
</ul>


