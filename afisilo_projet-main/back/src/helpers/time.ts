
export const getRequestTime = () => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Europe/Paris' // Adjust timezone if needed
    };
    return new Date().toLocaleString('fr-Fr', options);
  };
  