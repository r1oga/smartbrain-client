import React, { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

const ProfileIcon = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(prevState => !prevState)

  return (
    <div className='pa3 tc'>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          tag='span'
          data-toggle='dropdown'
          aria-expanded={dropdownOpen}>
          <img
            src='http://tachyons.io/img/logo.jpg'
            class='br4 h3 w3 dib'
            alt='avatar'
          />
        </DropdownToggle>
        <DropdownMenu
          className='b--transparent shadow-5'
          style={{
            marginTop: '20px',
            backgroundColor: 'rgba(255,255,255,0.5)'
          }}>
          <DropdownItem>View Profile</DropdownItem>
          <DropdownItem>Signout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default ProfileIcon
