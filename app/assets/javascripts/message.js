$(function() {
  function buildSendMessageHTML(message){
    var image = message.image == null ? "" : `<img src="${message.image}" class="main__Body--image">`
    var html = `<div class="main__Body--main clearfix">
                  <div class="main__Body--name">
                    ${message.user_name}
                  </div>
                  <div class="main__Body--date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="main__Body--text">
                    <p class="main__Body--content">
                      ${message.body}
                    </p>
                    ${image}
                </div> `
        return html;
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = window.location.href
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(Messagedata) {
      var html = buildSendMessageHTML(Messagedata);
      $('.main__Body').append(html);
      $('.main__Footer--submit').prop( "disabled", false );

      $('.main__Body').animate({scrollTop: $('.main__Body')[0].scrollHeight}, 'fast');
      $('.main__Footer--placeholder').val('');
      $('hidden').val('');
      })
    .fail(function(){
      alert('メッセージの送信に失敗しました');
    })
  })
});

