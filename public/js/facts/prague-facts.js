var prague_facts = ['The castle is among the most visited tourist attractions in Prague attracting over 1.8 million visitors annually.',
          'During the Hussite Wars and the following decades, the castle was not inhabited.',
          'Adolf Hitler spent a night in the Prague Castle, "proudly surveying his new possession." ',
          'The Summer Shakespeare Festival regularly takes place in the courtyard of Burgrave Palace.',
          'The neighborhood around Prague Castle is called Hradchany.'
         ];

var random = Math.floor(Math.random() * 5);

document.getElementById('prague-fact').innerHTML = prague_facts[random];