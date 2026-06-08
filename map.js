console.log('map.js загружен');

const parkCoords = [55.6647, 37.5315];

const map = L.map('map').setView(parkCoords, 16);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

const parkIcon = L.divIcon({
    html: '<div style="background-color: #8b2c2c; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid #e6b422;"><span style="color:white; font-size:20px;">🌳</span></div>',
    iconSize: [40, 40],
    popupAnchor: [0, -20]
});

L.marker(parkCoords, { icon: parkIcon }).addTo(map)
    .bindPopup('<strong>🌳 Воронцовский парк</strong><br>Центральный вход');

// Полигон основной территории парка
const parkAreaCoords = [
    [55.6680, 37.5280],
    [55.6685, 37.5310],
    [55.6675, 37.5340],
    [55.6655, 37.5350],
    [55.6635, 37.5335],
    [55.6625, 37.5305],
    [55.6630, 37.5275],
    [55.6650, 37.5265]
];

L.polygon(parkAreaCoords, {
    color: '#4caf50',
    weight: 3,
    opacity: 0.8,
    fillColor: '#8bc34a',
    fillOpacity: 0.4
}).addTo(map).bindPopup('<strong>🌳 Основная территория парка</strong><br>Площадь: ~40 га');

// Полигон пруда
const pondCoords = [
    [55.6660, 37.5320],
    [55.6663, 37.5328],
    [55.6660, 37.5335],
    [55.6654, 37.5332],
    [55.6652, 37.5325],
    [55.6654, 37.5318]
];

L.polygon(pondCoords, {
    color: '#2196f3',
    weight: 2,
    opacity: 0.7,
    fillColor: '#64b5f6',
    fillOpacity: 0.5
}).addTo(map).bindPopup('💧 Пруд');
