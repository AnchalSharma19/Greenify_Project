import React, { useState, useEffect } from 'react';
import './History.css';

const History = () => {
    const [orderHistory, setOrderHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userToken = 'your-authentication-token-here'; // Replace with the actual user token

    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const response = await fetch('/api/order-history', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                    },
                });

                // Check if the response is okay (status code 200)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Get the response body as text and log it
                const text = await response.text(); // Get response as text
                console.log('Response:', text); // Log the raw response body

                // If the response is in JSON format, parse it
                const data = JSON.parse(text);
                setOrderHistory(data);
                setLoading(false);
            } catch (err) {
                // Handle the error and set the state
                console.error('Fetch error:', err);
                setError('Failed to fetch order history');
                setLoading(false);
            }
        };

        fetchOrderHistory();
    }, [userToken]); // Re-run if the token changes

    return (
        <div className="history">
            <div className="history-header">
                <h2>Order History</h2>
                <div className="history-actions">
                    <button className="download-btn">Download</button>
                    <button className="sort-btn">Sort by Latest</button>
                </div>
            </div>

            {/* Table structure is shown regardless of success or failure */}
            <table className="history-table">
                <thead>
                    <tr>
                        <th>INVOICE ID</th>
                        <th>RECIPIENT NAME</th>
                        <th>DATE</th>
                        <th>LOCATION</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {/* If data is loading, show empty rows */}
                    {loading ? (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center' }}>Loading...</td>
                        </tr>
                    ) : (
                        // Display data if fetched successfully
                        orderHistory.length > 0 ? (
                            orderHistory.map((item, index) => (
                                <tr key={index}>
                                    <td>ID: {item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.location}</td>
                                    <td>
                                        <span className={`status ${item.status.toLowerCase()}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="action-btn">⋮</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            // If there is no data available
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center' }}>No data available</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>

            {/* Display error message if fetching fails */}
            {error && <div className="error">{error}</div>}

            <div className="pagination">
                <button className="page-btn">Previous</button>
                <button className="page-btn">1</button>
                <button className="page-btn">2</button>
                <span>.....</span>
                <button className="page-btn">10</button>
                <button className="page-btn">Next</button>
            </div>
        </div>

    );
};

export default History;
