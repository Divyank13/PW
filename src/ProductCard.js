const ProductCard = (props) => {
  //console.log(props);
  const { title, thumbnail } = props.data;
  return (
    <div className="prodCard bg-gray-200 py-4 m-4 cursor-pointer hover:scale-110">
      <div className="prodImg">
        <img src={thumbnail} alt="Error"></img>
      </div>
      <div className="prodName flex justify-center">{title}</div>
    </div>
  );
};

export default ProductCard;
