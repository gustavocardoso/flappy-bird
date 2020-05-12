console.log('Flappy Bird')

const sprites = new Image()
sprites.src = './assets/images/sprites.png'

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

const startScreen = {
  spriteX: 134,
  spriteY: 0,
  width: 174,
  height: 152,
  posX: canvas.width / 2 - 174 / 2,
  posY: 50,
  draw() {
    context.drawImage(
      sprites,
      startScreen.spriteX,
      startScreen.spriteY,
      startScreen.width,
      startScreen.height,
      startScreen.posX,
      startScreen.posY,
      startScreen.width,
      startScreen.height
    )
  }
}

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

let activeScreen = {}

function changeScreen(screen) {
  activeScreen = screen
}

const Screens = {
  START: {
    draw() {
      background.draw()
      floor.draw()
      flappyBird.draw()
      startScreen.draw()
    },

    click() {
      changeScreen(Screens.GAME)
    },

    update() {}
  },

  GAME: {
    draw() {
      background.draw()
      floor.draw()
      flappyBird.draw()
    },

    update() {
      flappyBird.update()
    }
  }
}

function loop() {
  activeScreen.draw()
  activeScreen.update()
  requestAnimationFrame(loop)
}

window.addEventListener(
  'click',
  function () {
    if (activeScreen.click) {
      activeScreen.click()
    }
  },
  false
)

changeScreen(Screens.START)
loop()
