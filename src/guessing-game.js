class GuessingGame {
    constructor(min, max, mid) {
      this.min = min;
      this.max = max;
      this.mid = mid;
    }
  
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
    guess() {
      this.mid = this.min + (this.max-this.min) / 2;
      return Math.ceil(this.mid);
    }
    lower() {
      this.max = Math.ceil(this.mid);
    }
    greater() {
      this.min = Math.ceil(this.mid);
    }
}

module.exports = GuessingGame;
