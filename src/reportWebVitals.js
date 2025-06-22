const reportWebVitals = onPerfEntry => {
  // Check if a valid performance entry callback is provided
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import web-vitals metrics and run each with the provided callback
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function
export default reportWebVitals;