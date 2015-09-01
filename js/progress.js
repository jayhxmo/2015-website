var html = new ProgressBar.Circle('#html', {
    color: '#3498db',
    strokeWidth: 2,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var sass = new ProgressBar.Circle('#sass', {
    color: '#3498db',
    strokeWidth: 2,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var csharp = new ProgressBar.Circle('#csharp', {
    color: '#3498db',
    strokeWidth: 2,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var java = new ProgressBar.Circle('#java', {
    color: '#3498db',
    strokeWidth: 2,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var javascript = new ProgressBar.Circle('#javascript', {
    color: '#3498db',
    strokeWidth: 2,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var graphic = new ProgressBar.Circle('#graphic-design', {
    color: '#3498db',
    strokeWidth: 2,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

html.animate(0.95, function() {
})

sass.animate(0.75, function() {
})

csharp.animate(0.80, function() {
})

java.animate(0.80, function() {
})

javascript.animate(0.60, function() {
})

graphic.animate(0.60, function() {
})

//circle.set(0);