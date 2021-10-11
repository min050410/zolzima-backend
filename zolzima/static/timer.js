var time = 0;
var starFlag = true;
$(document).ready(function () {
  buttonEvt();
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
});

function init() {
  document.getElementById("time").innerHTML = "00:00:00";
}

function buttonEvt() {
  var hour = 0;
  var min = 0;
  var sec = 0;
  var timer;

  // start btn
  $("#startbtn").click(function () {

    if (starFlag) {
      //   $(".fa").css("color","#FAED7D")
      //   this.style.color = "#4C4C4C";
      starFlag = false;

      if (time == 0) {
        init();
      }

      timer = setInterval(function () {
        time++;

        min = Math.floor(time / 60);
        hour = Math.floor(min / 60);
        sec = time % 60;
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

        document.getElementById("time").innerHTML = th + ":" + tm + ":" + ts;
      }, 1000);
    }
  });

  // pause btn
  $("#pausebtn").click(function () {
    if (time != 0) {

      $.ajax({
        url: '/study',
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(time),
        dataType: 'text',
        success: function (data) {
          alert('성공! 데이터 값:' + data)
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
        error: function (request, status, error) {
          alert('로그인 해 주세요 ㅠㅠ')
        }
      })

      //   $(".fa").css("color","#FAED7D")
      //   this.style.color = "#4C4C4C";
      clearInterval(timer);
      starFlag = true;

    }
  });

  // stop btn
  // $("#stopbtn").click(function () {
  //   if (time != 0) {
  //     //   $(".fa").css("color","#FAED7D")
  //     //   this.style.color = "#4C4C4C";
  //     clearInterval(timer);
  //     starFlag = true;
  //     time = 0;
  //     init();
  //   }
  // });
}
