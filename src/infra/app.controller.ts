import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
//import { Notification } from 'src/application/entities/notification';
import { CreateNotificationBody } from './create-notification-body';
//import { Content } from 'src/application/entities/content';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {

   const { recipientId, content, category } = body;

   await this.prisma.notification.create({
     data: {
       id: randomUUID(),
       content,
       category,
       recipientId,
      },
  });
  
}

}