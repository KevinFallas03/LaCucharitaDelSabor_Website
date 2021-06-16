import { Product } from 'src/app/Models/Product';
import { Delivery } from 'src/app/Models/Delivery';
import { Customer } from 'src/app/Models/Customer';



export interface Order {
    _id?: string;
    finished?: boolean;
    totalAmount?: number;
    orderNote?: string;
    orderInfo: Product[];
    deliveryInfo: Delivery;
    customerInfo: Customer;
  }
  
export default Order;