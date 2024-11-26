import React from "react";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed

const Success = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Payment Successful!</h1>
                <p style={styles.message}>Thank you for your purchase. We hope to see you again soon!</p>
                <Link to="/" style={styles.button}>
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
    },
    card: {
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
    },
    title: {
        fontSize: '24px',
        color: '#4caf50',
        margin: '10px 0',
    },
    message: {
        fontSize: '16px',
        color: '#555',
        margin: '10px 0 20px',
    },
    button: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: '10px 20px',
        backgroundColor: '#4caf50',
        color: '#fff',
        borderRadius: '5px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
};

export default Success;
