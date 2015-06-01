#Technical documentation
##Frontend
!(http://blog.krawaller.se/img/flux-diagram.png)
Based on flux architecture. File structure is feature-based.
* *.store.js - store
* *.interaction.js - interactions
* *.service.js - service
* *.page.js - page
* *.action.js - actions
* *.spec.js - tests

JSHint rules should be followed. Testfiles are and should be kept very descriptive and can therefore be used as a specification for each component.

##Backend
Standard .NET structure, layer based file structure. Projise.DomainModel contains domain model.
