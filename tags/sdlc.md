---
layout: tag
title: Sdlc
tag: sdlc
permalink: /tags/sdlc/
---
<h1>Posts tagged with "Sdlc"</h1>
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