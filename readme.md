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

http://localhost:4000/products?PROPERTY_NAME=PROPERTY_VALUE

Ex. http://localhost:4000/products?category=electronics

##### Filtering by multiple value

http://localhost:4000/products?PROPERTY_NAME=PROPERTY_VALUE&PROPERTY_NAME=PROPERTY_VALUE

Ex. http://localhost:4000/products?category=electronics&price=2000


##### Nested Filtering by multiple value

http://localhost:4000/products?PROPERTY_NAME.NESTED_PROPERTY_NAME=PROPERTY_VALUE

Ex. http://localhost:4000/products?discount.type=shipping

#### Pagination


#### Pagination

#### Pagination

#### Pagination
