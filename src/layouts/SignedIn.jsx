import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'
import profilePhoto from './foto.jpg';

export default function SignedIn() {
  return (
    <div>
        <MenuItem>
        <Image avatar spaced="right" src={profilePhoto}></Image>
        <Dropdown pointing="top left" text='betül'>
        <DropdownMenu>
            <DropdownItem text="Bilgilerim" icon="info"/>
            <DropdownItem text="Çıkış yap" icon="sign-out"/>
        </DropdownMenu>
        </Dropdown>
        </MenuItem>
    </div>
  )
}
