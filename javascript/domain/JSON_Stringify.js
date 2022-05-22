function stringify(obj) {
    let objString = '';
    
    // We get the last key of this object
    const lastKey = Object.keys(obj).pop();    // We add the first curly brace
    objString += '{';    for (const key in obj) {
        const value = obj[key];
        
        objString += `"${key}":`;
        
        if (typeof obj[key] === 'object') {
            objString += `${stringify(value)}`;
        } else if (typeof value === 'string') {
            objString += `"${value}"`;
        } else if (typeof obj[key] === 'number') {
            objString += `${value}`;
        }
        
        // We add the comma
        if (key !== lastKey) {
            objString += ',';
        }
    }    // We add the last curly brace
    objString += '}';    return objString;
}