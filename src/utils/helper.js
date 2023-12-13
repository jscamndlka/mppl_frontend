export const DIVISION = {
  ANALISIS: "ANALISIS KEBIJAKAN MUDA",
  ADMINISTRASI_KESEKRETARIATAN: "ADMINISTRASI & KESEKRETARIATAN",
  PERISLAH_LEGISLATIF_MUDA: "PERISLAH LEGISLATIF MUDA",
};

export const STATUS = {
  REJECT: "REJECT",
  ACCEPT: "ACCEPT",
};

export function parseAndFormatDateString(dateString) {
  const parsedDate = new Date(dateString);
  const year = parsedDate.getFullYear();
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
  const day = parsedDate.getDate().toString().padStart(2, "0");

  return `${day}-${month}-${year}`;
}
