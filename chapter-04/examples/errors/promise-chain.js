'use strict';

Promise.reject(new Error('Oops !'))
  .catch((error) => {
    console.error('Une erreur s\'est produite : %s', error.message);  // <1>
    return 'Aaah';                                                    // <2>
  })
  .then((message) => console.log(message))                            // <3>
  .catch((error) => console.error(error));                            // <4>
