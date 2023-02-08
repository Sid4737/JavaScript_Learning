const mohitPerson =  {
    fullName: "Sachin Tendulkar",
    age: 42,
    "isMarried": true,
    city:"pune"
}
for (const key in mohitPerson) {
    if (Object.hasOwnProperty.call(mohitPerson, key)) {
        const element =mohitPerson [key];
        console.log(element);
    }
}