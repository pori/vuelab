import { head, tail } from "./utils";

/**
 * Takes a camel, snake, or "dash" case string compeonent name and
 * generates a title case string. Optionally removes namespaces from
 * the head of the string (case-sensitive).
 *
 * ```js
 * formatName("MyButton"); // => "My Button"
 * formatName("my_button"); // => "My Button"
 * formatName("my-button"); // => "My Button"
 * formatName("VButton", 'V'); // => "Button"
 * ```
 *
 * @param {String} name
 * @param {String} namespace
 * @return {String}
 */
export function formatName(componentName) {
  return (
    componentName.charAt(0).toUpperCase() + componentName.slice(1)
  ).replace(/([a-z])([A-Z])/g, "$1 $2");
}

/**
 *
 *
 *
 *
 * @param {String} path
 * @return
 */
export function stripEnds(path) {
  return path.replace(".experiment.vue", "").replace(".", "");
}

/**
 * Takes a path string and returns an object with the formatted names of
 * categories and the containing component. Optionally removes namespaces
 * from the head of the string (case-sensitive).
 *
 * ```js
 * getHierarchy("buttons/MyButton"); // => { categories: ['Buttons'], component: 'My Button' }
 * getHierarchy("special/buttons/MyButton"); // => { categories: ['Special', 'Buttons'], component: 'My Button' }
 * getHierarchy("buttons/VButton", 'V'); // => { categories: ['Buttons'], component: 'Button' }
 * ```
 *
 * @param {String} path
 * @param {String} namespace
 * @return {object}
 */
export function getHierarchy(path) {
  return path;
}

/**
 *
 *
 * ```js
 * const components = [
 *  "buttons/Button",
 *  "buttons/BigButton",
 *  "input/TextInput",
 *  "input/EmailInput",
 *  "input/PasswordInput"
 * ];
 *
 * makeHierarchy(components);
 * ```
 *
 * ```js
 * [
 *  {
 *    category: "Buttons",
 *    entries: [
 *      { name: "Button", path: "buttons/Button" },
 *      { name: "Big Button", path: "buttons/BigButton" }
 *    ]
 *  },
 *  {
 *    category: "Input",
 *    entries: [
 *      { name: "Text Input", path: "input/TextInput" },
 *      { name: "Email Input", path: "input/EmailInput" },
 *      { name: "Password Input", path: "input/PasswordInput" },
 *    ]
 *  }
 * ]
 * ```
 *
 * @param {array} components
 * @return {object}
 */
export function makeHierarchy(components, namespace) {
  const hierarchy = {};

  components.forEach(c => {
    const path = stripEnds(c);
    const parts = path.split("/").slice(1); // First entry is '', so we'll remove that.

    const category = formatName(head(parts));

    if (!hierarchy[category]) {
      hierarchy[category] = [];
    }

    hierarchy[category].push({
      name: formatName(tail(parts), namespace),
      path
    });
  });

  return Object.keys(hierarchy).map(category => ({
    category,
    entries: hierarchy[category]
  }));
}
