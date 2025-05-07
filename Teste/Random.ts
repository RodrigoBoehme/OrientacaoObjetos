export function RND(Type: String = 'F', Max: number = 1, Min: number = 0): number {
    let ZaNumba: number
    if (Type.toUpperCase() === "F") {
        ZaNumba = Math.floor(Math.random() * (Max - Min) + Min);
    }
    else {
        if (Type.toUpperCase() === "C") {
            ZaNumba = Math.ceil(Math.random() * (Max - Min) + Min);
        }

    }
    return ZaNumba
}