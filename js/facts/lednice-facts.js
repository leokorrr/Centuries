var lednice_facts = ['Lednice castle has a minaret',
          'Landlords from Lichtenstein didn´t live in poverty',
          'Lichtensteins took everything they could in 1943',
          'Aristocracy used  this monstrous fairy-taleish building just as a cottage.',
          'Lednice Chateau is the jewel in the crown of the Lednice-Valtice Complex'
         ];

var random = Math.floor(Math.random() * 5);

document.getElementById('lednice-fact').innerHTML = lednice_facts[random];