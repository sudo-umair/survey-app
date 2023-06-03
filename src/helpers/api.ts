export const handleAxiosError = (error: any) => {
  if (error.response) {
    const { status, data } = error.response;
    return {
      status,
      message: data.message,
    };
  } else if (error.request) {
    return {
      status: 500,
      message: 'No response from server',
    };
  } else {
    return {
      status: 500,
      message: error.message,
    };
  }
};
