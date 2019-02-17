$(document).ready(function(){
        
    
    checkMoviesBooked();
    
    
    $("#submit").button();
    
    
    $("#movie_name, #date, #tickets_quantity").keyup(calculateTotalPrice);
    $("#movie_name, #date, #tickets_quantity").change(calculateTotalPrice);
    
    
    $("#book_tickets").submit(function(event){
        
        
        event.preventDefault();
        
        
        if(window.localStorage){
            var moviesListJson = localStorage.getItem('movies_list');
            var movies_list = moviesListJson ? JSON.parse(moviesListJson) : [];
            var movie = $("#movie_name").val();
            movies_list.push(movie);
            localStorage.setItem('movies_list', JSON.stringify(movies_list));
        }
        
        	
        $( '#book_tickets' ).each(function(){
            this.reset();
        });

        
        $("#total_price").html("(enter data first)");
        
        
        checkMoviesBooked();
    });
    
    
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("date")[0].setAttribute('min', today);
    
});

function calculateTotalPrice(){
    if($("#tickets_quantity").val() != "" && $("#movie_name").val() != "" && $("#date").val() != ""){
        if(window.Worker){
            // create web worker
            var blob = new Blob(
                [document.querySelector("#worker").textContent],
                {type: 'text/javascript'});
            var worker = new Worker(window.URL.createObjectURL(blob));
            
            worker.onmessage = function(event){
                $("#total_price").html(event.data);
            }
            worker.onerror = function(errorObject){
                $("#total_price").html("Error: " + errorObject.message);
            }
            
            // get date
            var date = new Date($('#date').val());
            
            // get day
            var day = date.getDay();
            
            
            var number_booked_shows;
            if(window.localStorage){
                
                if(localStorage.getItem('movies_list')){
                    var movieListJson = localStorage.getItem('movies_list');
                    var movies_list = JSON.parse(movieListJson);
                    number_booked_shows = movies_list.length;                    
                }
                else
                    number_booked_shows = 0;
            }
            
            // send JSON data to worker						
            var jsonData = {'day': day,  'number_booked_shows': number_booked_shows, 'tickets_quantity': Number($("#tickets_quantity").val())};
            worker.postMessage(jsonData);
        }
    }
}


function checkMoviesBooked(){
    $("#movies_list").html("<span id='none'>(none)</span>");
    if(window.localStorage){
        if(localStorage.getItem('movies_list')){
            $("#none").remove();
            var movieListJson = localStorage.getItem('movies_list');
            var movies_list = JSON.parse(movieListJson);
            var sr_no = 0;
            $.each(movies_list,function(key,value){
                $("#movies_list").append(++sr_no + ". " + value + "<br>");
            });
        }
    }
}