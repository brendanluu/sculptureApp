//Make connection
var socket = io.connect('http://localhost:4000');



    function initElement() {
      var trigger1 = document.getElementById("button1");
      trigger1.onclick = showModel1;

      var trigger2 = document.getElementById("button2");
      trigger2.onclick = showModel2;
    };

    function showModel1(event) {
      console.log("1");
      var sceneEl1 = document.querySelector('a-scene');
      var sculpture1 = sceneEl1.querySelector('#sculpture1');
      var sculpture2 = sceneEl1.querySelector('#sculpture2');
      sculpture1.setAttribute('visible', true);
      sculpture2.setAttribute('visible', false);
    };
    function showModel2(event) {
      console.log("2");
      var sceneEl2 = document.querySelector('a-scene');
      var sculpture1 = sceneEl2.querySelector('#sculpture1');
      var sculpture2 = sceneEl2.querySelector('#sculpture2');
      sculpture1.setAttribute('visible', false);
      sculpture2.setAttribute('visible', true);
    };

    // Query DOM


    var   btn1 = document.getElementById('button1'),
          btn2 = document.getElementById('button2');

    // Emit events

    btn1.addEventListener('click',function(){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      io.emit('show1', 'data');
    });
    btn2.addEventListener('click',function(){
      io.emit('show2', 'data');
=======
=======
>>>>>>> parent of c32bce9... Revert "sync models"
=======
>>>>>>> parent of c32bce9... Revert "sync models"
      socket.emit('show1', 'data');
    });
    btn2.addEventListener('click',function(){
      socket.emit('show2', 'data');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of c32bce9... Revert "sync models"
=======
>>>>>>> parent of c32bce9... Revert "sync models"
=======
>>>>>>> parent of c32bce9... Revert "sync models"
    });

    //Listen for events
    socket.on('show1',function(data){
      showModel1();
    });
    socket.on('show2',function(data){
      showModel2();
    });





// var message = document.getElementById('message'),
//       handle = document.getElementById('handle'),
//       btn = document.getElementById('send'),
//       output = document.getElementById('output');
//
// // Emit events
//
// btn.addEventListener('click',function(){
//   socket.emit('chat', {
//     message: message.value,
//     handle:handle.value
//   });
// });
//
// //Listen for events
// socket.on('chat',function(data){
//   output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
// });
