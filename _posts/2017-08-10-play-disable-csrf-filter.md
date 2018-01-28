---
layout: post
title: Как отключить CSRF-фильтр в Play Framework 2.6.x?
tags: [scala, play]
author: voronkin
comments: true
published: true
---
Вопрос: как отключить CSRF-фильтр в Play Framework 2.6.x?

Ответ: добавить строку в conf\application.conf
``play.filters.disabled+=play.filters.csrf.CSRFFilter``