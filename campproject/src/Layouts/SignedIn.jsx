import React from 'react'
import { Image, Dropdown, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1667476962686783490/xicfvWKP_400x400.jpg"/>
            <Dropdown pointing="top right" text="Enes">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info"/>
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
