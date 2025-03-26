function formatAddress(address) {
  const { firstLine, city, postalCode } = address;

  return firstLine.includes(city)
    ? `${firstLine}, ${postalCode}`
    : `${firstLine}, ${city}, ${postalCode}`; 
}

export {
    formatAddress
}