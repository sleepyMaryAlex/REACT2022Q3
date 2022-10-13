class Common {
  static capitalizeString(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  static setColor(status: string) {
    switch (this.capitalizeString(status)) {
      case 'Alive':
        return 'green';
      case 'Dead':
        return 'red';
      default:
        return 'purple';
    }
  }
}

export default Common;
