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
    </>
  );
}

export default App
