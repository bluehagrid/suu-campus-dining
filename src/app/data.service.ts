import { Injectable, DebugElement } from '@angular/core';
import { Item } from './Item';
import { User } from './User';
import { Order } from './Order';
import * as itemData from '../assets/item.json'
import * as userData from '../assets/user.json'
import * as orderData from '../assets/order.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemJson:any = (itemData as any).default;
  userJson:any = (userData as any).default;
  orderJson:any = (orderData as any).default;

  allItems:Item[];
  allUsers:User[];
  allOrders:Order[];

  itemsInCart:Item[];

  constructor() {
    console.log("Creating Data Service");
    this.allItems = [];
    this.allUsers = [];
    this.allOrders = [];

    this.itemsInCart = [];

    this.retrieveAllItems();
    this.retrieveAllUsers();
    this.retrieveAllOrders();
  }

  private retrieveAllItems(){
    var json = this.itemJson

    for (let i = 0; i < json.length; i++) {
      this.allItems.push(Item.from(json[i]));
      //console.log(this.allItems[i].item_name);
    }
  }

  private retrieveAllUsers(){
    var json = this.userJson

    for (let i = 0; i < json.length; i++) {
      this.allUsers.push(User.from(json[i]));
      //console.log(this.allUsers[i].USER_ID);
    }
  }

  private retrieveAllOrders(){
    var json = this.orderJson

    for (let i = 0; i < json.length; i++) {
      this.allOrders.push(Order.from(json[i]));
      //console.log(this.allOrders[i].final_price);
    }
  }

  addToCart(item:Item):number{
    return this.itemsInCart.push(item);
  }

  getCartTotal():number{
    var total = 0;
    for (let i = 0; i < this.itemsInCart.length; i++) {
      total += this.itemsInCart[i].price;
    }
    return total;
  }

}