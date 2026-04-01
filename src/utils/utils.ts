const groupBy = <T, K extends keyof T>(array: T[], chave: K): Record<string, T[]> => {
    return array.reduce((acumulador, item) => {
        const grupo = String(item[chave]);
        
        if (!acumulador[grupo]) {
        acumulador[grupo] = [];
        }
        
        acumulador[grupo].push(item);
        
        return acumulador;
    }, {} as Record<string, T[]>);
}

export { groupBy }