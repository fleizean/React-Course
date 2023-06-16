import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
  return (
    <div>
      <Menu.Item>
        <Button.Group>
          <Button onClick={signIn} positive >Giriş Yap</Button>
          <Button.Or />
          <Button primary>Kayıt Ol</Button>
        </Button.Group>
      </Menu.Item>
    </div>
  )
}
