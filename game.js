console.log('Flappy Bird')

const sprites = new Image()
sprites.src = './assets/images/sprites.png'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const animSpeed = 15

let xPos = 0
let yPos = 0
let elWidth = 33
let elHeight = 24
let end = false

function loop() {
  if (yPos <= canvas.height - elHeight) {
    if (!end && xPos < canvas.width - 33) {
      xPos = xPos + animSpeed

      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(sprites, 0, 0, elWidth, elHeight, xPos, yPos, elWidth, elHeight)

      requestAnimationFrame(loop)
    } else if (xPos >= canvas.width - 33) {
      end = true
      yPos = yPos + elHeight
    }

    if (end && xPos > 0) {
      context.clearRect(0, 0, canvas.width, canvas.height)

      xPos = xPos - animSpeed
      context.drawImage(sprites, 0, 0, elWidth, elHeight, xPos, yPos, elWidth, elHeight)
      requestAnimationFrame(loop)
    } else if (end && xPos === 0) {
      end = false
      yPos = yPos + elHeight
      requestAnimationFrame(loop)
    }
  }
}

loop()
