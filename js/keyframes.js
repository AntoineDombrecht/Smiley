$.keyframe.define([
  {
    name: 'eye1blink',
    '0%': {'height': '70px', 'margin-top': '60px'},
    '50%': {'height': '2px', 'width': '70px', 'margin-left': '40px', 'margin-top': '90px'},
    '100%': {'height': '70px', 'margin-top': '60px'}
  },
  {
    name: 'eye2blink',
    '0%': {'height': '70px', 'margin-top': '60px'},
    '50%': {'height': '2px', 'width': '70px', 'margin-left': '180px', 'margin-top': '90px'},
    '100%': {'height': '70px', 'margin-top': '60px'}
  },
  {
    name: 'roll',
    '0%': {'transform': 'rotate(0deg)'},
    '25%': {'transform': 'rotate(40deg)'},
    '66%': {'transform': 'rotate(-40deg)'},
    '90%': {'transform': 'rotate(10deg)'},
    '100%': {'transform': 'rotate(0deg)'}
  }
]);
