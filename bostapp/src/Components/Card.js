const Card = ({ title, image, description ,buttonText,onclick}) => {
  return (
    
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={onclick}>
          {buttonText}
        </button>
        
      </div>
      
    </div>

  );
};

export default Card;