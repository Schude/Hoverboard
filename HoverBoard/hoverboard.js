const container = document.querySelector('.hoverboard-container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const DEF_SQUARES = 684;


for (let i = 0; i < DEF_SQUARES; i++) {

    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square);


}

function setColor(square) {
    const color = getRandomColor();
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`


}

function removeColor(square) {
    square.style.backgroundColor = '#161313';
    square.style.boxShadow = '0 0 2px #000'

}



function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}