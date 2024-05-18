(function ($) {
    "use strict";
    //  Navbar fissata nella pagina
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

    // Data e ora
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });

})(jQuery);

function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let searchInput = document.getElementById("searchInput").value;
    var selectElement = document.getElementById("company");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var Quantity = selectedOption.value;
    var number1 = "Height :" + Height1 + "<br/> Length :" + Length1 + "<br/> Width :" + Width1 + "<br/> Weight :" + Weight1 + "<br/> Type :" + Type1;
    let body = "<b>first name:</b>" + First + "<br/> last name:" + last + "<br/> company name :" + company + "<br/> Email adress: " + email + "<br/> Phone Number : " + phone + "<br/> Adress : " + address + "<br/> Ready by date: " + ready + "<br/> Shipping Address : " + SAddress + "<br/> Date of Delivery : " + DDate + "<br/> Quantity : " + Quantity + "<br/>" + number1 + "<br/> User's Thoughts/Reviews:" + textarea;

    Email.send({
        SecureToken: "ee0d4d0f-ef4c-4b98-a8eb-b067d1e93e13",
        To: "leonepozzi2@gmail.com",
        From: "leonepozzi2@gmail.com",
        Subject: First + last + " quote Form Data",
        Body: body
    }).then(
        message => alert("email sent successfully")
    );
}

