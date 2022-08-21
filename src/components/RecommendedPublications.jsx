import { useEffect, useState } from 'react'
import Publications from './Publications'
import { client, recommendedProfiles, getPublications } from '../api'
import PublicationCard from './PublicationCard';

const RecommendedPublications = () => {
  const [publications, setPublications] = useState([])
  const [profileIds, setProfileIds] = useState([])

  // fetch recommended profiles
  async function fetchAndSaveProfileIds() {
    try {
      const res = await client.query(recommendedProfiles).toPromise()
      console.log('res in profiles', res)
      setProfileIds(res.data.recommendedProfiles.items)
    } catch (e) {
      console.log(e)
    }
  }

  // fetch publications
  async function fetchPublications() {
    // TODO: we need the API to take in multiple profile ids so we can show recommended content
    // Could just do n request per profile, but would be nice to have 1 network roundtrip
    // const res = await client.query(getPublications, { request: "profileIds": profileIds })
    try {
      const res = await client.query(getPublications).toPromise()
      console.log('items is', res.data.getPublications.items)
      setPublications([...publications, res.data.getPublications.items])
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchAndSaveProfileIds()
    fetchPublications()
  }, [])

  if (!profileIds) {
    return null
  }

  console.log(publications)

  return (
    <div style={{ width: 'fit-content', margin: '0 auto' }}>
      {publications.map((publication) => {
        const {id, createdAt, onChainContentURI } = publication
        return (
          <PublicationCard key={id} uri={onChainContentURI} createdAt={createdAt} />
        )
      })}
    </div>
  )
};

export default RecommendedPublications;