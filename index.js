class Formatter {
  //add static methods here
  static capitalize(string){
    if (typeof string !== 'string' || string.length === 0) {
      return '';
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  };

  static titleize(string){
    if (typeof string !== 'string' || string.length === 0) {
      return '';
    };
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      };
    });
    return this.capitalize(titleizedWords.join(' '));
  };
  
};