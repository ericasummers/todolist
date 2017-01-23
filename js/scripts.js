//business logic

function ToDoList(whattodo, deadlinedate, deadlinetime, notes){
  this.whatToDo = whattodo;
  this.deadlineDate = deadlinedate;
  this.deadlineTime = deadlinetime;
  this.notes = notes;
}



//interface logic

$(function(){

  $("form#todolistform").submit(function(event){

    var whatToDo = $("input#whattodo").val();
    var deadlineDate = $("input#deadlinedate").val();
    var deadlineTime = $("#deadlinetime").val();
    var notes = $("textarea#notes").val();

    var newToDoList = new ToDoList(whatToDo, deadlineDate, deadlineTime, notes);

    $("#show-lists").show();
    $("#show-lists ul").append("<li><span class='todolists'>" + newToDoList.whatToDo + "</span></li>");

    $(".todolists").last().click(function(){
      $("#show-detail").toggle();
      $(".todoitem").text(newToDoList.whatToDo);
      $(".tododate").text(newToDoList.deadlineDate);
      $(".todotime").text(newToDoList.deadlineTime);
      $(".todonote").text(newToDoList.notes);
    });

    console.log(newToDoList.whatToDo);
    console.log(newToDoList.deadlineDate);
    console.log(newToDoList.deadlineTime);
    console.log(newToDoList.notes);

    event.preventDefault();
  });

});
