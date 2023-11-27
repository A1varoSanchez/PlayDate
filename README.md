API routs


| HTTP Method | URI path                       | Description        |
|-------------|--------------------------------|--------------------|
| GET         | `family/getAllfamilies`        | All families       |
| GET         | `family/myFriends/:userId`     | List of friends    |
| POST        | `family/addFriend/:friendId`   | Add friend         |
| DELETE      | `family/deletFriend/:friendId` | Delete friend      |
| POST        | `event/eventCreate`            | Create event       |
| POST        | `event/eventJoin`              | Join event         |
| GET         | `event/allEvent`               | All events         |
| GET         | `event/eventDetails/:eventId`  | Event details      |
| GET         | `event/map`                    | Maps               |
| GET         | `event/map-place`              | Maps               |


Auth routes

Base URL `/auth`

| HTTP Method | URI path         | Description       |
|-------------|------------------|-------------------|
| POST        | `/signup`        | Signup user       |✅✅✅✅
| POST        | `/login`         | Login user        |
| PUT         | `/editUser/:id`  | Edit user         |
| GET         | `/verify`        | Verify Auth token |



Client routes

| URL                            | Description      | Protected |
|--------------------------------|------------------|-----------|
| `/`                            | Index Page       |           |
| `/eventos`                     | Lista de eventos |           |
| `/eventos/mapa`                | Mapa de eventos  |           |
| `/eventos/crear`               | crear eventos    |   User    |
| `/eventos/editar/:evento_id`   | Editar evento    |   User    |
| `/eventos/detalles/:evento_id` | Detalles evento  |   User    |
| `/perfil/:usuario_id`          | Detalles usuario |   User    |
| `/inicio-sesion`               | Iniciar sesion   |           |
| `/registro`                    | Registro         |           |
| `/listado/usuarios`            | lista usuarios   |   ADMIN   |


