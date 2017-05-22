//Задать максимальное количество символов
var MaxLen = 150;

$(document).ready(function () {
    $("#edit-body-0-summary").prop('required',true);
    $("label[for='edit-body-0-summary']").text("Анонс");
    $("#edit-body-0-summary--description").text("Осталось " + MaxLen + " символов");
    $("#edit-body-0-summary").keyup(function () {
        CountSummary();
    });

    $( "#edit-body-0-summary" ).change(function() {
        CountSummary();
    });
});

function CountSummary()
{
    count = $("#edit-body-0-summary").val().length;
    lost = MaxLen - parseInt(count);
    if (count == parseInt(MaxLen)) {
        $("#edit-body-0-summary").val($("#edit-body-0-summary").val().slice(0, -1));
        $("#edit-body-0-summary--description").html("<strong style='color:red'>Достигнут предел анонса!</strong>");
    } else {
        $("#edit-body-0-summary--description").text("Осталось " + lost + " символов");
    }
}
