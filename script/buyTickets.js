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
var adultActive = true
var fiveActive = true

function drawBuyPunchticket() {
  $('#main').empty()
  $('#main').append($('#buyPunch').html())
  $('#zonebutton').click(drawZoneList)
  $('#age_select').click(function () {
    adultActive = !adultActive
    checkAgeNumber()
  })
  $('#number_select').click(function () {
    fiveActive = !fiveActive
    checkAgeNumber()
  })
  checkZone()
  checkAgeNumber()
  //fixa bug med animering när man byter sida
}

function checkZone() {
  if (/^(?!ac)[abc]+b?c?$/g.test(chosenZone)) {
    const zoneText = document.querySelector('.select-zone-text')
    zoneText.innerHTML = `Zon ${chosenZone.toUpperCase()}`
    zoneText.classList.add('zone-selected')

    $('#buybutton').animate({ backgroundColor: '#48be86' })
    $('#buybutton').addClass('valid_buy')
    $('#buybutton').click(buyPunch)
  }
}

function checkAgeNumber() {
  var animationTime = 80
  if (adultActive) {
    $('#age_select .blue_select').animate({ left: '0px' }, animationTime)
    $('#age_select .left_select').css('color', 'white')
    $('#age_select .right_select').css('color', 'black')
  } else {
    $('#age_select .blue_select').animate({ left: '149px' }, animationTime)
    $('#age_select .left_select').css('color', 'black')
    $('#age_select .right_select').css('color', 'white')
  }

  if (fiveActive) {
    $('#number_select .blue_select').animate({ left: '0px' }, animationTime)
    $('#number_select .left_select').css('color', 'white')
    $('#number_select .right_select').css('color', 'black')
  } else {
    $('#number_select .blue_select').animate({ left: '149px' }, animationTime)
    $('#number_select .left_select').css('color', 'black')
    $('#number_select .right_select').css('color', 'white')
  }
}

function buyPunch() {
  var ticketZone = chosenZone
  var ticketType = adultActive ? 'adult' : 'youth'
  var ticketNumber = fiveActive ? 5 : 10

  console.log(`
  ticket with zone ${ticketZone}, type ${ticketType}, number ${ticketNumber} bought
  `)

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
