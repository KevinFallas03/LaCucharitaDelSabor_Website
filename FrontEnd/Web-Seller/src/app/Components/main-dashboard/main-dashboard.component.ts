import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer'

import { MenuService } from 'src/app/Services/Menu/menu.service'
import { DashboardService } from 'src/app/Services/Dashboard/dashboard.service'
import { ContentObserver } from '@angular/cdk/observers';

export interface TopCostumers {
  name: string,
  email: string,
  orders: number
}

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  customers: TopCostumers[] = [
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
    //this.getTop5Customers();
    this.setCustomerList();
    this.getTop5Products();
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

  async getTop5Customers(){
    let customers = await this.dashboardService.getTop5Customers();
    return customers
  }

  async setCustomerList(){
    let customers = await this.getTop5Customers();
    customers.forEach((customer:any) => {
      this.customers.push(customer);
    });
    console.log(this.customers);

  }

  async getTop5Products(){
    let products = await this.dashboardService.getTop5Products();
    products.forEach(function(product:any) {
      //console.log(product);
    })
    
  }

}
