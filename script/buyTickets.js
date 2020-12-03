$(function () {
  drawTicketButtons()
})

function drawTicketButtons() {
  $('#main').empty()
  $('#main').append(
    $(`
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
    `)
  )

  document
    .getElementById('punchRect')
    .addEventListener('click', drawBuyPunchticket)
}

var chosenZone = ''

function drawBuyPunchticket() {
  $('#main').empty()
  $('#main').append($('#buyPunch').html())
  $('#zonebutton').click(drawZoneList)
  checkZone()
}

function checkZone() {
  if (/^(?!ac)[abc]+b?c?$/g.test(chosenZone)) {
    document.getElementsByClassName(
      'select-zone-text'
    )[0].innerHTML = `Zon ${chosenZone.toUpperCase()}`
    $('#buybutton').animate({ backgroundColor: '#48be86' })
    $('#buybutton').click(buyPunch)
  }
}

function buyPunch() {
  console.log(chosenZone)
  var ticketZone = 'a'
  var ticketType = 'youth'
  var ticketNumber = 10

  pushUnusedTicket(ticketType, ticketZone, ticketNumber)
}

function drawZoneList() {
  $('#main').empty()
  $('#main').append(
    $(`
            <div class="toplist">
            <div id="a_row" class="rowlist btn-hover">
                <div class="rowlist_left">
                <img src="images/punchTicketIcon.png" />
                <span>Zon A</span>
                </div>
            </div>
            <div id="ab_row" class="rowlist btn-hover">
                <div class="rowlist_left">
                <img src="images/punchTicketIcon.png" />
                <span>Zon AB</span>
                </div>
            </div>
            <div id="abc_row" class="rowlist btn-hover">
                <div class="rowlist_left">
                <img src="images/punchTicketIcon.png" />
                <span>Zon ABC</span>
                </div>
            </div>
            <div id="b_row" class="rowlist btn-hover">
                <div class="rowlist_left">
                <img src="images/punchTicketIcon.png" />
                <span>Zon B</span>
                </div>
            </div>
            <div id="bc_row" class="rowlist btn-hover">
                <div class="rowlist_left">
                <img src="images/punchTicketIcon.png" />
                <span>Zon BC</span>
                </div>
            </div>
            <div id="c_row" class="rowlist btn-hover">
                <div class="rowlist_left">
                <img src="images/punchTicketIcon.png" />
                <span>Zon C</span>
                </div>
            </div>
            </div>
        `)
  )

  $('.rowlist').click(function () {
    let id = $(this).attr('id')
    chosenZone = id.replace(/_.*/gi, '')
    if (!/^(?!ac)[abc]+b?c?$/g.test(chosenZone)) chosenZone = ''

    drawBuyPunchticket()
  })
}
