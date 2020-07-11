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


  $('.form__content').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $('.Modal').fadeIn('slow');
    $('.Modal__content').on('click', '.send', function(e) {
      e.preventDefault()
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
          $('.Modal').fadeOut();
          $('.Main__contents').prepend(html);
          $('form')[0].reset();
          $('.Main__contents').animate({ scrollTop: $('.Main__contents')[0].scrollHeight});
          $('.form_btn').prop('disabled', false);
          });
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
        $('.form_btn').prop('disabled', false);
      })
    })
    
  
  
  $('.Modal__content').on('click', '.close', function(e) {
    e.preventDefault()
    $('.Modal').fadeOut();
    $('.form_btn').prop('disabled', false);
  });

    

  $('.content').mouseover(function() {
    $(this).animate({ color: 'rgb(255,255,255)'}, { duration: 'fast'});
    $(this).animate({ backgroundColor: 'rgb(151,209,228)'}, { duration: 'fast'});
    
  })

  $('.content').mouseleave(function() {
    $(this).animate({ color: 'rgb(0,0,0)'}, { duration: 'fast'});
    $(this).animate({ backgroundColor: 'rgb(255,255,255)'}, { duration: 'fast'});
    
  })
});