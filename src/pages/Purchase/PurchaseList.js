import React from 'react'
import PurchaseItem from './PurchaseItem'

const PurchaseList = () => {
    return (
        <div className="purchase__list">
            <PurchaseItem />
            <PurchaseItem />
        </div>
    )
}

export default PurchaseList;