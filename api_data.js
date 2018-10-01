define({ "api": [
  {
    "type": "socket",
    "url": "http://todoapi.ekantchawla.me/api/v1/notification",
    "title": "Socket URL",
    "version": "1.0.0",
    "group": "App_Socket_URL",
    "description": "<p>This is the url where the client must make a socket connection</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "App_Socket_URL",
    "name": "SocketHttpTodoapiEkantchawlaMeApiV1Notification"
  },
  {
    "type": "event",
    "url": "setUser",
    "title": "setUser",
    "version": "1.0.0",
    "group": "Emit",
    "description": "<p>This event should emitted by the client to register and set user detail to the socket connection. With out this the server will not identify the user as valid user.</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Emit",
    "name": "EventSetuser"
  },
  {
    "type": "event",
    "url": "authError",
    "title": "authError",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This event is emitted by the server if it finds that the authToken is invalid or socket is missing user detail.</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "EventAutherror"
  },
  {
    "type": "event",
    "url": "friend-notification",
    "title": "friend-notification",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This event is emitted by the server when friend sends the user a request or accepts his request.</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "EventFriendNotification"
  },
  {
    "type": "event",
    "url": "todo-notification",
    "title": "todo-notification",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This event is emitted by the server when friend updates the todo.</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "EventTodoNotification"
  },
  {
    "type": "event",
    "url": "verifyUser",
    "title": "verifyUser",
    "version": "1.0.0",
    "group": "Listen",
    "description": "<p>This event should be listened to by the client, after this the client can then emit setUser event.</p>",
    "filename": "app/libs/socketLib.js",
    "groupTitle": "Listen",
    "name": "EventVerifyuser"
  }
] });
