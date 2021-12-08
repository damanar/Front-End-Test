# QA has submitted the following tickets


## Customer Orders Table
### QA Notes
When viewing the Customer Orders table, the times don't always display correctly. They're in 24-hour format when they should be in 12-hour format with AM/PM displayed.

Additionally, time should display in (H)H:MM format, but currently 12:07 displays as 12:7.

### Dev Notes / Response
OrdersTable.jsx - added meridiem conditional to the formatDate function && added test to make single digit minutes prepend a "0"

---


## Customer Order Details
### QA Notes
There seems to be an issue with total price sometimes. On some order details, the total price is displaying values after the penny.

### Dev Notes / Response
OrderDetailsTable.jsx - removed erroneous decimals in the sum calculation.

---


## Delete a Customer Order
### QA Notes
I'm currently unable to delete a customer order. Every time I click the "Delete" button from the Customer Orders table, I get a white screen.

### Dev Notes / Response
DeleteOrder.jsx - call to confirmDelete causing recursion in componentDidMount, updated to reference to confirmDelete.

---


## Other
Orders.jsx - removed redundant formatDate function
OrderDetailsTable.jsx - fixed formatting error causing Price and Total Price to drop the second decimal.

Total Time: 1 hour debugging.