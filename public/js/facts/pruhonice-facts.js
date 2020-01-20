var pruhonice_facts = ['With a total area of 250 hectares, the Průhonice Park along with Průhonice castle are a Czech National Historic Landmark and a UNESCO World Heritage site.',
          'The current appearance of the Castle dates to the late 19th century.',
          'The South Wing, also known as the Little Castle.',
          'Southern front opens onto a large terrace with a view of the lake underneath and with decorative gables loosely inspired by the Wallenstein Palace in Prague.',
          'The interior of the Castle is mostly new following the recent renovation in 2010.'
         ];

var random = Math.floor(Math.random() * 5);

document.getElementById('pruhonice-fact').innerHTML = pruhonice_facts[random];