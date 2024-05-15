import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {
  items: { name: string; description: string; }[] = []; // Inicializar a variável

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  clearItems() {
    this.itemService.clearItems();
    this.items = this.itemService.getItems();
  }
}
