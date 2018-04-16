var krumlov_facts = ['The large coach-house from the 18th century remained in its original extent',
          'Czech Krumlov is the second largest castle complex in the Czech Republic.',
          'The Cesky Krumlov Castle complex has a beautiful Baroque Castle Garden',
          'The Castle Lapidarium, the main cellar area houses the original statues from the Cloak Bridge and the Castle Garden.',
          'Czech Krumlov consists of forty palaces and buildings, five castle courts and the seven-hectare garden area.'
         ];

var random = Math.floor(Math.random() * 5);

document.getElementById('krumlov-fact').innerHTML = krumlov_facts[random];