import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const NasaData = () => {
  const [apodData, setApodData] = useState([]);
  const [queryParams, setQueryParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    fetchData();
  }, [queryParams]); // Trigger effect when queryParams change

  // Function to fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/apodapi', {
        params: queryParams
      });
      setApodData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  // Function to update query parameters
  const updateQueryParams = (key, value) => {
    setQueryParams(prevParams => ({
      ...prevParams,
      [key]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  // Function to clear all input fields
  const handleClear = () => {
    setQueryParams({});
    setSelectedDate('');
  };

  return (
    <div className="container">
      <h1>NASA APOD Data</h1>
      {/* Display selected date */}
      <p>Selected Date: {selectedDate}</p>
      {/* Form for input fields */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-3 mb-3">
            <label htmlFor="date" className="form-label">Date:</label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={selectedDate}
              onChange={e => {
                setSelectedDate(e.target.value);
                updateQueryParams('date', e.target.value);
              }}
            />
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="start_date" className="form-label">Start Date:</label>
            <input
              type="date"
              id="start_date"
              className="form-control"
              value={queryParams.start_date || ''}
              onChange={e => updateQueryParams('start_date', e.target.value)}
            />
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="end_date" className="form-label">End Date:</label>
            <input
              type="date"
              id="end_date"
              className="form-control"
              value={queryParams.end_date || ''}
              onChange={e => updateQueryParams('end_date', e.target.value)}
            />
          </div>
          <div className="col-sm-3 mb-3">
            <label htmlFor="count" className="form-label">Count:</label>
            <input
              type="number"
              id="count"
              className="form-control"
              onChange={e => updateQueryParams('count', parseInt(e.target.value))}
            />
          </div>
        </div>
        {/* Submit and Clear buttons */}
        <div className="row">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary me-2" disabled={loading}>Submit</button>
            <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
          </div>
        </div>
      </form>
      
      {/* Display data */}
      <ul className="list-unstyled">
        {apodData.map(apod => (
          <li key={apod.date}>
            <h2>{apod.title}</h2>
            <img src={apod.url} alt={apod.title} className="img-fluid mb-2" />
            <p>{apod.explanation}</p>
            <p>Date: {apod.date}</p> {/* Displaying the date from the response */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NasaData;
