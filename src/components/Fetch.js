import React, { useState, useEffect } from 'react';

const FetchedData = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [quotes, setQuotes] = useState({});
  const url = 'https://api.api-ninjas.com/v1/quotes?category=success';
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'f+FKgTTuxxK6rdIQ/01/ag==DvCi8d9Mdvsx7cGp',
        },
      });
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      setIsError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">No quotes found</div>;
  return (
    <div className="quotesContainer">
      <h2 className="category">{quotes[0]?.category}</h2>
      <p className="quote">{`"${quotes[0]?.quote}"`}</p>
      <p className="author">{quotes[0]?.author}</p>
    </div>
  );
};

export default FetchedData;
