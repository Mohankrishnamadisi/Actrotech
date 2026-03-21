export function scrollToSection(id: string) {
  if (typeof window === 'undefined') return;
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    console.warn(`scrollToSection: Element with id '${id}' not found`);
  }
}
