class GuessingGame {
    constructor(num) {
        //this.num = num;
    }

    setRange(min, max) {
        this.low=min;
        this.great=max;
    }
    guess() {
        this.average = Math.round (this.low+(this.great-this.low)/2);
        return this.average;
    }
    lower() {
        this.great=this.average;
    }
    greater() {
        this.low = this.average;
    }
}

module.exports = GuessingGame;
