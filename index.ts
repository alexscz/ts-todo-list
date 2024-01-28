<!DOCTYPE html>
<html lang="en">
  <head>
    <title>TSBeginner</title>
    <style>
      * {
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <button id="toggleMode">Toggle Mode</button>
      <hr />
      <form id="taskForm">
        <fieldset id="todoSet">
          <legend>Todo:</legend>
          <label for="todoDescription">Description:</label>
          <input type="text" name="todoDescription" required />
          <button type="submit">Submit</button>
        </fieldset>
        <fieldset id="reminderSet" style="display: none" disabled>
          <legend>Reminder:</legend>
          <label for="reminderDescription">Description:</label>
          <input type="text" name="reminderDescription" required />
          <label for="scheduleDate">Date:</label>
          <input type="date" name="scheduleDate" required />
          <label for="notification">Notify by:</label>
          <select name="notification">
            <option value="SMS">SMS</option>
            <option value="EMAIL">EMAIL</option>
            <option value="PUSH_NOTIFICATION">Push notification</option>
          </select>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      <br />
      <ul id="tasksList" style="white-space: pre-line; list-style: none"></ul>
    </div>
    <script src="./dist/index.js"></script>
  </body>
</html>
