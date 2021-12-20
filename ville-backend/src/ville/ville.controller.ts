import { Controller, Get, Res, HttpStatus, Req } from '@nestjs/common';
import { VilleService } from './ville.service';


@Controller('api/ville')
export class VilleController {

    constructor(private villeService: VilleService) { }

    // Fetch all villes
    @Get('all')
    async getVilles(@Res() res) {
        const villes = await this.villeService.getVilles();
        return res.status(HttpStatus.OK).json(villes);
    }

    @Get('frontend')
    async findVilles(@Req() req) {
        let options = {};

        if (req.query.search) {
            options = {
                $or: [
                    { codePostal: new RegExp(req.query.search.toString(), 'i') },
                    { codeCommune: new RegExp(req.query.search.toString(), 'i') },
                    { nomCommune: new RegExp(req.query.search.toString(), 'i') },
                    { libelleAcheminement: new RegExp(req.query.search.toString(), 'i') },
                ]
            }
        }

        const query = this.villeService.findVilles(options);

        if (req.query.sort) {
            query.sort({
                nomCommune: req.query.sort
            })
        }

        const page: number = parseInt(req.query.page) || 1;
        const limit = 100;

        const villes = await query.skip((page - 1)*limit).limit(limit).exec();
        const total = await this.villeService.count(options);
        return {
            villes,
            total
        };
    }

}
