
$(function() {
    drawTicketButtons();
});

function drawTicketButtons() {
    $("#main").empty();
    $("#main").append($(`
        <div class="container">
            <div class="container_row">
                <div id="singleRect" class="rectangle column">
                    <div class="buyTicketIcon"></div>
			        <span>Enkelbiljett</span>
		        </div>
		        <div id="periodRect" class="rectangle column">
                    <div class="buyTicketIcon"></div>
                    <span>Periodbiljett</span>
		        </div>
	        </div>
	        <div class="container_row">			
    	        <div id="dayRect" class="rectangle column">
                    <div class="buyTicketIcon"></div>
                    <span>Dygnsbiljett</span>
		        </div>
		        <div id="punchRect" class="rectangle column">
                    <div class="buyTicketIcon"></div>
                    <span>Klippkort</span>
                </div>
            </div>
        </div>    
    `));

    document.getElementById("punchRect").addEventListener("click", drawBuyPunchticket);
}

function drawBuyPunchticket() {
    $("#main").empty();
    $("#main").append($("#buyPunch").html());
    $("#buybutton").click(buyPunch);
}

function buyPunch() {
    var ticketZone = "a";
    var ticketType = "youth";
    var ticketNumber = 10;

    pushUnusedTicket(ticketType, ticketZone, ticketNumber);
}