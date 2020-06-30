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

function newContact() {
    window.open('/contact/contact.html', "custom", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no," +
        " copyhistory=no, top=0, left=20vw, width=800, height=395");
}

function opening(state) {
    switch (state) {
        case 0:
            document.getElementById("first").innerHTML = "<p class='opening'>We're in <b>Las Vegas</b> and we're ready to meet your computational needs." +
                " The owner is a UNLV Computer Science graduate that has been in engineering working with industrial controls and applications for years." +
                " Bromley Solutions has it's own on site servers operating in Windows and Linux Mint.</p><p class='opening'> The servers offer website, database access, virtual Networks," +
                " virtual routers, and off site backup.  What are volnerablities?  Anything " +
                " accessable can be hacked, if you allow access over a Wide Area Network.  Cracking passwords is only" +
                " a matter of attempts against the complexity of a login. A person attempting to crack an encryption password can become an impossibility. One can't live long enough " +
                " to attempt even a small percentage of massive possiblities. But a country, using millions of computers, each computer having well defined blocks to attempt a breakin, " +
                " becomes much simpler. More is better in code cracking. Is there a way to defend against even a powerful organization attempting to crack an encyption? Yes...  " +
                " The first thing to do is have limits on what can be accessed.  If nothing damaging can be accessed you cannot get hurt unless you using a canned server or service. " +
                " This is one of the reasons why I write my own server routines---nothing off the shelf. I have the server handle sensitive issues, with limits on access, and everything " +
                " is encrypted.  IP addresses are monitored for hackers. I like to code, and I like to limit the code to routines that actually get used so I try to limit software library " +
                " useage. There are backdoors in world. Wordpress requires a backdoor. Why have the access point? Angular requires 120,000 bytes before one can even offer a 'hello world,' " +
                " and there isn't enough time savings on site construction. Express and it's middlewear concept leaves you looking for the punch line. If output is the goal (two websites" +
                " a day garbage), then heavy chop shop tactics would be needed. You need WordPress if you want to hire high school kids, and BootStrap, if you want your sites to look like the" +
                " templets these packages offer. Good programs don't take that much more time. Double sounds massive, but that amounts to a couple days in most cases and there is a huge savings" +
                " in size and efficiency.</p>"
            document.getElementById("hardware").innerHTML = "";
            document.getElementById("last").innerHTML = "";
            break;

        case 1:
            document.getElementById("first").innerHTML = "<p class='opening'>Emagine plugging in a component and it instantly integrates itself into " +
                "your business option. Purchase cash register, plug it in, and it has your menu. It " +
                "instantly passes orders to the kitchen.  The kitchen touch screen displays inwork orders, " +
                "time of request, special orders. The server system can make changes to the menu, pricing, cost, " +
                "and the integrated multi-zone system adjusts all effected sub-assemblies. These items are at site installed and constructed and have no need for World Wide Web exposure.</p>"
            document.getElementById("hardware").innerHTML = "<div class='gallery'><img src='../images/WheeledCabinet.PNG'><div class='desc'>Hardware racks on wheels in various sizes.</div>" +
                "<small class='priceRange'>$300.00 ... $3500.00</small></div><div class='gallery'><img src='../images/computer.PNG'><div class='desc'>Powerful rack mounted server running " +
                "simple to use point and click object based operating systems.</div><small class='priceRange'>$600.00 ... $5500.00</small></div><div class='gallery'><img src='../images/monitor.PNG'>" +
                "<div class='desc'>Rack, wall pedestal mounted monitors</div><small class='priceRange'>$300.00 ... $3500.00</small>" +
                "</div><div class='gallery'><img src='../images/cashRegister.PNG'><div class='desc'>Touch screen cash registers and operator stations.</div><small class='priceRange'>$600.00 ... " +
                "2500.00</small></div><div class='gallery'><img src='../images/cashdrawer.PNG'><div class='desc'>Separate cash drawers which can be mounted for limited access" +
                "systems.</div><small class='priceRange'>600.00 ... $1100.00</small></div><div class='gallery'><img src='../images/cabinet.png'><div class='desc'> Wall or floor mounted stations " +
                "</div><small class='priceRange'>$300.00 ... $3500.00</small></div>"
            document.getElementById("last").innerHTML = "";
            break;

        case 2:
            document.getElementById("first").innerHTML = "<div id='first' class='first'><p class='first'> Web based software is written in HTML, CSS, JavaScript, and TypeScript with an " +
                " option of using our own powerful method of SPA,or Single Page Applications. We use a method we developed based on a state machine. Pages are modified by local or hosted " +
                "Javascript activated by the state of the application. Our website operates under this methodology. This method lowers the memory and server transmission requirements. The" +
                " server is our own in-house server created in NodeJS and written in TypeScript. The server only allows the issue of approved files, which means this site cannot be hacked " +
                "through the server.</div>"
            document.getElementById("hardware").innerHTML = "<div id='hardware' class='album'><div class='outter'><div class='softpack'><p class='title'>The Presentation</p><ul><li>Pages 2</li><li>Images 4</li>" +
                "<li>Email Link</li></ul><p class='explain'>A presentation website offers text and graphics. It is the simplest Package offered. The site can be expanded or modified with more" +
                "  options in the future.</p><small class='price' style='top: 1.5vw'>$295.00</small></div><div class='softpack'><p class='title'>The SPA</p><ul><li>Login</li><li>Access " +
                " Privileges</li><li>Data Transport, manipulation</li></ul><p class='explain'>An SPA is a Single Page Application. It is an application like the ones found on your desktop, but " +
                " accessed on the World Wide Web.</p><small class='price' style='top: 1.5vw'>$1195.00</small></div><div class='softpack'><p class='title'>The Franchise</p><ul><li>Login</li>" +
                "<li>Shopping</li><li>Accounting, Inventory</li></ul><p class='explain'>A presentation website offers text and graphics. It is the simplest Package offered. The site can be " +
                "expanded or modified with more options in the future.</p><small class='price' style='top: 1vw'>$3995.00</small></div></div></div>"
            document.getElementById("last").innerHTML = "<div id='last'class='last'>" +
                "Turn-around time is based on complexity averaging a day per page. Hosting offers oversight and it has a reaccuring charge based on the host used and the required manipulation." +
                "</div><div class='outter2'><div class='softpack2'><p class='title2'>Inhouse Server</p><small class='price2' style='font-size:1vw'>$24.95 Month</small></div><div class='softpack2'>" +
                "<p class='title2'>Regional Hosting</p><small class='price2' style='font-size:1vw'>$74.95 month</small></div><div class='softpack2'><p class='title2'>Multi Region</p>" +
                "<small class = 'price2' style ='font-size:1vw'> $195.00 month</small></div></div>"
            break;

        case 3:
            document.getElementById("first").innerHTML = "<div id='first' class='first'><p class='first'> Software, libraries, and Methods can be written in Java, C# using Visual Studio, " +
                " or C++ using QT Creator or SQL Script for databases. We create products for both windows and linux based operating systems. Our server is linux Mint based with a Cinnamon" +
                " desktop environment. For linux based software, we prefer to use QT Creator. Windows based software is created with Visual Studio. Qt based software is written in C++ " +
                " and Visual Studio based software is written in C-sharp. The common Database software we use is MySQL from Oracle. MySQL can be linux or Windows based. The client will " +
                " recieve an entry / result chart showing user entries and resultant outputs for sign-off. </br></br> A sheet displaying locations and assemblies that cannot be used will be" +
                "  filled out by the client, if there are other routines in use with the requested program. System minimum availabities will be signed-off on as well.</div> "
            document.getElementById("hardware").innerHTML = "<div id='hardware' class='album'><div class='outter3'><div class ='softpack3'><p class='title3' style='font-size:1vw'>Windows</p> " +
                " <p class='explain3'>With or without the GUI (Graphics User Interface). Command Prompt.</p><small class='price3' style='top:1vw'>$75.00 Hour</small></div><div class='softpack3'> " +
                " <p class='title3' style='font-size: 0.7vw'>Cinnamon or Ubuntu</p><p class='explain3'>With or without the GUI (Graphics User Interface). Command Prompt.</p><small " +
                " class='price3' style='top: 1.4vw'>$95.00 Hour</small></div><div class='softpack3'><p class='title3' style='font-size: 0.7vw'>MySQL Database</p><p class='explain3'> " +
                " Created on SQL server the operation will use. Access required until completion.</p><small class='price3' style='top:1.2vw'>$55.00 Hour</small></div></div></div>";
            document.getElementById("last").innerHTML = "<div id='last' class='last'><div class='last'>Turn-around time " +
                " is based on complexity. Delievery doesn't end the software job. Client evailuation and testing is monitored with responces. Other languages (assembly, C) can be used " +
                " for method creation or command line routines which are preferred if new subassemblies are in use.</div>"
            break;
        case 4:
            window.location.href = 'https://www.interactive-physics.org/';
            break;
    }
}