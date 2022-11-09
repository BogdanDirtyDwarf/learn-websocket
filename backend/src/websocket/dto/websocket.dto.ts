import { Socket } from 'socket.io';

export class WebSocketDTO {
  socket?: Socket
  message: string
}