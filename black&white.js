    // nav bar after login 
    function openNav() {
        document.getElementById("nav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("nav").style.width = "0%";
    }



    /* Open when someone clicks on the span element */
    function log() {
        document.getElementById("login").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function close1() {
        document.getElementById("login").style.width = "0%";
    }



    // open when someone clicks on home button
    function home() {
        document.getElementById("home").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closehome() {
        document.getElementById("home").style.width = "0%";
    }

    // open when someone clicks on search
    function finding() {
        document.getElementById("find").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closesearch() {
        document.getElementById("find").style.width = "0%";
    }
    function search(){
        window.open("https://www.google.com/")
    }

    //  open when someone clicks on contact
    function contact() {
        document.getElementById("detail").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closecontact() {
        document.getElementById("detail").style.width = "0%";
    }

    // open when someone clicks on login froms submit button

    function bk() {
        document.getElementById("home").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closehome() {
        document.getElementById("home").style.width = "0%";
    }

    // function for black and white section on home button
     function openblack() {
        document.getElementById("black").style.width = "100%";

       
     }
     function closeblack() {
        document.getElementById("black").style.width = "0%";
    }

      // function for white and white section on home button
      function openwhite() {
        document.getElementById("white").style.width = "100%";

       
     }
     function closewhite() {
        document.getElementById("white").style.width = "0%";
    }

    // when someone clicks on add to cart or buy button


    function add(){
        alert("Added to cart");

    }

    function buy(){
        alert("Cannot buy now");
    }