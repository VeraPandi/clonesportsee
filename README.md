[![forthebadge](https://img.shields.io/badge/Made%20with-Create%20React%20App-%2361dafb)](https://reactjs.org/docs/create-a-new-react-app.html) [![forthebadge](https://img.shields.io/badge/Use-Recharts-%2322b5bf)](https://recharts.org/en-US/)

# Sportsee

Sportsee is an application for monitoring your sports activity.

## Achievement

See the project online: [Demo](https://verapandi.github.io/sportsee/user/18)

By default, you are sent to the user's profile with identifier n°18. If you want to see another user's profile, then change the url: `user/18` to `user/12`

### Resources:

> [Model](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1)  
> [User stories](https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e)

---

# Installation guide

In this guide, we will install the back-end and front-end of this project. And, let's create a port for each.

### Prerequisites:

-  [![forthebadge](https://img.shields.io/badge/NodeJS-version%2012.18-%23026e00)](https://nodejs.org/en/)
-  [![forthebadge](https://img.shields.io/badge/-Yarn-%232188b6)](https://yarnpkg.com/getting-started/usage)

## 1. Install backend and dependencies

First, you need to get the back-end used in this project.
Go to this link and clone the back-end: https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

Then, you need to install the dependencies.
Open the back-end folder. In the terminal, use the command:

```
yarn install
```

## 2. Launch the back-end

In the terminal, use the commands:

```
yarn
```

Then,

```
yarn dev
```

## 3. Install front-end and dependencies

Now, you need to get the front-end used in this project.
Clone this repository: https://github.com/VeraPandi/sportsee

Then, you need to install the dependencies.
Open the front-end folder. In the terminal, use the command:

```
yarn install
```

## 4. Launch the front-end

In the terminal, navigate to the back-end folder directory with:

```
cd P9-front-end-dashboard-master
```

Then, use the command:

```
yarn dev
```

## 5. Get back-end and front-end ports

The backend port is: http://localhost:3000

If you want to get a front-end port different from the back-end port, use the following commands in the terminal:

```
yarn start
```

Then,

```
y
```

## Use the app

Go to a user profile:

-  User profile page with ID number `18` : [User 18](http://localhost:3001/sportsee/user/18)
-  User profile page with ID number `12` : [User 12](http://localhost:3001/sportsee/user/12)

If you want to switch from one user to another, just change in the url: `user/18` , to `user/12`
