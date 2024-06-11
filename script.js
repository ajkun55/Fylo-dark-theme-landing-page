


$("#btn").click(function(event) {
    event.preventDefault(); 
    if(!$('#email').val()){
        $('#error').css('visibility','visible');
        $('#email').attr('value','johnappleseed#mail.com');
    }else{
        $('#error').css('visibility','hidden');
        $('#email').css('border','none');
        $('#email').css('outline','none');
    }
})