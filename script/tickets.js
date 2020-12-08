const activeTicketContainer = document.querySelector('#active-ticket-container')

const activeTickets = JSON.parse(sessionStorage.getItem('activeTickets'))

let unusedTickets = 0
Object.values(JSON.parse(sessionStorage.getItem('unusedTickets'))).forEach(
  (typeObject) => {
    Object.values(typeObject).forEach((num) => {
      unusedTickets += num
    })
  }
)

document.querySelector('#nrTickets').innerHTML = `x ${
  unusedTickets ? unusedTickets : 0
}`

const createTicket = ({ quantity, type, zone }) => `
  <div class="active-ticket">
    <img class="active-ticket-background" src="images/biljett.png">
    <div class="ticket-zone">Zon ${zone.toUpperCase()}</div>
    <div class="ticket-type">
      <div class="numberOfTicketsBox">
        <div class="numberOfTicketsBoxText">${quantity}</div>
      </div>
      <div class="numberOfTicketsType">${
        type === 'youth' ? 'Ungdom' : 'Vuxen'
      }</div>
    </div>
  </div>`

const tickets = Object.entries(activeTickets)
  .map(([type, zones]) =>
    Object.entries(zones)
      .filter(([_, quantity]) => quantity !== 0)
      .map(([zone, quantity]) => ({ quantity, type, zone }))
  )
  .flat()
  .sort((a, b) => a.zone.localeCompare(b.zone))

if (tickets.length === 0) {
  $('#active-ticket-container').append(
    $(`<div class="column max">
          <span class="unused_text">Du har inga aktiva biljetter</span>
          <div id="unused_image"></div>
        </div>`)
  )
} else
  tickets.forEach(
    (ticket) => (activeTicketContainer.innerHTML += createTicket(ticket))
  )

// horizontal scroll (chrome only)
activeTicketContainer.addEventListener('wheel', (e) => {
  e.preventDefault()
  const scrollDistance = 50
  console.log(e)
  if (e.wheelDelta < 0) {
    this.scrollX += scrollDistance
  } else {
    this.scrollX = this.scrollX <= 0 ? 0 : this.scrollX - scrollDistance
  }
  activeTicketContainer.scrollLeft = this.scrollX

  if (activeTicketContainer.scrollLeft === this.prevScrollX) {
    this.scrollX = this.prevScrollX
  }

  this.prevScrollX = activeTicketContainer.scrollLeft
})
