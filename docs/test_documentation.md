# Test documentation
Application has been tested by actually using it for management while building the application as features has been finished. Automatic testing has also been done using karma, jasmine and webpack.

No tests exist for backend, there are however frontend tests that actually utilize the real backend. Unit tests for backend will be added.

## Reports
Reports are generated when running the test suite, `grunt test` or `karma start` generates coverage report in client/coverage and testreports are presented in console and html reports created in client/karma_html.
115 tests are complete and another 161 tests are only specified.


## Manual report
A lot of automatic tests are missing, this is a simple report to complement that suite.
### Projects
 - [x] Create project
 - [x] Edit project
 - [x] Delete project
 - [x] Add user to project
 - [x] Add team to project
 - [x] Activate project
 - [x] Remove user from project

 ### Teams
 - [x] Create team
 - [x] Edit team
 - [x] Delete team
 - [x] Add user to team
 - [x] Remove user from team
 - [x] Activate team
 
 ### Documents
 - [x] Create document
 - [x] Edit document info
 - [x] Edit document
 - [x] Delete document
 - [x] View document

### Sprints
 - [x] Create sprint
 - [x] Edit sprint
 - [x] Delete sprint

### Stories
 - [x] Create story
 - [x] Edit story
 - [x] Delete story
 - [x] Start work on story
 - [x] Cancel work on story
 - [x] Complete story
 - [x] Change priority of story (d&d)
 - [x] Put story in sprint backlog

 ### Tasks
 - [x] Create task
 - [x] Remove task
