---
layout: archive
permalink: /Natural-Language-Processing/
title: "NLP"
author_profile: true
header:
  image: "/assets/images/nlp.jpg"
entries_layout: grid
classes: wide
---

## Latest Stories

<div class="grid__wrapper">
  {% assign collection = 'Natural-Language-Processing' %}
  {% assign posts = site[collection] | reverse %}
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>