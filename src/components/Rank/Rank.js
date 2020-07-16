import React, { useState, useEffect } from 'react'

const LAMBDA_URI =
  'https://1lynhlrtql.execute-api.eu-central-1.amazonaws.com/prod/rank'

const Rank = ({ name, entries }) => {
  const [emoji, setEmoji] = useState('')

  const generateEmoji = entries => {
    fetch(`${LAMBDA_URI}?rank=${entries}`)
      .then(res => res.json())
      .then(data => setEmoji(data.input))
      .catch(console.log)
  }
  useEffect(() => {
    generateEmoji(entries)
  }, [entries])

  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f3'>{`Rank badge: ${emoji}`}</div>
    </div>
  )
}

export default Rank
