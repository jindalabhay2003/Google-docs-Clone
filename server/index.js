import {Server} from 'socket.io';

import connection from './database/db.js';

import { getDocument,updateDocument } from './controller/document-controller.js';

const PORT = 9000;

connection();

const io = new Server(PORT,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", socket=>{

    socket.on('get-document', async documentId => {

        const data="";
        const document = await getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document',document.data);
        
        socket.on('send-changes',delta => {
            socket.broadcast.to(documentId).emit('receive-changes',delta);
    
        })

        socket.on('save-document', async data=>{
            await updateDocument(documentId,data);
        })
    })

    

})