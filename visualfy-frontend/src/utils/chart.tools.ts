// Generador de array de colores en funcion del leng de los datos (max 15)
export const getColors = (count: number): string[] => {
    const colors = [
      '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A'
    ];

    const colorForChart = []

    for (let i = 0; i < count; i++) {
      colorForChart.push(colors[i]);
    }

    return colorForChart;
}