
// Different possibilities of object in javaScript.

const student = {

    name: 'Md Arifur Rahman',

    id: 212002126,

    address: 'Munsurabad',

    isSingle: 'true',

    friends: ['santo', 'anam', 'alvi', 'adnan sami', 'noman'],

    movies: [{ name: 'superman', year: 2015 }, { name: 'harrypoter', year: 2017 }],

    bike: {
        name: 'repsol',

        year: '2024 - 2025',

        manufacture: {

            brand: 'honda',
            country: 'japan',
            founder: 'Michelin'
        }


    }
}

// console.log(student.bike.manufacture.brand);

console.log(student.movies);