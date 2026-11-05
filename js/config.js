/* Casa Luna — one place for the facts the site uses.
   Everything below came from the Casa Luna landing-page design, except the three
   settings marked "ASSUMED" — please confirm those with the owner. */
window.ELC = {
  name: 'Casa Luna',
  address: 'Lawrence Road, Amritsar, Punjab 143001',
  phoneDisplay: '+91 99887-76655',
  phoneTel: '+919988776655',
  whatsapp: '919988776655',          // ASSUMED: this number is on WhatsApp. Orders/bookings open a pre-filled chat to it.
  email: 'hello@casaluna.in',
  instagram: 'https://instagram.com/casalunaamritsar',
  currency: '₹',
  closedWeekday: 1,                  // 0 = Sunday … 1 = Monday (closed)
  services: [                        // from the design: lunch 12:00pm–3:30pm, dinner & bar 6:30pm–12:00am
    { name: 'Lunch',  open: '12:00', close: '15:30' },
    { name: 'Dinner', open: '18:30', close: '24:00' }
  ],
  slotMinutes: 30,
  lastSeatingBeforeClose: 60,        // ASSUMED: last table starts 60 min before closing
  prepMinutes: 30,                   // ASSUMED: takeaway needs at least 30 min notice
  maxOnlineGuests: 8,                // ASSUMED: bigger groups are asked to call
  endpoint: ''                       // optional: a Formspree/Netlify URL. If set, requests are POSTed there as well.
};
