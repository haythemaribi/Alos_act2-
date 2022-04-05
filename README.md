# Alos_act2

## Routes

List All Recipes

```http
GET /api/recipes
```

Find Single Recipe by id

```http
GET /api/recipes/{id}
```

Create a Recipe

```http
POST /api/recipes
```

```JSON
 {
    "ingredients": [
      {
        "name": "sugar",
        "amount": 1,
        "unit": "cup"
      },
      {
        "name": "egg",
        "amount": 1,
        "unit": ""
      }
    ],
    "title": "Recipe Title",
    "readyInMinutes": 12, // time consuming for the dish to be ready
    "servings": 2, // number of people consume the dish
    "cuisines": ["Algerian"],
    "occasions": ["Eid al-Fitr"],
    "instructions": "instruction on how to prepare the dish"
  }
```

Update a recipe by id

```http
PUT /api/recipes/{id}
```

```JSON
 {
    "ingredients": [
      {
        "name": "sugar",
        "amount": 1,
        "unit": "cup"
      },
      {
        "name": "egg",
        "amount": 1,
        "unit": ""
      }
    ],
    "title": "Recipe New Title",
    "readyInMinutes": 12,
    "servings": 2,
    "cuisines": ["Algerian"],
    "occasions": ["Eid al-Fitr"],
    "instructions": "New instruction on how to prepare the dish"
  }
```
Delete a recipe by id

```http
DELETE /api/recipes/{id}
```


## Code status used

| Code |        status         | Description                                                                                        |
|:----:|:---------------------:|:---------------------------------------------------------------------------------------------------|
| 200  |          OK           | Indicate success                                                                                   |
| 201  |        Created        | Successful creation occurred (via POST or PUT)                                                     |
| 204  |      No Content       | Indicate success without a response but, commonly used for DELETE and PUT requests                 |
| 400  |      Bad Request      | Indicate something is not right with the request, for example, missing information or invalid data |
| 404  |       Not Found       | Resource not found                                                                                 |