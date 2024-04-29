import CustomTable from './components/custom-table'

export default function App() {
  return (
    <div className="container">
      <CustomTable
        rows={[
          {
            id: 1,
            title:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quisquam.',
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ipsum sint odit placeat, eius numquam!',
          },
        ]}
        heads={[
          {
            key: 'id',
            label: 'ID',
            style: {
              width: 100,
              padding: 5,
            },
          },
          {
            key: 'title',
            label: 'Title',
            style: { width: 500, padding: 5 },
          },
          {
            key: 'body',
            label: 'Body',
            style: { width: 400, padding: 5 },
          },
        ]}
      />
    </div>
  )
}
