import {useState, useEffect, useContext} from 'react'

import './index.css'
import ProfileContext from '../../ProfileContext'

const RepoItemDetails = () => {
  const [details, setDetails] = useState([])
  const {repo} = useContext(ProfileContext)
  const {username} = useContext(ProfileContext)

  useEffect(() => {
    const respoDetails = async () => {
      const options = {
        method: 'GET',
      }
      //   url
      const response = await fetch(url, options)
      const data = await response.json()
      console.log(repo, username)
    }

    respoDetails()
  })
  return <div>Item details</div>
}

export default RepoItemDetails
