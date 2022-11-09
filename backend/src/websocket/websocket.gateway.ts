import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { WebSocketDTO } from './dto/websocket.dto';

@WebSocketGateway(81, { transports: ['websocket'] })
export class WebsocketGateway {
  @SubscribeMessage('chat')
  handleMessage(
    @MessageBody() payload: WebSocketDTO,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(`Socket: ${client.id} \n send message: ${payload}`);

    client.emit('chat', { ...payload, socket: client });
    client.broadcast.emit('chat', { ...payload, socket: client });
  }

  handleDisconnect(client: Socket) {
    console.log(`Socket disconnected: ${client.id}`);
  }

  handleConnection(client: Socket) {
    console.log(`Socket connected: ${client.id}`);
  }
}
