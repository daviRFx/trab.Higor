import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: { name: string; description: string; }[] = [];

  constructor() { }

  addItem(item: { name: string; description: string; }) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
  }
}
