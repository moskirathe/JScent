# JScent

JScent is a program analyzer that detects code smells. Code smells are potential issues with source code that can correspond to a deeper problem in the program. For example, JScent can detect issues such as long methods, too many comments, feature envy, message chains, dead code and more. JScent produces a report that summarizes all the code smells found in a concise and usable way - easily accessible in the console.

JScent is aimed at developers and teams who are trying to build code that is maintainable, extensible, and well structured. The reports generated are not intended to be prescriptive but rather point out areas that may be cause for concern as a project grows in size and scope. 

JScent is structured in a way that it is easily extensible to add new code smells in the future. Next steps for the team include adding more nuanced, difficult to spot smells to the analysis report.

Instructions: Put all the JS files you want to analyze in the /input folder, and run main.js to start.



Credit: Initial program parsing done using the esprima node library (esprima.org)