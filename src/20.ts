function calculateArea(radius: number): number {
    const pi = Math.PI;
    let area = pi * radius ** 2;
    return area.toFixed(2);
}

console.log(calculateArea(10));
