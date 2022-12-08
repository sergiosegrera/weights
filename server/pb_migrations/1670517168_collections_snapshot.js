migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2022-12-01 22:25:55.082Z",
      "updated": "2022-12-08 16:23:24.982Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "w4tbz9lk",
          "name": "avatarUrl",
          "type": "url",
          "required": false,
          "unique": false,
          "options": {
            "exceptDomains": null,
            "onlyDomains": null
          }
        }
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": false,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": false,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "b6gaon08cj4bqfv",
      "created": "2022-12-01 22:31:05.652Z",
      "updated": "2022-12-08 16:30:15.145Z",
      "name": "exercises",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "ca4bacai",
          "name": "name",
          "type": "text",
          "required": true,
          "unique": true,
          "options": {
            "min": 0,
            "max": 40,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "d2dpyibe",
          "name": "color",
          "type": "number",
          "required": false,
          "unique": false,
          "options": {
            "min": 0,
            "max": 4
          }
        },
        {
          "system": false,
          "id": "pnrhk1af",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": true
          }
        }
      ],
      "listRule": "@request.auth.id = user.id",
      "viewRule": "@request.auth.id = user.id",
      "createRule": "@request.auth.id = user.id",
      "updateRule": null,
      "deleteRule": "@request.auth.id = user.id",
      "options": {}
    },
    {
      "id": "5fiogb70u3g8vyz",
      "created": "2022-12-01 22:34:50.561Z",
      "updated": "2022-12-08 16:31:13.085Z",
      "name": "sets",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "ujhixn3u",
          "name": "repetitions",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": 0,
            "max": null
          }
        },
        {
          "system": false,
          "id": "xnveydfq",
          "name": "weight",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": 0,
            "max": null
          }
        },
        {
          "system": false,
          "id": "n4gle489",
          "name": "exercise",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "b6gaon08cj4bqfv",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "e21l111y",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": true
          }
        }
      ],
      "listRule": "@request.auth.id = user.id",
      "viewRule": "@request.auth.id = user.id",
      "createRule": "@request.auth.id = user.id",
      "updateRule": null,
      "deleteRule": "@request.auth.id = user.id",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
