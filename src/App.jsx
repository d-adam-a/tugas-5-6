import { useState } from "react";
import Galaxy from "./components/Galaxy";
import Header from "./components/Header";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

function App() {
  const [galaxies, setGalaxies] = useState([
    {
      id: 1,
      name: "Andromeda",
      diameter: 220000,
    },
    {
      id: 2,
      name: "Bima Sakti",
      diameter: 100000,
    },
    {
      id: 3,
      name: "Triangulum",
      diameter: 60000,
    },
    {
      id: 4,
      name: "Centaurus A",
      diameter: 97000,
    },
  ]);

  const [newGalaxy, setNewGalaxy] = useState({
    id: galaxies.length + 1,
    name: "",
    diameter: 0,
  });
  const [changeById, setChangeById] = useState(1);

  return (
    <>
      <Header />
      <main>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {galaxies.map((g) => (
            <Galaxy key={g.id} id={g.id} name={g.name} diameter={g.diameter} />
          ))}
        </div>
        <div className="card-tambah">
          <h1 style={{ marginBottom: 20 }}>Tambah</h1>
          <form>
            <label>
              ID:
              <input
                type="number"
                value={newGalaxy.id}
                onChange={(e) =>
                  setNewGalaxy({ ...newGalaxy, id: e.target.value })
                }
              ></input>
            </label>
            <label>
              Nama:
              <input
                value={newGalaxy.name}
                onChange={(e) =>
                  setNewGalaxy({ ...newGalaxy, name: e.target.value })
                }
              ></input>
            </label>
            <label>
              Diameter:
              <input
                type="number"
                value={newGalaxy.diameter}
                onChange={(e) =>
                  setNewGalaxy({
                    ...newGalaxy,
                    diameter: isNaN(parseInt(e.target.value))
                      ? ""
                      : parseInt(e.target.value),
                  })
                }
              ></input>
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                setGalaxies([newGalaxy, ...galaxies]);
                setNewGalaxy({
                  id: [...galaxies, newGalaxy].length + 1,
                  name: "",
                  diameter: 0,
                });
              }}
            >
              <AiOutlinePlus /> Depan
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setGalaxies([...galaxies, newGalaxy]);
                setNewGalaxy({
                  id: [...galaxies, newGalaxy].length + 1,
                  name: "",
                  diameter: 0,
                });
              }}
            >
              <AiOutlinePlus /> Belakang
            </button>
          </form>
        </div>
        <div className="card-edit">
          <h3>Edit/Hapus Berdasarkan ID</h3>
          <label>
            ID:
            <input
              type="number"
              value={changeById}
              onChange={(e) => setChangeById(e.target.value)}
            />
          </label>
          <label>
            Nama:
            <input
              value={galaxies.find((g) => g.id == changeById)?.name ?? ""}
              onChange={(e) => {
                galaxies.map((g) => {
                  if (g.id == changeById) {
                    g.name = e.target.value;
                    setGalaxies([...galaxies]);
                  }
                });
              }}
            />
          </label>
          <label>Diamater:</label>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGalaxies(
                galaxies.map((galaxy) =>
                  galaxy.id == changeById
                    ? { ...galaxy, diameter: galaxy.diameter + 1 }
                    : galaxy
                )
              );
            }}
          >
            <AiOutlinePlus />
            Perbesar
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGalaxies((g) =>
                g.map((galaxy) =>
                  galaxy.id == changeById
                    ? { ...galaxy, diameter: galaxy.diameter - 1 }
                    : galaxy
                )
              );
            }}
          >
            <AiOutlineMinus /> Perkecil
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setGalaxies(galaxies.filter((galaxy) => galaxy.id != changeById));
            }}
          >
            <BsFillTrashFill /> Hapus
          </button>
        </div>
        <div
          className="card-hapus"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <h1>Hapus</h1>
          <button onClick={() => setGalaxies(galaxies.slice(1))}>
            <BsFillTrashFill />
            Depan
          </button>
          <button onClick={() => setGalaxies(galaxies.slice(0, -1))}>
            <BsFillTrashFill /> Belakang
          </button>
          <button onClick={() => setGalaxies([])}>
            <BsFillTrashFill />
            Semua
          </button>
        </div>
      </main>
      <footer>&copy; 2023 Bima Sakti</footer>
    </>
  );
}

export default App;
