    var main    = document.getElementById("clockSpace");
    var context = main.getContext("2d");
    var d       =  new Date();

    h  =  d.getHours();
    if(h > 12)
        h-= 12;
    m = d.getMinutes();
    s = d.getSeconds();

    // alert(h+":"+m+":"+s);
    var sectheta = -90, mintheta = -90 , hourtheta = -90;
    var secdel = 6 , mindel = 0.1, hourdel = 0.0083333333;
    sectheta += s*secdel; mintheta += (m * 60 + s) * mindel; hourtheta += (h * 60 * 60 + 60 * s + s) * hourdel;

   // intialuze the clock function
    repeat();
    function runclock()
    {
        context.clearRect(0, 0, main.width, main.height);
        preparebase();
        drawhands(sectheta, mintheta, hourtheta);
        sectheta += secdel; mintheta += mindel; hourtheta += hourdel;
    }

    function repeat()
    {
        setInterval(runclock, 1000);
    }

    function preparebase()
    {
        // Gradient for base============
        context.beginPath();
        var grd = context.createRadialGradient(400, 400, 10, 400, 400, 360);
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "#b7d0f7");/*#c1e897*/

        context.fillStyle = grd;
        
        context.arc(400, 400, 380, 0, 2*Math.PI);
        context.fill()
        context.closePath();
        // Base completed ========


        // Clock Digits ===========
        context.beginPath();
        context.fillStyle = "black";
        context.font = "40px Gugi";
        var theta = -60, del = 30;
        for(var i=1;i <= 12; i++)
        {
            context.fillText(i, 388 + 348.0 * Math.cos(theta * Math.PI / 180), 406 + 351.0 * Math.sin(theta * Math.PI / 180));
            theta += del;
        }   
        context.closePath();
        // Clock Digits============

        // Center Circle===========
        context.beginPath();
        context.fillStyle = "black";
        context.arc(405, 400, 20, 0, 2*Math.PI);
        context.fill();
        context.closePath();
        // Center Circle============

        // Some Random center Text =============
        context.beginPath();
        context.fillStyle = "black";
        context.font = "40px Great Vibes";
        context.fillText(" Wake Up Dude ", 290, 240);   
        context.closePath();
        // Some Random center Text ===============
    }

    function drawhands(sectheta, mintheta, hourtheta)
    {
        var secx = 405 + 325.00 * Math.cos(sectheta * Math.PI / 180.0);
        var secy = 405 + 325.00 * Math.sin(sectheta * Math.PI / 180.0);
        var minx = 405 + 270.00 * Math.cos(mintheta * Math.PI / 180.0);
        var miny = 405 + 270.00 * Math.sin(mintheta * Math.PI / 180.0);
        var hourx= 405 + 200.00 * Math.cos(hourtheta* Math.PI / 180.0);
        var houry= 405 + 200.00 * Math.sin(hourtheta* Math.PI /180.0);
        // Drawing second Hand of clock===========
        context.beginPath();
        context.strokeStyle = "gray";

        context.lineWidth = 2;
        context.moveTo(405, 405); // for second hand center (405,405) and radius is 325
        context.lineTo(secx, secy);
        context.stroke();

        context.closePath();
        // Drawing second Hand of clock=======


        // Drawing minute Hand of clock========
        context.beginPath();
        context.strokeStyle = "#43454a";

        context.lineWidth = 5.5;
        context.moveTo(405, 405); // for minute hand center (405,405) and radius is 270
        context.lineTo(minx, miny);
        context.stroke();

        context.closePath();
        // Drawing minute Hand of clock=========


        // Drawing hour Hand of clock===========
        context.beginPath();
        context.strokeStyle = "black";

        context.lineWidth = 10;
        context.moveTo(405, 405); // for hour hand center (405,405) and radius is 200
        context.lineTo(hourx, houry);
        context.stroke();

        context.closePath();
        // Drawing hour Hand of clock============
    }
