export default function formatDate(isoDate: string) {
  if (!isoDate) return;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(isoDate);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 12-hour clock, 12 midnight is 12

  // Add leading zero to minutes if needed
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const formattedDate = `${day} ${months[monthIndex]} ${year} - ${hours}:${minutes} ${ampm}`;

  return formattedDate;
}
