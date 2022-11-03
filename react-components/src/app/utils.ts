import { IResult } from 'types/types';
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
      return 'blue';
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

export const statuses = ['Alive', 'Dead', 'Unknown'];

export function sortBy<T>(a: T, b: T, order: string) {
  const reverse = order === 'asc' ? 1 : -1;
  if (a > b) {
    return 1 * reverse;
  } else if (a < b) {
    return -1 * reverse;
  } else {
    return 0;
  }
}

export function sort(results: IResult[], value: string) {
  switch (value) {
    case 'byNameASC':
      results.sort((a, b) => sortBy(a.name, b.name, 'asc'));
      break;
    case 'byNameDESC':
      results.sort((a, b) => sortBy(a.name, b.name, 'desc'));
      break;
    case 'byStatusASC':
      results.sort((a, b) => sortBy(a.status, b.status, 'asc'));
      break;
    case 'byStatusDESC':
      results.sort((a, b) => sortBy(a.status, b.status, 'desc'));
      break;
    case 'byDefault':
      results.sort((a, b) => sortBy(a.id, b.id, 'asc'));
      break;
  }
  return results;
}
