

export default function Sketch(p) {
  let canvas, circles = []

  p.setup = function() {
      canvas = p.createCanvas(window.innerWidth, window.innerHeight)
      canvas.position(0, 0, 'fixed')
      canvas.style('z-index', '-999')
      for (let i = 0; i < 50; i++) {
        circles.push(createCircle())
      }
  }

  p.draw = () => {
    p.background(255)
    
    for(let circle of circles) {
      drawCircle(circle)
      circle.x += circle.speedX
      circle.y += circle.speedY
      if (circle.x > window.innerWidth || circle.x < 0) {
        circle.speedX *= -1
      }
      if (circle.y > window.innerHeight || circle.y < 0) {
        circle.speedY *= -1
      }
    }

    drawLine()
  }

  function createCircle() {
    return {
      x: p.random(30, window.innerWidth - 30),
      y: p.random(30, window.innerHeight - 30),
      speedX: p.random(-1, 1),
      speedY: p.random(-1, 1),
      size: p.random(30, 50),
      color: randomColor()
    }
  }

  function drawCircle(circle) {
    p.noStroke()
    p.fill(circle.color)
    p.circle(circle.x - 10, circle.y, circle.size)
  }


  function drawLine() {
    p.push()
    for(let mainCircle of circles) {
      for (let otherCircle of circles) {
        p.strokeWeight(5)
        p.stroke(0)
        let d = p.dist(mainCircle.x, mainCircle.y, otherCircle.X, otherCircle.y)
        if (d < 60 && d > 5) {
          p.line(mainCircle.x, mainCircle.y, otherCircle.x, otherCircle.y)
        }
      }
    }
    p.pop()
  }


  function randomColor() {
    return p.color(p.random(255), p.random(255), p.random(255), 50)
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (props.width) {
      p.resizeCanvas(props.width, props.height)
    } 
  }


}