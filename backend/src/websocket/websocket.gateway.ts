import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { WebSocketDTO } from "./dto/websocket.dto";

@WebSocketGateway(81, { transports: ['websocket'] })
export class WebsocketGateway {
  @SubscribeMessage('chat')
  handleMessage(
    @MessageBody() payload: WebSocketDTO,
    @ConnectedSocket() client: Socket,
  ): WebSocketDTO {
    console.log(
      `Client: ${client.id}
      send message: ${payload}
    `);

    return payload;
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }
}
