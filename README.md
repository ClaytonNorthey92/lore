# Lore
Containerized API to a datalake to store your immutable data in MongoDB.

The Red Gyarados was found in the Lake of Rage (aka, L.O.R., pronouced "Lore").  Lore helps you throw your data into a lake, then find your Red Gyarados.


### Install
Make sure you have [Docker](https://docs.docker.com/engine/installation/) installed.

### Run Lore
```
docker-compose up --build
```

### How to use Lore
**Lore** has one endpoint, the `/events` endpoint.  The only thing **Lore** takes responsibility for is saving events you want to.

### Configure consumers
Consumers are those programs that use **Lore**.  You can conigure key --> consumer name mappings in the `./models/config.js` file.

*NOTE: Do NOT expose these keys to users.  These identify which of your programs saved which events.*

### Create an event
#### POST /events

Parameters:
- consumer (String) - the key that identifies which program saved the event
- name (String) - the name of the event
- data (Object) - the data to be saved with the event
```
{
	"consumer": "default",
	"name": "email change",
	"data": {
		"old email": "blah@blah.test",
		"new email": "blah2@blah.test"
	}
}
```

This will create an event named "email change" with the old email and new email.
