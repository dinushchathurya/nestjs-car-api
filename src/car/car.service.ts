import { Injectable, HttpException } from '@nestjs/common';
import { Cars } from './cars.mock';
import { resolve } from 'dns';

@Injectable()
export class CarService {

    private cars = Cars;

    public getCars() {
        return this.cars;
    }

    public createCar(car) {
        return this.cars.push(car);
    }

    public getCarById(id : number) : Promise<any> {
        const carId = Number(id);
        return new Promise((resolve)=>{
            const car = this.cars.find(car => car.id === carId);
            if (!car) {
                throw new HttpException(`Car with given id ${id} not exists`, 404);
            }
            return resolve (car);
        })
    }

    public updateCar(id: number, propertName: string, propertyValue: string): Promise<any> {
        const carId = Number(id);
        return new Promise((resolve) => {
            const index = this.cars.findIndex((car) => car.id === carId);
            if (!index) {
                throw new HttpException(`Car with given id ${id} not exists`, 404);
            }
            this.cars[index][propertName] = propertyValue;
            return resolve(this.cars[index]);
        })
    }


    public deleteCar(id: number): Promise<any> {
        const carId = Number(id);
        return new Promise((resolve) => {
            const index = this.cars.findIndex((car) => car.id === carId);
            if (index === -1) {
                throw new HttpException(`Car with given id ${id} not exists`, 404);
            }
            this.cars.slice(index, 1)
            return resolve(this.cars);
        })
    }
}
