$(document).ready(function () {
    var count = 30;
    var counter = setInterval(timer, 1000);

    function timer() {
        count = count - 1;
        
        if (count <= 0) {
            clearInterval(counter);
            $('#content').empty()
            $('#content').append(`<div class="row text-black justify-content-center m-1">
            <h2 id="timeRemaining"></h2>
            </div>`);    
            $('#timeRemaining').text('All done! Checking your answers...')
            return;
        } else if (count === 15) {
            $('#timeRemaining2').text("15 seconds left!")
        } else if (count === 10) {
            $('#timeRemaining2').html(`<br>`)
        }
        $('#timeRemaining').text(`Time Remaining: ${count}`)
    }

})