console.log('Flappy Bird')

const sprites = new Image()
sprites.src = './assets/images/sprites.png'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const floor = {
  spriteX: 0,
  spriteY: 610,
  width: 224,
  height: 112,
  posX: 0,
  posY: canvas.height - 112,
  draw() {
    context.drawImage(
      sprites,
      floor.spriteX,
      floor.spriteY,
      floor.width,
      floor.height,
      floor.posX,
      floor.posY,
      floor.width,
      floor.height
    )

    context.drawImage(
      sprites,
      floor.spriteX,
      floor.spriteY,
      floor.width,
      floor.height,
      floor.posX + floor.width,
      floor.posY,
      floor.width,
      floor.height
    )
  }
}

const background = {
  spriteX: 390,
  spriteY: 0,
  width: 275,
  height: 204,
  posX: 0,
  posY: canvas.height - 204,
  draw() {
    context.fillStyle = '#70c5ce'
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.drawImage(
      sprites,
      background.spriteX,
      background.spriteY,
      background.width,
      background.height,
      background.posX,
      background.posY,
      background.width,
      background.height
    )

    context.drawImage(
      sprites,
      background.spriteX,
      background.spriteY,
      background.width,
      background.height,
      background.posX + background.width,
      background.posY,
      background.width,
      background.height
    )
  }
}

const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  width: 33,
  height: 24,
  posX: 10,
  posY: 50,
  gravity: 0.25,
  velocity: 0,

  update() {
    flappyBird.velocity = flappyBird.velocity + flappyBird.gravity
    flappyBird.posY = flappyBird.posY + flappyBird.velocity
  },

  draw() {
    context.drawImage(
      sprites,
      flappyBird.spriteX,
      flappyBird.spriteY,
      flappyBird.width,
      flappyBird.height,
      flappyBird.posX,
      flappyBird.posY,
      flappyBird.width,
      flappyBird.height
    )
  }
}

function loop() {
  flappyBird.update()

  background.draw()
  floor.draw()
  flappyBird.draw()

  requestAnimationFrame(loop)
}

loop()
