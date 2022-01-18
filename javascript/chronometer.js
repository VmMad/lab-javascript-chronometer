class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start() {
  
    let asdf = setInterval(()=>{
    this.currentTime++
      console.log(chronometer.split()[4])
    },1000) 
}

  getMinutes() {
    return Math.floor((this.currentTime / 60))
  }

  getSeconds(seconds) {
    return (this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    if (value < 10){
    return `0${value}`
  } else {
      return `${value}`
  }
  }

  stop() {
    clearInterval(this.asdf)
    console.log('aaaaaaaaaaa')
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
