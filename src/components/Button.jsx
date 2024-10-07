const Button = ({ text }) => {
    try {
      return (
        <div>
          <button style={{
            backgroundColor: '',
            color: 'White',
            border: '2px solid White',
            padding: '10px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            borderRadius: '5px'
          }}>
            {text}
          </button>
        </div>
      );
    } catch (error) {
      console.log(error);
      return null; // Di bawah ternyata
    }
  }
  
  export default Button;  