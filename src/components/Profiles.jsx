

import { id } from 'ethers/lib/utils'
import { useState, useEffect } from 'react'
import {
  client, recommendProfiles, explorePublications
} from '../api'
import PublicationCard from './PublicationCard'

export default function Profiles() {
  const [profiles, setProfiles] = useState([])
  const [publications, setPublications] = useState([])
  const CONSTANT_BIO = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  useEffect(() => {
    fetchPublications()
  }, [])

  // async function fetchProfiles() {
  //   try {
  //     const res = await client.query(recommendProfiles).toPromise()
  //     console.log('res in profiles', res)
  //     setProfiles(res.data.recommendedProfiles.items)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  async function fetchPublications() {
    try {
      const res = await client.query(explorePublications).toPromise()
      setPublications(res.data.explorePublications.items)
    } catch (e) {
      console.log(e)
    }
  }

  if (!publications) {
    return null
  }

  return (
    <div style={{ width: 'fit-content', margin: '0 auto'}}>
      {publications.map((publication) => {
        const {id, createdAt, onChainContentURI } = publication
        return (
          <PublicationCard key={id} uri={onChainContentURI} createdAt={createdAt} />
        )
      })}
    </div>
  )

}