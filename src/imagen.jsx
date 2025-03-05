
import { useState } from "react";


export default function ImageGallery() {
    const [images, setImages] = useState([]);
    const [search, setSearch] = useState("");
    const [imageId, setImageId] = useState("");

    const addImage = () => {
        if (imageId) {
          const newImage = {
            id: imageId,
        url: `https://picsum.photos/id/${imageId}/200/300`,
      };
      setImages([...images, newImage]);
      setImageId("");
    }
  };

  

  const filteredImages = images.filter((img) =>
    img.id.includes(search)
  );

  return (
    <div className="p-4 border rounded-lg w-96 mx-auto space-y-4">

      <input
        type="text"
        value={imageId}
        onChange={(e) => setImageId(e.target.value)}
        placeholder="ID de imagen"
      />


      <button onClick={addImage}>Agregar imagen</button>

    
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar"
      />

<div className="grid grid-cols-2 gap-4">
        {filteredImages.map((img) => (
          <div key={img.id} className="text-center">
            <img src={img.url} alt={`Imagen ${img.id}`} className="w-24 h-24" />
            <p className="text-sm text-gray-700">{img.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
