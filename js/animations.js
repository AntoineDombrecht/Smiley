var interval = 3000;

function blink() {
  $("#eye1").playKeyframe({
    name: 'eye1blink',
    duration: '200ms',
    timingFunction: 'linear',
    complete: function(){$("#eye1").resetKeyframe();}
  });
  $("#eye2").playKeyframe({
    name: 'eye2blink',
    duration: '200ms',
    timingFunction: 'linear',
    complete: function(){$("#eye2").resetKeyframe();}
  });

  interval = Math.random() * (6000 - 3000) + 3000;
  setTimeout(blink, interval);
}

setTimeout(blink, interval);

$("#eye1").click(function() {
  $("#eye1").playKeyframe({
    name: 'eye1blink',
    duration: '200ms',
    timingFunction: 'linear',
    complete: function(){$("#eye1").resetKeyframe();}
  });
});

$("#eye2").click(function() {
  $("#eye2").playKeyframe({
    name: 'eye2blink',
    duration: '200ms',
    timingFunction: 'linear',
    complete: function(){$("#eye2").resetKeyframe();}
  });
});
