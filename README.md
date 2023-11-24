API routs


| HTTP Method | URI path                       | Description        |
|-------------|--------------------------------|--------------------|
| GET         | `people/getAllPeople`          | All People list    |
| GET         | `people/myFriends/:userId`     | My friend in list  |
| POST        | `people/addFriend/:friendId`   | Add friend in list |
| DELETE      | `people/deletFriend/:friendId` | Delete friend      |
| POST        | `event/eventCreate`            | Create event       |
| POST        | `event/eventJoin`              | Join event         |
| GET         | `event/allEvent`               | All event          |
| GET         | `event/detailsEvent/:eventId`  | Details event      |
| GET         | `event/map`                    | Maps               |
| GET         | `event/map-place`              | Maps               |


Auth routes

Base URL `/auth`

| HTTP Method | URI path        | Description       |
|-------------|-----------------|-------------------|
| POST        | `/signup`       | Signup user       |✅✅✅✅
| POST        | `/login`        | Login user        |
| PUT         | `/userEdit/:id` | Edit user         |
| GET         | `/verify`       | Verify Auth token |



Client routes

| URL                            | Description      | Protected |
|--------------------------------|------------------|-----------|
| `/`                            | Index Page       |           |
| `/eventos`                     | Lista de eventos |           |
| `/eventos/mapa`                | Mapa de eventos  |           |
| `/eventos/crear`               | crear eventos    |           |
| `/eventos/editar/:event_id`    | Editar evento    |           |
| `/eventos/detalles/:evento_Id` | Detalles evento  |           |
| `/perfil/:usuario_Id`          | Detalles usuario |           |
| `/incio-sesion`                | Iniciar sesion   |           |
| `/registro`                    | Registro         |           |
| `/listado/usuarios`            | lista usuarios   |           |
|                                |                  |           |


