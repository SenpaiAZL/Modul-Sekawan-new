const CardJpeg = ({ img, heading, text }) => {
    try {
      return (
        <div
          className="flex-item"
          style={{
            borderRadius: "5px",
            maxWidth: "500px",
            border: "1px solid #ccc", // Adjust the color and width as needed
            overflow: "hidden", // Ensures that content fits within the border
          }}
        >
          <img
            src={img}
            alt={heading} // Adding alt text for accessibility
            style={{
              borderRadius: '5px 5px 0 0',
              width: '100%',
            }}
          />
          <div style={{ padding: '5px' }}>
            <h4><b>{heading}</b></h4>
            <p>{text}</p>
          </div>
        </div>
      );
    } catch (error) {
      console.error("Error rendering CardJpeg:", error);
      return (
        <div style={{ maxWidth: "500px", border: "1px solid #ccc", borderRadius: "5px", padding: "5px", textAlign: "center" }}>
          <p>Error loading card content.</p>
        </div>
      );
    }
  }
  
  export default CardJpeg;  