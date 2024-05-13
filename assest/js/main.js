
$(document).ready(function () {
   
    var $orders=$(`#orders`);
    $.ajax({
        url: "assest/js/orders",//apidata
        type: "get",
    
        success:function(orders){
        $.each(orders,function(i,order){
      $orders.append(`<li>name: `+order.name+`,drink:`+order.drink+ `</li>`);
    
    });
   
},
error:function(){
   alert(`error loding orders`); 
}
        });
    

    });



