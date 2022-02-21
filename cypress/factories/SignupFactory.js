var faker = require('faker-br');


export default {
    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: faker.br.cpf(),
            email: faker.internet.email(firstName),
            whpp: "62981317252",

            address: {
                postalcode: "74675050",
                street: "Rua Araguari",
                number: "12",
                details: "QD 19 LT 25",
                district: "Jardim Guanabara",
                city_state: "Goiânia/GO"
            },

            delivery_method: "Moto",
            cnh: "./images/cnh-digital.jpg"

        }

        return data
    }
}