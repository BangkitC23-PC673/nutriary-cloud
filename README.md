# Nutriary - Backend API

Nutriary is an android mobile app that serves to control daily nutrition and calories according to BMR results.

The backend is created to get food nutrition data taken from the the postgresql database in the GCP Cloud SQL. From this bakcend generates the following endpoints:

| Method | Endpoint | Description |
| ----------- | --------- | ---------- |
| POST | /eat | Users add new eat data by inputting time_id, food_id, quantity of the food, and date & time when users eating |
| GET | /eat | User can get all of the data that has been inputed |
| GET | /eat/:id | User can get the data that has been inputed by ID (do not need to type the colon sign ':', just type the ID) |
| PUT | /eat/:id | User can edit the data that has been inputed by ID (do not need to type the colon sign ':', just type the ID) |
| DELETE | /eat/:id | User can delete the data that has been inputed by ID (do not need to type the colon sign ':', just type the ID) |

# Deployment
After being tested locally 
  * Make a project in GCP
  * Conect the project to the billing account
  * Create an App Engine application to deploy the backend
  * Open Cloud Shell in Google Cloud Console
  * Input this command to clone the repository from Github: `git clone -b main https://github.com/BangkitC23-PC673/nutriary-cloud.git`
  * Make an `app.yaml` file. Type `runtime: nodejs16` in the file
  * In cloud shell, Input this command `gcloud app deploy` to deploy
  * Type `gcloud app browse` to get the link. For example: `https://predictive-guru-387911.et.r.appspot.com`
  * Open the link to see the result

Use the link to test the result on Postman. The result will be like this:

### POST
To input new data to database, just add `/eat` after the link. <br>
For example: `https://predictive-guru-387911.et.r.appspot.com/eat` <br>
And input with JSON format like this:
```
{
    "time_id": 1,
    "food_id": "AP001",
    "qty": "100.0",
    "date_time": "2023-06-07T21:25:23.000Z"
}
```
If succes, the result will display `Eat data added successfully!`.

### GET
To get all of the data, just add `/eat` after the link. <br>
For example: `https://predictive-guru-387911.et.r.appspot.com/eat` <br>
If succes, the result will display a json format like this:
```
[
    {
        "id": 1,
        "time_id": 1,
        "food_id": "AP001",
        "qty": "100.0",
        "date_time": "2023-06-07T21:25:23.000Z"
    },
    {
        "id": 2,
        "time_id": 1,
        "food_id": "AP002",
        "qty": "100.0",
        "date_time": "2023-06-07T14:29:17.121Z"
    },
    ...
]
```

### GET by ID
To get data by ID. just add `/eat/:id` after the link, but without the colon sign `:`. <br>
For example: `https://predictive-guru-387911.et.r.appspot.com/eat/1` <br>
If the ID not found, the reslut will display `Eat data does not exist!` <br>
If succes, the result will display a json format like this:
```
[
    {
        "id": 1,
        "time_id": 1,
        "food_id": "AP001",
        "qty": "100.0",
        "date_time": "2023-06-07T21:25:23.000Z"
    }
]
```

### PUT by ID
To edit/update data by ID. just add `/eat/:id` after the link, but without the colon sign `:`. <br>
For example: `https://predictive-guru-387911.et.r.appspot.com/eat/1` <br>
And edit existing data by id from this:
```
{
    "time_id": 1,
    "food_id": "AP001",
    "qty": "100.0",
    "date_time": "2023-06-07T21:25:23.000Z"
}
```
To this:
```
{
    "time_id": 1,
    "food_id": "BP057",
    "qty": "80.0",
    "date_time": "2023-06-07T21:25:23.000Z"
}
```
If the ID not found, the reslut will display `Eat data does not exist!` <br>
If success, the result will display `Eat data updated successfully!`

### DELETE by ID
To edit/update data by ID. just add `/eat/:id` after the link, but without the colon sign `:`. <br>
For example: `https://predictive-guru-387911.et.r.appspot.com/eat/1` <br>
If the ID not found, the reslut will display `Eat data does not exist!` <br>
If success, the result will display `Eat data deleted successfully!`
