---
layout: category
title: "Sqa"
category: "sqa"
permalink: /categories/sqa/
---
<h1>Posts categoryged with "Sqa"</h1>
<ul>
  {% for post in site.posts %}
    {% if post.categories contains page.category %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span>{{ post.date | date: "%B %d, %Y" }}</span>
      </li>
    {% endif %}
  {% endfor %}
</ul>
