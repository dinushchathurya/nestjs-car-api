import { Injectable } from '@nestjs/common';
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
}
