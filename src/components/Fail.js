import React from "react";
import { useNavigate } from "react-router-dom";

const Fail = () => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const goToShop = () => {
        navigate("/shop"); // Navigate to the shop page
    };

    const goToHome = () => {
        navigate("/"); // Navigate to the home page
    };

    // Inline styles
    const styles = {
        failContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f9f9f9',
        },
        failContent: {
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
        },
        failTitle: {
            fontSize: '36px',
            color: '#FF5722',
            marginBottom: '20px',
        },
        failMessage: {
            fontSize: '18px',
            color: '#333',
            marginBottom: '30px',
        },
        failButtons: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
        },
        failButton: {
            backgroundColor: '#FF5722',
            color: 'white',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        failButtonHover: {
            backgroundColor: '#f44336',
        },
    };

    return (
        <div style={styles.failContainer}>
            <div style={styles.failContent}>
                <h1 style={styles.failTitle}>Payment Failed</h1>
                <p style={styles.failMessage}>Sorry, something went wrong with your payment. Please try again later.</p>
                <div style={styles.failButtons}>
                    <button
                        style={styles.failButton}
                        onClick={goToShop}
                        onMouseEnter={(e) => e.target.style.backgroundColor = styles.failButtonHover.backgroundColor}
                        onMouseLeave={(e) => e.target.style.backgroundColor = styles.failButton.backgroundColor}
                    >
                        Go to Shop
                    </button>
                    <button
                        style={styles.failButton}
                        onClick={goToHome}
                        onMouseEnter={(e) => e.target.style.backgroundColor = styles.failButtonHover.backgroundColor}
                        onMouseLeave={(e) => e.target.style.backgroundColor = styles.failButton.backgroundColor}
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Fail;
