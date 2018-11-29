var socket = io();

// to listen connection
socket.on('connect', function () {
    console.log('Connected to server');
})

// to listen disconnection
socket.on('disconnect', function () {
    console.log('Connexion lost')
})

//to send info
socket.emit('sendMessage', {
    user: 'Alberto',
    message: 'Hello world'
}, function ( resp ) {
    console.log(resp)
});

//to send info
socket.on('sendMessage', function (response) {
    console.log(response)
});