import { Body, Post, Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() orderDto: Record<string, unknown>) {
    return this.ordersService.createOrder(orderDto);
  }
}
