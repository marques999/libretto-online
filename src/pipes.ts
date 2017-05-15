import { Pipe, 
    PipeTransform } from '@angular/core';

import {
    Constants
} from './api/globals/';

@Pipe({ name: 'statusFormat' })
export class StatusFormatPipe implements PipeTransform {

    constructor ( private constants : Constants) {

    }
    transform(value: number): string{
        return "ok";
    }
}