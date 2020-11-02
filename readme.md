# This is test rest api server created by Hakob Tumanyan

# This rest server is serving a marketplace like list.am

## item part

item create method - http://localhost:3000/item/create -- method post
item create method - http://localhost:3000/item/<itemId>/update -- method post
item create method - http://localhost:3000/item/<itemId>/delete -- method get

The fields for item 
    1. Name -> string type, required ---- name
    2. Description -> string type, required ---- description
    3. Price -> Number type, required ---- price
    4. Image urls -> Array type, required ---- imageUrls (array of image urls on the front-end project server)


## user login part

register user - http://localhost:3000/register -- method post

Fields for registration
    1. Full name -> string type, required ---- fullName
    2. Email -> string type, required ---- email
    3. Password -> string type, required ---- password

login user - http://localhost:3000/login -- method post

Fields for login 
    1. Email -> string type, required ---- email
    2. Password -> string type, required ---- password

activate user - http://localhost:3000/activate/<token> -- method get

## subscribtion methods

add to subscribe list - http://localhost:3000/subscribe -- method post

Fields for subscribe
    1. Email -> string type, required ---- email