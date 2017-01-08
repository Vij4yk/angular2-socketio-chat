const socket    =   require('socket.io');

module.exports = function(server){
    var io = socket(server);

    io.on('connection', function(client){
        console.log('Client connected..');
        client.on('join-channel', function(args){
            if (args.data){
                client.join(args.data);
            }
        });
        client.on('leave-channel', function(args){
            if (args.data){
                client.leave(args.data);
            }
        });
        client.on('message', function(args){
            const channel = args.to || '';
            let channelExists = channel.rooms.find((r) => r === channel) != undefined;
            if (!channelExists)
                return;

            client.to(channel).emit('message', args.data);
        });

        client.on('disconnect', function(client){
            console.log('Client disconnected..');
        });

        client.emit('message', { hello: 'world' });
    });

    return io;
}