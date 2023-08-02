import React from 'react'

function Footer () {
  const year = new Date().getFullYear()

  return (
        <footer>
            <p>
                {`Copyright © Lioo7 ${year}`}
            </p>
        </footer>
  )
}

export default Footer
