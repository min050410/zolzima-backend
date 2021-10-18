var user;
var use = 1;
$(document).ready(function () {

  $.ajax({
    url: '/rankdata',
    type: 'GET',
    dataType: 'text',
    success: function (data) {
      //obj = JSON.parse(data)
      alert(data);
      //$("#ranking").html(data)
    },
    error: function (request, status, error) {
      alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
    },

  })
  if (use == 1) {
    $(".article-grid.newsletter-card-grid").on("mouseenter", function (event) {
      $(this).css("transform", "scale(1.1)"); //집중되었을때 css 값을 바꿈
    });
    $(".article-grid.newsletter-card-grid").on("mouseleave", function (event) {
      $(this).css("transform", "scale(1)");
    });
  }
  else {
    alert("user가 0입니다");
  }

  // 유저가 순서대로 userlist안으로 들어감
  $("#mc-embedded-subscribe-form").on("submit", function (event) {
    event.preventDefault();
    user = $(this).find('[name=text]').val();
    finduser(user);
  });

  function newFunction() {
    var use;
    return use;
  }
});

function newFunction() {
  return 1;
}

function finduser(user) {
  var i;
  var userlist = [];
  for (i = 0; i < $("h3").length; i++) {
    userlist.push($("h3").eq(i).text());
    if (user === userlist[i]) {
      alert(user + " 의 현재 순위는 " + String(i + 1) + " 위입니다.");
      $(".article-grid.newsletter-card-grid").eq(i).attr("id", "founded")
      $("#finda").attr("href", "#founded")
      $('#finda').get(0).click()
      $(".article-grid.newsletter-card-grid").eq(i).removeAttr("id")
      break;
    }
  }
  if (i == $("h3").length) {
    alert("다시 입력해 주세요");
  }
 

}


