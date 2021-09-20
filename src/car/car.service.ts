import { Injectable, HttpException } from '@nestjs/common';
import { Cars } from './cars.mock';

@Injectable()
export class CarService {

    private cars = Cars;

    public getCars() {
        return this.cars;
    }

    public createCar(car) {
        return this.cars.push(car);
    }

    public getCarById(id : number) {
        const car = this.cars.find((car) => car.id ===  id);
        if(car) {
            throw new HttpException(`Car with given id ${id} not exists` , 404);
        }
        return car;
    }
}
