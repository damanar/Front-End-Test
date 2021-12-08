import React, { Component } from 'react';
import PropTypes from 'prop-types';

const formatDate = (dateString) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(dateString);
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    var meridiem = "AM";
    var hours = "";
    if( dateObj.getHours() > 12){
        hours = dateObj.getHours() - 12;
        meridiem = "PM";
    } else {
        hours = dateObj.getHours();
    }
    const minutes = dateObj.getMinutes() <10?"0"+dateObj.getMinutes():dateObj.getMinutes();
    return `${month} ${day}, ${year} - ${hours}:${minutes} `+meridiem;
}

function OrdersTable({ data, actions }) {
    const { deleteOrder, selectOrder } = actions;
    return (
        <div>
            <h1>Customer Orders</h1>

            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(order => (
                            <tr key={order.id}>
                                <td>{order.customerName}</td>
                                <td>{formatDate(order.createdOn)}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="detailButton"
                                        onClick={() => selectOrder(order)}
                                    >
                                        Details
                                    </button>
                                    <button
                                        type="button" 
                                        className="deleteButton"
                                        onClick={() => {
                                            selectOrder(order)
                                            deleteOrder()
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

OrdersTable.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default OrdersTable
