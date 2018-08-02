# live-code-2


| Route                          | HTTP   | Description                                               |
|--------------------------------|--------|-----------------------------------------------------------|
| /login                         | POST   | Login while get an access token based on credentials info |
| /register                      | POST   | Register with new user                                    |
| /users                         | GET    | Get all the users info                                    |
| /users/:id                     | GET    | Get a single user info                                    |
| /articles                      | GET    | Create a article                                          |
| /articles/:author              | GET    | Delete a article                                          |
| /articles/delete/:id           | DELETE | Delete a article                                          |
| /articles/edit/:id             | PUT    | Update a article with new info                            |
| /articles/add                  | POST   | Add a new article                                         |
| /articles/categories/:category | GET    | Filter article by category                                |
