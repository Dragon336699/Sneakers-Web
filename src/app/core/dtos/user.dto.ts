export interface UserDto {
    fullname: string,
    phone_number: string,
    address: string,
    role: {
        id: number,
        name: string
    }
}