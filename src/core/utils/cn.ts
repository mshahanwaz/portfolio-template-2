export default function cn(...classNames: any[]): string {
  return classNames.filter(Boolean).join(' ');
}
