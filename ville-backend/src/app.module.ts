import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VilleModule } from './ville/ville.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest-ville-project', { useNewUrlParser: true }),
        VilleModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
