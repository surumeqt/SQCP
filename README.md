# Welcome to Student Queue Coordination Platform App

## Get Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the App

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo (recommended)

## create your own convex and clerk development app

- go to Clerk Dashboard - [Clerk](https://dashboard.clerk.com/)
- go to Convex - [Convex](https://dashboard.convex.dev/)

## Clerk

- go to your project, then configure

- go to Developer -> API keys -> select Expo

- paste the development keys into .env file

### configure webhook and jwt template in clerk

- Webhook

- goto configure -> Developer -> Webhooks
 
- paste the http Action Url from convex ( make sure you already have a project, goto settings -> authentication -> select the one that ends with .site )

- make sure you end the endpoint with /clerk-webhook ( https://your-http-link.convex.site/clerk-webhook )

- select the user.created for subscription event

- Jwt Template

- goto configure -> Session Management -> JWT templates

- create a new template for convex

- paste the issuer url into convex/auth.config.ts

## Convex

- create your first project

- goto settings -> Environment Variables

- paste the Secret Key as Value and the CLERK_SECRET_KEY as variable name

### add my schema and functions in convex

- in terminal
   ```bash
   npx convex dev --once --configure=new
   ```
- deploy on cloud, then select your project
- then you can start the app in your development

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

