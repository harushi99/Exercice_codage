import { Controller, Get, Res, HttpStatus, Req, Logger } from '@nestjs/common';
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

    @Get('search')
    async findVillesOutreMere(@Req() req) {
        let options = {};
        let codeRegionOutreMer = ["^971[0-9]{2}$", "^972[0-9]{2}$", "^973[0-9]{2}$", "^974[0-9]{2}$", "^976[0-9]{2}$"];
        var t = codeRegionOutreMer.join('|');

        if (req.query.search) {
            options = {
                $and: [
                    {
                        $or: [
                            { codePostal: new RegExp(req.query.search.toString(), 'i') },
                            { codeCommune: new RegExp(req.query.search.toString(), 'i') },
                            { nomCommune: new RegExp(req.query.search.toString(), 'i') },
                            { libelleAcheminement: new RegExp(req.query.search.toString(), 'i') },
                        ]
                    }
                ]
            }
        } 

        const query = this.villeService.findVilles(options);

        if (req.query.sort) {
            query.sort({
                nomCommune: req.query.sort
            })
        }
        Logger.log(query);
        
        const limit = 100;

        var villes = await query.exec();

        var villesMetropole = [];
        var villesOutreMere = [];
        var totalOutreMere = 0;
        var totalMetropole = 0;
        villes.forEach((ville) => {
            if (ville.codePostal.match(t)) {
                if (totalOutreMere < limit) {
                    villesOutreMere.push(ville);
                    totalOutreMere++;
                }
            } else {
                if (totalMetropole < limit) {
                    villesMetropole.push(ville);
                    totalMetropole++;
                }
            }
        });
        return {
            villesMetropole,
            villesOutreMere,
            totalOutreMere,
            totalMetropole
        };
    }

}
