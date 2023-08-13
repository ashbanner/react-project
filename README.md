# react-project

## Material UI

This package was used to leverage the pre-built componenets and Material UI's grid 2.0, so that focus could be placed on building functionality instead of styling. Material UI's grid 2.0 is used to add responsiveness to varying screen sizes.

## Disable Login Button

The login button is disabled until a value has been typed in both the username and password inputs to protect against premature API requests.

## Error Message on Failed Login

The error message informs the user that the credentials are invalid and they need to try again.

## Remember Me: Local Storage vs. Session Storage

### Uses for Local Storage:

Saving the token to local storage will cause it to procist between user sessions adding convenience by not requiring the user to reauthenticate.

### Uses for session storage:

Adding a token to session storage will cause the token to be wiped whenever the user's session ends, which will cause the user to need to re-authenticate to use the application.

## Material UI Skeleton

Material UI Skeleton is being used as a placeholder to show the user a visual indication that data is being loaded.
