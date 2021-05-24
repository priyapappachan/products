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

1. GET  ec2-35-183-34-116.ca-central-1.compute.amazonaws.com:3000/api/filters
2. GET  ec2-35-183-34-116.ca-central-1.compute.amazonaws.com:3000/api/products
3. GET  ec2-35-183-34-116.ca-central-1.compute.amazonaws.com:3000/api/products


    params : 
    
        filterKey : gender
        
        filterValue : Men      
        
4. GET  ec2-35-183-34-116.ca-central-1.compute.amazonaws.com:3000/api/products

    params : 
    
        search : Women

