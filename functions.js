function fillPixel(x, y){
    let c = document.getElementById('cvs').getContext('2d')
    c.fillStyle = "red"
    c.fillRect(x - 2, y - 2, 5, 5)
}

function drawLine(x1, y2, x2, y2){
    let c = document.getElementById('cvs').getContext('2d')
    c.fillStyle = "green"
    c.moveTo(x1, y1)
    c.lineTo(x2, y2)
}