const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
       console.log(e.target);  //ye bata dega ki event aa kaha se raha hai

    //    if(e.target.id === 'grey') {
    //     body.style.backgroundColor = 'grey';
    //    }
    //    if(e.target.id === 'white') {
    //     body.style.backgroundColor = 'white';
    //    }
    //    if(e.target.id === 'blue') {
    //     body.style.backgroundColor = 'blue';
    //    }
    //    if(e.target.id === 'yellow') {
    //     body.style.backgroundColor = 'yellow';
    //    }

//using xwitch keys
       switch(e.target.id) {
         case 'grey':
           body.style.backgroundColor = 'grey';
           break;
         case 'white':
           body.style.backgroundColor = 'white';
           break;
         case 'blue':
           body.style.backgroundColor = 'blue';
           break;
         case 'yellow':
           body.style.backgroundColor = 'yellow';
           break;
       }
    });

});