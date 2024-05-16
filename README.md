# GuardRails: A Training Companion for PSAPs

## Intro

Historically, when a PSAP hires a new employee they come to the industry with very little experience. Even for those who are already established in the industry, they have to be taught hundreds of codes to integrate with the Agency's CAD system, along with standard interrogation techniques. This is sometimes done in a classroom setting, but is often done 'on the fly' in real world scenario. GuardRails is a tool to help onboard new hires, and streamline the training process. It gives the agency control to configure and implement their own specific call type categorization, and standardizes the interrogation process to meet your agency's individual expectations. It can be used in real-time, real world scenarios, or can be a helpful tool for your trainers to practice specific scenarios.

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
- implement a top x used call type option to present a user with the current most used forms.

#### users

- Finish building users list and style the table
- Implement functionality to delete a user
- ~~Implement functionality to reset a password~~

#### Call Types

- implement ability to view an individual call type by route
- style cards for call type buttons

#### Keywords

- ~~implement a method to delete keywords~~
- Build and Style the keywords cards.
- Refactor Keywords so that input is a textbox, and multiple words can be entered at once

#### Questions

- When a question is updated, invalidate query of the question and update the list automatically.
- ~~Implement a function to delete and individual question.~~ When this is complete, it should invalidate the query and update the list of questions automatically
- Build and Style the questions
- ~~Fix bug that causes updating questions to reindex. An update should maintain the same index~~

#### Loading Screen

- ~~Implement a stylized loader~~

#### Tests

- Implement E2E testing for the project

## V2

- Implement a function to track the words input to 'Tell me what happened question'. This counts the words that have been used on the answer to the question. If a individual word appears over `n` number of times it is automatically added to the keywords used by that form.
