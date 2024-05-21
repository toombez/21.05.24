export default function PlaceCard({
    name,
    cover,
    latitude,
    longitude,
    id,
}) {
    return (
        <div>
            <img src={cover} />
            <h3>
                { name }
            </h3>
            <a href={`geo:${latitude},${longitude}`}>
                Посмотреть на карте
            </a>
            <a href={`/place/${id}`}>
                Подробнее
            </a>
        </div>
    )
}