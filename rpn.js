export function mainFunction(expression) {
    if (!expression) return 0;
    const parts = expression.split(' ');
    const contenu = [];
  
    parts.forEach(part => {
      if (!isNaN(part)) {
        contenu.push(parseFloat(part));
      } else {
        const b = contenu.pop();
        const a = contenu.pop();
        switch (part) {
          case '+':
            contenu.push(a + b);
            break;
        }
      }
    });
  
    return contenu.pop();
  }
  