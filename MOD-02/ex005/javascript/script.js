const p=document.createElement("p")
p.textContent="Consumindo API de Clima"
document.body.appendChild(p)
document.body.style.fontFamily="Arial"

const apiKey="d2d62f7975863098cbd673c8d4c6639b"
const cidade='London'
fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d2d6f7975863098cbd673c8d4c6639b")