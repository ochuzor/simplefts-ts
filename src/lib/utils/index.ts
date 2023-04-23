export const map = <T>(ls: T[]) => ls.map.bind(ls);
export const filter = <T>(ls: T[]) => ls.filter.bind(ls);
export const reduce = <T>(ls: T[]) => ls.reduce.bind(ls);
