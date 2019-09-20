export interface ICustomer {

    "id":Number,
    "firstName": String,
    "lastName":String,
    "gender": String,
    "address": String,
    "city": String,
    "state": {
        "abbreviation": String,
        "name": String
             },
   "orders": [
       {
          "productName": String,
         "itemCost": Number
       },
       {
          "productName": String,
          "itemCost": Number
       }
     ],
     "latitude"?: Number,
     "longitude"?: Number 
}