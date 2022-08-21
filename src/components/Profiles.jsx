

import { useState, useEffect } from 'react'
import {
  client, recommendProfiles, explorePublications
} from '../api'

export default function Profiles() {
  const [profiles, setProfiles] = useState([])
  const [publications, setPublications] = useState([])
  const CONSTANT_BIO = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  useEffect(() => {
    fetchProfiles()
    fetchPublications()
  }, [])

  console.log(publications)

  async function fetchProfiles() {
    try {
      const res = await client.query(recommendProfiles).toPromise()
      console.log('res in profiles', res)
      setProfiles(res.data.recommendedProfiles)
    } catch (e) {
      console.log(e)
    }
  }

  async function fetchPublications() {
    try {
      const res = await client.query(explorePublications).toPromise()
      console.log('res in profiles', res)
      setPublications(res.data.explorePublications)
    } catch (e) {
      console.log(e)
    }
  }

  if (!profiles) return null

  const profileItemStyle = `
  p-8
  bg-white
  shadow-custom
  rounded-lg
  w-10/12
  ml-8
  mt-4
  mb-8
  `

  return (
    <></>
  )
}