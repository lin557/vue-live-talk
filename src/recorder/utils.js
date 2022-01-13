/**
 * Get the keys of an Object
 *
 * @param {Object}
 *        The Object to get the keys from
 *
 * @return {string[]}
 *         An array of the keys from the object. Returns an empty array if the
 *         object passed in was invalid or had no keys.
 *
 * @private
 */
const keys = function (object) {
  return isObject(object) ? Object.keys(object) : []
}

/**
 * Returns whether a value is an object of any kind - including DOM nodes,
 * arrays, regular expressions, etc. Not functions, though.
 *
 * This avoids the gotcha where using `typeof` on a `null` value
 * results in `'object'`.
 *
 * @param  {Object} value
 * @return {boolean}
 */
export function isObject(value) {
  return !!value && typeof value === 'object'
}

/**
 * Returns whether an object appears to be a "plain" object - that is, a
 * direct instance of `Object`.
 *
 * @param  {Object} value
 * @return {boolean}
 */
export function isPlain(value) {
  return (
    isObject(value) &&
    toString.call(value) === '[object Object]' &&
    value.constructor === Object
  )
}

/**
 * Array-like iteration for objects.
 *
 * @param {Object} object
 *        The object to iterate over
 *
 * @param {obj:EachCallback} fn
 *        The callback function which is called for each key in the object.
 */
export function each(object, fn) {
  keys(object).forEach((key) => fn(object[key], key))
}

/**
 * Merge two objects recursively.
 *
 * Performs a deep merge like
 * {@link https://lodash.com/docs/4.17.10#merge|lodash.merge}, but only merges
 * plain objects (not arrays, elements, or anything else).
 *
 * Non-plain object values will be copied directly from the right-most
 * argument.
 *
 * @static
 * @param   {Object[]} sources
 *          One or more objects to merge into a new object.
 *
 * @return {Object}
 *          A new object that is the merged result of all sources.
 */
export function mergeOptions(...sources) {
  const result = {}
  sources.forEach((source) => {
    if (!source) {
      return
    }
    each(source, (value, key) => {
      if (!isPlain(value)) {
        result[key] = value
        return
      }
      if (!isPlain(result[key])) {
        result[key] = {}
      }
      result[key] = mergeOptions(result[key], value)
    })
  })
  return result
}
