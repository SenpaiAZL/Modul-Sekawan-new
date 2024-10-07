const Card = ({ img, heading, text }) => {
    try {
      return (
        <div style={{ border: '1px solid black', padding: '16px', borderRadius: '8px' }}>
          <img src={img} alt="" style={{ width: '90%', height: '50%', display: 'block', margin: '0 auto' }} />
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      );
    } catch (error) {
      console.error('Error rendering the Card component:', error);
      return (
        <div style={{ border: '1px solid red', padding: '16px', borderRadius: '8px', color: 'red' }}>
          <h1>Error</h1>
          <p>Something went wrong while rendering this card.</p>
        </div>
      );
    }
  };
  
  export default Card;    