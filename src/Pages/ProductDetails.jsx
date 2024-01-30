import { useParams } from "react-router-dom";
import data from "../Data/data";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    img,
    display,
    title,
    color,
    announced,
    camera,
    resolution,
    chipset,
    ram,
    battery,
    price,
  } = data.find((d) => d.id == id);
  return (
    <div className="info">
      <div className="product-pic">
        <img src={img} alt={title} />
      </div>
      <ul>
        <li className="info-product">Screen: <span>{display}</span></li>
        <li className="info-product">Color: <span>{color}</span></li>
        <li className="info-product">Model: <span>{title}</span></li>
        <li className="info-product">Announced: <span>{announced}</span></li>
        <li className="info-product">Camera: <span>{camera}</span></li>
        <li className="info-product">Resolution: <span>{resolution}</span></li>
        <li className="info-product">Chipset: <span>{chipset}</span></li>
        <li className="info-product">Ram: <span>{ram}</span></li>
        <li className="info-product">Battery: <span>{battery}</span></li>
        <li className="info-product">Price: <span>{price}</span></li>
      </ul>
    </div>
  );
};

export default ProductDetails;
