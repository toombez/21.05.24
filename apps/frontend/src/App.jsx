import PlaceCard from "./components/PlaceCard"

export default function App() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
      }}
    >
      {Array.from({ length: 10 }).map((_, i) => i).map((i) => {
        return <PlaceCard
          name={`Place ${i}`}
          id={i}
          latitude="45"
          longitude="45"
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7LLbJEINqiQp3UidRJrn9KJDAXO3K9g6YuKYO_h0mA&s"
        />
      })}
    </div>
  )
}