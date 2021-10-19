var user;
var use = 1;
$(document).ready(function () {
  
  guser();

  $.ajax({
  
    url: '/rankdata',
    type: 'GET',
    dataType: 'text',
    success: function (data) {
      obj = JSON.parse(data) //test1,1168,zzz2757,1160,^v^,180,min050410,66,test2,6,qkrandjs,3,dlatldhs,1
      //alert(obj);
      inner(obj);
      //$("#ranking").html(data)
    },
    error: function (request, status, error) {
      alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
    },
  });
  if (use == 1) {
    $(".article-grid.newsletter-card-grid").on("mouseenter", function (event) {
      $(this).css("transform", "scale(1.1)"); //집중되었을때 css 값을 바꿈
    });
    $(".article-grid.newsletter-card-grid").on("mouseleave", function (event) {
      $(this).css("transform", "scale(1)");
    });
  }
  else {
    alert("현재 user가없습니다");
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


function inner(obj){
  
  $("#good").find("#rankname").html(obj[0][0])
  $("#good").find("#ranktime").html(clock(obj[0][1]))
  $("#good").find("#rankname2").html(obj[1][0])
  $("#good").find("#ranktime2").html(clock(obj[1][1]))
  $("#good").find("#rankname3").html(obj[2][0])
  $("#good").find("#ranktime3").html(clock(obj[2][1]))
  $("#good").find("#rankname4").html(obj[3][0])
  $("#good").find("#ranktime4").html(clock(obj[3][1]))
  $("#good").find("#rankname5").html(obj[4][0])
  $("#good").find("#ranktime5").html(clock(obj[4][1]))
  $("#good").find("#rankname6").html(obj[5][0])
  $("#good").find("#ranktime6").html(clock(obj[5][1]))
  $("#good").find("#rankname7").html(obj[6][0])
  $("#good").find("#ranktime7").html(clock(obj[6][1]))
  $("#good").find("#rankname8").html(obj[7][0])
  $("#good").find("#ranktime8").html(clock(obj[7][1]))
  $("#good").find("#rankname9").html(obj[8][0])
  $("#good").find("#ranktime9").html(clock(obj[8][1]))
  $("#good").find("#rankname10").html(obj[9][0])
  $("#good").find("#ranktime10").html(clock(obj[9][1]))
 
  
}

function clock(obj) {
  var min = 0;
  var hour = 0;
  var sec = 0;
  
  min = Math.floor(obj / 60);
  hour = Math.floor(min / 60);
  sec = obj % 60;
  min = min % 60;

  var th = hour;
  var tm = min;
  var ts = sec;
  if (th < 10) {
    th = "0" + hour;
  }
  if (tm < 10) {
    tm = "0" + min;
  }
  if (ts < 10) {
    ts = "0" + sec;
  }
  //&nbsp&nbsp &nbsp&nbsp총 9 시간 공부함
  return("총 "+th+"시간"+tm+"분 공부함")
  //return(th+":"+tm+":"+ts);
      //alert(th+":"+tm+":"+ts);
      //document.getElementById("currenttime").innerHTML = "님의 총 공부시간은 " + th + ":" + tm + ":" + ts + " 입니다";
}

function guser(){
  
   $.ajax({
    url: '/current',
    type: 'GET',
    dataType: 'text',
    success: function (data) {
      data *= 1; //text를 js 에서 int 로 변환
      min = Math.floor(data / 60);
      hour = Math.floor(min / 60);
      sec = data % 60;
      min = min % 60;

      var th = hour;
      var tm = min;
      var ts = sec;
      if (th < 10) {
        th = "0" + hour;
      }
      if (tm < 10) {
        tm = "0" + min;
      }
      if (ts < 10) {
        ts = "0" + sec;
      }

      document.getElementById("currenttime").innerHTML = "님의 총 공부시간은 " + th + ":" + tm + ":" + ts + " 입니다";
    },

  })


}