const robot = require('robotjs')

const startPresentation = () => {
  robot.keyTap('p', ['alt', 'command']) // alt == option (mac)
  // robot.keyTap('enter', ['shift', 'command']) // macOS: Google Slide
}

const stopPresentation = () => {
  robot.keyTap('escape')
}

const gotoNextSlide = () => {
  robot.keyTap('down')
}

const gotoPreviousSlide = () => {
  robot.keyTap('up')
}

const gotoFirstSlide = () => {
  robot.keyTap('home')
}

const gotoLastSlide = () => {
  robot.keyTap('end')
}

module.exports = {
  startPresentation,
  stopPresentation,
  gotoNextSlide,
  gotoPreviousSlide,
  gotoFirstSlide,
  gotoLastSlide
}
