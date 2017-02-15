var catscore1 = 0,
    catscore2 = 0,
    catscore3 = 0,
    catscore4 = 0,
    catscore5 = 0;


var pic1 = "<img src='kitten1.jpg' id='catpic1' class='image'></img>",
    pic2 = "<img src='kitten2.jpg' id='catpic2' class='image'></img>",
    pic3 = "<img src='kitten3.jpg' id='catpic3' class='image'></img>",
    pic4 = "<img src='kitten4.jpg' id='catpic4' class='image'></img>",
    pic5 = "<img src='kitten5.jpg' id='catpic5' class='image'></img>";

var label1 = "<p id='label1'>" + catscore1 + "</p>",
    label2 = "<p id='label2'>" + catscore2 + "</p>",
    label3 = "<p id='label3'>" + catscore3 + "</p>",
    label4 = "<p id='label4'>" + catscore4 + "</p>",
    label5 = "<p id='label5'>" + catscore5 + "</p>";

var names = ["KitKat", "Jojo", "Jose", "McQuire", "Rolen"];

var i;
for (i = 0; i < 5; i++) {
    var loc = "cat" + i;
    $("#" + loc).append(names[i]);
    var x = i; 
    x++;
}
     
for (i = 0; i < 5; i++){
    document.getElementById("cat" + i).addEventListener("click", function(e) {
        if ($(this).text() == "KitKat") {
            $("board").empty();
            $("board").append(pic1);
            $("board").append(label1);
            $("#catpic1").click(function() {
                catscore1++;
                $("#label1").text(catscore1);
            });
        }
        if ($(this).text() == "Jojo") {
            $("board").empty();
            $("board").append(pic2);
            $("board").append(label2);
            $( "#catpic2" ).click(function() {
                catscore2++;
                $("#label2").text(catscore2);
            });
        }
        if ($(this).text() == "Jose") {
            $("board").empty();
            $("board").append(pic3);
            $("board").append(label3);
            $( "#catpic3" ).click(function() {
                catscore3++;
                $("#label3").text(catscore3);
            });
        }
        if ($(this).text() == "McQuire") {
            $("board").empty();
            $("board").append(pic4);
            $("board").append(label4);
            $( "#catpic4" ).click(function() {
                catscore4++;
                $("#label4").text(catscore4);
            });
        }
        if ($(this).text() == "Rolen") {
            $("board").empty();
            $("board").append(pic5);
            $("board").append(label5);
            $( "#catpic5" ).click(function() {
                catscore5++;
                $("#label5").text(catscore5);
            });
        }
    });
};
