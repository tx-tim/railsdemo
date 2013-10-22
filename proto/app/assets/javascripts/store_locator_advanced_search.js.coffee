$ ->
  $el = $(".prog-disclosure")

  $(".prog-disclosure .prog-disclosure-title").click ->
    $el.toggleClass "active"