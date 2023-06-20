export default function Galaxy({ id, name, diameter }) {
  return (
    <div className="card-item">
      <h3
        style={{
          margin: 0,
        }}
      >
        ({id}) {name}
      </h3>
      <div>Diameter: {diameter.toLocaleString("id-ID")}</div>
    </div>
  );
}
