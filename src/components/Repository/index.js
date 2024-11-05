import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import ProfileContext from '../../ProfileContext/index'

import './index.css'

const Repository = () => {
  const [repos, setRepos] = useState([])
  const [repoItem, setRepoItem] = useState('')
  const {username} = useContext(ProfileContext)
  // const  = useContext(ProfileContext)
  //   console.log('username', username)

  useEffect(() => {
    const fetchRepos = async () => {
      const options = {
        method: 'GET',
      }
      // api url

      const response = await fetch(apiUrl, options)
      if (response.ok === true) {
        const fetchedData = await response.json()
        // console.log(fetchedData)
        const updatedData = fetchedData.map(eachItem => ({
          name: eachItem.name,
          languages: eachItem.languages.map(eachLanguage => ({
            name: eachLanguage.name,
            value: eachLanguage.value,
          })),
          forks: eachItem.forks,
          forksCount: eachItem.forks_count,
          forksUrl: eachItem.forks_url,
          id: eachItem.id,
          description: eachItem.description,
          stargazersCount: eachItem.stargazers_count,
          stargazersUrl: eachItem.stargazers_url,
        }))
        // console.log(updatedData)

        setRepos(updatedData)
        // setRepoItem(updatedData.name)
        // console.log(updatedData)
      }
      //   const filteredRepoItem = updatedData.filter(eachItem => eachItem.name)
    }
    fetchRepos()
    console.log('repo', repoItem)
  }, [])

  return (
    <ProfileContext.Provider value={repoItem}>
      <div className="repo-bg-container">
        <Header />
        <div>
          <h2 className="repo-main-heading">Repositories</h2>
          <ul>
            {repos.map(eachItem => (
              <Link to={`/repos/${username}`}>
                <li className="repos-list-item">
                  <h1 className="repo-heading">{eachItem.name}</h1>
                  <p className="repo-description">{eachItem.description}</p>
                  <div className="languages-list">
                    {eachItem.languages.map(language => (
                      <li
                        style={{
                          backgroundColor: `#${language.value}`,
                          color: `#${language.value}`,
                        }}
                        className="language-container"
                      >
                        <p className="language-name">{language.name}</p>
                      </li>
                    ))}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </ProfileContext.Provider>
  )
}

export default Repository
