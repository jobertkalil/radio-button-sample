import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { IOrder } from '../interfaces/app.interface';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss'],
})
export class OrderConfirmationComponent {
  @Input() order!: IOrder;
  @Output() orderBack = new EventEmitter();

  constructor(public lang: LanguageService) {
    this.lang.setLocale('en');
  }

  goBack() {
    //go back to food order
    this.orderBack.emit();
  }
}
