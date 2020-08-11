---
layout: archive
permalink: /Computer-Vision/
title: "ComputerVision"
author_profile: true
header:
  image: "/assets/images/computer_vision.jpg"
entries_layout: grid
classes: wide
---
## Latest Stories

<div class="grid__wrapper">
  {% assign collection = 'Computer-Vision' %}
  {% assign posts = site[collection] | reverse %}
  {% for post in posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>