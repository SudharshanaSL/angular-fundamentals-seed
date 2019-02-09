export interface Children {
    name: string,
    age: number
}

export interface Passenger {
    id: number,
    name: string,
    checkedIn: boolean,
    mandatoryCheckedInDate: number | null,
    optionalCheckedInDate?: number,
    children: Children[] | null
}
