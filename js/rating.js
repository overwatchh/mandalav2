var rating={rating_5:false,rating_4:false,rating_3:false}; // mặc định không checkbox nào được tích
$(".rating").click(function(){
    // Xác định trạng thái các checkbox được tích
    if($(this).prop("checked") == true){
        if($(this).prop("checked") == true){
            switch($(this).attr('id')){
                case 'rating_5':
                    rating.rating_5 = true;
                    break;
                case 'rating_4':
                    rating.rating_4 = true;
                    break;
                case 'rating_3':
                    rating.rating_3 = true;
                    break;
            }
        }
    }
        else{
            switch($(this).attr('id')){
                case 'rating_5':
                    rating.rating_5 = false;
                    break;
                case 'rating_4':
                    rating.rating_4 = false;
                    break;
                case 'rating_3':
                    rating.rating_3 = false;
                    break;
        }
    }
    //Dựa vào trạng thái của object rating để hiển thị thông báo
    let checked_rating ="";
    if(rating.rating_5==true){
        checked_rating += "5,"
    }
    if(rating.rating_4==true){
        checked_rating += "4,"
    }
    if(rating.rating_3==true){
        checked_rating += "3,"
    }
    //Cập nhật trạng thái hiển thị
    let currentRating = "Xếp hạng:";
    $("#starRating").html(currentRating + checked_rating);
    console.log(rating);
});
//checkbox trigger when users click on stars next to checkbox
$(".stars").click(function(){
    $($(this).prev()).click();
});