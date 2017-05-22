	//Add & Remove active class inside collapse panels
    $('.panel-collapse').on('show.bs.collapse',function() {
        $(this).closest('.panel').addClass('active');
    });

    $('.panel-collapse').on('hide.bs.collapse',function() {
        $(this).closest('.panel').removeClass('active');
    });

	//Buscador de empleados (despedir empleados)
	$(function() {    
        $('#input-search').on('keyup', function() {
          var rex = new RegExp($(this).val(), 'i');
            $('.searchable-container .items').hide();
            $('.searchable-container .items').filter(function() {
                return rex.test($(this).text());
            }).show();
        });
    });



     $(document).ready(function(e) {
 $('#menu-topo').hide();
   var menuaberto = false;
  $('.btn-collapse').click(function(event) {
    event.preventDefault();
    $('#menu-topo').toggle('');
      if(menuaberto == true){
        menuaberto = false;
        $(".lista-collapse:nth-child(1)").removeClass('botao-lista-cima');
        $(".lista-collapse:nth-child(2)").removeClass('hidden');
        $(".lista-collapse:nth-child(3)").removeClass('botao-lista-baixo');
      }else {
        menuaberto = true;
        $(".lista-collapse:nth-child(1)").addClass('botao-lista-cima');
         $(".lista-collapse:nth-child(2)").addClass('hidden');
        $(".lista-collapse:nth-child(3)").addClass('botao-lista-baixo');
      }
  });
 });


     //Login
     /*
     $(function(){
var textfield = $("input[name=user]");
            $('button[type="submit"]').click(function(e) {
                e.preventDefault();
                //little validation just to check username
                if (textfield.val() != "") {
                    //$("body").scrollTo("#output");
                    $("#output").addClass("alert alert-success animated fadeInUp").html("Welcome back " + "<span style='text-transform:uppercase'>" + textfield.val() + "</span>");
                    $("#output").removeClass(' alert-danger');
                    $("input").css({
                    "height":"0",
                    "padding":"0",
                    "margin":"0",
                    "opacity":"0"
                    });
                    //change button text 
                    $('button[type="submit"]').html("continue")
                    .removeClass("btn-info")
                    .addClass("btn-default").click(function(){
                    $("input").css({
                    "height":"auto",
                    "padding":"10px",
                    "opacity":"1"
                    }).val("");
                    });
                    
                    //show avatar
                    $(".avatar").css({
                        "background-image": "url('http://api.randomuser.me/0.3.2/portraits/women/35.jpg')"
                    });
                } else {
                    //remove success mesage replaced with error message
                    $("#output").removeClass(' alert alert-success');
                    $("#output").addClass("alert alert-danger animated fadeInUp").html("sorry enter a username ");
                }
                //console.log(textfield.val());

            });
});*/