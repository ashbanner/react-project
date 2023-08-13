# react-project

## Build and Run Instructions

1. Cd into vite-project
2. In terminal, `npm run i` to install dependencies
3. In terminal, `npm run dev` to start application on localhost

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

## DAML Templates

I wanted to take the opportunity to share some insights I've gained about DAML. If I were to construct a similar application using DAML, the following templates would likely be part of my implementation.

For some of these I will use an id field. I am doing this in instances where there is not a key that can be formed without the risk of duplicates. The id would be a uuid.

```
template Person
    with
        owner: Party
        observers: [Party]
        id: Text
        firstName: Text
        lastName: Text
        email: Text
        jobTitle: Text
        avatarLink: Optional Text
    where
        signatory owner
        observer observers
        key (owner, id) : (Party, Text)
        maintainer key._1
        choice UpdatePerson: ContractId Person
            with
                updatedFirstName: Text
                updatedLastName: Text
                updatedEmail: Text
                updatedJobTitle: Text
                updatedAvatarLink: Text
            controller owner
            do
                create this with
                    firstName = updatedFirstName
                    lastName = updatedLastName
                    email = updatedEmail
                    jobTitle = updatedJobTitle
                    avatarLink = updatedAvatarLink
        choice ArchivePerson: ()
            controller owner
            do pure()

template Comment
    with
        owner: Party
        observers: [Party]
        personId: Text
        message: Text
        date: Time
    where
        signatory owner
        observer observers
        key (owner,date, personId ) : (Party, Time, Text)
        maintainer key._1

        choice ArchiveComment : ()
            controller owner
            do pure()
```
