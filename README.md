# Chat-App

A chat application using WebSockets is a real-time communication platform that allows users to exchange messages and engage in conversations over the internet. Unlike traditional HTTP requests, which are stateless and require constant polling for updates, WebSockets provide full-duplex communication channels that enable persistent, bidirectional communication between the client and server.

1.User Interface:
   The chat application typically consists of a user interface that allows users to log in or sign up with their credentials. After authentication, users can access a chat room or create their chat rooms. The user interface should have input boxes for sending messages and an area to display the chat history.

2.WebSocket Connection:
   When a user logs into the chat application, their web browser or client establishes a WebSocket connection with the server. The WebSocket protocol is designed to work over standard ports (usually 80 for HTTP and 443 for HTTPS), making it firewall-friendly and widely supported.

3.Message Broadcasting:
   Once the WebSocket connection is established, users can send messages to the server. When a user sends a message, the server receives it and processes the data, such as the sender's ID, the message content, and the timestamp. The server then broadcasts this message to all connected users in the same chat room using their respective WebSocket connections.

4.Real-time Updates:
   As the server broadcasts messages, all connected users receive the updates in real-time without the need to refresh the page or make additional HTTP requests. This real-time nature of WebSockets ensures a seamless and responsive chat experience for all users involved.

5.Presence Management:
   The server should manage user presence, such as tracking which users are online and which chat rooms they have joined. This information can be used to display a list of online users in a chat room or show the users available for direct messaging.

6.Error Handling and Security:
   Proper error handling is essential to ensure a smooth user experience. The server should handle potential errors gracefully and provide meaningful feedback to users in case of connection failures or other issues. Additionally, appropriate security measures, like input validation and user authentication, should be implemented to prevent unauthorized access or malicious activities.

7.Persistent Storage (optional):
   Depending on the requirements of the chat application, messages and user data may need to be stored in a database for later retrieval. This allows users to see previous chat history even if they join the chat room after some messages have been exchanged.

Overall, the app can configure according to the requirements and this is a very basic depiction of the chat application and does not record any data as there is no database involved in the same.

Further adding more, the app can be configured to users choice to add a login page, database to store the chat and also add message type-image/files. 


<img width="929" alt="image" src="https://github.com/Avikal-16/Chat-App/assets/89452246/dcbdb59f-b518-4318-a83d-36ba878fd71e">
