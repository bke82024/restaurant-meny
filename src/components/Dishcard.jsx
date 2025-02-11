const DishCard = ({ id, tittel, kategori, ingredienser, pris }) => {
  return (
    <div id="frame">
      <p>{id}</p>
      <h2>{tittel}</h2>
      <p>{pris}</p>
      <p>{ingredienser}</p>
      <p>{kategori}</p>
    </div>
  );
};
export default DishCard;
