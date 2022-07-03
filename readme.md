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

###### Here 1 is the value of id property.

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

      Structure: _sort=PROPERTY_NAME&_order=ORDER_TYPE
      ORDER_TYPE= asc(default)/desc

##### Ascending Order Sort

http://localhost:4000/products?_sort=PROPERTY_NAME

##### Descending Order Sort

http://localhost:4000/products?_sort=PROPERTY_NAME&_order=ORDER_TYPE

Ex. http://localhost:4000/products?_sort=price&_order=desc

##### Sorting by multiple value

http://localhost:4000/products?_sort=PROPERTY_NAME,PROPERTY_NAME&_order=ORDER_TYPE,ORDER_TYPE

Ex. http://localhost:4000/products?_sort=price,category&_order=asc,desc


#### Pagination

#### Pagination

#### Pagination
