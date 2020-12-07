const activeTicketContainer = document.querySelector('#active-ticket-container')

const activeTickets = JSON.parse(sessionStorage.getItem('activeTickets'))
console.log(activeTickets)

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

console.log(tickets)

tickets.forEach(
  (ticket) => (activeTicketContainer.innerHTML += createTicket(ticket))
)

console.log(window)

// scroll stuff
window.addEventListener('scroll', (e) => {
  console.log(e)
  console.log($('#active-ticket-container').scrollTop())
  // print "false" if direction is down and "true" if up
  // console.log(this.oldScroll > this.scrollY)
  this.oldScroll = this.scrollY
})
