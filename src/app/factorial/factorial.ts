export function factorial(num: number) {
    let facto = 1
    for (let index = num; index > 1; index--) {
        facto = facto * index;
    }
    return facto;
}