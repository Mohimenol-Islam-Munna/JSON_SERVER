## ALL OPERATION ON JSON SERVER.

#### JSON FORMAT

{
  "products": [],
  "reviews": []
}


#### Routes

 1. http://localhost:4000/products/ 
    
 2. http://localhost:4000/reviews/ 


#### Single Item

  http://localhost:4000/products/1 is equal to http://localhost:4000/products?id=1

      Here 1 is the value of id property.


#### Filtering

##### Filtering by single value

      Structure: ?PROPERTY_NAME=PROPERTY_VALUE

      http://localhost:4000/products?PROPERTY_NAME=PROPERTY_VALUE

  Ex. http://localhost:4000/products?category=electronics


##### Filtering by multiple value

      Structure: ?PROPERTY_NAME=PROPERTY_VALUE&PROPERTY_NAME=PROPERTY_VALUE

      http://localhost:4000/products?PROPERTY_NAME=PROPERTY_VALUE&PROPERTY_NAME=PROPERTY_VALUE

  Ex. http://localhost:4000/products?category=electronics&price=2000


##### Nested Filtering 

      Structure: ?PROPERTY_NAME.NESTED_PROPERTY_NAME=PROPERTY_VALUE

      http://localhost:4000/products?PROPERTY_NAME.NESTED_PROPERTY_NAME=PROPERTY_VALUE

  Ex. http://localhost:4000/products?discount.type=shipping


#### Sorting

      ORDER_TYPE= asc(default)/desc


##### Ascending Order Sort

      Structure: ?_sort=PROPERTY_NAME

      http://localhost:4000/products?_sort=PROPERTY_NAME
      
  Ex. http://localhost:4000/products?_sort=price


##### Descending Order Sort

     Structure: ?_sort=PROPERTY_NAME&_order=ORDER_TYPE

     http://localhost:4000/products?_sort=PROPERTY_NAME&_order=ORDER_TYPE

  Ex. http://localhost:4000/products?_sort=price&_order=desc


##### Sorting by multiple value

     Structure: ?_sort=PROPERTY_NAME,PROPERTY_NAME&_order=ORDER_TYPE,ORDER_TYPE

     http://localhost:4000/products?_sort=PROPERTY_NAME,PROPERTY_NAME&_order=ORDER_TYPE,ORDER_TYPE

  Ex. http://localhost:4000/products?_sort=price,category&_order=asc,desc


#### Pagination

     Structure: ?_page=PAGE_NUMBER&_limit=TOTAL_ITEM_PER_PAGE

     http://localhost:4000/products?_page=PAGE_NUMBER&_limit=TOTAL_ITEM_PER_PAGE
     
     *Total items in per page is 10 (Default).

  Ex. http://localhost:4000/products?_page=1&_limit=2


#### OPERATORS

###### Greater Than or Equal

     Structure: ?PROPERTY_NAME_gte=VALUE

     http://localhost:4000/products?PROPERTY_NAME_gte=VALUE

  Ex. http://localhost:4000/products?price_gte=4000
  
  
  ###### Less Than or Equal

     Structure: ?PROPERTY_NAME_lte=VALUE

     http://localhost:4000/products?PROPERTY_NAME_lte=VALUE

  Ex. http://localhost:4000/products?price_lte=4000
  
  
  ###### Range

     Structure: ?PROPERTY_NAME_gte=VALUE&PROPERTY_NAME_lte=VALUE

     http://localhost:4000/products?PROPERTY_NAME_gte=VALUE&PROPERTY_NAME_lte=VALUE

  Ex. http://localhost:4000/products?price_gte=2000&price_lte=3000
  
  
  ###### Not Equal

     Structure: ?PROPERTY_NAME_ne=VALUE

     http://localhost:4000/products?PROPERTY_NAME_ne=VALUE

  Ex. http://localhost:4000/products?id_ne=1
  
  
  ###### Start With

     Structure: ?PROPERTY_NAME_like=^VALUE

     http://localhost:4000/products?PROPERTY_NAME_like=^VALUE

  Ex. http://localhost:4000/products?category_like=^a
  
  
  ###### Full Text Search

     Structure: ?q=VALUE

     http://localhost:4000/products?q=VALUE

  Ex. http://localhost:4000/products?q=in


#### RELATIONSHIP

  ###### Access Child From Parent

     Structure: ?_embed=ROUTES

     http://localhost:4000/products?_embed=reviews
     
     *Here ROUTES is products, reviews. These are the main property of main json object.

  Ex. http://localhost:4000/products?q=in
  
  
  ###### Access Parent From Child

     Structure: ?_embed=ROUTES

     http://localhost:4000/reviews?_expand=ROUTES
     
     *value of _expand or ROUTES must be singular.

  Ex. http://localhost:4000/reviews?_expand=product
  
  
#### OTHERS HTTP REQUEST

###### Create:
    
    Method: POST
    
    url: http://localhost:4000/products
    
    
###### Update:
    
    Method: PATCH/PUT
    
    url: http://localhost:4000/products/id
    
    
###### Delete:
    
    Method: DELETE
    
    url: http://localhost:4000/products/id
  
  
#### GENERATE FAKE DATA

[`Faker Js`](https://fakerjs.dev/)
  
  
