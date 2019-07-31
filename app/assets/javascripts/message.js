$(function(){
  function buildHTML(message){
    var content = message.content ? `${message.content}` : "";
    var img = message.image ? `<img src= ${message.image}>` : "";
    var html = `<div class='message', message-id= "${message.id}" >
                  <div class='upper-message'>
                    <div class='upper-message__user-name'>
                      ${message.user_name}
                    </div>
                    <div class='upper-message__date'>
                      ${message.date}
                    </div>
                  </div>
                  <div class='lower-message'>
                    <p class='lower-message__content'>
                      ${content}
                    </p>
                    ${img}
       
                  </div>
                 </div>`
                       
    return html;
  }
  function scroll(){
    $('.main__messages').animate({scrollTop:
    $('.main__messages')[0].scrollHeight},'fast');  
  }

  $(function(){
    $('#new_message').on('submit', function(e){
      e.preventDefault();
        var formData = new FormData(this);
        var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done(function(data){
      
      var html = buildHTML(data);
      
      $('.main__messages').append(html);
      $('.form__blank').val('');
      $('.form__submit').prop('disabled', false);
    
      scroll();
    })
      
    .fail(function(data){
      alert('error'); 
    })
    .always(function(data){
      $('.form__blank').prop('disabled', false);
    })
  })
  })
});
  