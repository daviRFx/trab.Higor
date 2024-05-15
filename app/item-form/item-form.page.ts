import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.page.html',
  styleUrls: ['./item-form.page.scss'],
})
export class ItemFormPage {
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private itemService: ItemService) {
    this.itemForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if (this.itemForm.valid) {
      this.itemService.addItem(this.itemForm.value);
      console.log('Item added', this.itemForm.value);
      this.itemForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
