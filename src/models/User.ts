export interface User {
    [key: string]: any;
    cell: "414-347-6911";
    dob: { age: number; date: Date };
    email: string;
    gender: string;
    id: { name: string; value: any };
    location: {
        city: string;
        coordinates: { latitude: string; longitude: string };
        country: string;
        postcode: string;
        state: string;
        street: { number: number; name: string };
        timezone: { offset: string; description: string };
    };
    name: {
        first: string;
        last: string;
        title: string;
    };
    nat: string;
    phone: string;
    age: number;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    registered: {
        age: number;
        date: Date;
    };
}
