var allButtons = $('#navbuttons > ul > li')
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (x) {
    $(x.currentTarget).addClass('active').siblings('.active').removeClass('active')
    var p = $(x.currentTarget).index() * -920
    $('#rollimages').css({
      transform: 'translate(' + p + 'px)'
    })
    console.log(p)

  })
}
