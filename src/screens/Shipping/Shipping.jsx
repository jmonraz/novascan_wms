import React from "react";

import ButtonSleeve from "../../components/common/ButtonSleeve";
import Table from "../../components/common/Table";

const Shipping = () => {

    const orders = [
        { "Order ID": "TEST082223-01", "Order Date": "10/10/21 12:30:19 A.M. PST", "Customer ID": "CUS001", "Customer Name": "Monraz Tech", "Order Status": "PENDING" },
    ]
    return (
        <>
            <div className="container">
                <div className="box">
                    <ButtonSleeve onAdd={() => { }} onDelete={() => { }} onEdit={() => { }} />
                    <hr />
                    <Table columns={Object.keys(orders[0])} data={orders} />
                </div>
            </div>
        </>
    );
};

export default Shipping;