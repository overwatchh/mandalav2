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

var numOfGuestModal = $("#roomInfoModal").on("hide.bs.modal",function(){
    const numOfRoom = $("#numOfRoom").val();
    const numOfAdult = $("#numOfAdult").val();
    const numOfChildren = $("#numOfChildren").val();

    $("#roomInfo").val(numOfRoom+" phòng,"+numOfAdult+" người lớn,"+numOfChildren+" trẻ em");
});

var roomInfoConfirm = $("#roomInfoConfirm").click(function(){
    $("#roomInfoModal").modal("hide");
});


