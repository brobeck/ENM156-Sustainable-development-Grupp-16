
$(function() {
    drawTicketButtons();
});

function drawTicketButtons() {
    /*var page = document.getElementById("main");

    var container = document.createElement("div");
    container.className = "container";
    var containerRow = document.createElement("div");
    containerRow.className = "container_row";
    var rect = document.createElement("div");
    rect.className = "rectangle";
    
    var singleRect = rect.cloneNode();
    singleRect.id = "singleRect";
    var periodRect = rect.cloneNode();
    periodRect.id = "periodRect";
    var dayRect = rect.cloneNode();
    dayRect.id = "dayRect";
    var punchRect = rect.cloneNode();
    punchRect.id = "punchRect";

    containerRow.appendChild(singleRect);
    containerRow.appendChild(periodRect);

    containerRow2 = containerRow.cloneNode();
    containerRow2.appendChild(dayRect);
    containerRow2.appendChild(punchRect);
    
    container.appendChild(containerRow);
    container.appendChild(containerRow2);
    page.appendChild(container);*/
    $("#main").empty();
    $("#main").append($(`
        <div class="container">
            <div class="container_row">
		        <div id="singleRect" class="rectangle">
			        Enkelbiljett
		        </div>
		        <div id="periodRect" class="rectangle">
			        Periodbiljett
		        </div>
	        </div>
	        <div class="container_row">			
    	        <div id="dayRect" class="rectangle">
			        Dygnsbiljett
		        </div>
		        <div id="punchRect" class="rectangle">
			        Klippkort
                </div>
            </div>
        </div>    
    `));

    document.getElementById("punchRect").addEventListener("click", drawBuyPunchticket);
}

function drawBuyPunchticket() {
    //lägg till rexexp för att funka på github pages
    $("#main").empty();
    $("#main").append($("#buyPunch").html());
    console.log($("#buyPunch").html());
}