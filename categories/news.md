---
layout: category
title: "News"
category: "news"
permalink: /categories/news/
---
<h1>Posts categoryged with "News"</h1>
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
