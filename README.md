# job-matcher-app

## Recent development ##

Have two separate projects in Vercel, one for the front end and one for the backend.
The front end is not in "local" mode so that the vercel front end uses the vercel backend
I am sure this can be further influenced with the proper use of env variables later. TBD

## End of Recent development ##

## Vercel Authentication ##

For the front end, I have turned teh authentication off. It is best it be turned on later.
It may also make sense to implement oAUth - especially if there is overuse / abuse of 
the OpenAI usage or the VErcel usage. At a minimum, to tuern on Authentication so that a
visito is forced to log im to Vercel before accessing the from end, navigate to the 
project and then Settings --> Deployment Protection --> Vercel Authentication and mark it
enabled

## End of Vercel Authentication ##

An app that does match making between a job seeker and an employer

The code is at:
PS C:\Users\dntrp\projects\job-matcher-app

The front end is at
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher>

The back end is vercel supported and is at:
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>


Vercel commands to run the backend locally
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend> **vercel dev**

Vercel command to push backend code to production:
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
````

When islocal is false, it will currently use the frontend on the laptop and the backend on Vercel

When doing backend development on the laptopn, the suggestion is to use
````
  const isLocal = true; // Set to false for production
````
which will use the laptop for both the backend and the frontend

One can also use ngrok (instead of expo tunnel) to get a URL accessible from the outside.
In that case, expo will be started normally and then ngrok will be launched separately on another
terminal window.

TBD: Can the frontend also be taken to Vercel?


### Frontend Deployment

The frontend can be deployed to Vercel for seamless deployment and hosting.

#### Steps to Deploy an Expo App to Vercel

In general, follow the instructions at [Publish websites with Metro](https://docs.expo.dev/distribution/publishing-websites/)

1. **Build the Web Version of Your Expo App**:
   npx expo export -p web

2. Create the vercel.json file as described in the link above

3. To get a development version on vercel
  vercel

4. To get a production version on vercel (productin version let's you use the project name directly in the URL such as 
   https://job-matcher-six.vercel.app/)
  vercel --prod





### Appendix

**npx expo export -p web**
(node:5808) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Starting Metro Bundler
Web Bundled 16928ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (229 modules)

Exporting 1 bundle for web:
_expo/static/js/web/AppEntry-f1e9f8c2a6ad598ac1fd2daeb4e02230.js (368 kB)

Exporting 3 files:
favicon.ico (14.5 kB)
index.html (1.23 kB)
metadata.json (49 B)

App exported to: dist
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx serve dist --single
Need to install the following packages:
serve@14.2.4
Ok to proceed? (y) y


   ┌──────────────────────────────────────────┐
   │                                          │
   │   Serving!                               │
   │                                          │
   │   - Local:    http://localhost:3000      │
   │   - Network:  http://192.168.56.1:3000   │
   │                                          │
   │   Copied local address to clipboard!     │
   │                                          │
   └──────────────────────────────────────────┘


   

   **Limitations**

   I belive to delpoy the front end to a platform such as VErcel, I need to have expo-web nstalled. I needed to install 
   with --legacy-peer-deps as below:
   
   PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npm install --save expo-web --legacy-peer-deps

added 59 packages, removed 63 packages, and audited 1294 packages in 18s

133 packages are looking for funding
  run `npm fund` for details

9 moderate severity vulnerabilities

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher>




Without the --legacy-peer-apps, this is the error encountered:

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> expo install expo-web
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
(node:20940) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Installing 1 other package using npm.
> npm install --save expo-web
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: job-matcher@1.0.0
npm error Found: react@18.2.0
npm error node_modules/react
npm error   react@"18.2.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer react@"16.x.x" from expo-web@0.0.14
npm error node_modules/expo-web
npm error   expo-web@"*" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error C:\Users\dntrp\AppData\Local\npm-cache\_logs\2024-10-21T10_34_26_918Z-eresolve-report.txt
npm error A complete log of this run can be found in: C:\Users\dntrp\AppData\Local\npm-cache\_logs\2024-10-21T10_34_26_918Z-debug-0.log

npm exited with non-zero code: 1
Error: npm exited with non-zero code: 1
    at ChildProcess.completionListener (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\spawn-async\src\spawnAsync.ts:65:13)
    at Object.onceWrapper (node:events:635:26)
    at ChildProcess.emit (node:events:520:28)
    at ChildProcess.cp.emit (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\cross-spawn\lib\enoent.js:34:29)
    at maybeClose (node:internal/child_process:1105:16)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:305:5)
    ...
    at spawnAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\spawn-async\src\spawnAsync.ts:26:19)
    at NpmPackageManager._runAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\package-manager\src\NodePackageManagers.ts:166:31)
    at NpmPackageManager.addWithParametersAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\package-manager\src\NodePackageManagers.ts:99:18)
    at actionAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\src\commands\installAsync.ts:143:24)
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher>


**Overcoming Vercel front end deployment issue**
Likewise, on the VErcel project settings page for the front end, I neded to make a change:
1. Log in to Vercel - [Projects](https://vercel.com/dntrplys-projects)
2. Click on the front end project (job-matcher) in this case
3. Click on Settings (part of the tab menu after the first header row)
4. Scroll down to "Build & Development Settings"
5. For the "Install Command" field, enter npm install --legacy-peer-deps


**Transcript Terminal 1**

Transcript of tring to get the front end working on VErecl:
PS C:\Users\dntrp\projects\job-matcher-app>







PS C:\Users\dntrp\projects\job-matcher-app>
PS C:\Users\dntrp\projects\job-matcher-app> cd .\job-matcher\
PS C:\Users\dntrp\projects\job-matcher-app> cd .\job-matcher\PS C:\Users\dntrp\projects\joPS C:\Users\dntrp\projecPS C:\Users\dntrp\projects\job-matcher-app> cd .\job-matcher\
PS C:\Users\dntrp\projects\job-matcher-app> cd .\job-matcher\
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> vercel
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> vercel
(node:25952) [DEP0040] DeprecationWarning: The `punycode` mod(node:25952) [DEP0040] DeprecationWarning: The `punycode` mod(node:25952) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warninge is deprecated. Please use a userland alternative instead.    ode:25952) [DEP0060] DeprecationWarning: The `util._extend`
(Use `node --trace-deprecation ...` to show where the warning was created)
e is deprecated. Please use a userland alternative instead.   API is deprecated. Please e is depe is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:25952) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
Vercel CLI 37.5.2
? Set up and deploy “~\projects\job-matcher-app\job-matcher”? yes
? Which scope do you want to deploy to? dntrply's projects
? Link to existing project? no
? What’s your project’s name? job-matcher
? In which directory is your code located? ./
Local settings detected in vercel.json:
No framework detected. Default Project Settings:
- Build Command: `npm run vercel-build` or `npm run build`
- Development Command: None
- Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
- Output Directory: `public` if it exists, or `.`
? Want to modify these settings? (y/N)
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> expo install expo-web
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
(node:20940) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Installing 1 other package using npm.
> npm install --save expo-web
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: job-matcher@1.0.0
npm error Found: react@18.2.0
npm error node_modules/react
npm error   react@"18.2.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer react@"16.x.x" from expo-web@0.0.14
npm error node_modules/expo-web
npm error   expo-web@"*" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error C:\Users\dntrp\AppData\Local\npm-cache\_logs\2024-10-21T10_34_26_918Z-eresolve-report.txt
npm error A complete log of this run can be found in: C:\Users\dntrp\AppData\Local\npm-cache\_logs\2024-10-21T10_34_26_918Z-debug-0.log

npm exited with non-zero code: 1
Error: npm exited with non-zero code: 1
    at ChildProcess.completionListener (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\spawn-async\src\spawnAsync.ts:65:13)
    at Object.onceWrapper (node:events:635:26)
    at ChildProcess.emit (node:events:520:28)
    at ChildProcess.cp.emit (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\cross-spawn\lib\enoent.js:34:29)
    at maybeClose (node:internal/child_process:1105:16)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:305:5)
    ...
    at spawnAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\spawn-async\src\spawnAsync.ts:26:19)
    at NpmPackageManager._runAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\package-manager\src\NodePackageManagers.ts:166:31)
    at NpmPackageManager.addWithParametersAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\package-manager\src\NodePackageManagers.ts:99:18)
    at actionAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\src\commands\installAsync.ts:143:24)
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> expo install expo-web
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
(node:4888) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Installing 1 other package using npm.
> npm install --save expo-web
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: job-matcher@1.0.0
npm error Found: react@18.2.0
npm error node_modules/react
npm error   react@"18.2.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer react@"16.x.x" from expo-web@0.0.14
npm error node_modules/expo-web
npm error   expo-web@"*" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error C:\Users\dntrp\AppData\Local\npm-cache\_logs\2024-10-21T10_35_50_622Z-eresolve-report.txt
npm error A complete log of this run can be found in: C:\Users\dntrp\AppData\Local\npm-cache\_logs\2024-10-21T10_35_50_622Z-debug-0.log

npm exited with non-zero code: 1
Error: npm exited with non-zero code: 1
    at ChildProcess.completionListener (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\spawn-async\src\spawnAsync.ts:65:13)
    at Object.onceWrapper (node:events:635:26)
    at ChildProcess.emit (node:events:520:28)
    at ChildProcess.cp.emit (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\cross-spawn\lib\enoent.js:34:29)
    at maybeClose (node:internal/child_process:1105:16)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:305:5)
    ...
    at spawnAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\spawn-async\src\spawnAsync.ts:26:19)
    at NpmPackageManager._runAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\package-manager\src\NodePackageManagers.ts:166:31)
    at NpmPackageManager.addWithParametersAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\node_modules\@expo\package-manager\src\NodePackageManagers.ts:99:18)
    at actionAsync (C:\Users\dntrp\AppData\Roaming\nvm\v22.6.0\node_modules\expo-cli\src\commands\installAsync.ts:143:24)
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npm install --save expo-web --legacy-peer-deps

added 59 packages, removed 63 packages, and audited 1294 packages in 18s

133 packages are looking for funding
  run `npm fund` for details

9 moderate severity vulnerabilities

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> expo build:web
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
(node:28284) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Web Bundling complete 17535ms
Failed to compile.

If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "crypto": require.resolve("crypto-browserify") }'
        - install 'crypto-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
        resolve.fallback: { "crypto": false }
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo build:web

  $ expo build:web is not supported in the local CLI, please use npx expo export:web instead

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo export:web
CommandError: expo export:web can only be used with Webpack. Use expo export for other bundlers.PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npm install --save expo-web --legacy-peer-deps^C
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo export -p web
(node:5808) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Starting Metro Bundler
Web Bundled 16928ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (229 modules)

Exporting 1 bundle for web:
_expo/static/js/web/AppEntry-f1e9f8c2a6ad598ac1fd2daeb4e02230.js (368 kB)

Exporting 3 files:
favicon.ico (14.5 kB)
index.html (1.23 kB)
metadata.json (49 B)

App exported to: dist
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx serve dist --single
Need to install the following packages:
serve@14.2.4
Ok to proceed? (y) y


   ┌──────────────────────────────────────────┐
   │                                          │
   │   Serving!                               │
   │                                          │
   │   - Local:    http://localhost:3000      │
   │   - Network:  http://192.168.56.1:3000   │
   │                                          │
   │   Copied local address to clipboard!     │
   │                                          │
   └──────────────────────────────────────────┘

 HTTP  10/21/2024 4:25:14 PM ::1 GET /
 HTTP  10/21/2024 4:25:14 PM ::1 Returned 200 in 119 ms
 HTTP  10/21/2024 4:25:14 PM ::1 GET /_expo/static/js/web/AppEntry-f1e9f8c2a6ad598ac1fd2daeb4e02230.js
 HTTP  10/21/2024 4:25:14 PM ::1 Returned 200 in 15 ms
 HTTP  10/21/2024 4:25:15 PM ::1 GET /favicon.ico
 HTTP  10/21/2024 4:25:15 PM ::1 Returned 200 in 5 ms

 INFO  Gracefully shutting down. Please wait...
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> vercel
(node:23108) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:23108) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
Vercel CLI 37.5.2
? Set up and deploy “~\projects\job-matcher-app\job-matcher”? yes
? Which scope do you want to deploy to? dntrply's projects
? Link to existing project? no
? What’s your project’s name? job-matcher
? In which directory is your code located? ./
Local settings detected in vercel.json:
- Build Command: expo export -p web
- Development Command: expo
- Output Directory: dist
No framework detected. Default Project Settings:
- Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
? Want to modify these settings? yes

Error: [checkbox prompt] No selectable choices. All choices are disabled.
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> vercel
(node:8332) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:8332) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
Vercel CLI 37.5.2
? Set up and deploy “~\projects\job-matcher-app\job-matcher”? yes
? Which scope do you want to deploy to? dntrply's projects
? Link to existing project? no
? What’s your project’s name? job-matcher
? In which directory is your code located? ./
Local settings detected in vercel.json:
- Build Command: expo export -p web
- Development Command: expo
- Output Directory: dist
No framework detected. Default Project Settings:
- Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
? Want to modify these settings? no
🔗  Linked to dntrplys-projects/job-matcher (created .vercel and added it to .gitignore)
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/9tsMPHdvmXSkrdpwXsMzdm1xpKPF [2s]
✅  Production: https://job-matcher-bmfco147m-dntrplys-projects.vercel.app [2s]
Error: Command "npm install" exited with 1
Error: Check your logs at https://job-matcher-bmfco147m-dntrplys-projects.vercel.app/_logs or run `vercel logs job-matcher-bmfco147m-dntrplys-projects.vercel.app`
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> vercel
(node:29520) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
✅  Production: https://job-matcher-bmfco147m-dntrplys-projects.vercel.app [2s]
Error: Command "npm install" exited with 1
Error: Check your logs at https://job-matcher-bmfco147m-dntrplys-projects.vercel.app/_logs or run `vercel logs job-matcher-bmfco147m-dntrplys-projects.vercel.app`
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> vercel
(node:29520) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.     
(Use `node --trace-deprecation ...` to show where the warning was created)
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> vercel
(node:29520) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.     
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:29520) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/DGBL4N8Sg8afBTSrLqH4Pq7Gp6KN [2s]
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/DGBL4N8Sg8afBTSrLqH4Pq7Gp6KN [2s]
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/DGBL4N8Sg8afBTSrLqH4Pq7Gp6KN [2s]
✅  Preview: https://job-matcher-1sipqipqd-dntrplys-projects.vercel.app [2s]
📝  To deploy to production (job-matcher-six.vercel.app), run `vercel --prod`
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> vercel --prod
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/9CzAfyPiSMaQ1CiD7dzY8dGjra5Y [2s]
✅  Production: https://job-matcher-h9idniqbb-dntrplys-projects.vercel.app [2s]
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher>







(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/9CzAfyPiSMaQ1CiD7dzY8dGjra5Y [2s]
✅  Production: https://job-matcher-h9idniqbb-dntrplys-projects.vercel.app [2s]
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher>

(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/9CzAfyPiSMaQ1CiD7dzY8dGjra5Y [2s]
✅  Production: https://job-matcher-h9idniqbb-dntrplys-projects.vercel.app [2s]
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher>





(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/9CzAfyPiSMaQ1CiD7dzY8dGjra5Y [2s]
✅  Production: https://job-matcher-h9idniqbb-dntrplys-projects.vercel.app [2s]
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/9CzAfyPiSMaQ1CiD7dzY8dGjra5Y [2s]
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/9CzAfyPiSMaQ1CiD7dzY8dGjra5Y [2s]
✅  Production: https://job-matcher-h9idniqbb-dntrplys-projects.vercel.app [2s]
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher>








(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/9CzAfyPiSMaQ1CiD7dzY8dGjra5Y [2s]
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(node:19760) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead. 
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19760) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.       
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher/9CzAfyPiSMaQ1CiD7dzY8dGjra5Y [2s]
✅  Production: https://job-matcher-h9idniqbb-dntrplys-projects.vercel.app [2s]
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher>








**Transcript Terminal 2**

Transcript to get app running locally, as well as pushing hte dev version of frontend to Vercel as well as pushing a
prod version of frontend to vercel:

PS C:\Users\dntrp\projects\job-matcher-app>  c:; cd 'c:\Users\dntrp\projects\huggingface-tutorial'; & 'c:\Users\dntrp\projects\huggingface-tutorial\hf-tut\Scripts\python.exe' 'c:\Users\dntrp\.vscode\extensions\ms-python.debugpy-2024.10.0-win32-x64\bundled\libs\debugpy\adapter/../..\debugpy\launcher' '63084' '--' 'c:\Users\dntrp\projects\huggingface-tutorial\app.py' 
 *  History restored 

PS C:\Users\dntrp\projects\job-matcher-app>  c:; cd 'c:\Users\dntrp\projects\huggingface-tutorial'; & 'c:\Users\dntrp\projects\huggingface-tutorial\hf-tut\Scripts\python.exe' 'c:\Users\dntrp\.vscode\extensions\ms-python.debugpy-2024.10.0-win32-x64\bundled\libs\debugpy\adapter/../..\debugpy\launcher' '62783' '--' 'c:\Users\dntrp\projects\huggingface-tutorial\app.py' ^C
PS C:\Users\dntrp\projects\job-matcher-app> cd .\job-matcher\        
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> expo start --tunnel
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
(node:13980) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo start --tunnel
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
(node:27428) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Starting project at C:\Users\dntrp\projects\job-matcher-app\job-matcher
Unable to find expo in this project - have you run yarn / npm install yet?
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo start --tunnel
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
(node:26280) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Starting project at C:\Users\dntrp\projects\job-matcher-app\job-matcher
Unable to find expo in this project - have you run yarn / npm install yet?
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> cd ..
PS C:\Users\dntrp\projects\job-matcher-app> npx expo start --tunnel
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
(node:15148) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Starting project at C:\Users\dntrp\projects\job-matcher-app
Unable to find expo in this project - have you run yarn / npm install yet?
PS C:\Users\dntrp\projects\job-matcher-app> cd .\job-matcher\
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo start --tunnel
WARNING: The legacy expo-cli does not support Node +17. Migrate to the new local Expo CLI: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.
(node:18504) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
┌───────────────────────────────────────────────────────────────────────────┐
│                                                                           │
│   The global expo-cli package has been deprecated.                        │
│                                                                           │
│   The new Expo CLI is now bundled in your project in the expo package.    │
│   Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421.        │
│                                                                           │
│   To use the local CLI instead (recommended in SDK 46 and higher), run:   │
│   › npx expo <command>                                                    │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
Starting project at C:\Users\dntrp\projects\job-matcher-app\job-matcher
Unable to find expo in this project - have you run yarn / npm install yet?
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npm install
npm warn deprecated osenv@0.1.5: This package is no longer supported.
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-nullish-coalescing-operator instead.
npm warn deprecated @babel/plugin-proposal-numeric-separator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-numeric-separator instead.
npm warn deprecated @babel/plugin-proposal-optional-catch-binding@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-optional-catch-binding instead.
npm warn deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-class-properties instead.
npm warn deprecated @babel/plugin-proposal-logical-assignment-operators@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-logical-assignment-operators instead.
npm warn deprecated rimraf@2.6.3: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @babel/plugin-proposal-object-rest-spread@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-object-rest-spread instead.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated @babel/plugin-proposal-async-generator-functions@7.20.7: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-async-generator-functions instead.
npm warn deprecated glob@7.1.6: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.1.6: Glob versions prior to v9 are no longer supported
npm warn deprecated glob@7.1.6: Glob versions prior to v9 are no longer supported
npm warn deprecated querystring@0.2.1: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.

added 1297 packages, and audited 1298 packages in 1m

140 packages are looking for funding
  run `npm fund` for details

3 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo start --tunnel
Starting project at C:\Users\dntrp\projects\job-matcher-app\job-matcher
(node:17948) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Starting Metro Bundler
CommandError: spawn EPERM
Check the Ngrok status page for outages: https://status.ngrok.com/
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo start --tunnel
Starting project at C:\Users\dntrp\projects\job-matcher-app\job-matcher
(node:21544) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Starting Metro Bundler
CommandError: spawn EPERM
Check the Ngrok status page for outages: https://status.ngrok.com/
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo start --tunnel
Starting project at C:\Users\dntrp\projects\job-matcher-app\job-matcher
(node:26464) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Starting Metro Bundler
Tunnel connected.
Tunnel ready.
The following packages should be updated for best compatibility with the installed expo version:
  expo@51.0.32 - expected version: ~51.0.38
Your project may not work correctly until you install the expected versions of the packages.
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █   █▄▄▀▄ ▀ ▀▀█ ▄▄▄▄▄ █
█ █   █ █ ▀▄ █▀▀▄ ▄ █ █ █   █ █
█ █▄▄▄█ █▀██▀▀ ▄▄▄▄ ▀██ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄▀▄█ █ ▀▄▀▄█▄█▄▄▄▄▄▄▄█
█  ▀█▄ ▄▀█▀▀▄▀▀▀▀▀  ██▀▀ ▀ ▄  █
█▀▄▄█  ▄ ▀█▀ ▄▄▀▄▄  █▀█▄▄▄█▄  █
█▄▄ ▄▀▀▄ ▄█▄█▄▀█ █ ▄█▄█▀▀▀▄█▀▀█
██▀▀ ▄█▄ ▄▀ █▀█▄   ████▀▄▄▄▄▀ █
█▀ ▀█▀█▄▀▀▄▄▄▀▄ ▀ ▄▄▄█▄▀ ▀▄█▀ █
███▄ ██▄█▀ █ ▄ ▄   █▀█▀ █▄ ▄█ █
█▄▄██▄▄▄▄ ▄ █▄ ▀   ▄▄ ▄▄▄ ▀▀▄▀█
█ ▄▄▄▄▄ █▀▀▀█▀█▀ █ █  █▄█  ▄▀ █
█ █   █ █▄▄▀▄▀▄▄▀▀▄▄   ▄ ▄ ██ █
█ █▄▄▄█ █▀ ▄ ▄ ▄▄▄ ▀ ▀▄█▄█▄█  █
█▄▄▄▄▄▄▄█▄█▄█▄▄█▄█▄▄█▄█▄████▄██

› Metro waiting on exp://si97vfw-dntrplytch-8081.exp.direct
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:8081

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
█▄▄▄▄▄▄▄█▄█▄█▄▄█▄█▄▄█▄█▄████▄██

› Metro waiting on exp://si97vfw-dntrplytch-8081.exp.direct
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:8081

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger

› Press j │ open debugger
› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
Web Bundled 12463ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (310 modules)
Web Bundled 64ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 80ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 75ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 356ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 65ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 51ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
› Stopped server
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo start
Starting project at C:\Users\dntrp\projects\job-matcher-app\job-matcher
(node:1848) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Starting Metro Bundler
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo start --tunnel
Starting project at C:\Users\dntrp\projects\job-matcher-app\job-matcher
(node:23548) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Starting Metro Bundler
Tunnel connected.
Tunnel ready.
The following packages should be updated for best compatibility with the installed expo version:
  expo@51.0.32 - expected version: ~51.0.38
Your project may not work correctly until you install the expected versions of the packages.
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █   █▄▄▀▄ ▀ ▀▀█ ▄▄▄▄▄ █
█ █   █ █ ▀▄ █▀▀▄ ▄ █ █ █   █ █
█ █▄▄▄█ █▀██▀▀ ▄▄▄▄ ▀██ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄▀▄█ █ ▀▄▀▄█▄█▄▄▄▄▄▄▄█
█  ▀█▄ ▄▀█▀▀▄▀▀▀▀▀  ██▀▀ ▀ ▄  █
█▀▄▄█  ▄ ▀█▀ ▄▄▀▄▄  █▀█▄▄▄█▄  █
█▄▄ ▄▀▀▄ ▄█▄█▄▀█ █ ▄█▄█▀▀▀▄█▀▀█
██▀▀ ▄█▄ ▄▀ █▀█▄   ████▀▄▄▄▄▀ █
█▀ ▀█▀█▄▀▀▄▄▄▀▄ ▀ ▄▄▄█▄▀ ▀▄█▀ █
███▄ ██▄█▀ █ ▄ ▄   █▀█▀ █▄ ▄█ █
█▄▄██▄▄▄▄ ▄ █▄ ▀   ▄▄ ▄▄▄ ▀▀▄▀█
█ ▄▄▄▄▄ █▀▀▀█▀█▀ █ █  █▄█  ▄▀ █
█ █   █ █▄▄▀▄▀▄▄▀▀▄▄   ▄ ▄ ██ █
█ █▄▄▄█ █▀ ▄ ▄ ▄▄▄ ▀ ▀▄█▄█▄█  █
█▄▄▄▄▄▄▄█▄█▄█▄▄█▄█▄▄█▄█▄████▄██

› Metro waiting on exp://si97vfw-dntrplytch-8081.exp.direct
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:8081

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› Press o │ open project code in your editor
le)
Web Bundled 45ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)     
Web Bundled 47ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)     
Web Bundled 47ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 68ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 54ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 79ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Tunnel connection has been closed. This is often related to intermittent connection problems with the Ngrok servers. Restart th\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\.css-select-7idI87dr\lib\esm\pseudo-selectors'
    at FSWatcher.<computed> (node:internal/fs/watchers:247:19)
    at Object.watch (node:fs:2466:36)
    at NodeWatcher._watchdir (C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\metro-file-map\src\watchers\NodeWatcher.js:89:24)
    at C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\metro-file-map\src\watchers\NodeWatcher.js:185:22        
    at Walker.<anonymous> (C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\metro-file-map\src\watchers\common.js:81:31)
    at Walker.emit (node:events:520:28)
    at C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\walker\lib\walker.js:69:16
    at FSReqCallback.oncomplete (node:fs:187:23)
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher> npx expo start
Starting project at C:\Users\dntrp\projects\job-matcher-app\job-matcher
(node:22824) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Starting Metro Bundler
The following packages should be updated for best compatibility with the installed expo version:
  expo@51.0.32 - expected version: ~51.0.38
Your project may not work correctly until you install the expected versions of the packages.
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▄▄▄ ▀ ▀█ █ ▄▄▄▄▄ █
█ █   █ ██▄▀ █ ▀▄▄█ █   █ █
█ █▄▄▄█ ██▀▄ ▄▄██▀█ █▄▄▄█ █
█▄▄▄▄▄▄▄█ ▀▄█ ▀ ▀ █▄▄▄▄▄▄▄█
█ ▄█▄ █▄▀▀▄▀█▄▀█▀ █▄█▀█▀▀▄█
█   ▀█ ▄ █▄██▄▄▄▄▀▀███▄▀▀ █
█ ▄██▄ ▄    █▀█▄ █ ▄▀▀█▀ ██
█ ▄ ██▄▄██▀██▀▄▀ ▄▀ ██▄▀  █
█▄███▄█▄▄ █▀ ▄▄ █ ▄▄▄  ▄▀▄█
█ ▄▄▄▄▄ ██▀▀▀▄  █ █▄█ ███ █
█ █   █ █ ▄▄▄ ▀█▄ ▄  ▄ █▀▀█
█ █▄▄▄█ █▀ ▀ ▀█▄ ▄█▀▀▄█   █
█▄▄▄▄▄▄▄█▄█▄▄██▄▄▄▄█▄▄███▄█

› Metro waiting on exp://192.168.0.108:8081
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:8081

exit.
Web Bundled 2200ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (310 modules)
Web Bundled 6240ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 367ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 284ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 272ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)
Web Bundled 76ms C:\Users\dntrp\projects\job-matcher-app\job-matcher\node_modules\expo\AppEntry.js (1 module)






**Transcript Terminal 3**

From the third terminal I had running
PS C:\Users\dntrp\projects\job-matcher-app> cd .\job-matcher-backend\
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend> vercel login
(node:16460) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:16460) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
Vercel CLI 37.5.2
? Log in to Vercel Continue with GitHub
> Success! GitHub authentication complete for dntrplytch@gmail.com
Congratulations! You are now logged in. In order to deploy something, run `vercel`.
💡  Connect your Git Repositories to deploy every branch push automatically (https://vercel.link/git).
╭──────────────────────────────────────────────────────────╮
│                                                          │
│           Update available! v37.5.2 ≫ v37.5.3            │
│   Changelog: https://github.com/vercel/vercel/releases   │
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
(node:16460) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:16460) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
Vercel CLI 37.5.2
? Log in to Vercel Continue with GitHub
> Success! GitHub authentication complete for dntrplytch@gmail.com
Congratulations! You are now logged in. In order to deploy something, run `vercel`.
💡  Connect your Git Repositories to deploy every branch push automatically (https://vercel.link/git).
╭──────────────────────────────────────────────────────────╮
│                                                          │
│           Update available! v37.5.2 ≫ v37.5.3            │
│   Changelog: https://github.com/vercel/vercel/releases   │
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
│                                                          │
╰──────────────────────────────────────────────────────────╯

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend> vercel dev
(node:19824) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19824) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
╰──────────────────────────────────────────────────────────╯

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend> vercel dev
╰──────────────────────────────────────────────────────────╯
╰──────────────────────────────────────────────────────────╯
╰──────────────────────────────────────────────────────────╯

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend> vercel dev
(node:19824) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19824) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
Vercel CLI 37.5.2
╰──────────────────────────────────────────────────────────╯

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend> vercel dev
(node:19824) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:19824) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
Vercel CLI 37.5.2
> Ready! Available at http://localhost:3000
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend> vercel --prod
(node:22436) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:22436) [DEP0060] DeprecationWarning: The `util._extend` API is deprecated. Please use Object.assign() instead.
Vercel CLI 37.5.2
🔍  Inspect: https://vercel.com/dntrplys-projects/job-matcher-backend/8zMQbdpE49vi53aPWGkycst5sphd [4s]
✅  Production: https://job-matcher-backend-qx42v4v5l-dntrplys-projects.vercel.app [4s]
╭──────────────────────────────────────────────────────────╮
│                                                          │
│           Update available! v37.5.2 ≫ v37.11.0           │
│   Changelog: https://github.com/vercel/vercel/releases   ╭──────────────────────────────────────────────────────────╮
│                                                          │
│           Update available! v37.5.2 ≫ v37.11.0          │
│   Changelog: https://github.com/vercel/vercel/releases   ╭──────────────────────────────────────────────────────────╮
│                                                          │
╭──────────────────────────────────────────────────────────╮
╭──────────────────────────────────────────────────────────╮             Update available! v37.5.2 ≫ v37.11.0           │
│                                                          │           Run `npm i -g vercel@latest` to update.          │
│           Update available! v37.5.2 ≫ v37.11.0           │   ─────────────────────────────────────────────────────────╯
│   Changelog: https://github.com/vercel/vercel/releases   │    C:\Users\dntrp\projects\jo╭───────────────────────╭───────────────────────────────────╭──────────────────────────────────────────────────────────╮
╭──────────────────────────────────────────────────────────╮
╭──────────────────────────────────────────────────────────╮             Update available! v37.5.2 ≫ v37.11.0           │
│                                                          │           Run `npm i -g vercel@latest` to update.          │
│           Update available! v37.5.2 ≫ v37.11.0           │      ──────────────────────────────────────────────────────╯
│   Changelog: https://github.com/vercel/vercel/releases   │      \Users\dntrp\projects\job-matcher-app\job-matcher-backen
╭──────────────────────────────────────────────────────────╮      
│                                                          │      
│           Update available! v37.5.2 ≫ v37.11.0           │      
│   Changelog: https://github.com/vercel/vercel/releases   │    C:\Users\dntrp\projects\job-matcher-app\job-matcher-backen
╭──────────────────────────────────────────────────────────╮   
│                                                          │   
│           Update available! v37.5.2 ≫ v37.11.0           │   
╭──────────────────────────────────────────────────────────╮
│                                                          │
│           Update available! v37.5.2 ≫ v37.11.0           │
│   Changelog: https://github.com/vercel/vercel/releases   │
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
╰──────────────────────────────────────────────────────────╯
╭──────────────────────────────────────────────────────────╮
│                                                          │
│           Update available! v37.5.2 ≫ v37.11.0           │
╭──────────────────────────────────────────────────────────╮
╭──────────────────────────────────────────────────────────╮
│                                                          │
╭──────────────────────────────────────────────────────────╮
│                                                          │
│           Update available! v37.5.2 ≫ v37.11.0           │
│           Update available! v37.5.2 ≫ v37.11.0           │
│   Changelog: https://github.com/vercel/vercel/releases   │
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
╰──────────────────────────────────────────────────────────╯

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>
                                                                ^C
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>







│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
╰──────────────────────────────────────────────────────────╯

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>
                                                                ^C
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>

│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
╰──────────────────────────────────────────────────────────╯
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
╰──────────────────────────────────────────────────────────╯

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>
                                                                ^C
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>





│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
╰──────────────────────────────────────────────────────────╯

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>
                                                                ^C
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
╰──────────────────────────────────────────────────────────╯
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
╰──────────────────────────────────────────────────────────╯

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
╰──────────────────────────────────────────────────────────╯
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
│         Run `npm i -g vercel@latest` to update.          │
│         Run `npm i -g vercel@latest` to update.          │
│                                                          │
╰──────────────────────────────────────────────────────────╯

PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>
                                                                ^C
PS C:\Users\dntrp\projects\job-matcher-app\job-matcher-backend>