import { USERS } from './mock-data/users';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(4);
      const secondUser = users[1];
      expect(secondUser.name).toBe('Ervin Howell');
    });
    const mockReq = testingController.expectOne('api/users');
    mockReq.flush(Object.values(USERS));
    expect(mockReq.request.method).toBe('GET');
  });

  it('should get user by ID', () => {
    const userId = 1;
    service.getUserById(userId).subscribe((user: any) => {
      expect(user).toBeTruthy();
      expect(user.name).toBe('Leanne Graham');
      expect(user.username).toBe('Bret');
      expect(mocReq.request.method).toBe('GET');
    });

    const mocReq = testingController.expectOne(`api/users/${userId}`);
    mocReq.flush(USERS[0]);
  });

  it('should update user by id', () => {
    const userId = 1;
    service
      .updateUser(userId, { name: 'John Doe', username: 'john_doe' })
      .subscribe((user: any) => {
        expect(user).toBeTruthy();
        expect(user.id).toBe(1);
      });

    const mocReq = testingController.expectOne(`api/users/${userId}`);
    mocReq.flush({ ...USERS[0], name: 'John Doe' });
    expect(mocReq.request.method).toBe('PUT');
    expect(mocReq.request.body).toEqual({
      name: 'John Doe',
      username: 'john_doe',
    });
  });

  afterEach(() => {
    testingController.verify();
  });
});
