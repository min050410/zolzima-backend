$(document).ready(function () {
  $.ajax({
    url: '/rankdata',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      $(div).html(data)
    },
    error:function(request,status,error){
        alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
       },
    
  })
});

