import { Test, TestingModule } from '@nestjs/testing';
import { VilleController } from './ville.controller';

describe('VilleController', () => {
  let controller: VilleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VilleController],
    }).compile();

    controller = module.get<VilleController>(VilleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
