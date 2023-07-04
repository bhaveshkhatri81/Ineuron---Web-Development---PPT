// Environment Record (ER) or Variable Object (VO):

// A unique variable object for each execution context is used to store variables, function declarations, and function
// arguments.
// The variable object represents the global scope and contains global variables and functions in the context of global
// execution.
// The variable object for function execution contexts holds local variables, function parameters, and function
// declarations. It also represents the function scope.
// Scope Chain:
// The layered structure of scopes is represented by the scope chain, which is a list of variable objects.
// During code execution, it is utilised to resolve variable references.
// The variable object of the currently running execution context comes first in the scope chain, followed by the variable
// objects of its parent contexts.
// Access to variables in outer (enclosing) scopes is made possible by the scope chain.
// This Value:
// This value designates the object that is doing the function right now.
// It offers a mechanism to access object methods and properties inside of a function.

var a = 10;

function foo() {
  var b = 20;

  function bar() {
    var c = 30;
    console.log(a + b + c);
  }

  bar();
}

foo();
