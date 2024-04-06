import { Injectable } from '@angular/core';
import { Power } from '../interfaces/power';
import { MOCK_POWERS } from '../../../constants/mocks';

@Injectable({
  providedIn: 'root'
})
export class PowersService {

  constructor() { }

  getPowers(): Power[] {
    return MOCK_POWERS;
  }
}
