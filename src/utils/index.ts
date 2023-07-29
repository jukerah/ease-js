export const formatDate = (date: Date, format: "DD/MM/YYYY" | "YYYY/MM/DD") => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  let formattedDate: string;
  if(format === "DD/MM/YYYY") {
    formattedDate = `${day}-${month}-${year}`;
  } else {
    formattedDate = `${year}-${month}-${day}`;
  }
  return formattedDate;
};

export const formatDateTime = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  
  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  return formattedDateTime;
};

export default function randomUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
};