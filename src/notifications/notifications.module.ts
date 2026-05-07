// import { forwardRef, Module } from '@nestjs/common';
// import { NotificationsService } from './notifications.service';
// import { OrdersModule } from 'src/orders/orders.module';

// @Module({
//   imports: [forwardRef(() => OrdersModule)],
//   providers: [NotificationsService],
//   exports: [NotificationsService],
// })
// export class NotificationsModule {}
import { CoreModule } from 'src/core/core.module';
import { NotificationsService } from './notifications.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
