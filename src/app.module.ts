import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { validationSchema } from './validationSchema';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
    }),
    DatabaseModule,
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}
