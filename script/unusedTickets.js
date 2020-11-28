const nrTickets = 13
const ticketType = 'Ungdom'
const zone = 'A'

const unusedTickets = {
  "youth": {
      "a": 0,
      "ab": 0,
      "abc": 0,
      "b": 0,
      "bc": 0,
      "c": 0
  },
  "adult": {
      "a": 0,
      "ab": 0,
      "abc": 0,
      "b": 0,
      "bc": 0,
      "c": 0
  }
};

const ticket = `
  <div class="rectangle lightblue unused-ticket">
    <div class="unused-ticket-type">
      <div class="numberOfTicketsBox">
        <div class="numberOfTicketsBoxText">${nrTickets}</div>
      </div>
      <span class="numberOfTicketsType">${ticketType}</span>
    </div>
    <div class="unused-zone rect_center column">
      <span class="">Zon</span>
      <span>${zone}</span>
    </div>
      <div class=" activate-btn">Aktivera</div>
  </div>
`
const ticketContainer = document.querySelector('#ticket-container')
ticketContainer.innerHTML = ticket

console.log(Object.values(unusedTickets))

// rectangle thin white align_center