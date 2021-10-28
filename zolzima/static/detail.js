$('document').ready(function () {
    var i = 0
    for(i=0; i<$('p').length; i++) {

    $('p').eq(i).on('mouseenter', function () {
        $(this).css("transform", "scale(1.1)");
    })
    $('p').eq(i).on('mouseleave', function () {
        $(this).css("transform", "scale(1)");
    })
    $('p').eq(i).on('click', function () {
        $(this).css("transform", "scale(1.3)")
        $(this).toggle('checked')
        // ajax 추가
    })
    }   
})