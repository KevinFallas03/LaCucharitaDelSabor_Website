interface ContactInfo {
    name?: string;
    phone?: string;
}

export interface Customer {
    _id?: string;
    email?: string;
    contactInfo: ContactInfo;
}
  
export default Customer;