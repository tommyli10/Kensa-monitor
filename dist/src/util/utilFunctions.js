"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryTransform = exports.randomBgColor = void 0;
// Generate random colors. Used to generate colors for bar chart in OperationTable component
var randomBgColor = function () {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
};
exports.randomBgColor = randomBgColor;
// Util function to transform query string to structure used for D3 Tree
var queryTransform = function (query) {
    // Clean the query from '\n' and spaces and non wanted characters and form an array
    var clearQuery = function (end, str, isFirst) {
        if (end === void 0) { end = 0; }
        if (str === void 0) { str = ''; }
        if (isFirst === void 0) { isFirst = true; }
        var queryArr = [];
        while (end < query.length) {
            switch (query[end]) {
                case ' ':
                    !isFirst && str.length ? queryArr.push(str.split('\n').join('')) : isFirst = false;
                    str = '';
                    break;
                case '}':
                    queryArr.push('}');
                    end++;
                    break;
                case '(':
                    while (query[end] !== ')' && end < query.length) {
                        end++;
                    }
                    break;
                default:
                    str = isFirst ? str : str += query[end];
            }
            end++;
        }
        return queryArr;
    };
    // Build array with clean query
    var arr = clearQuery();
    // If name is not provided add default as name
    if (arr[0] === '{')
        arr.unshift('default name');
    var treeObject = { name: arr[0], children: [] };
    // recursively built the nested objects in the format required for the D3 tree component
    // Format: { name: string!, attributes: string, children: Array<string> }
    var recurseFunc = function (arr, index) {
        var _a;
        if (index === void 0) { index = 0; }
        var arrObjs = [];
        var numObj = 0;
        while (index < arr.length) {
            switch (arr[index]) {
                case '{':
                    _a = recurseFunc(arr, index + 1), arrObjs[numObj++].children = _a[0], index = _a[1];
                    break;
                case '}':
                    return [arrObjs, index];
                default:
                    arrObjs.push({ name: arr[index] });
            }
            index++;
        }
        return [arrObjs, index];
    };
    // If object has an opening bracket build the children array with the parameters
    if (arr[1][0] === '{')
        treeObject.children = recurseFunc(arr.slice(2, arr.length))[0];
    return treeObject;
};
exports.queryTransform = queryTransform;
//# sourceMappingURL=utilFunctions.js.map