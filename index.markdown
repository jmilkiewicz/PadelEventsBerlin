---
title: Padel Events in Berlin 
layout: default
---

# Upcoming Padel Events in Berlin:

{% assign events = site.data.events | sort: 'date' %}
<table>

{% for event in events %}
<tr><td>
    <span class="post-list-heading">{{ event.date | date: "%-d %b %Y"}} {% include eventType.html type=event.type %}
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
</td></tr>


<tr><td></td></tr>


{% endfor %}
</table>



