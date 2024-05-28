import { useEffect, useState } from "react"
import PlaceCard from "./components/PlaceCard"

const BASE_CMS_URL = 'http://localhost:1337'
const BASE_API_URL = BASE_CMS_URL + '/api'

export default function App() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    fetch(BASE_API_URL + "/places?populate=*")
      .then((responce) => responce.json())
      .then((rawData) => rawData.data
        .map((rawPlace) => ({
          id: rawPlace.id,
          name: rawPlace.attributes.name,
          latitude: rawPlace.attributes.latitude,
          longitude: rawPlace.attributes.longitude,
          coverURL: BASE_CMS_URL + rawPlace.attributes.cover.data.attributes.url,
        }))
      )
      .then(setPlaces)
  }, [])

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
      }}
    >
      {places.map((place) => (
        <PlaceCard
          key={place.id}
          name={place.name}
          id={place.id}
          latitude={place.latitude}
          longitude={place.longitude}
          cover={place.coverURL}
        />
      ))}
    </div>
  )
}