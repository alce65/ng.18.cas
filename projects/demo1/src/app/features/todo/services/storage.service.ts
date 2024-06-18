import { Injectable } from '@angular/core';
import { Task } from '../../../core/models/task';

@Injectable()
export class StorageService {
  private storage = window.localStorage;
  private keyStorage = 'tasks';

  set(value: Task[]) {
    this.storage.setItem(this.keyStorage, JSON.stringify(value));
  }

  get() {
    const value = this.storage.getItem(this.keyStorage);
    return value ? JSON.parse(value) as Task[]: [];
  }

  remove() {
    this.storage.removeItem(this.keyStorage);
  }
}
