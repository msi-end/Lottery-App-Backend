# Databases:



### User  Tables:

1.UserAuth

2.UserInfo

3.My_tickets

4.My_transactions

### Admin  Tables:

1.Admin_auth



### Data  Tables:

1.lotteries

2.tickets

3.results

4.price_categories

5.win_categories

#### lotteries:
(id, title, image, place, host, start Time, end Time ,other info, DisplayTop, displayResult,displayLottery )

#### p_category :
(id, lotteries.id,price)

#### tickets :
(id,lotteries.id, p_category.id, t_number,user_id)

#### results:
(id, lotteries.id,  p_category.id, ticket_number,user_id, displayTop, win_category.id)

#### win_category:
(id, title)