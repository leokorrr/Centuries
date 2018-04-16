var facts = ['Hluboka Castle is a copy of Windsor Castle in United Kingdom',
          'The surrounding park of Lednice castle is laid out in an English garden style and contains a range of Romantic follies by Joseph Hardtmuth',
          'During the last renovation a conference hall was added on the first floor of the Greater Castle, which serves for scientific meetings and seminars as well as for commercial use.',
          'Prague Castle is the largest ancient castle in the world, occupying an area of almost 70,000 square metres',
          'Krumlov has a museum dedicated to the painter Egon Schiele, who lived in the town.'
         ];

var random = Math.floor(Math.random() * 5);

document.getElementById('fact').innerHTML = facts[random];