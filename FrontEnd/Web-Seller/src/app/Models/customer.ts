export interface Customer {
    _id?: string;
    email?: string;
    orders?: number;
    customerInfo?: [
        {
            name?: string,
            phone?: string
        }
    ];
  }
  
export default Customer;