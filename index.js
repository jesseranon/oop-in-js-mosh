function Stopwatch() {
    let running = false,
        startTime = [],
        endTime = [];
    // initially, duration is 0
    // sw.start()
    // if running, start will throw an error.
    this.start = function() {
        if (running) throw new Error('Stopwatch has already started.');
        startTime.push(new Date());
        running = true;
    };
    // sw.stop()
    // if stopped, stop will throw an error.
    this.stop = function() {
        if (!running) throw new Error('Stopwatch has not started.');
        endTime.push(new Date());
        running = false;
    };
    // sw.reset()
    // takes stopwatch to initial state
    this.reset = function() {
        startTime = [];
        endTime = [];
    };
    // set sw.duration getter
    Object.defineProperty(this, 'duration', {
        get: function() {
            if (startTime.length === 0) return 0;
            let res = 0;
            let end;
            for (let t = 0; t < startTime.length; t++) {
                if (!endTime[t]) end = new Date();
                else end = endTime[t];
                res += end - startTime[t];
            }
            return res / 1000;
        }
    });
}

/* Mosh's implementation of stop and defineProperty
this.stop = function() {
    if (!running) throw new Error('...');
    running = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
}

this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
}

Object.defineProperty(this, 'duration', {
    get: function() {return duration;}
});
*/