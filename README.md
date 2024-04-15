# GuardRails: A Training Companion for PSAPs

## Intro

Historically, when a PSAP hires a new employee they come to the industry with no experience for the job. They have to be taught hundreds of codes to integrate with the Agency's CAD system, along with standard interrogation techniques. This is sometimes done in a classroom setting, but is often done 'on the fly' in real world scenario. GuardRails is a tool to help onboard new hires, and streamline the training process. It gives the agency control to configure and implement their own specific call type categorization, and standardizes the interrogation process to meet your agency's individual expectations.

## V1.0

### General

- Call Type Search and question loading based on keyword match, or through filtered list
- Generation of forms related to individual call types.
- When interrogation is complete, the answers to all questions are saved to the clipboard for easy transfer into the agency's CAD

### Admin

The Admin panel is where your agency's administrators can add and remove users, and can add and edit details related to the calltypes the agency is training on.

#### Users

- Ability to create new users
- Ability to deactivate users
- Ability to change and update a user's password

#### Call Types

- Ability to create a new form related to callTypes.
  - Option to create, edit, and delete questions related to a call type
  - Option to create, edit, and delete keywords related to a call type

### Technical Data

See `package.json` for specific details.

To Run:

- You must have a copy of node installed
- Create a copy of the project, and then run `npm install`, `npm start`

#### Front End

- Created using React

#### Back End

- Utilizes Supabase

### TODO

#### Non-Protected Routes

- Implement a home page, and automatically send unauthenticated users to that page
- Add an about page with ability for unauthenticated users to see

#### General Usage

- Protect the form route behind authentication

#### users

- Finish building users list and implement edit functionality

#### Call Types

- implement ability to view an individual call type by route

#### Keywords

- Implement method to edit keywords
- Build and Style the keywords cards.

#### Questions

- When a question is updated, invalidate query of the question and update the list automatically.
- Implement a function to delete and individual question. When this is complete, it should invalidate the query and update the list of questions automatically
- Build and Style the questions

#### Tests

- Implement E2E testing for the project
