var minus = $(".minus").click(
    function(){
        var input = $($(this).parent()).children()[1];
        if(input.value >0 ){
            input.value--;
        }
    }
);

var plus = $(".plus").click(
    function(){
        var input = $($(this).parent()).children()[1];
        input.value++;
    }
    
);

function roomInfo(){
    const numOfRoom = $("#numOfRoom").val();
    const numOfAldult = $("#numOfRoom").val();
    const numOfChildren = $("#numOfRoom").val();

    let roomInfo = numOfRoom + " Phòng, " + numOfAldult + " Người lớn, " + numOfChildren + " Trẻ em";

    $("#roomInfo").html(roomInfo);
}
roomInfo();