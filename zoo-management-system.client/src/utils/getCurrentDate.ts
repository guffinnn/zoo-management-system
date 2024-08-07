export function getCurrentDate(): string {
  const dateString = new Date();
  const dateParts = dateString.toISOString().split('T')[0].split('-');
  return `${dateParts[2]} ${dateString.toLocaleString('default', { month: 'long' })} ${dateParts[0]}`;
}
