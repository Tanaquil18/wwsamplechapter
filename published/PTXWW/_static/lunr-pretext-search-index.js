var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This is a sample book to demonstrate integrating WeBWorK homework problems into content authored with PreTeXt . It is structured as a book whose chapters are again structured with sections (no introductions or conclusions) so that it fits Ruestone's chaper\/subchapter model and can be used for testing on Runestone Academy.  This work was funded with grants from OpenOregon and the University of Puget Sound .  Rob Beezer (University of Puget Sound) and Alex Jordan (Portland Community College) worked on the PreTeXt enhancements that make this possible. Mike Gage (Univeristy of Rochester), Geoff Goehle (Western Carolina University), and Alex Jordan made this possible by enhancing the WeBWorK end, and generally maintaining WeBWorK software.  This book assumes a mild familiarity with both PreTeXt and WeBWorK . For more information about either project, follow the links.  "
},
{
  "id": "sec-arithmetic",
  "level": "1",
  "url": "sec-arithmetic.html",
  "type": "Section",
  "number": "1.1",
  "title": "Arithmetic",
  "body": " Arithmetic  Some questions with quantitative answers.  Adding Single-Digit Integers  A simple, but functional example to begin with. If you are just learning how to add, you can test yourself here.    Compute the sum of and                That was a simple problem. Let's move on.   If you are familiar with WeBWorK , then it may be a surprise to you to be interacting with a WeBWorK problem this way, without having logged in to WeBWorK .  Declaring a Problem Seed  You can also declare a seed to specify a version of any problem that has randomization. Here is the same problem ( copied in the PreTeXt source), but with a seed specified.    Compute the sum of and                Controlling Randomness  You can code your problem with randomization, but then use a specific seed and WeBWorK 's $envir{problemSeed} to override that randomization for the purposes of the version that will appear in HTML and print output.    Compute the sum of and                Special Answer Checking  One of the strengths of WeBWorK is its ability to give intelligent feedback for incorrect answers.  There is general feedback for when the student's answer is in an entirely different ballpark from the correct answer. Try entering something like y .  There is general feedback for when the student's answer is not in the right form. Try entering x^2*x^3 , which, right or wrong, is unsimplified.  And problems can be written to detect and respond to common mistakes. Try entering an answer where you multiply the two exponents (instead of adding them, which would be correct.)     Use the properties of exponents to simplify          We add the exponents as follows, while including a gratuitous reference to the quadratic formula:        Using Hints  Hints can be inserted into exercises. Whether a hint is visible in the HTML depends on the value of $showHint in PGcourse.pl in the WeBWorK course that is hosting these exercises. How the hint is displayed in the pdf output is controlled in the usual way that an PTX hint is controlled.    Simplify the expression     Factor the number inside the radical.              No Randomization  This problem has no randomization at all, not even if it were exported to be part of a problem set on a WeBWorK server. As such, it really doesn't need any lines of Perl code in its setup, so you have the option of skipping that part of the authoring process.                For more about problems that do not require any randomization, see the PTX Author Guide .    Inside a <project>   If you like, you can have a WeBWorK inside a PROJECT-LIKE block. Just like with an <exercise> , it can be preceded with an optional <introduction> and followed by an optional <conclusion> .     Compute the sum of and                 "
},
{
  "id": "integer-addition",
  "level": "2",
  "url": "sec-arithmetic.html#integer-addition",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Adding Single-Digit Integers.",
  "body": "Adding Single-Digit Integers  A simple, but functional example to begin with. If you are just learning how to add, you can test yourself here.    Compute the sum of and                That was a simple problem. Let's move on.  "
},
{
  "id": "integer-addition-with-seed",
  "level": "2",
  "url": "sec-arithmetic.html#integer-addition-with-seed",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "Declaring a Problem Seed.",
  "body": "Declaring a Problem Seed  You can also declare a seed to specify a version of any problem that has randomization. Here is the same problem ( copied in the PreTeXt source), but with a seed specified.    Compute the sum of and               "
},
{
  "id": "integer-addition-with-control-seed",
  "level": "2",
  "url": "sec-arithmetic.html#integer-addition-with-control-seed",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "Controlling Randomness.",
  "body": "Controlling Randomness  You can code your problem with randomization, but then use a specific seed and WeBWorK 's $envir{problemSeed} to override that randomization for the purposes of the version that will appear in HTML and print output.    Compute the sum of and               "
},
{
  "id": "special-answer-checking",
  "level": "2",
  "url": "sec-arithmetic.html#special-answer-checking",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "Special Answer Checking.",
  "body": "Special Answer Checking  One of the strengths of WeBWorK is its ability to give intelligent feedback for incorrect answers.  There is general feedback for when the student's answer is in an entirely different ballpark from the correct answer. Try entering something like y .  There is general feedback for when the student's answer is not in the right form. Try entering x^2*x^3 , which, right or wrong, is unsimplified.  And problems can be written to detect and respond to common mistakes. Try entering an answer where you multiply the two exponents (instead of adding them, which would be correct.)     Use the properties of exponents to simplify          We add the exponents as follows, while including a gratuitous reference to the quadratic formula:       "
},
{
  "id": "using-hints",
  "level": "2",
  "url": "sec-arithmetic.html#using-hints",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "Using Hints.",
  "body": "Using Hints  Hints can be inserted into exercises. Whether a hint is visible in the HTML depends on the value of $showHint in PGcourse.pl in the WeBWorK course that is hosting these exercises. How the hint is displayed in the pdf output is controlled in the usual way that an PTX hint is controlled.    Simplify the expression     Factor the number inside the radical.             "
},
{
  "id": "no-random",
  "level": "2",
  "url": "sec-arithmetic.html#no-random",
  "type": "Checkpoint",
  "number": "1.1.6",
  "title": "No Randomization.",
  "body": "No Randomization  This problem has no randomization at all, not even if it were exported to be part of a problem set on a WeBWorK server. As such, it really doesn't need any lines of Perl code in its setup, so you have the option of skipping that part of the authoring process.                For more about problems that do not require any randomization, see the PTX Author Guide .  "
},
{
  "id": "copy-webwork-add-numbers",
  "level": "2",
  "url": "sec-arithmetic.html#copy-webwork-add-numbers",
  "type": "Project",
  "number": "1.1.1",
  "title": "Inside a <code class=\"code-inline tex2jax_ignore\"><project><\/code>.",
  "body": " Inside a <project>   If you like, you can have a WeBWorK inside a PROJECT-LIKE block. Just like with an <exercise> , it can be preceded with an optional <introduction> and followed by an optional <conclusion> .     Compute the sum of and                "
},
{
  "id": "sec-the-quadratic-formula",
  "level": "1",
  "url": "sec-the-quadratic-formula.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Quadratic Formula",
  "body": " The Quadratic Formula  In the previous section, we saw relatively simple WeBWorK questions. This section demonstrates how even very complicated WeBWorK problems can still behave well.  Here is a theorem that gives us a formula for the solutions of a second-degree polynomial equation. Note later how the WeBWorK problem references the theorem by its number. This seemingly minor detail demonstrates the degree to which WeBWorK and PreTeXt have been integrated.   Quadratic Formula   Given the second-degree polynomial equation , where , solutions are given by       Solving Quadratic Equations   Consider the quadratic equation   Identify Coefficients Identify the coefficients for the quadratic equation using the standard form from Theorem 1.2.1.   ,  ,   Take the coefficient of for the value of the coefficient of for and the constant for  In this case , they are     Use the Quadratic Formula Using the quadratic formula, solve the equation.  Recall that the quadratic formula is given in Theorem 1.2.1.  You already identified  and so the results are:   or    This conclusion is just here for testing.       Nested tasks  This exercise tests that nested tasks work.    Consider the quadratic equation   Identify Coefficients Identify the coefficients for the quadratic equation using the standard form from Theorem 1.2.1.   ,  Take the coefficient of for the value of  In this case ,   ,  Take the coefficient of for the value of  In this case ,    Take the constant term for the value of  In this case ,   Use the Quadratic Formula Using the quadratic formula, solve the equation.  Recall that the quadratic formula is given in Theorem 1.2.1.  You already identified  and so the results are:   or    This conclusion is just here for testing.       Copy a Problem with Tasks  We are testing copying the quadratic equation problem above ( ), since it is structured with <task> , and we also provide a new seed.    Consider the quadratic equation   Identify Coefficients Identify the coefficients for the quadratic equation using the standard form from Theorem 1.2.1.   ,  ,   Take the coefficient of for the value of the coefficient of for and the constant for  In this case , they are     Use the Quadratic Formula Using the quadratic formula, solve the equation.  Recall that the quadratic formula is given in Theorem 1.2.1.  You already identified  and so the results are:   or    This conclusion is just here for testing.       "
},
{
  "id": "theorem-quadratic-formula",
  "level": "2",
  "url": "sec-the-quadratic-formula.html#theorem-quadratic-formula",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "Quadratic Formula.",
  "body": " Quadratic Formula   Given the second-degree polynomial equation , where , solutions are given by      "
},
{
  "id": "quadratic-equation",
  "level": "2",
  "url": "sec-the-quadratic-formula.html#quadratic-equation",
  "type": "Checkpoint",
  "number": "1.2.2",
  "title": "Solving Quadratic Equations.",
  "body": "Solving Quadratic Equations   Consider the quadratic equation   Identify Coefficients Identify the coefficients for the quadratic equation using the standard form from Theorem 1.2.1.   ,  ,   Take the coefficient of for the value of the coefficient of for and the constant for  In this case , they are     Use the Quadratic Formula Using the quadratic formula, solve the equation.  Recall that the quadratic formula is given in Theorem 1.2.1.  You already identified  and so the results are:   or    This conclusion is just here for testing.      "
},
{
  "id": "nested-tasks",
  "level": "2",
  "url": "sec-the-quadratic-formula.html#nested-tasks",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "Nested tasks.",
  "body": "Nested tasks  This exercise tests that nested tasks work.    Consider the quadratic equation   Identify Coefficients Identify the coefficients for the quadratic equation using the standard form from Theorem 1.2.1.   ,  Take the coefficient of for the value of  In this case ,   ,  Take the coefficient of for the value of  In this case ,    Take the constant term for the value of  In this case ,   Use the Quadratic Formula Using the quadratic formula, solve the equation.  Recall that the quadratic formula is given in Theorem 1.2.1.  You already identified  and so the results are:   or    This conclusion is just here for testing.      "
},
{
  "id": "copy-with-tasks",
  "level": "2",
  "url": "sec-the-quadratic-formula.html#copy-with-tasks",
  "type": "Checkpoint",
  "number": "1.2.4",
  "title": "Copy a Problem with Tasks.",
  "body": "Copy a Problem with Tasks  We are testing copying the quadratic equation problem above ( ), since it is structured with <task> , and we also provide a new seed.    Consider the quadratic equation   Identify Coefficients Identify the coefficients for the quadratic equation using the standard form from Theorem 1.2.1.   ,  ,   Take the coefficient of for the value of the coefficient of for and the constant for  In this case , they are     Use the Quadratic Formula Using the quadratic formula, solve the equation.  Recall that the quadratic formula is given in Theorem 1.2.1.  You already identified  and so the results are:   or    This conclusion is just here for testing.      "
},
{
  "id": "sec-open-problem-library",
  "level": "1",
  "url": "sec-open-problem-library.html",
  "type": "Section",
  "number": "1.3",
  "title": "Open Problem Library",
  "body": " Open Problem Library  The Open Problem Library (OPL) is a repository of curated WeBWorK problems. At last count it had something like 30,000 problems, searchable by topic.  Most of the problems in this sample chapter have their source authored within the same document as the narrative. However the problems in this section are from the OPL and elsewhere on the server that is hosting the WeBWorK caclulations. For HTML output we can connect to the server and render the problem here in an interactive fashion. For print\/PDF we use the pretext script to connect to the server to produce PreTeXt code for the problem. We can use the exercise.text.* switches to control which parts of the problem (statements, solutions, hints) are incorporated.  Problems do not have to be in the OPL to reside on a server; any problem that is accessbile from the WeBWorK course which is hosting the WeBWorK computation may be used this way.  Cylinder Volume  This problem is one that Portland Community College has donated to the Open Problem Library.    A cylinder s base s radius is , and its height is .      This cylinder s volume, in terms of , is .    This cylinder s volume, rounded to the hundredth place, is .               We use to represent the base s radius, and to represent the cylinder s height.  A cylinder s volume formula is . A cylinder s base is a circle, with its area formula .  Putting together these two formulas, we have a cylinder s volume formula:   Throughout these computations, all quantities have units attached, and we only show them in the final step.    Using the volume formula, we have:   Don t forget the volume unit .    To find the decimal version, we replace with its decimal value, and we have:   Don t forget the volume unit .         This uninteresting image, authored in latex syntax, is here only to make sure its automatically-assigned identifier is correct, given that the OPL problem just above is going to generate another image for its static representation.      Incompatible Problems  Not all problems that come from the OPL are compatible with PreTeXt . The reasons vary. Perhaps the problem uses older WeBWorK macros that cannot be augmented to provide PreTeXt output. Perhaps the problem nests a table within a table, which PreTeXt will not support. Perhaps there are graphics in the problem that are not sized appropriately for PreTeXt output and there's nothing you can do about it. And there are many more reasons.  Unfortunately the variety of reasons for which a problem may be incompatible means that at present, there is no way to validate a problem automatically. Using an incompatible problem might not raise any errors at any stage of the PreTeXt processing, but large chunks of the problem may be missing, especially in print output. So we recommend that you review all output modes when using an OPL problem. Chances are that if it is behaving in print, it will behave elsewhere. But that is an unproven theory at this point.   "
},
{
  "id": "cylinder-volume",
  "level": "2",
  "url": "sec-open-problem-library.html#cylinder-volume",
  "type": "Checkpoint",
  "number": "1.3.1",
  "title": "Cylinder Volume.",
  "body": "Cylinder Volume  This problem is one that Portland Community College has donated to the Open Problem Library.    A cylinder s base s radius is , and its height is .      This cylinder s volume, in terms of , is .    This cylinder s volume, rounded to the hundredth place, is .               We use to represent the base s radius, and to represent the cylinder s height.  A cylinder s volume formula is . A cylinder s base is a circle, with its area formula .  Putting together these two formulas, we have a cylinder s volume formula:   Throughout these computations, all quantities have units attached, and we only show them in the final step.    Using the volume formula, we have:   Don t forget the volume unit .    To find the decimal version, we replace with its decimal value, and we have:   Don t forget the volume unit .        "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "sec-open-problem-library.html#warning-1",
  "type": "Warning",
  "number": "1.3.2",
  "title": "Incompatible Problems.",
  "body": " Incompatible Problems  Not all problems that come from the OPL are compatible with PreTeXt . The reasons vary. Perhaps the problem uses older WeBWorK macros that cannot be augmented to provide PreTeXt output. Perhaps the problem nests a table within a table, which PreTeXt will not support. Perhaps there are graphics in the problem that are not sized appropriately for PreTeXt output and there's nothing you can do about it. And there are many more reasons.  Unfortunately the variety of reasons for which a problem may be incompatible means that at present, there is no way to validate a problem automatically. Using an incompatible problem might not raise any errors at any stage of the PreTeXt processing, but large chunks of the problem may be missing, especially in print output. So we recommend that you review all output modes when using an OPL problem. Chances are that if it is behaving in print, it will behave elsewhere. But that is an unproven theory at this point.  "
},
{
  "id": "sec-antidifferentiation",
  "level": "1",
  "url": "sec-antidifferentiation.html",
  "type": "Section",
  "number": "1.4",
  "title": "Antidifferentiation",
  "body": " Antidifferentiation   A Few More Features  This subsection demonstrates a few more features.   Antiderivative of a Function   Suppose that and are two functions such that Then we say is an antiderivative of .    The Fundamental Theorem of Calculus in one of the high points of a course in single-variable course.   The Fundamental Theorem of Calculus  Fundamental Theorem of Calculus   If is continuous, and the derivative of is , then    Left to the reader.    We state an equivalent version of the FTC, which is less-suited for computation, but which perhaps is a more interesting theoretical statement.    Suppose is a continuous function. Then    We simply take the indicated derivative, applying at .      WeBWorK Exercises   The first problem in this list is coming from the WeBWorK Open Problem Library. One implication of this is that we might want to provide some commentary that connects the problem to the text. The other two ask for essay answers, which would be graded by an instructor, so in the HTML output there is no opportunity to provide an answer.   Antiderivatives  Consult and the to assist you with the following problem.    =        SOLUTION        Unless the OPL has changed this problem out from under us, note the SOLUTION appearing in the solution. That is hard-coded into the OPL version of the problem. This is an example of something undesirable that may happen when using OPL problems that were not originally written with PreTeXt in mind.   Every Continuous Function has an Antiderivative  WeBWorK problems can allow for open-ended essay responses that are intended to be assessed later by the instructor. For anonymous access, no text field is provided. But if this problem were used within WeBWorK as part of a homework set, users could submit an answer.    Explain how we can use Corollary 1.4.3 to say that every continuous function always has a derivative. (And we will demonstrate here that you can use a macro from docinfo : It will work in the WeBWorK problem, regardless of whether you are using images, MathJax, or hardcopy.)       Inverse Processes   Differentiation and integration are inverse processes. Cite specific results from this section in an explanation of how they justify this (somewhat imprecise) claim.         For the given function , find .  Note that these common instructions are phrased in such a way that they would read well if they were applied to only one exercise at a time. That will happen if these exercises are exported as .pg files, for example to be used in online homework from a WeBWorK server.                              Show Your Work  Sometimes you would like a student to give a simple answer that WeBWorK can automatically assess, but you would also like the student to show their work or reasoning. Perhaps there is a particular method that you want to see the student use to find the answer. So you have a regular answer blank and also an essay blank. For practical reasons, you may wish to use the same problem on your WeBWorK server, but omit the essay part. For example, if you want to use that problem but leave out the manual grading. For this, WeBWorK has the explanation_box tool, demonstrated here.    Use the definition of the derivative to find  Show your work.             "
},
{
  "id": "definition-antiderivative",
  "level": "2",
  "url": "sec-antidifferentiation.html#definition-antiderivative",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Antiderivative of a Function.",
  "body": " Antiderivative of a Function   Suppose that and are two functions such that Then we say is an antiderivative of .   "
},
{
  "id": "theorem-FTC",
  "level": "2",
  "url": "sec-antidifferentiation.html#theorem-FTC",
  "type": "Theorem",
  "number": "1.4.2",
  "title": "The Fundamental Theorem of Calculus.",
  "body": " The Fundamental Theorem of Calculus  Fundamental Theorem of Calculus   If is continuous, and the derivative of is , then    Left to the reader.   "
},
{
  "id": "corollary-FTC-derivative",
  "level": "2",
  "url": "sec-antidifferentiation.html#corollary-FTC-derivative",
  "type": "Corollary",
  "number": "1.4.3",
  "title": "",
  "body": "  Suppose is a continuous function. Then    We simply take the indicated derivative, applying at .   "
},
{
  "id": "ww-antiderivatives",
  "level": "2",
  "url": "sec-antidifferentiation.html#ww-antiderivatives",
  "type": "Exercise",
  "number": "1.4.2.1",
  "title": "Antiderivatives.",
  "body": "Antiderivatives  Consult and the to assist you with the following problem.    =        SOLUTION        Unless the OPL has changed this problem out from under us, note the SOLUTION appearing in the solution. That is hard-coded into the OPL version of the problem. This is an example of something undesirable that may happen when using OPL problems that were not originally written with PreTeXt in mind.  "
},
{
  "id": "ww-discuss-always-antiderivative",
  "level": "2",
  "url": "sec-antidifferentiation.html#ww-discuss-always-antiderivative",
  "type": "Exercise",
  "number": "1.4.2.2",
  "title": "Every Continuous Function has an Antiderivative.",
  "body": "Every Continuous Function has an Antiderivative  WeBWorK problems can allow for open-ended essay responses that are intended to be assessed later by the instructor. For anonymous access, no text field is provided. But if this problem were used within WeBWorK as part of a homework set, users could submit an answer.    Explain how we can use Corollary 1.4.3 to say that every continuous function always has a derivative. (And we will demonstrate here that you can use a macro from docinfo : It will work in the WeBWorK problem, regardless of whether you are using images, MathJax, or hardcopy.)      "
},
{
  "id": "ww-discuss-inverse-processes",
  "level": "2",
  "url": "sec-antidifferentiation.html#ww-discuss-inverse-processes",
  "type": "Exercise",
  "number": "1.4.2.3",
  "title": "Inverse Processes.",
  "body": "Inverse Processes   Differentiation and integration are inverse processes. Cite specific results from this section in an explanation of how they justify this (somewhat imprecise) claim.      "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec-antidifferentiation.html#exercise-14",
  "type": "Exercise",
  "number": "1.4.2.4",
  "title": "",
  "body": "            "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec-antidifferentiation.html#exercise-15",
  "type": "Exercise",
  "number": "1.4.2.5",
  "title": "",
  "body": "            "
},
{
  "id": "ww-use-the-definition-of-the-derivative",
  "level": "2",
  "url": "sec-antidifferentiation.html#ww-use-the-definition-of-the-derivative",
  "type": "Exercise",
  "number": "1.4.2.6",
  "title": "Show Your Work.",
  "body": "Show Your Work  Sometimes you would like a student to give a simple answer that WeBWorK can automatically assess, but you would also like the student to show their work or reasoning. Perhaps there is a particular method that you want to see the student use to find the answer. So you have a regular answer blank and also an essay blank. For practical reasons, you may wish to use the same problem on your WeBWorK server, but omit the essay part. For example, if you want to use that problem but leave out the manual grading. For this, WeBWorK has the explanation_box tool, demonstrated here.    Use the definition of the derivative to find  Show your work.           "
},
{
  "id": "sec-math-content",
  "level": "1",
  "url": "sec-math-content.html",
  "type": "Section",
  "number": "1.5",
  "title": "Math Content",
  "body": " Math Content  This section helps with testing aspects of math content.  Math Elements and Alignment  In this exercise we demonstrate the allowed math elements: <m> , <me> , and <md> . The last of these may have attribute alignment with options gather , align , or alignat . The first two are used by default, depending on if you have & or \\amp in your math.    If and then   Here, we solve an equation.   Here we have a three-way inequality to solve.   And here, we see a system of equations.        Intertext  With an <md> you might have <intertext> among the rows.    Here, we solve an equation.  Now subtract from each side. Now divide by on each side.  We should also test when the <md> is within a list.   Start a list.     Now subtract from each side. Now divide by on each side.    Still in the list?         "
},
{
  "id": "math-and-alignment",
  "level": "2",
  "url": "sec-math-content.html#math-and-alignment",
  "type": "Checkpoint",
  "number": "1.5.1",
  "title": "Math Elements and Alignment.",
  "body": "Math Elements and Alignment  In this exercise we demonstrate the allowed math elements: <m> , <me> , and <md> . The last of these may have attribute alignment with options gather , align , or alignat . The first two are used by default, depending on if you have & or \\amp in your math.    If and then   Here, we solve an equation.   Here we have a three-way inequality to solve.   And here, we see a system of equations.       "
},
{
  "id": "intertext",
  "level": "2",
  "url": "sec-math-content.html#intertext",
  "type": "Checkpoint",
  "number": "1.5.2",
  "title": "Intertext.",
  "body": "Intertext  With an <md> you might have <intertext> among the rows.    Here, we solve an equation.  Now subtract from each side. Now divide by on each side.  We should also test when the <md> is within a list.   Start a list.     Now subtract from each side. Now divide by on each side.    Still in the list?        "
},
{
  "id": "sec-multiple-choice",
  "level": "1",
  "url": "sec-multiple-choice.html",
  "type": "Section",
  "number": "1.6",
  "title": "Multiple Choice",
  "body": " Multiple Choice  While free-response questions are generally preferred, sometimes the nature of a question lends itself to multiple choice.  Drop-down\/Popup  Note also that the solution to this problem uses an external link.    The number    is    is not   rational.        If were rational, then with and coprime. But then By the Fundamental Theorem of Arithmetic , the power of dividing the left side is odd, while the power of dividing the right side is even. This is a contradiction, so is not rational.       Choose one   Which of the following suggest that differentiation and integration are inverse processes?    The Quadratic Formula    The Fundamental Theorem of Calculus    The Fundamental Theorem of Arithmetic    None of these          The correct answer is The Fundamental ... of Calculus.       Choose a Subset of Options   Select all expressions that are equivalent to There may be more than one correct answer.                   None of the above          The correct answer is Choice 2, Choice 4, Choice 5.       Choose a Subset of Options with Automated Labeling   Select all expressions that are equivalent to There may be more than one correct answer.                   None of the above          The correct answer is B, C, D.       Choose a Subset of Options with Explicit Labeling   Select all expressions that are equivalent to There may be more than one correct answer.                   None of the above          The correct answer is TACO, SUSHI, PIZZA.       "
},
{
  "id": "multiple-choice",
  "level": "2",
  "url": "sec-multiple-choice.html#multiple-choice",
  "type": "Checkpoint",
  "number": "1.6.1",
  "title": "Drop-down\/Popup.",
  "body": "Drop-down\/Popup  Note also that the solution to this problem uses an external link.    The number    is    is not   rational.        If were rational, then with and coprime. But then By the Fundamental Theorem of Arithmetic , the power of dividing the left side is odd, while the power of dividing the right side is even. This is a contradiction, so is not rational.      "
},
{
  "id": "choose-one",
  "level": "2",
  "url": "sec-multiple-choice.html#choose-one",
  "type": "Checkpoint",
  "number": "1.6.2",
  "title": "Choose one.",
  "body": "Choose one   Which of the following suggest that differentiation and integration are inverse processes?    The Quadratic Formula    The Fundamental Theorem of Calculus    The Fundamental Theorem of Arithmetic    None of these          The correct answer is The Fundamental ... of Calculus.      "
},
{
  "id": "options-subset",
  "level": "2",
  "url": "sec-multiple-choice.html#options-subset",
  "type": "Checkpoint",
  "number": "1.6.3",
  "title": "Choose a Subset of Options.",
  "body": "Choose a Subset of Options   Select all expressions that are equivalent to There may be more than one correct answer.                   None of the above          The correct answer is Choice 2, Choice 4, Choice 5.      "
},
{
  "id": "options-subset-auto-label",
  "level": "2",
  "url": "sec-multiple-choice.html#options-subset-auto-label",
  "type": "Checkpoint",
  "number": "1.6.4",
  "title": "Choose a Subset of Options with Automated Labeling.",
  "body": "Choose a Subset of Options with Automated Labeling   Select all expressions that are equivalent to There may be more than one correct answer.                   None of the above          The correct answer is B, C, D.      "
},
{
  "id": "options-subset-explicit-labeling",
  "level": "2",
  "url": "sec-multiple-choice.html#options-subset-explicit-labeling",
  "type": "Checkpoint",
  "number": "1.6.5",
  "title": "Choose a Subset of Options with Explicit Labeling.",
  "body": "Choose a Subset of Options with Explicit Labeling   Select all expressions that are equivalent to There may be more than one correct answer.                   None of the above          The correct answer is TACO, SUSHI, PIZZA.      "
},
{
  "id": "sec-tables",
  "level": "1",
  "url": "sec-tables.html",
  "type": "Section",
  "number": "1.7",
  "title": "Tables",
  "body": " Tables  Although a WeBWorK problem written in PreTeXt source can't have a table (which would be captioned and cause trouble with free-standing PG output), they can have a tabular . Tabulars can be made using the existing syntax and options that PTX offers for table-making, with some exceptions. As of summer 2017, the exceptions are that individual cells cannot have bottom border attributes and individual columns cannot have top border attributes. Also, while PTX table borders are generally minor , medium , or major , when these borders are used in a WeBWorK problem that is rendered as a hard copy problem from within WeBWorK , the only thickness option corresponds to minor . Several more features (like rules in general) do not carry through to static output (print or HTML-preview). However we hope this is only temporary.  Complete this Table   Complete this multiplication table.                                                                      "
},
{
  "id": "table-completion",
  "level": "2",
  "url": "sec-tables.html#table-completion",
  "type": "Checkpoint",
  "number": "1.7.1",
  "title": "Complete this Table.",
  "body": "Complete this Table   Complete this multiplication table.                                                                     "
},
{
  "id": "sec-graphics-in-exercises",
  "level": "1",
  "url": "sec-graphics-in-exercises.html",
  "type": "Section",
  "number": "1.8",
  "title": "Graphics in Exercises",
  "body": " Graphics in Exercises  It is natural for exercises to have graphics. For example, an exercise might produce a graph of some kind, and ask the reader to extract some information from that graph.  If your WeBWorK server is version 2.16 or later, WeBWorK problems can process <latex-image> code. Here is an example.  A static <latex-image> graph   This image is a visual proof that equals what?   21 blue balls are arranged in a triangular formation, with one at the top, then a row of two, a row of three, and so on until a row of six; there is a seventh row with seven orange balls; one blue ball is highlighted, and two lines extend downward from that ball, one to the left and one to the right, parallel to the sides of the triangle, until they intersect two orange balls; the effect is that each of the 1+2+3+4+5+6 blue balls corresponds to one pair from the 7 orange balls            A randomized <latex-image> graph  These images may depend on the random seed. In this problem, the height and width of the rectangle are randomized.    Find the area of the rectangle.   a rectangle whose width is labeled 8 cm and height is labeled 6 cm            A <latex-image> graph affected by <latex-image-preamble>  This sample chapter's <docinfo> has a <latex-image-preamble> . This exercise has graph styling that is affected by that.    What are the roots of this polynomial?   the graph of a polynomial that crosses the x-axis at -3, 0, and 3.            Special characters  This exercise is to test that special characters behave.    The code below has a printed dollar sign, a printed percent sign, a printed at sign, and a percent sign used as a comment marker.   this image has pictures of text with special characters like %, and @        An older mechanism for creating images is supported and demonstrated here.  Solve using a graph   The graph below is a graph of Use the graph to solve the equation   a plot of a curve on a cartesian set of axes; the x axis ranges from -1 to 4, and the y-axis ranges from -1 to 4; the curve enters from the left, below the x-axis, and curves upward and to the right until it reaches the point (0,0); from here it continues predominantly rightward for a bit, bending slightly upward more and more as it progresses; it passes through the points (1,1) and (1.25992,2) before leaving the graph moving more and more upward and to the right.        The graph reveals that the solution set to is   a plot of a curve on a cartesian set of axes; the x axis ranges from -1 to 4, and the y-axis ranges from -1 to 4; the curve enters from the left, below the x-axis, and curves upward and to the right until it reaches the point (0,0); from here it continues predominantly rightward for a bit, bending slightly upward more and more as it progresses; it passes through the points (1,1) and (1.25992,2) before leaving the graph moving more and more upward and to the right; a horizontal line segment moves rightward from y=1 on the y-axis until it reaches a point on the curve; a vertical line segment moves down from this point to x=1 on the x-axis.          This exercisegroup has a <latex-image> image in its introduction. In standalone versions of the exercise, this image should be repeated.        Find when and                 Find when and                 "
},
{
  "id": "static-latex-image",
  "level": "2",
  "url": "sec-graphics-in-exercises.html#static-latex-image",
  "type": "Checkpoint",
  "number": "1.8.1",
  "title": "A static <code class=\"code-inline tex2jax_ignore\"><latex-image><\/code> graph.",
  "body": "A static <latex-image> graph   This image is a visual proof that equals what?   21 blue balls are arranged in a triangular formation, with one at the top, then a row of two, a row of three, and so on until a row of six; there is a seventh row with seven orange balls; one blue ball is highlighted, and two lines extend downward from that ball, one to the left and one to the right, parallel to the sides of the triangle, until they intersect two orange balls; the effect is that each of the 1+2+3+4+5+6 blue balls corresponds to one pair from the 7 orange balls           "
},
{
  "id": "randomized-latex-image",
  "level": "2",
  "url": "sec-graphics-in-exercises.html#randomized-latex-image",
  "type": "Checkpoint",
  "number": "1.8.2",
  "title": "A randomized <code class=\"code-inline tex2jax_ignore\"><latex-image><\/code> graph.",
  "body": "A randomized <latex-image> graph  These images may depend on the random seed. In this problem, the height and width of the rectangle are randomized.    Find the area of the rectangle.   a rectangle whose width is labeled 8 cm and height is labeled 6 cm           "
},
{
  "id": "latex-image-with-preamble",
  "level": "2",
  "url": "sec-graphics-in-exercises.html#latex-image-with-preamble",
  "type": "Checkpoint",
  "number": "1.8.3",
  "title": "A <code class=\"code-inline tex2jax_ignore\"><latex-image><\/code> graph affected by <code class=\"code-inline tex2jax_ignore\"><latex-image-preamble><\/code>.",
  "body": "A <latex-image> graph affected by <latex-image-preamble>  This sample chapter's <docinfo> has a <latex-image-preamble> . This exercise has graph styling that is affected by that.    What are the roots of this polynomial?   the graph of a polynomial that crosses the x-axis at -3, 0, and 3.           "
},
{
  "id": "special-characters",
  "level": "2",
  "url": "sec-graphics-in-exercises.html#special-characters",
  "type": "Checkpoint",
  "number": "1.8.4",
  "title": "Special characters.",
  "body": "Special characters  This exercise is to test that special characters behave.    The code below has a printed dollar sign, a printed percent sign, a printed at sign, and a percent sign used as a comment marker.   this image has pictures of text with special characters like %, and @      "
},
{
  "id": "solving-with-graph",
  "level": "2",
  "url": "sec-graphics-in-exercises.html#solving-with-graph",
  "type": "Checkpoint",
  "number": "1.8.5",
  "title": "Solve using a graph.",
  "body": "Solve using a graph   The graph below is a graph of Use the graph to solve the equation   a plot of a curve on a cartesian set of axes; the x axis ranges from -1 to 4, and the y-axis ranges from -1 to 4; the curve enters from the left, below the x-axis, and curves upward and to the right until it reaches the point (0,0); from here it continues predominantly rightward for a bit, bending slightly upward more and more as it progresses; it passes through the points (1,1) and (1.25992,2) before leaving the graph moving more and more upward and to the right.        The graph reveals that the solution set to is   a plot of a curve on a cartesian set of axes; the x axis ranges from -1 to 4, and the y-axis ranges from -1 to 4; the curve enters from the left, below the x-axis, and curves upward and to the right until it reaches the point (0,0); from here it continues predominantly rightward for a bit, bending slightly upward more and more as it progresses; it passes through the points (1,1) and (1.25992,2) before leaving the graph moving more and more upward and to the right; a horizontal line segment moves rightward from y=1 on the y-axis until it reaches a point on the curve; a vertical line segment moves down from this point to x=1 on the x-axis.      "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "sec-graphics-in-exercises.html#exercise-30",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": "  Find when and              "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "sec-graphics-in-exercises.html#exercise-31",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "",
  "body": "  Find when and              "
},
{
  "id": "sec-pgml-formatting",
  "level": "1",
  "url": "sec-pgml-formatting.html",
  "type": "Section",
  "number": "2.1",
  "title": "PGML Formatting and Verbatim Calisthenics",
  "body": " PGML Formatting and Verbatim Calisthenics  This section is designed to test various PGML formatting rules and verbatim content returned in answer hashes. Consult the source to see how the special characters and formatting are realized.  PGML Formatting   Smart double quotes: Life is about making an impact, not making an income.  Smart single quotes: Whatever the mind of man can conceive and believe, it can achieve.  Regular apostrophes: My siblings mother s daughter isn t my daughter s siblings mother.  Emphasis: very important  Alert: do not do it  Braces: {text that looks like a set}   Some pre-formatted text  with an indented line  and an out-dented line  This should not be altered *a problem*  And this [$NDASH]* should not be an en-dash   Here is some inline code with special characters & < > \" ' # $ % ^ _ { } ~ \\ * [ ] , and here is some   single-line display code with special characters & < > \" ' # $ % ^ _ { } ~ \\ * [ ]   and here is some   multi-line display  code with special characters & < > \" ' # $ % ^ _ { } ~ \\ * [ ]   Some raw characters, XML\/HTML: & < >   Some raw characters, tex : # $ % ^ & _ { } ~ \\  Some raw characters, PGML: \\ * # { } [ ]  Some characters that need special handling for PGML conversion to HTML or tex :  A non breaking space (invisble where a hyphen should be)  An ndash right here.  An mdash right here.  Some constructions in normal text, which need to be manipulated, lest they get interpreted as PGML markup:  >>This should not be a centered line <<  >>Nor a right-justified line, either  We should not get _a phrase in italics_ in the midst of this sentence.  Brackets, unpaired; ] with content between [  Brackets, paired, in PGML constructions; [$NDASH]*, [___]{$answer}  ### This should not be a level 3 heading  === Not a horizontal rule from three equal signs  == Not a horizontal rule from two equal signs  ===== Not a horizontal rule from five equal signs  --- Not a horizontal rule from three hyphens  -- Not a horizontal rule from two hyphens  ----- Not a horizontal rule from five hyphens  + Not an unordered list item  - Not an unordered list item       Here we make MathObject String answers to see how they turn out in answer elements.      Special characters used by XML, character escaping: <>&'\";  Now as a MathObject: <>&'\";    Special characters used by LaTeX, where LaTeX \\text and MathJax \\text disagree: #%&<>\\^_`|~  Now as a MathObject: #%&<>\\^_`|~    Special characters used by LaTeX, where LaTeX \\text and MathJax \\text can agree: ${}  Now as a MathObject: ${}    Alphanumeric characters: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789  Now as a MathObject: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789    Other characters: !()*+,-.\/:=?@[]  Now as a MathObject: !()*+,-.\/:=?@[]    In answers, because of tex and MathJax divergence, the first two should come out in verbatim. (And so should any string containing even one of those characters.) The latter three should come out in regular text.                                Occasionally (and probably very rarely) your PG code will include a string variable where the content is PGML syntax. If this is put into the exercise statement, it will be inserted after PGML processing is done, and therefore it won't render as you might expect. To insert this content and also have it processed as PGML, use data=\"pgml\" . (This is not in the PreTeXt schema as of 3\/26\/2020, and is subject to change.)    some PGML math: [`\\frac{1}{2}+\\frac{3}{2}=2`]; and some *bold text* makes:  some PGML math: ; and some bold text       "
},
{
  "id": "ww-PGML-format",
  "level": "2",
  "url": "sec-pgml-formatting.html#ww-PGML-format",
  "type": "Checkpoint",
  "number": "2.1.1",
  "title": "PGML Formatting.",
  "body": "PGML Formatting   Smart double quotes: Life is about making an impact, not making an income.  Smart single quotes: Whatever the mind of man can conceive and believe, it can achieve.  Regular apostrophes: My siblings mother s daughter isn t my daughter s siblings mother.  Emphasis: very important  Alert: do not do it  Braces: {text that looks like a set}   Some pre-formatted text  with an indented line  and an out-dented line  This should not be altered *a problem*  And this [$NDASH]* should not be an en-dash   Here is some inline code with special characters & < > \" ' # $ % ^ _ { } ~ \\ * [ ] , and here is some   single-line display code with special characters & < > \" ' # $ % ^ _ { } ~ \\ * [ ]   and here is some   multi-line display  code with special characters & < > \" ' # $ % ^ _ { } ~ \\ * [ ]   Some raw characters, XML\/HTML: & < >   Some raw characters, tex : # $ % ^ & _ { } ~ \\  Some raw characters, PGML: \\ * # { } [ ]  Some characters that need special handling for PGML conversion to HTML or tex :  A non breaking space (invisble where a hyphen should be)  An ndash right here.  An mdash right here.  Some constructions in normal text, which need to be manipulated, lest they get interpreted as PGML markup:  >>This should not be a centered line <<  >>Nor a right-justified line, either  We should not get _a phrase in italics_ in the midst of this sentence.  Brackets, unpaired; ] with content between [  Brackets, paired, in PGML constructions; [$NDASH]*, [___]{$answer}  ### This should not be a level 3 heading  === Not a horizontal rule from three equal signs  == Not a horizontal rule from two equal signs  ===== Not a horizontal rule from five equal signs  --- Not a horizontal rule from three hyphens  -- Not a horizontal rule from two hyphens  ----- Not a horizontal rule from five hyphens  + Not an unordered list item  - Not an unordered list item      "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "sec-pgml-formatting.html#exercise-33",
  "type": "Checkpoint",
  "number": "2.1.2",
  "title": "",
  "body": "    Special characters used by XML, character escaping: <>&'\";  Now as a MathObject: <>&'\";    Special characters used by LaTeX, where LaTeX \\text and MathJax \\text disagree: #%&<>\\^_`|~  Now as a MathObject: #%&<>\\^_`|~    Special characters used by LaTeX, where LaTeX \\text and MathJax \\text can agree: ${}  Now as a MathObject: ${}    Alphanumeric characters: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789  Now as a MathObject: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789    Other characters: !()*+,-.\/:=?@[]  Now as a MathObject: !()*+,-.\/:=?@[]    In answers, because of tex and MathJax divergence, the first two should come out in verbatim. (And so should any string containing even one of those characters.) The latter three should come out in regular text.                               "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "sec-pgml-formatting.html#exercise-34",
  "type": "Checkpoint",
  "number": "2.1.3",
  "title": "",
  "body": "  some PGML math: [`\\frac{1}{2}+\\frac{3}{2}=2`]; and some *bold text* makes:  some PGML math: ; and some bold text      "
},
{
  "id": "sec-subject-area-templates",
  "level": "1",
  "url": "sec-subject-area-templates.html",
  "type": "Section",
  "number": "2.2",
  "title": "Subject Area Templates",
  "body": " Subject Area Templates  This section samples the subject area template problems found on the WeBWorK wiki at .  Answer is a number or a function     Suppose the correct answer is         Suppose the correct answer is                    Solution explanation goes here.       Answer is a function with domain issues     Suppose the correct answer is         Suppose the correct answer is                    Solution explanation goes here.       Multiple Choice by Popup, Radio Buttons, or Checkboxes   My favorite color is   Red    Blue    Green   .  My favorite color is    Red    Blue    Green    None of these    My favorite color is    Red    Blue    Green    None of these                    The correct answer is Blue.  The correct answer is Blue.  The correct answer is Blue.         There is math in each option for this question. Which expression is not a polynomial?                   The answer is Choice 3.       Tables   A table with minimal XML source.        A  B  C    D  E  F    G  H  I    Finish this table.        1  two        six     VIII          The missing number is 5.       Answer Arrays   These answer blanks are all expecting some sort of answer in an array format.           "
},
{
  "id": "number-or-function",
  "level": "2",
  "url": "sec-subject-area-templates.html#number-or-function",
  "type": "Checkpoint",
  "number": "2.2.1",
  "title": "Answer is a number or a function.",
  "body": "Answer is a number or a function     Suppose the correct answer is         Suppose the correct answer is                    Solution explanation goes here.      "
},
{
  "id": "function-with-domain-issues",
  "level": "2",
  "url": "sec-subject-area-templates.html#function-with-domain-issues",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "Answer is a function with domain issues.",
  "body": "Answer is a function with domain issues     Suppose the correct answer is         Suppose the correct answer is                    Solution explanation goes here.      "
},
{
  "id": "multiple-choice-popup-or-radio-buttons",
  "level": "2",
  "url": "sec-subject-area-templates.html#multiple-choice-popup-or-radio-buttons",
  "type": "Checkpoint",
  "number": "2.2.3",
  "title": "Multiple Choice by Popup, Radio Buttons, or Checkboxes.",
  "body": "Multiple Choice by Popup, Radio Buttons, or Checkboxes   My favorite color is   Red    Blue    Green   .  My favorite color is    Red    Blue    Green    None of these    My favorite color is    Red    Blue    Green    None of these                    The correct answer is Blue.  The correct answer is Blue.  The correct answer is Blue.      "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "sec-subject-area-templates.html#exercise-38",
  "type": "Checkpoint",
  "number": "2.2.4",
  "title": "",
  "body": "  There is math in each option for this question. Which expression is not a polynomial?                   The answer is Choice 3.      "
},
{
  "id": "tables",
  "level": "2",
  "url": "sec-subject-area-templates.html#tables",
  "type": "Checkpoint",
  "number": "2.2.5",
  "title": "Tables.",
  "body": "Tables   A table with minimal XML source.        A  B  C    D  E  F    G  H  I    Finish this table.        1  two        six     VIII          The missing number is 5.      "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "sec-subject-area-templates.html#exercise-40",
  "type": "Checkpoint",
  "number": "2.2.6",
  "title": "Answer Arrays.",
  "body": "Answer Arrays   These answer blanks are all expecting some sort of answer in an array format.          "
},
{
  "id": "sec-stress-tests",
  "level": "1",
  "url": "sec-stress-tests.html",
  "type": "Section",
  "number": "2.3",
  "title": "Stress Tests",
  "body": " Stress Tests  PTX problem source with server-generated images                      Checking Proper Indentation In Lists  One long exercise, where ordered sublists test the specification of their labels.      Simple item    Simple item    Simple item      Simple item    Simple item    Simple item    Text before.   Simple item    Simple item    Simple item    And after.    Structured item    Structured item    Structured item    Text before.   Structured item    Structured item    Structured item    And after.    Structured item       Sublist Item    Sublist Item    Sublist Item      Structured item    Text before.   Structured item    Text before.   Sublist Item    Sublist Item    Sublist Item    And after.    Structured item    And after.    Structured item  Second paragraph       Sublist Item  Second paragraph    Sublist Item  Second paragraph    Sublist Item  Second paragraph      Structured item  Second paragraph    Text before.   Structured item  Second paragraph    Text before.   Sublist Item  Second paragraph    Sublist Item  Second paragraph    Sublist Item  Second paragraph    And after.    Structured item  Second paragraph    And after.      Structured item  Second   paragraph       Sublist   Item  Second paragraph       Sublist Item  Second   paragraph    Sublist Item    Second paragraph      Structured   item  Second paragraph     Text before.   Structured   item  Second paragraph       Text before.   Sublist   Item  Second paragraph       Sublist Item  Second   paragraph    Sublist Item    Second paragraph    And   after.    Structured item    Second paragraph    And after.  Text before.   Structured   item  Second paragraph       Text before.   Sublist   Item  Second paragraph       Sublist Item  Second   paragraph    Sublist Item    Second paragraph    And   after.    Structured item    Second paragraph    And after.       Checking Proper Indentation In Lists with Images and Tables     Structured item        Structured item    Structured item     Structured item    Structured item      a  b    c  d           1  two        six     VIII      Structured item    Structured item      a  b    c  d    Second paragraph    Structured item         Deep-nested lists   Ordered list.    Level 1, first.    Level 1, second.   Level 2, first.    Level 2, second.   Level 3, first.    Level 3, second.   Level 4, first.    Level 4, second.    Level 4, third.      Level 3, third.      Level 2, third.      Level 1, third.    Unordered list.    Level 1, first.    Level 1, second.   Level 2, first.    Level 2, second.   Level 3, first.    Level 3, second.   Level 4, first.    Level 4, second.    Level 4, third.      Level 3, third.      Level 2, third.      Level 1, third.          This exercise has no content in its statement. It should throw a PTX warning during the representations build.          This exercise has a single quote in it. A single quote is the first option for a delimiter for perl's q function which is used by extract-pg.xsl in table cells. So if working, it should move on to the next delimiter option.        What s up, Doc?         "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "sec-stress-tests.html#exercise-41",
  "type": "Checkpoint",
  "number": "2.3.1",
  "title": "PTX problem source with server-generated images.",
  "body": "PTX problem source with server-generated images                     "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "sec-stress-tests.html#exercise-42",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "Checking Proper Indentation In Lists.",
  "body": "Checking Proper Indentation In Lists  One long exercise, where ordered sublists test the specification of their labels.      Simple item    Simple item    Simple item      Simple item    Simple item    Simple item    Text before.   Simple item    Simple item    Simple item    And after.    Structured item    Structured item    Structured item    Text before.   Structured item    Structured item    Structured item    And after.    Structured item       Sublist Item    Sublist Item    Sublist Item      Structured item    Text before.   Structured item    Text before.   Sublist Item    Sublist Item    Sublist Item    And after.    Structured item    And after.    Structured item  Second paragraph       Sublist Item  Second paragraph    Sublist Item  Second paragraph    Sublist Item  Second paragraph      Structured item  Second paragraph    Text before.   Structured item  Second paragraph    Text before.   Sublist Item  Second paragraph    Sublist Item  Second paragraph    Sublist Item  Second paragraph    And after.    Structured item  Second paragraph    And after.      Structured item  Second   paragraph       Sublist   Item  Second paragraph       Sublist Item  Second   paragraph    Sublist Item    Second paragraph      Structured   item  Second paragraph     Text before.   Structured   item  Second paragraph       Text before.   Sublist   Item  Second paragraph       Sublist Item  Second   paragraph    Sublist Item    Second paragraph    And   after.    Structured item    Second paragraph    And after.  Text before.   Structured   item  Second paragraph       Text before.   Sublist   Item  Second paragraph       Sublist Item  Second   paragraph    Sublist Item    Second paragraph    And   after.    Structured item    Second paragraph    And after.      "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "sec-stress-tests.html#exercise-43",
  "type": "Checkpoint",
  "number": "2.3.3",
  "title": "Checking Proper Indentation In Lists with Images and Tables.",
  "body": "Checking Proper Indentation In Lists with Images and Tables     Structured item        Structured item    Structured item     Structured item    Structured item      a  b    c  d           1  two        six     VIII      Structured item    Structured item      a  b    c  d    Second paragraph    Structured item        "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "sec-stress-tests.html#exercise-44",
  "type": "Checkpoint",
  "number": "2.3.4",
  "title": "Deep-nested lists.",
  "body": "Deep-nested lists   Ordered list.    Level 1, first.    Level 1, second.   Level 2, first.    Level 2, second.   Level 3, first.    Level 3, second.   Level 4, first.    Level 4, second.    Level 4, third.      Level 3, third.      Level 2, third.      Level 1, third.    Unordered list.    Level 1, first.    Level 1, second.   Level 2, first.    Level 2, second.   Level 3, first.    Level 3, second.   Level 4, first.    Level 4, second.    Level 4, third.      Level 3, third.      Level 2, third.      Level 1, third.        "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "sec-stress-tests.html#exercise-45",
  "type": "Checkpoint",
  "number": "2.3.5",
  "title": "",
  "body": " This exercise has no content in its statement. It should throw a PTX warning during the representations build.        "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "sec-stress-tests.html#exercise-46",
  "type": "Checkpoint",
  "number": "2.3.6",
  "title": "",
  "body": " This exercise has a single quote in it. A single quote is the first option for a delimiter for perl's q function which is used by extract-pg.xsl in table cells. So if working, it should move on to the next delimiter option.        What s up, Doc?        "
},
{
  "id": "sec-layout-configuration-testing",
  "level": "1",
  "url": "sec-layout-configuration-testing.html",
  "type": "Section",
  "number": "2.4",
  "title": "Layout Configuration Testing",
  "body": " Layout Configuration Testing   This section is to provide a single page demonstrating all of the combinations that may factor into a problem's layout.    Inline Exercises  Some inline exercises, as distinguished from the divisional exercises below.          Has a Title          Has an introduction.          Has a Title  Has an introduction.                  Has a conclusion.   Has a Title         Has a conclusion.    Has an introduction.          Has a conclusion.   Has a Title  Has an introduction.          Has a conclusion.     Divisional Exercises          Has a Title          Has an introduction.          Has a Title  Has an introduction.                  Has a conclusion.   Has a Title         Has a conclusion.    Has an introduction.          Has a conclusion.   Has a Title  Has an introduction.          Has a conclusion.     These are inside an exercisegroup.           Has a Title          Has an introduction.          Has a Title  Has an introduction.                  Has a conclusion.   Has a Title         Has a conclusion.    Has an introduction.          Has a conclusion.   Has a Title  Has an introduction.          Has a conclusion.     "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-47",
  "type": "Checkpoint",
  "number": "2.4.1",
  "title": "",
  "body": "       "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-48",
  "type": "Checkpoint",
  "number": "2.4.2",
  "title": "Has a Title.",
  "body": "Has a Title        "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-49",
  "type": "Checkpoint",
  "number": "2.4.3",
  "title": "",
  "body": " Has an introduction.         "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-50",
  "type": "Checkpoint",
  "number": "2.4.4",
  "title": "Has a Title.",
  "body": "Has a Title  Has an introduction.         "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-51",
  "type": "Checkpoint",
  "number": "2.4.5",
  "title": "",
  "body": "        Has a conclusion.  "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-52",
  "type": "Checkpoint",
  "number": "2.4.6",
  "title": "Has a Title.",
  "body": "Has a Title         Has a conclusion.  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-53",
  "type": "Checkpoint",
  "number": "2.4.7",
  "title": "",
  "body": " Has an introduction.          Has a conclusion.  "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-54",
  "type": "Checkpoint",
  "number": "2.4.8",
  "title": "Has a Title.",
  "body": "Has a Title  Has an introduction.          Has a conclusion.  "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-55",
  "type": "Exercise",
  "number": "2.4.2.1",
  "title": "",
  "body": "       "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-56",
  "type": "Exercise",
  "number": "2.4.2.2",
  "title": "Has a Title.",
  "body": "Has a Title        "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-57",
  "type": "Exercise",
  "number": "2.4.2.3",
  "title": "",
  "body": " Has an introduction.         "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-58",
  "type": "Exercise",
  "number": "2.4.2.4",
  "title": "Has a Title.",
  "body": "Has a Title  Has an introduction.         "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-59",
  "type": "Exercise",
  "number": "2.4.2.5",
  "title": "",
  "body": "        Has a conclusion.  "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-60",
  "type": "Exercise",
  "number": "2.4.2.6",
  "title": "Has a Title.",
  "body": "Has a Title         Has a conclusion.  "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-61",
  "type": "Exercise",
  "number": "2.4.2.7",
  "title": "",
  "body": " Has an introduction.          Has a conclusion.  "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-62",
  "type": "Exercise",
  "number": "2.4.2.8",
  "title": "Has a Title.",
  "body": "Has a Title  Has an introduction.          Has a conclusion.  "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-63",
  "type": "Exercise",
  "number": "2.4.2.9",
  "title": "",
  "body": "       "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-64",
  "type": "Exercise",
  "number": "2.4.2.10",
  "title": "Has a Title.",
  "body": "Has a Title        "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-65",
  "type": "Exercise",
  "number": "2.4.2.11",
  "title": "",
  "body": " Has an introduction.         "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-66",
  "type": "Exercise",
  "number": "2.4.2.12",
  "title": "Has a Title.",
  "body": "Has a Title  Has an introduction.         "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-67",
  "type": "Exercise",
  "number": "2.4.2.13",
  "title": "",
  "body": "        Has a conclusion.  "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-68",
  "type": "Exercise",
  "number": "2.4.2.14",
  "title": "Has a Title.",
  "body": "Has a Title         Has a conclusion.  "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-69",
  "type": "Exercise",
  "number": "2.4.2.15",
  "title": "",
  "body": " Has an introduction.          Has a conclusion.  "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "sec-layout-configuration-testing.html#exercise-70",
  "type": "Exercise",
  "number": "2.4.2.16",
  "title": "Has a Title.",
  "body": "Has a Title  Has an introduction.          Has a conclusion.  "
},
{
  "id": "sec-deprecations",
  "level": "1",
  "url": "sec-deprecations.html",
  "type": "Section",
  "number": "2.5",
  "title": "Deprecations",
  "body": " Deprecations  This section is for testing if deprecated features are still supported. No such tests are being performed now.  "
},
{
  "id": "sec-ac-in-runestone-tests",
  "level": "1",
  "url": "sec-ac-in-runestone-tests.html",
  "type": "Section",
  "number": "2.6",
  "title": "AC in Runestone Test Problems",
  "body": " AC in Runestone Test Problems    Good test problem, scaffolded, dropdown, radio buttons, check that answers restore    Suppose that the height of a ball (in feet) at time (in seconds) is given by the formula . This function is graphed below on the interval .    Part a Which labeled point (A-G) corresponds to the release of the ball?  How high (in feet) was the ball when it was released?  Which labeled point corresponds to the highest point of the ball?  When (in seconds after being released) did the ball reach its highest point?  Which labeled point corresponds to the ball hitting the ground?  How long (in seconds) after being released did the ball hit the ground?   Part b Which option best describes the behavior of the ball on the time interval ?   The ball is rising.    The ball is falling.    The ball changes direction.    The ball is released.    The ball hits the ground.    Which option best describes the behavior of the ball on the time interval ?   The ball is rising.    The ball is falling.    The ball changes direction.    The ball is released.    The ball hits the ground.    What occurs at the instant ?   The ball is rising.    The ball is falling.    The ball changes direction.    The ball is released.    The ball hits the ground.     Part c Consider the following expression.  Compute the value of .  What does this value measure geometrically?    slope . The slope of the line between the points and .    curvature . The curvature of the graph of on the interval .    area . The area under the graph of on the interval .    distance . The distance between the points and .    What does this value measure physically?    average velocity . The average velocity of the ball during the interval .    distance . The distance that the ball travels during the interval .    acceleration . The acceleration of the ball during the interval .    What are the units on ?   feet per second    feet    seconds    feet per second squared    foot seconds    none of these            Lots of dropdowns, using NiceTables, check that answers restore    For each of the indefinite integrals below, the main question is to decide whether the integral can be evaluated using a basic antiderivative, -substitution, integration by parts, a combination of -substitution and integration by parts, or none of these other techniques.  For integrals for which your answer is affirmative ( -sub, by parts, combo), you should be able to state what and are, or what and are.     TABLE A    Method           Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These          TABLE B    Method           Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These          TABLE C    Method           Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These          TABLE D    Method           Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These                                                                                               Old Checkbox macro    The position of an object moving along a line is given by the function , where is measured in feet and in seconds. We determine that the velocity is feet per second.  How much does the position change over the time interval ?  Change in position = feet  Suppose you are told that the object's initial position . Determine , the object's position seconds later.    If you are told instead that the object's initial position is , what is ?    If we only know the velocity (but not the initial position), which of the following could be the position function?  Select all that apply.                   None of the above    If, in addition to knowing the velocity function is , we know the initial position , how many possibilities are there for ?    0    2    1    5    Infinitely many    none of the above                    feet. Therefore, the position function will be , where is the initial velocity.         No possible correct answer for dropdown immediately after the first essay box    Scenario A  In the following scenario, we consider the distribution of a quantity along an axis.  Suppose that the function models the density of traffic on a straight road, measured in cars per mile, where is number of miles east of a major interchange, and consider the definite integral .  (i) What are the units on the product ?  Units:   cars    miles    cars\/mile    miles\/car    cars*cars    miles*miles    (ii) What are the units on the definite integral and its Riemann sum approximation given by Units:   cars    miles    cars\/mile    miles\/car    cars*cars    miles*miles    (iii) Evaluate the definite integral and write one sentence to explain the meaning of the value you find.  Scenario B  In the following scenario, we consider the distribution of a quantity along an axis.  On a 6 foot long shelf filled with books, the function models the distribution of the weight of the books, measured in pounds per inch, where is the number of inches from the left end of the bookshelf. Let be given by the rule .  (i) What are the units on the product ?  Units:   pounds    inches    pound\/inch    inch\/pound    pound*pound    inch*inch    (ii) What are the units on the definite integral and its Riemann sum approximation given by Units:   pounds    inches    pound\/inch    inch\/pound    pound*pound    inch*inch    (iii) Evaluate the definite integral and write one sentence to explain the meaning of the value you find.              Undefined                 Hardcoded by Alex, risk of being too long    Let and let Our goal is to find the values of that make the sine function and its derivative values agree with those of the cubic polynomial at and to study the resulting degree approximation of the sine function.   As in previous work, the derivatives of and their respective values at are those shown in the following table. Compute the various derivatives of and evaluate them at accordingly, recording your results in the left side of the table.                                                                                      Now, set   and This implies , , , and .  Putting it all together, what is the resulting formula for                       Recall that the tangent line approximation to at is as plotted below. On the same axes, we ve plotted the cubic approximation you found in part (b).    What do you observe about the approximation generates compared to the tangent line approximation    The cubic approximation is closer to the function for more values of .    The tangent line approximation is closer to the function for more values of .    Both approximate the function equally well.         Compute and  What do you notice about the size and sign of those differences?           For about what values of does it appear that    For about what values of does it appear that                  Runs the risk of being too long, depending on what students enter  In this problem, the notation \"SIMP(2)\" is actually what we have called \"SIMP(4)\" in our previous work. Different authors use different notation, and the author of this WeBWorK exercise chooses to write \"SIMP(n)\" where we have written \"SIMP(2n)\".    Note: for this problem, because later answers depend on earlier ones, you must enter answers for all answer blanks for the problem to be correctly graded. If you would like to get feedback before you completed all computations, enter a \"1\" for each answer you did not yet compute and then submit the problem. (But note that this will, obviously, result in a problem submission.)  (a) What is the exact value of ?    (b)  Find LEFT(2), RIGHT(2), TRAP(2), MID(2), and SIMP(2); compute the error for each.     LEFT(2)  RIGHT(2)  TRAP(2)  MID(2)  SIMP(2)    value         error         (c)  Repeat part (b) with (instead of ).     LEFT(4)  RIGHT(4)  TRAP(4)  MID(4)  SIMP(4)    value         error         (d)  For each rule in part (b), as goes from to , does the error go down approximately as you would expect? Explain by calculating the ratios of the errors:  Error LEFT(2)\/Error LEFT(4) =  Error RIGHT(2)\/Error RIGHT(4) =  Error TRAP(2)\/Error TRAP(4) =  Error MID(2)\/Error MID(4) =  Error SIMP(2)\/Error SIMP(4) =  (Be sure that you can explain in words why these do (or don't) make sense.)                                                                                                                                     (a)   (b) Computing the sums directly, since , we have LEFT(2) RIGHT(2) TRAP(2) MID(2) and SIMP(2) = (2 MID(2) + TRAP(2))\/3 . And the errors are just the actual value minus the approximate values, or error(LEFT(2)) = 114.457; error(RIGHT(2)) = -254.076; error(TRAP(2)) = -69.81; error(MID(2)) = 32.3841; and error(SIMP(2)) = -1.681. (c) Similarly, since , we have LEFT(4) = 73.9924; error = 73.4207 RIGHT(4) = 258.259; error = -110.846 TRAP(4) = 166.126; error = -18.713 MID(4) = 138.236; error = 9.177 SIMP(4) = 147.533; error = -0.12. (d) For LEFT and RIGHT, we expect the error to go down by 1\/2, and this is very roughly what we see. For MID and TRAP, we expect the error to go down by 1\/4, and this is approximately what we see. For SIMP, we expect the error to go down by 1\/16, again as observed.       Shortened version of question above, but told one student everything was wrong   Note: for this problem, because later answers depend on earlier ones, you must enter answers for all answer blanks for the problem to be correctly graded. If you would like to get feedback before you completed all computations, enter a \"1\" for each answer you did not yet compute and then submit the problem. (But note that this will, obviously, result in a problem submission.)  (a) What is the exact value of ?    (b)  Find LEFT(2), RIGHT(2), TRAP(2), MID(2), and SIMP(4); compute the error for each.     LEFT(2)  RIGHT(2)  TRAP(2)  MID(2)  SIMP(4)    value         error         (c)  Repeat part (b) with (instead of ).     LEFT(4)  RIGHT(4)  TRAP(4)  MID(4)  SIMP(8)    value         error                                                                                                                   (a)   (b) Computing the sums directly, since , we have LEFT(2) RIGHT(2) TRAP(2) MID(2) and SIMP(4) = (2 MID(2) + TRAP(2))\/3 . And the errors are just the actual value minus the approximate values, or error(LEFT(2)) = 114.457; error(RIGHT(2)) = -254.076; error(TRAP(2)) = -69.81; error(MID(2)) = 32.3841; and error(SIMP(4)) = -1.681. (c) Similarly, since , we have LEFT(4) = 73.9924; error = 73.4207 RIGHT(4) = 258.259; error = -110.846 TRAP(4) = 166.126; error = -18.713 MID(4) = 138.236; error = 9.177 SIMP(8) = 147.533; error = -0.12. (d) For LEFT and RIGHT, we expect the error to go down by 1\/2, and this is very roughly what we see. For MID and TRAP, we expect the error to go down by 1\/4, and this is approximately what we see. For SIMP, we expect the error to go down by 1\/16, again as observed.       Uses old table macros, but parserCheckboxList   The graph below shows the distance traveled, (in miles) as a function of time, (in hours).   (Click on the graph to get a larger version.)  a) For each of the intervals, find the values of and between the indicated start and end times. Enter your answers in their respective columns in the table below.    Time Interval      t = 1 to t = 4      t = 1.5 to t = 3      t = 2 to t = 4      b) Based on your results from (a) it follows that the average rate of change of is constant, it does not depend over which interval of time you choose. What is the constant rate of change of ?    c) Which of the statements below CORRECTLY explains the significance of your answer to part (b)? Select ALL that apply (more than one may apply).   It is the total distance the car travels in five hours.    It represents the car's velocity.    It is the acceleration of the car over the five hour time interval.    It is how far the car will travel in a half-hour.    It is the slope of the line.    It is the average velocity of the car over the first two hours.    None of the above.                                             a) Over the first interval to , and .  Similarly, over the second interval to , and .  Finally, over the last interval to , and .  b) Notice that for each of the three intervals in (a) (as well as any other interval), .  c) There are three correct statements: It represents the car's velocity, it is the average velocity of the car over the first two hours, and it is the slope of the line.        Uses NiceTables   The figure below shows .   (Click on the graph for a larger version.)  If and , find for 1, 2, 3, 4, 5, 6, and fill these values in the following table.            1  2  3  4  5  6                                            Since , . For each we determine graphically: for regions where is constant, the integral over that region is just (length)(value of f); for regions that are triangular or trapezoidal, we calculate the area using either of (base)(height) (where the height is given by the value of and may be negative), or (length)(average height). Thus,        and, finally,  .        Units Help, once activated and clicked on   A rod has length 5 meters. At a distance meters from its left end, the density of the rod is given by g\/m.  (a) Complete the Riemann sum for the total mass of the rod (use in place of ):  mass =   (b) Convert the Riemann sum to an integral and find the exact mass.  mass =  (include units )             (a) Suppose we choose an , . If is a small fraction of a meter, then the density of the rod is approximately anywhere from to meters from the left end of the rod. The mass of the rod from to meters is therefore approximately . If we slice the rod into pieces, then a Riemann sum is , or, more loosely, . (b) The definite integral is        Check Units being Accepted when MathQuill is being used   The temperature, , in degrees Celsius, of a cup of coffee placed on the kitchen counter is given by , where is in minutes since the coffee was put on the counter.    Is positive or negative?    positive    negative    (Be sure that you are able to give a reason for your answer.)    What are the units of ?    Suppose that and . Fill in the blanks (including units where needed) and select the appropriate terms to complete the following statement about the temperature of the coffee in this case.  At minutes after the coffee was put on the counter, its   derivative    temperature    change in temperature   is and will   increase    decrease   by about in the next 30 seconds.                                          As the cup of coffee cools, the temperature decreases, so is negative.    Since , the units are degrees Celsius per minute (degC\/min).    The quantity represents the rate at which the coffee is cooling, in degrees per minute, 10 minutes after the cup is put on the counter. Thus we can complete the statement:    At 10 minutes after the coffee was put on the counter, its temperature is 72 degC and will decrease by about 0.4 degC in the next 30 seconds.        Click on the HelpLink when activated   For the following indefinite integral, find the full power series centered at and then give the first 5 nonzero terms of the power series and the open interval of convergence.                The open interval of convergence is: (Give your answer in interval notation .)                                           Weird Error in the Static Rendering   Match the following equations with their direction field. Clicking on each picture will give you an enlarged view. While you can probably solve this problem by guessing, it is useful to try to predict characteristics of the direction field and then match them to the picture.  Here are some handy characteristics to start with -- you will develop more as you practice.    Set equal to zero and look at how the derivative behaves along the -axis.    Do the same for the -axis by setting equal to    Consider the curve in the plane defined by setting -- this should correspond to the points in the picture where the slope is zero.    Setting equal to a constant other than zero gives the curve of points where the slope is that constant. These are called isoclines, and can be used to construct the direction field picture by hand.                  Error: PGbasicmacros: imageRow: Unknown displayMode: PTX.  Error: PGbasicmacros: imageRow: Unknown displayMode: PTX.        My note only said weird... not sure why   Given the differential equation .  List the constant (or equilibrium) solutions to this differential equation in increasing order and indicate whether or not these equilibria are stable, semi-stable, or unstable. (It helps to sketch the graph. )       stable    unstable    semi-stable         stable    unstable    semi-stable         stable    unstable    semi-stable         stable    unstable    semi-stable                              Problem changes after hitting submit   Calculate the integral:          giving or Solving for and , we find and , so        Another problem that changes after hitting submit   Find the volume of the solid obtained by rotating the region in the first quadrant bounded by , , and the -axis around the -axis.  Volume =        and radius . Thus and         "
},
{
  "id": "ACS__Preview__1-1",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#ACS__Preview__1-1",
  "type": "Exploration",
  "number": "2.6.1",
  "title": "Good test problem, scaffolded, dropdown, radio buttons, check that answers restore.",
  "body": " Good test problem, scaffolded, dropdown, radio buttons, check that answers restore    Suppose that the height of a ball (in feet) at time (in seconds) is given by the formula . This function is graphed below on the interval .    Part a Which labeled point (A-G) corresponds to the release of the ball?  How high (in feet) was the ball when it was released?  Which labeled point corresponds to the highest point of the ball?  When (in seconds after being released) did the ball reach its highest point?  Which labeled point corresponds to the ball hitting the ground?  How long (in seconds) after being released did the ball hit the ground?   Part b Which option best describes the behavior of the ball on the time interval ?   The ball is rising.    The ball is falling.    The ball changes direction.    The ball is released.    The ball hits the ground.    Which option best describes the behavior of the ball on the time interval ?   The ball is rising.    The ball is falling.    The ball changes direction.    The ball is released.    The ball hits the ground.    What occurs at the instant ?   The ball is rising.    The ball is falling.    The ball changes direction.    The ball is released.    The ball hits the ground.     Part c Consider the following expression.  Compute the value of .  What does this value measure geometrically?    slope . The slope of the line between the points and .    curvature . The curvature of the graph of on the interval .    area . The area under the graph of on the interval .    distance . The distance between the points and .    What does this value measure physically?    average velocity . The average velocity of the ball during the interval .    distance . The distance that the ball travels during the interval .    acceleration . The acceleration of the ball during the interval .    What are the units on ?   feet per second    feet    seconds    feet per second squared    foot seconds    none of these         "
},
{
  "id": "ACS__Preview__5-5",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#ACS__Preview__5-5",
  "type": "Exploration",
  "number": "2.6.2",
  "title": "Lots of dropdowns, using NiceTables, check that answers restore.",
  "body": " Lots of dropdowns, using NiceTables, check that answers restore    For each of the indefinite integrals below, the main question is to decide whether the integral can be evaluated using a basic antiderivative, -substitution, integration by parts, a combination of -substitution and integration by parts, or none of these other techniques.  For integrals for which your answer is affirmative ( -sub, by parts, combo), you should be able to state what and are, or what and are.     TABLE A    Method           Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These          TABLE B    Method           Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These          TABLE C    Method           Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These          TABLE D    Method           Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These             Basic Integral    u-Sub    By Parts    Combo    None of These                                                                                            "
},
{
  "id": "Library__Westmont__ActiveCalculus__Preview_7_1__preview_7_1_all",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__Westmont__ActiveCalculus__Preview_7_1__preview_7_1_all",
  "type": "Exploration",
  "number": "2.6.3",
  "title": "Old Checkbox macro.",
  "body": " Old Checkbox macro    The position of an object moving along a line is given by the function , where is measured in feet and in seconds. We determine that the velocity is feet per second.  How much does the position change over the time interval ?  Change in position = feet  Suppose you are told that the object's initial position . Determine , the object's position seconds later.    If you are told instead that the object's initial position is , what is ?    If we only know the velocity (but not the initial position), which of the following could be the position function?  Select all that apply.                   None of the above    If, in addition to knowing the velocity function is , we know the initial position , how many possibilities are there for ?    0    2    1    5    Infinitely many    none of the above                    feet. Therefore, the position function will be , where is the initial velocity.      "
},
{
  "id": "Library__Westmont__ActiveCalculus__Preview_6_3__preview_6_3_a",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__Westmont__ActiveCalculus__Preview_6_3__preview_6_3_a",
  "type": "Exploration",
  "number": "2.6.4",
  "title": "No possible correct answer for dropdown immediately after the first essay box.",
  "body": " No possible correct answer for dropdown immediately after the first essay box    Scenario A  In the following scenario, we consider the distribution of a quantity along an axis.  Suppose that the function models the density of traffic on a straight road, measured in cars per mile, where is number of miles east of a major interchange, and consider the definite integral .  (i) What are the units on the product ?  Units:   cars    miles    cars\/mile    miles\/car    cars*cars    miles*miles    (ii) What are the units on the definite integral and its Riemann sum approximation given by Units:   cars    miles    cars\/mile    miles\/car    cars*cars    miles*miles    (iii) Evaluate the definite integral and write one sentence to explain the meaning of the value you find.  Scenario B  In the following scenario, we consider the distribution of a quantity along an axis.  On a 6 foot long shelf filled with books, the function models the distribution of the weight of the books, measured in pounds per inch, where is the number of inches from the left end of the bookshelf. Let be given by the rule .  (i) What are the units on the product ?  Units:   pounds    inches    pound\/inch    inch\/pound    pound*pound    inch*inch    (ii) What are the units on the definite integral and its Riemann sum approximation given by Units:   pounds    inches    pound\/inch    inch\/pound    pound*pound    inch*inch    (iii) Evaluate the definite integral and write one sentence to explain the meaning of the value you find.              Undefined            "
},
{
  "id": "ajordan_8a-_2_Preview_sine_Taylor",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#ajordan_8a-_2_Preview_sine_Taylor",
  "type": "Exploration",
  "number": "2.6.5",
  "title": "Hardcoded by Alex, risk of being too long.",
  "body": " Hardcoded by Alex, risk of being too long    Let and let Our goal is to find the values of that make the sine function and its derivative values agree with those of the cubic polynomial at and to study the resulting degree approximation of the sine function.   As in previous work, the derivatives of and their respective values at are those shown in the following table. Compute the various derivatives of and evaluate them at accordingly, recording your results in the left side of the table.                                                                                      Now, set   and This implies , , , and .  Putting it all together, what is the resulting formula for                       Recall that the tangent line approximation to at is as plotted below. On the same axes, we ve plotted the cubic approximation you found in part (b).    What do you observe about the approximation generates compared to the tangent line approximation    The cubic approximation is closer to the function for more values of .    The tangent line approximation is closer to the function for more values of .    Both approximate the function equally well.         Compute and  What do you notice about the size and sign of those differences?           For about what values of does it appear that    For about what values of does it appear that               "
},
{
  "id": "ez-5-6-WW1",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#ez-5-6-WW1",
  "type": "Exercise",
  "number": "2.6.1",
  "title": "Runs the risk of being too long, depending on what students enter.",
  "body": "Runs the risk of being too long, depending on what students enter  In this problem, the notation \"SIMP(2)\" is actually what we have called \"SIMP(4)\" in our previous work. Different authors use different notation, and the author of this WeBWorK exercise chooses to write \"SIMP(n)\" where we have written \"SIMP(2n)\".    Note: for this problem, because later answers depend on earlier ones, you must enter answers for all answer blanks for the problem to be correctly graded. If you would like to get feedback before you completed all computations, enter a \"1\" for each answer you did not yet compute and then submit the problem. (But note that this will, obviously, result in a problem submission.)  (a) What is the exact value of ?    (b)  Find LEFT(2), RIGHT(2), TRAP(2), MID(2), and SIMP(2); compute the error for each.     LEFT(2)  RIGHT(2)  TRAP(2)  MID(2)  SIMP(2)    value         error         (c)  Repeat part (b) with (instead of ).     LEFT(4)  RIGHT(4)  TRAP(4)  MID(4)  SIMP(4)    value         error         (d)  For each rule in part (b), as goes from to , does the error go down approximately as you would expect? Explain by calculating the ratios of the errors:  Error LEFT(2)\/Error LEFT(4) =  Error RIGHT(2)\/Error RIGHT(4) =  Error TRAP(2)\/Error TRAP(4) =  Error MID(2)\/Error MID(4) =  Error SIMP(2)\/Error SIMP(4) =  (Be sure that you can explain in words why these do (or don't) make sense.)                                                                                                                                     (a)   (b) Computing the sums directly, since , we have LEFT(2) RIGHT(2) TRAP(2) MID(2) and SIMP(2) = (2 MID(2) + TRAP(2))\/3 . And the errors are just the actual value minus the approximate values, or error(LEFT(2)) = 114.457; error(RIGHT(2)) = -254.076; error(TRAP(2)) = -69.81; error(MID(2)) = 32.3841; and error(SIMP(2)) = -1.681. (c) Similarly, since , we have LEFT(4) = 73.9924; error = 73.4207 RIGHT(4) = 258.259; error = -110.846 TRAP(4) = 166.126; error = -18.713 MID(4) = 138.236; error = 9.177 SIMP(4) = 147.533; error = -0.12. (d) For LEFT and RIGHT, we expect the error to go down by 1\/2, and this is very roughly what we see. For MID and TRAP, we expect the error to go down by 1\/4, and this is approximately what we see. For SIMP, we expect the error to go down by 1\/16, again as observed.     "
},
{
  "id": "csafranski__5-_6HW_prob3",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#csafranski__5-_6HW_prob3",
  "type": "Exercise",
  "number": "2.6.2",
  "title": "Shortened version of question above, but told one student everything was wrong.",
  "body": "Shortened version of question above, but told one student everything was wrong   Note: for this problem, because later answers depend on earlier ones, you must enter answers for all answer blanks for the problem to be correctly graded. If you would like to get feedback before you completed all computations, enter a \"1\" for each answer you did not yet compute and then submit the problem. (But note that this will, obviously, result in a problem submission.)  (a) What is the exact value of ?    (b)  Find LEFT(2), RIGHT(2), TRAP(2), MID(2), and SIMP(4); compute the error for each.     LEFT(2)  RIGHT(2)  TRAP(2)  MID(2)  SIMP(4)    value         error         (c)  Repeat part (b) with (instead of ).     LEFT(4)  RIGHT(4)  TRAP(4)  MID(4)  SIMP(8)    value         error                                                                                                                   (a)   (b) Computing the sums directly, since , we have LEFT(2) RIGHT(2) TRAP(2) MID(2) and SIMP(4) = (2 MID(2) + TRAP(2))\/3 . And the errors are just the actual value minus the approximate values, or error(LEFT(2)) = 114.457; error(RIGHT(2)) = -254.076; error(TRAP(2)) = -69.81; error(MID(2)) = 32.3841; and error(SIMP(4)) = -1.681. (c) Similarly, since , we have LEFT(4) = 73.9924; error = 73.4207 RIGHT(4) = 258.259; error = -110.846 TRAP(4) = 166.126; error = -18.713 MID(4) = 138.236; error = 9.177 SIMP(8) = 147.533; error = -0.12. (d) For LEFT and RIGHT, we expect the error to go down by 1\/2, and this is very roughly what we see. For MID and TRAP, we expect the error to go down by 1\/4, and this is approximately what we see. For SIMP, we expect the error to go down by 1\/16, again as observed.     "
},
{
  "id": "Library__LoyolaChicago__Precalc__Chap1Sec2__Q10.pg",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__LoyolaChicago__Precalc__Chap1Sec2__Q10.pg",
  "type": "Exercise",
  "number": "2.6.3",
  "title": "Uses old table macros, but parserCheckboxList.",
  "body": "Uses old table macros, but parserCheckboxList   The graph below shows the distance traveled, (in miles) as a function of time, (in hours).   (Click on the graph to get a larger version.)  a) For each of the intervals, find the values of and between the indicated start and end times. Enter your answers in their respective columns in the table below.    Time Interval      t = 1 to t = 4      t = 1.5 to t = 3      t = 2 to t = 4      b) Based on your results from (a) it follows that the average rate of change of is constant, it does not depend over which interval of time you choose. What is the constant rate of change of ?    c) Which of the statements below CORRECTLY explains the significance of your answer to part (b)? Select ALL that apply (more than one may apply).   It is the total distance the car travels in five hours.    It represents the car's velocity.    It is the acceleration of the car over the five hour time interval.    It is how far the car will travel in a half-hour.    It is the slope of the line.    It is the average velocity of the car over the first two hours.    None of the above.                                             a) Over the first interval to , and .  Similarly, over the second interval to , and .  Finally, over the last interval to , and .  b) Notice that for each of the three intervals in (a) (as well as any other interval), .  c) There are three correct statements: It represents the car's velocity, it is the average velocity of the car over the first two hours, and it is the slope of the line.      "
},
{
  "id": "Library__Michigan__Chap5Sec4__Q03",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__Michigan__Chap5Sec4__Q03",
  "type": "Exercise",
  "number": "2.6.4",
  "title": "Uses NiceTables.",
  "body": "Uses NiceTables   The figure below shows .   (Click on the graph for a larger version.)  If and , find for 1, 2, 3, 4, 5, 6, and fill these values in the following table.            1  2  3  4  5  6                                            Since , . For each we determine graphically: for regions where is constant, the integral over that region is just (length)(value of f); for regions that are triangular or trapezoidal, we calculate the area using either of (base)(height) (where the height is given by the value of and may be negative), or (length)(average height). Thus,        and, finally,  .      "
},
{
  "id": "Library__Michigan__Chap8Sec4__Q03",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__Michigan__Chap8Sec4__Q03",
  "type": "Exercise",
  "number": "2.6.5",
  "title": "Units Help, once activated and clicked on.",
  "body": "Units Help, once activated and clicked on   A rod has length 5 meters. At a distance meters from its left end, the density of the rod is given by g\/m.  (a) Complete the Riemann sum for the total mass of the rod (use in place of ):  mass =   (b) Convert the Riemann sum to an integral and find the exact mass.  mass =  (include units )             (a) Suppose we choose an , . If is a small fraction of a meter, then the density of the rod is approximately anywhere from to meters from the left end of the rod. The mass of the rod from to meters is therefore approximately . If we slice the rod into pieces, then a Riemann sum is , or, more loosely, . (b) The definite integral is      "
},
{
  "id": "Library__Michigan__Chap2Sec4__Q01",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__Michigan__Chap2Sec4__Q01",
  "type": "Exercise",
  "number": "2.6.6",
  "title": "Check Units being Accepted when MathQuill is being used.",
  "body": "Check Units being Accepted when MathQuill is being used   The temperature, , in degrees Celsius, of a cup of coffee placed on the kitchen counter is given by , where is in minutes since the coffee was put on the counter.    Is positive or negative?    positive    negative    (Be sure that you are able to give a reason for your answer.)    What are the units of ?    Suppose that and . Fill in the blanks (including units where needed) and select the appropriate terms to complete the following statement about the temperature of the coffee in this case.  At minutes after the coffee was put on the counter, its   derivative    temperature    change in temperature   is and will   increase    decrease   by about in the next 30 seconds.                                          As the cup of coffee cools, the temperature decreases, so is negative.    Since , the units are degrees Celsius per minute (degC\/min).    The quantity represents the rate at which the coffee is cooling, in degrees per minute, 10 minutes after the cup is put on the counter. Thus we can complete the statement:    At 10 minutes after the coffee was put on the counter, its temperature is 72 degC and will decrease by about 0.4 degC in the next 30 seconds.      "
},
{
  "id": "Library__WinonaState__StewartCalcEarlyTran7ed__Chap11Section09__SCalcET7-11-9-026",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__WinonaState__StewartCalcEarlyTran7ed__Chap11Section09__SCalcET7-11-9-026",
  "type": "Exercise",
  "number": "2.6.7",
  "title": "Click on the HelpLink when activated.",
  "body": "Click on the HelpLink when activated   For the following indefinite integral, find the full power series centered at and then give the first 5 nonzero terms of the power series and the open interval of convergence.                The open interval of convergence is: (Give your answer in interval notation .)                                         "
},
{
  "id": "Library__Rochester__setDiffEQ2DirectionFields__ur_de_2_3",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__Rochester__setDiffEQ2DirectionFields__ur_de_2_3",
  "type": "Exercise",
  "number": "2.6.8",
  "title": "Weird Error in the Static Rendering.",
  "body": "Weird Error in the Static Rendering   Match the following equations with their direction field. Clicking on each picture will give you an enlarged view. While you can probably solve this problem by guessing, it is useful to try to predict characteristics of the direction field and then match them to the picture.  Here are some handy characteristics to start with -- you will develop more as you practice.    Set equal to zero and look at how the derivative behaves along the -axis.    Do the same for the -axis by setting equal to    Consider the curve in the plane defined by setting -- this should correspond to the points in the picture where the slope is zero.    Setting equal to a constant other than zero gives the curve of points where the slope is that constant. These are called isoclines, and can be used to construct the direction field picture by hand.                  Error: PGbasicmacros: imageRow: Unknown displayMode: PTX.  Error: PGbasicmacros: imageRow: Unknown displayMode: PTX.      "
},
{
  "id": "Library__Rochester__setDiffEQ6AutonomousStability__ur_de_6_4",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__Rochester__setDiffEQ6AutonomousStability__ur_de_6_4",
  "type": "Exercise",
  "number": "2.6.9",
  "title": "My note only said weird... not sure why.",
  "body": "My note only said weird... not sure why   Given the differential equation .  List the constant (or equilibrium) solutions to this differential equation in increasing order and indicate whether or not these equilibria are stable, semi-stable, or unstable. (It helps to sketch the graph. )       stable    unstable    semi-stable         stable    unstable    semi-stable         stable    unstable    semi-stable         stable    unstable    semi-stable                            "
},
{
  "id": "Library__Michigan__Chap7Sec4__Q33",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__Michigan__Chap7Sec4__Q33",
  "type": "Exercise",
  "number": "2.6.10",
  "title": "Problem changes after hitting submit.",
  "body": "Problem changes after hitting submit   Calculate the integral:          giving or Solving for and , we find and , so      "
},
{
  "id": "Library__Michigan__Chap8Sec2__Q22",
  "level": "2",
  "url": "sec-ac-in-runestone-tests.html#Library__Michigan__Chap8Sec2__Q22",
  "type": "Exercise",
  "number": "2.6.11",
  "title": "Another problem that changes after hitting submit.",
  "body": "Another problem that changes after hitting submit   Find the volume of the solid obtained by rotating the region in the first quadrant bounded by , , and the -axis around the -axis.  Volume =        and radius . Thus and       "
},
{
  "id": "solutions-1",
  "level": "1",
  "url": "solutions-1.html",
  "type": "Appendix",
  "number": "A",
  "title": "Hints, Answers, and Solutions",
  "body": " Hints, Answers, and Solutions  "
},
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
