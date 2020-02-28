$(function() {
    $(".change-dev").on("click", function(event) {
        console.log("Got it.");
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdev");
  
      var newState = {
        devoured: newDevoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          console.log(`Devoured status changed to ${newState}`);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burg").val().trim(),
        devoured: 0
      };
  
     
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger");
         
          location.reload();
        }
      );
    });
  });
  