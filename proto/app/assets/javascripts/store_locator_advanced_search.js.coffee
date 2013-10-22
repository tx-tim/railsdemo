$ ->
  $el = $(".prog-disclosure")

  $(".prog-disclosure .prog-disclosure-title").click ->
    $el.toggleClass "active"

  $("a[href*=#]:not([href=#])").click ->
    if location.pathname.replace(/^\//, "") is @pathname.replace(/^\//, "") and location.hostname is @hostname
      target = $(@hash)
      target = (if target.length then target else $("[name=" + @hash.slice(1) + "]"))
      if target.length
        $("html,body").animate
          scrollTop: target.offset().top
        , 300
        false

