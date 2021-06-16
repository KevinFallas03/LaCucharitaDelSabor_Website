import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer'

import { MenuService } from 'src/app/Services/Menu/menu.service'
import { DashboardService } from 'src/app/Services/Dashboard/dashboard.service'
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  customers: Customer[] = [
    {name: 'Ignacio Álvarez', email: 'nacho.alv@gmail.com', orders: 35},
    {name: 'Kevin Fallas', email: 'nacho.alv@gmail.com', orders: 20},
    {name: 'Andrés Aguilar', email: 'nacho.alv@gmail.com', orders: 15},
    {name: 'Joshep Tenorio', email: 'nacho.alv@gmail.com', orders: 14},
    {name: 'Carlos Varela', email: 'nacho.alv@gmail.com', orders: 10},
  ];

  images = [
    {path: 'https://i.imgur.com/6MS7V8L.png'},
    {path: 'https://i.imgur.com/AWghc3b.png'},
    {path: 'https://i.imgur.com/6MS7V8L.png'},
    {path: 'https://i.imgur.com/AWghc3b.png'},
    {path: 'https://i.imgur.com/6MS7V8L.png'},
    {path: 'https://i.imgur.com/AWghc3b.png'},
    {path: 'https://i.imgur.com/6MS7V8L.png'},
    {path: 'https://i.imgur.com/AWghc3b.png'},
  ];

  tempCustomer = []

  completeOrdersAmount = 0;

  pendingOrdersAmount = 0;

  higherSellValue = 0;

  allOrdersAmount = 0;

  constructor(
    public menuService: MenuService,
    public dashboardService: DashboardService
  ) { }

  displayedColumns: string[] = ['name', 'email', 'orders'];
  dataSource = this.customers;

  ngOnInit(): void {
    this.getAllOrdersAmount();
    this.getCompleteOrdersAmount();
    this.getPendingOrdersAmount();
    this.getHigherSellerValue();
  }

  getAllOrdersAmount(){
    this.dashboardService.getOrdersAmount().subscribe(
      data => {
        this.allOrdersAmount = data.amount;
      }
    )
  }

  getCompleteOrdersAmount(){
    this.dashboardService.getCompletedAmount().subscribe(
      data => {
        this.completeOrdersAmount = data.value;
      }
    )
  }

  getPendingOrdersAmount(){
    this.dashboardService.getPendingAmount().subscribe(
      data => {
        console.log(data.value);
        this.pendingOrdersAmount = data.value;
      }
    )
  }

  getHigherSellerValue(){
    this.dashboardService.getHigherSell().subscribe(
      data => {
        this.higherSellValue = data[0].totalAmount;
      }
    )
  }

  getTop5Customers(){
    this.dashboardService.getTop5Customers().subscribe(
      data => {
        this.tempCustomer = data
      }
    )
  }

  setCustomerList(){
    var tempCustomer = {}
    this.tempCustomer.forEach(customer  => {
      this.dashboardService.getUserName(customer).subscribe(
        data => this.customers.push()
      )
    });
  }

}
