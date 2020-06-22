/*******************************************************************************************************
 *                                             Bromley Solutions 
 *                                          Message Board JavaScript
 *                                             
 *   Messages for physics topics
 *  
 * 
 * 
 * Date:  11-22-2019
 * Author: Richard Bromley
 *******************************************************************************************************/
'use strict';

var state = 0;
var flip = false;

function backHome() {
    myFunction();
    myhardware(false);
    opening(0);
}

function myhardware(on) {
    if (on) {
        opening(1);
        hardwareOn();
        myFunction();
    } else {
        hardwareOff();
        opening(0);
        myFunction();
    }
}

function myFunction() {
    if (flip) {
        document.getElementById("myDropdown").classList.toggle("showOff");
        flip = !flip;
    } else {
        document.getElementById("myDropdown").classList.toggle("show");
        flip = !flip;
    }
}

function opening(state) {
    switch (state) {
        case 0:
            document.getElementById("first").innerHTML = "<p class= 'opening'>We're in <b>Las Vegas</b> and we're ready to meet your computational needs." +
                " The owner is a UNLV Computer Science graduate that has been in engineering working with industrial controls and applications for years." +
                " Bromley Solutions has it's own on site servers ready to meet your web based needs.</p></br><h2 class='openingList'> Servers can do more than just websites </h2></br>" +
                "<li class='openingList'> Database access</li> <li class='openingList'>Remote login and software access monitoring</li> <li class='openingList'>report generation" +
                " and monitoring.</li> <p class='opening'> What are volnerablities?  Anything can be hacked, if you allow access over a Wide Area Network.  Cracking passwords is only" +
                " a matter of attempts against the complexity of a login. A person attempting to crack an encryption password can become an impossibility. But a country, using millions of computers," +
                " each computer having well defined blocks to attempt a breakin, becomes much simpler. More is better in code cracking.  Is there a way to defend against" +
                " even a powerful organization attempting to crack an encyption? Yes...  The first thing to do is have limits on what can be passed.  If nothing damaging can be passed" +
                " you cannot get hurt unless you using a canned server or service. This is one of the reasons why I keep my coding in a lower level form.  I code web based programs in" +
                " Javascript, Typescript, html, css.  I have the server handle sensitive issues, with limits on access, and everything is encrypted.  I don't use express, wordpress, or even" +
                " angular because I like to code, and I like to limit the code to routines that actually get used. There are backdoors in world. Wordpress requires a backdoor. Why have it?" +
                " Angular requires 120,000 bytes before one can even offer a 'hello world,' and the coding savings isn't. Express and middlewear leaves you looking for the punch line. If output is the goal (two websites" +
                " a day garbage), then heavy chop shop tactics would be needed. You need WordPress if you want to hire high school kids, and BootStrap, if you want your sites to look like the" +
                " templets these packages offer. Good programs don't take that much more time. Double sounds massive, but that amounts to a couple days in most cases and there is a huge savings" +
                " in size and efficiency.</p>"
            hardwareOff();
            break;
        case 1:
            document.getElementById("first").innerHTML = "<p class='opening'>Emagine plugging in a component and it instantly integrates itself into " +
                "your business option. Purchase cash register, plug it in, and it has your menu. It " +
                "instantly passes orders to the kitchen.  The kitchen touch screen displays inwork orders, " +
                "time of request, special orders. The server system can make changes to the menu, pricing, cost, " +
                "and the integrated multi-zone system adjusts all effected sub-assemblies. These items are at site installed and constructed.</p>"
            hardwareOn();
            break;

        case 2:
            document.getElementById("first").innerHTML = "<p class= 'opening'>We create products for both windows and linux based operating systemns.  Our server is linux Mint " +
                "based with a Cinnamon desktop environment. For linux based software, we prefer to use QT Creator.  Windows based software is created with Visual Studio.  Qt based " +
                "software is written in C++ and Visual Studio based software is written in C-sharp.  The common Database software we use is MySQL from Oracle. MySQL can be linux or Windows" +
                " based.  Web based software is written in HTML, CSS, JavaScript, TypeScript with our own method of Single Page Applications. We don't use Angular for single page application" +
                " creation.  We use a method we developed based on a state machine. The single page is modified by local Javascript code blocks that are used depending on the state of the" +
                " application.  Our webpage here operated under this methodology. This method lowers the memory and server transmission requirements.  The server is our own in-house server" +
                " in NodeJS and written in TypeScript.  The server only allows for the issue of approved files which means this site cannot be hacked.  It is literally impossible." +
                " There are other attacks that can disable the site, but the attacks place a heavy burden on the attacker.  The will only stay down if the attacker has massive resources" +
                " kept in play."
            softwareOn();
            myFunction();
            break;
    }
}

function hardwareOff() {
    document.getElementById("hardware").innerHTML = "";
}

function hardwareOn() {
    document.getElementById("hardware").innerHTML = "<div class='gallery'><img src='../images/WheeledCabinet.PNG'><div class='desc'>Hardware racks on wheels in various sizes.</div>" +
        "<small class='priceRange'>$300.00 ... $3500.00</small></div><div class='gallery'><img src='../images/computer.PNG'><div class='desc'>Powerful rack mounted server running" +
        "simple to use point and click based operating systems.</div><small class='priceRange'>$600.00 ... $5500.00</small></div><div class='gallery'><img src='../images/monitor.PNG'>" +
        "<div class='desc'>This is a wider card with supporting text below as a natural lead-in to additional content.</div><small class='priceRange'>$300.00 ... $3500.00</small>" +
        "</div><div class='gallery'><img src='../images/cashRegister.PNG'><div class='desc'>Hardware racks on wheels in various sizes.</div><small class='priceRange'>$300.00 ... " +
        ".00</small></div><div class='gallery'><img src='../images/cashdrawer.PNG'><div class='desc'>Powerful rack mounted server running simple to use point and click based operating" +
        "systems.</div><small class='priceRange'>$600.00 ... $5500.00</small></div><div class='gallery'><img src='../images/cabinet.png'><div class='desc'>This is a wider card with " +
        "text below as a natural lead-in to additional content.</div><small class='priceRange'>$300.00 ... $3500.00</small></div>"
}

function softwareOn() {
    document.getElementById("hardware").innerHTML = "<div class='gallery'><img src='../images/WheeledCabinet.PNG'><div class='desc'>Hardware racks on wheels in various sizes.</div>" +
        "<small class='priceRange'>$300.00 ... $3500.00</small></div><div class='gallery'><img src='../images/computer.PNG'><div class='desc'>Powerful rack mounted server running" +
        "simple to use point and click based operating systems.</div><small class='priceRange'>$600.00 ... $5500.00</small></div><div class='gallery'><img src='../images/monitor.PNG'>" +
        "<div class='desc'>This is a wider card with supporting text below as a natural lead-in to additional content.</div><small class='priceRange'>$300.00 ... $3500.00</small>" +
        "</div><div class='gallery'><img src='../images/cashRegister.PNG'><div class='desc'>Hardware racks on wheels in various sizes.</div><small class='priceRange'>$300.00 ... " +
        ".00</small></div><div class='gallery'><img src='../images/cashdrawer.PNG'><div class='desc'>Powerful rack mounted server running simple to use point and click based operating" +
        "systems.</div><small class='priceRange'>$600.00 ... $5500.00</small></div><div class='gallery'><img src='../images/cabinet.png'><div class='desc'>This is a wider card with " +
        "text below as a natural lead-in to additional content.</div><small class='priceRange'>$300.00 ... $3500.00</small></div>"
}