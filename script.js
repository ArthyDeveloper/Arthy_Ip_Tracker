console.log("Código feito por Arthur Queiroz de Oliveira em 12/09/2023 utilizando das API's seguintes:")
console.log("IP Geolocation API da Ipify, LeafletJS e Openstreetmap.org")

let detalhesbox = document.getElementById("Detalhes");
let input = document.getElementById("ipInput");
let ip = document.getElementById("ip");
let local = document.getElementById("local");
let latitude = document.getElementById("latitude");
let longitude = document.getElementById("longitude");
let fuso = document.getElementById("fuso");
let asn = document.getElementById("asn");
let isp = document.getElementById("isp");
var detalhesAbertos = 0;

// Exibir ou fechar detalhes do rastreamento:
function detalhesIp(){
    if (detalhesAbertos == 0){
        detalhesbox.style.display = "block";
        detalhesAbertos = 1;
    } else {
        detalhesbox.style.display = "none";
        detalhesAbertos = 0;
    }
}

// Mapa:
var map = L.map('map', {zoomControl:false}).setView([35, -20], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Rastreamento do Ip solicitado pelo usuário:
async function trackIp(){
    const req2 = "https://geo.ipify.org/api/v2/country,city?apiKey=at_xW2iYYvaky8AJaPg8N9uFueGzb3uB&ipAddress=" + input.value;
    fetch(req2)
    .then(res2 => res2.json())
    .then(r2 => {
        input.value = "";
        ip.textContent = "IP:";
        local.textContent = "Local:";
        latitude.textContent = "Latitude:";
        longitude.textContent = "Longitude:";
        fuso.textContent = "Fuso Horário:";
        asn.textContent = "ASN:";
        isp.textContent = "ISP:";
        map.setView([35, -20], 2);

        input.value = r2.ip;
        ip.textContent = "IP: " + r2.ip;
        local.textContent = "Local: " + r2.location.city + ", " + r2.location.region + ", " + r2.location.country;
        latitude.textContent = "Latitude: " + r2.location.lat;
        longitude.textContent = "Longitude: " + r2.location.lng;
        fuso.textContent = "Fuso Horário: " + r2.location.timezone;
        asn.textContent = "ASN: " + r2.as.asn;
        isp.textContent = "ISP: " + r2.isp;
        map.setView([r2.location.lat, r2.location.lng], 14);
    })
}

// Rastreamento do Ip do usuário:
async function meuIp(){

    const req = "https://geo.ipify.org/api/v2/country,city?apiKey=at_xW2iYYvaky8AJaPg8N9uFueGzb3uB"
    fetch(req)
    .then(res => res.json())
    .then(r => {
        input.value = "";
        ip.textContent = "IP:";
        local.textContent = "Local:";
        latitude.textContent = "Latitude:";
        longitude.textContent = "Longitude:";
        fuso.textContent = "Fuso Horário:";
        asn.textContent = "ASN:";
        isp.textContent = "ISP:";
        map.setView([35, -20], 2);

        input.value = r.ip;
        ip.textContent = "IP: " + r.ip;
        local.textContent = "Local: " + r.location.city + ", " + r.location.region + ", " + r.location.country;
        latitude.textContent = "Latitude: " + r.location.lat;
        longitude.textContent = "Longitude: " + r.location.lng;
        fuso.textContent = "Fuso Horário: " + r.location.timezone;
        asn.textContent = "ASN: " + r.as.asn;
        isp.textContent = "ISP: " + r.isp;
        map.setView([r.location.lat, r.location.lng], 14);
    })
}