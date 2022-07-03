## ALL OPERATION ON JSON SERVER.

{
  "products": [],
  "reviews": []
}

#### All Items

  http://localhost:4000/products/ 
    or
  http://localhost:4000/reviews/ 

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
     
     *Total items in per page is 10 (Default).

  Ex. http://localhost:4000/products?price_gte=4000
  
  ###### Less Than or Equal

     Structure: ?PROPERTY_NAME_lte=VALUE

     http://localhost:4000/products?PROPERTY_NAME_lte=VALUE
     
     *Total items in per page is 10 (Default).

  Ex. http://localhost:4000/products?price_lte=4000


#### Pagination
