export function generateSlug(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // Normalize os caracteres Unicode em sua forma de composição e decomposição
    .replace(/[\u0300-\u036f]/g, "") // Remova caracteres acentuados
    .replace(/[^\w\s]/g, "") // Remova símbolos
    .trim() // Remova espaços em branco no início e no final
    .replace(/\s+/g, "-") // Substitua espaços em branco por hífens
    .replace(/--+/g, "-") // Substitua múltiplos hífens por um único hífen
    .replace(/^-+|-+$/g, ""); // Remova hífens no início e no final
}
