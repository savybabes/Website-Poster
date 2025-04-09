console.log("lets see if this remains in your code")
$ (".flex-container").click(function(){
    $ ("#isabel-machado").css("opacity","0")
    $("#maria-carolina-cambre").css ("opacity","1")
    $ ("#shima-rashnoodi").css ("opacity","0")

    $(".flex-container").toggleClass("expand")
    
    if ( $(".flex-container").hasClass("expand")){
        $("<div></div>")
        .html ("<h3>Bio</h3><p>Cambre is an Argentine/Canadian scholar who explores vernacular visual expression asking: How do people produce and direct the visual space. How is the image a doing? What are the social and cultural work/ings of images? – Ideas explored in her latest article, “The Atopic Image” (Visual Studies June 2023: 38:2, 199-202). Lately, her research focuses on visual processes of legitimation, representation of online sharing, the visual politics of identity, and polymedia literacies. </p>")
        .addClass("text-container")
        .appendTo(".flex-container")
    
    }
    else {
        $(".text-container").remove()
    }
})


$ (".flex-container1").click(function(){
    $ ("#isabel-machado").css("opacity","1")
    $("#maria-carolina-cambre").css ("opacity","0")
    $ ("#shima-rashnoodi").css ("opacity","0")
    $ ("#Daniel-Wildberger").css ("opacity","0")

    $(".flex-container1").toggleClass("expand")
    if ( $(".flex-container1").hasClass("expand")){
        $("<div></div>")
        .html ("<h3>Bio</h3><p>Isabel Machado is a Brazilian cultural historian whose work often crosses national and disciplinary boundaries. She specializes in the fields of Gender and Sexuality Studies and Celebration Studies. She serves as co-editor-in-chief for the Journal of Festival Studies and as a host for the New Books Network Podcast and is currently a Lecturer at the University of British Columbia’s Institute for Gender, Race, Sexuality and Social Justice.</p>")
        .addClass("text-container")
        .appendTo(".flex-container1")
    }
    else {
        $(".text-container").remove()
    }
})

$ (".flex-container2").click(function(){
    $ ("#isabel-machado").css("opacity","0")
    $("#maria-carolina-cambre").css ("opacity","0")
    $ ("#shima-rashnoodi").css ("opacity","0")
    $ ("#Daniel-Wildberger").css ("opacity","1")
    $(".flex-container2").toggleClass("expand2") 
    if ( $(".flex-container2").hasClass("expand2")){
        $("<div></div>")
        .html ("<h3>Bio</h3><p>Born in Brazil, Daniel Wildberger is a multi-disciplinary designer and educator with a focus on dynamic media, interactive design, motion graphics, experience design, and visual communication. He holds a B.A. in Communication Design and Advertising from Universidade Católica do Salvador, as well as an MA and MFA from the University of Iowa, USA. Daniel’s work has been widely published and presented at international platforms, earning numerous accolades, including awards from AIGA, Creativity International, Communicators Awards, and Hermes International. Since 2009, he has been the founder and principal designer at Wild Inc., his own studio dedicated to cutting-edge design practices. Currently, Daniel is an Assistant Professor of Interaction Design at Emily Carr University of Art and Design, where he explores the intersection of design, inclusion, and innovation in his course Recoding Narratives: Inclusion and Diversity as a Path to Design Innovation. He is also the Creative Director of Wild Inc., a design studio specializing in branding, typography, web development, and motion design.</p>")
        .addClass("text-container")
        .appendTo(".flex-container2")
    }
    else {
        $(".text-container").remove()
    }
})

$ (".flex-container3").click(function(){
    $ ("#isabel-machado").css("opacity","0")
    $("#maria-carolina-cambre").css ("opacity","0")
    $ ("#shima-rashnoodi").css ("opacity","1")
    $ ("#Daniel-Wildberger").css ("opacity","0")
    $(".flex-container3").toggleClass("expand")
    if ( $(".flex-container3").hasClass("expand")){
        $("<div></div>")
        .html ("<h3>Bio</h3><p>Shima Rezaei Rashnoodi is a senior researcher and lecturer at Breda University of Applied Sciences in the Netherlands, specializing in immersive media particularly spatial experiences in Virtual Reality (VR) and empathy. With a background in architecture and participatory research, she has worked on projects around home in displacement and inclusive design.</p>")
        .addClass("text-container")
        .appendTo(".flex-container3")
    }
    else {
        $(".text-container").remove()
    }
})




