import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(`api/users`);
  }

  getUserById(id: number) {
    return this.http.get(`api/users/${id}`);
  }

  updateUser(id: number, user: any) {
    return this.http.put(`api/users/${id}`, user);
  }
}
