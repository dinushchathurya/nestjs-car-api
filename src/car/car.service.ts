import { Injectable } from '@nestjs/common';
import { Cars } from './cars.mock';

@Injectable()
export class CarService {

    private cars = Cars;
    public async getCars() {
        return this.cars;
    }
}
