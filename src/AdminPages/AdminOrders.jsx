import React from 'react';
import OrderBlock from 'Components/AdminComponents/OrderBlock';

const AdminOrders = ({notic, setNotice, currentOrders, setCurrentOrders}) => {
    return(
        <section>
            <h2>Order List</h2>
            { notic &&
                <>
                    <h3>New order: {notic && "NEW ORDER RECEIVED"}</h3>
                    <button onClick={()=> setNotice('')}>Acknowledge New Order</button>
                </>}
            <div className="AdminOrders-OrderList-Wrapper">
                {
                    currentOrders?.map((order, index) => 
                        <OrderBlock
                            currentOrders={currentOrders}
                            setCurrentOrders={setCurrentOrders}
                            order={order} 
                            index={index} 
                            key={index} />
                    )
                }
            </div>
        </section>
    )
};

export default AdminOrders;