import React, { useState } from 'react'

import { loginNav } from '../constants'

const HeaderLoginNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id='headerLoginNav'>
      <div className="headerLoginNav__inner">
          <ul>
            <li>{loginNav.nav[0]}</li>
            <li>{loginNav.nav[1]}</li>
            <li>{loginNav.nav[2]}</li>
            <li>{loginNav.nav[3]}</li>
            <li>{loginNav.nav[4]}</li>
            <li className="headerLoginNav__lang" onClick={() => setOpen(!open)}>
              {loginNav.nav[5]} ▼
              {open && (
                <ul>
                  <li>{loginNav.nav[5]}</li>
                  <li>{loginNav.nav[6]}</li>
                </ul>
              )}
            </li>
        </ul> 
      </div>
    </section>
  )
}

export default HeaderLoginNav