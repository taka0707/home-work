$(function(){
  function buildHTML(message){
      let html = `<div class="content">
                    <div class="message">
                      ${message.content}
                    </div>
                    <div class="content_info">
                      <div class="content_user_name">
                        ${message.user_name}
                      </div>
                      <div class="content_date">
                        ${message.created_at}
                      </div>
                    </div>
                  </div>`
    return html;
  }

  $('.form__box').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Main__contents').prepend(html);
      $('form')[0].reset();
      $('.Main__contents').animate({ scrollTop: $('.Main__contents')[0].scrollHeight});
      $('.form_btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.form_btn').prop('disabled', false);
    });  
  });

  
});