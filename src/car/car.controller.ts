import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common';
import { CarService } from './car.service';
import { createCarDto } from './createCar.dto';
@Controller('car')
export class CarController {

    constructor(private carService: CarService ) {}

    @Get()
    public getCars(){
        return this.carService.getCars();
    }

    @Get(':id')
    public async getCarByID(@Param('id') id:number) {
        return this.carService.getCarById(id)
    }

    @Post()
    public createCar(@Body() car:createCarDto){
        return this.carService.createCar(car);
    }

    @Put(':id')
    public updateCar(@Param('id') id: number, @Query() query) {
        const propertName = query.property_name;
        const propertValue = query.property_value;
        return this.carService.updateCar(id, propertName, propertValue);
    }

    @Delete(':id')
    public deletCar(@Param('id') id: number) {
        return this.carService.deleteCar(id)
    }

}
