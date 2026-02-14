/**
 This Scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Project Scientist,
Virtual Labs IIT Kharagpur.
LinkedIn: https://in.linkedin.com/in/akraonandula/
 */

var c1=0;
var c2=0;
$(document).ready(function(){
        adiwe3(0);
});

function adiwe3(a){
    if(a==0)
    {
        c1=0;
        c2=0;
        $("#weld").hide();
        $("#cut").hide();
        $("#sw").hide();
        $("#wes").hide();
        $("#csim").hide();
        $("#csim").html();
    }
    else if(a==1)
    {        $("#cut").hide();
            $("#csim").hide();
            $("#csim").html();
            $("#wes").html();
             $("#weld").show();
            $("#sw").show();
            if(c1==1 & c2==1 || c1==1 & c2==3 || c1==2 & c2==2 || c1==2 & c2==3 || c1==3 & c2==1 || c1==3 & c2==2 ){
                $("#wes").hide();
                $("#wes").html("<p class=\" text-danger\"> Selection is  incorrect, <strong> Select properly </strong>  </p>");
                $("#wes").show();
                $("#csim").hide();
                $("#csim").html();
            }
            else if(c1==1 & c2==2){$("#wes").html();$("#wes").hide();
            $("#wes").html("<canvas id=\"wes1\" class=\"border border-5 border-primary rounded rounded-5\"></canvas><script id=\"adiweld\"></script>");
            $("#wes").show();$("#csim").hide();
            $("#csim").html();adics(1);}
            else if(c1==2 & c2==1){$("#wes").html();$("#wes").hide();
            $("#wes").html("<canvas id=\"wes2\" class=\"border border-5 border-primary rounded rounded-5\"></canvas><script id=\"adiweld\"></script>");
        $("#wes").show();$("#csim").hide();
        $("#csim").html();adics(2);}
            else if(c1==3 & c2==3){$("#wes").html();$("#wes").hide();
            $("#wes").html("<canvas id=\"wes3\" class=\"border border-5 border-primary rounded rounded-5\"></canvas><script id=\"adiweld\"></script>");
        $("#wes").show();$("#csim").hide();
        $("#csim").html();adics(3);}
        
    }
    else if(a==2){
        $("#weld").hide();
        $("#sw").hide();
        $("#wes").hide();
        $("#csim").hide();
        $("#cut").show();
            $("#csim").html("<canvas id=\"wes4\" class=\"border border-5 border-primary rounded rounded-5\"> <script id=\"adiweld\"></script>");    
        $("#csim").show();
        adics(4);
    }

};


function adics(adiw){
     if (adiw==1) {
        (function() {
            var myscript = document.createElement('script');
            myscript.type = 'module';
            myscript.src = ('./js/adiswf1.js');
            var s = document.getElementById('adiweld');
            s.parentNode.insertBefore(myscript, s);
        })();
    }
    else if(adiw==2) {
        (function() {
            var myscript = document.createElement('script');
            myscript.type = 'module';
            myscript.src = ('./js/adiswf2.js');
            var s = document.getElementById('adiweld');
            s.parentNode.insertBefore(myscript, s);
        })();
    }
    else if (adiw==3) {
        (function() {
            var myscript = document.createElement('script');
            myscript.type = 'module';
            myscript.src = ('./js/adiswf3.js');
            var s = document.getElementById('adiweld');
            s.parentNode.insertBefore(myscript, s);
        })();
    }
    else if(adiw==4) {
        (function() {
            var myscript = document.createElement('script');
            myscript.type = 'module';
            myscript.src = ('./js/adiscf.js');
            var s = document.getElementById('adiweld');
            s.parentNode.insertBefore(myscript, s);
        })();
    }
}