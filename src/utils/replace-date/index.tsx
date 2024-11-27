export const formatToLocaleDate = (dateString: string, locale = "de-DE"): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString(locale, options);
};

// Exemplo de uso
// const formattedDateGerman = formatToLocaleDate("2024-11-26 01:03:29.000000", "de-DE");
// const formattedDateBR = formatToLocaleDate("2024-11-26 01:03:29.000000", "pt-BR");
