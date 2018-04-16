var hluboka_facts = ['It received its present appearance under Count Jan Adam of Schwarzenberg.',
          'The castle has been used in a scene of the movie Shanghai Knights.',
          'The castle has also been used as a location for the Eastern Coven in the movie Underworld: Blood Wars.',
          'Decision to rebuild the castle to nowadays appearance was widely critisised',
          'According to the fables the castle was named as „The Deep one“ because of the deep well near that place.'
         ];

var random = Math.floor(Math.random() * 5);

document.getElementById('hluboka-fact').innerHTML = hluboka_facts[random];