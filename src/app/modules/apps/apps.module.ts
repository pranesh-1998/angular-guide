import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroRoutes } from './apps.routing.module';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { LineItemsComponent } from './line-items/line-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';


@NgModule({
  declarations: [
    CustomersComponent,
    OrdersComponent,
    LineItemsComponent,
    ItemDetailsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(IntroRoutes),
  ]
})
export class AppsModule { }