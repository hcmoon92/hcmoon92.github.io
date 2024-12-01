---
layout: tag
title: "Sqa"
tag: "sqa"
permalink: /tags/sqa/
---
<h1>Posts tagged with "Sqa"</h1>
<ul>
  {% for post in site.posts %}
    {% if post.tags contains page.tag %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span>{{ post.date | date: "%B %d, %Y" }}</span>
      </li>
    {% endif %}
  {% endfor %}
</ul>
