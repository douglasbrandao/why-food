const string = 
    {
      "id": 1,
      "type": "single",
      "title": "Selecione o Tamanho da Sua Pizza",
      "required": true,
      "values": [
        {
          "id": 1,
          "name": "Broto",
          "price": 0
        },
        {
          "id": 2,
          "name": "Pequena",
          "price": 10
        },
        {
          "id": 3,
          "name": "Média",
          "price": 15
        },
        {
          "id": 4,
          "name": "Grande",
          "price": 18
        }
      ]
    }
;

const jsonToString = JSON.stringify(string);

const stringToJson = JSON.parse(jsonToString);

// console.log(stringToJson)

let newObject = {}

Object.keys(stringToJson).forEach(key => {
    console.log(stringToJson[key]);
    newObject = { ...newObject, [key]: stringToJson[key]}
})

// console.log(newObject)
