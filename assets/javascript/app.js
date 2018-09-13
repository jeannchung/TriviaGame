$(document).ready(function () {
    var count = 30;
    var counter = setInterval(timer, 1000);

    function timer() {
        correctAnswers = 0

        if (count > 0) {
            count = count - 1;
            console.log(count)
        } else if (count === 0) {
            clearInterval(counter);
            $('#content').empty()
            $('#content').append(`<div class="row text-black justify-content-center m-1">
            <h2 id="timeRemaining"></h2>
            </div>`);
            $('#timeRemaining').html('All done! Checking your answers...')
        } else if (count === 15) {
            $('#timeRemaining2').text("15 seconds left!")
        } else if (count === 10) {
            $('#timeRemaining2').html(`<br>`)
        } else if (count < 0) {
            if ($("#correct1").attr("checked", true)) {
                correctAnswers++
            } else if ($("#correct2").attr("checked", true)) {
                correctAnswers++
            } else if ($("#correct3").attr("checked", true)) {
                correctAnswers++
            } else if ($("#correct4").attr("checked", true)) {
                correctAnswers++
            } else if ($("#correct5").attr("checked", true)) {
                correctAnswers++
            }
            return
            $('#timeRemaining2').html(`You got ${correctAnswers} out of 5 questions correct.`)
        }


        $('#timeRemaining').text(`Time Remaining: ${count}`)
    }



    // if (count <= 0) {
    //     clearInterval(counter);
    //     $('#content').empty()
    //     $('#content').append(`<div class="row text-black justify-content-center m-1">
    //     <h2 id="timeRemaining"></h2>
    //     </div>`);    
    //     $('#timeRemaining').text('All done! Checking your answers...')
    //     return;
    // } else if (count === 15) {
    //     $('#timeRemaining2').text("15 seconds left!")
    // } else if (count === 10) {
    //     $('#timeRemaining2').html(`<br>`)
    // }
    // $('#timeRemaining').text(`Time Remaining: ${count}`)

})