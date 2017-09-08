//Make connection
var socket = io.connect(location.origin.replace('/^http', 'ws'));



    function initElement() {
      var trigger1 = document.getElementById("button1");
      trigger1.onclick = showModel1;
      trigger1.onclick = showInfo1;

      var trigger2 = document.getElementById("button2");
      trigger2.onclick = showModel2;
      trigger2.onclick = showInfo2;
    };

  function showInfo1(event){
    var info1 = document.getElementById("info1");
    var info2 = document.getElementById("info2");
    info1.style.display = 'block';
    info2.style.display = 'none';
  }

  function showInfo2(event){
    var info1 = document.getElementById("info1");
    var info2 = document.getElementById("info2");
    info1.style.display = 'none';
    info2.style.display = 'block';
  }

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
      socket.emit('show1', 'data');
      socket.emit('info1', 'data');
    });
    btn2.addEventListener('click',function(){
      socket.emit('show2', 'data');
      socket.emit('info2', 'data');
    });

    //Listen for events
    socket.on('show1',function(data){
      showModel1();
      showInfo1();
    });
    socket.on('show2',function(data){
      showModel2();
      showInfo2();
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
