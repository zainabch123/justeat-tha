function createError(message, statusCode) {
    const errorObj = {
    statusCode: statusCode,
    message: message
  };
  return errorObj;
}

export {
    createError
}