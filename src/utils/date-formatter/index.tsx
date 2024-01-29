export function formatDateTime(inputDateString: string): string {
  const inputDate = new Date(inputDateString);

  const optionsDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = inputDate.toLocaleDateString("id-ID", optionsDate);

  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };
  const formattedTime = inputDate.toLocaleTimeString("id-ID", optionsTime);

  const result = `${formattedDate}, ${formattedTime}`;

  return result;
}
