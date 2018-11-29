const { io } = require('../server');

io.on('connection', (client) =>{
    console.log('User connected');
    client.on('disconnect', ()=>{
        console.log('User disconnected');
    });

    // Listen client
    client.on('sendMessage', (data, callback) =>{
        console.log(data);

        client.broadcast.emit('sendMessage', data);
        /*if(message.user){
            callback({
                response: 'All good man'
            });
        }else{
            callback({
                response: 'All shit!!'
            });
        }*/

    });

    // Send message
    client.emit('sendMessage', {
        user: 'Alberto',
        message: 'Welcome to this app'
    });

});