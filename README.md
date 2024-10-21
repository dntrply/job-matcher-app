# job-matcher-app
An app that does match making between a job seeker and an employer

The code is at:
PS C:\Users\dntrp\projects\job-matcher-app

The front end is at
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher>

The back end is vercel supported and is at:
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>


Vercel commands to run the backend locally
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend> **vercel dev**

Vercel command to push code to production:
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend> **vercel --prod**

To launch the frontend so that it is accessible from an outside URL:
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo start --tunnel
(You will have to allow from your local Windows defender firewall program)

Once launched, the app will be accessible by anybody with a URL like:
https://si97vfw-dntrplytch-8081.exp.direct/
or locally at
http://localhost:8081/

Note that job-matcher\App.js has the code:

````
  const isLocal = false; // Set to false for production
```
When islocal is false, it will currently use the frontend on the laptop and the backend on Vercel

When doing backend development on the laptopn, the suggestion is to use
````
  const isLocal = true; // Set to false for production
```
which will use the laptop for both the backend and the frontend

One can also use ngrok (instead of expo tunnel) to get a URL accessible from the outside.
In that case, expo will be started normally and then ngrok will be launched separately on another
terminal window.

TBD: Can the frontend also be taken to Vercel?
