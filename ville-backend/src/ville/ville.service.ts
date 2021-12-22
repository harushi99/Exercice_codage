import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Ville } from '../common/interfaces/ville.interface';

@Injectable()
export class VilleService {

    constructor(@InjectModel('Ville') private readonly villeModel: Model<Ville>) { }

    async getVille(villeID): Promise<Ville> {
        const ville = await this.villeModel
            .findById(villeID)
            .exec();
        return ville;
    }

    async getVilles(): Promise<Ville[]> {
        const villes = await this.villeModel.find().exec();
        return villes;
    }

    findVilles(options) {
        return this.villeModel.find(options);
    }

    count(options) {
        return this.villeModel.count(options).exec();
    }
}
