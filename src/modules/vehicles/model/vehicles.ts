export type CreateVehicle = {
    name: string,
    brand: string,
    model: string,
    image: string,
    price: number
}

export type UpdateVehicle = {
    name?: string,
    brand?: string,
    model?: string,
    image?: string,
    price?: number
}