# Food-Delivery-App-API-Documentation
using Swagger UI for Api docmentation

 [Api Documentation](https://food-delivery-app-api-documentation.onrender.com/api-docs/)

### API Signature 
#### User Registeration
        - Sign up
                - method: post
                - signature: /api/v1/user/signup
                - input: user_details{}
                - output: success [201], accessToken:string
                          failed [ 400 ]
        - Sign in
                - method: post
                - signature /api/v1/user/signin
                - input email:string,password:string
                - output success [200], accessToken:string
                         failed [ 401] unauthorized
        - Signout
                - method: post
                - signature /api/v1/user/signout
                - input customer_id: string
                - output Success [200]
                         failed [ 401] unauthorized
        - Forget password
                - method: post
                - signature /api/v1/user/forget-password
                - input [email]
                - output Success [200]
                         failed [ 401] unauthorized
        - Reset password
                - method: put
                - signature /api/v1/user/reset-password?token=abc123
                - input {token, newPassword}
                - output  success [200]
                          failed  [400] expire token
        - Enable/disable account
                - method: put
                - signature /api/v1/user/account
                - input [customer_id, enable]
                - output success [200]
                         failed [ 401] unauthorized
                         failed [400] bad request
        - Show Profile
                - method: get
                - signature /api/v1/user/profile/:user_id
                - input [user_id]
                - output success [200], user_details{}
                          failed [ 401] unauthorized
                          failed [400] bad request
        - Edit Profile
                - method: put
                - signature: /api/v1/user/profile/:user_id
                - input: user_id, update_data{}
                - output: success [201]
                         failed [ 401] unauthorized
                         failed [400] bad request
#### Cart management 
        - AddToCart
                - method: post
                - signature: /api/v1/cart/add
                - input: {customer_id, item__id}
                - output: success [201]
                          failed  [404] customer not found , item not found
                          failed [400] bad request
        - ModifyCart
                - method: delete
                - signature /api/v1/cart/modify/:cart_id
                - input [item_id]
                - output success [200]
                         failed  [404] cart not found , item not found
                         failed  [400] bad request
                - method: put
                - signature /api/v1/cart/modify/:cart_id
                - input [item_id, event_type]
                - output success [200]
                         failed  [404] cart not found , item not found
                         failed  [400] bad request
        - viewCart
                - method: get
                - signature: /api/v1/cart/:cart_id
                - output success [200]
                         failed  [404] cart not found
        - clearCart
                - method: delete
                - signature /api/v1/cart/:cart_id
                - output: success [200]
                           failed  [404] cart not found
#### Order management 
        - placeOrder
                - method: post
                - signature /api/v1/order/add
                - input [customer_id, cart_id]
                - output status code [201]
        - cancelOrder
                - signature /api/v1/order/cancel
                - input [customer_id, order_id]
                - output status code [200]
        - trackOrder
                - signature /api/v1/order/track
                - input [customer_id,order_id]
                - output order_status
        - viewOrder
                - signature /api/v1/order/:order_id
                - input [customer_id,order_id]
                - output order_details
        - viewOrders_History
                - signature /api/v1/order
                - input [customer_id]
                - output orders[]
         - Checkout
                - signature /api/v1/checkout
                - input [customer_id, payment_type, total_price]
                - output status code 201, transaction_details
#### Resturant & Menu management 
        - AddResturant
                - method: post
                - signature /api/v1/resturant/add
                - input [owner_id, Resturant_details{}]
                - output: success [201]
                          failed  [404] owner not found
                          failed [400] bad request
        - viewResturant
                - method: get
                - signature /api/v1/resturant/:resturant_id
                - input [resturant_id]
                - output: success [200] restaurant_details {}, menu []
                          failed  [404] owner not found
                          failed [400] bad request
        - updateResturant 
                - method:  put
                - signature /api/v1/resturant/:resturant_id
                - input [updated_data]
                - output: success [201]
                          failed  [404]restuarant not found,  owner not found
                          failed  [400] bad request
        - deleteResturant
                - method: delete
                - signature /api/v1/resturant/:resturant_id
                - input [resturant_id]
                - output: success [200]
                          failed  [404] restuarant not found
                          failed  [400] bad request
        - viewResturants
                - signature /api/v1/resturant
                - input []
                - output resturants[]

        - addMenu
                - signature /api/v1/resturant/menu/add
                - input [resturant_id,menu_details]
                - output status code [201]
        - updateMenu
                - signature /api/v1/resturant/menu/:menu_id
                - input [menu_id, update_data]
                - output status code [201]
        - deleteMenu
                - signature /api/v1/resturant/menu/:menu_id
                - input [menu_id]
                - output status code [200]
        - viewMenu
                - signature /api/v1/resturant/menu/:menu_id
                - input [menu_id]
                - output menu_details
        - filterMenu
                - signature /api/v1/resturant/menu/filter
                - input [search_word]
                - output menu_details[]
  #### Payment management 
        - View Payment Transaction
                - signature /api/v1/payment/transaction
                - input [customer_id,transaction_id]
                - output status code [200], transaction_details
        - Add Rate
                - signature /api/v1/payment/receipt
                - input [customer_id, transaction_id]
                - output status code [200], tranastion_pdf
  #### Customer management 
        - Need Help
                - signature /api/v1/support/help
                - input [customer_id,need_type]
                - output status code [200]
        - Add Rate
                - signature /api/v1/support/rate
                - input [customer_id, resturant_id, rate, comment]
                - output status code [201]
         - Customer Add Card
                - signature /api/v1/support/addCart
                - input [customer_id, cart_details]
                - output status code [201]
