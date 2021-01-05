<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [cheat-button.js](#srchandlerscheat-buttonjs)
  - [get-newQuestion.js](#srchandlersget-newQuestionjs)
  - [show-answers.js](#srchandlersshow-answersjs)
  - [start-button.js](#srchandlersstart-buttonjs)
- [init](#init)
  - [index.js](#srcinitindexjs)
- [listeners](#listeners)
  - [cheat-button.js](#srclistenerscheat-buttonjs)
  - [get-newQuestion.js](#srclistenersget-newQuestionjs)
  - [show-answers.js](#srclistenersshow-answersjs)
  - [start-button.js](#srclistenersstart-buttonjs)
- [logic](#logic)
  - [get-CurrentQuestion.js](#srclogicget-CurrentQuestionjs)
  - [get-answer.js](#srclogicget-answerjs)
- [views](#views)
- [data.js](#srcdatajs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# Handlers

Handler function define user interactions. They will:

- read user input from events and from the DOM
- read and modify program data variables
- process user data with logic functions
- update the DOM to show changes to the user
- log any important information for developers

---

### [./src/handlers/cheat-button.js](./src/handlers/cheat-button.js?study)

---

### [./src/handlers/get-newQuestion.js](./src/handlers/get-newQuestion.js?study)

---

### [./src/handlers/show-answers.js](./src/handlers/show-answers.js?study)

---

### [./src/handlers/start-button.js](./src/handlers/start-button.js?study)

[TOP](#DOCS)

---

---

# init

---

### [./src/init/index.js](./src/init/index.js?study)

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/cheat-button.js](./src/listeners/cheat-button.js?study)

---

### [./src/listeners/get-newQuestion.js](./src/listeners/get-newQuestion.js?study)

---

### [./src/listeners/show-answers.js](./src/listeners/show-answers.js?study)

---

### [./src/listeners/start-button.js](./src/listeners/start-button.js?study)

[TOP](#DOCS)

---

---

# Logic

Logic functions are pure functions. They take primitives, objects or arrays as arguments and they return primitives, objects or arrays. Handlers will use logic functions to transform user input.

Logic functions will _never_ ...

- read from the DOM
- write to the DOM
- use events
- use prompt/alert/confirm
- use data that is not passed as a parameter

---

### [./src/logic/get-CurrentQuestion.js](./src/logic/get-CurrentQuestion.js?study)

---

### [./src/logic/get-answer.js](./src/logic/get-answer.js?study)

<a name="getAnswer"></a>

## getAnswer(correctAnswer, answerArray) ⇒ <code>number</code>

returns one random incorrect answers from the answers array

**Returns**: <code>number</code> - an index of incorrect answer

| Param         | Type                              | Description                                 |
| ------------- | --------------------------------- | ------------------------------------------- |
| correctAnswer | <code>number</code>               | correct answer of the current question      |
| answerArray   | <code>Array.&lt;string&gt;</code> | an array of answers to the current question |

[TOP](#DOCS)

---

---

# Views

View functions are pure functions used to render JS data into DOM elements. They take primitives, objects or arrays as arguments and they return primitives, objects or arrays. Handlers will use view functions to render program state and update the UI.

VIEW functions will _never_ ...

- read from the DOM
  - they will create _new_ DOM elements
- write to the DOM
  - they return a DOM element that the handler will append
- use events
- use prompt/alert/confirm
- use data that is not passed as a parameter

[TOP](#DOCS)

---

---

## [./src/data.js](./src/data.js?study)

<a name="quizData"></a>

## quizData

<!-- END DOCS -->