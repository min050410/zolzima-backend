$(document).ready(function () {
  //buttonEvt();
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
