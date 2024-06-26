import { Link } from "react-router-dom";

export default function PlaceCard({
    name,
    cover,
    latitude,
    longitude,
    id,
}) {
    return (
        <div
            style={{
                border: '1px solid black',
                padding: 16,
                borderRadius: 24,
            }}
        >
            <img
                src={cover}
                style={{
                    aspectRatio: 16 / 9,
                    display: 'block',
                    borderRadius: 16,
                    objectFit: 'cover',
                    width: '100%',
                }}
            />
            <h3>
                { name }
            </h3>
            <Link to={`geo:${latitude},${longitude}`}>
                Посмотреть на карте
            </Link>
            <Link to={`/place/${id}`}>
                Подробнее
            </Link>
        </div>
    )
}