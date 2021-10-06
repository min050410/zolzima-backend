$(document).ready(function () {
    ajax();
})
function ajax() {
    $(".btn").on("click", function () {
        $.ajax({
            type: 'POST',
            url: '{{url_for("journal")}}',
            contentType: 'application/json;charset=UTF-8',
            data: { 'data': clicked },

        })
    })

}