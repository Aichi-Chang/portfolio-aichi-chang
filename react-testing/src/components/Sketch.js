

export default function Sketch(p) {
  let canvas;

  p.setup = function() {
      canvas = p.createCanvas(window.innerWidth, window.innerHeight)
      canvas.position(0, 0, 'fixed')
      canvas.style('z-index', '-999')
      p.noStroke()
  }

  p.draw = () => {
    p.background(200)
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (props.width) {
      p.resizeCanvas(props.width, props.height)
    }
    
  }

  // p.changeBG = (props) => {
  //   if (props.width !== null || props.height !== null)
  //   canvas = p.createCanvas(props.width, props.height)
  // }




}