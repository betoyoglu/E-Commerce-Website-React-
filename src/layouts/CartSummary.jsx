import React from 'react'
import { NavLink } from 'react-router-dom';
import {DropdownMenu,DropdownItem,Dropdown, DropdownDivider, Label} from "semantic-ui-react";
import {useSelector} from "react-redux"

export default function CartSummary() {

  const {cartItems} = useSelector(state => state.cart) //storedaki cart'ı cartItems'a attadık yani şu an cart elimde

  return (
    <div>
       <Dropdown item text="Sepetiniz">
              <DropdownMenu>
                {
                  cartItems.map((cartItem) =>(
                    <DropdownItem key={cartItem.product.id}>
                      {cartItem.product.productName}
                      <Label>
                        {cartItem.quantity}
                      </Label>
                    </DropdownItem>
                  ))
                }
                <DropdownDivider/>
                <DropdownItem as={NavLink} to="/cart">Sepete git</DropdownItem>
              </DropdownMenu>
            </Dropdown>
    </div>
  )
}
