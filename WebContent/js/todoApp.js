// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
    $(this).find('i').toggleClass('fa-circle-thin fa-check-circle-o')
});


//Click on X to delete Todo



$("ul").on("click", ".fa-trash", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li class=\"list-group-item\"><span><i class='fa fa-circle-thin'></i></span> " + todoText + "<i class=\"fa fa-trash pull-right\"></i></li>")
    }
});

// hide/show ToDo list input field


$("#addTodo").click(function(){
    $("input[type='text']").fadeToggle();
});
