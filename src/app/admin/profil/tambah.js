export default function TambahPage( { onClose }) {
    return (
      <div className="flex flex-col gap-5">
        <input type="text" placeholder="Nama" />
        <input type="text" placeholder="Alamat" />
        <input type="text" placeholder="No telp" />
        <button className="bg-blue-500 px-5 py-2 text-white">Simpan</button>
        <button onClick={onClose} className="bg-red-500 px-5 py-2 text-white">Close</button>
      </div>
    );
  }
  