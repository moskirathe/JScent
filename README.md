# JScent

<b>Video:</b>
https://youtu.be/_FAUq98qELY

JScent is a program analyzer that detects code smells. Code smells are potential issues with source code that can correspond to a deeper problem in the program. For example, JScent can detect issues such as long methods, too many comments, feature envy, message chains, dead code and more. JScent produces a report that summarizes all the code smells found in a concise and usable way - easily accessible in the console. The JScent analysis can be classified both as a value-agnostic static analysis and a meta-properties analysis, as some code smells lean more toward syntax and others more toward semantics and high-level Software Engineering principles.

<b>Sample Report:</b>

![104295230_855982801476736_6366856029886815010_n](https://user-images.githubusercontent.com/22175665/84670554-20d32200-aedb-11ea-833f-ccbb25716caa.png)

JScent is aimed at developers and teams who are trying to build code that is maintainable, extensible, and well structured. The reports generated are not intended to be prescriptive but rather point out areas that may be cause for concern as a project grows in size and scope. 

JScent is structured in a way that it is easily extensible to add new code smells in the future. Next steps for the team include adding more nuanced, difficult to spot smells to the analysis report.

<b>Instructions</b>

Put all the JS files you want to analyze in the /input folder, and run main.js to start.

<b>Example code smells detectable by JScent</b>
<ul>
  <li>Long message chain - In code you see a series of calls resembling a->b()->c()->d()</li>
  <li>Feature envy - A method accesses the data of another object more than its own data.</li>
  <li>Long parameter list - A method with more than 3 parameters</li>
  <li>Large objects - A class/object that is doing too much</li>
  <li>Dead code - A variable, parameter, field, method or class is no longer used (usually because it is obsolete).</li>
  <li>Switch statement - A switch statement with too many cases </li>
  <li>Method comments - A method is filled with explanatory comments</li>
 </ul>
 
 
  
<b> Detection Criteria</b>

<img src="https://demos.moseskirathe.com/jscent/images/detection-criteria.png" width="700" height="300">
 

<b>Credit and References</b> 
<ul>
<li>Initial program parsing done using the esprima node library (<a href="https://esprima.org/">esprima.org</a>)</li>
<li>JSNose: Detecting JavaScript code smells - <a href="https://www.ece.ubc.ca/~amesbah/docs/scam13.pdf">https://www.ece.ubc.ca/~amesbah/docs/scam13.pdf</a></li>
  <li>Code smell defn's: <a href="https://sourcemaking.com/refactoring/smells">https://sourcemaking.com/refactoring/smells</a></li>
    </ul>
