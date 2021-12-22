import * as mongoose from 'mongoose';

export const VilleSchema = new mongoose.Schema({
  codePostal: String,
  codeCommune: String,
  nomCommune: String,
  libelleAcheminement: String,
});