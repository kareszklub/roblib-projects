import { init, stop } from '@kareszklub/roblib-client';
import { io } from 'socket.io-client';

await init(io, process.env['ROBLIB_IP'] || '192.168.0.1:5000');

stop();

console.log('STOPPING ROBOT');
