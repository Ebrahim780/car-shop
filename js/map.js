let address = [36.2007, 59.6233]
let map = L.map('map').setView(address, 16)

let icon = L.icon({
  iconUrl: 'icon/public/favicon.png',
  iconSize: [25, 25]
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

L.marker(address, { icon }).addTo(map)
  .bindPopup('جاده قدیم نیشابور، معاینه فنی رباط طرق، روبروی ابریشم 7، نمایشگاه ماموت')
  .openPopup()

let leafetLink = document.querySelector('.leaflet-control-attribution')
leafetLink.remove()