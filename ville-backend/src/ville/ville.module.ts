import { Module } from '@nestjs/common';
import { VilleService } from './ville.service';
import { VilleController } from './ville.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VilleSchema } from '../common/schemas/ville.schema';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Ville', schema: VilleSchema }]),
    ],
    providers: [VilleService],
    controllers: [VilleController]
})
export class VilleModule { }
