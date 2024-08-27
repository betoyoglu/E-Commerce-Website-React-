import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'

export default function SignedOut() {
  return (
    <div>
        <MenuItem>
        <Button primary>Giriş yap</Button>
        <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
        </MenuItem>
       
    </div>
  )
}
