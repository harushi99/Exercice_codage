import { Document } from 'mongoose';

export interface Ville extends Document {
    readonly codePostal: string;
    readonly codeCommune: string;
    readonly nomCommune: string;
    readonly libelleAcheminement: string;
}