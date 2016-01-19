$('.setTable').on('click', function(){

//array of people eating dinner... set the number of fruits based on the inputs below the table
  var people = [{
    id: 1,
    name: 'Emory',
    apples: $('.emoryApples').val(),
    oranges: $('.emoryOranges').val(),
    grapes: $('.emoryGrapes').val()
  },
  {
    id: 2,
    name: 'Luke',
    apples: $('.lukeApples').val(),
    oranges: $('.lukeOranges').val(),
    grapes: $('.lukeGrapes').val()
  },
  {
    id: 3,
    name: 'Aaron',
    apples: $('.aaronApples').val(),
    oranges: $('.aaronOranges').val(),
    grapes: $('.aaronGrapes').val()
  }];


  //function to set the table
  var setTable = function(){
    //move plates: side of table --> on the table
    $('.plate').addClass('hide');
    $('.fruitBasket').addClass('hide');
    $('.tablePlates').removeClass('hide');

    $.each(people, function(key, value){
        //append plates to table with id for each person
        $('.theTable').append("<div id=" + value.id + " class='tablePlate'></div>");

        //append correct number of apples to each plate
        var addApples = function(){
            $('#' + value.id).append("<div class='fruit apple'></div>");
        };
        for (var i = 0; i < value.apples; i++) {
          addApples();
        }

        //append correct number of oranges to each plate
        var addOranges = function(){
            $('#' + value.id).append("<div class='fruit orange'></div>");
        };
        for (var i = 0; i < value.oranges; i++) {
          addOranges();
        }

        //append correct number of grapes to each plate
        var addGrapes = function(){
            $('#' + value.id).append("<div class='fruit grape'></div>");
        };
        for (var i = 0; i < value.grapes; i++) {
          addGrapes();
        }

    });

  };

  setTable();

  //limit the click function--> only can be called once. Must refresh to run again.
  $('.setTable').unbind('click');

});
