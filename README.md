# products

## Installation and Setup

### Install node js 

>apt install nodejs

>apt install npm

### Run server
- Clone the repository 
- Run below commands to start the server : 
  >npm install
  
  >node app.js
  
  
## API details 
API endpoint : ec2-35-183-34-116.ca-central-1.compute.amazonaws.com

Port : 3000

List of APIs 


1. get all products

   GET  ec2-35-183-34-116.ca-central-1.compute.amazonaws.com:3000/api/products
   
2. get products by applying filters - brand, category, gender

   GET  ec2-35-183-34-116.ca-central-1.compute.amazonaws.com:3000/api/products

    params : 
    
        brand : Roadster
        
        gender : Men
        
        category : Jeans
        
3. search products by product name
 
    GET  ec2-35-183-34-116.ca-central-1.compute.amazonaws.com:3000/api/products


    params : 
    
        search : Women
        
        
4. get values of filters - brand, category and gender
 
    GET  ec2-35-183-34-116.ca-central-1.compute.amazonaws.com:3000/api/filters


    


