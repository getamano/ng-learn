import { TestBed } from '@angular/core/testing';
import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('Test CalcService', () => {
  let shared: SharedService;
  let cals: CalcService;

  beforeEach(() => {
    // TestBed is used to provide the testing environment for the angular application
    // such as dependency injection, change detection, and testing utilities
    shared = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
    TestBed.configureTestingModule({
      providers: [CalcService, { provide: SharedService, useValue: shared }],
    });

    cals = TestBed.inject(CalcService);
  });

  it('should multiply 2 numbers', () => {
    const result = cals.multiply(2, 5);
    expect(result).toBe(10);
  });

  it('it should add 2 numbers', () => {
    const result = cals.add(2, 5);
    expect(result).toBe(7);
  });

  /*it('it should call mySharedFunction function', () => {
    //const shared = new SharedService(); // here instead of instantiating the service we can use jasmine spy

    const shared = jasmine.createSpyObj('SharedService', ['mySharedFunction']);

    //spyOn(sharedService, 'mySharedFunction').and.callThrough(); // to call the original function
    // spyOn(shared, 'mySharedFunction'); // to call the sypOn function

    const cals = new CalcService(shared);
    cals.multiply(2, 5);
    expect(shared.mySharedFunction).toHaveBeenCalled();
  });*/
});
