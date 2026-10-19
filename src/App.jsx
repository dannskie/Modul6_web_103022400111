 import KartuMenu from "./component/KartuMenu"
 import labelHarga from "./component/labelHarga"
 import panel from "./component/panel"
 
 function App() {
  const nama = 'ijan';
  const saldo = 37;
  const jam = 9;

  return (
    <>
      <h1 className="judul" style={{ fontSize: "30", color: "blue" }}>
        Kantin {nama}
      </h1>
      <p>selamat  {jam < 12 ? 'Pagi' : 'Siang'}</p>
      <p>saldo awal kartu kantin Rp. {saldo * 1000} </p>
      <button disabled>Bayar</button>

    <panel jdul = {"Menu hari ini"}>
      <KartuMenu nama = "nasi ayam geprek"
      kategori = "makanan"
      harga ={13.600}
      ></KartuMenu>
      <KartuMenu nama = "nasi ayam geprek"
      kategori = "makanan"
      harga ={13.600}
      ></KartuMenu>
    </panel>

    </>
  );
}

export default App
