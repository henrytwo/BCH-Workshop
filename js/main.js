$(document).ready(function() {
    $('#secret').click(function() {
        //var name = prompt('What is your name?');

        //alert('Why hello there, ' + name);

        swal({
            text: 'What is your name?',
            content: "input",
            button: {
                text: "Submit",
                closeModal: false,
            },
        })
        .then(name => {
            if (!name) throw null;

            if (name.toLowerCase() == 'karl') {
                swal('Ono!', 'no u', 'warning');
            } else {
                swal('Wow!', 'Hello there, ' + name + '!', 'success');
            }

        })
        .catch(err => {
            if (err) {
                swal("Oh noes!", "You broke something", "error");
            } else {
                swal.close();
            }
        });
    });

    $('#protecc').click(function() {
        if ($('#post-1').hasClass('big-post')) {
            $('#post-1').removeClass('big-post');
        } else {
            $('#post-1').addClass('big-post');
        }
    });

    $('#attacc').click(function() {
        swal('Attacking!!!');
        $('#blog').css('background', 'url("https://amp.thisisinsider.com/images/5ad746638a376dbe528b45a3-750-563.jpg")');
        $('h4').html('penguins are great!');
    });
});