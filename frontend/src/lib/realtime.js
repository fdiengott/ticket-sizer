import client from 'socket.io-client';

export const socket = client('http://localhost:3000');
