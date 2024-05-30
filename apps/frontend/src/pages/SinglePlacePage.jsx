import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_API_URL, BASE_CMS_URL } from "../assets/js/constants"
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

function SinglePlacePage() {
    const id = useParams().id

    const [place, setPlace] = useState(undefined)

    useEffect(() => {
        fetch(BASE_API_URL + `/places/${id}?populate=*`)
            .then((responce) => {
                if (responce.ok) {
                    return responce.json()
                }

                throw new Error()
            })
            .then((rawData) => rawData.data)
            .then((rawData) => ({
                id: rawData.id,
                name: rawData.attributes.name,
                coverURL: BASE_CMS_URL + rawData.attributes.cover.data.attributes.url,
                description: rawData.attributes.description,
                gallery: rawData.attributes.gallery.data.map((image) => {
                    return BASE_CMS_URL + image.attributes.url
                }),
                latitude: rawData.attributes.latitude,
                longitude: rawData.attributes.longitude,
            }))
            .then(setPlace)
            .catch(() => {
                setPlace(null)
            })
    }, [])

    return (
        <div>
            { place && (
                <>
                    <img
                        src={place.coverURL}
                        alt=""
                        style={{
                            width: '100%',
                            aspectRatio: 3,
                            objectFit: 'cover'
                        }}
                    />

                    <h1>
                        {place.name}
                    </h1>

                    <BlocksRenderer content={place.description} />

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 8,
                            gridAutoRows: '1fr',
                        }}
                    >
                        {place.gallery.map((image, index) => (
                            <img
                                key={index}
                                style={{
                                    width: '100%',
                                    aspectRatio: 1,
                                    objectFit: 'cover',
                                }}
                                src={image}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default SinglePlacePage
