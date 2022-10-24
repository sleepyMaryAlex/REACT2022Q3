export function capitalizeString(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function setColor(status: string) {
  switch (capitalizeString(status)) {
    case 'Alive':
      return 'green';
    case 'Dead':
      return 'red';
    default:
      return 'purple';
  }
}

export const speciesValues = [
  'Human',
  'Humanoid',
  'Cronenberg',
  'Alien',
  'Poopybutthole',
  'Animal',
  'Robot',
  'Mythological creature',
  'Unknown',
];
