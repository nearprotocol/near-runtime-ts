(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["transformer"] = factory();
	else
		root["transformer"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/assemblyscript/src/ast.ts":
/*!************************************************!*\
  !*** ./node_modules/assemblyscript/src/ast.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Abstract syntax tree representing a source file once parsed.
 * @module ast
 */ /***/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! ./common */ "./node_modules/assemblyscript/src/common.ts");
var tokenizer_1 = __webpack_require__(/*! ./tokenizer */ "./node_modules/assemblyscript/src/tokenizer.ts");
exports.Token = tokenizer_1.Token;
exports.Range = tokenizer_1.Range;
var util_1 = __webpack_require__(/*! ./util */ "./node_modules/assemblyscript/src/util/index.ts");
/** Indicates the kind of a node. */
var NodeKind;
(function (NodeKind) {
    NodeKind[NodeKind["SOURCE"] = 0] = "SOURCE";
    // types
    NodeKind[NodeKind["NAMEDTYPE"] = 1] = "NAMEDTYPE";
    NodeKind[NodeKind["FUNCTIONTYPE"] = 2] = "FUNCTIONTYPE";
    NodeKind[NodeKind["TYPENAME"] = 3] = "TYPENAME";
    NodeKind[NodeKind["TYPEPARAMETER"] = 4] = "TYPEPARAMETER";
    NodeKind[NodeKind["PARAMETER"] = 5] = "PARAMETER";
    // expressions
    NodeKind[NodeKind["IDENTIFIER"] = 6] = "IDENTIFIER";
    NodeKind[NodeKind["ASSERTION"] = 7] = "ASSERTION";
    NodeKind[NodeKind["BINARY"] = 8] = "BINARY";
    NodeKind[NodeKind["CALL"] = 9] = "CALL";
    NodeKind[NodeKind["CLASS"] = 10] = "CLASS";
    NodeKind[NodeKind["COMMA"] = 11] = "COMMA";
    NodeKind[NodeKind["ELEMENTACCESS"] = 12] = "ELEMENTACCESS";
    NodeKind[NodeKind["FALSE"] = 13] = "FALSE";
    NodeKind[NodeKind["FUNCTION"] = 14] = "FUNCTION";
    NodeKind[NodeKind["INSTANCEOF"] = 15] = "INSTANCEOF";
    NodeKind[NodeKind["LITERAL"] = 16] = "LITERAL";
    NodeKind[NodeKind["NEW"] = 17] = "NEW";
    NodeKind[NodeKind["NULL"] = 18] = "NULL";
    NodeKind[NodeKind["PARENTHESIZED"] = 19] = "PARENTHESIZED";
    NodeKind[NodeKind["PROPERTYACCESS"] = 20] = "PROPERTYACCESS";
    NodeKind[NodeKind["TERNARY"] = 21] = "TERNARY";
    NodeKind[NodeKind["SUPER"] = 22] = "SUPER";
    NodeKind[NodeKind["THIS"] = 23] = "THIS";
    NodeKind[NodeKind["TRUE"] = 24] = "TRUE";
    NodeKind[NodeKind["CONSTRUCTOR"] = 25] = "CONSTRUCTOR";
    NodeKind[NodeKind["UNARYPOSTFIX"] = 26] = "UNARYPOSTFIX";
    NodeKind[NodeKind["UNARYPREFIX"] = 27] = "UNARYPREFIX";
    // statements
    NodeKind[NodeKind["BLOCK"] = 28] = "BLOCK";
    NodeKind[NodeKind["BREAK"] = 29] = "BREAK";
    NodeKind[NodeKind["CONTINUE"] = 30] = "CONTINUE";
    NodeKind[NodeKind["DO"] = 31] = "DO";
    NodeKind[NodeKind["EMPTY"] = 32] = "EMPTY";
    NodeKind[NodeKind["EXPORT"] = 33] = "EXPORT";
    NodeKind[NodeKind["EXPORTDEFAULT"] = 34] = "EXPORTDEFAULT";
    NodeKind[NodeKind["EXPORTIMPORT"] = 35] = "EXPORTIMPORT";
    NodeKind[NodeKind["EXPRESSION"] = 36] = "EXPRESSION";
    NodeKind[NodeKind["FOR"] = 37] = "FOR";
    NodeKind[NodeKind["IF"] = 38] = "IF";
    NodeKind[NodeKind["IMPORT"] = 39] = "IMPORT";
    NodeKind[NodeKind["RETURN"] = 40] = "RETURN";
    NodeKind[NodeKind["SWITCH"] = 41] = "SWITCH";
    NodeKind[NodeKind["THROW"] = 42] = "THROW";
    NodeKind[NodeKind["TRY"] = 43] = "TRY";
    NodeKind[NodeKind["VARIABLE"] = 44] = "VARIABLE";
    NodeKind[NodeKind["VOID"] = 45] = "VOID";
    NodeKind[NodeKind["WHILE"] = 46] = "WHILE";
    // declaration statements
    NodeKind[NodeKind["CLASSDECLARATION"] = 47] = "CLASSDECLARATION";
    NodeKind[NodeKind["ENUMDECLARATION"] = 48] = "ENUMDECLARATION";
    NodeKind[NodeKind["ENUMVALUEDECLARATION"] = 49] = "ENUMVALUEDECLARATION";
    NodeKind[NodeKind["FIELDDECLARATION"] = 50] = "FIELDDECLARATION";
    NodeKind[NodeKind["FUNCTIONDECLARATION"] = 51] = "FUNCTIONDECLARATION";
    NodeKind[NodeKind["IMPORTDECLARATION"] = 52] = "IMPORTDECLARATION";
    NodeKind[NodeKind["INDEXSIGNATUREDECLARATION"] = 53] = "INDEXSIGNATUREDECLARATION";
    NodeKind[NodeKind["INTERFACEDECLARATION"] = 54] = "INTERFACEDECLARATION";
    NodeKind[NodeKind["METHODDECLARATION"] = 55] = "METHODDECLARATION";
    NodeKind[NodeKind["NAMESPACEDECLARATION"] = 56] = "NAMESPACEDECLARATION";
    NodeKind[NodeKind["TYPEDECLARATION"] = 57] = "TYPEDECLARATION";
    NodeKind[NodeKind["VARIABLEDECLARATION"] = 58] = "VARIABLEDECLARATION";
    // special
    NodeKind[NodeKind["DECORATOR"] = 59] = "DECORATOR";
    NodeKind[NodeKind["EXPORTMEMBER"] = 60] = "EXPORTMEMBER";
    NodeKind[NodeKind["SWITCHCASE"] = 61] = "SWITCHCASE";
    NodeKind[NodeKind["COMMENT"] = 62] = "COMMENT";
})(NodeKind = exports.NodeKind || (exports.NodeKind = {}));
/** Checks if a node represents a constant value. */
function nodeIsConstantValue(kind) {
    switch (kind) {
        case NodeKind.LITERAL:
        case NodeKind.NULL:
        case NodeKind.TRUE:
        case NodeKind.FALSE: return true;
    }
    return false;
}
exports.nodeIsConstantValue = nodeIsConstantValue;
/** Checks if a node might be callable. */
function nodeIsCallable(kind) {
    switch (kind) {
        case NodeKind.IDENTIFIER:
        case NodeKind.ASSERTION: // if kind=NONNULL
        case NodeKind.CALL:
        case NodeKind.ELEMENTACCESS:
        case NodeKind.PARENTHESIZED:
        case NodeKind.PROPERTYACCESS:
        case NodeKind.SUPER: return true;
    }
    return false;
}
exports.nodeIsCallable = nodeIsCallable;
/** Checks if a node might be callable with generic arguments. */
function nodeIsGenericCallable(kind) {
    switch (kind) {
        case NodeKind.IDENTIFIER:
        case NodeKind.PROPERTYACCESS: return true;
    }
    return false;
}
exports.nodeIsGenericCallable = nodeIsGenericCallable;
/** Base class of all nodes. */
var Node = /** @class */ (function () {
    function Node() {
    }
    // types
    Node.createTypeName = function (name, range) {
        var typeName = new TypeName();
        typeName.range = range;
        typeName.identifier = name;
        typeName.next = null;
        return typeName;
    };
    Node.createSimpleTypeName = function (name, range) {
        return Node.createTypeName(Node.createIdentifierExpression(name, range), range);
    };
    Node.createNamedType = function (name, typeArguments, isNullable, range) {
        var type = new NamedTypeNode();
        type.range = range;
        type.name = name;
        type.typeArguments = typeArguments;
        type.isNullable = isNullable;
        return type;
    };
    Node.createFunctionType = function (parameters, returnType, explicitThisType, isNullable, range) {
        var type = new FunctionTypeNode();
        type.range = range;
        type.parameters = parameters;
        type.returnType = returnType;
        type.explicitThisType = explicitThisType;
        type.isNullable = isNullable;
        return type;
    };
    Node.createOmittedType = function (range) {
        return Node.createNamedType(Node.createSimpleTypeName("", range), null, false, range);
    };
    Node.createTypeParameter = function (name, extendsType, defaultType, range) {
        var elem = new TypeParameterNode();
        elem.range = range;
        elem.name = name;
        elem.extendsType = extendsType;
        elem.defaultType = defaultType;
        return elem;
    };
    Node.createParameter = function (name, type, initializer, kind, range) {
        var elem = new ParameterNode();
        elem.range = range;
        elem.name = name;
        elem.type = type;
        elem.initializer = initializer;
        elem.parameterKind = kind;
        return elem;
    };
    // special
    Node.createDecorator = function (name, args, range) {
        var stmt = new DecoratorNode();
        stmt.range = range;
        stmt.name = name;
        stmt.arguments = args;
        stmt.decoratorKind = DecoratorKind.fromNode(name);
        return stmt;
    };
    Node.createComment = function (text, kind, range) {
        var node = new CommentNode();
        node.range = range;
        node.commentKind = kind;
        node.text = text;
        return node;
    };
    // expressions
    Node.createIdentifierExpression = function (name, range, isQuoted) {
        if (isQuoted === void 0) { isQuoted = false; }
        var expr = new IdentifierExpression();
        expr.range = range;
        expr.text = name; // TODO: extract from range
        expr.symbol = name; // TODO: Symbol.for(name)
        expr.isQuoted = isQuoted;
        return expr;
    };
    Node.createEmptyIdentifierExpression = function (range) {
        var expr = new IdentifierExpression();
        expr.range = range;
        expr.text = "";
        return expr;
    };
    Node.createArrayLiteralExpression = function (elements, range) {
        var expr = new ArrayLiteralExpression();
        expr.range = range;
        expr.elementExpressions = elements;
        return expr;
    };
    Node.createAssertionExpression = function (assertionKind, expression, toType, range) {
        var expr = new AssertionExpression();
        expr.range = range;
        expr.assertionKind = assertionKind;
        expr.expression = expression;
        expr.toType = toType;
        return expr;
    };
    Node.createBinaryExpression = function (operator, left, right, range) {
        var expr = new BinaryExpression();
        expr.range = range;
        expr.operator = operator;
        expr.left = left;
        expr.right = right;
        return expr;
    };
    Node.createCallExpression = function (expression, typeArgs, args, range) {
        var expr = new CallExpression();
        expr.range = range;
        expr.expression = expression;
        expr.typeArguments = typeArgs;
        expr.arguments = args;
        return expr;
    };
    Node.createClassExpression = function (declaration) {
        var expr = new ClassExpression();
        expr.range = declaration.range;
        expr.declaration = declaration;
        return expr;
    };
    Node.createCommaExpression = function (expressions, range) {
        var expr = new CommaExpression();
        expr.range = range;
        expr.expressions = expressions;
        return expr;
    };
    Node.createConstructorExpression = function (range) {
        var expr = new ConstructorExpression();
        expr.range = range;
        return expr;
    };
    Node.createElementAccessExpression = function (expression, element, range) {
        var expr = new ElementAccessExpression();
        expr.range = range;
        expr.expression = expression;
        expr.elementExpression = element;
        return expr;
    };
    Node.createFalseExpression = function (range) {
        var expr = new FalseExpression();
        expr.range = range;
        return expr;
    };
    Node.createFloatLiteralExpression = function (value, range) {
        var expr = new FloatLiteralExpression();
        expr.range = range;
        expr.value = value;
        return expr;
    };
    Node.createFunctionExpression = function (declaration) {
        var expr = new FunctionExpression();
        expr.range = declaration.range;
        expr.declaration = declaration;
        return expr;
    };
    Node.createInstanceOfExpression = function (expression, isType, range) {
        var expr = new InstanceOfExpression();
        expr.range = range;
        expr.expression = expression;
        expr.isType = isType;
        return expr;
    };
    Node.createIntegerLiteralExpression = function (value, range) {
        var expr = new IntegerLiteralExpression();
        expr.range = range;
        expr.value = value;
        return expr;
    };
    Node.createNewExpression = function (expression, typeArgs, args, range) {
        var expr = new NewExpression();
        expr.range = range;
        expr.expression = expression;
        expr.typeArguments = typeArgs;
        expr.arguments = args;
        return expr;
    };
    Node.createNullExpression = function (range) {
        var expr = new NullExpression();
        expr.range = range;
        return expr;
    };
    Node.createObjectLiteralExpression = function (names, values, range) {
        var expr = new ObjectLiteralExpression();
        expr.range = range;
        expr.names = names;
        expr.values = values;
        return expr;
    };
    Node.createParenthesizedExpression = function (expression, range) {
        var expr = new ParenthesizedExpression();
        expr.range = range;
        expr.expression = expression;
        return expr;
    };
    Node.createPropertyAccessExpression = function (expression, property, range) {
        var expr = new PropertyAccessExpression();
        expr.range = range;
        expr.expression = expression;
        expr.property = property;
        return expr;
    };
    Node.createRegexpLiteralExpression = function (pattern, flags, range) {
        var expr = new RegexpLiteralExpression();
        expr.range = range;
        expr.pattern = pattern;
        expr.patternFlags = flags;
        return expr;
    };
    Node.createTernaryExpression = function (condition, ifThen, ifElse, range) {
        var expr = new TernaryExpression();
        expr.range = range;
        expr.condition = condition;
        expr.ifThen = ifThen;
        expr.ifElse = ifElse;
        return expr;
    };
    Node.createStringLiteralExpression = function (value, range) {
        var expr = new StringLiteralExpression();
        expr.range = range;
        expr.value = value;
        return expr;
    };
    Node.createSuperExpression = function (range) {
        var expr = new SuperExpression();
        expr.range = range;
        return expr;
    };
    Node.createThisExpression = function (range) {
        var expr = new ThisExpression();
        expr.range = range;
        return expr;
    };
    Node.createTrueExpression = function (range) {
        var expr = new TrueExpression();
        expr.range = range;
        return expr;
    };
    Node.createUnaryPostfixExpression = function (operator, operand, range) {
        var expr = new UnaryPostfixExpression();
        expr.range = range;
        expr.operator = operator;
        expr.operand = operand;
        return expr;
    };
    Node.createUnaryPrefixExpression = function (operator, operand, range) {
        var expr = new UnaryPrefixExpression();
        expr.range = range;
        expr.operator = operator;
        expr.operand = operand;
        return expr;
    };
    // statements
    Node.createBlockStatement = function (statements, range) {
        var stmt = new BlockStatement();
        stmt.range = range;
        stmt.statements = statements;
        return stmt;
    };
    Node.createBreakStatement = function (label, range) {
        var stmt = new BreakStatement();
        stmt.range = range;
        stmt.label = label;
        return stmt;
    };
    Node.createClassDeclaration = function (identifier, typeParameters, extendsType, // can't be a function
    implementsTypes, // can't be functions
    members, decorators, flags, range) {
        var stmt = new ClassDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = identifier;
        stmt.typeParameters = typeParameters;
        stmt.extendsType = extendsType;
        stmt.implementsTypes = implementsTypes;
        stmt.members = members;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createContinueStatement = function (label, range) {
        var stmt = new ContinueStatement();
        stmt.range = range;
        stmt.label = label;
        return stmt;
    };
    Node.createDoStatement = function (statement, condition, range) {
        var stmt = new DoStatement();
        stmt.range = range;
        stmt.statement = statement;
        stmt.condition = condition;
        return stmt;
    };
    Node.createEmptyStatement = function (range) {
        var stmt = new EmptyStatement();
        stmt.range = range;
        return stmt;
    };
    Node.createEnumDeclaration = function (name, members, decorators, flags, range) {
        var stmt = new EnumDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.values = members;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createEnumValueDeclaration = function (name, value, flags, range) {
        var stmt = new EnumValueDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.value = value;
        return stmt;
    };
    Node.createExportStatement = function (members, path, isDeclare, range) {
        var stmt = new ExportStatement();
        stmt.range = range;
        stmt.members = members;
        stmt.path = path;
        if (path) {
            var normalizedPath = util_1.normalizePath(path.value);
            if (path.value.startsWith(".")) { // relative
                normalizedPath = util_1.resolvePath(normalizedPath, range.source.internalPath);
            }
            else { // absolute
                if (!normalizedPath.startsWith(common_1.LIBRARY_PREFIX))
                    normalizedPath = common_1.LIBRARY_PREFIX + normalizedPath;
            }
            stmt.internalPath = mangleInternalPath(normalizedPath);
        }
        else {
            stmt.internalPath = null;
        }
        stmt.isDeclare = isDeclare;
        return stmt;
    };
    Node.createExportDefaultStatement = function (declaration, range) {
        var stmt = new ExportDefaultStatement();
        stmt.declaration = declaration;
        stmt.range = range;
        return stmt;
    };
    Node.createExportImportStatement = function (name, externalName, range) {
        var stmt = new ExportImportStatement();
        stmt.range = range;
        stmt.name = name;
        stmt.externalName = externalName;
        return stmt;
    };
    Node.createExportMember = function (name, externalName, range) {
        var elem = new ExportMember();
        elem.range = range;
        elem.localName = name;
        if (!externalName)
            externalName = name;
        elem.exportedName = externalName;
        return elem;
    };
    Node.createExpressionStatement = function (expression) {
        var stmt = new ExpressionStatement();
        stmt.range = expression.range;
        stmt.expression = expression;
        return stmt;
    };
    Node.createIfStatement = function (condition, ifTrue, ifFalse, range) {
        var stmt = new IfStatement();
        stmt.range = range;
        stmt.condition = condition;
        stmt.ifTrue = ifTrue;
        stmt.ifFalse = ifFalse;
        return stmt;
    };
    Node.createImportStatement = function (decls, path, range) {
        var stmt = new ImportStatement();
        stmt.range = range;
        stmt.declarations = decls;
        stmt.namespaceName = null;
        stmt.path = path;
        var normalizedPath = util_1.normalizePath(path.value);
        if (path.value.startsWith(".")) { // relative in project
            normalizedPath = util_1.resolvePath(normalizedPath, range.source.internalPath);
        }
        else { // absolute in library
            if (!normalizedPath.startsWith(common_1.LIBRARY_PREFIX))
                normalizedPath = common_1.LIBRARY_PREFIX + normalizedPath;
        }
        stmt.internalPath = mangleInternalPath(normalizedPath);
        return stmt;
    };
    Node.createImportStatementWithWildcard = function (identifier, path, range) {
        var stmt = new ImportStatement();
        stmt.range = range;
        stmt.declarations = null;
        stmt.namespaceName = identifier;
        stmt.path = path;
        var normalizedPath = util_1.normalizePath(path.value);
        if (path.value.startsWith(".")) {
            normalizedPath = util_1.resolvePath(normalizedPath, range.source.internalPath);
        }
        else {
            if (!normalizedPath.startsWith(common_1.LIBRARY_PREFIX))
                normalizedPath = common_1.LIBRARY_PREFIX + normalizedPath;
        }
        stmt.internalPath = mangleInternalPath(normalizedPath);
        return stmt;
    };
    Node.createImportDeclaration = function (foreignName, name, range) {
        var elem = new ImportDeclaration();
        elem.range = range;
        elem.foreignName = foreignName;
        if (!name)
            name = foreignName;
        elem.name = name;
        return elem;
    };
    Node.createInterfaceDeclaration = function (name, typeParameters, extendsType, // can't be a function
    members, decorators, flags, range) {
        var stmt = new InterfaceDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.typeParameters = typeParameters;
        stmt.extendsType = extendsType;
        stmt.members = members;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createFieldDeclaration = function (name, type, initializer, decorators, flags, range) {
        var stmt = new FieldDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.type = type;
        stmt.initializer = initializer;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createForStatement = function (initializer, condition, incrementor, statement, range) {
        var stmt = new ForStatement();
        stmt.range = range;
        stmt.initializer = initializer;
        stmt.condition = condition;
        stmt.incrementor = incrementor;
        stmt.statement = statement;
        return stmt;
    };
    Node.createFunctionDeclaration = function (name, typeParameters, signature, body, decorators, flags, arrowKind, range) {
        var stmt = new FunctionDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.typeParameters = typeParameters;
        stmt.signature = signature;
        stmt.body = body;
        stmt.decorators = decorators;
        stmt.arrowKind = arrowKind;
        return stmt;
    };
    Node.createIndexSignatureDeclaration = function (keyType, valueType, range) {
        var elem = new IndexSignatureDeclaration();
        elem.range = range;
        elem.keyType = keyType;
        elem.valueType = valueType;
        return elem;
    };
    Node.createMethodDeclaration = function (name, typeParameters, signature, body, decorators, flags, range) {
        var stmt = new MethodDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.typeParameters = typeParameters;
        stmt.signature = signature;
        stmt.body = body;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createNamespaceDeclaration = function (name, members, decorators, flags, range) {
        var stmt = new NamespaceDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.members = members;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createReturnStatement = function (value, range) {
        var stmt = new ReturnStatement();
        stmt.range = range;
        stmt.value = value;
        return stmt;
    };
    Node.createSwitchStatement = function (condition, cases, range) {
        var stmt = new SwitchStatement();
        stmt.range = range;
        stmt.condition = condition;
        stmt.cases = cases;
        return stmt;
    };
    Node.createSwitchCase = function (label, statements, range) {
        var elem = new SwitchCase();
        elem.range = range;
        elem.label = label;
        elem.statements = statements;
        return elem;
    };
    Node.createThrowStatement = function (value, range) {
        var stmt = new ThrowStatement();
        stmt.range = range;
        stmt.value = value;
        return stmt;
    };
    Node.createTryStatement = function (statements, catchVariable, catchStatements, finallyStatements, range) {
        var stmt = new TryStatement();
        stmt.range = range;
        stmt.statements = statements;
        stmt.catchVariable = catchVariable;
        stmt.catchStatements = catchStatements;
        stmt.finallyStatements = finallyStatements;
        return stmt;
    };
    Node.createTypeDeclaration = function (name, typeParameters, alias, decorators, flags, range) {
        var stmt = new TypeDeclaration();
        stmt.range = range;
        stmt.flags = flags;
        stmt.name = name;
        stmt.typeParameters = typeParameters;
        stmt.type = alias;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createVariableStatement = function (declarations, decorators, range) {
        var stmt = new VariableStatement();
        stmt.range = range;
        stmt.declarations = declarations;
        stmt.decorators = decorators;
        return stmt;
    };
    Node.createVariableDeclaration = function (name, type, initializer, decorators, flags, range) {
        var elem = new VariableDeclaration();
        elem.range = range;
        elem.flags = flags;
        elem.name = name;
        elem.type = type;
        elem.initializer = initializer;
        elem.decorators = decorators; // inherited
        return elem;
    };
    Node.createVoidStatement = function (expression, range) {
        var stmt = new VoidStatement();
        stmt.range = range;
        stmt.expression = expression;
        return stmt;
    };
    Node.createWhileStatement = function (condition, statement, range) {
        var stmt = new WhileStatement();
        stmt.range = range;
        stmt.condition = condition;
        stmt.statement = statement;
        return stmt;
    };
    return Node;
}());
exports.Node = Node;
// types
var TypeNode = /** @class */ (function (_super) {
    __extends(TypeNode, _super);
    function TypeNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** Tests if this type has a generic component matching one of the given type parameters. */
    TypeNode.prototype.hasGenericComponent = function (typeParameterNodes) {
        var self = this; // TS otherwise complains
        if (this.kind == NodeKind.NAMEDTYPE) {
            if (!self.name.next) {
                var typeArgumentNodes = self.typeArguments;
                if (typeArgumentNodes !== null && typeArgumentNodes.length) {
                    for (var i = 0, k = typeArgumentNodes.length; i < k; ++i) {
                        if (typeArgumentNodes[i].hasGenericComponent(typeParameterNodes))
                            return true;
                    }
                }
                else {
                    var name = self.name.identifier.text;
                    for (var i = 0, k = typeParameterNodes.length; i < k; ++i) {
                        if (typeParameterNodes[i].name.text == name)
                            return true;
                    }
                }
            }
        }
        else if (this.kind == NodeKind.FUNCTIONTYPE) {
            var parameterNodes = self.parameters;
            for (var i = 0, k = parameterNodes.length; i < k; ++i) {
                if (parameterNodes[i].type.hasGenericComponent(typeParameterNodes))
                    return true;
            }
            if (self.returnType.hasGenericComponent(typeParameterNodes))
                return true;
            var explicitThisType = self.explicitThisType;
            if (explicitThisType !== null && explicitThisType.hasGenericComponent(typeParameterNodes))
                return true;
        }
        else {
            assert(false);
        }
        return false;
    };
    return TypeNode;
}(Node));
exports.TypeNode = TypeNode;
/** Represents a type name. */
var TypeName = /** @class */ (function (_super) {
    __extends(TypeName, _super);
    function TypeName() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TYPENAME;
        return _this;
    }
    return TypeName;
}(Node));
exports.TypeName = TypeName;
/** Represents a named type. */
var NamedTypeNode = /** @class */ (function (_super) {
    __extends(NamedTypeNode, _super);
    function NamedTypeNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.NAMEDTYPE;
        return _this;
    }
    return NamedTypeNode;
}(TypeNode));
exports.NamedTypeNode = NamedTypeNode;
/** Represents a function type. */
var FunctionTypeNode = /** @class */ (function (_super) {
    __extends(FunctionTypeNode, _super);
    function FunctionTypeNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FUNCTIONTYPE;
        return _this;
    }
    return FunctionTypeNode;
}(TypeNode));
exports.FunctionTypeNode = FunctionTypeNode;
/** Represents a type parameter. */
var TypeParameterNode = /** @class */ (function (_super) {
    __extends(TypeParameterNode, _super);
    function TypeParameterNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TYPEPARAMETER;
        return _this;
    }
    return TypeParameterNode;
}(Node));
exports.TypeParameterNode = TypeParameterNode;
/** Represents the kind of a parameter. */
var ParameterKind;
(function (ParameterKind) {
    /** No specific flags. */
    ParameterKind[ParameterKind["DEFAULT"] = 0] = "DEFAULT";
    /** Is an optional parameter. */
    ParameterKind[ParameterKind["OPTIONAL"] = 1] = "OPTIONAL";
    /** Is a rest parameter. */
    ParameterKind[ParameterKind["REST"] = 2] = "REST";
})(ParameterKind = exports.ParameterKind || (exports.ParameterKind = {}));
/** Represents a function parameter. */
var ParameterNode = /** @class */ (function (_super) {
    __extends(ParameterNode, _super);
    function ParameterNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.PARAMETER;
        /** Implicit field declaration, if applicable. */
        _this.implicitFieldDeclaration = null;
        /** Common flags indicating specific traits. */
        _this.flags = common_1.CommonFlags.NONE;
        return _this;
    }
    /** Tests if this node has the specified flag or flags. */
    ParameterNode.prototype.is = function (flag) { return (this.flags & flag) == flag; };
    /** Tests if this node has one of the specified flags. */
    ParameterNode.prototype.isAny = function (flag) { return (this.flags & flag) != 0; };
    /** Sets a specific flag or flags. */
    ParameterNode.prototype.set = function (flag) { this.flags |= flag; };
    return ParameterNode;
}(Node));
exports.ParameterNode = ParameterNode;
// special
/** Built-in decorator kinds. */
var DecoratorKind;
(function (DecoratorKind) {
    DecoratorKind[DecoratorKind["CUSTOM"] = 0] = "CUSTOM";
    DecoratorKind[DecoratorKind["GLOBAL"] = 1] = "GLOBAL";
    DecoratorKind[DecoratorKind["OPERATOR"] = 2] = "OPERATOR";
    DecoratorKind[DecoratorKind["OPERATOR_BINARY"] = 3] = "OPERATOR_BINARY";
    DecoratorKind[DecoratorKind["OPERATOR_PREFIX"] = 4] = "OPERATOR_PREFIX";
    DecoratorKind[DecoratorKind["OPERATOR_POSTFIX"] = 5] = "OPERATOR_POSTFIX";
    DecoratorKind[DecoratorKind["UNMANAGED"] = 6] = "UNMANAGED";
    DecoratorKind[DecoratorKind["SEALED"] = 7] = "SEALED";
    DecoratorKind[DecoratorKind["INLINE"] = 8] = "INLINE";
    DecoratorKind[DecoratorKind["EXTERNAL"] = 9] = "EXTERNAL";
    DecoratorKind[DecoratorKind["BUILTIN"] = 10] = "BUILTIN";
    DecoratorKind[DecoratorKind["LAZY"] = 11] = "LAZY";
    DecoratorKind[DecoratorKind["UNSAFE"] = 12] = "UNSAFE";
})(DecoratorKind = exports.DecoratorKind || (exports.DecoratorKind = {}));
(function (DecoratorKind) {
    /** Returns the kind of the specified decorator name node. Defaults to {@link DecoratorKind.CUSTOM}. */
    function fromNode(nameNode) {
        // @global, @inline, @operator, @sealed, @unmanaged
        if (nameNode.kind == NodeKind.IDENTIFIER) {
            var nameStr = nameNode.text;
            assert(nameStr.length);
            switch (nameStr.charCodeAt(0)) {
                case 98 /* b */: {
                    if (nameStr == "builtin")
                        return DecoratorKind.BUILTIN;
                    break;
                }
                case 101 /* e */: {
                    if (nameStr == "external")
                        return DecoratorKind.EXTERNAL;
                    break;
                }
                case 103 /* g */: {
                    if (nameStr == "global")
                        return DecoratorKind.GLOBAL;
                    break;
                }
                case 105 /* i */: {
                    if (nameStr == "inline")
                        return DecoratorKind.INLINE;
                    break;
                }
                case 108 /* l */: {
                    if (nameStr == "lazy")
                        return DecoratorKind.LAZY;
                    break;
                }
                case 111 /* o */: {
                    if (nameStr == "operator")
                        return DecoratorKind.OPERATOR;
                    break;
                }
                case 115 /* s */: {
                    if (nameStr == "sealed")
                        return DecoratorKind.SEALED;
                    break;
                }
                case 117 /* u */: {
                    if (nameStr == "unmanaged")
                        return DecoratorKind.UNMANAGED;
                    if (nameStr == "unsafe")
                        return DecoratorKind.UNSAFE;
                    break;
                }
            }
        }
        else if (nameNode.kind == NodeKind.PROPERTYACCESS &&
            nameNode.expression.kind == NodeKind.IDENTIFIER) {
            var nameStr = nameNode.expression.text;
            assert(nameStr.length);
            var propStr = nameNode.property.text;
            assert(propStr.length);
            // @operator.binary, @operator.prefix, @operator.postfix
            if (nameStr == "operator") {
                switch (propStr.charCodeAt(0)) {
                    case 98 /* b */: {
                        if (propStr == "binary")
                            return DecoratorKind.OPERATOR_BINARY;
                        break;
                    }
                    case 112 /* p */: {
                        switch (propStr) {
                            case "prefix": return DecoratorKind.OPERATOR_PREFIX;
                            case "postfix": return DecoratorKind.OPERATOR_POSTFIX;
                        }
                        break;
                    }
                }
            }
        }
        return DecoratorKind.CUSTOM;
    }
    DecoratorKind.fromNode = fromNode;
})(DecoratorKind = exports.DecoratorKind || (exports.DecoratorKind = {}));
/** Represents a decorator. */
var DecoratorNode = /** @class */ (function (_super) {
    __extends(DecoratorNode, _super);
    function DecoratorNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.DECORATOR;
        return _this;
    }
    return DecoratorNode;
}(Node));
exports.DecoratorNode = DecoratorNode;
/** Comment kinds. */
var CommentKind;
(function (CommentKind) {
    /** Line comment. */
    CommentKind[CommentKind["LINE"] = 0] = "LINE";
    /** Triple-slash comment. */
    CommentKind[CommentKind["TRIPLE"] = 1] = "TRIPLE";
    /** Block comment. */
    CommentKind[CommentKind["BLOCK"] = 2] = "BLOCK";
})(CommentKind = exports.CommentKind || (exports.CommentKind = {}));
/** Represents a comment. */
var CommentNode = /** @class */ (function (_super) {
    __extends(CommentNode, _super);
    function CommentNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.COMMENT;
        return _this;
    }
    return CommentNode;
}(Node));
exports.CommentNode = CommentNode;
// expressions
/** Base class of all expression nodes. */
var Expression = /** @class */ (function (_super) {
    __extends(Expression, _super);
    function Expression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Expression;
}(Node));
exports.Expression = Expression;
/** Represents an identifier expression. */
var IdentifierExpression = /** @class */ (function (_super) {
    __extends(IdentifierExpression, _super);
    function IdentifierExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.IDENTIFIER;
        return _this;
    }
    return IdentifierExpression;
}(Expression));
exports.IdentifierExpression = IdentifierExpression;
/** Indicates the kind of a literal. */
var LiteralKind;
(function (LiteralKind) {
    LiteralKind[LiteralKind["FLOAT"] = 0] = "FLOAT";
    LiteralKind[LiteralKind["INTEGER"] = 1] = "INTEGER";
    LiteralKind[LiteralKind["STRING"] = 2] = "STRING";
    LiteralKind[LiteralKind["REGEXP"] = 3] = "REGEXP";
    LiteralKind[LiteralKind["ARRAY"] = 4] = "ARRAY";
    LiteralKind[LiteralKind["OBJECT"] = 5] = "OBJECT";
})(LiteralKind = exports.LiteralKind || (exports.LiteralKind = {}));
/** Base class of all literal expressions. */
var LiteralExpression = /** @class */ (function (_super) {
    __extends(LiteralExpression, _super);
    function LiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.LITERAL;
        return _this;
    }
    return LiteralExpression;
}(Expression));
exports.LiteralExpression = LiteralExpression;
/** Represents an `[]` literal expression. */
var ArrayLiteralExpression = /** @class */ (function (_super) {
    __extends(ArrayLiteralExpression, _super);
    function ArrayLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.ARRAY;
        return _this;
    }
    return ArrayLiteralExpression;
}(LiteralExpression));
exports.ArrayLiteralExpression = ArrayLiteralExpression;
/** Indicates the kind of an assertion. */
var AssertionKind;
(function (AssertionKind) {
    AssertionKind[AssertionKind["PREFIX"] = 0] = "PREFIX";
    AssertionKind[AssertionKind["AS"] = 1] = "AS";
    AssertionKind[AssertionKind["NONNULL"] = 2] = "NONNULL";
})(AssertionKind = exports.AssertionKind || (exports.AssertionKind = {}));
/** Represents an assertion expression. */
var AssertionExpression = /** @class */ (function (_super) {
    __extends(AssertionExpression, _super);
    function AssertionExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.ASSERTION;
        return _this;
    }
    return AssertionExpression;
}(Expression));
exports.AssertionExpression = AssertionExpression;
/** Represents a binary expression. */
var BinaryExpression = /** @class */ (function (_super) {
    __extends(BinaryExpression, _super);
    function BinaryExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.BINARY;
        return _this;
    }
    return BinaryExpression;
}(Expression));
exports.BinaryExpression = BinaryExpression;
/** Represents a call expression. */
var CallExpression = /** @class */ (function (_super) {
    __extends(CallExpression, _super);
    function CallExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.CALL;
        return _this;
    }
    Object.defineProperty(CallExpression.prototype, "typeArgumentsRange", {
        /** Gets the type arguments range for reporting. */
        get: function () {
            var typeArguments = this.typeArguments;
            var numTypeArguments;
            if (typeArguments && (numTypeArguments = typeArguments.length)) {
                return tokenizer_1.Range.join(typeArguments[0].range, typeArguments[numTypeArguments - 1].range);
            }
            return this.expression.range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CallExpression.prototype, "argumentsRange", {
        /** Gets the arguments range for reporting. */
        get: function () {
            var args = this.arguments;
            var numArguments = args.length;
            if (numArguments) {
                return tokenizer_1.Range.join(args[0].range, args[numArguments - 1].range);
            }
            return this.expression.range;
        },
        enumerable: true,
        configurable: true
    });
    return CallExpression;
}(Expression));
exports.CallExpression = CallExpression;
/** Represents a class expression using the 'class' keyword. */
var ClassExpression = /** @class */ (function (_super) {
    __extends(ClassExpression, _super);
    function ClassExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.CLASS;
        return _this;
    }
    return ClassExpression;
}(Expression));
exports.ClassExpression = ClassExpression;
/** Represents a comma expression composed of multiple expressions. */
var CommaExpression = /** @class */ (function (_super) {
    __extends(CommaExpression, _super);
    function CommaExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.COMMA;
        return _this;
    }
    return CommaExpression;
}(Expression));
exports.CommaExpression = CommaExpression;
/** Represents a `constructor` expression. */
var ConstructorExpression = /** @class */ (function (_super) {
    __extends(ConstructorExpression, _super);
    function ConstructorExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.CONSTRUCTOR;
        _this.text = "constructor";
        _this.symbol = common_1.CommonSymbols.constructor;
        return _this;
    }
    return ConstructorExpression;
}(IdentifierExpression));
exports.ConstructorExpression = ConstructorExpression;
/** Represents an element access expression, e.g., array access. */
var ElementAccessExpression = /** @class */ (function (_super) {
    __extends(ElementAccessExpression, _super);
    function ElementAccessExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.ELEMENTACCESS;
        return _this;
    }
    return ElementAccessExpression;
}(Expression));
exports.ElementAccessExpression = ElementAccessExpression;
/** Represents a float literal expression. */
var FloatLiteralExpression = /** @class */ (function (_super) {
    __extends(FloatLiteralExpression, _super);
    function FloatLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.FLOAT;
        return _this;
    }
    return FloatLiteralExpression;
}(LiteralExpression));
exports.FloatLiteralExpression = FloatLiteralExpression;
/** Represents a function expression using the 'function' keyword. */
var FunctionExpression = /** @class */ (function (_super) {
    __extends(FunctionExpression, _super);
    function FunctionExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FUNCTION;
        return _this;
    }
    return FunctionExpression;
}(Expression));
exports.FunctionExpression = FunctionExpression;
/** Represents an `instanceof` expression. */
var InstanceOfExpression = /** @class */ (function (_super) {
    __extends(InstanceOfExpression, _super);
    function InstanceOfExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.INSTANCEOF;
        return _this;
    }
    return InstanceOfExpression;
}(Expression));
exports.InstanceOfExpression = InstanceOfExpression;
/** Represents an integer literal expression. */
var IntegerLiteralExpression = /** @class */ (function (_super) {
    __extends(IntegerLiteralExpression, _super);
    function IntegerLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.INTEGER;
        return _this;
    }
    return IntegerLiteralExpression;
}(LiteralExpression));
exports.IntegerLiteralExpression = IntegerLiteralExpression;
/** Represents a `new` expression. Like a call but with its own kind. */
var NewExpression = /** @class */ (function (_super) {
    __extends(NewExpression, _super);
    function NewExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.NEW;
        return _this;
    }
    return NewExpression;
}(CallExpression));
exports.NewExpression = NewExpression;
/** Represents a `null` expression. */
var NullExpression = /** @class */ (function (_super) {
    __extends(NullExpression, _super);
    function NullExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.NULL;
        _this.text = "null";
        _this.symbol = common_1.CommonSymbols.null_;
        return _this;
    }
    return NullExpression;
}(IdentifierExpression));
exports.NullExpression = NullExpression;
/** Represents an object literal expression. */
var ObjectLiteralExpression = /** @class */ (function (_super) {
    __extends(ObjectLiteralExpression, _super);
    function ObjectLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.OBJECT;
        return _this;
    }
    return ObjectLiteralExpression;
}(LiteralExpression));
exports.ObjectLiteralExpression = ObjectLiteralExpression;
/** Represents a parenthesized expression. */
var ParenthesizedExpression = /** @class */ (function (_super) {
    __extends(ParenthesizedExpression, _super);
    function ParenthesizedExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.PARENTHESIZED;
        return _this;
    }
    return ParenthesizedExpression;
}(Expression));
exports.ParenthesizedExpression = ParenthesizedExpression;
/** Represents a property access expression. */
var PropertyAccessExpression = /** @class */ (function (_super) {
    __extends(PropertyAccessExpression, _super);
    function PropertyAccessExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.PROPERTYACCESS;
        return _this;
    }
    return PropertyAccessExpression;
}(Expression));
exports.PropertyAccessExpression = PropertyAccessExpression;
/** Represents a regular expression literal expression. */
var RegexpLiteralExpression = /** @class */ (function (_super) {
    __extends(RegexpLiteralExpression, _super);
    function RegexpLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.REGEXP;
        return _this;
    }
    return RegexpLiteralExpression;
}(LiteralExpression));
exports.RegexpLiteralExpression = RegexpLiteralExpression;
/** Represents a ternary expression, i.e., short if notation. */
var TernaryExpression = /** @class */ (function (_super) {
    __extends(TernaryExpression, _super);
    function TernaryExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TERNARY;
        return _this;
    }
    return TernaryExpression;
}(Expression));
exports.TernaryExpression = TernaryExpression;
/** Represents a string literal expression. */
var StringLiteralExpression = /** @class */ (function (_super) {
    __extends(StringLiteralExpression, _super);
    function StringLiteralExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.literalKind = LiteralKind.STRING;
        return _this;
    }
    return StringLiteralExpression;
}(LiteralExpression));
exports.StringLiteralExpression = StringLiteralExpression;
/** Represents a `super` expression. */
var SuperExpression = /** @class */ (function (_super) {
    __extends(SuperExpression, _super);
    function SuperExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.SUPER;
        _this.text = "super";
        _this.symbol = common_1.CommonSymbols.super_;
        return _this;
    }
    return SuperExpression;
}(IdentifierExpression));
exports.SuperExpression = SuperExpression;
/** Represents a `this` expression. */
var ThisExpression = /** @class */ (function (_super) {
    __extends(ThisExpression, _super);
    function ThisExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.THIS;
        _this.text = "this";
        _this.symbol = common_1.CommonSymbols.this_;
        return _this;
    }
    return ThisExpression;
}(IdentifierExpression));
exports.ThisExpression = ThisExpression;
/** Represents a `true` expression. */
var TrueExpression = /** @class */ (function (_super) {
    __extends(TrueExpression, _super);
    function TrueExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TRUE;
        _this.text = "true";
        _this.symbol = common_1.CommonSymbols.true_;
        return _this;
    }
    return TrueExpression;
}(IdentifierExpression));
exports.TrueExpression = TrueExpression;
/** Represents a `false` expression. */
var FalseExpression = /** @class */ (function (_super) {
    __extends(FalseExpression, _super);
    function FalseExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FALSE;
        _this.text = "false";
        _this.symbol = common_1.CommonSymbols.false_;
        return _this;
    }
    return FalseExpression;
}(IdentifierExpression));
exports.FalseExpression = FalseExpression;
/** Base class of all unary expressions. */
var UnaryExpression = /** @class */ (function (_super) {
    __extends(UnaryExpression, _super);
    function UnaryExpression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnaryExpression;
}(Expression));
exports.UnaryExpression = UnaryExpression;
/** Represents a unary postfix expression, e.g. a postfix increment. */
var UnaryPostfixExpression = /** @class */ (function (_super) {
    __extends(UnaryPostfixExpression, _super);
    function UnaryPostfixExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.UNARYPOSTFIX;
        return _this;
    }
    return UnaryPostfixExpression;
}(UnaryExpression));
exports.UnaryPostfixExpression = UnaryPostfixExpression;
/** Represents a unary prefix expression, e.g. a negation. */
var UnaryPrefixExpression = /** @class */ (function (_super) {
    __extends(UnaryPrefixExpression, _super);
    function UnaryPrefixExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.UNARYPREFIX;
        return _this;
    }
    return UnaryPrefixExpression;
}(UnaryExpression));
exports.UnaryPrefixExpression = UnaryPrefixExpression;
// statements
/** Base class of all statement nodes. */
var Statement = /** @class */ (function (_super) {
    __extends(Statement, _super);
    function Statement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Statement;
}(Node));
exports.Statement = Statement;
/** Indicates the specific kind of a source. */
var SourceKind;
(function (SourceKind) {
    /** User-provided file. */
    SourceKind[SourceKind["USER"] = 0] = "USER";
    /** User-provided entry file. */
    SourceKind[SourceKind["USER_ENTRY"] = 1] = "USER_ENTRY";
    /** Library-provided file. */
    SourceKind[SourceKind["LIBRARY"] = 2] = "LIBRARY";
    /** Library-provided entry file. */
    SourceKind[SourceKind["LIBRARY_ENTRY"] = 3] = "LIBRARY_ENTRY";
})(SourceKind = exports.SourceKind || (exports.SourceKind = {}));
/** A top-level source node. */
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    /** Constructs a new source node. */
    function Source(normalizedPath, text, kind) {
        var _this = _super.call(this) || this;
        _this.kind = NodeKind.SOURCE;
        _this.parent = null;
        /** Tokenizer reference. */
        _this.tokenizer = null;
        /** Source map index. */
        _this.debugInfoIndex = -1;
        /** Re-exported sources. */
        _this.exportPaths = null;
        _this.sourceKind = kind;
        _this.normalizedPath = normalizedPath;
        var internalPath = mangleInternalPath(_this.normalizedPath);
        _this.internalPath = internalPath;
        var pos = internalPath.lastIndexOf(common_1.PATH_DELIMITER);
        _this.simplePath = pos >= 0 ? internalPath.substring(pos + 1) : internalPath;
        _this.statements = new Array();
        _this.range = new tokenizer_1.Range(_this, 0, text.length);
        _this.text = text;
        return _this;
    }
    Object.defineProperty(Source.prototype, "isLibrary", {
        get: function () {
            var kind = this.sourceKind;
            return kind == SourceKind.LIBRARY || kind == SourceKind.LIBRARY_ENTRY;
        },
        enumerable: true,
        configurable: true
    });
    return Source;
}(Node));
exports.Source = Source;
/** Base class of all declaration statements. */
var DeclarationStatement = /** @class */ (function (_super) {
    __extends(DeclarationStatement, _super);
    function DeclarationStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Array of decorators. */
        _this.decorators = null;
        /** Common flags indicating specific traits. */
        _this.flags = common_1.CommonFlags.NONE;
        return _this;
    }
    /** Tests if this node has the specified flag or flags. */
    DeclarationStatement.prototype.is = function (flag) { return (this.flags & flag) == flag; };
    /** Tests if this node has one of the specified flags. */
    DeclarationStatement.prototype.isAny = function (flag) { return (this.flags & flag) != 0; };
    /** Sets a specific flag or flags. */
    DeclarationStatement.prototype.set = function (flag) { this.flags |= flag; };
    return DeclarationStatement;
}(Statement));
exports.DeclarationStatement = DeclarationStatement;
/** Represents an index signature declaration. */
var IndexSignatureDeclaration = /** @class */ (function (_super) {
    __extends(IndexSignatureDeclaration, _super);
    function IndexSignatureDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.INDEXSIGNATUREDECLARATION;
        return _this;
    }
    return IndexSignatureDeclaration;
}(DeclarationStatement));
exports.IndexSignatureDeclaration = IndexSignatureDeclaration;
/** Base class of all variable-like declaration statements. */
var VariableLikeDeclarationStatement = /** @class */ (function (_super) {
    __extends(VariableLikeDeclarationStatement, _super);
    function VariableLikeDeclarationStatement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VariableLikeDeclarationStatement;
}(DeclarationStatement));
exports.VariableLikeDeclarationStatement = VariableLikeDeclarationStatement;
/** Represents a block statement. */
var BlockStatement = /** @class */ (function (_super) {
    __extends(BlockStatement, _super);
    function BlockStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.BLOCK;
        return _this;
    }
    return BlockStatement;
}(Statement));
exports.BlockStatement = BlockStatement;
/** Represents a `break` statement. */
var BreakStatement = /** @class */ (function (_super) {
    __extends(BreakStatement, _super);
    function BreakStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.BREAK;
        return _this;
    }
    return BreakStatement;
}(Statement));
exports.BreakStatement = BreakStatement;
/** Represents a `class` declaration. */
var ClassDeclaration = /** @class */ (function (_super) {
    __extends(ClassDeclaration, _super);
    function ClassDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.CLASSDECLARATION;
        return _this;
    }
    Object.defineProperty(ClassDeclaration.prototype, "isGeneric", {
        get: function () {
            var typeParameters = this.typeParameters;
            return typeParameters != null && typeParameters.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    return ClassDeclaration;
}(DeclarationStatement));
exports.ClassDeclaration = ClassDeclaration;
/** Represents a `continue` statement. */
var ContinueStatement = /** @class */ (function (_super) {
    __extends(ContinueStatement, _super);
    function ContinueStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.CONTINUE;
        return _this;
    }
    return ContinueStatement;
}(Statement));
exports.ContinueStatement = ContinueStatement;
/** Represents a `do` statement. */
var DoStatement = /** @class */ (function (_super) {
    __extends(DoStatement, _super);
    function DoStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.DO;
        return _this;
    }
    return DoStatement;
}(Statement));
exports.DoStatement = DoStatement;
/** Represents an empty statement, i.e., a semicolon terminating nothing. */
var EmptyStatement = /** @class */ (function (_super) {
    __extends(EmptyStatement, _super);
    function EmptyStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EMPTY;
        return _this;
    }
    return EmptyStatement;
}(Statement));
exports.EmptyStatement = EmptyStatement;
/** Represents an `enum` declaration. */
var EnumDeclaration = /** @class */ (function (_super) {
    __extends(EnumDeclaration, _super);
    function EnumDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.ENUMDECLARATION;
        return _this;
    }
    return EnumDeclaration;
}(DeclarationStatement));
exports.EnumDeclaration = EnumDeclaration;
/** Represents a value of an `enum` declaration. */
var EnumValueDeclaration = /** @class */ (function (_super) {
    __extends(EnumValueDeclaration, _super);
    function EnumValueDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.ENUMVALUEDECLARATION;
        return _this;
    }
    return EnumValueDeclaration;
}(VariableLikeDeclarationStatement));
exports.EnumValueDeclaration = EnumValueDeclaration;
/** Represents an `export import` statement of an interface. */
var ExportImportStatement = /** @class */ (function (_super) {
    __extends(ExportImportStatement, _super);
    function ExportImportStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EXPORTIMPORT;
        return _this;
    }
    return ExportImportStatement;
}(Node));
exports.ExportImportStatement = ExportImportStatement;
/** Represents a member of an `export` statement. */
var ExportMember = /** @class */ (function (_super) {
    __extends(ExportMember, _super);
    function ExportMember() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EXPORTMEMBER;
        return _this;
    }
    return ExportMember;
}(Node));
exports.ExportMember = ExportMember;
/** Represents an `export` statement. */
var ExportStatement = /** @class */ (function (_super) {
    __extends(ExportStatement, _super);
    function ExportStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EXPORT;
        return _this;
    }
    return ExportStatement;
}(Statement));
exports.ExportStatement = ExportStatement;
/** Represents an `export default` statement. */
var ExportDefaultStatement = /** @class */ (function (_super) {
    __extends(ExportDefaultStatement, _super);
    function ExportDefaultStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EXPORTDEFAULT;
        return _this;
    }
    return ExportDefaultStatement;
}(Statement));
exports.ExportDefaultStatement = ExportDefaultStatement;
/** Represents an expression that is used as a statement. */
var ExpressionStatement = /** @class */ (function (_super) {
    __extends(ExpressionStatement, _super);
    function ExpressionStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.EXPRESSION;
        return _this;
    }
    return ExpressionStatement;
}(Statement));
exports.ExpressionStatement = ExpressionStatement;
/** Represents a field declaration within a `class`. */
var FieldDeclaration = /** @class */ (function (_super) {
    __extends(FieldDeclaration, _super);
    function FieldDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FIELDDECLARATION;
        /** Parameter index if declared as a constructor parameter, otherwise `-1`. */
        _this.parameterIndex = -1;
        return _this;
    }
    return FieldDeclaration;
}(VariableLikeDeclarationStatement));
exports.FieldDeclaration = FieldDeclaration;
/** Represents a `for` statement. */
var ForStatement = /** @class */ (function (_super) {
    __extends(ForStatement, _super);
    function ForStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FOR;
        return _this;
    }
    return ForStatement;
}(Statement));
exports.ForStatement = ForStatement;
/** Indicates the kind of an array function. */
var ArrowKind;
(function (ArrowKind) {
    /** Not an arrow function. */
    ArrowKind[ArrowKind["NONE"] = 0] = "NONE";
    /** Parenthesized parameter list. */
    ArrowKind[ArrowKind["ARROW_PARENTHESIZED"] = 1] = "ARROW_PARENTHESIZED";
    /** Single parameter without parenthesis. */
    ArrowKind[ArrowKind["ARROW_SINGLE"] = 2] = "ARROW_SINGLE";
})(ArrowKind = exports.ArrowKind || (exports.ArrowKind = {}));
/** Represents a `function` declaration. */
var FunctionDeclaration = /** @class */ (function (_super) {
    __extends(FunctionDeclaration, _super);
    function FunctionDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.FUNCTIONDECLARATION;
        return _this;
    }
    Object.defineProperty(FunctionDeclaration.prototype, "isGeneric", {
        get: function () {
            var typeParameters = this.typeParameters;
            return typeParameters != null && typeParameters.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /** Clones this function declaration. */
    FunctionDeclaration.prototype.clone = function () {
        return Node.createFunctionDeclaration(this.name, this.typeParameters, this.signature, this.body, this.decorators, this.flags, this.arrowKind, this.range);
    };
    return FunctionDeclaration;
}(DeclarationStatement));
exports.FunctionDeclaration = FunctionDeclaration;
/** Represents an `if` statement. */
var IfStatement = /** @class */ (function (_super) {
    __extends(IfStatement, _super);
    function IfStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.IF;
        return _this;
    }
    return IfStatement;
}(Statement));
exports.IfStatement = IfStatement;
/** Represents an `import` declaration part of an {@link ImportStatement}. */
var ImportDeclaration = /** @class */ (function (_super) {
    __extends(ImportDeclaration, _super);
    function ImportDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.IMPORTDECLARATION;
        return _this;
    }
    return ImportDeclaration;
}(DeclarationStatement));
exports.ImportDeclaration = ImportDeclaration;
/** Represents an `import` statement. */
var ImportStatement = /** @class */ (function (_super) {
    __extends(ImportStatement, _super);
    function ImportStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.IMPORT;
        return _this;
    }
    return ImportStatement;
}(Statement));
exports.ImportStatement = ImportStatement;
/** Represents an `interfarce` declaration. */
var InterfaceDeclaration = /** @class */ (function (_super) {
    __extends(InterfaceDeclaration, _super);
    function InterfaceDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.INTERFACEDECLARATION;
        return _this;
    }
    return InterfaceDeclaration;
}(ClassDeclaration));
exports.InterfaceDeclaration = InterfaceDeclaration;
/** Represents a method declaration within a `class`. */
var MethodDeclaration = /** @class */ (function (_super) {
    __extends(MethodDeclaration, _super);
    function MethodDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.METHODDECLARATION;
        return _this;
    }
    return MethodDeclaration;
}(FunctionDeclaration));
exports.MethodDeclaration = MethodDeclaration;
/** Represents a `namespace` declaration. */
var NamespaceDeclaration = /** @class */ (function (_super) {
    __extends(NamespaceDeclaration, _super);
    function NamespaceDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.NAMESPACEDECLARATION;
        return _this;
    }
    return NamespaceDeclaration;
}(DeclarationStatement));
exports.NamespaceDeclaration = NamespaceDeclaration;
/** Represents a `return` statement. */
var ReturnStatement = /** @class */ (function (_super) {
    __extends(ReturnStatement, _super);
    function ReturnStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.RETURN;
        return _this;
    }
    return ReturnStatement;
}(Statement));
exports.ReturnStatement = ReturnStatement;
/** Represents a single `case` within a `switch` statement. */
var SwitchCase = /** @class */ (function (_super) {
    __extends(SwitchCase, _super);
    function SwitchCase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.SWITCHCASE;
        return _this;
    }
    return SwitchCase;
}(Node));
exports.SwitchCase = SwitchCase;
/** Represents a `switch` statement. */
var SwitchStatement = /** @class */ (function (_super) {
    __extends(SwitchStatement, _super);
    function SwitchStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.SWITCH;
        return _this;
    }
    return SwitchStatement;
}(Statement));
exports.SwitchStatement = SwitchStatement;
/** Represents a `throw` statement. */
var ThrowStatement = /** @class */ (function (_super) {
    __extends(ThrowStatement, _super);
    function ThrowStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.THROW;
        return _this;
    }
    return ThrowStatement;
}(Statement));
exports.ThrowStatement = ThrowStatement;
/** Represents a `try` statement. */
var TryStatement = /** @class */ (function (_super) {
    __extends(TryStatement, _super);
    function TryStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TRY;
        return _this;
    }
    return TryStatement;
}(Statement));
exports.TryStatement = TryStatement;
/** Represents a `type` declaration. */
var TypeDeclaration = /** @class */ (function (_super) {
    __extends(TypeDeclaration, _super);
    function TypeDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.TYPEDECLARATION;
        return _this;
    }
    return TypeDeclaration;
}(DeclarationStatement));
exports.TypeDeclaration = TypeDeclaration;
/** Represents a variable declaration part of a {@link VariableStatement}. */
var VariableDeclaration = /** @class */ (function (_super) {
    __extends(VariableDeclaration, _super);
    function VariableDeclaration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.VARIABLEDECLARATION;
        return _this;
    }
    return VariableDeclaration;
}(VariableLikeDeclarationStatement));
exports.VariableDeclaration = VariableDeclaration;
/** Represents a variable statement wrapping {@link VariableDeclaration}s. */
var VariableStatement = /** @class */ (function (_super) {
    __extends(VariableStatement, _super);
    function VariableStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.VARIABLE;
        return _this;
    }
    return VariableStatement;
}(Statement));
exports.VariableStatement = VariableStatement;
/** Represents a void statement dropping an expression's value. */
var VoidStatement = /** @class */ (function (_super) {
    __extends(VoidStatement, _super);
    function VoidStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.VOID;
        return _this;
    }
    return VoidStatement;
}(Statement));
exports.VoidStatement = VoidStatement;
/** Represents a `while` statement. */
var WhileStatement = /** @class */ (function (_super) {
    __extends(WhileStatement, _super);
    function WhileStatement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = NodeKind.WHILE;
        return _this;
    }
    return WhileStatement;
}(Statement));
exports.WhileStatement = WhileStatement;
/** Finds the first decorator matching the specified kind. */
function findDecorator(kind, decorators) {
    if (decorators) {
        for (var i = 0, k = decorators.length; i < k; ++i) {
            var decorator = decorators[i];
            if (decorator.decoratorKind == kind)
                return decorator;
        }
    }
    return null;
}
exports.findDecorator = findDecorator;
/** Mangles an external to an internal path. */
function mangleInternalPath(path) {
    if (path.endsWith(".ts"))
        path = path.substring(0, path.length - 3);
    return path;
}
exports.mangleInternalPath = mangleInternalPath;
/** Tests if the specified type node represents an omitted type. */
function isTypeOmitted(type) {
    if (type.kind == NodeKind.NAMEDTYPE) {
        var name = type.name;
        return !(name.next || name.identifier.text.length);
    }
    return false;
}
exports.isTypeOmitted = isTypeOmitted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3NyYy9hc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRyxDQUFBLEtBQUs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLG1DQUtrQjtBQUVsQix5Q0FJcUI7QUFRWixnQkFYUCxpQkFBSyxDQVdPO0FBQUUsZ0JBVGQsaUJBQUssQ0FTYztBQU5yQiwrQkFJZ0I7QUFJaEIsb0NBQW9DO0FBQ3BDLElBQVksUUEyRVg7QUEzRUQsV0FBWSxRQUFRO0lBRWxCLDJDQUFNLENBQUE7SUFFTixRQUFRO0lBQ1IsaURBQVMsQ0FBQTtJQUNULHVEQUFZLENBQUE7SUFDWiwrQ0FBUSxDQUFBO0lBQ1IseURBQWEsQ0FBQTtJQUNiLGlEQUFTLENBQUE7SUFFVCxjQUFjO0lBQ2QsbURBQVUsQ0FBQTtJQUNWLGlEQUFTLENBQUE7SUFDVCwyQ0FBTSxDQUFBO0lBQ04sdUNBQUksQ0FBQTtJQUNKLDBDQUFLLENBQUE7SUFDTCwwQ0FBSyxDQUFBO0lBQ0wsMERBQWEsQ0FBQTtJQUNiLDBDQUFLLENBQUE7SUFDTCxnREFBUSxDQUFBO0lBQ1Isb0RBQVUsQ0FBQTtJQUNWLDhDQUFPLENBQUE7SUFDUCxzQ0FBRyxDQUFBO0lBQ0gsd0NBQUksQ0FBQTtJQUNKLDBEQUFhLENBQUE7SUFDYiw0REFBYyxDQUFBO0lBQ2QsOENBQU8sQ0FBQTtJQUNQLDBDQUFLLENBQUE7SUFDTCx3Q0FBSSxDQUFBO0lBQ0osd0NBQUksQ0FBQTtJQUNKLHNEQUFXLENBQUE7SUFDWCx3REFBWSxDQUFBO0lBQ1osc0RBQVcsQ0FBQTtJQUVYLGFBQWE7SUFDYiwwQ0FBSyxDQUFBO0lBQ0wsMENBQUssQ0FBQTtJQUNMLGdEQUFRLENBQUE7SUFDUixvQ0FBRSxDQUFBO0lBQ0YsMENBQUssQ0FBQTtJQUNMLDRDQUFNLENBQUE7SUFDTiwwREFBYSxDQUFBO0lBQ2Isd0RBQVks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QUFtRTtBQUNuRSxTQUFnQixhQUFhLENBQUMsSUFBYztJQUMxQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtRQUNuQyxJQUFJLElBQUksR0FBbUIsSUFBSyxDQUFDLElBQUksQ0FBQztRQUN0QyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3BEO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBTkQsc0NBTUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFic3RyYWN0IHN5bnRheCB0cmVlIHJlcHJlc2VudGluZyBhIHNvdXJjZSBmaWxlIG9uY2UgcGFyc2VkLlxuICogQG1vZHVsZSBhc3RcbiAqLy8qKiovXG5cbmltcG9ydCB7XG4gIENvbW1vbkZsYWdzLFxuICBDb21tb25TeW1ib2xzLFxuICBQQVRIX0RFTElNSVRFUixcbiAgTElCUkFSWV9QUkVGSVhcbn0gZnJvbSBcIi4vY29tbW9uXCI7XG5cbmltcG9ydCB7XG4gIFRva2VuLFxuICBUb2tlbml6ZXIsXG4gIFJhbmdlXG59IGZyb20gXCIuL3Rva2VuaXplclwiO1xuXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoLFxuICByZXNvbHZlUGF0aCxcbiAgQ2hhckNvZGVcbn0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQgeyBUb2tlbiwgUmFuZ2UgfTtcblxuLyoqIEluZGljYXRlcyB0aGUga2luZCBvZiBhIG5vZGUuICovXG5leHBvcnQgZW51bSBOb2RlS2luZCB7XG5cbiAgU09VUkNFLFxuXG4gIC8vIHR5cGVzXG4gIE5BTUVEVFlQRSxcbiAgRlVOQ1RJT05UWVBFLFxuICBUWVBFTkFNRSxcbiAgVFlQRVBBUkFNRVRFUixcbiAgUEFSQU1FVEVSLFxuXG4gIC8vIGV4cHJlc3Npb25zXG4gIElERU5USUZJRVIsXG4gIEFTU0VSVElPTixcbiAgQklOQVJZLFxuICBDQUxMLFxuICBDTEFTUyxcbiAgQ09NTUEsXG4gIEVMRU1FTlRBQ0NFU1MsXG4gIEZBTFNFLFxuICBGVU5DVElPTixcbiAgSU5TVEFOQ0VPRixcbiAgTElURVJBTCxcbiAgTkVXLFxuICBOVUxMLFxuICBQQVJFTlRIRVNJWkVELFxuICBQUk9QRVJUWUFDQ0VTUyxcbiAgVEVSTkFSWSxcbiAgU1VQRVIsXG4gIFRISVMsXG4gIFRSVUUsXG4gIENPTlNUUlVDVE9SLFxuICBVTkFSWVBPU1RGSVgsXG4gIFVOQVJZUFJFRklYLFxuXG4gIC8vIHN0YXRlbWVudHNcbiAgQkxPQ0ssXG4gIEJSRUFLLFxuICBDT05USU5VRSxcbiAgRE8sXG4gIEVNUFRZLFxuICBFWFBPUlQsXG4gIEVYUE9SVERFRkFVTFQsXG4gIEVYUE9SVElNUE9SVCxcbiAgRVhQUkVTU0lPTixcbiAgRk9SLFxuICBJRixcbiAgSU1QT1JULFxuICBSRVRVUk4sXG4gIFNXSVRDSCxcbiAgVEhST1csXG4gIFRSWSxcbiAgVkFSSUFCTEUsXG4gIFZPSUQsXG4gIFdISUxFLFxuXG4gIC8vIGRlY2xhcmF0aW9uIHN0YXRlbWVudHNcbiAgQ0xBU1NERUNMQVJBVElPTixcbiAgRU5VTURFQ0xBUkFUSU9OLFxuICBFTlVNVkFMVUVERUNMQVJBVElPTixcbiAgRklFTERERUNMQVJBVElPTixcbiAgRlVOQ1RJT05ERUNMQVJBVElPTixcbiAgSU1QT1JUREVDTEFSQVRJT04sXG4gIElOREVYU0lHTkFUVVJFREVDTEFSQVRJT04sXG4gIElOVEVSRkFDRURFQ0xBUkFUSU9OLFxuICBNRVRIT0RERUNMQVJBVElPTixcbiAgTkFNRVNQQUNFREVDTEFSQVRJT04sXG4gIFRZUEVERUNMQVJBVElPTixcbiAgVkFSSUFCTEVERUNMQVJBVElPTixcblxuICAvLyBzcGVjaWFsXG4gIERFQ09SQVRPUixcbiAgRVhQT1JUTUVNQkVSLFxuICBTV0lUQ0hDQVNFLFxuICBDT01NRU5UXG59XG5cbi8qKiBDaGVja3MgaWYgYSBub2RlIHJlcHJlc2VudHMgYSBjb25zdGFudCB2YWx1ZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub2RlSXNDb25zdGFudFZhbHVlKGtpbmQ6IE5vZGVLaW5kKTogYm9vbCB7XG4gIHN3aXRjaCAoa2luZCkge1xuICAgIGNhc2UgTm9kZUtpbmQuTElURVJBTDpcbiAgICBjYXNlIE5vZGVLaW5kLk5VTEw6XG4gICAgY2FzZSBOb2RlS2luZC5UUlVFOlxuICAgIGNhc2UgTm9kZUtpbmQuRkFMU0U6IHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqIENoZWNrcyBpZiBhIG5vZGUgbWlnaHQgYmUgY2FsbGFibGUuICovXG5leHBvcnQgZnVuY3Rpb24gbm9kZUlzQ2FsbGFibGUoa2luZDogTm9kZUtpbmQpOiBib29sIHtcbiAgc3dpdGNoIChraW5kKSB7XG4gICAgY2FzZSBOb2RlS2luZC5JREVOVElGSUVSOlxuICAgIGNhc2UgTm9kZUtpbmQuQVNTRVJUSU9OOiAvLyBpZiBraW5kPU5PTk5VTExcbiAgICBjYXNlIE5vZGVLaW5kLkNBTEw6XG4gICAgY2FzZSBOb2RlS2luZC5FTEVNRU5UQUNDRVNTOlxuICAgIGNhc2UgTm9kZUtpbmQuUEFSRU5USEVTSVpFRDpcbiAgICBjYXNlIE5vZGVLaW5kLlBST1BFUlRZQUNDRVNTOlxuICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6IHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqIENoZWNrcyBpZiBhIG5vZGUgbWlnaHQgYmUgY2FsbGFibGUgd2l0aCBnZW5lcmljIGFyZ3VtZW50cy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub2RlSXNHZW5lcmljQ2FsbGFibGUoa2luZDogTm9kZUtpbmQpOiBib29sIHtcbiAgc3dpdGNoIChraW5kKSB7XG4gICAgY2FzZSBOb2RlS2luZC5JREVOVElGSUVSOlxuICAgIGNhc2UgTm9kZUtpbmQuUFJPUEVSVFlBQ0NFU1M6IHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqIEJhc2UgY2xhc3Mgb2YgYWxsIG5vZGVzLiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5vZGUge1xuXG4gIC8qKiBOb2RlIGtpbmQgaW5kaWNhdG9yLiAqL1xuICBraW5kOiBOb2RlS2luZDtcbiAgLyoqIFNvdXJjZSByYW5nZS4gKi9cbiAgcmFuZ2U6IFJhbmdlO1xuXG4gIC8vIHR5cGVzXG5cbiAgc3RhdGljIGNyZWF0ZVR5cGVOYW1lKFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBUeXBlTmFtZSB7XG4gICAgdmFyIHR5cGVOYW1lID0gbmV3IFR5cGVOYW1lKCk7XG4gICAgdHlwZU5hbWUucmFuZ2UgPSByYW5nZTtcbiAgICB0eXBlTmFtZS5pZGVudGlmaWVyID0gbmFtZTtcbiAgICB0eXBlTmFtZS5uZXh0ID0gbnVsbDtcbiAgICByZXR1cm4gdHlwZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlU2ltcGxlVHlwZU5hbWUoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBUeXBlTmFtZSB7XG4gICAgcmV0dXJuIE5vZGUuY3JlYXRlVHlwZU5hbWUoTm9kZS5jcmVhdGVJZGVudGlmaWVyRXhwcmVzc2lvbihuYW1lLCByYW5nZSksIHJhbmdlKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOYW1lZFR5cGUoXG4gICAgbmFtZTogVHlwZU5hbWUsXG4gICAgdHlwZUFyZ3VtZW50czogVHlwZU5vZGVbXSB8IG51bGwsXG4gICAgaXNOdWxsYWJsZTogYm9vbCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogTmFtZWRUeXBlTm9kZSB7XG4gICAgdmFyIHR5cGUgPSBuZXcgTmFtZWRUeXBlTm9kZSgpO1xuICAgIHR5cGUucmFuZ2UgPSByYW5nZTtcbiAgICB0eXBlLm5hbWUgPSBuYW1lO1xuICAgIHR5cGUudHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHM7XG4gICAgdHlwZS5pc051bGxhYmxlID0gaXNOdWxsYWJsZTtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVGdW5jdGlvblR5cGUoXG4gICAgcGFyYW1ldGVyczogUGFyYW1ldGVyTm9kZVtdLFxuICAgIHJldHVyblR5cGU6IFR5cGVOb2RlLFxuICAgIGV4cGxpY2l0VGhpc1R5cGU6IE5hbWVkVHlwZU5vZGUgfCBudWxsLFxuICAgIGlzTnVsbGFibGU6IGJvb2wsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEZ1bmN0aW9uVHlwZU5vZGUge1xuICAgIHZhciB0eXBlID0gbmV3IEZ1bmN0aW9uVHlwZU5vZGUoKTtcbiAgICB0eXBlLnJhbmdlID0gcmFuZ2U7XG4gICAgdHlwZS5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB0eXBlLnJldHVyblR5cGUgPSByZXR1cm5UeXBlO1xuICAgIHR5cGUuZXhwbGljaXRUaGlzVHlwZSA9IGV4cGxpY2l0VGhpc1R5cGU7XG4gICAgdHlwZS5pc051bGxhYmxlID0gaXNOdWxsYWJsZTtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVPbWl0dGVkVHlwZShcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogTmFtZWRUeXBlTm9kZSB7XG4gICAgcmV0dXJuIE5vZGUuY3JlYXRlTmFtZWRUeXBlKFxuICAgICAgTm9kZS5jcmVhdGVTaW1wbGVUeXBlTmFtZShcIlwiLCByYW5nZSksXG4gICAgICBudWxsLFxuICAgICAgZmFsc2UsXG4gICAgICByYW5nZVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVHlwZVBhcmFtZXRlcihcbiAgICBuYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICBleHRlbmRzVHlwZTogTmFtZWRUeXBlTm9kZSB8IG51bGwsXG4gICAgZGVmYXVsdFR5cGU6IE5hbWVkVHlwZU5vZGUgfCBudWxsLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBUeXBlUGFyYW1ldGVyTm9kZSB7XG4gICAgdmFyIGVsZW0gPSBuZXcgVHlwZVBhcmFtZXRlck5vZGUoKTtcbiAgICBlbGVtLnJhbmdlID0gcmFuZ2U7XG4gICAgZWxlbS5uYW1lID0gbmFtZTtcbiAgICBlbGVtLmV4dGVuZHNUeXBlID0gZXh0ZW5kc1R5cGU7XG4gICAgZWxlbS5kZWZhdWx0VHlwZSA9IGRlZmF1bHRUeXBlO1xuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVBhcmFtZXRlcihcbiAgICBuYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICB0eXBlOiBUeXBlTm9kZSxcbiAgICBpbml0aWFsaXplcjogRXhwcmVzc2lvbiB8IG51bGwsXG4gICAga2luZDogUGFyYW1ldGVyS2luZCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogUGFyYW1ldGVyTm9kZSB7XG4gICAgdmFyIGVsZW0gPSBuZXcgUGFyYW1ldGVyTm9kZSgpO1xuICAgIGVsZW0ucmFuZ2UgPSByYW5nZTtcbiAgICBlbGVtLm5hbWUgPSBuYW1lO1xuICAgIGVsZW0udHlwZSA9IHR5cGU7XG4gICAgZWxlbS5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuICAgIGVsZW0ucGFyYW1ldGVyS2luZCA9IGtpbmQ7XG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICAvLyBzcGVjaWFsXG5cbiAgc3RhdGljIGNyZWF0ZURlY29yYXRvcihcbiAgICBuYW1lOiBFeHByZXNzaW9uLFxuICAgIGFyZ3M6IEV4cHJlc3Npb25bXSB8IG51bGwsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IERlY29yYXRvck5vZGUge1xuICAgIHZhciBzdG10ID0gbmV3IERlY29yYXRvck5vZGUoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5uYW1lID0gbmFtZTtcbiAgICBzdG10LmFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgc3RtdC5kZWNvcmF0b3JLaW5kID0gRGVjb3JhdG9yS2luZC5mcm9tTm9kZShuYW1lKTtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDb21tZW50KFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBraW5kOiBDb21tZW50S2luZCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogQ29tbWVudE5vZGUge1xuICAgIHZhciBub2RlID0gbmV3IENvbW1lbnROb2RlKCk7XG4gICAgbm9kZS5yYW5nZSA9IHJhbmdlO1xuICAgIG5vZGUuY29tbWVudEtpbmQgPSBraW5kO1xuICAgIG5vZGUudGV4dCA9IHRleHQ7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICAvLyBleHByZXNzaW9uc1xuXG4gIHN0YXRpYyBjcmVhdGVJZGVudGlmaWVyRXhwcmVzc2lvbihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcmFuZ2U6IFJhbmdlLFxuICAgIGlzUXVvdGVkOiBib29sID0gZmFsc2VcbiAgKTogSWRlbnRpZmllckV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IElkZW50aWZpZXJFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIudGV4dCA9IG5hbWU7IC8vIFRPRE86IGV4dHJhY3QgZnJvbSByYW5nZVxuICAgIGV4cHIuc3ltYm9sID0gbmFtZTsgLy8gVE9ETzogU3ltYm9sLmZvcihuYW1lKVxuICAgIGV4cHIuaXNRdW90ZWQgPSBpc1F1b3RlZDtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbXB0eUlkZW50aWZpZXJFeHByZXNzaW9uKFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBJZGVudGlmaWVyRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgSWRlbnRpZmllckV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci50ZXh0ID0gXCJcIjtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVBcnJheUxpdGVyYWxFeHByZXNzaW9uKFxuICAgIGVsZW1lbnRzOiAoRXhwcmVzc2lvbiB8IG51bGwpW10sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEFycmF5TGl0ZXJhbEV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IEFycmF5TGl0ZXJhbEV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5lbGVtZW50RXhwcmVzc2lvbnMgPSBlbGVtZW50cztcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVBc3NlcnRpb25FeHByZXNzaW9uKFxuICAgIGFzc2VydGlvbktpbmQ6IEFzc2VydGlvbktpbmQsXG4gICAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbixcbiAgICB0b1R5cGU6IFR5cGVOb2RlIHwgbnVsbCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogQXNzZXJ0aW9uRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgQXNzZXJ0aW9uRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICBleHByLmFzc2VydGlvbktpbmQgPSBhc3NlcnRpb25LaW5kO1xuICAgIGV4cHIuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgZXhwci50b1R5cGUgPSB0b1R5cGU7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQmluYXJ5RXhwcmVzc2lvbihcbiAgICBvcGVyYXRvcjogVG9rZW4sXG4gICAgbGVmdDogRXhwcmVzc2lvbixcbiAgICByaWdodDogRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogQmluYXJ5RXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICBleHByLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgZXhwci5sZWZ0ID0gbGVmdDtcbiAgICBleHByLnJpZ2h0ID0gcmlnaHQ7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ2FsbEV4cHJlc3Npb24oXG4gICAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbixcbiAgICB0eXBlQXJnczogVHlwZU5vZGVbXSB8IG51bGwsXG4gICAgYXJnczogRXhwcmVzc2lvbltdLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBDYWxsRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgQ2FsbEV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICBleHByLnR5cGVBcmd1bWVudHMgPSB0eXBlQXJncztcbiAgICBleHByLmFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQ2xhc3NFeHByZXNzaW9uKFxuICAgIGRlY2xhcmF0aW9uOiBDbGFzc0RlY2xhcmF0aW9uXG4gICk6IENsYXNzRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgQ2xhc3NFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IGRlY2xhcmF0aW9uLnJhbmdlO1xuICAgIGV4cHIuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDb21tYUV4cHJlc3Npb24oXG4gICAgZXhwcmVzc2lvbnM6IEV4cHJlc3Npb25bXSxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogQ29tbWFFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBDb21tYUV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5leHByZXNzaW9ucyA9IGV4cHJlc3Npb25zO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUNvbnN0cnVjdG9yRXhwcmVzc2lvbihcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogQ29uc3RydWN0b3JFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBDb25zdHJ1Y3RvckV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oXG4gICAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbixcbiAgICBlbGVtZW50OiBFeHByZXNzaW9uLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICBleHByLmVsZW1lbnRFeHByZXNzaW9uID0gZWxlbWVudDtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVGYWxzZUV4cHJlc3Npb24oXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEZhbHNlRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgRmFsc2VFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUZsb2F0TGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgdmFsdWU6IGY2NCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogRmxvYXRMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgRmxvYXRMaXRlcmFsRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICBleHByLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRnVuY3Rpb25FeHByZXNzaW9uKFxuICAgIGRlY2xhcmF0aW9uOiBGdW5jdGlvbkRlY2xhcmF0aW9uXG4gICk6IEZ1bmN0aW9uRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgRnVuY3Rpb25FeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IGRlY2xhcmF0aW9uLnJhbmdlO1xuICAgIGV4cHIuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJbnN0YW5jZU9mRXhwcmVzc2lvbihcbiAgICBleHByZXNzaW9uOiBFeHByZXNzaW9uLFxuICAgIGlzVHlwZTogVHlwZU5vZGUsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEluc3RhbmNlT2ZFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBJbnN0YW5jZU9mRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICBleHByLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIGV4cHIuaXNUeXBlID0gaXNUeXBlO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUludGVnZXJMaXRlcmFsRXhwcmVzc2lvbihcbiAgICB2YWx1ZTogSTY0LFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICBleHByLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTmV3RXhwcmVzc2lvbihcbiAgICBleHByZXNzaW9uOiBFeHByZXNzaW9uLFxuICAgIHR5cGVBcmdzOiBUeXBlTm9kZVtdIHwgbnVsbCxcbiAgICBhcmdzOiBFeHByZXNzaW9uW10sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IE5ld0V4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IE5ld0V4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICBleHByLnR5cGVBcmd1bWVudHMgPSB0eXBlQXJncztcbiAgICBleHByLmFyZ3VtZW50cyA9IGFyZ3M7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTnVsbEV4cHJlc3Npb24oXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IE51bGxFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBOdWxsRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihcbiAgICBuYW1lczogSWRlbnRpZmllckV4cHJlc3Npb25bXSxcbiAgICB2YWx1ZXM6IEV4cHJlc3Npb25bXSxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IE9iamVjdExpdGVyYWxFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIubmFtZXMgPSBuYW1lcztcbiAgICBleHByLnZhbHVlcyA9IHZhbHVlcztcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVQYXJlbnRoZXNpemVkRXhwcmVzc2lvbihcbiAgICBleHByZXNzaW9uOiBFeHByZXNzaW9uLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgUGFyZW50aGVzaXplZEV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24oXG4gICAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbixcbiAgICBwcm9wZXJ0eTogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgZXhwci5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVJlZ2V4cExpdGVyYWxFeHByZXNzaW9uKFxuICAgIHBhdHRlcm46IHN0cmluZyxcbiAgICBmbGFnczogc3RyaW5nLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5wYXR0ZXJuID0gcGF0dGVybjtcbiAgICBleHByLnBhdHRlcm5GbGFncyA9IGZsYWdzO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVRlcm5hcnlFeHByZXNzaW9uKFxuICAgIGNvbmRpdGlvbjogRXhwcmVzc2lvbixcbiAgICBpZlRoZW46IEV4cHJlc3Npb24sXG4gICAgaWZFbHNlOiBFeHByZXNzaW9uLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBUZXJuYXJ5RXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgVGVybmFyeUV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgZXhwci5pZlRoZW4gPSBpZlRoZW47XG4gICAgZXhwci5pZkVsc2UgPSBpZkVsc2U7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24oXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24ge1xuICAgIHZhciBleHByID0gbmV3IFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVTdXBlckV4cHJlc3Npb24oXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFN1cGVyRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgU3VwZXJFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVRoaXNFeHByZXNzaW9uKFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBUaGlzRXhwcmVzc2lvbiB7XG4gICAgdmFyIGV4cHIgPSBuZXcgVGhpc0V4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVHJ1ZUV4cHJlc3Npb24oXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFRydWVFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBUcnVlRXhwcmVzc2lvbigpO1xuICAgIGV4cHIucmFuZ2UgPSByYW5nZTtcbiAgICByZXR1cm4gZXhwcjtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVVbmFyeVBvc3RmaXhFeHByZXNzaW9uKFxuICAgIG9wZXJhdG9yOiBUb2tlbixcbiAgICBvcGVyYW5kOiBFeHByZXNzaW9uLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBVbmFyeVBvc3RmaXhFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBVbmFyeVBvc3RmaXhFeHByZXNzaW9uKCk7XG4gICAgZXhwci5yYW5nZSA9IHJhbmdlO1xuICAgIGV4cHIub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICBleHByLm9wZXJhbmQgPSBvcGVyYW5kO1xuICAgIHJldHVybiBleHByO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVVuYXJ5UHJlZml4RXhwcmVzc2lvbihcbiAgICBvcGVyYXRvcjogVG9rZW4sXG4gICAgb3BlcmFuZDogRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVW5hcnlQcmVmaXhFeHByZXNzaW9uIHtcbiAgICB2YXIgZXhwciA9IG5ldyBVbmFyeVByZWZpeEV4cHJlc3Npb24oKTtcbiAgICBleHByLnJhbmdlID0gcmFuZ2U7XG4gICAgZXhwci5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIGV4cHIub3BlcmFuZCA9IG9wZXJhbmQ7XG4gICAgcmV0dXJuIGV4cHI7XG4gIH1cblxuICAvLyBzdGF0ZW1lbnRzXG5cbiAgc3RhdGljIGNyZWF0ZUJsb2NrU3RhdGVtZW50KFxuICAgIHN0YXRlbWVudHM6IFN0YXRlbWVudFtdLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBCbG9ja1N0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgQmxvY2tTdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVCcmVha1N0YXRlbWVudChcbiAgICBsYWJlbDogSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBCcmVha1N0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgQnJlYWtTdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5sYWJlbCA9IGxhYmVsO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUNsYXNzRGVjbGFyYXRpb24oXG4gICAgaWRlbnRpZmllcjogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgdHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJOb2RlW10gfCBudWxsLFxuICAgIGV4dGVuZHNUeXBlOiBOYW1lZFR5cGVOb2RlIHwgbnVsbCwgLy8gY2FuJ3QgYmUgYSBmdW5jdGlvblxuICAgIGltcGxlbWVudHNUeXBlczogTmFtZWRUeXBlTm9kZVtdIHwgbnVsbCwgLy8gY2FuJ3QgYmUgZnVuY3Rpb25zXG4gICAgbWVtYmVyczogRGVjbGFyYXRpb25TdGF0ZW1lbnRbXSxcbiAgICBkZWNvcmF0b3JzOiBEZWNvcmF0b3JOb2RlW10gfCBudWxsLFxuICAgIGZsYWdzOiBDb21tb25GbGFncyxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogQ2xhc3NEZWNsYXJhdGlvbiB7XG4gICAgdmFyIHN0bXQgPSBuZXcgQ2xhc3NEZWNsYXJhdGlvbigpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmZsYWdzID0gZmxhZ3M7XG4gICAgc3RtdC5uYW1lID0gaWRlbnRpZmllcjtcbiAgICBzdG10LnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG4gICAgc3RtdC5leHRlbmRzVHlwZSA9IGV4dGVuZHNUeXBlO1xuICAgIHN0bXQuaW1wbGVtZW50c1R5cGVzID0gaW1wbGVtZW50c1R5cGVzO1xuICAgIHN0bXQubWVtYmVycyA9IG1lbWJlcnM7XG4gICAgc3RtdC5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycztcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVDb250aW51ZVN0YXRlbWVudChcbiAgICBsYWJlbDogSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBDb250aW51ZVN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgQ29udGludWVTdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5sYWJlbCA9IGxhYmVsO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZURvU3RhdGVtZW50KFxuICAgIHN0YXRlbWVudDogU3RhdGVtZW50LFxuICAgIGNvbmRpdGlvbjogRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogRG9TdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IERvU3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHN0bXQuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVtcHR5U3RhdGVtZW50KFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBFbXB0eVN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgRW1wdHlTdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRW51bURlY2xhcmF0aW9uKFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIG1lbWJlcnM6IEVudW1WYWx1ZURlY2xhcmF0aW9uW10sXG4gICAgZGVjb3JhdG9yczogRGVjb3JhdG9yTm9kZVtdIHwgbnVsbCxcbiAgICBmbGFnczogQ29tbW9uRmxhZ3MsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEVudW1EZWNsYXJhdGlvbiB7XG4gICAgdmFyIHN0bXQgPSBuZXcgRW51bURlY2xhcmF0aW9uKCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuZmxhZ3MgPSBmbGFncztcbiAgICBzdG10Lm5hbWUgPSBuYW1lO1xuICAgIHN0bXQudmFsdWVzID0gbWVtYmVycztcbiAgICBzdG10LmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVudW1WYWx1ZURlY2xhcmF0aW9uKFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIHZhbHVlOiBFeHByZXNzaW9uIHwgbnVsbCxcbiAgICBmbGFnczogQ29tbW9uRmxhZ3MsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEVudW1WYWx1ZURlY2xhcmF0aW9uIHtcbiAgICB2YXIgc3RtdCA9IG5ldyBFbnVtVmFsdWVEZWNsYXJhdGlvbigpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmZsYWdzID0gZmxhZ3M7XG4gICAgc3RtdC5uYW1lID0gbmFtZTtcbiAgICBzdG10LnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRXhwb3J0U3RhdGVtZW50KFxuICAgIG1lbWJlcnM6IEV4cG9ydE1lbWJlcltdIHwgbnVsbCxcbiAgICBwYXRoOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbiB8IG51bGwsXG4gICAgaXNEZWNsYXJlOiBib29sLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBFeHBvcnRTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IEV4cG9ydFN0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10Lm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgIHN0bXQucGF0aCA9IHBhdGg7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIGxldCBub3JtYWxpemVkUGF0aCA9IG5vcm1hbGl6ZVBhdGgocGF0aC52YWx1ZSk7XG4gICAgICBpZiAocGF0aC52YWx1ZS5zdGFydHNXaXRoKFwiLlwiKSkgeyAvLyByZWxhdGl2ZVxuICAgICAgICBub3JtYWxpemVkUGF0aCA9IHJlc29sdmVQYXRoKG5vcm1hbGl6ZWRQYXRoLCByYW5nZS5zb3VyY2UuaW50ZXJuYWxQYXRoKTtcbiAgICAgIH0gZWxzZSB7IC8vIGFic29sdXRlXG4gICAgICAgIGlmICghbm9ybWFsaXplZFBhdGguc3RhcnRzV2l0aChMSUJSQVJZX1BSRUZJWCkpIG5vcm1hbGl6ZWRQYXRoID0gTElCUkFSWV9QUkVGSVggKyBub3JtYWxpemVkUGF0aDtcbiAgICAgIH1cbiAgICAgIHN0bXQuaW50ZXJuYWxQYXRoID0gbWFuZ2xlSW50ZXJuYWxQYXRoKG5vcm1hbGl6ZWRQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RtdC5pbnRlcm5hbFBhdGggPSBudWxsO1xuICAgIH1cbiAgICBzdG10LmlzRGVjbGFyZSA9IGlzRGVjbGFyZTtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFeHBvcnREZWZhdWx0U3RhdGVtZW50KFxuICAgIGRlY2xhcmF0aW9uOiBEZWNsYXJhdGlvblN0YXRlbWVudCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgRXhwb3J0RGVmYXVsdFN0YXRlbWVudCgpO1xuICAgIHN0bXQuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRXhwb3J0SW1wb3J0U3RhdGVtZW50KFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIGV4dGVybmFsTmFtZTogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEV4cG9ydEltcG9ydFN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgRXhwb3J0SW1wb3J0U3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQubmFtZSA9IG5hbWU7XG4gICAgc3RtdC5leHRlcm5hbE5hbWUgPSBleHRlcm5hbE5hbWU7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRXhwb3J0TWVtYmVyKFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIGV4dGVybmFsTmFtZTogSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBFeHBvcnRNZW1iZXIge1xuICAgIHZhciBlbGVtID0gbmV3IEV4cG9ydE1lbWJlcigpO1xuICAgIGVsZW0ucmFuZ2UgPSByYW5nZTtcbiAgICBlbGVtLmxvY2FsTmFtZSA9IG5hbWU7XG4gICAgaWYgKCFleHRlcm5hbE5hbWUpIGV4dGVybmFsTmFtZSA9IG5hbWU7XG4gICAgZWxlbS5leHBvcnRlZE5hbWUgPSBleHRlcm5hbE5hbWU7XG4gICAgcmV0dXJuIGVsZW07XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRXhwcmVzc2lvblN0YXRlbWVudChcbiAgICBleHByZXNzaW9uOiBFeHByZXNzaW9uXG4gICk6IEV4cHJlc3Npb25TdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gZXhwcmVzc2lvbi5yYW5nZTtcbiAgICBzdG10LmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUlmU3RhdGVtZW50KFxuICAgIGNvbmRpdGlvbjogRXhwcmVzc2lvbixcbiAgICBpZlRydWU6IFN0YXRlbWVudCxcbiAgICBpZkZhbHNlOiBTdGF0ZW1lbnQgfCBudWxsLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBJZlN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgSWZTdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgc3RtdC5pZlRydWUgPSBpZlRydWU7XG4gICAgc3RtdC5pZkZhbHNlID0gaWZGYWxzZTtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVJbXBvcnRTdGF0ZW1lbnQoXG4gICAgZGVjbHM6IEltcG9ydERlY2xhcmF0aW9uW10gfCBudWxsLFxuICAgIHBhdGg6IFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBJbXBvcnRTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IEltcG9ydFN0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmRlY2xhcmF0aW9ucyA9IGRlY2xzO1xuICAgIHN0bXQubmFtZXNwYWNlTmFtZSA9IG51bGw7XG4gICAgc3RtdC5wYXRoID0gcGF0aDtcbiAgICB2YXIgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVQYXRoKHBhdGgudmFsdWUpO1xuICAgIGlmIChwYXRoLnZhbHVlLnN0YXJ0c1dpdGgoXCIuXCIpKSB7IC8vIHJlbGF0aXZlIGluIHByb2plY3RcbiAgICAgIG5vcm1hbGl6ZWRQYXRoID0gcmVzb2x2ZVBhdGgobm9ybWFsaXplZFBhdGgsIHJhbmdlLnNvdXJjZS5pbnRlcm5hbFBhdGgpO1xuICAgIH0gZWxzZSB7IC8vIGFic29sdXRlIGluIGxpYnJhcnlcbiAgICAgIGlmICghbm9ybWFsaXplZFBhdGguc3RhcnRzV2l0aChMSUJSQVJZX1BSRUZJWCkpIG5vcm1hbGl6ZWRQYXRoID0gTElCUkFSWV9QUkVGSVggKyBub3JtYWxpemVkUGF0aDtcbiAgICB9XG4gICAgc3RtdC5pbnRlcm5hbFBhdGggPSBtYW5nbGVJbnRlcm5hbFBhdGgobm9ybWFsaXplZFBhdGgpO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUltcG9ydFN0YXRlbWVudFdpdGhXaWxkY2FyZChcbiAgICBpZGVudGlmaWVyOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICBwYXRoOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogSW1wb3J0U3RhdGVtZW50IHtcbiAgICB2YXIgc3RtdCA9IG5ldyBJbXBvcnRTdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5kZWNsYXJhdGlvbnMgPSBudWxsO1xuICAgIHN0bXQubmFtZXNwYWNlTmFtZSA9IGlkZW50aWZpZXI7XG4gICAgc3RtdC5wYXRoID0gcGF0aDtcbiAgICB2YXIgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVQYXRoKHBhdGgudmFsdWUpO1xuICAgIGlmIChwYXRoLnZhbHVlLnN0YXJ0c1dpdGgoXCIuXCIpKSB7XG4gICAgICBub3JtYWxpemVkUGF0aCA9IHJlc29sdmVQYXRoKG5vcm1hbGl6ZWRQYXRoLCByYW5nZS5zb3VyY2UuaW50ZXJuYWxQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFub3JtYWxpemVkUGF0aC5zdGFydHNXaXRoKExJQlJBUllfUFJFRklYKSkgbm9ybWFsaXplZFBhdGggPSBMSUJSQVJZX1BSRUZJWCArIG5vcm1hbGl6ZWRQYXRoO1xuICAgIH1cbiAgICBzdG10LmludGVybmFsUGF0aCA9IG1hbmdsZUludGVybmFsUGF0aChub3JtYWxpemVkUGF0aCk7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSW1wb3J0RGVjbGFyYXRpb24oXG4gICAgZm9yZWlnbk5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uIHwgbnVsbCxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogSW1wb3J0RGVjbGFyYXRpb24ge1xuICAgIHZhciBlbGVtID0gbmV3IEltcG9ydERlY2xhcmF0aW9uKCk7XG4gICAgZWxlbS5yYW5nZSA9IHJhbmdlO1xuICAgIGVsZW0uZm9yZWlnbk5hbWUgPSBmb3JlaWduTmFtZTtcbiAgICBpZiAoIW5hbWUpIG5hbWUgPSBmb3JlaWduTmFtZTtcbiAgICBlbGVtLm5hbWUgPSBuYW1lO1xuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUludGVyZmFjZURlY2xhcmF0aW9uKFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIHR5cGVQYXJhbWV0ZXJzOiBUeXBlUGFyYW1ldGVyTm9kZVtdIHwgbnVsbCxcbiAgICBleHRlbmRzVHlwZTogTmFtZWRUeXBlTm9kZSB8IG51bGwsIC8vIGNhbid0IGJlIGEgZnVuY3Rpb25cbiAgICBtZW1iZXJzOiBEZWNsYXJhdGlvblN0YXRlbWVudFtdLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgZmxhZ3M6IENvbW1vbkZsYWdzLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBJbnRlcmZhY2VEZWNsYXJhdGlvbiB7XG4gICAgdmFyIHN0bXQgPSBuZXcgSW50ZXJmYWNlRGVjbGFyYXRpb24oKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5mbGFncyA9IGZsYWdzO1xuICAgIHN0bXQubmFtZSA9IG5hbWU7XG4gICAgc3RtdC50eXBlUGFyYW1ldGVycyA9IHR5cGVQYXJhbWV0ZXJzO1xuICAgIHN0bXQuZXh0ZW5kc1R5cGUgPSBleHRlbmRzVHlwZTtcbiAgICBzdG10Lm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgIHN0bXQuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnM7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRmllbGREZWNsYXJhdGlvbihcbiAgICBuYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICB0eXBlOiBUeXBlTm9kZSB8IG51bGwsXG4gICAgaW5pdGlhbGl6ZXI6IEV4cHJlc3Npb24gfCBudWxsLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgZmxhZ3M6IENvbW1vbkZsYWdzLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBGaWVsZERlY2xhcmF0aW9uIHtcbiAgICB2YXIgc3RtdCA9IG5ldyBGaWVsZERlY2xhcmF0aW9uKCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuZmxhZ3MgPSBmbGFncztcbiAgICBzdG10Lm5hbWUgPSBuYW1lO1xuICAgIHN0bXQudHlwZSA9IHR5cGU7XG4gICAgc3RtdC5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuICAgIHN0bXQuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnM7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRm9yU3RhdGVtZW50KFxuICAgIGluaXRpYWxpemVyOiBTdGF0ZW1lbnQgfCBudWxsLFxuICAgIGNvbmRpdGlvbjogRXhwcmVzc2lvbiB8IG51bGwsXG4gICAgaW5jcmVtZW50b3I6IEV4cHJlc3Npb24gfCBudWxsLFxuICAgIHN0YXRlbWVudDogU3RhdGVtZW50LFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBGb3JTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IEZvclN0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmluaXRpYWxpemVyID0gaW5pdGlhbGl6ZXI7XG4gICAgc3RtdC5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgc3RtdC5pbmNyZW1lbnRvciA9IGluY3JlbWVudG9yO1xuICAgIHN0bXQuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUZ1bmN0aW9uRGVjbGFyYXRpb24oXG4gICAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgdHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJOb2RlW10gfCBudWxsLFxuICAgIHNpZ25hdHVyZTogRnVuY3Rpb25UeXBlTm9kZSxcbiAgICBib2R5OiBTdGF0ZW1lbnQgfCBudWxsLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgZmxhZ3M6IENvbW1vbkZsYWdzLFxuICAgIGFycm93S2luZDogQXJyb3dLaW5kLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBGdW5jdGlvbkRlY2xhcmF0aW9uIHtcbiAgICB2YXIgc3RtdCA9IG5ldyBGdW5jdGlvbkRlY2xhcmF0aW9uKCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuZmxhZ3MgPSBmbGFncztcbiAgICBzdG10Lm5hbWUgPSBuYW1lO1xuICAgIHN0bXQudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcbiAgICBzdG10LnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICBzdG10LmJvZHkgPSBib2R5O1xuICAgIHN0bXQuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnM7XG4gICAgc3RtdC5hcnJvd0tpbmQgPSBhcnJvd0tpbmQ7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbihcbiAgICBrZXlUeXBlOiBOYW1lZFR5cGVOb2RlLFxuICAgIHZhbHVlVHlwZTogVHlwZU5vZGUsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24ge1xuICAgIHZhciBlbGVtID0gbmV3IEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24oKTtcbiAgICBlbGVtLnJhbmdlID0gcmFuZ2U7XG4gICAgZWxlbS5rZXlUeXBlID0ga2V5VHlwZTtcbiAgICBlbGVtLnZhbHVlVHlwZSA9IHZhbHVlVHlwZTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVNZXRob2REZWNsYXJhdGlvbihcbiAgICBuYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbixcbiAgICB0eXBlUGFyYW1ldGVyczogVHlwZVBhcmFtZXRlck5vZGVbXSB8IG51bGwsXG4gICAgc2lnbmF0dXJlOiBGdW5jdGlvblR5cGVOb2RlLFxuICAgIGJvZHk6IFN0YXRlbWVudCB8IG51bGwsXG4gICAgZGVjb3JhdG9yczogRGVjb3JhdG9yTm9kZVtdIHwgbnVsbCxcbiAgICBmbGFnczogQ29tbW9uRmxhZ3MsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IE1ldGhvZERlY2xhcmF0aW9uIHtcbiAgICB2YXIgc3RtdCA9IG5ldyBNZXRob2REZWNsYXJhdGlvbigpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmZsYWdzID0gZmxhZ3M7XG4gICAgc3RtdC5uYW1lID0gbmFtZTtcbiAgICBzdG10LnR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnM7XG4gICAgc3RtdC5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgc3RtdC5ib2R5ID0gYm9keTtcbiAgICBzdG10LmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5hbWVzcGFjZURlY2xhcmF0aW9uKFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIG1lbWJlcnM6IFN0YXRlbWVudFtdLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgZmxhZ3M6IENvbW1vbkZsYWdzLFxuICAgIHJhbmdlOiBSYW5nZVxuICApOiBOYW1lc3BhY2VEZWNsYXJhdGlvbiB7XG4gICAgdmFyIHN0bXQgPSBuZXcgTmFtZXNwYWNlRGVjbGFyYXRpb24oKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5mbGFncyA9IGZsYWdzO1xuICAgIHN0bXQubmFtZSA9IG5hbWU7XG4gICAgc3RtdC5tZW1iZXJzID0gbWVtYmVycztcbiAgICBzdG10LmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVJldHVyblN0YXRlbWVudChcbiAgICB2YWx1ZTogRXhwcmVzc2lvbiB8IG51bGwsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFJldHVyblN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgUmV0dXJuU3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVTd2l0Y2hTdGF0ZW1lbnQoXG4gICAgY29uZGl0aW9uOiBFeHByZXNzaW9uLFxuICAgIGNhc2VzOiBTd2l0Y2hDYXNlW10sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFN3aXRjaFN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgU3dpdGNoU3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIHN0bXQuY2FzZXMgPSBjYXNlcztcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVTd2l0Y2hDYXNlKFxuICAgIGxhYmVsOiBFeHByZXNzaW9uIHwgbnVsbCxcbiAgICBzdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXSxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogU3dpdGNoQ2FzZSB7XG4gICAgdmFyIGVsZW0gPSBuZXcgU3dpdGNoQ2FzZSgpO1xuICAgIGVsZW0ucmFuZ2UgPSByYW5nZTtcbiAgICBlbGVtLmxhYmVsID0gbGFiZWw7XG4gICAgZWxlbS5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVUaHJvd1N0YXRlbWVudChcbiAgICB2YWx1ZTogRXhwcmVzc2lvbixcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVGhyb3dTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IFRocm93U3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVUcnlTdGF0ZW1lbnQoXG4gICAgc3RhdGVtZW50czogU3RhdGVtZW50W10sXG4gICAgY2F0Y2hWYXJpYWJsZTogSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsLFxuICAgIGNhdGNoU3RhdGVtZW50czogU3RhdGVtZW50W10gfCBudWxsLFxuICAgIGZpbmFsbHlTdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXSB8IG51bGwsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFRyeVN0YXRlbWVudCB7XG4gICAgdmFyIHN0bXQgPSBuZXcgVHJ5U3RhdGVtZW50KCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgc3RtdC5jYXRjaFZhcmlhYmxlID0gY2F0Y2hWYXJpYWJsZTtcbiAgICBzdG10LmNhdGNoU3RhdGVtZW50cyA9IGNhdGNoU3RhdGVtZW50cztcbiAgICBzdG10LmZpbmFsbHlTdGF0ZW1lbnRzID0gZmluYWxseVN0YXRlbWVudHM7XG4gICAgcmV0dXJuIHN0bXQ7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlVHlwZURlY2xhcmF0aW9uKFxuICAgIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uLFxuICAgIHR5cGVQYXJhbWV0ZXJzOiBUeXBlUGFyYW1ldGVyTm9kZVtdIHwgbnVsbCxcbiAgICBhbGlhczogVHlwZU5vZGUsXG4gICAgZGVjb3JhdG9yczogRGVjb3JhdG9yTm9kZVtdIHwgbnVsbCxcbiAgICBmbGFnczogQ29tbW9uRmxhZ3MsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFR5cGVEZWNsYXJhdGlvbiB7XG4gICAgdmFyIHN0bXQgPSBuZXcgVHlwZURlY2xhcmF0aW9uKCk7XG4gICAgc3RtdC5yYW5nZSA9IHJhbmdlO1xuICAgIHN0bXQuZmxhZ3MgPSBmbGFncztcbiAgICBzdG10Lm5hbWUgPSBuYW1lO1xuICAgIHN0bXQudHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycztcbiAgICBzdG10LnR5cGUgPSBhbGlhcztcbiAgICBzdG10LmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVZhcmlhYmxlU3RhdGVtZW50KFxuICAgIGRlY2xhcmF0aW9uczogVmFyaWFibGVEZWNsYXJhdGlvbltdLFxuICAgIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGwsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFZhcmlhYmxlU3RhdGVtZW50IHtcbiAgICB2YXIgc3RtdCA9IG5ldyBWYXJpYWJsZVN0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICBzdG10LmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzO1xuICAgIHJldHVybiBzdG10O1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRpb24oXG4gICAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb24sXG4gICAgdHlwZTogVHlwZU5vZGUgfCBudWxsLFxuICAgIGluaXRpYWxpemVyOiBFeHByZXNzaW9uIHwgbnVsbCxcbiAgICBkZWNvcmF0b3JzOiBEZWNvcmF0b3JOb2RlW10gfCBudWxsLFxuICAgIGZsYWdzOiBDb21tb25GbGFncyxcbiAgICByYW5nZTogUmFuZ2VcbiAgKTogVmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gICAgdmFyIGVsZW0gPSBuZXcgVmFyaWFibGVEZWNsYXJhdGlvbigpO1xuICAgIGVsZW0ucmFuZ2UgPSByYW5nZTtcbiAgICBlbGVtLmZsYWdzID0gZmxhZ3M7XG4gICAgZWxlbS5uYW1lID0gbmFtZTtcbiAgICBlbGVtLnR5cGUgPSB0eXBlO1xuICAgIGVsZW0uaW5pdGlhbGl6ZXIgPSBpbml0aWFsaXplcjtcbiAgICBlbGVtLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzOyAvLyBpbmhlcml0ZWRcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVWb2lkU3RhdGVtZW50KFxuICAgIGV4cHJlc3Npb246IEV4cHJlc3Npb24sXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFZvaWRTdGF0ZW1lbnQge1xuICAgIHZhciBzdG10ID0gbmV3IFZvaWRTdGF0ZW1lbnQoKTtcbiAgICBzdG10LnJhbmdlID0gcmFuZ2U7XG4gICAgc3RtdC5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVXaGlsZVN0YXRlbWVudChcbiAgICBjb25kaXRpb246IEV4cHJlc3Npb24sXG4gICAgc3RhdGVtZW50OiBTdGF0ZW1lbnQsXG4gICAgcmFuZ2U6IFJhbmdlXG4gICk6IFdoaWxlU3RhdGVtZW50IHtcbiAgICB2YXIgc3RtdCA9IG5ldyBXaGlsZVN0YXRlbWVudCgpO1xuICAgIHN0bXQucmFuZ2UgPSByYW5nZTtcbiAgICBzdG10LmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBzdG10LnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICByZXR1cm4gc3RtdDtcbiAgfVxufVxuXG4vLyB0eXBlc1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHlwZU5vZGUgZXh0ZW5kcyBOb2RlIHtcbiAgLy8ga2luZCB2YXJpZXNcblxuICAvKiogV2hldGhlciBudWxsYWJsZSBvciBub3QuICovXG4gIGlzTnVsbGFibGU6IGJvb2w7XG5cbiAgLyoqIFRlc3RzIGlmIHRoaXMgdHlwZSBoYXMgYSBnZW5lcmljIGNvbXBvbmVudCBtYXRjaGluZyBvbmUgb2YgdGhlIGdpdmVuIHR5cGUgcGFyYW1ldGVycy4gKi9cbiAgaGFzR2VuZXJpY0NvbXBvbmVudCh0eXBlUGFyYW1ldGVyTm9kZXM6IFR5cGVQYXJhbWV0ZXJOb2RlW10pOiBib29sIHtcbiAgICB2YXIgc2VsZiA9IDxUeXBlTm9kZT50aGlzOyAvLyBUUyBvdGhlcndpc2UgY29tcGxhaW5zXG4gICAgaWYgKHRoaXMua2luZCA9PSBOb2RlS2luZC5OQU1FRFRZUEUpIHtcbiAgICAgIGlmICghKDxOYW1lZFR5cGVOb2RlPnNlbGYpLm5hbWUubmV4dCkge1xuICAgICAgICBsZXQgdHlwZUFyZ3VtZW50Tm9kZXMgPSAoPE5hbWVkVHlwZU5vZGU+c2VsZikudHlwZUFyZ3VtZW50cztcbiAgICAgICAgaWYgKHR5cGVBcmd1bWVudE5vZGVzICE9PSBudWxsICYmIHR5cGVBcmd1bWVudE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gdHlwZUFyZ3VtZW50Tm9kZXMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgICAgICBpZiAodHlwZUFyZ3VtZW50Tm9kZXNbaV0uaGFzR2VuZXJpY0NvbXBvbmVudCh0eXBlUGFyYW1ldGVyTm9kZXMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG5hbWUgPSAoPE5hbWVkVHlwZU5vZGU+c2VsZikubmFtZS5pZGVudGlmaWVyLnRleHQ7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSB0eXBlUGFyYW1ldGVyTm9kZXMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgICAgICBpZiAodHlwZVBhcmFtZXRlck5vZGVzW2ldLm5hbWUudGV4dCA9PSBuYW1lKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMua2luZCA9PSBOb2RlS2luZC5GVU5DVElPTlRZUEUpIHtcbiAgICAgIGxldCBwYXJhbWV0ZXJOb2RlcyA9ICg8RnVuY3Rpb25UeXBlTm9kZT5zZWxmKS5wYXJhbWV0ZXJzO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBwYXJhbWV0ZXJOb2Rlcy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgaWYgKHBhcmFtZXRlck5vZGVzW2ldLnR5cGUuaGFzR2VuZXJpY0NvbXBvbmVudCh0eXBlUGFyYW1ldGVyTm9kZXMpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICgoPEZ1bmN0aW9uVHlwZU5vZGU+c2VsZikucmV0dXJuVHlwZS5oYXNHZW5lcmljQ29tcG9uZW50KHR5cGVQYXJhbWV0ZXJOb2RlcykpIHJldHVybiB0cnVlO1xuICAgICAgbGV0IGV4cGxpY2l0VGhpc1R5cGUgPSAoPEZ1bmN0aW9uVHlwZU5vZGU+c2VsZikuZXhwbGljaXRUaGlzVHlwZTtcbiAgICAgIGlmIChleHBsaWNpdFRoaXNUeXBlICE9PSBudWxsICYmIGV4cGxpY2l0VGhpc1R5cGUuaGFzR2VuZXJpY0NvbXBvbmVudCh0eXBlUGFyYW1ldGVyTm9kZXMpKSByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgdHlwZSBuYW1lLiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVOYW1lIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5UWVBFTkFNRTtcblxuICAvKiogSWRlbnRpZmllciBvZiB0aGlzIHBhcnQuICovXG4gIGlkZW50aWZpZXI6IElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAvKiogTmV4dCBwYXJ0IG9mIHRoZSB0eXBlIG5hbWUgb3IgYG51bGxgIGlmIHRoaXMgaXMgdGhlIGxhc3QgcGFydC4gKi9cbiAgbmV4dDogVHlwZU5hbWUgfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIG5hbWVkIHR5cGUuICovXG5leHBvcnQgY2xhc3MgTmFtZWRUeXBlTm9kZSBleHRlbmRzIFR5cGVOb2RlIHtcbiAga2luZCA9IE5vZGVLaW5kLk5BTUVEVFlQRTtcblxuICAvKiogVHlwZSBuYW1lLiAqL1xuICBuYW1lOiBUeXBlTmFtZTtcbiAgLyoqIFR5cGUgYXJndW1lbnQgcmVmZXJlbmNlcy4gKi9cbiAgdHlwZUFyZ3VtZW50czogVHlwZU5vZGVbXSB8IG51bGw7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgZnVuY3Rpb24gdHlwZS4gKi9cbmV4cG9ydCBjbGFzcyBGdW5jdGlvblR5cGVOb2RlIGV4dGVuZHMgVHlwZU5vZGUge1xuICBraW5kID0gTm9kZUtpbmQuRlVOQ1RJT05UWVBFO1xuXG4gIC8qKiBBY2NlcHRlZCBwYXJhbWV0ZXJzLiAqL1xuICBwYXJhbWV0ZXJzOiBQYXJhbWV0ZXJOb2RlW107XG4gIC8qKiBSZXR1cm4gdHlwZS4gKi9cbiAgcmV0dXJuVHlwZTogVHlwZU5vZGU7XG4gIC8qKiBFeHBsaWNpdGx5IHByb3ZpZGVkIHRoaXMgdHlwZSwgaWYgYW55LiAqL1xuICBleHBsaWNpdFRoaXNUeXBlOiBOYW1lZFR5cGVOb2RlIHwgbnVsbDsgLy8gY2FuJ3QgYmUgYSBmdW5jdGlvblxufVxuXG4vKiogUmVwcmVzZW50cyBhIHR5cGUgcGFyYW1ldGVyLiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVQYXJhbWV0ZXJOb2RlIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5UWVBFUEFSQU1FVEVSO1xuXG4gIC8qKiBJZGVudGlmaWVyIHJlZmVyZW5jZS4gKi9cbiAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb247XG4gIC8qKiBFeHRlbmRlZCB0eXBlIHJlZmVyZW5jZSwgaWYgYW55LiAqL1xuICBleHRlbmRzVHlwZTogTmFtZWRUeXBlTm9kZSB8IG51bGw7IC8vIGNhbid0IGJlIGEgZnVuY3Rpb25cbiAgLyoqIERlZmF1bHQgdHlwZSBpZiBvbWl0dGVkLCBpZiBhbnkuICovXG4gIGRlZmF1bHRUeXBlOiBOYW1lZFR5cGVOb2RlIHwgbnVsbDsgLy8gY2FuJ3QgYmUgYSBmdW5jdGlvblxufVxuXG4vKiogUmVwcmVzZW50cyB0aGUga2luZCBvZiBhIHBhcmFtZXRlci4gKi9cbmV4cG9ydCBlbnVtIFBhcmFtZXRlcktpbmQge1xuICAvKiogTm8gc3BlY2lmaWMgZmxhZ3MuICovXG4gIERFRkFVTFQsXG4gIC8qKiBJcyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIuICovXG4gIE9QVElPTkFMLFxuICAvKiogSXMgYSByZXN0IHBhcmFtZXRlci4gKi9cbiAgUkVTVFxufVxuXG4vKiogUmVwcmVzZW50cyBhIGZ1bmN0aW9uIHBhcmFtZXRlci4gKi9cbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJOb2RlIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5QQVJBTUVURVI7XG5cbiAgLyoqIFBhcmFtZXRlciBraW5kLiAqL1xuICBwYXJhbWV0ZXJLaW5kOiBQYXJhbWV0ZXJLaW5kO1xuICAvKiogUGFyYW1ldGVyIG5hbWUuICovXG4gIG5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uO1xuICAvKiogUGFyYW1ldGVyIHR5cGUuICovXG4gIHR5cGU6IFR5cGVOb2RlO1xuICAvKiogSW5pdGlhbGl6ZXIgZXhwcmVzc2lvbiwgaWYgcHJlc2VudC4gKi9cbiAgaW5pdGlhbGl6ZXI6IEV4cHJlc3Npb24gfCBudWxsO1xuICAvKiogSW1wbGljaXQgZmllbGQgZGVjbGFyYXRpb24sIGlmIGFwcGxpY2FibGUuICovXG4gIGltcGxpY2l0RmllbGREZWNsYXJhdGlvbjogRmllbGREZWNsYXJhdGlvbiB8IG51bGwgPSBudWxsO1xuICAvKiogQ29tbW9uIGZsYWdzIGluZGljYXRpbmcgc3BlY2lmaWMgdHJhaXRzLiAqL1xuICBmbGFnczogQ29tbW9uRmxhZ3MgPSBDb21tb25GbGFncy5OT05FO1xuXG4gIC8qKiBUZXN0cyBpZiB0aGlzIG5vZGUgaGFzIHRoZSBzcGVjaWZpZWQgZmxhZyBvciBmbGFncy4gKi9cbiAgaXMoZmxhZzogQ29tbW9uRmxhZ3MpOiBib29sIHsgcmV0dXJuICh0aGlzLmZsYWdzICYgZmxhZykgPT0gZmxhZzsgfVxuICAvKiogVGVzdHMgaWYgdGhpcyBub2RlIGhhcyBvbmUgb2YgdGhlIHNwZWNpZmllZCBmbGFncy4gKi9cbiAgaXNBbnkoZmxhZzogQ29tbW9uRmxhZ3MpOiBib29sIHsgcmV0dXJuICh0aGlzLmZsYWdzICYgZmxhZykgIT0gMDsgfVxuICAvKiogU2V0cyBhIHNwZWNpZmljIGZsYWcgb3IgZmxhZ3MuICovXG4gIHNldChmbGFnOiBDb21tb25GbGFncyk6IHZvaWQgeyB0aGlzLmZsYWdzIHw9IGZsYWc7IH1cbn1cblxuLy8gc3BlY2lhbFxuXG4vKiogQnVpbHQtaW4gZGVjb3JhdG9yIGtpbmRzLiAqL1xuZXhwb3J0IGVudW0gRGVjb3JhdG9yS2luZCB7XG4gIENVU1RPTSxcbiAgR0xPQkFMLFxuICBPUEVSQVRPUixcbiAgT1BFUkFUT1JfQklOQVJZLFxuICBPUEVSQVRPUl9QUkVGSVgsXG4gIE9QRVJBVE9SX1BPU1RGSVgsXG4gIFVOTUFOQUdFRCxcbiAgU0VBTEVELFxuICBJTkxJTkUsXG4gIEVYVEVSTkFMLFxuICBCVUlMVElOLFxuICBMQVpZLFxuICBVTlNBRkVcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBEZWNvcmF0b3JLaW5kIHtcblxuICAvKiogUmV0dXJucyB0aGUga2luZCBvZiB0aGUgc3BlY2lmaWVkIGRlY29yYXRvciBuYW1lIG5vZGUuIERlZmF1bHRzIHRvIHtAbGluayBEZWNvcmF0b3JLaW5kLkNVU1RPTX0uICovXG4gIGV4cG9ydCBmdW5jdGlvbiBmcm9tTm9kZShuYW1lTm9kZTogRXhwcmVzc2lvbik6IERlY29yYXRvcktpbmQge1xuICAgIC8vIEBnbG9iYWwsIEBpbmxpbmUsIEBvcGVyYXRvciwgQHNlYWxlZCwgQHVubWFuYWdlZFxuICAgIGlmIChuYW1lTm9kZS5raW5kID09IE5vZGVLaW5kLklERU5USUZJRVIpIHtcbiAgICAgIGxldCBuYW1lU3RyID0gKDxJZGVudGlmaWVyRXhwcmVzc2lvbj5uYW1lTm9kZSkudGV4dDtcbiAgICAgIGFzc2VydChuYW1lU3RyLmxlbmd0aCk7XG4gICAgICBzd2l0Y2ggKG5hbWVTdHIuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICBjYXNlIENoYXJDb2RlLmI6IHtcbiAgICAgICAgICBpZiAobmFtZVN0ciA9PSBcImJ1aWx0aW5cIikgcmV0dXJuIERlY29yYXRvcktpbmQuQlVJTFRJTjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLmU6IHtcbiAgICAgICAgICBpZiAobmFtZVN0ciA9PSBcImV4dGVybmFsXCIpIHJldHVybiBEZWNvcmF0b3JLaW5kLkVYVEVSTkFMO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuZzoge1xuICAgICAgICAgIGlmIChuYW1lU3RyID09IFwiZ2xvYmFsXCIpIHJldHVybiBEZWNvcmF0b3JLaW5kLkdMT0JBTDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLmk6IHtcbiAgICAgICAgICBpZiAobmFtZVN0ciA9PSBcImlubGluZVwiKSByZXR1cm4gRGVjb3JhdG9yS2luZC5JTkxJTkU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5sOiB7XG4gICAgICAgICAgaWYgKG5hbWVTdHIgPT0gXCJsYXp5XCIpIHJldHVybiBEZWNvcmF0b3JLaW5kLkxBWlk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5vOiB7XG4gICAgICAgICAgaWYgKG5hbWVTdHIgPT0gXCJvcGVyYXRvclwiKSByZXR1cm4gRGVjb3JhdG9yS2luZC5PUEVSQVRPUjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLnM6IHtcbiAgICAgICAgICBpZiAobmFtZVN0ciA9PSBcInNlYWxlZFwiKSByZXR1cm4gRGVjb3JhdG9yS2luZC5TRUFMRUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS51OiB7XG4gICAgICAgICAgaWYgKG5hbWVTdHIgPT0gXCJ1bm1hbmFnZWRcIikgcmV0dXJuIERlY29yYXRvcktpbmQuVU5NQU5BR0VEO1xuICAgICAgICAgIGlmIChuYW1lU3RyID09IFwidW5zYWZlXCIpIHJldHVybiBEZWNvcmF0b3JLaW5kLlVOU0FGRTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBuYW1lTm9kZS5raW5kID09IE5vZGVLaW5kLlBST1BFUlRZQUNDRVNTICYmXG4gICAgICAoPFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbj5uYW1lTm9kZSkuZXhwcmVzc2lvbi5raW5kID09IE5vZGVLaW5kLklERU5USUZJRVJcbiAgICApIHtcbiAgICAgIGxldCBuYW1lU3RyID0gKDxJZGVudGlmaWVyRXhwcmVzc2lvbj4oPFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbj5uYW1lTm9kZSkuZXhwcmVzc2lvbikudGV4dDtcbiAgICAgIGFzc2VydChuYW1lU3RyLmxlbmd0aCk7XG4gICAgICBsZXQgcHJvcFN0ciA9ICg8UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uPm5hbWVOb2RlKS5wcm9wZXJ0eS50ZXh0O1xuICAgICAgYXNzZXJ0KHByb3BTdHIubGVuZ3RoKTtcbiAgICAgIC8vIEBvcGVyYXRvci5iaW5hcnksIEBvcGVyYXRvci5wcmVmaXgsIEBvcGVyYXRvci5wb3N0Zml4XG4gICAgICBpZiAobmFtZVN0ciA9PSBcIm9wZXJhdG9yXCIpIHtcbiAgICAgICAgc3dpdGNoIChwcm9wU3RyLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBjYXNlIENoYXJDb2RlLmI6IHtcbiAgICAgICAgICAgIGlmIChwcm9wU3RyID09IFwiYmluYXJ5XCIpIHJldHVybiBEZWNvcmF0b3JLaW5kLk9QRVJBVE9SX0JJTkFSWTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIENoYXJDb2RlLnA6IHtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvcFN0cikge1xuICAgICAgICAgICAgICBjYXNlIFwicHJlZml4XCI6IHJldHVybiBEZWNvcmF0b3JLaW5kLk9QRVJBVE9SX1BSRUZJWDtcbiAgICAgICAgICAgICAgY2FzZSBcInBvc3RmaXhcIjogcmV0dXJuIERlY29yYXRvcktpbmQuT1BFUkFUT1JfUE9TVEZJWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gRGVjb3JhdG9yS2luZC5DVVNUT007XG4gIH1cbn1cblxuLyoqIFJlcHJlc2VudHMgYSBkZWNvcmF0b3IuICovXG5leHBvcnQgY2xhc3MgRGVjb3JhdG9yTm9kZSBleHRlbmRzIE5vZGUge1xuICBraW5kID0gTm9kZUtpbmQuREVDT1JBVE9SO1xuXG4gIC8qKiBCdWlsdC1pbiBraW5kLCBpZiBhcHBsaWNhYmxlLiAqL1xuICBkZWNvcmF0b3JLaW5kOiBEZWNvcmF0b3JLaW5kO1xuICAvKiogTmFtZSBleHByZXNzaW9uLiAqL1xuICBuYW1lOiBFeHByZXNzaW9uO1xuICAvKiogQXJndW1lbnQgZXhwcmVzc2lvbnMuICovXG4gIGFyZ3VtZW50czogRXhwcmVzc2lvbltdIHwgbnVsbDtcbn1cblxuLyoqIENvbW1lbnQga2luZHMuICovXG5leHBvcnQgZW51bSBDb21tZW50S2luZCB7XG4gIC8qKiBMaW5lIGNvbW1lbnQuICovXG4gIExJTkUsXG4gIC8qKiBUcmlwbGUtc2xhc2ggY29tbWVudC4gKi9cbiAgVFJJUExFLFxuICAvKiogQmxvY2sgY29tbWVudC4gKi9cbiAgQkxPQ0tcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBjb21tZW50LiAqL1xuZXhwb3J0IGNsYXNzIENvbW1lbnROb2RlIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5DT01NRU5UO1xuXG4gIC8qKiBDb21tZW50IGtpbmQuICovXG4gIGNvbW1lbnRLaW5kOiBDb21tZW50S2luZDtcbiAgLyoqIENvbW1lbnQgdGV4dC4gKi9cbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vLyBleHByZXNzaW9uc1xuXG4vKiogQmFzZSBjbGFzcyBvZiBhbGwgZXhwcmVzc2lvbiBub2Rlcy4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgTm9kZSB7IH1cblxuLyoqIFJlcHJlc2VudHMgYW4gaWRlbnRpZmllciBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5JREVOVElGSUVSO1xuXG4gIC8qKiBUZXh0dWFsIG5hbWUuICovXG4gIHRleHQ6IHN0cmluZztcbiAgLyoqIFN5bWJvbC4gKi9cbiAgc3ltYm9sOiBzdHJpbmc7IC8vIFRPRE86IHN5bWJvbFxuICAvKiogV2hldGhlciBxdW90ZWQgb3Igbm90LiAqL1xuICBpc1F1b3RlZDogYm9vbDtcbn1cblxuLyoqIEluZGljYXRlcyB0aGUga2luZCBvZiBhIGxpdGVyYWwuICovXG5leHBvcnQgZW51bSBMaXRlcmFsS2luZCB7XG4gIEZMT0FULFxuICBJTlRFR0VSLFxuICBTVFJJTkcsXG4gIFJFR0VYUCxcbiAgQVJSQVksXG4gIE9CSkVDVFxufVxuXG4vKiogQmFzZSBjbGFzcyBvZiBhbGwgbGl0ZXJhbCBleHByZXNzaW9ucy4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMaXRlcmFsRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuTElURVJBTDtcblxuICAvKiogU3BlY2lmaWMgbGl0ZXJhbCBraW5kLiAqL1xuICBsaXRlcmFsS2luZDogTGl0ZXJhbEtpbmQ7XG59XG5cbi8qKiBSZXByZXNlbnRzIGFuIGBbXWAgbGl0ZXJhbCBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5TGl0ZXJhbEV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGxpdGVyYWxLaW5kID0gTGl0ZXJhbEtpbmQuQVJSQVk7XG5cbiAgLyoqIE5lc3RlZCBlbGVtZW50IGV4cHJlc3Npb25zLiAqL1xuICBlbGVtZW50RXhwcmVzc2lvbnM6IChFeHByZXNzaW9uIHwgbnVsbClbXTtcbn1cblxuLyoqIEluZGljYXRlcyB0aGUga2luZCBvZiBhbiBhc3NlcnRpb24uICovXG5leHBvcnQgZW51bSBBc3NlcnRpb25LaW5kIHtcbiAgUFJFRklYLFxuICBBUyxcbiAgTk9OTlVMTFxufVxuXG4vKiogUmVwcmVzZW50cyBhbiBhc3NlcnRpb24gZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBBc3NlcnRpb25FeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5BU1NFUlRJT047XG5cbiAgLyoqIFNwZWNpZmljIGtpbmQgb2YgdGhpcyBhc3NlcnRpb24uICovXG4gIGFzc2VydGlvbktpbmQ6IEFzc2VydGlvbktpbmQ7XG4gIC8qKiBFeHByZXNzaW9uIGJlaW5nIGFzc2VydGVkLiAqL1xuICBleHByZXNzaW9uOiBFeHByZXNzaW9uO1xuICAvKiogVGFyZ2V0IHR5cGUuICovXG4gIHRvVHlwZTogVHlwZU5vZGUgfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGJpbmFyeSBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLkJJTkFSWTtcblxuICAvKiogT3BlcmF0b3IgdG9rZW4uICovXG4gIG9wZXJhdG9yOiBUb2tlbjtcbiAgLyoqIExlZnQtaGFuZCBzaWRlIGV4cHJlc3Npb24gKi9cbiAgbGVmdDogRXhwcmVzc2lvbjtcbiAgLyoqIFJpZ2h0LWhhbmQgc2lkZSBleHByZXNzaW9uLiAqL1xuICByaWdodDogRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBjYWxsIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgQ2FsbEV4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLkNBTEw7XG5cbiAgLyoqIENhbGxlZCBleHByZXNzaW9uLiBVc3VhbGx5IGFuIGlkZW50aWZpZXIgb3IgcHJvcGVydHkgYWNjZXNzIGV4cHJlc3Npb24uICovXG4gIGV4cHJlc3Npb246IEV4cHJlc3Npb247XG4gIC8qKiBQcm92aWRlZCB0eXBlIGFyZ3VtZW50cy4gKi9cbiAgdHlwZUFyZ3VtZW50czogVHlwZU5vZGVbXSB8IG51bGw7XG4gIC8qKiBQcm92aWRlZCBhcmd1bWVudHMuICovXG4gIGFyZ3VtZW50czogRXhwcmVzc2lvbltdO1xuXG4gIC8qKiBHZXRzIHRoZSB0eXBlIGFyZ3VtZW50cyByYW5nZSBmb3IgcmVwb3J0aW5nLiAqL1xuICBnZXQgdHlwZUFyZ3VtZW50c1JhbmdlKCk6IFJhbmdlIHtcbiAgICB2YXIgdHlwZUFyZ3VtZW50cyA9IHRoaXMudHlwZUFyZ3VtZW50cztcbiAgICB2YXIgbnVtVHlwZUFyZ3VtZW50czogaTMyO1xuICAgIGlmICh0eXBlQXJndW1lbnRzICYmIChudW1UeXBlQXJndW1lbnRzID0gdHlwZUFyZ3VtZW50cy5sZW5ndGgpKSB7XG4gICAgICByZXR1cm4gUmFuZ2Uuam9pbih0eXBlQXJndW1lbnRzWzBdLnJhbmdlLCB0eXBlQXJndW1lbnRzW251bVR5cGVBcmd1bWVudHMgLSAxXS5yYW5nZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb24ucmFuZ2U7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgYXJndW1lbnRzIHJhbmdlIGZvciByZXBvcnRpbmcuICovXG4gIGdldCBhcmd1bWVudHNSYW5nZSgpOiBSYW5nZSB7XG4gICAgdmFyIGFyZ3MgPSB0aGlzLmFyZ3VtZW50cztcbiAgICB2YXIgbnVtQXJndW1lbnRzID0gYXJncy5sZW5ndGg7XG4gICAgaWYgKG51bUFyZ3VtZW50cykge1xuICAgICAgcmV0dXJuIFJhbmdlLmpvaW4oYXJnc1swXS5yYW5nZSwgYXJnc1tudW1Bcmd1bWVudHMgLSAxXS5yYW5nZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb24ucmFuZ2U7XG4gIH1cbn1cblxuLyoqIFJlcHJlc2VudHMgYSBjbGFzcyBleHByZXNzaW9uIHVzaW5nIHRoZSAnY2xhc3MnIGtleXdvcmQuICovXG5leHBvcnQgY2xhc3MgQ2xhc3NFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5DTEFTUztcblxuICAvKiogSW5saW5lIGNsYXNzIGRlY2xhcmF0aW9uLiAqL1xuICBkZWNsYXJhdGlvbjogQ2xhc3NEZWNsYXJhdGlvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBjb21tYSBleHByZXNzaW9uIGNvbXBvc2VkIG9mIG11bHRpcGxlIGV4cHJlc3Npb25zLiAqL1xuZXhwb3J0IGNsYXNzIENvbW1hRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuQ09NTUE7XG5cbiAgLyoqIFNlcXVlbnRpYWwgZXhwcmVzc2lvbnMuICovXG4gIGV4cHJlc3Npb25zOiBFeHByZXNzaW9uW107XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYGNvbnN0cnVjdG9yYCBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIENvbnN0cnVjdG9yRXhwcmVzc2lvbiBleHRlbmRzIElkZW50aWZpZXJFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLkNPTlNUUlVDVE9SO1xuICB0ZXh0ID0gXCJjb25zdHJ1Y3RvclwiO1xuICBzeW1ib2wgPSBDb21tb25TeW1ib2xzLmNvbnN0cnVjdG9yO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBlbGVtZW50IGFjY2VzcyBleHByZXNzaW9uLCBlLmcuLCBhcnJheSBhY2Nlc3MuICovXG5leHBvcnQgY2xhc3MgRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLkVMRU1FTlRBQ0NFU1M7XG5cbiAgLyoqIEV4cHJlc3Npb24gYmVpbmcgYWNjZXNzZWQuICovXG4gIGV4cHJlc3Npb246IEV4cHJlc3Npb247XG4gIC8qKiBFbGVtZW50IG9mIHRoZSBleHByZXNzaW9uIGJlaW5nIGFjY2Vzc2VkLiAqL1xuICBlbGVtZW50RXhwcmVzc2lvbjogRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBmbG9hdCBsaXRlcmFsIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgRmxvYXRMaXRlcmFsRXhwcmVzc2lvbiBleHRlbmRzIExpdGVyYWxFeHByZXNzaW9uIHtcbiAgbGl0ZXJhbEtpbmQgPSBMaXRlcmFsS2luZC5GTE9BVDtcblxuICAvKiogRmxvYXQgdmFsdWUuICovXG4gIHZhbHVlOiBmNjQ7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgZnVuY3Rpb24gZXhwcmVzc2lvbiB1c2luZyB0aGUgJ2Z1bmN0aW9uJyBrZXl3b3JkLiAqL1xuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuRlVOQ1RJT047XG5cbiAgLyoqIElubGluZSBmdW5jdGlvbiBkZWNsYXJhdGlvbi4gKi9cbiAgZGVjbGFyYXRpb246IEZ1bmN0aW9uRGVjbGFyYXRpb247XG59XG5cbi8qKiBSZXByZXNlbnRzIGFuIGBpbnN0YW5jZW9mYCBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlT2ZFeHByZXNzaW9uIGV4dGVuZHMgRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5JTlNUQU5DRU9GO1xuXG4gIC8qKiBFeHByZXNzaW9uIGJlaW5nIGFzc2VydGVkLiAqL1xuICBleHByZXNzaW9uOiBFeHByZXNzaW9uO1xuICAvKiogVHlwZSB0byB0ZXN0IGZvci4gKi9cbiAgaXNUeXBlOiBUeXBlTm9kZTtcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gaW50ZWdlciBsaXRlcmFsIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uIGV4dGVuZHMgTGl0ZXJhbEV4cHJlc3Npb24ge1xuICBsaXRlcmFsS2luZCA9IExpdGVyYWxLaW5kLklOVEVHRVI7XG5cbiAgLyoqIEludGVnZXIgdmFsdWUuICovXG4gIHZhbHVlOiBJNjQ7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYG5ld2AgZXhwcmVzc2lvbi4gTGlrZSBhIGNhbGwgYnV0IHdpdGggaXRzIG93biBraW5kLiAqL1xuZXhwb3J0IGNsYXNzIE5ld0V4cHJlc3Npb24gZXh0ZW5kcyBDYWxsRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5ORVc7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYG51bGxgIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgTnVsbEV4cHJlc3Npb24gZXh0ZW5kcyBJZGVudGlmaWVyRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5OVUxMO1xuICB0ZXh0ID0gXCJudWxsXCI7XG4gIHN5bWJvbCA9IENvbW1vblN5bWJvbHMubnVsbF87XG59XG5cbi8qKiBSZXByZXNlbnRzIGFuIG9iamVjdCBsaXRlcmFsIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24gZXh0ZW5kcyBMaXRlcmFsRXhwcmVzc2lvbiB7XG4gIGxpdGVyYWxLaW5kID0gTGl0ZXJhbEtpbmQuT0JKRUNUO1xuXG4gIC8qKiBGaWVsZCBuYW1lcy4gKi9cbiAgbmFtZXM6IElkZW50aWZpZXJFeHByZXNzaW9uW107XG4gIC8qKiBGaWVsZCB2YWx1ZXMuICovXG4gIHZhbHVlczogRXhwcmVzc2lvbltdO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIHBhcmVudGhlc2l6ZWQgZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuUEFSRU5USEVTSVpFRDtcblxuICAvKiogRXhwcmVzc2lvbiBpbiBwYXJlbnRoZXNpcy4gKi9cbiAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBwcm9wZXJ0eSBhY2Nlc3MgZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24gZXh0ZW5kcyBFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLlBST1BFUlRZQUNDRVNTO1xuXG4gIC8qKiBFeHByZXNzaW9uIGJlaW5nIGFjY2Vzc2VkLiAqL1xuICBleHByZXNzaW9uOiBFeHByZXNzaW9uO1xuICAvKiogUHJvcGVydHkgb2YgdGhlIGV4cHJlc3Npb24gYmVpbmcgYWNjZXNzZWQuICovXG4gIHByb3BlcnR5OiBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSByZWd1bGFyIGV4cHJlc3Npb24gbGl0ZXJhbCBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uIGV4dGVuZHMgTGl0ZXJhbEV4cHJlc3Npb24ge1xuICBsaXRlcmFsS2luZCA9IExpdGVyYWxLaW5kLlJFR0VYUDtcblxuICAvKiogUmVndWxhciBleHByZXNzaW9uIHBhdHRlcm4uICovXG4gIHBhdHRlcm46IHN0cmluZztcbiAgLyoqIFJlZ3VsYXIgZXhwcmVzc2lvbiBmbGFncy4gKi9cbiAgcGF0dGVybkZsYWdzOiBzdHJpbmc7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgdGVybmFyeSBleHByZXNzaW9uLCBpLmUuLCBzaG9ydCBpZiBub3RhdGlvbi4gKi9cbmV4cG9ydCBjbGFzcyBUZXJuYXJ5RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuVEVSTkFSWTtcblxuICAvKiogQ29uZGl0aW9uIGV4cHJlc3Npb24uICovXG4gIGNvbmRpdGlvbjogRXhwcmVzc2lvbjtcbiAgLyoqIEV4cHJlc3Npb24gZXhlY3V0ZWQgd2hlbiBjb25kaXRpb24gaXMgYHRydWVgLiAqL1xuICBpZlRoZW46IEV4cHJlc3Npb247XG4gIC8qKiBFeHByZXNzaW9uIGV4ZWN1dGVkIHdoZW4gY29uZGl0aW9uIGlzIGBmYWxzZWAuICovXG4gIGlmRWxzZTogRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBzdHJpbmcgbGl0ZXJhbCBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uIGV4dGVuZHMgTGl0ZXJhbEV4cHJlc3Npb24ge1xuICBsaXRlcmFsS2luZCA9IExpdGVyYWxLaW5kLlNUUklORztcblxuICAvKiogU3RyaW5nIHZhbHVlIHdpdGhvdXQgcXVvdGVzLiAqL1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGBzdXBlcmAgZXhwcmVzc2lvbi4gKi9cbmV4cG9ydCBjbGFzcyBTdXBlckV4cHJlc3Npb24gZXh0ZW5kcyBJZGVudGlmaWVyRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5TVVBFUjtcbiAgdGV4dCA9IFwic3VwZXJcIjtcbiAgc3ltYm9sID0gQ29tbW9uU3ltYm9scy5zdXBlcl87XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYHRoaXNgIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgVGhpc0V4cHJlc3Npb24gZXh0ZW5kcyBJZGVudGlmaWVyRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5USElTO1xuICB0ZXh0ID0gXCJ0aGlzXCI7XG4gIHN5bWJvbCA9IENvbW1vblN5bWJvbHMudGhpc187XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYHRydWVgIGV4cHJlc3Npb24uICovXG5leHBvcnQgY2xhc3MgVHJ1ZUV4cHJlc3Npb24gZXh0ZW5kcyBJZGVudGlmaWVyRXhwcmVzc2lvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5UUlVFO1xuICB0ZXh0ID0gXCJ0cnVlXCI7XG4gIHN5bWJvbCA9IENvbW1vblN5bWJvbHMudHJ1ZV87XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYGZhbHNlYCBleHByZXNzaW9uLiAqL1xuZXhwb3J0IGNsYXNzIEZhbHNlRXhwcmVzc2lvbiBleHRlbmRzIElkZW50aWZpZXJFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLkZBTFNFO1xuICB0ZXh0ID0gXCJmYWxzZVwiO1xuICBzeW1ib2wgPSBDb21tb25TeW1ib2xzLmZhbHNlXztcbn1cblxuLyoqIEJhc2UgY2xhc3Mgb2YgYWxsIHVuYXJ5IGV4cHJlc3Npb25zLiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFVuYXJ5RXhwcmVzc2lvbiBleHRlbmRzIEV4cHJlc3Npb24ge1xuXG4gIC8qKiBPcGVyYXRvciB0b2tlbi4gKi9cbiAgb3BlcmF0b3I6IFRva2VuO1xuICAvKiogT3BlcmFuZCBleHByZXNzaW9uLiAqL1xuICBvcGVyYW5kOiBFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIHVuYXJ5IHBvc3RmaXggZXhwcmVzc2lvbiwgZS5nLiBhIHBvc3RmaXggaW5jcmVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24gZXh0ZW5kcyBVbmFyeUV4cHJlc3Npb24ge1xuICBraW5kID0gTm9kZUtpbmQuVU5BUllQT1NURklYO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIHVuYXJ5IHByZWZpeCBleHByZXNzaW9uLCBlLmcuIGEgbmVnYXRpb24uICovXG5leHBvcnQgY2xhc3MgVW5hcnlQcmVmaXhFeHByZXNzaW9uIGV4dGVuZHMgVW5hcnlFeHByZXNzaW9uIHtcbiAga2luZCA9IE5vZGVLaW5kLlVOQVJZUFJFRklYO1xufVxuXG4vLyBzdGF0ZW1lbnRzXG5cbi8qKiBCYXNlIGNsYXNzIG9mIGFsbCBzdGF0ZW1lbnQgbm9kZXMuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7IH1cblxuLyoqIEluZGljYXRlcyB0aGUgc3BlY2lmaWMga2luZCBvZiBhIHNvdXJjZS4gKi9cbmV4cG9ydCBlbnVtIFNvdXJjZUtpbmQge1xuICAvKiogVXNlci1wcm92aWRlZCBmaWxlLiAqL1xuICBVU0VSID0gMCxcbiAgLyoqIFVzZXItcHJvdmlkZWQgZW50cnkgZmlsZS4gKi9cbiAgVVNFUl9FTlRSWSA9IDEsXG4gIC8qKiBMaWJyYXJ5LXByb3ZpZGVkIGZpbGUuICovXG4gIExJQlJBUlkgPSAyLFxuICAvKiogTGlicmFyeS1wcm92aWRlZCBlbnRyeSBmaWxlLiAqL1xuICBMSUJSQVJZX0VOVFJZID0gM1xufVxuXG4vKiogQSB0b3AtbGV2ZWwgc291cmNlIG5vZGUuICovXG5leHBvcnQgY2xhc3MgU291cmNlIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5TT1VSQ0U7XG4gIHBhcmVudCA9IG51bGw7XG5cbiAgLyoqIFNvdXJjZSBraW5kLiAqL1xuICBzb3VyY2VLaW5kOiBTb3VyY2VLaW5kO1xuICAvKiogTm9ybWFsaXplZCBwYXRoIHdpdGggZmlsZSBleHRlbnNpb24uICovXG4gIG5vcm1hbGl6ZWRQYXRoOiBzdHJpbmc7XG4gIC8qKiBQYXRoIHVzZWQgaW50ZXJuYWxseS4gKi9cbiAgaW50ZXJuYWxQYXRoOiBzdHJpbmc7XG4gIC8qKiBTaW1wbGUgcGF0aCAobGFzdCBwYXJ0IHdpdGhvdXQgZXh0ZW5zaW9uKS4gKi9cbiAgc2ltcGxlUGF0aDogc3RyaW5nO1xuICAvKiogQ29udGFpbmVkIHN0YXRlbWVudHMuICovXG4gIHN0YXRlbWVudHM6IFN0YXRlbWVudFtdO1xuICAvKiogRnVsbCBzb3VyY2UgdGV4dC4gKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKiogVG9rZW5pemVyIHJlZmVyZW5jZS4gKi9cbiAgdG9rZW5pemVyOiBUb2tlbml6ZXIgfCBudWxsID0gbnVsbDtcbiAgLyoqIFNvdXJjZSBtYXAgaW5kZXguICovXG4gIGRlYnVnSW5mb0luZGV4OiBpMzIgPSAtMTtcbiAgLyoqIFJlLWV4cG9ydGVkIHNvdXJjZXMuICovXG4gIGV4cG9ydFBhdGhzOiBTZXQ8c3RyaW5nPiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IHNvdXJjZSBub2RlLiAqL1xuICBjb25zdHJ1Y3Rvcihub3JtYWxpemVkUGF0aDogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIGtpbmQ6IFNvdXJjZUtpbmQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc291cmNlS2luZCA9IGtpbmQ7XG4gICAgdGhpcy5ub3JtYWxpemVkUGF0aCA9IG5vcm1hbGl6ZWRQYXRoO1xuICAgIHZhciBpbnRlcm5hbFBhdGggPSBtYW5nbGVJbnRlcm5hbFBhdGgodGhpcy5ub3JtYWxpemVkUGF0aCk7XG4gICAgdGhpcy5pbnRlcm5hbFBhdGggPSBpbnRlcm5hbFBhdGg7XG4gICAgdmFyIHBvcyA9IGludGVybmFsUGF0aC5sYXN0SW5kZXhPZihQQVRIX0RFTElNSVRFUik7XG4gICAgdGhpcy5zaW1wbGVQYXRoID0gcG9zID49IDAgPyBpbnRlcm5hbFBhdGguc3Vic3RyaW5nKHBvcyArIDEpIDogaW50ZXJuYWxQYXRoO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IG5ldyBBcnJheSgpO1xuICAgIHRoaXMucmFuZ2UgPSBuZXcgUmFuZ2UodGhpcywgMCwgdGV4dC5sZW5ndGgpO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gIH1cblxuICBnZXQgaXNMaWJyYXJ5KCk6IGJvb2wge1xuICAgIHZhciBraW5kID0gdGhpcy5zb3VyY2VLaW5kO1xuICAgIHJldHVybiBraW5kID09IFNvdXJjZUtpbmQuTElCUkFSWSB8fCBraW5kID09IFNvdXJjZUtpbmQuTElCUkFSWV9FTlRSWTtcbiAgfVxufVxuXG4vKiogQmFzZSBjbGFzcyBvZiBhbGwgZGVjbGFyYXRpb24gc3RhdGVtZW50cy4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEZWNsYXJhdGlvblN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIC8qKiBTaW1wbGUgbmFtZSBiZWluZyBkZWNsYXJlZC4gKi9cbiAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb247XG4gIC8qKiBBcnJheSBvZiBkZWNvcmF0b3JzLiAqL1xuICBkZWNvcmF0b3JzOiBEZWNvcmF0b3JOb2RlW10gfCBudWxsID0gbnVsbDtcbiAgLyoqIENvbW1vbiBmbGFncyBpbmRpY2F0aW5nIHNwZWNpZmljIHRyYWl0cy4gKi9cbiAgZmxhZ3M6IENvbW1vbkZsYWdzID0gQ29tbW9uRmxhZ3MuTk9ORTtcblxuICAvKiogVGVzdHMgaWYgdGhpcyBub2RlIGhhcyB0aGUgc3BlY2lmaWVkIGZsYWcgb3IgZmxhZ3MuICovXG4gIGlzKGZsYWc6IENvbW1vbkZsYWdzKTogYm9vbCB7IHJldHVybiAodGhpcy5mbGFncyAmIGZsYWcpID09IGZsYWc7IH1cbiAgLyoqIFRlc3RzIGlmIHRoaXMgbm9kZSBoYXMgb25lIG9mIHRoZSBzcGVjaWZpZWQgZmxhZ3MuICovXG4gIGlzQW55KGZsYWc6IENvbW1vbkZsYWdzKTogYm9vbCB7IHJldHVybiAodGhpcy5mbGFncyAmIGZsYWcpICE9IDA7IH1cbiAgLyoqIFNldHMgYSBzcGVjaWZpYyBmbGFnIG9yIGZsYWdzLiAqL1xuICBzZXQoZmxhZzogQ29tbW9uRmxhZ3MpOiB2b2lkIHsgdGhpcy5mbGFncyB8PSBmbGFnOyB9XG59XG5cbi8qKiBSZXByZXNlbnRzIGFuIGluZGV4IHNpZ25hdHVyZSBkZWNsYXJhdGlvbi4gKi9cbmV4cG9ydCBjbGFzcyBJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuSU5ERVhTSUdOQVRVUkVERUNMQVJBVElPTjtcblxuICAvKiogS2V5IHR5cGUuICovXG4gIGtleVR5cGU6IE5hbWVkVHlwZU5vZGU7XG4gIC8qKiBWYWx1ZSB0eXBlLiAqL1xuICB2YWx1ZVR5cGU6IFR5cGVOb2RlO1xufVxuXG4vKiogQmFzZSBjbGFzcyBvZiBhbGwgdmFyaWFibGUtbGlrZSBkZWNsYXJhdGlvbiBzdGF0ZW1lbnRzLiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhcmlhYmxlTGlrZURlY2xhcmF0aW9uU3RhdGVtZW50IGV4dGVuZHMgRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuXG4gIC8qKiBWYXJpYWJsZSB0eXBlLiAqL1xuICB0eXBlOiBUeXBlTm9kZSB8IG51bGw7XG4gIC8qKiBWYXJpYWJsZSBpbml0aWFsaXplci4gKi9cbiAgaW5pdGlhbGl6ZXI6IEV4cHJlc3Npb24gfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGJsb2NrIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBCbG9ja1N0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5CTE9DSztcblxuICAvKiogQ29udGFpbmVkIHN0YXRlbWVudHMuICovXG4gIHN0YXRlbWVudHM6IFN0YXRlbWVudFtdO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGBicmVha2Agc3RhdGVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIEJyZWFrU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLkJSRUFLO1xuXG4gIC8qKiBUYXJnZXQgbGFiZWwsIGlmIGFwcGxpY2FibGUuICovXG4gIGxhYmVsOiBJZGVudGlmaWVyRXhwcmVzc2lvbiB8IG51bGw7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYGNsYXNzYCBkZWNsYXJhdGlvbi4gKi9cbmV4cG9ydCBjbGFzcyBDbGFzc0RlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuQ0xBU1NERUNMQVJBVElPTjtcblxuICAvKiogQWNjZXB0ZWQgdHlwZSBwYXJhbWV0ZXJzLiAqL1xuICB0eXBlUGFyYW1ldGVyczogVHlwZVBhcmFtZXRlck5vZGVbXSB8IG51bGw7XG4gIC8qKiBCYXNlIGNsYXNzIHR5cGUgYmVpbmcgZXh0ZW5kZWQsIGlmIGFueS4gKi9cbiAgZXh0ZW5kc1R5cGU6IE5hbWVkVHlwZU5vZGUgfCBudWxsOyAvLyBjYW4ndCBiZSBhIGZ1bmN0aW9uXG4gIC8qKiBJbnRlcmZhY2UgdHlwZXMgYmVpbmcgaW1wbGVtZW50ZWQsIGlmIGFueS4gKi9cbiAgaW1wbGVtZW50c1R5cGVzOiBOYW1lZFR5cGVOb2RlW10gfCBudWxsOyAvLyBjYW4ndCBiZSBmdW5jdGlvbnNcbiAgLyoqIENsYXNzIG1lbWJlciBkZWNsYXJhdGlvbnMuICovXG4gIG1lbWJlcnM6IERlY2xhcmF0aW9uU3RhdGVtZW50W107XG5cbiAgZ2V0IGlzR2VuZXJpYygpOiBib29sIHtcbiAgICB2YXIgdHlwZVBhcmFtZXRlcnMgPSB0aGlzLnR5cGVQYXJhbWV0ZXJzO1xuICAgIHJldHVybiB0eXBlUGFyYW1ldGVycyAhPSBudWxsICYmIHR5cGVQYXJhbWV0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgY29udGludWVgIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBDb250aW51ZVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5DT05USU5VRTtcblxuICAvKiogVGFyZ2V0IGxhYmVsLCBpZiBhcHBsaWNhYmxlLiAqL1xuICBsYWJlbDogSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGBkb2Agc3RhdGVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIERvU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLkRPO1xuXG4gIC8qKiBTdGF0ZW1lbnQgYmVpbmcgbG9vcGVkIG92ZXIuICovXG4gIHN0YXRlbWVudDogU3RhdGVtZW50O1xuICAvKiogQ29uZGl0aW9uIHdoZW4gdG8gcmVwZWF0LiAqL1xuICBjb25kaXRpb246IEV4cHJlc3Npb247XG59XG5cbi8qKiBSZXByZXNlbnRzIGFuIGVtcHR5IHN0YXRlbWVudCwgaS5lLiwgYSBzZW1pY29sb24gdGVybWluYXRpbmcgbm90aGluZy4gKi9cbmV4cG9ydCBjbGFzcyBFbXB0eVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5FTVBUWTtcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gYGVudW1gIGRlY2xhcmF0aW9uLiAqL1xuZXhwb3J0IGNsYXNzIEVudW1EZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLkVOVU1ERUNMQVJBVElPTjtcblxuICAvKiogRW51bSB2YWx1ZSBkZWNsYXJhdGlvbnMuICovXG4gIHZhbHVlczogRW51bVZhbHVlRGVjbGFyYXRpb25bXTtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSB2YWx1ZSBvZiBhbiBgZW51bWAgZGVjbGFyYXRpb24uICovXG5leHBvcnQgY2xhc3MgRW51bVZhbHVlRGVjbGFyYXRpb24gZXh0ZW5kcyBWYXJpYWJsZUxpa2VEZWNsYXJhdGlvblN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5FTlVNVkFMVUVERUNMQVJBVElPTjtcbiAgLy8gbmFtZSBpcyBpbmhlcml0ZWRcblxuICAvKiogVmFsdWUgZXhwcmVzc2lvbi4gKi9cbiAgdmFsdWU6IEV4cHJlc3Npb24gfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgZXhwb3J0IGltcG9ydGAgc3RhdGVtZW50IG9mIGFuIGludGVyZmFjZS4gKi9cbmV4cG9ydCBjbGFzcyBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcbiAga2luZCA9IE5vZGVLaW5kLkVYUE9SVElNUE9SVDtcblxuICAvKiogSWRlbnRpZmllciBiZWluZyBpbXBvcnRlZC4gKi9cbiAgbmFtZTogSWRlbnRpZmllckV4cHJlc3Npb247XG4gIC8qKiBJZGVudGlmaWVyIGJlaW5nIGV4cG9ydGVkLiAqL1xuICBleHRlcm5hbE5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIG1lbWJlciBvZiBhbiBgZXhwb3J0YCBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgRXhwb3J0TWVtYmVyIGV4dGVuZHMgTm9kZSB7XG4gIGtpbmQgPSBOb2RlS2luZC5FWFBPUlRNRU1CRVI7XG5cbiAgLyoqIExvY2FsIGlkZW50aWZpZXIuICovXG4gIGxvY2FsTmFtZTogSWRlbnRpZmllckV4cHJlc3Npb247XG4gIC8qKiBFeHBvcnRlZCBpZGVudGlmaWVyLiAqL1xuICBleHBvcnRlZE5hbWU6IElkZW50aWZpZXJFeHByZXNzaW9uO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgZXhwb3J0YCBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgRXhwb3J0U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLkVYUE9SVDtcblxuICAvKiogQXJyYXkgb2YgbWVtYmVycyBpZiBhIHNldCBvZiBuYW1lZCBleHBvcnRzLCBvciBgbnVsbGAgaWYgYSBmaWxlIGV4cG9ydC4gKi9cbiAgbWVtYmVyczogRXhwb3J0TWVtYmVyW10gfCBudWxsO1xuICAvKiogUGF0aCBiZWluZyBleHBvcnRlZCBmcm9tLCBpZiBhcHBsaWNhYmxlLiAqL1xuICBwYXRoOiBTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbiB8IG51bGw7XG4gIC8qKiBJbnRlcm5hbCBwYXRoIGJlaW5nIHJlZmVyZW5jZWQsIGlmIGBwYXRoYCBpcyBzZXQuICovXG4gIGludGVybmFsUGF0aDogc3RyaW5nIHwgbnVsbDtcbiAgLyoqIFdoZXRoZXIgdGhpcyBpcyBhIGRlY2xhcmVkIGV4cG9ydC4gKi9cbiAgaXNEZWNsYXJlOiBib29sO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgZXhwb3J0IGRlZmF1bHRgIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBFeHBvcnREZWZhdWx0U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLkVYUE9SVERFRkFVTFQ7XG5cbiAgLyoqIERlY2xhcmF0aW9uIGJlaW5nIGV4cG9ydGVkIGFzIGRlZmF1bHQuICovXG4gIGRlY2xhcmF0aW9uOiBEZWNsYXJhdGlvblN0YXRlbWVudDtcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gZXhwcmVzc2lvbiB0aGF0IGlzIHVzZWQgYXMgYSBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5FWFBSRVNTSU9OO1xuXG4gIC8qKiBFeHByZXNzaW9uIGJlaW5nIHVzZWQgYXMgYSBzdGF0ZW1lbnQuKi9cbiAgZXhwcmVzc2lvbjogRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBmaWVsZCBkZWNsYXJhdGlvbiB3aXRoaW4gYSBgY2xhc3NgLiAqL1xuZXhwb3J0IGNsYXNzIEZpZWxkRGVjbGFyYXRpb24gZXh0ZW5kcyBWYXJpYWJsZUxpa2VEZWNsYXJhdGlvblN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OO1xuXG4gIC8qKiBQYXJhbWV0ZXIgaW5kZXggaWYgZGVjbGFyZWQgYXMgYSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIsIG90aGVyd2lzZSBgLTFgLiAqL1xuICBwYXJhbWV0ZXJJbmRleDogaTMyID0gLTE7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYGZvcmAgc3RhdGVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIEZvclN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5GT1I7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVyIHN0YXRlbWVudCwgaWYgcHJlc2VudC5cbiAgICogRWl0aGVyIGEge0BsaW5rIFZhcmlhYmxlU3RhdGVtZW50fSBvciB7QGxpbmsgRXhwcmVzc2lvblN0YXRlbWVudH0uXG4gICAqL1xuICBpbml0aWFsaXplcjogU3RhdGVtZW50IHwgbnVsbDtcbiAgLyoqIENvbmRpdGlvbiBleHByZXNzaW9uLCBpZiBwcmVzZW50LiAqL1xuICBjb25kaXRpb246IEV4cHJlc3Npb24gfCBudWxsO1xuICAvKiogSW5jcmVtZW50b3IgZXhwcmVzc2lvbiwgaWYgcHJlc2VudC4gKi9cbiAgaW5jcmVtZW50b3I6IEV4cHJlc3Npb24gfCBudWxsO1xuICAvKiogU3RhdGVtZW50IGJlaW5nIGxvb3BlZCBvdmVyLiAqL1xuICBzdGF0ZW1lbnQ6IFN0YXRlbWVudDtcbn1cblxuLyoqIEluZGljYXRlcyB0aGUga2luZCBvZiBhbiBhcnJheSBmdW5jdGlvbi4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEFycm93S2luZCB7XG4gIC8qKiBOb3QgYW4gYXJyb3cgZnVuY3Rpb24uICovXG4gIE5PTkUsXG4gIC8qKiBQYXJlbnRoZXNpemVkIHBhcmFtZXRlciBsaXN0LiAqL1xuICBBUlJPV19QQVJFTlRIRVNJWkVELFxuICAvKiogU2luZ2xlIHBhcmFtZXRlciB3aXRob3V0IHBhcmVudGhlc2lzLiAqL1xuICBBUlJPV19TSU5HTEVcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgZnVuY3Rpb25gIGRlY2xhcmF0aW9uLiAqL1xuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvblN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OO1xuXG4gIC8qKiBUeXBlIHBhcmFtZXRlcnMsIGlmIGFueS4gKi9cbiAgdHlwZVBhcmFtZXRlcnM6IFR5cGVQYXJhbWV0ZXJOb2RlW10gfCBudWxsO1xuICAvKiogRnVuY3Rpb24gc2lnbmF0dXJlLiAqL1xuICBzaWduYXR1cmU6IEZ1bmN0aW9uVHlwZU5vZGU7XG4gIC8qKiBCb2R5IHN0YXRlbWVudC4gVXN1YWxseSBhIGJsb2NrLiAqL1xuICBib2R5OiBTdGF0ZW1lbnQgfCBudWxsO1xuICAvKiogQXJyb3cgZnVuY3Rpb24ga2luZCwgaWYgYXBwbGljYWJsZS4gKi9cbiAgYXJyb3dLaW5kOiBBcnJvd0tpbmQ7XG5cbiAgZ2V0IGlzR2VuZXJpYygpOiBib29sIHtcbiAgICB2YXIgdHlwZVBhcmFtZXRlcnMgPSB0aGlzLnR5cGVQYXJhbWV0ZXJzO1xuICAgIHJldHVybiB0eXBlUGFyYW1ldGVycyAhPSBudWxsICYmIHR5cGVQYXJhbWV0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKiogQ2xvbmVzIHRoaXMgZnVuY3Rpb24gZGVjbGFyYXRpb24uICovXG4gIGNsb25lKCk6IEZ1bmN0aW9uRGVjbGFyYXRpb24ge1xuICAgIHJldHVybiBOb2RlLmNyZWF0ZUZ1bmN0aW9uRGVjbGFyYXRpb24oXG4gICAgICB0aGlzLm5hbWUsXG4gICAgICB0aGlzLnR5cGVQYXJhbWV0ZXJzLFxuICAgICAgdGhpcy5zaWduYXR1cmUsXG4gICAgICB0aGlzLmJvZHksXG4gICAgICB0aGlzLmRlY29yYXRvcnMsXG4gICAgICB0aGlzLmZsYWdzLFxuICAgICAgdGhpcy5hcnJvd0tpbmQsXG4gICAgICB0aGlzLnJhbmdlXG4gICAgKTtcbiAgfVxufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgaWZgIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBJZlN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5JRjtcblxuICAvKiogQ29uZGl0aW9uLiAqL1xuICBjb25kaXRpb246IEV4cHJlc3Npb247XG4gIC8qKiBTdGF0ZW1lbnQgZXhlY3V0ZWQgd2hlbiBjb25kaXRpb24gaXMgYHRydWVgLiAqL1xuICBpZlRydWU6IFN0YXRlbWVudDtcbiAgLyoqIFN0YXRlbWVudCBleGVjdXRlZCB3aGVuIGNvbmRpdGlvbiBpcyBgZmFsc2VgLiAqL1xuICBpZkZhbHNlOiBTdGF0ZW1lbnQgfCBudWxsO1xufVxuXG4vKiogUmVwcmVzZW50cyBhbiBgaW1wb3J0YCBkZWNsYXJhdGlvbiBwYXJ0IG9mIGFuIHtAbGluayBJbXBvcnRTdGF0ZW1lbnR9LiAqL1xuZXhwb3J0IGNsYXNzIEltcG9ydERlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb25TdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuSU1QT1JUREVDTEFSQVRJT047XG5cbiAgLyoqIElkZW50aWZpZXIgYmVpbmcgaW1wb3J0ZWQuICovXG4gIGZvcmVpZ25OYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gYGltcG9ydGAgc3RhdGVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIEltcG9ydFN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5JTVBPUlQ7XG5cbiAgLyoqIEFycmF5IG9mIG1lbWJlciBkZWNsYXJhdGlvbnMgb3IgYG51bGxgIGlmIGFuIGFzdGVyaXNrIGltcG9ydC4gKi9cbiAgZGVjbGFyYXRpb25zOiBJbXBvcnREZWNsYXJhdGlvbltdIHwgbnVsbDtcbiAgLyoqIE5hbWUgb2YgdGhlIGxvY2FsIG5hbWVzcGFjZSwgaWYgYW4gYXN0ZXJpc2sgaW1wb3J0LiAqL1xuICBuYW1lc3BhY2VOYW1lOiBJZGVudGlmaWVyRXhwcmVzc2lvbiB8IG51bGw7XG4gIC8qKiBQYXRoIGJlaW5nIGltcG9ydGVkIGZyb20uICovXG4gIHBhdGg6IFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uO1xuICAvKiogSW50ZXJuYWwgcGF0aCBiZWluZyByZWZlcmVuY2VkLiAqL1xuICBpbnRlcm5hbFBhdGg6IHN0cmluZztcbn1cblxuLyoqIFJlcHJlc2VudHMgYW4gYGludGVyZmFyY2VgIGRlY2xhcmF0aW9uLiAqL1xuZXhwb3J0IGNsYXNzIEludGVyZmFjZURlY2xhcmF0aW9uIGV4dGVuZHMgQ2xhc3NEZWNsYXJhdGlvbiB7XG4gIGtpbmQgPSBOb2RlS2luZC5JTlRFUkZBQ0VERUNMQVJBVElPTjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBtZXRob2QgZGVjbGFyYXRpb24gd2l0aGluIGEgYGNsYXNzYC4gKi9cbmV4cG9ydCBjbGFzcyBNZXRob2REZWNsYXJhdGlvbiBleHRlbmRzIEZ1bmN0aW9uRGVjbGFyYXRpb24ge1xuICBraW5kID0gTm9kZUtpbmQuTUVUSE9EREVDTEFSQVRJT047XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYG5hbWVzcGFjZWAgZGVjbGFyYXRpb24uICovXG5leHBvcnQgY2xhc3MgTmFtZXNwYWNlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvblN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5OQU1FU1BBQ0VERUNMQVJBVElPTjtcblxuICAvKiogQXJyYXkgb2YgbmFtZXNwYWNlIG1lbWJlcnMuICovXG4gIG1lbWJlcnM6IFN0YXRlbWVudFtdO1xufVxuXG4vKiogUmVwcmVzZW50cyBhIGByZXR1cm5gIHN0YXRlbWVudC4gKi9cbmV4cG9ydCBjbGFzcyBSZXR1cm5TdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuUkVUVVJOO1xuXG4gIC8qKiBWYWx1ZSBleHByZXNzaW9uIGJlaW5nIHJldHVybmVkLCBpZiBwcmVzZW50LiAqL1xuICB2YWx1ZTogRXhwcmVzc2lvbiB8IG51bGw7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgc2luZ2xlIGBjYXNlYCB3aXRoaW4gYSBgc3dpdGNoYCBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgU3dpdGNoQ2FzZSBleHRlbmRzIE5vZGUge1xuICBraW5kID0gTm9kZUtpbmQuU1dJVENIQ0FTRTtcblxuICAvKiogTGFiZWwgZXhwcmVzc2lvbi4gYG51bGxgIGluZGljYXRlcyB0aGUgZGVmYXVsdCBjYXNlLiAqL1xuICBsYWJlbDogRXhwcmVzc2lvbiB8IG51bGw7XG4gIC8qKiBDb250YWluZWQgc3RhdGVtZW50cy4gKi9cbiAgc3RhdGVtZW50czogU3RhdGVtZW50W107XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYHN3aXRjaGAgc3RhdGVtZW50LiAqL1xuZXhwb3J0IGNsYXNzIFN3aXRjaFN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5TV0lUQ0g7XG5cbiAgLyoqIENvbmRpdGlvbiBleHByZXNzaW9uLiAqL1xuICBjb25kaXRpb246IEV4cHJlc3Npb247XG4gIC8qKiBDb250YWluZWQgY2FzZXMuICovXG4gIGNhc2VzOiBTd2l0Y2hDYXNlW107XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYHRocm93YCBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgVGhyb3dTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuVEhST1c7XG5cbiAgLyoqIFZhbHVlIGV4cHJlc3Npb24gYmVpbmcgdGhyb3duLiAqL1xuICB2YWx1ZTogRXhwcmVzc2lvbjtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBgdHJ5YCBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgVHJ5U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLlRSWTtcblxuICAvKiogQ29udGFpbmVkIHN0YXRlbWVudHMuICovXG4gIHN0YXRlbWVudHM6IFN0YXRlbWVudFtdO1xuICAvKiogRXhjZXB0aW9uIHZhcmlhYmxlIG5hbWUsIGlmIGEgYGNhdGNoYCBjbGF1c2UgaXMgcHJlc2VudC4gKi9cbiAgY2F0Y2hWYXJpYWJsZTogSWRlbnRpZmllckV4cHJlc3Npb24gfCBudWxsO1xuICAvKiogU3RhdGVtZW50cyBiZWluZyBleGVjdXRlZCBvbiBjYXRjaCwgaWYgYSBgY2F0Y2hgIGNsYXVzZSBpcyBwcmVzZW50LiAqL1xuICBjYXRjaFN0YXRlbWVudHM6IFN0YXRlbWVudFtdIHwgbnVsbDtcbiAgLyoqIFN0YXRlbWVudHMgYmVpbmcgZXhlY3V0ZWQgYWZ0ZXJ3YXJkcywgaWYgYSBgZmluYWxseWAgY2xhdXNlIGlzIHByZXNlbnQuICovXG4gIGZpbmFsbHlTdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXSB8IG51bGw7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYHR5cGVgIGRlY2xhcmF0aW9uLiAqL1xuZXhwb3J0IGNsYXNzIFR5cGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLlRZUEVERUNMQVJBVElPTjtcblxuICAvKiogVHlwZSBwYXJhbWV0ZXJzLCBpZiBhbnkuICovXG4gIHR5cGVQYXJhbWV0ZXJzOiBUeXBlUGFyYW1ldGVyTm9kZVtdIHwgbnVsbDtcbiAgLyoqIFR5cGUgYmVpbmcgYWxpYXNlZC4gKi9cbiAgdHlwZTogVHlwZU5vZGU7XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgZGVjbGFyYXRpb24gcGFydCBvZiBhIHtAbGluayBWYXJpYWJsZVN0YXRlbWVudH0uICovXG5leHBvcnQgY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiBleHRlbmRzIFZhcmlhYmxlTGlrZURlY2xhcmF0aW9uU3RhdGVtZW50IHtcbiAga2luZCA9IE5vZGVLaW5kLlZBUklBQkxFREVDTEFSQVRJT047XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgdmFyaWFibGUgc3RhdGVtZW50IHdyYXBwaW5nIHtAbGluayBWYXJpYWJsZURlY2xhcmF0aW9ufXMuICovXG5leHBvcnQgY2xhc3MgVmFyaWFibGVTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuVkFSSUFCTEU7XG5cbiAgLyoqIEFycmF5IG9mIGRlY29yYXRvcnMuICovXG4gIGRlY29yYXRvcnM6IERlY29yYXRvck5vZGVbXSB8IG51bGw7XG4gIC8qKiBBcnJheSBvZiBtZW1iZXIgZGVjbGFyYXRpb25zLiAqL1xuICBkZWNsYXJhdGlvbnM6IFZhcmlhYmxlRGVjbGFyYXRpb25bXTtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSB2b2lkIHN0YXRlbWVudCBkcm9wcGluZyBhbiBleHByZXNzaW9uJ3MgdmFsdWUuICovXG5leHBvcnQgY2xhc3MgVm9pZFN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gIGtpbmQgPSBOb2RlS2luZC5WT0lEO1xuXG4gIC8qKiBFeHByZXNzaW9uIGJlaW5nIGRyb3BwZWQuICovXG4gIGV4cHJlc3Npb246IEV4cHJlc3Npb247XG59XG5cbi8qKiBSZXByZXNlbnRzIGEgYHdoaWxlYCBzdGF0ZW1lbnQuICovXG5leHBvcnQgY2xhc3MgV2hpbGVTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICBraW5kID0gTm9kZUtpbmQuV0hJTEU7XG5cbiAgLyoqIENvbmRpdGlvbiBleHByZXNzaW9uLiAqL1xuICBjb25kaXRpb246IEV4cHJlc3Npb247XG4gIC8qKiBTdGF0ZW1lbnQgYmVpbmcgbG9vcGVkIG92ZXIuICovXG4gIHN0YXRlbWVudDogU3RhdGVtZW50O1xufVxuXG4vKiogRmluZHMgdGhlIGZpcnN0IGRlY29yYXRvciBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIGtpbmQuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZERlY29yYXRvcihraW5kOiBEZWNvcmF0b3JLaW5kLCBkZWNvcmF0b3JzOiBEZWNvcmF0b3JOb2RlW10gfCBudWxsKTogRGVjb3JhdG9yTm9kZSB8IG51bGwge1xuICBpZiAoZGVjb3JhdG9ycykge1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgIGxldCBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xuICAgICAgaWYgKGRlY29yYXRvci5kZWNvcmF0b3JLaW5kID09IGtpbmQpIHJldHVybiBkZWNvcmF0b3I7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKiogTWFuZ2xlcyBhbiBleHRlcm5hbCB0byBhbiBpbnRlcm5hbCBwYXRoLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hbmdsZUludGVybmFsUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAocGF0aC5lbmRzV2l0aChcIi50c1wiKSkgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHBhdGgubGVuZ3RoIC0gMyk7XG4gIHJldHVybiBwYXRoO1xufVxuXG4vKiogVGVzdHMgaWYgdGhlIHNwZWNpZmllZCB0eXBlIG5vZGUgcmVwcmVzZW50cyBhbiBvbWl0dGVkIHR5cGUuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUeXBlT21pdHRlZCh0eXBlOiBUeXBlTm9kZSk6IGJvb2wge1xuICBpZiAodHlwZS5raW5kID09IE5vZGVLaW5kLk5BTUVEVFlQRSkge1xuICAgIGxldCBuYW1lID0gKDxOYW1lZFR5cGVOb2RlPnR5cGUpLm5hbWU7XG4gICAgcmV0dXJuICEobmFtZS5uZXh0IHx8IG5hbWUuaWRlbnRpZmllci50ZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl19

/***/ }),

/***/ "./node_modules/assemblyscript/src/common.ts":
/*!***************************************************!*\
  !*** ./node_modules/assemblyscript/src/common.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Common constants.
 * @module common
 */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
/** Indicates traits of a {@link Node} or {@link Element}. */
var CommonFlags;
(function (CommonFlags) {
    /** No flags set. */
    CommonFlags[CommonFlags["NONE"] = 0] = "NONE";
    // Basic modifiers
    /** Has an `import` modifier. */
    CommonFlags[CommonFlags["IMPORT"] = 1] = "IMPORT";
    /** Has an `export` modifier. */
    CommonFlags[CommonFlags["EXPORT"] = 2] = "EXPORT";
    /** Has a `declare` modifier. */
    CommonFlags[CommonFlags["DECLARE"] = 4] = "DECLARE";
    /** Has a `const` modifier. */
    CommonFlags[CommonFlags["CONST"] = 8] = "CONST";
    /** Has a `let` modifier. */
    CommonFlags[CommonFlags["LET"] = 16] = "LET";
    /** Has a `static` modifier. */
    CommonFlags[CommonFlags["STATIC"] = 32] = "STATIC";
    /** Has a `readonly` modifier. */
    CommonFlags[CommonFlags["READONLY"] = 64] = "READONLY";
    /** Has an `abstract` modifier. */
    CommonFlags[CommonFlags["ABSTRACT"] = 128] = "ABSTRACT";
    /** Has a `public` modifier. */
    CommonFlags[CommonFlags["PUBLIC"] = 256] = "PUBLIC";
    /** Has a `private` modifier. */
    CommonFlags[CommonFlags["PRIVATE"] = 512] = "PRIVATE";
    /** Has a `protected` modifier. */
    CommonFlags[CommonFlags["PROTECTED"] = 1024] = "PROTECTED";
    /** Has a `get` modifier. */
    CommonFlags[CommonFlags["GET"] = 2048] = "GET";
    /** Has a `set` modifier. */
    CommonFlags[CommonFlags["SET"] = 4096] = "SET";
    /** Has a definite assignment assertion `!` as in `x!: i32;`. */
    CommonFlags[CommonFlags["DEFINITE_ASSIGNMENT"] = 8192] = "DEFINITE_ASSIGNMENT";
    // Extended modifiers usually derived from basic modifiers
    /** Is ambient, that is either declared or nested in a declared element. */
    CommonFlags[CommonFlags["AMBIENT"] = 16384] = "AMBIENT";
    /** Is generic. */
    CommonFlags[CommonFlags["GENERIC"] = 32768] = "GENERIC";
    /** Is part of a generic context. */
    CommonFlags[CommonFlags["GENERIC_CONTEXT"] = 65536] = "GENERIC_CONTEXT";
    /** Is an instance member. */
    CommonFlags[CommonFlags["INSTANCE"] = 131072] = "INSTANCE";
    /** Is a constructor. */
    CommonFlags[CommonFlags["CONSTRUCTOR"] = 262144] = "CONSTRUCTOR";
    /** Is a module export. */
    CommonFlags[CommonFlags["MODULE_EXPORT"] = 524288] = "MODULE_EXPORT";
    /** Is a module import. */
    CommonFlags[CommonFlags["MODULE_IMPORT"] = 1048576] = "MODULE_IMPORT";
    // Compilation states
    /** Is resolved. */
    CommonFlags[CommonFlags["RESOLVED"] = 2097152] = "RESOLVED";
    /** Is compiled. */
    CommonFlags[CommonFlags["COMPILED"] = 4194304] = "COMPILED";
    /** Has a constant value and is therefore inlined. */
    CommonFlags[CommonFlags["INLINED"] = 8388608] = "INLINED";
    /** Is scoped. */
    CommonFlags[CommonFlags["SCOPED"] = 16777216] = "SCOPED";
    /** Is a trampoline. */
    CommonFlags[CommonFlags["TRAMPOLINE"] = 33554432] = "TRAMPOLINE";
    /** Is a virtual method. */
    CommonFlags[CommonFlags["VIRTUAL"] = 67108864] = "VIRTUAL";
    /** Is the main function. */
    CommonFlags[CommonFlags["MAIN"] = 134217728] = "MAIN";
    // Other
    /** Is quoted. */
    CommonFlags[CommonFlags["QUOTED"] = 268435456] = "QUOTED";
})(CommonFlags = exports.CommonFlags || (exports.CommonFlags = {}));
/** Path delimiter inserted between file system levels. */
exports.PATH_DELIMITER = "/";
/** Substitution used to indicate the parent directory. */
exports.PARENT_SUBST = "..";
/** Function name prefix used for getters. */
exports.GETTER_PREFIX = "get:";
/** Function name prefix used for setters. */
exports.SETTER_PREFIX = "set:";
/** Delimiter used between class names and instance members. */
exports.INSTANCE_DELIMITER = "#";
/** Delimiter used between class and namespace names and static members. */
exports.STATIC_DELIMITER = ".";
/** Delimiter used between a function and its inner elements. */
exports.INNER_DELIMITER = "~";
/** Substitution used to indicate a library directory. */
exports.LIBRARY_SUBST = "~lib";
/** Library directory prefix. */
exports.LIBRARY_PREFIX = exports.LIBRARY_SUBST + exports.PATH_DELIMITER;
/** Path index suffix. */
exports.INDEX_SUFFIX = exports.PATH_DELIMITER + "index";
/** Common compiler symbols. */
var CommonSymbols;
(function (CommonSymbols) {
    // special
    CommonSymbols.EMPTY = "";
    // types
    CommonSymbols.i8 = "i8";
    CommonSymbols.i16 = "i16";
    CommonSymbols.i32 = "i32";
    CommonSymbols.i64 = "i64";
    CommonSymbols.isize = "isize";
    CommonSymbols.u8 = "u8";
    CommonSymbols.u16 = "u16";
    CommonSymbols.u32 = "u32";
    CommonSymbols.u64 = "u64";
    CommonSymbols.usize = "usize";
    CommonSymbols.bool = "bool";
    CommonSymbols.f32 = "f32";
    CommonSymbols.f64 = "f64";
    CommonSymbols.v128 = "v128";
    CommonSymbols.anyref = "anyref";
    CommonSymbols.i8x16 = "i8x16";
    CommonSymbols.u8x16 = "u8x16";
    CommonSymbols.i16x8 = "i16x8";
    CommonSymbols.u16x8 = "u16x8";
    CommonSymbols.i32x4 = "i32x4";
    CommonSymbols.u32x4 = "u32x4";
    CommonSymbols.i64x2 = "i64x2";
    CommonSymbols.u64x2 = "u64x2";
    CommonSymbols.f32x4 = "f32x4";
    CommonSymbols.f64x2 = "f64x2";
    CommonSymbols.void_ = "void";
    CommonSymbols.number = "number";
    CommonSymbols.boolean = "boolean";
    CommonSymbols.string = "string";
    CommonSymbols.native = "native";
    CommonSymbols.indexof = "indexof";
    CommonSymbols.valueof = "valueof";
    CommonSymbols.returnof = "returnof";
    // aliases
    CommonSymbols.null_ = "null";
    CommonSymbols.true_ = "true";
    CommonSymbols.false_ = "false";
    // objects
    CommonSymbols.this_ = "this";
    CommonSymbols.super_ = "super";
    CommonSymbols.constructor = "constructor";
    // constants
    CommonSymbols.ASC_TARGET = "ASC_TARGET";
    CommonSymbols.ASC_NO_TREESHAKING = "ASC_NO_TREESHAKING";
    CommonSymbols.ASC_NO_ASSERT = "ASC_NO_ASSERT";
    CommonSymbols.ASC_MEMORY_BASE = "ASC_MEMORY_BASE";
    CommonSymbols.ASC_OPTIMIZE_LEVEL = "ASC_OPTIMIZE_LEVEL";
    CommonSymbols.ASC_SHRINK_LEVEL = "ASC_SHRINK_LEVEL";
    CommonSymbols.ASC_FEATURE_SIGN_EXTENSION = "ASC_FEATURE_SIGN_EXTENSION";
    CommonSymbols.ASC_FEATURE_MUTABLE_GLOBALS = "ASC_FEATURE_MUTABLE_GLOBALS";
    CommonSymbols.ASC_FEATURE_NONTRAPPING_F2I = "ASC_FEATURE_NONTRAPPING_F2I";
    CommonSymbols.ASC_FEATURE_BULK_MEMORY = "ASC_FEATURE_BULK_MEMORY";
    CommonSymbols.ASC_FEATURE_SIMD = "ASC_FEATURE_SIMD";
    CommonSymbols.ASC_FEATURE_THREADS = "ASC_FEATURE_THREADS";
    CommonSymbols.ASC_FEATURE_EXCEPTION_HANDLING = "ASC_FEATURE_EXCEPTION_HANDLING";
    CommonSymbols.ASC_FEATURE_TAIL_CALLS = "ASC_FEATURE_TAIL_CALLS";
    CommonSymbols.ASC_FEATURE_REFERENCE_TYPES = "ASC_FEATURE_REFERENCE_TYPES";
    // classes
    CommonSymbols.I8 = "I8";
    CommonSymbols.I16 = "I16";
    CommonSymbols.I32 = "I32";
    CommonSymbols.I64 = "I64";
    CommonSymbols.Isize = "Isize";
    CommonSymbols.U8 = "U8";
    CommonSymbols.U16 = "U16";
    CommonSymbols.U32 = "U32";
    CommonSymbols.U64 = "U64";
    CommonSymbols.Usize = "Usize";
    CommonSymbols.Bool = "Bool";
    CommonSymbols.F32 = "F32";
    CommonSymbols.F64 = "F64";
    CommonSymbols.V128 = "V128";
    CommonSymbols.Anyref = "Anyref";
    CommonSymbols.String = "String";
    CommonSymbols.Array = "Array";
    CommonSymbols.FixedArray = "FixedArray";
    CommonSymbols.Set = "Set";
    CommonSymbols.Map = "Map";
    CommonSymbols.ArrayBufferView = "ArrayBufferView";
    CommonSymbols.ArrayBuffer = "ArrayBuffer";
    CommonSymbols.Math = "Math";
    CommonSymbols.Mathf = "Mathf";
    CommonSymbols.Int8Array = "Int8Array";
    CommonSymbols.Int16Array = "Int16Array";
    CommonSymbols.Int32Array = "Int32Array";
    CommonSymbols.Int64Array = "Int64Array";
    CommonSymbols.Uint8Array = "Uint8Array";
    CommonSymbols.Uint8ClampedArray = "Uint8ClampedArray";
    CommonSymbols.Uint16Array = "Uint16Array";
    CommonSymbols.Uint32Array = "Uint32Array";
    CommonSymbols.Uint64Array = "Uint64Array";
    CommonSymbols.Float32Array = "Float32Array";
    CommonSymbols.Float64Array = "Float64Array";
    // runtime
    CommonSymbols.abort = "abort";
    CommonSymbols.pow = "pow";
    CommonSymbols.mod = "mod";
    CommonSymbols.alloc = "__alloc";
    CommonSymbols.realloc = "__realloc";
    CommonSymbols.free = "__free";
    CommonSymbols.retain = "__retain";
    CommonSymbols.release = "__release";
    CommonSymbols.collect = "__collect";
    CommonSymbols.typeinfo = "__typeinfo";
    CommonSymbols.instanceof_ = "__instanceof";
    CommonSymbols.visit = "__visit";
    CommonSymbols.allocArray = "__allocArray";
})(CommonSymbols = exports.CommonSymbols || (exports.CommonSymbols = {}));
// shared
var feature_1 = __webpack_require__(/*! ../std/assembly/shared/feature */ "./node_modules/assemblyscript/std/assembly/shared/feature.ts");
exports.Feature = feature_1.Feature;
var target_1 = __webpack_require__(/*! ../std/assembly/shared/target */ "./node_modules/assemblyscript/std/assembly/shared/target.ts");
exports.Target = target_1.Target;
var typeinfo_1 = __webpack_require__(/*! ../std/assembly/shared/typeinfo */ "./node_modules/assemblyscript/std/assembly/shared/typeinfo.ts");
exports.Typeinfo = typeinfo_1.Typeinfo;
exports.TypeinfoFlags = typeinfo_1.TypeinfoFlags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3NyYy9jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRyxDQUFBLEtBQUs7O0FBRVIsNkRBQTZEO0FBQzdELElBQVksV0F5RVg7QUF6RUQsV0FBWSxXQUFXO0lBQ3JCLG9CQUFvQjtJQUNwQiw2Q0FBUSxDQUFBO0lBRVIsa0JBQWtCO0lBRWxCLGdDQUFnQztJQUNoQyxpREFBZSxDQUFBO0lBQ2YsZ0NBQWdDO0lBQ2hDLGlEQUFlLENBQUE7SUFDZixnQ0FBZ0M7SUFDaEMsbURBQWdCLENBQUE7SUFDaEIsOEJBQThCO0lBQzlCLCtDQUFjLENBQUE7SUFDZCw0QkFBNEI7SUFDNUIsNENBQVksQ0FBQTtJQUNaLCtCQUErQjtJQUMvQixrREFBZSxDQUFBO0lBQ2YsaUNBQWlDO0lBQ2pDLHNEQUFpQixDQUFBO0lBQ2pCLGtDQUFrQztJQUNsQyx1REFBaUIsQ0FBQTtJQUNqQiwrQkFBK0I7SUFDL0IsbURBQWUsQ0FBQTtJQUNmLGdDQUFnQztJQUNoQyxxREFBZ0IsQ0FBQTtJQUNoQixrQ0FBa0M7SUFDbEMsMERBQW1CLENBQUE7SUFDbkIsNEJBQTRCO0lBQzVCLDhDQUFhLENBQUE7SUFDYiw0QkFBNEI7SUFDNUIsOENBQWEsQ0FBQTtJQUNiLGdFQUFnRTtJQUNoRSw4RUFBNkIsQ0FBQTtJQUU3QiwwREFBMEQ7SUFFMUQsMkVBQTJFO0lBQzNFLHVEQUFpQixDQUFBO0lBQ2pCLGtCQUFrQjtJQUNsQix1REFBaUIsQ0FBQTtJQUNqQixvQ0FBb0M7SUFDcEMsdUVBQXlCLENBQUE7SUFDekIsNkJBQTZCO0lBQzdCLDBEQUFrQixDQUFBO0lBQ2xCLHdCQUF3QjtJQUN4QixnRUFBcUIsQ0FBQTtJQUNyQiwwQkFBMEI7SUFDMUIsb0VBQXVCLENBQUE7SUFDdkIsMEJBQTBCO0lBQzFCLHFFQUF1QixDQUFBO0lB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USxHQUFHLFlBQVksQ0FBQztJQUN4Qix5QkFBVyxHQUFHLGNBQWMsQ0FBQztJQUM3QixtQkFBSyxHQUFHLFNBQVMsQ0FBQztJQUNsQix3QkFBVSxHQUFHLGNBQWMsQ0FBQztBQUMzQyxDQUFDLEVBL0dnQixhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQStHN0I7QUFFRCxTQUFTO0FBQ1QsMERBQXlEO0FBQWhELDRCQUFBLE9BQU8sQ0FBQTtBQUNoQix3REFBdUQ7QUFBOUMsMEJBQUEsTUFBTSxDQUFBO0FBQ2YsNERBQTBFO0FBQWpFLDhCQUFBLFFBQVEsQ0FBQTtBQUFFLG1DQUFBLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tbW9uIGNvbnN0YW50cy5cbiAqIEBtb2R1bGUgY29tbW9uXG4gKi8vKioqL1xuXG4vKiogSW5kaWNhdGVzIHRyYWl0cyBvZiBhIHtAbGluayBOb2RlfSBvciB7QGxpbmsgRWxlbWVudH0uICovXG5leHBvcnQgZW51bSBDb21tb25GbGFncyB7XG4gIC8qKiBObyBmbGFncyBzZXQuICovXG4gIE5PTkUgPSAwLFxuXG4gIC8vIEJhc2ljIG1vZGlmaWVyc1xuXG4gIC8qKiBIYXMgYW4gYGltcG9ydGAgbW9kaWZpZXIuICovXG4gIElNUE9SVCA9IDEgPDwgMCxcbiAgLyoqIEhhcyBhbiBgZXhwb3J0YCBtb2RpZmllci4gKi9cbiAgRVhQT1JUID0gMSA8PCAxLFxuICAvKiogSGFzIGEgYGRlY2xhcmVgIG1vZGlmaWVyLiAqL1xuICBERUNMQVJFID0gMSA8PCAyLFxuICAvKiogSGFzIGEgYGNvbnN0YCBtb2RpZmllci4gKi9cbiAgQ09OU1QgPSAxIDw8IDMsXG4gIC8qKiBIYXMgYSBgbGV0YCBtb2RpZmllci4gKi9cbiAgTEVUID0gMSA8PCA0LFxuICAvKiogSGFzIGEgYHN0YXRpY2AgbW9kaWZpZXIuICovXG4gIFNUQVRJQyA9IDEgPDwgNSxcbiAgLyoqIEhhcyBhIGByZWFkb25seWAgbW9kaWZpZXIuICovXG4gIFJFQURPTkxZID0gMSA8PCA2LFxuICAvKiogSGFzIGFuIGBhYnN0cmFjdGAgbW9kaWZpZXIuICovXG4gIEFCU1RSQUNUID0gMSA8PCA3LFxuICAvKiogSGFzIGEgYHB1YmxpY2AgbW9kaWZpZXIuICovXG4gIFBVQkxJQyA9IDEgPDwgOCxcbiAgLyoqIEhhcyBhIGBwcml2YXRlYCBtb2RpZmllci4gKi9cbiAgUFJJVkFURSA9IDEgPDwgOSxcbiAgLyoqIEhhcyBhIGBwcm90ZWN0ZWRgIG1vZGlmaWVyLiAqL1xuICBQUk9URUNURUQgPSAxIDw8IDEwLFxuICAvKiogSGFzIGEgYGdldGAgbW9kaWZpZXIuICovXG4gIEdFVCA9IDEgPDwgMTEsXG4gIC8qKiBIYXMgYSBgc2V0YCBtb2RpZmllci4gKi9cbiAgU0VUID0gMSA8PCAxMixcbiAgLyoqIEhhcyBhIGRlZmluaXRlIGFzc2lnbm1lbnQgYXNzZXJ0aW9uIGAhYCBhcyBpbiBgeCE6IGkzMjtgLiAqL1xuICBERUZJTklURV9BU1NJR05NRU5UID0gMSA8PCAxMyxcblxuICAvLyBFeHRlbmRlZCBtb2RpZmllcnMgdXN1YWxseSBkZXJpdmVkIGZyb20gYmFzaWMgbW9kaWZpZXJzXG5cbiAgLyoqIElzIGFtYmllbnQsIHRoYXQgaXMgZWl0aGVyIGRlY2xhcmVkIG9yIG5lc3RlZCBpbiBhIGRlY2xhcmVkIGVsZW1lbnQuICovXG4gIEFNQklFTlQgPSAxIDw8IDE0LFxuICAvKiogSXMgZ2VuZXJpYy4gKi9cbiAgR0VORVJJQyA9IDEgPDwgMTUsXG4gIC8qKiBJcyBwYXJ0IG9mIGEgZ2VuZXJpYyBjb250ZXh0LiAqL1xuICBHRU5FUklDX0NPTlRFWFQgPSAxIDw8IDE2LFxuICAvKiogSXMgYW4gaW5zdGFuY2UgbWVtYmVyLiAqL1xuICBJTlNUQU5DRSA9IDEgPDwgMTcsXG4gIC8qKiBJcyBhIGNvbnN0cnVjdG9yLiAqL1xuICBDT05TVFJVQ1RPUiA9IDEgPDwgMTgsXG4gIC8qKiBJcyBhIG1vZHVsZSBleHBvcnQuICovXG4gIE1PRFVMRV9FWFBPUlQgPSAxIDw8IDE5LFxuICAvKiogSXMgYSBtb2R1bGUgaW1wb3J0LiAqL1xuICBNT0RVTEVfSU1QT1JUID0gMSA8PCAyMCxcblxuICAvLyBDb21waWxhdGlvbiBzdGF0ZXNcblxuICAvKiogSXMgcmVzb2x2ZWQuICovXG4gIFJFU09MVkVEID0gMSA8PCAyMSxcbiAgLyoqIElzIGNvbXBpbGVkLiAqL1xuICBDT01QSUxFRCA9IDEgPDwgMjIsXG4gIC8qKiBIYXMgYSBjb25zdGFudCB2YWx1ZSBhbmQgaXMgdGhlcmVmb3JlIGlubGluZWQuICovXG4gIElOTElORUQgPSAxIDw8IDIzLFxuICAvKiogSXMgc2NvcGVkLiAqL1xuICBTQ09QRUQgPSAxIDw8IDI0LFxuICAvKiogSXMgYSB0cmFtcG9saW5lLiAqL1xuICBUUkFNUE9MSU5FID0gMSA8PCAyNSxcbiAgLyoqIElzIGEgdmlydHVhbCBtZXRob2QuICovXG4gIFZJUlRVQUwgPSAxIDw8IDI2LFxuICAvKiogSXMgdGhlIG1haW4gZnVuY3Rpb24uICovXG4gIE1BSU4gPSAxIDw8IDI3LFxuXG4gIC8vIE90aGVyXG5cbiAgLyoqIElzIHF1b3RlZC4gKi9cbiAgUVVPVEVEID0gMSA8PCAyOFxufVxuXG4vKiogUGF0aCBkZWxpbWl0ZXIgaW5zZXJ0ZWQgYmV0d2VlbiBmaWxlIHN5c3RlbSBsZXZlbHMuICovXG5leHBvcnQgY29uc3QgUEFUSF9ERUxJTUlURVIgPSBcIi9cIjtcbi8qKiBTdWJzdGl0dXRpb24gdXNlZCB0byBpbmRpY2F0ZSB0aGUgcGFyZW50IGRpcmVjdG9yeS4gKi9cbmV4cG9ydCBjb25zdCBQQVJFTlRfU1VCU1QgPSBcIi4uXCI7XG4vKiogRnVuY3Rpb24gbmFtZSBwcmVmaXggdXNlZCBmb3IgZ2V0dGVycy4gKi9cbmV4cG9ydCBjb25zdCBHRVRURVJfUFJFRklYID0gXCJnZXQ6XCI7XG4vKiogRnVuY3Rpb24gbmFtZSBwcmVmaXggdXNlZCBmb3Igc2V0dGVycy4gKi9cbmV4cG9ydCBjb25zdCBTRVRURVJfUFJFRklYID0gXCJzZXQ6XCI7XG4vKiogRGVsaW1pdGVyIHVzZWQgYmV0d2VlbiBjbGFzcyBuYW1lcyBhbmQgaW5zdGFuY2UgbWVtYmVycy4gKi9cbmV4cG9ydCBjb25zdCBJTlNUQU5DRV9ERUxJTUlURVIgPSBcIiNcIjtcbi8qKiBEZWxpbWl0ZXIgdXNlZCBiZXR3ZWVuIGNsYXNzIGFuZCBuYW1lc3BhY2UgbmFtZXMgYW5kIHN0YXRpYyBtZW1iZXJzLiAqL1xuZXhwb3J0IGNvbnN0IFNUQVRJQ19ERUxJTUlURVIgPSBcIi5cIjtcbi8qKiBEZWxpbWl0ZXIgdXNlZCBiZXR3ZWVuIGEgZnVuY3Rpb24gYW5kIGl0cyBpbm5lciBlbGVtZW50cy4gKi9cbmV4cG9ydCBjb25zdCBJTk5FUl9ERUxJTUlURVIgPSBcIn5cIjtcbi8qKiBTdWJzdGl0dXRpb24gdXNlZCB0byBpbmRpY2F0ZSBhIGxpYnJhcnkgZGlyZWN0b3J5LiAqL1xuZXhwb3J0IGNvbnN0IExJQlJBUllfU1VCU1QgPSBcIn5saWJcIjtcbi8qKiBMaWJyYXJ5IGRpcmVjdG9yeSBwcmVmaXguICovXG5leHBvcnQgY29uc3QgTElCUkFSWV9QUkVGSVggPSBMSUJSQVJZX1NVQlNUICsgUEFUSF9ERUxJTUlURVI7XG4vKiogUGF0aCBpbmRleCBzdWZmaXguICovXG5leHBvcnQgY29uc3QgSU5ERVhfU1VGRklYID0gUEFUSF9ERUxJTUlURVIgKyBcImluZGV4XCI7XG5cbi8qKiBDb21tb24gY29tcGlsZXIgc3ltYm9scy4gKi9cbmV4cG9ydCBuYW1lc3BhY2UgQ29tbW9uU3ltYm9scyB7XG4gIC8vIHNwZWNpYWxcbiAgZXhwb3J0IGNvbnN0IEVNUFRZID0gXCJcIjtcbiAgLy8gdHlwZXNcbiAgZXhwb3J0IGNvbnN0IGk4ID0gXCJpOFwiO1xuICBleHBvcnQgY29uc3QgaTE2ID0gXCJpMTZcIjtcbiAgZXhwb3J0IGNvbnN0IGkzMiA9IFwiaTMyXCI7XG4gIGV4cG9ydCBjb25zdCBpNjQgPSBcImk2NFwiO1xuICBleHBvcnQgY29uc3QgaXNpemUgPSBcImlzaXplXCI7XG4gIGV4cG9ydCBjb25zdCB1OCA9IFwidThcIjtcbiAgZXhwb3J0IGNvbnN0IHUxNiA9IFwidTE2XCI7XG4gIGV4cG9ydCBjb25zdCB1MzIgPSBcInUzMlwiO1xuICBleHBvcnQgY29uc3QgdTY0ID0gXCJ1NjRcIjtcbiAgZXhwb3J0IGNvbnN0IHVzaXplID0gXCJ1c2l6ZVwiO1xuICBleHBvcnQgY29uc3QgYm9vbCA9IFwiYm9vbFwiO1xuICBleHBvcnQgY29uc3QgZjMyID0gXCJmMzJcIjtcbiAgZXhwb3J0IGNvbnN0IGY2NCA9IFwiZjY0XCI7XG4gIGV4cG9ydCBjb25zdCB2MTI4ID0gXCJ2MTI4XCI7XG4gIGV4cG9ydCBjb25zdCBhbnlyZWYgPSBcImFueXJlZlwiO1xuICBleHBvcnQgY29uc3QgaTh4MTYgPSBcImk4eDE2XCI7XG4gIGV4cG9ydCBjb25zdCB1OHgxNiA9IFwidTh4MTZcIjtcbiAgZXhwb3J0IGNvbnN0IGkxNng4ID0gXCJpMTZ4OFwiO1xuICBleHBvcnQgY29uc3QgdTE2eDggPSBcInUxNng4XCI7XG4gIGV4cG9ydCBjb25zdCBpMzJ4NCA9IFwiaTMyeDRcIjtcbiAgZXhwb3J0IGNvbnN0IHUzMng0ID0gXCJ1MzJ4NFwiO1xuICBleHBvcnQgY29uc3QgaTY0eDIgPSBcImk2NHgyXCI7XG4gIGV4cG9ydCBjb25zdCB1NjR4MiA9IFwidTY0eDJcIjtcbiAgZXhwb3J0IGNvbnN0IGYzMng0ID0gXCJmMzJ4NFwiO1xuICBleHBvcnQgY29uc3QgZjY0eDIgPSBcImY2NHgyXCI7XG4gIGV4cG9ydCBjb25zdCB2b2lkXyA9IFwidm9pZFwiO1xuICBleHBvcnQgY29uc3QgbnVtYmVyID0gXCJudW1iZXJcIjtcbiAgZXhwb3J0IGNvbnN0IGJvb2xlYW4gPSBcImJvb2xlYW5cIjtcbiAgZXhwb3J0IGNvbnN0IHN0cmluZyA9IFwic3RyaW5nXCI7XG4gIGV4cG9ydCBjb25zdCBuYXRpdmUgPSBcIm5hdGl2ZVwiO1xuICBleHBvcnQgY29uc3QgaW5kZXhvZiA9IFwiaW5kZXhvZlwiO1xuICBleHBvcnQgY29uc3QgdmFsdWVvZiA9IFwidmFsdWVvZlwiO1xuICBleHBvcnQgY29uc3QgcmV0dXJub2YgPSBcInJldHVybm9mXCI7XG4gIC8vIGFsaWFzZXNcbiAgZXhwb3J0IGNvbnN0IG51bGxfID0gXCJudWxsXCI7XG4gIGV4cG9ydCBjb25zdCB0cnVlXyA9IFwidHJ1ZVwiO1xuICBleHBvcnQgY29uc3QgZmFsc2VfID0gXCJmYWxzZVwiO1xuICAvLyBvYmplY3RzXG4gIGV4cG9ydCBjb25zdCB0aGlzXyA9IFwidGhpc1wiO1xuICBleHBvcnQgY29uc3Qgc3VwZXJfID0gXCJzdXBlclwiO1xuICBleHBvcnQgY29uc3QgY29uc3RydWN0b3IgPSBcImNvbnN0cnVjdG9yXCI7XG4gIC8vIGNvbnN0YW50c1xuICBleHBvcnQgY29uc3QgQVNDX1RBUkdFVCA9IFwiQVNDX1RBUkdFVFwiO1xuICBleHBvcnQgY29uc3QgQVNDX05PX1RSRUVTSEFLSU5HID0gXCJBU0NfTk9fVFJFRVNIQUtJTkdcIjtcbiAgZXhwb3J0IGNvbnN0IEFTQ19OT19BU1NFUlQgPSBcIkFTQ19OT19BU1NFUlRcIjtcbiAgZXhwb3J0IGNvbnN0IEFTQ19NRU1PUllfQkFTRSA9IFwiQVNDX01FTU9SWV9CQVNFXCI7XG4gIGV4cG9ydCBjb25zdCBBU0NfT1BUSU1JWkVfTEVWRUwgPSBcIkFTQ19PUFRJTUlaRV9MRVZFTFwiO1xuICBleHBvcnQgY29uc3QgQVNDX1NIUklOS19MRVZFTCA9IFwiQVNDX1NIUklOS19MRVZFTFwiO1xuICBleHBvcnQgY29uc3QgQVNDX0ZFQVRVUkVfU0lHTl9FWFRFTlNJT04gPSBcIkFTQ19GRUFUVVJFX1NJR05fRVhURU5TSU9OXCI7XG4gIGV4cG9ydCBjb25zdCBBU0NfRkVBVFVSRV9NVVRBQkxFX0dMT0JBTFMgPSBcIkFTQ19GRUFUVVJFX01VVEFCTEVfR0xPQkFMU1wiO1xuICBleHBvcnQgY29uc3QgQVNDX0ZFQVRVUkVfTk9OVFJBUFBJTkdfRjJJID0gXCJBU0NfRkVBVFVSRV9OT05UUkFQUElOR19GMklcIjtcbiAgZXhwb3J0IGNvbnN0IEFTQ19GRUFUVVJFX0JVTEtfTUVNT1JZID0gXCJBU0NfRkVBVFVSRV9CVUxLX01FTU9SWVwiO1xuICBleHBvcnQgY29uc3QgQVNDX0ZFQVRVUkVfU0lNRCA9IFwiQVNDX0ZFQVRVUkVfU0lNRFwiO1xuICBleHBvcnQgY29uc3QgQVNDX0ZFQVRVUkVfVEhSRUFEUyA9IFwiQVNDX0ZFQVRVUkVfVEhSRUFEU1wiO1xuICBleHBvcnQgY29uc3QgQVNDX0ZFQVRVUkVfRVhDRVBUSU9OX0hBTkRMSU5HID0gXCJBU0NfRkVBVFVSRV9FWENFUFRJT05fSEFORExJTkdcIjtcbiAgZXhwb3J0IGNvbnN0IEFTQ19GRUFUVVJFX1RBSUxfQ0FMTFMgPSBcIkFTQ19GRUFUVVJFX1RBSUxfQ0FMTFNcIjtcbiAgZXhwb3J0IGNvbnN0IEFTQ19GRUFUVVJFX1JFRkVSRU5DRV9UWVBFUyA9IFwiQVNDX0ZFQVRVUkVfUkVGRVJFTkNFX1RZUEVTXCI7XG4gIC8vIGNsYXNzZXNcbiAgZXhwb3J0IGNvbnN0IEk4ID0gXCJJOFwiO1xuICBleHBvcnQgY29uc3QgSTE2ID0gXCJJMTZcIjtcbiAgZXhwb3J0IGNvbnN0IEkzMiA9IFwiSTMyXCI7XG4gIGV4cG9ydCBjb25zdCBJNjQgPSBcIkk2NFwiO1xuICBleHBvcnQgY29uc3QgSXNpemUgPSBcIklzaXplXCI7XG4gIGV4cG9ydCBjb25zdCBVOCA9IFwiVThcIjtcbiAgZXhwb3J0IGNvbnN0IFUxNiA9IFwiVTE2XCI7XG4gIGV4cG9ydCBjb25zdCBVMzIgPSBcIlUzMlwiO1xuICBleHBvcnQgY29uc3QgVTY0ID0gXCJVNjRcIjtcbiAgZXhwb3J0IGNvbnN0IFVzaXplID0gXCJVc2l6ZVwiO1xuICBleHBvcnQgY29uc3QgQm9vbCA9IFwiQm9vbFwiO1xuICBleHBvcnQgY29uc3QgRjMyID0gXCJGMzJcIjtcbiAgZXhwb3J0IGNvbnN0IEY2NCA9IFwiRjY0XCI7XG4gIGV4cG9ydCBjb25zdCBWMTI4ID0gXCJWMTI4XCI7XG4gIGV4cG9ydCBjb25zdCBBbnlyZWYgPSBcIkFueXJlZlwiO1xuICBleHBvcnQgY29uc3QgU3RyaW5nID0gXCJTdHJpbmdcIjtcbiAgZXhwb3J0IGNvbnN0IEFycmF5ID0gXCJBcnJheVwiO1xuICBleHBvcnQgY29uc3QgRml4ZWRBcnJheSA9IFwiRml4ZWRBcnJheVwiO1xuICBleHBvcnQgY29uc3QgU2V0ID0gXCJTZXRcIjtcbiAgZXhwb3J0IGNvbnN0IE1hcCA9IFwiTWFwXCI7XG4gIGV4cG9ydCBjb25zdCBBcnJheUJ1ZmZlclZpZXcgPSBcIkFycmF5QnVmZmVyVmlld1wiO1xuICBleHBvcnQgY29uc3QgQXJyYXlCdWZmZXIgPSBcIkFycmF5QnVmZmVyXCI7XG4gIGV4cG9ydCBjb25zdCBNYXRoID0gXCJNYXRoXCI7XG4gIGV4cG9ydCBjb25zdCBNYXRoZiA9IFwiTWF0aGZcIjtcbiAgZXhwb3J0IGNvbnN0IEludDhBcnJheSA9IFwiSW50OEFycmF5XCI7XG4gIGV4cG9ydCBjb25zdCBJbnQxNkFycmF5ID0gXCJJbnQxNkFycmF5XCI7XG4gIGV4cG9ydCBjb25zdCBJbnQzMkFycmF5ID0gXCJJbnQzMkFycmF5XCI7XG4gIGV4cG9ydCBjb25zdCBJbnQ2NEFycmF5ID0gXCJJbnQ2NEFycmF5XCI7XG4gIGV4cG9ydCBjb25zdCBVaW50OEFycmF5ID0gXCJVaW50OEFycmF5XCI7XG4gIGV4cG9ydCBjb25zdCBVaW50OENsYW1wZWRBcnJheSA9IFwiVWludDhDbGFtcGVkQXJyYXlcIjtcbiAgZXhwb3J0IGNvbnN0IFVpbnQxNkFycmF5ID0gXCJVaW50MTZBcnJheVwiO1xuICBleHBvcnQgY29uc3QgVWludDMyQXJyYXkgPSBcIlVpbnQzMkFycmF5XCI7XG4gIGV4cG9ydCBjb25zdCBVaW50NjRBcnJheSA9IFwiVWludDY0QXJyYXlcIjtcbiAgZXhwb3J0IGNvbnN0IEZsb2F0MzJBcnJheSA9IFwiRmxvYXQzMkFycmF5XCI7XG4gIGV4cG9ydCBjb25zdCBGbG9hdDY0QXJyYXkgPSBcIkZsb2F0NjRBcnJheVwiO1xuICAvLyBydW50aW1lXG4gIGV4cG9ydCBjb25zdCBhYm9ydCA9IFwiYWJvcnRcIjtcbiAgZXhwb3J0IGNvbnN0IHBvdyA9IFwicG93XCI7XG4gIGV4cG9ydCBjb25zdCBtb2QgPSBcIm1vZFwiO1xuICBleHBvcnQgY29uc3QgYWxsb2MgPSBcIl9fYWxsb2NcIjtcbiAgZXhwb3J0IGNvbnN0IHJlYWxsb2MgPSBcIl9fcmVhbGxvY1wiO1xuICBleHBvcnQgY29uc3QgZnJlZSA9IFwiX19mcmVlXCI7XG4gIGV4cG9ydCBjb25zdCByZXRhaW4gPSBcIl9fcmV0YWluXCI7XG4gIGV4cG9ydCBjb25zdCByZWxlYXNlID0gXCJfX3JlbGVhc2VcIjtcbiAgZXhwb3J0IGNvbnN0IGNvbGxlY3QgPSBcIl9fY29sbGVjdFwiO1xuICBleHBvcnQgY29uc3QgdHlwZWluZm8gPSBcIl9fdHlwZWluZm9cIjtcbiAgZXhwb3J0IGNvbnN0IGluc3RhbmNlb2ZfID0gXCJfX2luc3RhbmNlb2ZcIjtcbiAgZXhwb3J0IGNvbnN0IHZpc2l0ID0gXCJfX3Zpc2l0XCI7XG4gIGV4cG9ydCBjb25zdCBhbGxvY0FycmF5ID0gXCJfX2FsbG9jQXJyYXlcIjtcbn1cblxuLy8gc2hhcmVkXG5leHBvcnQgeyBGZWF0dXJlIH0gZnJvbSBcIi4uL3N0ZC9hc3NlbWJseS9zaGFyZWQvZmVhdHVyZVwiO1xuZXhwb3J0IHsgVGFyZ2V0IH0gZnJvbSBcIi4uL3N0ZC9hc3NlbWJseS9zaGFyZWQvdGFyZ2V0XCI7XG5leHBvcnQgeyBUeXBlaW5mbywgVHlwZWluZm9GbGFncyB9IGZyb20gXCIuLi9zdGQvYXNzZW1ibHkvc2hhcmVkL3R5cGVpbmZvXCI7XG4iXX0=

/***/ }),

/***/ "./node_modules/assemblyscript/src/diagnosticMessages.generated.ts":
/*!*************************************************************************!*\
  !*** ./node_modules/assemblyscript/src/diagnosticMessages.generated.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Generated from diagnosticsMessages.json. Do not edit.
 * @module diagnostics
 */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-line-length */
/** Enum of available diagnostic codes. */
var DiagnosticCode;
(function (DiagnosticCode) {
    DiagnosticCode[DiagnosticCode["Operation_not_supported"] = 100] = "Operation_not_supported";
    DiagnosticCode[DiagnosticCode["Operation_is_unsafe"] = 101] = "Operation_is_unsafe";
    DiagnosticCode[DiagnosticCode["User_defined_0"] = 102] = "User_defined_0";
    DiagnosticCode[DiagnosticCode["Conversion_from_type_0_to_1_requires_an_explicit_cast"] = 200] = "Conversion_from_type_0_to_1_requires_an_explicit_cast";
    DiagnosticCode[DiagnosticCode["Conversion_from_type_0_to_1_will_require_an_explicit_cast_when_switching_between_32_64_bit"] = 201] = "Conversion_from_type_0_to_1_will_require_an_explicit_cast_when_switching_between_32_64_bit";
    DiagnosticCode[DiagnosticCode["Type_0_cannot_be_changed_to_type_1"] = 202] = "Type_0_cannot_be_changed_to_type_1";
    DiagnosticCode[DiagnosticCode["Type_0_cannot_be_reinterpreted_as_type_1"] = 203] = "Type_0_cannot_be_reinterpreted_as_type_1";
    DiagnosticCode[DiagnosticCode["Basic_type_0_cannot_be_nullable"] = 204] = "Basic_type_0_cannot_be_nullable";
    DiagnosticCode[DiagnosticCode["Cannot_export_a_mutable_global"] = 205] = "Cannot_export_a_mutable_global";
    DiagnosticCode[DiagnosticCode["Mutable_value_cannot_be_inlined"] = 206] = "Mutable_value_cannot_be_inlined";
    DiagnosticCode[DiagnosticCode["Unmanaged_classes_cannot_extend_managed_classes_and_vice_versa"] = 207] = "Unmanaged_classes_cannot_extend_managed_classes_and_vice_versa";
    DiagnosticCode[DiagnosticCode["Unmanaged_classes_cannot_implement_interfaces"] = 208] = "Unmanaged_classes_cannot_implement_interfaces";
    DiagnosticCode[DiagnosticCode["Invalid_regular_expression_flags"] = 209] = "Invalid_regular_expression_flags";
    DiagnosticCode[DiagnosticCode["Implementation_0_must_match_the_signature_1"] = 210] = "Implementation_0_must_match_the_signature_1";
    DiagnosticCode[DiagnosticCode["Class_0_is_sealed_and_cannot_be_extended"] = 211] = "Class_0_is_sealed_and_cannot_be_extended";
    DiagnosticCode[DiagnosticCode["Decorator_0_is_not_valid_here"] = 212] = "Decorator_0_is_not_valid_here";
    DiagnosticCode[DiagnosticCode["Duplicate_decorator"] = 213] = "Duplicate_decorator";
    DiagnosticCode[DiagnosticCode["An_allocator_must_be_present_to_use_0"] = 214] = "An_allocator_must_be_present_to_use_0";
    DiagnosticCode[DiagnosticCode["Optional_parameter_must_have_an_initializer"] = 215] = "Optional_parameter_must_have_an_initializer";
    DiagnosticCode[DiagnosticCode["Constructor_of_class_0_must_not_require_any_arguments"] = 216] = "Constructor_of_class_0_must_not_require_any_arguments";
    DiagnosticCode[DiagnosticCode["Function_0_cannot_be_inlined_into_itself"] = 217] = "Function_0_cannot_be_inlined_into_itself";
    DiagnosticCode[DiagnosticCode["Cannot_access_method_0_without_calling_it_as_it_requires_this_to_be_set"] = 218] = "Cannot_access_method_0_without_calling_it_as_it_requires_this_to_be_set";
    DiagnosticCode[DiagnosticCode["Optional_properties_are_not_supported"] = 219] = "Optional_properties_are_not_supported";
    DiagnosticCode[DiagnosticCode["Expression_must_be_a_compile_time_constant"] = 220] = "Expression_must_be_a_compile_time_constant";
    DiagnosticCode[DiagnosticCode["Module_cannot_have_multiple_start_functions"] = 221] = "Module_cannot_have_multiple_start_functions";
    DiagnosticCode[DiagnosticCode["_0_must_be_a_value_between_1_and_2_inclusive"] = 222] = "_0_must_be_a_value_between_1_and_2_inclusive";
    DiagnosticCode[DiagnosticCode["_0_must_be_a_power_of_two"] = 223] = "_0_must_be_a_power_of_two";
    DiagnosticCode[DiagnosticCode["Expression_is_unsafe"] = 224] = "Expression_is_unsafe";
    DiagnosticCode[DiagnosticCode["Expression_is_never_null"] = 225] = "Expression_is_never_null";
    DiagnosticCode[DiagnosticCode["Unterminated_string_literal"] = 1002] = "Unterminated_string_literal";
    DiagnosticCode[DiagnosticCode["Identifier_expected"] = 1003] = "Identifier_expected";
    DiagnosticCode[DiagnosticCode["_0_expected"] = 1005] = "_0_expected";
    DiagnosticCode[DiagnosticCode["A_file_cannot_have_a_reference_to_itself"] = 1006] = "A_file_cannot_have_a_reference_to_itself";
    DiagnosticCode[DiagnosticCode["Trailing_comma_not_allowed"] = 1009] = "Trailing_comma_not_allowed";
    DiagnosticCode[DiagnosticCode["Unexpected_token"] = 1012] = "Unexpected_token";
    DiagnosticCode[DiagnosticCode["A_rest_parameter_must_be_last_in_a_parameter_list"] = 1014] = "A_rest_parameter_must_be_last_in_a_parameter_list";
    DiagnosticCode[DiagnosticCode["Parameter_cannot_have_question_mark_and_initializer"] = 1015] = "Parameter_cannot_have_question_mark_and_initializer";
    DiagnosticCode[DiagnosticCode["A_required_parameter_cannot_follow_an_optional_parameter"] = 1016] = "A_required_parameter_cannot_follow_an_optional_parameter";
    DiagnosticCode[DiagnosticCode["Statements_are_not_allowed_in_ambient_contexts"] = 1036] = "Statements_are_not_allowed_in_ambient_contexts";
    DiagnosticCode[DiagnosticCode["Initializers_are_not_allowed_in_ambient_contexts"] = 1039] = "Initializers_are_not_allowed_in_ambient_contexts";
    DiagnosticCode[DiagnosticCode["_0_modifier_cannot_be_used_here"] = 1042] = "_0_modifier_cannot_be_used_here";
    DiagnosticCode[DiagnosticCode["A_rest_parameter_cannot_be_optional"] = 1047] = "A_rest_parameter_cannot_be_optional";
    DiagnosticCode[DiagnosticCode["A_rest_parameter_cannot_have_an_initializer"] = 1048] = "A_rest_parameter_cannot_have_an_initializer";
    DiagnosticCode[DiagnosticCode["A_set_accessor_must_have_exactly_one_parameter"] = 1049] = "A_set_accessor_must_have_exactly_one_parameter";
    DiagnosticCode[DiagnosticCode["A_set_accessor_parameter_cannot_have_an_initializer"] = 1052] = "A_set_accessor_parameter_cannot_have_an_initializer";
    DiagnosticCode[DiagnosticCode["A_get_accessor_cannot_have_parameters"] = 1054] = "A_get_accessor_cannot_have_parameters";
    DiagnosticCode[DiagnosticCode["Enum_member_must_have_initializer"] = 1061] = "Enum_member_must_have_initializer";
    DiagnosticCode[DiagnosticCode["Type_parameters_cannot_appear_on_a_constructor_declaration"] = 1092] = "Type_parameters_cannot_appear_on_a_constructor_declaration";
    DiagnosticCode[DiagnosticCode["Type_annotation_cannot_appear_on_a_constructor_declaration"] = 1093] = "Type_annotation_cannot_appear_on_a_constructor_declaration";
    DiagnosticCode[DiagnosticCode["An_accessor_cannot_have_type_parameters"] = 1094] = "An_accessor_cannot_have_type_parameters";
    DiagnosticCode[DiagnosticCode["A_set_accessor_cannot_have_a_return_type_annotation"] = 1095] = "A_set_accessor_cannot_have_a_return_type_annotation";
    DiagnosticCode[DiagnosticCode["Type_parameter_list_cannot_be_empty"] = 1098] = "Type_parameter_list_cannot_be_empty";
    DiagnosticCode[DiagnosticCode["A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement"] = 1104] = "A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement";
    DiagnosticCode[DiagnosticCode["A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement"] = 1105] = "A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement";
    DiagnosticCode[DiagnosticCode["A_return_statement_can_only_be_used_within_a_function_body"] = 1108] = "A_return_statement_can_only_be_used_within_a_function_body";
    DiagnosticCode[DiagnosticCode["Expression_expected"] = 1109] = "Expression_expected";
    DiagnosticCode[DiagnosticCode["Type_expected"] = 1110] = "Type_expected";
    DiagnosticCode[DiagnosticCode["A_default_clause_cannot_appear_more_than_once_in_a_switch_statement"] = 1113] = "A_default_clause_cannot_appear_more_than_once_in_a_switch_statement";
    DiagnosticCode[DiagnosticCode["Duplicate_label_0"] = 1114] = "Duplicate_label_0";
    DiagnosticCode[DiagnosticCode["An_export_assignment_cannot_have_modifiers"] = 1120] = "An_export_assignment_cannot_have_modifiers";
    DiagnosticCode[DiagnosticCode["Octal_literals_are_not_allowed_in_strict_mode"] = 1121] = "Octal_literals_are_not_allowed_in_strict_mode";
    DiagnosticCode[DiagnosticCode["Digit_expected"] = 1124] = "Digit_expected";
    DiagnosticCode[DiagnosticCode["Hexadecimal_digit_expected"] = 1125] = "Hexadecimal_digit_expected";
    DiagnosticCode[DiagnosticCode["Unexpected_end_of_text"] = 1126] = "Unexpected_end_of_text";
    DiagnosticCode[DiagnosticCode["Invalid_character"] = 1127] = "Invalid_character";
    DiagnosticCode[DiagnosticCode["_case_or_default_expected"] = 1130] = "_case_or_default_expected";
    DiagnosticCode[DiagnosticCode["_super_must_be_followed_by_an_argument_list_or_member_access"] = 1034] = "_super_must_be_followed_by_an_argument_list_or_member_access";
    DiagnosticCode[DiagnosticCode["A_declare_modifier_cannot_be_used_in_an_already_ambient_context"] = 1038] = "A_declare_modifier_cannot_be_used_in_an_already_ambient_context";
    DiagnosticCode[DiagnosticCode["Type_argument_expected"] = 1140] = "Type_argument_expected";
    DiagnosticCode[DiagnosticCode["String_literal_expected"] = 1141] = "String_literal_expected";
    DiagnosticCode[DiagnosticCode["Line_break_not_permitted_here"] = 1142] = "Line_break_not_permitted_here";
    DiagnosticCode[DiagnosticCode["Declaration_expected"] = 1146] = "Declaration_expected";
    DiagnosticCode[DiagnosticCode["_const_declarations_must_be_initialized"] = 1155] = "_const_declarations_must_be_initialized";
    DiagnosticCode[DiagnosticCode["Unterminated_regular_expression_literal"] = 1161] = "Unterminated_regular_expression_literal";
    DiagnosticCode[DiagnosticCode["Interface_declaration_cannot_have_implements_clause"] = 1176] = "Interface_declaration_cannot_have_implements_clause";
    DiagnosticCode[DiagnosticCode["Binary_digit_expected"] = 1177] = "Binary_digit_expected";
    DiagnosticCode[DiagnosticCode["Octal_digit_expected"] = 1178] = "Octal_digit_expected";
    DiagnosticCode[DiagnosticCode["An_implementation_cannot_be_declared_in_ambient_contexts"] = 1183] = "An_implementation_cannot_be_declared_in_ambient_contexts";
    DiagnosticCode[DiagnosticCode["An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive"] = 1198] = "An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive";
    DiagnosticCode[DiagnosticCode["Unterminated_Unicode_escape_sequence"] = 1199] = "Unterminated_Unicode_escape_sequence";
    DiagnosticCode[DiagnosticCode["Decorators_are_not_valid_here"] = 1206] = "Decorators_are_not_valid_here";
    DiagnosticCode[DiagnosticCode["_abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration"] = 1242] = "_abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration";
    DiagnosticCode[DiagnosticCode["Method_0_cannot_have_an_implementation_because_it_is_marked_abstract"] = 1245] = "Method_0_cannot_have_an_implementation_because_it_is_marked_abstract";
    DiagnosticCode[DiagnosticCode["A_definite_assignment_assertion_is_not_permitted_in_this_context"] = 1255] = "A_definite_assignment_assertion_is_not_permitted_in_this_context";
    DiagnosticCode[DiagnosticCode["A_class_may_only_extend_another_class"] = 1311] = "A_class_may_only_extend_another_class";
    DiagnosticCode[DiagnosticCode["A_parameter_property_cannot_be_declared_using_a_rest_parameter"] = 1317] = "A_parameter_property_cannot_be_declared_using_a_rest_parameter";
    DiagnosticCode[DiagnosticCode["Duplicate_identifier_0"] = 2300] = "Duplicate_identifier_0";
    DiagnosticCode[DiagnosticCode["Cannot_find_name_0"] = 2304] = "Cannot_find_name_0";
    DiagnosticCode[DiagnosticCode["Module_0_has_no_exported_member_1"] = 2305] = "Module_0_has_no_exported_member_1";
    DiagnosticCode[DiagnosticCode["Generic_type_0_requires_1_type_argument_s"] = 2314] = "Generic_type_0_requires_1_type_argument_s";
    DiagnosticCode[DiagnosticCode["Type_0_is_not_generic"] = 2315] = "Type_0_is_not_generic";
    DiagnosticCode[DiagnosticCode["Type_0_is_not_assignable_to_type_1"] = 2322] = "Type_0_is_not_assignable_to_type_1";
    DiagnosticCode[DiagnosticCode["Index_signature_is_missing_in_type_0"] = 2329] = "Index_signature_is_missing_in_type_0";
    DiagnosticCode[DiagnosticCode["_this_cannot_be_referenced_in_current_location"] = 2332] = "_this_cannot_be_referenced_in_current_location";
    DiagnosticCode[DiagnosticCode["_super_can_only_be_referenced_in_a_derived_class"] = 2335] = "_super_can_only_be_referenced_in_a_derived_class";
    DiagnosticCode[DiagnosticCode["Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors"] = 2337] = "Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors";
    DiagnosticCode[DiagnosticCode["Property_0_does_not_exist_on_type_1"] = 2339] = "Property_0_does_not_exist_on_type_1";
    DiagnosticCode[DiagnosticCode["Cannot_invoke_an_expression_whose_type_lacks_a_call_signature_Type_0_has_no_compatible_call_signatures"] = 2349] = "Cannot_invoke_an_expression_whose_type_lacks_a_call_signature_Type_0_has_no_compatible_call_signatures";
    DiagnosticCode[DiagnosticCode["Cannot_use_new_with_an_expression_whose_type_lacks_a_construct_signature"] = 2351] = "Cannot_use_new_with_an_expression_whose_type_lacks_a_construct_signature";
    DiagnosticCode[DiagnosticCode["A_function_whose_declared_type_is_not_void_must_return_a_value"] = 2355] = "A_function_whose_declared_type_is_not_void_must_return_a_value";
    DiagnosticCode[DiagnosticCode["The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access"] = 2357] = "The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access";
    DiagnosticCode[DiagnosticCode["The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access"] = 2364] = "The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access";
    DiagnosticCode[DiagnosticCode["Operator_0_cannot_be_applied_to_types_1_and_2"] = 2365] = "Operator_0_cannot_be_applied_to_types_1_and_2";
    DiagnosticCode[DiagnosticCode["A_super_call_must_be_the_first_statement_in_the_constructor"] = 2376] = "A_super_call_must_be_the_first_statement_in_the_constructor";
    DiagnosticCode[DiagnosticCode["Constructors_for_derived_classes_must_contain_a_super_call"] = 2377] = "Constructors_for_derived_classes_must_contain_a_super_call";
    DiagnosticCode[DiagnosticCode["_get_and_set_accessor_must_have_the_same_type"] = 2380] = "_get_and_set_accessor_must_have_the_same_type";
    DiagnosticCode[DiagnosticCode["Constructor_implementation_is_missing"] = 2390] = "Constructor_implementation_is_missing";
    DiagnosticCode[DiagnosticCode["Function_implementation_is_missing_or_not_immediately_following_the_declaration"] = 2391] = "Function_implementation_is_missing_or_not_immediately_following_the_declaration";
    DiagnosticCode[DiagnosticCode["Multiple_constructor_implementations_are_not_allowed"] = 2392] = "Multiple_constructor_implementations_are_not_allowed";
    DiagnosticCode[DiagnosticCode["Duplicate_function_implementation"] = 2393] = "Duplicate_function_implementation";
    DiagnosticCode[DiagnosticCode["Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local"] = 2395] = "Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local";
    DiagnosticCode[DiagnosticCode["A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged"] = 2434] = "A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged";
    DiagnosticCode[DiagnosticCode["Type_0_has_no_property_1"] = 2460] = "Type_0_has_no_property_1";
    DiagnosticCode[DiagnosticCode["The_0_operator_cannot_be_applied_to_type_1"] = 2469] = "The_0_operator_cannot_be_applied_to_type_1";
    DiagnosticCode[DiagnosticCode["In_const_enum_declarations_member_initializer_must_be_constant_expression"] = 2474] = "In_const_enum_declarations_member_initializer_must_be_constant_expression";
    DiagnosticCode[DiagnosticCode["Export_declaration_conflicts_with_exported_declaration_of_0"] = 2484] = "Export_declaration_conflicts_with_exported_declaration_of_0";
    DiagnosticCode[DiagnosticCode["Object_is_possibly_null"] = 2531] = "Object_is_possibly_null";
    DiagnosticCode[DiagnosticCode["Cannot_assign_to_0_because_it_is_a_constant_or_a_read_only_property"] = 2540] = "Cannot_assign_to_0_because_it_is_a_constant_or_a_read_only_property";
    DiagnosticCode[DiagnosticCode["The_target_of_an_assignment_must_be_a_variable_or_a_property_access"] = 2541] = "The_target_of_an_assignment_must_be_a_variable_or_a_property_access";
    DiagnosticCode[DiagnosticCode["Index_signature_in_type_0_only_permits_reading"] = 2542] = "Index_signature_in_type_0_only_permits_reading";
    DiagnosticCode[DiagnosticCode["Expected_0_arguments_but_got_1"] = 2554] = "Expected_0_arguments_but_got_1";
    DiagnosticCode[DiagnosticCode["Expected_at_least_0_arguments_but_got_1"] = 2555] = "Expected_at_least_0_arguments_but_got_1";
    DiagnosticCode[DiagnosticCode["Expected_0_type_arguments_but_got_1"] = 2558] = "Expected_0_type_arguments_but_got_1";
    DiagnosticCode[DiagnosticCode["A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums"] = 2651] = "A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums";
    DiagnosticCode[DiagnosticCode["Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration"] = 2673] = "Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration";
    DiagnosticCode[DiagnosticCode["Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration"] = 2674] = "Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration";
    DiagnosticCode[DiagnosticCode["Namespace_0_has_no_exported_member_1"] = 2694] = "Namespace_0_has_no_exported_member_1";
    DiagnosticCode[DiagnosticCode["Required_type_parameters_may_not_follow_optional_type_parameters"] = 2706] = "Required_type_parameters_may_not_follow_optional_type_parameters";
    DiagnosticCode[DiagnosticCode["Duplicate_property_0"] = 2718] = "Duplicate_property_0";
    DiagnosticCode[DiagnosticCode["Type_0_has_no_call_signatures"] = 2757] = "Type_0_has_no_call_signatures";
    DiagnosticCode[DiagnosticCode["File_0_not_found"] = 6054] = "File_0_not_found";
    DiagnosticCode[DiagnosticCode["Numeric_separators_are_not_allowed_here"] = 6188] = "Numeric_separators_are_not_allowed_here";
    DiagnosticCode[DiagnosticCode["Multiple_consecutive_numeric_separators_are_not_permitted"] = 6189] = "Multiple_consecutive_numeric_separators_are_not_permitted";
    DiagnosticCode[DiagnosticCode["_super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class"] = 17009] = "_super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class";
    DiagnosticCode[DiagnosticCode["_super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class"] = 17011] = "_super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class";
})(DiagnosticCode = exports.DiagnosticCode || (exports.DiagnosticCode = {}));
/** Translates a diagnostic code to its respective string. */
function diagnosticCodeToString(code) {
    switch (code) {
        case 100: return "Operation not supported.";
        case 101: return "Operation is unsafe.";
        case 102: return "User-defined: {0}";
        case 200: return "Conversion from type '{0}' to '{1}' requires an explicit cast.";
        case 201: return "Conversion from type '{0}' to '{1}' will require an explicit cast when switching between 32/64-bit.";
        case 202: return "Type '{0}' cannot be changed to type '{1}'.";
        case 203: return "Type '{0}' cannot be reinterpreted as type '{1}'.";
        case 204: return "Basic type '{0}' cannot be nullable.";
        case 205: return "Cannot export a mutable global.";
        case 206: return "Mutable value cannot be inlined.";
        case 207: return "Unmanaged classes cannot extend managed classes and vice-versa.";
        case 208: return "Unmanaged classes cannot implement interfaces.";
        case 209: return "Invalid regular expression flags.";
        case 210: return "Implementation '{0}' must match the signature '{1}'.";
        case 211: return "Class '{0}' is sealed and cannot be extended.";
        case 212: return "Decorator '{0}' is not valid here.";
        case 213: return "Duplicate decorator.";
        case 214: return "An allocator must be present to use '{0}'.";
        case 215: return "Optional parameter must have an initializer.";
        case 216: return "Constructor of class '{0}' must not require any arguments.";
        case 217: return "Function '{0}' cannot be inlined into itself.";
        case 218: return "Cannot access method '{0}' without calling it as it requires 'this' to be set.";
        case 219: return "Optional properties are not supported.";
        case 220: return "Expression must be a compile-time constant.";
        case 221: return "Module cannot have multiple start functions.";
        case 222: return "'{0}' must be a value between '{1}' and '{2}' inclusive.";
        case 223: return "'{0}' must be a power of two.";
        case 224: return "Expression is unsafe.";
        case 225: return "Expression is never 'null'.";
        case 1002: return "Unterminated string literal.";
        case 1003: return "Identifier expected.";
        case 1005: return "'{0}' expected.";
        case 1006: return "A file cannot have a reference to itself.";
        case 1009: return "Trailing comma not allowed.";
        case 1012: return "Unexpected token.";
        case 1014: return "A rest parameter must be last in a parameter list.";
        case 1015: return "Parameter cannot have question mark and initializer.";
        case 1016: return "A required parameter cannot follow an optional parameter.";
        case 1036: return "Statements are not allowed in ambient contexts.";
        case 1039: return "Initializers are not allowed in ambient contexts.";
        case 1042: return "'{0}' modifier cannot be used here.";
        case 1047: return "A rest parameter cannot be optional.";
        case 1048: return "A rest parameter cannot have an initializer.";
        case 1049: return "A 'set' accessor must have exactly one parameter.";
        case 1052: return "A 'set' accessor parameter cannot have an initializer.";
        case 1054: return "A 'get' accessor cannot have parameters.";
        case 1061: return "Enum member must have initializer.";
        case 1092: return "Type parameters cannot appear on a constructor declaration.";
        case 1093: return "Type annotation cannot appear on a constructor declaration.";
        case 1094: return "An accessor cannot have type parameters.";
        case 1095: return "A 'set' accessor cannot have a return type annotation.";
        case 1098: return "Type parameter list cannot be empty.";
        case 1104: return "A 'continue' statement can only be used within an enclosing iteration statement.";
        case 1105: return "A 'break' statement can only be used within an enclosing iteration or switch statement.";
        case 1108: return "A 'return' statement can only be used within a function body.";
        case 1109: return "Expression expected.";
        case 1110: return "Type expected.";
        case 1113: return "A 'default' clause cannot appear more than once in a 'switch' statement.";
        case 1114: return "Duplicate label '{0}'.";
        case 1120: return "An export assignment cannot have modifiers.";
        case 1121: return "Octal literals are not allowed in strict mode.";
        case 1124: return "Digit expected.";
        case 1125: return "Hexadecimal digit expected.";
        case 1126: return "Unexpected end of text.";
        case 1127: return "Invalid character.";
        case 1130: return "'case' or 'default' expected.";
        case 1034: return "'super' must be followed by an argument list or member access.";
        case 1038: return "A 'declare' modifier cannot be used in an already ambient context.";
        case 1140: return "Type argument expected.";
        case 1141: return "String literal expected.";
        case 1142: return "Line break not permitted here.";
        case 1146: return "Declaration expected.";
        case 1155: return "'const' declarations must be initialized.";
        case 1161: return "Unterminated regular expression literal.";
        case 1176: return "Interface declaration cannot have 'implements' clause.";
        case 1177: return "Binary digit expected.";
        case 1178: return "Octal digit expected.";
        case 1183: return "An implementation cannot be declared in ambient contexts.";
        case 1198: return "An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive.";
        case 1199: return "Unterminated Unicode escape sequence.";
        case 1206: return "Decorators are not valid here.";
        case 1242: return "'abstract' modifier can only appear on a class, method, or property declaration.";
        case 1245: return "Method '{0}' cannot have an implementation because it is marked abstract.";
        case 1255: return "A definite assignment assertion '!' is not permitted in this context.";
        case 1311: return "A class may only extend another class.";
        case 1317: return "A parameter property cannot be declared using a rest parameter.";
        case 2300: return "Duplicate identifier '{0}'.";
        case 2304: return "Cannot find name '{0}'.";
        case 2305: return "Module '{0}' has no exported member '{1}'.";
        case 2314: return "Generic type '{0}' requires {1} type argument(s).";
        case 2315: return "Type '{0}' is not generic.";
        case 2322: return "Type '{0}' is not assignable to type '{1}'.";
        case 2329: return "Index signature is missing in type '{0}'.";
        case 2332: return "'this' cannot be referenced in current location.";
        case 2335: return "'super' can only be referenced in a derived class.";
        case 2337: return "Super calls are not permitted outside constructors or in nested functions inside constructors.";
        case 2339: return "Property '{0}' does not exist on type '{1}'.";
        case 2349: return "Cannot invoke an expression whose type lacks a call signature. Type '{0}' has no compatible call signatures.";
        case 2351: return "Cannot use 'new' with an expression whose type lacks a construct signature.";
        case 2355: return "A function whose declared type is not 'void' must return a value.";
        case 2357: return "The operand of an increment or decrement operator must be a variable or a property access.";
        case 2364: return "The left-hand side of an assignment expression must be a variable or a property access.";
        case 2365: return "Operator '{0}' cannot be applied to types '{1}' and '{2}'.";
        case 2376: return "A 'super' call must be the first statement in the constructor.";
        case 2377: return "Constructors for derived classes must contain a 'super' call.";
        case 2380: return "'get' and 'set' accessor must have the same type.";
        case 2390: return "Constructor implementation is missing.";
        case 2391: return "Function implementation is missing or not immediately following the declaration.";
        case 2392: return "Multiple constructor implementations are not allowed.";
        case 2393: return "Duplicate function implementation.";
        case 2395: return "Individual declarations in merged declaration '{0}' must be all exported or all local.";
        case 2434: return "A namespace declaration cannot be located prior to a class or function with which it is merged.";
        case 2460: return "Type '{0}' has no property '{1}'.";
        case 2469: return "The '{0}' operator cannot be applied to type '{1}'.";
        case 2474: return "In 'const' enum declarations member initializer must be constant expression.";
        case 2484: return "Export declaration conflicts with exported declaration of '{0}'.";
        case 2531: return "Object is possibly 'null'.";
        case 2540: return "Cannot assign to '{0}' because it is a constant or a read-only property.";
        case 2541: return "The target of an assignment must be a variable or a property access.";
        case 2542: return "Index signature in type '{0}' only permits reading.";
        case 2554: return "Expected {0} arguments, but got {1}.";
        case 2555: return "Expected at least {0} arguments, but got {1}.";
        case 2558: return "Expected {0} type arguments, but got {1}.";
        case 2651: return "A member initializer in a enum declaration cannot reference members declared after it, including members defined in other enums.";
        case 2673: return "Constructor of class '{0}' is private and only accessible within the class declaration.";
        case 2674: return "Constructor of class '{0}' is protected and only accessible within the class declaration.";
        case 2694: return "Namespace '{0}' has no exported member '{1}'.";
        case 2706: return "Required type parameters may not follow optional type parameters.";
        case 2718: return "Duplicate property '{0}'.";
        case 2757: return "Type '{0}' has no call signatures.";
        case 6054: return "File '{0}' not found.";
        case 6188: return "Numeric separators are not allowed here.";
        case 6189: return "Multiple consecutive numeric separators are not permitted.";
        case 17009: return "'super' must be called before accessing 'this' in the constructor of a derived class.";
        case 17011: return "'super' must be called before accessing a property of 'super' in the constructor of a derived class.";
        default: return "";
    }
}
exports.diagnosticCodeToString = diagnosticCodeToString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc3RpY01lc3NhZ2VzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hc3NlbWJseXNjcmlwdC9zcmMvZGlhZ25vc3RpY01lc3NhZ2VzLmdlbmVyYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztHQUdHLENBQUEsS0FBSzs7QUFFUixvQ0FBb0M7QUFFcEMsMENBQTBDO0FBQzFDLElBQVksY0F3SVg7QUF4SUQsV0FBWSxjQUFjO0lBQ3hCLDJGQUE2QixDQUFBO0lBQzdCLG1GQUF5QixDQUFBO0lBQ3pCLHlFQUFvQixDQUFBO0lBQ3BCLHVKQUEyRCxDQUFBO0lBQzNELGlPQUFnRyxDQUFBO0lBQ2hHLGlIQUF3QyxDQUFBO0lBQ3hDLDZIQUE4QyxDQUFBO0lBQzlDLDJHQUFxQyxDQUFBO0lBQ3JDLHlHQUFvQyxDQUFBO0lBQ3BDLDJHQUFxQyxDQUFBO0lBQ3JDLHlLQUFvRSxDQUFBO0lBQ3BFLHVJQUFtRCxDQUFBO0lBQ25ELDZHQUFzQyxDQUFBO0lBQ3RDLG1JQUFpRCxDQUFBO0lBQ2pELDZIQUE4QyxDQUFBO0lBQzlDLHVHQUFtQyxDQUFBO0lBQ25DLG1GQUF5QixDQUFBO0lBQ3pCLHVIQUEyQyxDQUFBO0lBQzNDLG1JQUFpRCxDQUFBO0lBQ2pELHVKQUEyRCxDQUFBO0lBQzNELDZIQUE4QyxDQUFBO0lBQzlDLDJMQUE2RSxDQUFBO0lBQzdFLHVIQUEyQyxDQUFBO0lBQzNDLGlJQUFnRCxDQUFBO0lBQ2hELG1JQUFpRCxDQUFBO0lBQ2pELHFJQUFrRCxDQUFBO0lBQ2xELCtGQUErQixDQUFBO0lBQy9CLHFGQUEwQixDQUFBO0lBQzFCLDZGQUE4QixDQUFBO0lBQzlCLG9HQUFrQyxDQUFBO0lBQ2xDLG9GQUEwQixDQUFBO0lBQzFCLG9FQUFrQixDQUFBO0lBQ2xCLDhIQUErQyxDQUFBO0lBQy9DLGtHQUFpQyxDQUFBO0lBQ2pDLDhFQUF1QixDQUFBO0lBQ3ZC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OUQsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLGtJQUFrSSxDQUFDO1FBQ3JKLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyx5RkFBeUYsQ0FBQztRQUM1RyxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sMkZBQTJGLENBQUM7UUFDOUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLCtDQUErQyxDQUFDO1FBQ2xFLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxtRUFBbUUsQ0FBQztRQUN0RixLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sMkJBQTJCLENBQUM7UUFDOUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLG9DQUFvQyxDQUFDO1FBQ3ZELEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyx1QkFBdUIsQ0FBQztRQUMxQyxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sMENBQTBDLENBQUM7UUFDN0QsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLDREQUE0RCxDQUFDO1FBQy9FLEtBQUssS0FBSyxDQUFDLENBQUMsT0FBTyx1RkFBdUYsQ0FBQztRQUMzRyxLQUFLLEtBQUssQ0FBQyxDQUFDLE9BQU8sc0dBQXNHLENBQUM7UUFDMUgsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDcEI7QUFDSCxDQUFDO0FBM0lELHdEQTJJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJhdGVkIGZyb20gZGlhZ25vc3RpY3NNZXNzYWdlcy5qc29uLiBEbyBub3QgZWRpdC5cbiAqIEBtb2R1bGUgZGlhZ25vc3RpY3NcbiAqLy8qKiovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG4vKiogRW51bSBvZiBhdmFpbGFibGUgZGlhZ25vc3RpYyBjb2Rlcy4gKi9cbmV4cG9ydCBlbnVtIERpYWdub3N0aWNDb2RlIHtcbiAgT3BlcmF0aW9uX25vdF9zdXBwb3J0ZWQgPSAxMDAsXG4gIE9wZXJhdGlvbl9pc191bnNhZmUgPSAxMDEsXG4gIFVzZXJfZGVmaW5lZF8wID0gMTAyLFxuICBDb252ZXJzaW9uX2Zyb21fdHlwZV8wX3RvXzFfcmVxdWlyZXNfYW5fZXhwbGljaXRfY2FzdCA9IDIwMCxcbiAgQ29udmVyc2lvbl9mcm9tX3R5cGVfMF90b18xX3dpbGxfcmVxdWlyZV9hbl9leHBsaWNpdF9jYXN0X3doZW5fc3dpdGNoaW5nX2JldHdlZW5fMzJfNjRfYml0ID0gMjAxLFxuICBUeXBlXzBfY2Fubm90X2JlX2NoYW5nZWRfdG9fdHlwZV8xID0gMjAyLFxuICBUeXBlXzBfY2Fubm90X2JlX3JlaW50ZXJwcmV0ZWRfYXNfdHlwZV8xID0gMjAzLFxuICBCYXNpY190eXBlXzBfY2Fubm90X2JlX251bGxhYmxlID0gMjA0LFxuICBDYW5ub3RfZXhwb3J0X2FfbXV0YWJsZV9nbG9iYWwgPSAyMDUsXG4gIE11dGFibGVfdmFsdWVfY2Fubm90X2JlX2lubGluZWQgPSAyMDYsXG4gIFVubWFuYWdlZF9jbGFzc2VzX2Nhbm5vdF9leHRlbmRfbWFuYWdlZF9jbGFzc2VzX2FuZF92aWNlX3ZlcnNhID0gMjA3LFxuICBVbm1hbmFnZWRfY2xhc3Nlc19jYW5ub3RfaW1wbGVtZW50X2ludGVyZmFjZXMgPSAyMDgsXG4gIEludmFsaWRfcmVndWxhcl9leHByZXNzaW9uX2ZsYWdzID0gMjA5LFxuICBJbXBsZW1lbnRhdGlvbl8wX211c3RfbWF0Y2hfdGhlX3NpZ25hdHVyZV8xID0gMjEwLFxuICBDbGFzc18wX2lzX3NlYWxlZF9hbmRfY2Fubm90X2JlX2V4dGVuZGVkID0gMjExLFxuICBEZWNvcmF0b3JfMF9pc19ub3RfdmFsaWRfaGVyZSA9IDIxMixcbiAgRHVwbGljYXRlX2RlY29yYXRvciA9IDIxMyxcbiAgQW5fYWxsb2NhdG9yX211c3RfYmVfcHJlc2VudF90b191c2VfMCA9IDIxNCxcbiAgT3B0aW9uYWxfcGFyYW1ldGVyX211c3RfaGF2ZV9hbl9pbml0aWFsaXplciA9IDIxNSxcbiAgQ29uc3RydWN0b3Jfb2ZfY2xhc3NfMF9tdXN0X25vdF9yZXF1aXJlX2FueV9hcmd1bWVudHMgPSAyMTYsXG4gIEZ1bmN0aW9uXzBfY2Fubm90X2JlX2lubGluZWRfaW50b19pdHNlbGYgPSAyMTcsXG4gIENhbm5vdF9hY2Nlc3NfbWV0aG9kXzBfd2l0aG91dF9jYWxsaW5nX2l0X2FzX2l0X3JlcXVpcmVzX3RoaXNfdG9fYmVfc2V0ID0gMjE4LFxuICBPcHRpb25hbF9wcm9wZXJ0aWVzX2FyZV9ub3Rfc3VwcG9ydGVkID0gMjE5LFxuICBFeHByZXNzaW9uX211c3RfYmVfYV9jb21waWxlX3RpbWVfY29uc3RhbnQgPSAyMjAsXG4gIE1vZHVsZV9jYW5ub3RfaGF2ZV9tdWx0aXBsZV9zdGFydF9mdW5jdGlvbnMgPSAyMjEsXG4gIF8wX211c3RfYmVfYV92YWx1ZV9iZXR3ZWVuXzFfYW5kXzJfaW5jbHVzaXZlID0gMjIyLFxuICBfMF9tdXN0X2JlX2FfcG93ZXJfb2ZfdHdvID0gMjIzLFxuICBFeHByZXNzaW9uX2lzX3Vuc2FmZSA9IDIyNCxcbiAgRXhwcmVzc2lvbl9pc19uZXZlcl9udWxsID0gMjI1LFxuICBVbnRlcm1pbmF0ZWRfc3RyaW5nX2xpdGVyYWwgPSAxMDAyLFxuICBJZGVudGlmaWVyX2V4cGVjdGVkID0gMTAwMyxcbiAgXzBfZXhwZWN0ZWQgPSAxMDA1LFxuICBBX2ZpbGVfY2Fubm90X2hhdmVfYV9yZWZlcmVuY2VfdG9faXRzZWxmID0gMTAwNixcbiAgVHJhaWxpbmdfY29tbWFfbm90X2FsbG93ZWQgPSAxMDA5LFxuICBVbmV4cGVjdGVkX3Rva2VuID0gMTAxMixcbiAgQV9yZXN0X3BhcmFtZXRlcl9tdXN0X2JlX2xhc3RfaW5fYV9wYXJhbWV0ZXJfbGlzdCA9IDEwMTQsXG4gIFBhcmFtZXRlcl9jYW5ub3RfaGF2ZV9xdWVzdGlvbl9tYXJrX2FuZF9pbml0aWFsaXplciA9IDEwMTUsXG4gIEFfcmVxdWlyZWRfcGFyYW1ldGVyX2Nhbm5vdF9mb2xsb3dfYW5fb3B0aW9uYWxfcGFyYW1ldGVyID0gMTAxNixcbiAgU3RhdGVtZW50c19hcmVfbm90X2FsbG93ZWRfaW5fYW1iaWVudF9jb250ZXh0cyA9IDEwMzYsXG4gIEluaXRpYWxpemVyc19hcmVfbm90X2FsbG93ZWRfaW5fYW1iaWVudF9jb250ZXh0cyA9IDEwMzksXG4gIF8wX21vZGlmaWVyX2Nhbm5vdF9iZV91c2VkX2hlcmUgPSAxMDQyLFxuICBBX3Jlc3RfcGFyYW1ldGVyX2Nhbm5vdF9iZV9vcHRpb25hbCA9IDEwNDcsXG4gIEFfcmVzdF9wYXJhbWV0ZXJfY2Fubm90X2hhdmVfYW5faW5pdGlhbGl6ZXIgPSAxMDQ4LFxuICBBX3NldF9hY2Nlc3Nvcl9tdXN0X2hhdmVfZXhhY3RseV9vbmVfcGFyYW1ldGVyID0gMTA0OSxcbiAgQV9zZXRfYWNjZXNzb3JfcGFyYW1ldGVyX2Nhbm5vdF9oYXZlX2FuX2luaXRpYWxpemVyID0gMTA1MixcbiAgQV9nZXRfYWNjZXNzb3JfY2Fubm90X2hhdmVfcGFyYW1ldGVycyA9IDEwNTQsXG4gIEVudW1fbWVtYmVyX211c3RfaGF2ZV9pbml0aWFsaXplciA9IDEwNjEsXG4gIFR5cGVfcGFyYW1ldGVyc19jYW5ub3RfYXBwZWFyX29uX2FfY29uc3RydWN0b3JfZGVjbGFyYXRpb24gPSAxMDkyLFxuICBUeXBlX2Fubm90YXRpb25fY2Fubm90X2FwcGVhcl9vbl9hX2NvbnN0cnVjdG9yX2RlY2xhcmF0aW9uID0gMTA5MyxcbiAgQW5fYWNjZXNzb3JfY2Fubm90X2hhdmVfdHlwZV9wYXJhbWV0ZXJzID0gMTA5NCxcbiAgQV9zZXRfYWNjZXNzb3JfY2Fubm90X2hhdmVfYV9yZXR1cm5fdHlwZV9hbm5vdGF0aW9uID0gMTA5NSxcbiAgVHlwZV9wYXJhbWV0ZXJfbGlzdF9jYW5ub3RfYmVfZW1wdHkgPSAxMDk4LFxuICBBX2NvbnRpbnVlX3N0YXRlbWVudF9jYW5fb25seV9iZV91c2VkX3dpdGhpbl9hbl9lbmNsb3NpbmdfaXRlcmF0aW9uX3N0YXRlbWVudCA9IDExMDQsXG4gIEFfYnJlYWtfc3RhdGVtZW50X2Nhbl9vbmx5X2JlX3VzZWRfd2l0aGluX2FuX2VuY2xvc2luZ19pdGVyYXRpb25fb3Jfc3dpdGNoX3N0YXRlbWVudCA9IDExMDUsXG4gIEFfcmV0dXJuX3N0YXRlbWVudF9jYW5fb25seV9iZV91c2VkX3dpdGhpbl9hX2Z1bmN0aW9uX2JvZHkgPSAxMTA4LFxuICBFeHByZXNzaW9uX2V4cGVjdGVkID0gMTEwOSxcbiAgVHlwZV9leHBlY3RlZCA9IDExMTAsXG4gIEFfZGVmYXVsdF9jbGF1c2VfY2Fubm90X2FwcGVhcl9tb3JlX3RoYW5fb25jZV9pbl9hX3N3aXRjaF9zdGF0ZW1lbnQgPSAxMTEzLFxuICBEdXBsaWNhdGVfbGFiZWxfMCA9IDExMTQsXG4gIEFuX2V4cG9ydF9hc3NpZ25tZW50X2Nhbm5vdF9oYXZlX21vZGlmaWVycyA9IDExMjAsXG4gIE9jdGFsX2xpdGVyYWxzX2FyZV9ub3RfYWxsb3dlZF9pbl9zdHJpY3RfbW9kZSA9IDExMjEsXG4gIERpZ2l0X2V4cGVjdGVkID0gMTEyNCxcbiAgSGV4YWRlY2ltYWxfZGlnaXRfZXhwZWN0ZWQgPSAxMTI1LFxuICBVbmV4cGVjdGVkX2VuZF9vZl90ZXh0ID0gMTEyNixcbiAgSW52YWxpZF9jaGFyYWN0ZXIgPSAxMTI3LFxuICBfY2FzZV9vcl9kZWZhdWx0X2V4cGVjdGVkID0gMTEzMCxcbiAgX3N1cGVyX211c3RfYmVfZm9sbG93ZWRfYnlfYW5fYXJndW1lbnRfbGlzdF9vcl9tZW1iZXJfYWNjZXNzID0gMTAzNCxcbiAgQV9kZWNsYXJlX21vZGlmaWVyX2Nhbm5vdF9iZV91c2VkX2luX2FuX2FscmVhZHlfYW1iaWVudF9jb250ZXh0ID0gMTAzOCxcbiAgVHlwZV9hcmd1bWVudF9leHBlY3RlZCA9IDExNDAsXG4gIFN0cmluZ19saXRlcmFsX2V4cGVjdGVkID0gMTE0MSxcbiAgTGluZV9icmVha19ub3RfcGVybWl0dGVkX2hlcmUgPSAxMTQyLFxuICBEZWNsYXJhdGlvbl9leHBlY3RlZCA9IDExNDYsXG4gIF9jb25zdF9kZWNsYXJhdGlvbnNfbXVzdF9iZV9pbml0aWFsaXplZCA9IDExNTUsXG4gIFVudGVybWluYXRlZF9yZWd1bGFyX2V4cHJlc3Npb25fbGl0ZXJhbCA9IDExNjEsXG4gIEludGVyZmFjZV9kZWNsYXJhdGlvbl9jYW5ub3RfaGF2ZV9pbXBsZW1lbnRzX2NsYXVzZSA9IDExNzYsXG4gIEJpbmFyeV9kaWdpdF9leHBlY3RlZCA9IDExNzcsXG4gIE9jdGFsX2RpZ2l0X2V4cGVjdGVkID0gMTE3OCxcbiAgQW5faW1wbGVtZW50YXRpb25fY2Fubm90X2JlX2RlY2xhcmVkX2luX2FtYmllbnRfY29udGV4dHMgPSAxMTgzLFxuICBBbl9leHRlbmRlZF9Vbmljb2RlX2VzY2FwZV92YWx1ZV9tdXN0X2JlX2JldHdlZW5fMHgwX2FuZF8weDEwRkZGRl9pbmNsdXNpdmUgPSAxMTk4LFxuICBVbnRlcm1pbmF0ZWRfVW5pY29kZV9lc2NhcGVfc2VxdWVuY2UgPSAxMTk5LFxuICBEZWNvcmF0b3JzX2FyZV9ub3RfdmFsaWRfaGVyZSA9IDEyMDYsXG4gIF9hYnN0cmFjdF9tb2RpZmllcl9jYW5fb25seV9hcHBlYXJfb25fYV9jbGFzc19tZXRob2Rfb3JfcHJvcGVydHlfZGVjbGFyYXRpb24gPSAxMjQyLFxuICBNZXRob2RfMF9jYW5ub3RfaGF2ZV9hbl9pbXBsZW1lbnRhdGlvbl9iZWNhdXNlX2l0X2lzX21hcmtlZF9hYnN0cmFjdCA9IDEyNDUsXG4gIEFfZGVmaW5pdGVfYXNzaWdubWVudF9hc3NlcnRpb25faXNfbm90X3Blcm1pdHRlZF9pbl90aGlzX2NvbnRleHQgPSAxMjU1LFxuICBBX2NsYXNzX21heV9vbmx5X2V4dGVuZF9hbm90aGVyX2NsYXNzID0gMTMxMSxcbiAgQV9wYXJhbWV0ZXJfcHJvcGVydHlfY2Fubm90X2JlX2RlY2xhcmVkX3VzaW5nX2FfcmVzdF9wYXJhbWV0ZXIgPSAxMzE3LFxuICBEdXBsaWNhdGVfaWRlbnRpZmllcl8wID0gMjMwMCxcbiAgQ2Fubm90X2ZpbmRfbmFtZV8wID0gMjMwNCxcbiAgTW9kdWxlXzBfaGFzX25vX2V4cG9ydGVkX21lbWJlcl8xID0gMjMwNSxcbiAgR2VuZXJpY190eXBlXzBfcmVxdWlyZXNfMV90eXBlX2FyZ3VtZW50X3MgPSAyMzE0LFxuICBUeXBlXzBfaXNfbm90X2dlbmVyaWMgPSAyMzE1LFxuICBUeXBlXzBfaXNfbm90X2Fzc2lnbmFibGVfdG9fdHlwZV8xID0gMjMyMixcbiAgSW5kZXhfc2lnbmF0dXJlX2lzX21pc3NpbmdfaW5fdHlwZV8wID0gMjMyOSxcbiAgX3RoaXNfY2Fubm90X2JlX3JlZmVyZW5jZWRfaW5fY3VycmVudF9sb2NhdGlvbiA9IDIzMzIsXG4gIF9zdXBlcl9jYW5fb25seV9iZV9yZWZlcmVuY2VkX2luX2FfZGVyaXZlZF9jbGFzcyA9IDIzMzUsXG4gIFN1cGVyX2NhbGxzX2FyZV9ub3RfcGVybWl0dGVkX291dHNpZGVfY29uc3RydWN0b3JzX29yX2luX25lc3RlZF9mdW5jdGlvbnNfaW5zaWRlX2NvbnN0cnVjdG9ycyA9IDIzMzcsXG4gIFByb3BlcnR5XzBfZG9lc19ub3RfZXhpc3Rfb25fdHlwZV8xID0gMjMzOSxcbiAgQ2Fubm90X2ludm9rZV9hbl9leHByZXNzaW9uX3dob3NlX3R5cGVfbGFja3NfYV9jYWxsX3NpZ25hdHVyZV9UeXBlXzBfaGFzX25vX2NvbXBhdGlibGVfY2FsbF9zaWduYXR1cmVzID0gMjM0OSxcbiAgQ2Fubm90X3VzZV9uZXdfd2l0aF9hbl9leHByZXNzaW9uX3dob3NlX3R5cGVfbGFja3NfYV9jb25zdHJ1Y3Rfc2lnbmF0dXJlID0gMjM1MSxcbiAgQV9mdW5jdGlvbl93aG9zZV9kZWNsYXJlZF90eXBlX2lzX25vdF92b2lkX211c3RfcmV0dXJuX2FfdmFsdWUgPSAyMzU1LFxuICBUaGVfb3BlcmFuZF9vZl9hbl9pbmNyZW1lbnRfb3JfZGVjcmVtZW50X29wZXJhdG9yX211c3RfYmVfYV92YXJpYWJsZV9vcl9hX3Byb3BlcnR5X2FjY2VzcyA9IDIzNTcsXG4gIFRoZV9sZWZ0X2hhbmRfc2lkZV9vZl9hbl9hc3NpZ25tZW50X2V4cHJlc3Npb25fbXVzdF9iZV9hX3ZhcmlhYmxlX29yX2FfcHJvcGVydHlfYWNjZXNzID0gMjM2NCxcbiAgT3BlcmF0b3JfMF9jYW5ub3RfYmVfYXBwbGllZF90b190eXBlc18xX2FuZF8yID0gMjM2NSxcbiAgQV9zdXBlcl9jYWxsX211c3RfYmVfdGhlX2ZpcnN0X3N0YXRlbWVudF9pbl90aGVfY29uc3RydWN0b3IgPSAyMzc2LFxuICBDb25zdHJ1Y3RvcnNfZm9yX2Rlcml2ZWRfY2xhc3Nlc19tdXN0X2NvbnRhaW5fYV9zdXBlcl9jYWxsID0gMjM3NyxcbiAgX2dldF9hbmRfc2V0X2FjY2Vzc29yX211c3RfaGF2ZV90aGVfc2FtZV90eXBlID0gMjM4MCxcbiAgQ29uc3RydWN0b3JfaW1wbGVtZW50YXRpb25faXNfbWlzc2luZyA9IDIzOTAsXG4gIEZ1bmN0aW9uX2ltcGxlbWVudGF0aW9uX2lzX21pc3Npbmdfb3Jfbm90X2ltbWVkaWF0ZWx5X2ZvbGxvd2luZ190aGVfZGVjbGFyYXRpb24gPSAyMzkxLFxuICBNdWx0aXBsZV9jb25zdHJ1Y3Rvcl9pbXBsZW1lbnRhdGlvbnNfYXJlX25vdF9hbGxvd2VkID0gMjM5MixcbiAgRHVwbGljYXRlX2Z1bmN0aW9uX2ltcGxlbWVudGF0aW9uID0gMjM5MyxcbiAgSW5kaXZpZHVhbF9kZWNsYXJhdGlvbnNfaW5fbWVyZ2VkX2RlY2xhcmF0aW9uXzBfbXVzdF9iZV9hbGxfZXhwb3J0ZWRfb3JfYWxsX2xvY2FsID0gMjM5NSxcbiAgQV9uYW1lc3BhY2VfZGVjbGFyYXRpb25fY2Fubm90X2JlX2xvY2F0ZWRfcHJpb3JfdG9fYV9jbGFzc19vcl9mdW5jdGlvbl93aXRoX3doaWNoX2l0X2lzX21lcmdlZCA9IDI0MzQsXG4gIFR5cGVfMF9oYXNfbm9fcHJvcGVydHlfMSA9IDI0NjAsXG4gIFRoZV8wX29wZXJhdG9yX2Nhbm5vdF9iZV9hcHBsaWVkX3RvX3R5cGVfMSA9IDI0NjksXG4gIEluX2NvbnN0X2VudW1fZGVjbGFyYXRpb25zX21lbWJlcl9pbml0aWFsaXplcl9tdXN0X2JlX2NvbnN0YW50X2V4cHJlc3Npb24gPSAyNDc0LFxuICBFeHBvcnRfZGVjbGFyYXRpb25fY29uZmxpY3RzX3dpdGhfZXhwb3J0ZWRfZGVjbGFyYXRpb25fb2ZfMCA9IDI0ODQsXG4gIE9iamVjdF9pc19wb3NzaWJseV9udWxsID0gMjUzMSxcbiAgQ2Fubm90X2Fzc2lnbl90b18wX2JlY2F1c2VfaXRfaXNfYV9jb25zdGFudF9vcl9hX3JlYWRfb25seV9wcm9wZXJ0eSA9IDI1NDAsXG4gIFRoZV90YXJnZXRfb2ZfYW5fYXNzaWdubWVudF9tdXN0X2JlX2FfdmFyaWFibGVfb3JfYV9wcm9wZXJ0eV9hY2Nlc3MgPSAyNTQxLFxuICBJbmRleF9zaWduYXR1cmVfaW5fdHlwZV8wX29ubHlfcGVybWl0c19yZWFkaW5nID0gMjU0MixcbiAgRXhwZWN0ZWRfMF9hcmd1bWVudHNfYnV0X2dvdF8xID0gMjU1NCxcbiAgRXhwZWN0ZWRfYXRfbGVhc3RfMF9hcmd1bWVudHNfYnV0X2dvdF8xID0gMjU1NSxcbiAgRXhwZWN0ZWRfMF90eXBlX2FyZ3VtZW50c19idXRfZ290XzEgPSAyNTU4LFxuICBBX21lbWJlcl9pbml0aWFsaXplcl9pbl9hX2VudW1fZGVjbGFyYXRpb25fY2Fubm90X3JlZmVyZW5jZV9tZW1iZXJzX2RlY2xhcmVkX2FmdGVyX2l0X2luY2x1ZGluZ19tZW1iZXJzX2RlZmluZWRfaW5fb3RoZXJfZW51bXMgPSAyNjUxLFxuICBDb25zdHJ1Y3Rvcl9vZl9jbGFzc18wX2lzX3ByaXZhdGVfYW5kX29ubHlfYWNjZXNzaWJsZV93aXRoaW5fdGhlX2NsYXNzX2RlY2xhcmF0aW9uID0gMjY3MyxcbiAgQ29uc3RydWN0b3Jfb2ZfY2xhc3NfMF9pc19wcm90ZWN0ZWRfYW5kX29ubHlfYWNjZXNzaWJsZV93aXRoaW5fdGhlX2NsYXNzX2RlY2xhcmF0aW9uID0gMjY3NCxcbiAgTmFtZXNwYWNlXzBfaGFzX25vX2V4cG9ydGVkX21lbWJlcl8xID0gMjY5NCxcbiAgUmVxdWlyZWRfdHlwZV9wYXJhbWV0ZXJzX21heV9ub3RfZm9sbG93X29wdGlvbmFsX3R5cGVfcGFyYW1ldGVycyA9IDI3MDYsXG4gIER1cGxpY2F0ZV9wcm9wZXJ0eV8wID0gMjcxOCxcbiAgVHlwZV8wX2hhc19ub19jYWxsX3NpZ25hdHVyZXMgPSAyNzU3LFxuICBGaWxlXzBfbm90X2ZvdW5kID0gNjA1NCxcbiAgTnVtZXJpY19zZXBhcmF0b3JzX2FyZV9ub3RfYWxsb3dlZF9oZXJlID0gNjE4OCxcbiAgTXVsdGlwbGVfY29uc2VjdXRpdmVfbnVtZXJpY19zZXBhcmF0b3JzX2FyZV9ub3RfcGVybWl0dGVkID0gNjE4OSxcbiAgX3N1cGVyX211c3RfYmVfY2FsbGVkX2JlZm9yZV9hY2Nlc3NpbmdfdGhpc19pbl90aGVfY29uc3RydWN0b3Jfb2ZfYV9kZXJpdmVkX2NsYXNzID0gMTcwMDksXG4gIF9zdXBlcl9tdXN0X2JlX2NhbGxlZF9iZWZvcmVfYWNjZXNzaW5nX2FfcHJvcGVydHlfb2Zfc3VwZXJfaW5fdGhlX2NvbnN0cnVjdG9yX29mX2FfZGVyaXZlZF9jbGFzcyA9IDE3MDExXG59XG5cbi8qKiBUcmFuc2xhdGVzIGEgZGlhZ25vc3RpYyBjb2RlIHRvIGl0cyByZXNwZWN0aXZlIHN0cmluZy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWFnbm9zdGljQ29kZVRvU3RyaW5nKGNvZGU6IERpYWdub3N0aWNDb2RlKTogc3RyaW5nIHtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSAxMDA6IHJldHVybiBcIk9wZXJhdGlvbiBub3Qgc3VwcG9ydGVkLlwiO1xuICAgIGNhc2UgMTAxOiByZXR1cm4gXCJPcGVyYXRpb24gaXMgdW5zYWZlLlwiO1xuICAgIGNhc2UgMTAyOiByZXR1cm4gXCJVc2VyLWRlZmluZWQ6IHswfVwiO1xuICAgIGNhc2UgMjAwOiByZXR1cm4gXCJDb252ZXJzaW9uIGZyb20gdHlwZSAnezB9JyB0byAnezF9JyByZXF1aXJlcyBhbiBleHBsaWNpdCBjYXN0LlwiO1xuICAgIGNhc2UgMjAxOiByZXR1cm4gXCJDb252ZXJzaW9uIGZyb20gdHlwZSAnezB9JyB0byAnezF9JyB3aWxsIHJlcXVpcmUgYW4gZXhwbGljaXQgY2FzdCB3aGVuIHN3aXRjaGluZyBiZXR3ZWVuIDMyLzY0LWJpdC5cIjtcbiAgICBjYXNlIDIwMjogcmV0dXJuIFwiVHlwZSAnezB9JyBjYW5ub3QgYmUgY2hhbmdlZCB0byB0eXBlICd7MX0nLlwiO1xuICAgIGNhc2UgMjAzOiByZXR1cm4gXCJUeXBlICd7MH0nIGNhbm5vdCBiZSByZWludGVycHJldGVkIGFzIHR5cGUgJ3sxfScuXCI7XG4gICAgY2FzZSAyMDQ6IHJldHVybiBcIkJhc2ljIHR5cGUgJ3swfScgY2Fubm90IGJlIG51bGxhYmxlLlwiO1xuICAgIGNhc2UgMjA1OiByZXR1cm4gXCJDYW5ub3QgZXhwb3J0IGEgbXV0YWJsZSBnbG9iYWwuXCI7XG4gICAgY2FzZSAyMDY6IHJldHVybiBcIk11dGFibGUgdmFsdWUgY2Fubm90IGJlIGlubGluZWQuXCI7XG4gICAgY2FzZSAyMDc6IHJldHVybiBcIlVubWFuYWdlZCBjbGFzc2VzIGNhbm5vdCBleHRlbmQgbWFuYWdlZCBjbGFzc2VzIGFuZCB2aWNlLXZlcnNhLlwiO1xuICAgIGNhc2UgMjA4OiByZXR1cm4gXCJVbm1hbmFnZWQgY2xhc3NlcyBjYW5ub3QgaW1wbGVtZW50IGludGVyZmFjZXMuXCI7XG4gICAgY2FzZSAyMDk6IHJldHVybiBcIkludmFsaWQgcmVndWxhciBleHByZXNzaW9uIGZsYWdzLlwiO1xuICAgIGNhc2UgMjEwOiByZXR1cm4gXCJJbXBsZW1lbnRhdGlvbiAnezB9JyBtdXN0IG1hdGNoIHRoZSBzaWduYXR1cmUgJ3sxfScuXCI7XG4gICAgY2FzZSAyMTE6IHJldHVybiBcIkNsYXNzICd7MH0nIGlzIHNlYWxlZCBhbmQgY2Fubm90IGJlIGV4dGVuZGVkLlwiO1xuICAgIGNhc2UgMjEyOiByZXR1cm4gXCJEZWNvcmF0b3IgJ3swfScgaXMgbm90IHZhbGlkIGhlcmUuXCI7XG4gICAgY2FzZSAyMTM6IHJldHVybiBcIkR1cGxpY2F0ZSBkZWNvcmF0b3IuXCI7XG4gICAgY2FzZSAyMTQ6IHJldHVybiBcIkFuIGFsbG9jYXRvciBtdXN0IGJlIHByZXNlbnQgdG8gdXNlICd7MH0nLlwiO1xuICAgIGNhc2UgMjE1OiByZXR1cm4gXCJPcHRpb25hbCBwYXJhbWV0ZXIgbXVzdCBoYXZlIGFuIGluaXRpYWxpemVyLlwiO1xuICAgIGNhc2UgMjE2OiByZXR1cm4gXCJDb25zdHJ1Y3RvciBvZiBjbGFzcyAnezB9JyBtdXN0IG5vdCByZXF1aXJlIGFueSBhcmd1bWVudHMuXCI7XG4gICAgY2FzZSAyMTc6IHJldHVybiBcIkZ1bmN0aW9uICd7MH0nIGNhbm5vdCBiZSBpbmxpbmVkIGludG8gaXRzZWxmLlwiO1xuICAgIGNhc2UgMjE4OiByZXR1cm4gXCJDYW5ub3QgYWNjZXNzIG1ldGhvZCAnezB9JyB3aXRob3V0IGNhbGxpbmcgaXQgYXMgaXQgcmVxdWlyZXMgJ3RoaXMnIHRvIGJlIHNldC5cIjtcbiAgICBjYXNlIDIxOTogcmV0dXJuIFwiT3B0aW9uYWwgcHJvcGVydGllcyBhcmUgbm90IHN1cHBvcnRlZC5cIjtcbiAgICBjYXNlIDIyMDogcmV0dXJuIFwiRXhwcmVzc2lvbiBtdXN0IGJlIGEgY29tcGlsZS10aW1lIGNvbnN0YW50LlwiO1xuICAgIGNhc2UgMjIxOiByZXR1cm4gXCJNb2R1bGUgY2Fubm90IGhhdmUgbXVsdGlwbGUgc3RhcnQgZnVuY3Rpb25zLlwiO1xuICAgIGNhc2UgMjIyOiByZXR1cm4gXCInezB9JyBtdXN0IGJlIGEgdmFsdWUgYmV0d2VlbiAnezF9JyBhbmQgJ3syfScgaW5jbHVzaXZlLlwiO1xuICAgIGNhc2UgMjIzOiByZXR1cm4gXCInezB9JyBtdXN0IGJlIGEgcG93ZXIgb2YgdHdvLlwiO1xuICAgIGNhc2UgMjI0OiByZXR1cm4gXCJFeHByZXNzaW9uIGlzIHVuc2FmZS5cIjtcbiAgICBjYXNlIDIyNTogcmV0dXJuIFwiRXhwcmVzc2lvbiBpcyBuZXZlciAnbnVsbCcuXCI7XG4gICAgY2FzZSAxMDAyOiByZXR1cm4gXCJVbnRlcm1pbmF0ZWQgc3RyaW5nIGxpdGVyYWwuXCI7XG4gICAgY2FzZSAxMDAzOiByZXR1cm4gXCJJZGVudGlmaWVyIGV4cGVjdGVkLlwiO1xuICAgIGNhc2UgMTAwNTogcmV0dXJuIFwiJ3swfScgZXhwZWN0ZWQuXCI7XG4gICAgY2FzZSAxMDA2OiByZXR1cm4gXCJBIGZpbGUgY2Fubm90IGhhdmUgYSByZWZlcmVuY2UgdG8gaXRzZWxmLlwiO1xuICAgIGNhc2UgMTAwOTogcmV0dXJuIFwiVHJhaWxpbmcgY29tbWEgbm90IGFsbG93ZWQuXCI7XG4gICAgY2FzZSAxMDEyOiByZXR1cm4gXCJVbmV4cGVjdGVkIHRva2VuLlwiO1xuICAgIGNhc2UgMTAxNDogcmV0dXJuIFwiQSByZXN0IHBhcmFtZXRlciBtdXN0IGJlIGxhc3QgaW4gYSBwYXJhbWV0ZXIgbGlzdC5cIjtcbiAgICBjYXNlIDEwMTU6IHJldHVybiBcIlBhcmFtZXRlciBjYW5ub3QgaGF2ZSBxdWVzdGlvbiBtYXJrIGFuZCBpbml0aWFsaXplci5cIjtcbiAgICBjYXNlIDEwMTY6IHJldHVybiBcIkEgcmVxdWlyZWQgcGFyYW1ldGVyIGNhbm5vdCBmb2xsb3cgYW4gb3B0aW9uYWwgcGFyYW1ldGVyLlwiO1xuICAgIGNhc2UgMTAzNjogcmV0dXJuIFwiU3RhdGVtZW50cyBhcmUgbm90IGFsbG93ZWQgaW4gYW1iaWVudCBjb250ZXh0cy5cIjtcbiAgICBjYXNlIDEwMzk6IHJldHVybiBcIkluaXRpYWxpemVycyBhcmUgbm90IGFsbG93ZWQgaW4gYW1iaWVudCBjb250ZXh0cy5cIjtcbiAgICBjYXNlIDEwNDI6IHJldHVybiBcIid7MH0nIG1vZGlmaWVyIGNhbm5vdCBiZSB1c2VkIGhlcmUuXCI7XG4gICAgY2FzZSAxMDQ3OiByZXR1cm4gXCJBIHJlc3QgcGFyYW1ldGVyIGNhbm5vdCBiZSBvcHRpb25hbC5cIjtcbiAgICBjYXNlIDEwNDg6IHJldHVybiBcIkEgcmVzdCBwYXJhbWV0ZXIgY2Fubm90IGhhdmUgYW4gaW5pdGlhbGl6ZXIuXCI7XG4gICAgY2FzZSAxMDQ5OiByZXR1cm4gXCJBICdzZXQnIGFjY2Vzc29yIG11c3QgaGF2ZSBleGFjdGx5IG9uZSBwYXJhbWV0ZXIuXCI7XG4gICAgY2FzZSAxMDUyOiByZXR1cm4gXCJBICdzZXQnIGFjY2Vzc29yIHBhcmFtZXRlciBjYW5ub3QgaGF2ZSBhbiBpbml0aWFsaXplci5cIjtcbiAgICBjYXNlIDEwNTQ6IHJldHVybiBcIkEgJ2dldCcgYWNjZXNzb3IgY2Fubm90IGhhdmUgcGFyYW1ldGVycy5cIjtcbiAgICBjYXNlIDEwNjE6IHJldHVybiBcIkVudW0gbWVtYmVyIG11c3QgaGF2ZSBpbml0aWFsaXplci5cIjtcbiAgICBjYXNlIDEwOTI6IHJldHVybiBcIlR5cGUgcGFyYW1ldGVycyBjYW5ub3QgYXBwZWFyIG9uIGEgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uXCI7XG4gICAgY2FzZSAxMDkzOiByZXR1cm4gXCJUeXBlIGFubm90YXRpb24gY2Fubm90IGFwcGVhciBvbiBhIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLlwiO1xuICAgIGNhc2UgMTA5NDogcmV0dXJuIFwiQW4gYWNjZXNzb3IgY2Fubm90IGhhdmUgdHlwZSBwYXJhbWV0ZXJzLlwiO1xuICAgIGNhc2UgMTA5NTogcmV0dXJuIFwiQSAnc2V0JyBhY2Nlc3NvciBjYW5ub3QgaGF2ZSBhIHJldHVybiB0eXBlIGFubm90YXRpb24uXCI7XG4gICAgY2FzZSAxMDk4OiByZXR1cm4gXCJUeXBlIHBhcmFtZXRlciBsaXN0IGNhbm5vdCBiZSBlbXB0eS5cIjtcbiAgICBjYXNlIDExMDQ6IHJldHVybiBcIkEgJ2NvbnRpbnVlJyBzdGF0ZW1lbnQgY2FuIG9ubHkgYmUgdXNlZCB3aXRoaW4gYW4gZW5jbG9zaW5nIGl0ZXJhdGlvbiBzdGF0ZW1lbnQuXCI7XG4gICAgY2FzZSAxMTA1OiByZXR1cm4gXCJBICdicmVhaycgc3RhdGVtZW50IGNhbiBvbmx5IGJlIHVzZWQgd2l0aGluIGFuIGVuY2xvc2luZyBpdGVyYXRpb24gb3Igc3dpdGNoIHN0YXRlbWVudC5cIjtcbiAgICBjYXNlIDExMDg6IHJldHVybiBcIkEgJ3JldHVybicgc3RhdGVtZW50IGNhbiBvbmx5IGJlIHVzZWQgd2l0aGluIGEgZnVuY3Rpb24gYm9keS5cIjtcbiAgICBjYXNlIDExMDk6IHJldHVybiBcIkV4cHJlc3Npb24gZXhwZWN0ZWQuXCI7XG4gICAgY2FzZSAxMTEwOiByZXR1cm4gXCJUeXBlIGV4cGVjdGVkLlwiO1xuICAgIGNhc2UgMTExMzogcmV0dXJuIFwiQSAnZGVmYXVsdCcgY2xhdXNlIGNhbm5vdCBhcHBlYXIgbW9yZSB0aGFuIG9uY2UgaW4gYSAnc3dpdGNoJyBzdGF0ZW1lbnQuXCI7XG4gICAgY2FzZSAxMTE0OiByZXR1cm4gXCJEdXBsaWNhdGUgbGFiZWwgJ3swfScuXCI7XG4gICAgY2FzZSAxMTIwOiByZXR1cm4gXCJBbiBleHBvcnQgYXNzaWdubWVudCBjYW5ub3QgaGF2ZSBtb2RpZmllcnMuXCI7XG4gICAgY2FzZSAxMTIxOiByZXR1cm4gXCJPY3RhbCBsaXRlcmFscyBhcmUgbm90IGFsbG93ZWQgaW4gc3RyaWN0IG1vZGUuXCI7XG4gICAgY2FzZSAxMTI0OiByZXR1cm4gXCJEaWdpdCBleHBlY3RlZC5cIjtcbiAgICBjYXNlIDExMjU6IHJldHVybiBcIkhleGFkZWNpbWFsIGRpZ2l0IGV4cGVjdGVkLlwiO1xuICAgIGNhc2UgMTEyNjogcmV0dXJuIFwiVW5leHBlY3RlZCBlbmQgb2YgdGV4dC5cIjtcbiAgICBjYXNlIDExMjc6IHJldHVybiBcIkludmFsaWQgY2hhcmFjdGVyLlwiO1xuICAgIGNhc2UgMTEzMDogcmV0dXJuIFwiJ2Nhc2UnIG9yICdkZWZhdWx0JyBleHBlY3RlZC5cIjtcbiAgICBjYXNlIDEwMzQ6IHJldHVybiBcIidzdXBlcicgbXVzdCBiZSBmb2xsb3dlZCBieSBhbiBhcmd1bWVudCBsaXN0IG9yIG1lbWJlciBhY2Nlc3MuXCI7XG4gICAgY2FzZSAxMDM4OiByZXR1cm4gXCJBICdkZWNsYXJlJyBtb2RpZmllciBjYW5ub3QgYmUgdXNlZCBpbiBhbiBhbHJlYWR5IGFtYmllbnQgY29udGV4dC5cIjtcbiAgICBjYXNlIDExNDA6IHJldHVybiBcIlR5cGUgYXJndW1lbnQgZXhwZWN0ZWQuXCI7XG4gICAgY2FzZSAxMTQxOiByZXR1cm4gXCJTdHJpbmcgbGl0ZXJhbCBleHBlY3RlZC5cIjtcbiAgICBjYXNlIDExNDI6IHJldHVybiBcIkxpbmUgYnJlYWsgbm90IHBlcm1pdHRlZCBoZXJlLlwiO1xuICAgIGNhc2UgMTE0NjogcmV0dXJuIFwiRGVjbGFyYXRpb24gZXhwZWN0ZWQuXCI7XG4gICAgY2FzZSAxMTU1OiByZXR1cm4gXCInY29uc3QnIGRlY2xhcmF0aW9ucyBtdXN0IGJlIGluaXRpYWxpemVkLlwiO1xuICAgIGNhc2UgMTE2MTogcmV0dXJuIFwiVW50ZXJtaW5hdGVkIHJlZ3VsYXIgZXhwcmVzc2lvbiBsaXRlcmFsLlwiO1xuICAgIGNhc2UgMTE3NjogcmV0dXJuIFwiSW50ZXJmYWNlIGRlY2xhcmF0aW9uIGNhbm5vdCBoYXZlICdpbXBsZW1lbnRzJyBjbGF1c2UuXCI7XG4gICAgY2FzZSAxMTc3OiByZXR1cm4gXCJCaW5hcnkgZGlnaXQgZXhwZWN0ZWQuXCI7XG4gICAgY2FzZSAxMTc4OiByZXR1cm4gXCJPY3RhbCBkaWdpdCBleHBlY3RlZC5cIjtcbiAgICBjYXNlIDExODM6IHJldHVybiBcIkFuIGltcGxlbWVudGF0aW9uIGNhbm5vdCBiZSBkZWNsYXJlZCBpbiBhbWJpZW50IGNvbnRleHRzLlwiO1xuICAgIGNhc2UgMTE5ODogcmV0dXJuIFwiQW4gZXh0ZW5kZWQgVW5pY29kZSBlc2NhcGUgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDB4MCBhbmQgMHgxMEZGRkYgaW5jbHVzaXZlLlwiO1xuICAgIGNhc2UgMTE5OTogcmV0dXJuIFwiVW50ZXJtaW5hdGVkIFVuaWNvZGUgZXNjYXBlIHNlcXVlbmNlLlwiO1xuICAgIGNhc2UgMTIwNjogcmV0dXJuIFwiRGVjb3JhdG9ycyBhcmUgbm90IHZhbGlkIGhlcmUuXCI7XG4gICAgY2FzZSAxMjQyOiByZXR1cm4gXCInYWJzdHJhY3QnIG1vZGlmaWVyIGNhbiBvbmx5IGFwcGVhciBvbiBhIGNsYXNzLCBtZXRob2QsIG9yIHByb3BlcnR5IGRlY2xhcmF0aW9uLlwiO1xuICAgIGNhc2UgMTI0NTogcmV0dXJuIFwiTWV0aG9kICd7MH0nIGNhbm5vdCBoYXZlIGFuIGltcGxlbWVudGF0aW9uIGJlY2F1c2UgaXQgaXMgbWFya2VkIGFic3RyYWN0LlwiO1xuICAgIGNhc2UgMTI1NTogcmV0dXJuIFwiQSBkZWZpbml0ZSBhc3NpZ25tZW50IGFzc2VydGlvbiAnIScgaXMgbm90IHBlcm1pdHRlZCBpbiB0aGlzIGNvbnRleHQuXCI7XG4gICAgY2FzZSAxMzExOiByZXR1cm4gXCJBIGNsYXNzIG1heSBvbmx5IGV4dGVuZCBhbm90aGVyIGNsYXNzLlwiO1xuICAgIGNhc2UgMTMxNzogcmV0dXJuIFwiQSBwYXJhbWV0ZXIgcHJvcGVydHkgY2Fubm90IGJlIGRlY2xhcmVkIHVzaW5nIGEgcmVzdCBwYXJhbWV0ZXIuXCI7XG4gICAgY2FzZSAyMzAwOiByZXR1cm4gXCJEdXBsaWNhdGUgaWRlbnRpZmllciAnezB9Jy5cIjtcbiAgICBjYXNlIDIzMDQ6IHJldHVybiBcIkNhbm5vdCBmaW5kIG5hbWUgJ3swfScuXCI7XG4gICAgY2FzZSAyMzA1OiByZXR1cm4gXCJNb2R1bGUgJ3swfScgaGFzIG5vIGV4cG9ydGVkIG1lbWJlciAnezF9Jy5cIjtcbiAgICBjYXNlIDIzMTQ6IHJldHVybiBcIkdlbmVyaWMgdHlwZSAnezB9JyByZXF1aXJlcyB7MX0gdHlwZSBhcmd1bWVudChzKS5cIjtcbiAgICBjYXNlIDIzMTU6IHJldHVybiBcIlR5cGUgJ3swfScgaXMgbm90IGdlbmVyaWMuXCI7XG4gICAgY2FzZSAyMzIyOiByZXR1cm4gXCJUeXBlICd7MH0nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHR5cGUgJ3sxfScuXCI7XG4gICAgY2FzZSAyMzI5OiByZXR1cm4gXCJJbmRleCBzaWduYXR1cmUgaXMgbWlzc2luZyBpbiB0eXBlICd7MH0nLlwiO1xuICAgIGNhc2UgMjMzMjogcmV0dXJuIFwiJ3RoaXMnIGNhbm5vdCBiZSByZWZlcmVuY2VkIGluIGN1cnJlbnQgbG9jYXRpb24uXCI7XG4gICAgY2FzZSAyMzM1OiByZXR1cm4gXCInc3VwZXInIGNhbiBvbmx5IGJlIHJlZmVyZW5jZWQgaW4gYSBkZXJpdmVkIGNsYXNzLlwiO1xuICAgIGNhc2UgMjMzNzogcmV0dXJuIFwiU3VwZXIgY2FsbHMgYXJlIG5vdCBwZXJtaXR0ZWQgb3V0c2lkZSBjb25zdHJ1Y3RvcnMgb3IgaW4gbmVzdGVkIGZ1bmN0aW9ucyBpbnNpZGUgY29uc3RydWN0b3JzLlwiO1xuICAgIGNhc2UgMjMzOTogcmV0dXJuIFwiUHJvcGVydHkgJ3swfScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnezF9Jy5cIjtcbiAgICBjYXNlIDIzNDk6IHJldHVybiBcIkNhbm5vdCBpbnZva2UgYW4gZXhwcmVzc2lvbiB3aG9zZSB0eXBlIGxhY2tzIGEgY2FsbCBzaWduYXR1cmUuIFR5cGUgJ3swfScgaGFzIG5vIGNvbXBhdGlibGUgY2FsbCBzaWduYXR1cmVzLlwiO1xuICAgIGNhc2UgMjM1MTogcmV0dXJuIFwiQ2Fubm90IHVzZSAnbmV3JyB3aXRoIGFuIGV4cHJlc3Npb24gd2hvc2UgdHlwZSBsYWNrcyBhIGNvbnN0cnVjdCBzaWduYXR1cmUuXCI7XG4gICAgY2FzZSAyMzU1OiByZXR1cm4gXCJBIGZ1bmN0aW9uIHdob3NlIGRlY2xhcmVkIHR5cGUgaXMgbm90ICd2b2lkJyBtdXN0IHJldHVybiBhIHZhbHVlLlwiO1xuICAgIGNhc2UgMjM1NzogcmV0dXJuIFwiVGhlIG9wZXJhbmQgb2YgYW4gaW5jcmVtZW50IG9yIGRlY3JlbWVudCBvcGVyYXRvciBtdXN0IGJlIGEgdmFyaWFibGUgb3IgYSBwcm9wZXJ0eSBhY2Nlc3MuXCI7XG4gICAgY2FzZSAyMzY0OiByZXR1cm4gXCJUaGUgbGVmdC1oYW5kIHNpZGUgb2YgYW4gYXNzaWdubWVudCBleHByZXNzaW9uIG11c3QgYmUgYSB2YXJpYWJsZSBvciBhIHByb3BlcnR5IGFjY2Vzcy5cIjtcbiAgICBjYXNlIDIzNjU6IHJldHVybiBcIk9wZXJhdG9yICd7MH0nIGNhbm5vdCBiZSBhcHBsaWVkIHRvIHR5cGVzICd7MX0nIGFuZCAnezJ9Jy5cIjtcbiAgICBjYXNlIDIzNzY6IHJldHVybiBcIkEgJ3N1cGVyJyBjYWxsIG11c3QgYmUgdGhlIGZpcnN0IHN0YXRlbWVudCBpbiB0aGUgY29uc3RydWN0b3IuXCI7XG4gICAgY2FzZSAyMzc3OiByZXR1cm4gXCJDb25zdHJ1Y3RvcnMgZm9yIGRlcml2ZWQgY2xhc3NlcyBtdXN0IGNvbnRhaW4gYSAnc3VwZXInIGNhbGwuXCI7XG4gICAgY2FzZSAyMzgwOiByZXR1cm4gXCInZ2V0JyBhbmQgJ3NldCcgYWNjZXNzb3IgbXVzdCBoYXZlIHRoZSBzYW1lIHR5cGUuXCI7XG4gICAgY2FzZSAyMzkwOiByZXR1cm4gXCJDb25zdHJ1Y3RvciBpbXBsZW1lbnRhdGlvbiBpcyBtaXNzaW5nLlwiO1xuICAgIGNhc2UgMjM5MTogcmV0dXJuIFwiRnVuY3Rpb24gaW1wbGVtZW50YXRpb24gaXMgbWlzc2luZyBvciBub3QgaW1tZWRpYXRlbHkgZm9sbG93aW5nIHRoZSBkZWNsYXJhdGlvbi5cIjtcbiAgICBjYXNlIDIzOTI6IHJldHVybiBcIk11bHRpcGxlIGNvbnN0cnVjdG9yIGltcGxlbWVudGF0aW9ucyBhcmUgbm90IGFsbG93ZWQuXCI7XG4gICAgY2FzZSAyMzkzOiByZXR1cm4gXCJEdXBsaWNhdGUgZnVuY3Rpb24gaW1wbGVtZW50YXRpb24uXCI7XG4gICAgY2FzZSAyMzk1OiByZXR1cm4gXCJJbmRpdmlkdWFsIGRlY2xhcmF0aW9ucyBpbiBtZXJnZWQgZGVjbGFyYXRpb24gJ3swfScgbXVzdCBiZSBhbGwgZXhwb3J0ZWQgb3IgYWxsIGxvY2FsLlwiO1xuICAgIGNhc2UgMjQzNDogcmV0dXJuIFwiQSBuYW1lc3BhY2UgZGVjbGFyYXRpb24gY2Fubm90IGJlIGxvY2F0ZWQgcHJpb3IgdG8gYSBjbGFzcyBvciBmdW5jdGlvbiB3aXRoIHdoaWNoIGl0IGlzIG1lcmdlZC5cIjtcbiAgICBjYXNlIDI0NjA6IHJldHVybiBcIlR5cGUgJ3swfScgaGFzIG5vIHByb3BlcnR5ICd7MX0nLlwiO1xuICAgIGNhc2UgMjQ2OTogcmV0dXJuIFwiVGhlICd7MH0nIG9wZXJhdG9yIGNhbm5vdCBiZSBhcHBsaWVkIHRvIHR5cGUgJ3sxfScuXCI7XG4gICAgY2FzZSAyNDc0OiByZXR1cm4gXCJJbiAnY29uc3QnIGVudW0gZGVjbGFyYXRpb25zIG1lbWJlciBpbml0aWFsaXplciBtdXN0IGJlIGNvbnN0YW50IGV4cHJlc3Npb24uXCI7XG4gICAgY2FzZSAyNDg0OiByZXR1cm4gXCJFeHBvcnQgZGVjbGFyYXRpb24gY29uZmxpY3RzIHdpdGggZXhwb3J0ZWQgZGVjbGFyYXRpb24gb2YgJ3swfScuXCI7XG4gICAgY2FzZSAyNTMxOiByZXR1cm4gXCJPYmplY3QgaXMgcG9zc2libHkgJ251bGwnLlwiO1xuICAgIGNhc2UgMjU0MDogcmV0dXJuIFwiQ2Fubm90IGFzc2lnbiB0byAnezB9JyBiZWNhdXNlIGl0IGlzIGEgY29uc3RhbnQgb3IgYSByZWFkLW9ubHkgcHJvcGVydHkuXCI7XG4gICAgY2FzZSAyNTQxOiByZXR1cm4gXCJUaGUgdGFyZ2V0IG9mIGFuIGFzc2lnbm1lbnQgbXVzdCBiZSBhIHZhcmlhYmxlIG9yIGEgcHJvcGVydHkgYWNjZXNzLlwiO1xuICAgIGNhc2UgMjU0MjogcmV0dXJuIFwiSW5kZXggc2lnbmF0dXJlIGluIHR5cGUgJ3swfScgb25seSBwZXJtaXRzIHJlYWRpbmcuXCI7XG4gICAgY2FzZSAyNTU0OiByZXR1cm4gXCJFeHBlY3RlZCB7MH0gYXJndW1lbnRzLCBidXQgZ290IHsxfS5cIjtcbiAgICBjYXNlIDI1NTU6IHJldHVybiBcIkV4cGVjdGVkIGF0IGxlYXN0IHswfSBhcmd1bWVudHMsIGJ1dCBnb3QgezF9LlwiO1xuICAgIGNhc2UgMjU1ODogcmV0dXJuIFwiRXhwZWN0ZWQgezB9IHR5cGUgYXJndW1lbnRzLCBidXQgZ290IHsxfS5cIjtcbiAgICBjYXNlIDI2NTE6IHJldHVybiBcIkEgbWVtYmVyIGluaXRpYWxpemVyIGluIGEgZW51bSBkZWNsYXJhdGlvbiBjYW5ub3QgcmVmZXJlbmNlIG1lbWJlcnMgZGVjbGFyZWQgYWZ0ZXIgaXQsIGluY2x1ZGluZyBtZW1iZXJzIGRlZmluZWQgaW4gb3RoZXIgZW51bXMuXCI7XG4gICAgY2FzZSAyNjczOiByZXR1cm4gXCJDb25zdHJ1Y3RvciBvZiBjbGFzcyAnezB9JyBpcyBwcml2YXRlIGFuZCBvbmx5IGFjY2Vzc2libGUgd2l0aGluIHRoZSBjbGFzcyBkZWNsYXJhdGlvbi5cIjtcbiAgICBjYXNlIDI2NzQ6IHJldHVybiBcIkNvbnN0cnVjdG9yIG9mIGNsYXNzICd7MH0nIGlzIHByb3RlY3RlZCBhbmQgb25seSBhY2Nlc3NpYmxlIHdpdGhpbiB0aGUgY2xhc3MgZGVjbGFyYXRpb24uXCI7XG4gICAgY2FzZSAyNjk0OiByZXR1cm4gXCJOYW1lc3BhY2UgJ3swfScgaGFzIG5vIGV4cG9ydGVkIG1lbWJlciAnezF9Jy5cIjtcbiAgICBjYXNlIDI3MDY6IHJldHVybiBcIlJlcXVpcmVkIHR5cGUgcGFyYW1ldGVycyBtYXkgbm90IGZvbGxvdyBvcHRpb25hbCB0eXBlIHBhcmFtZXRlcnMuXCI7XG4gICAgY2FzZSAyNzE4OiByZXR1cm4gXCJEdXBsaWNhdGUgcHJvcGVydHkgJ3swfScuXCI7XG4gICAgY2FzZSAyNzU3OiByZXR1cm4gXCJUeXBlICd7MH0nIGhhcyBubyBjYWxsIHNpZ25hdHVyZXMuXCI7XG4gICAgY2FzZSA2MDU0OiByZXR1cm4gXCJGaWxlICd7MH0nIG5vdCBmb3VuZC5cIjtcbiAgICBjYXNlIDYxODg6IHJldHVybiBcIk51bWVyaWMgc2VwYXJhdG9ycyBhcmUgbm90IGFsbG93ZWQgaGVyZS5cIjtcbiAgICBjYXNlIDYxODk6IHJldHVybiBcIk11bHRpcGxlIGNvbnNlY3V0aXZlIG51bWVyaWMgc2VwYXJhdG9ycyBhcmUgbm90IHBlcm1pdHRlZC5cIjtcbiAgICBjYXNlIDE3MDA5OiByZXR1cm4gXCInc3VwZXInIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBhY2Nlc3NpbmcgJ3RoaXMnIGluIHRoZSBjb25zdHJ1Y3RvciBvZiBhIGRlcml2ZWQgY2xhc3MuXCI7XG4gICAgY2FzZSAxNzAxMTogcmV0dXJuIFwiJ3N1cGVyJyBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgYWNjZXNzaW5nIGEgcHJvcGVydHkgb2YgJ3N1cGVyJyBpbiB0aGUgY29uc3RydWN0b3Igb2YgYSBkZXJpdmVkIGNsYXNzLlwiO1xuICAgIGRlZmF1bHQ6IHJldHVybiBcIlwiO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/assemblyscript/src/diagnostics.ts":
/*!********************************************************!*\
  !*** ./node_modules/assemblyscript/src/diagnostics.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Shared diagnostic handling inherited by the parser and the compiler.
 * @module diagnostics
 * @preferred
 */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
var diagnosticMessages_generated_1 = __webpack_require__(/*! ./diagnosticMessages.generated */ "./node_modules/assemblyscript/src/diagnosticMessages.generated.ts");
var util_1 = __webpack_require__(/*! ./util */ "./node_modules/assemblyscript/src/util/index.ts");
var diagnosticMessages_generated_2 = __webpack_require__(/*! ./diagnosticMessages.generated */ "./node_modules/assemblyscript/src/diagnosticMessages.generated.ts");
exports.DiagnosticCode = diagnosticMessages_generated_2.DiagnosticCode;
exports.diagnosticCodeToString = diagnosticMessages_generated_2.diagnosticCodeToString;
/** Indicates the category of a {@link DiagnosticMessage}. */
var DiagnosticCategory;
(function (DiagnosticCategory) {
    /** Informatory message. */
    DiagnosticCategory[DiagnosticCategory["INFO"] = 0] = "INFO";
    /** Warning message. */
    DiagnosticCategory[DiagnosticCategory["WARNING"] = 1] = "WARNING";
    /** Error message. */
    DiagnosticCategory[DiagnosticCategory["ERROR"] = 2] = "ERROR";
})(DiagnosticCategory = exports.DiagnosticCategory || (exports.DiagnosticCategory = {}));
/** Returns the string representation of the specified diagnostic category. */
function diagnosticCategoryToString(category) {
    switch (category) {
        case DiagnosticCategory.INFO: return "INFO";
        case DiagnosticCategory.WARNING: return "WARNING";
        case DiagnosticCategory.ERROR: return "ERROR";
        default: {
            assert(false);
            return "";
        }
    }
}
exports.diagnosticCategoryToString = diagnosticCategoryToString;
/** ANSI escape sequence for blue foreground. */
exports.COLOR_BLUE = "\u001b[96m";
/** ANSI escape sequence for yellow foreground. */
exports.COLOR_YELLOW = "\u001b[93m";
/** ANSI escape sequence for red foreground. */
exports.COLOR_RED = "\u001b[91m";
/** ANSI escape sequence to reset the foreground color. */
exports.COLOR_RESET = "\u001b[0m";
/** Returns the ANSI escape sequence for the specified category. */
function diagnosticCategoryToColor(category) {
    switch (category) {
        case DiagnosticCategory.INFO: return exports.COLOR_BLUE;
        case DiagnosticCategory.WARNING: return exports.COLOR_YELLOW;
        case DiagnosticCategory.ERROR: return exports.COLOR_RED;
        default: {
            assert(false);
            return "";
        }
    }
}
exports.diagnosticCategoryToColor = diagnosticCategoryToColor;
/** Represents a diagnostic message. */
var DiagnosticMessage = /** @class */ (function () {
    /** Constructs a new diagnostic message. */
    function DiagnosticMessage(code, category, message) {
        /** Respective source range, if any. */
        this.range = null;
        /** Related range, if any. */
        this.relatedRange = null;
        this.code = code;
        this.category = category;
        this.message = message;
    }
    /** Creates a new diagnostic message of the specified category. */
    DiagnosticMessage.create = function (code, category, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        var message = diagnosticMessages_generated_1.diagnosticCodeToString(code);
        if (arg0 != null)
            message = message.replace("{0}", arg0);
        if (arg1 != null)
            message = message.replace("{1}", arg1);
        if (arg2 != null)
            message = message.replace("{2}", arg2);
        return new DiagnosticMessage(code, category, message);
    };
    /** Creates a new informatory diagnostic message. */
    DiagnosticMessage.createInfo = function (code, arg0, arg1) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        return DiagnosticMessage.create(code, DiagnosticCategory.INFO, arg0, arg1);
    };
    /** Creates a new warning diagnostic message. */
    DiagnosticMessage.createWarning = function (code, arg0, arg1) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        return DiagnosticMessage.create(code, DiagnosticCategory.WARNING, arg0, arg1);
    };
    /** Creates a new error diagnostic message. */
    DiagnosticMessage.createError = function (code, arg0, arg1) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        return DiagnosticMessage.create(code, DiagnosticCategory.ERROR, arg0, arg1);
    };
    /** Adds a source range to this message. */
    DiagnosticMessage.prototype.withRange = function (range) {
        this.range = range;
        return this;
    };
    /** Adds a related source range to this message. */
    DiagnosticMessage.prototype.withRelatedRange = function (range) {
        this.relatedRange = range;
        return this;
    };
    /** Converts this message to a string. */
    DiagnosticMessage.prototype.toString = function () {
        if (this.range) {
            return (diagnosticCategoryToString(this.category) +
                " " +
                this.code.toString(10) +
                ": \"" +
                this.message +
                "\" in " +
                this.range.source.normalizedPath +
                ":" +
                this.range.line.toString(10) +
                ":" +
                this.range.column.toString(10));
        }
        return (diagnosticCategoryToString(this.category) +
            " " +
            this.code.toString(10) +
            ": " +
            this.message);
    };
    return DiagnosticMessage;
}());
exports.DiagnosticMessage = DiagnosticMessage;
/** Formats a diagnostic message, optionally with terminal colors and source context. */
function formatDiagnosticMessage(message, useColors, showContext) {
    if (useColors === void 0) { useColors = false; }
    if (showContext === void 0) { showContext = false; }
    // general information
    var sb = [];
    if (useColors)
        sb.push(diagnosticCategoryToColor(message.category));
    sb.push(diagnosticCategoryToString(message.category));
    if (useColors)
        sb.push(exports.COLOR_RESET);
    sb.push(message.code < 1000 ? " AS" : " TS");
    sb.push(message.code.toString(10));
    sb.push(": ");
    sb.push(message.message);
    // include range information if available
    if (message.range) {
        // include context information if requested
        var range = message.range;
        if (showContext) {
            sb.push("\n");
            sb.push(formatDiagnosticContext(range, useColors));
        }
        sb.push("\n");
        sb.push(" in ");
        sb.push(range.source.normalizedPath);
        sb.push("(");
        sb.push(range.line.toString(10));
        sb.push(",");
        sb.push(range.column.toString(10));
        sb.push(")");
        var relatedRange = message.relatedRange;
        if (relatedRange) {
            if (showContext) {
                sb.push("\n");
                sb.push(formatDiagnosticContext(relatedRange, useColors));
            }
            sb.push("\n");
            sb.push(" in ");
            sb.push(range.source.normalizedPath);
            sb.push("(");
            sb.push(range.line.toString(10));
            sb.push(",");
            sb.push(range.column.toString(10));
            sb.push(")");
        }
    }
    return sb.join("");
}
exports.formatDiagnosticMessage = formatDiagnosticMessage;
/** Formats the diagnostic context for the specified range, optionally with terminal colors. */
function formatDiagnosticContext(range, useColors) {
    if (useColors === void 0) { useColors = false; }
    var text = range.source.text;
    var len = text.length;
    var start = range.start;
    var end = range.end;
    while (start > 0 && !util_1.isLineBreak(text.charCodeAt(start - 1)))
        start--;
    while (end < len && !util_1.isLineBreak(text.charCodeAt(end)))
        end++;
    var sb = [
        "\n ",
        text.substring(start, end),
        "\n "
    ];
    while (start < range.start) {
        sb.push(" ");
        start++;
    }
    if (useColors)
        sb.push(exports.COLOR_RED);
    if (range.start == range.end) {
        sb.push("^");
    }
    else {
        while (start++ < range.end) {
            if (util_1.isLineBreak(text.charCodeAt(start))) {
                sb.push(start == range.start + 1 ? "^" : "~");
                break;
            }
            sb.push("~");
        }
    }
    if (useColors)
        sb.push(exports.COLOR_RESET);
    return sb.join("");
}
exports.formatDiagnosticContext = formatDiagnosticContext;
/** Base class of all diagnostic emitters. */
var DiagnosticEmitter = /** @class */ (function () {
    /** Initializes this diagnostic emitter. */
    function DiagnosticEmitter(diagnostics) {
        if (diagnostics === void 0) { diagnostics = null; }
        this.diagnostics = diagnostics ? diagnostics : new Array();
    }
    /** Emits a diagnostic message of the specified category. */
    DiagnosticEmitter.prototype.emitDiagnostic = function (code, category, range, relatedRange, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        var message = DiagnosticMessage.create(code, category, arg0, arg1, arg2).withRange(range);
        if (relatedRange)
            message.relatedRange = relatedRange;
        this.diagnostics.push(message);
        // console.log(formatDiagnosticMessage(message, true, true) + "\n"); // temporary
        // console.log(<string>new Error("stack").stack);
    };
    /** Emits an informatory diagnostic message. */
    DiagnosticEmitter.prototype.info = function (code, range, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.INFO, range, null, arg0, arg1, arg2);
    };
    /** Emits an informatory diagnostic message with a related range. */
    DiagnosticEmitter.prototype.infoRelated = function (code, range, relatedRange, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.INFO, range, relatedRange, arg0, arg1, arg2);
    };
    /** Emits a warning diagnostic message. */
    DiagnosticEmitter.prototype.warning = function (code, range, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.WARNING, range, null, arg0, arg1, arg2);
    };
    /** Emits a warning diagnostic message with a related range. */
    DiagnosticEmitter.prototype.warningRelated = function (code, range, relatedRange, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.WARNING, range, relatedRange, arg0, arg1, arg2);
    };
    /** Emits an error diagnostic message. */
    DiagnosticEmitter.prototype.error = function (code, range, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.ERROR, range, null, arg0, arg1, arg2);
    };
    /** Emits an error diagnostic message with a related range. */
    DiagnosticEmitter.prototype.errorRelated = function (code, range, relatedRange, arg0, arg1, arg2) {
        if (arg0 === void 0) { arg0 = null; }
        if (arg1 === void 0) { arg1 = null; }
        if (arg2 === void 0) { arg2 = null; }
        this.emitDiagnostic(code, DiagnosticCategory.ERROR, range, relatedRange, arg0, arg1, arg2);
    };
    return DiagnosticEmitter;
}());
exports.DiagnosticEmitter = DiagnosticEmitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhZ25vc3RpY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXNzZW1ibHlzY3JpcHQvc3JjL2RpYWdub3N0aWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztHQUlHLENBQUEsS0FBSzs7QUFNUiwrRUFHd0M7QUFFeEMsK0JBRWdCO0FBRWhCLCtFQUd3QztBQUZ0Qyx3REFBQSxjQUFjLENBQUE7QUFDZCxnRUFBQSxzQkFBc0IsQ0FBQTtBQUd4Qiw2REFBNkQ7QUFDN0QsSUFBWSxrQkFPWDtBQVBELFdBQVksa0JBQWtCO0lBQzVCLDJCQUEyQjtJQUMzQiwyREFBSSxDQUFBO0lBQ0osdUJBQXVCO0lBQ3ZCLGlFQUFPLENBQUE7SUFDUCxxQkFBcUI7SUFDckIsNkRBQUssQ0FBQTtBQUNQLENBQUMsRUFQVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQU83QjtBQUVELDhFQUE4RTtBQUM5RSxTQUFnQiwwQkFBMEIsQ0FBQyxRQUE0QjtJQUNyRSxRQUFRLFFBQVEsRUFBRTtRQUNoQixLQUFLLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDO1FBQzVDLEtBQUssa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUM7UUFDbEQsS0FBSyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQztRQUM5QyxPQUFPLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNkLE9BQU8sRUFBRSxDQUFDO1NBQ1g7S0FDRjtBQUNILENBQUM7QUFWRCxnRUFVQztBQUVELGdEQUFnRDtBQUNuQyxRQUFBLFVBQVUsR0FBVyxZQUFZLENBQUM7QUFDL0Msa0RBQWtEO0FBQ3JDLFFBQUEsWUFBWSxHQUFXLFlBQVksQ0FBQztBQUNqRCwrQ0FBK0M7QUFDbEMsUUFBQSxTQUFTLEdBQVcsWUFBWSxDQUFD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QUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBL0ZELElBK0ZDO0FBL0ZxQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNoYXJlZCBkaWFnbm9zdGljIGhhbmRsaW5nIGluaGVyaXRlZCBieSB0aGUgcGFyc2VyIGFuZCB0aGUgY29tcGlsZXIuXG4gKiBAbW9kdWxlIGRpYWdub3N0aWNzXG4gKiBAcHJlZmVycmVkXG4gKi8vKioqL1xuXG5pbXBvcnQge1xuICBSYW5nZVxufSBmcm9tIFwiLi9hc3RcIjtcblxuaW1wb3J0IHtcbiAgRGlhZ25vc3RpY0NvZGUsXG4gIGRpYWdub3N0aWNDb2RlVG9TdHJpbmdcbn0gZnJvbSBcIi4vZGlhZ25vc3RpY01lc3NhZ2VzLmdlbmVyYXRlZFwiO1xuXG5pbXBvcnQge1xuICBpc0xpbmVCcmVhaywgQ2hhckNvZGVcbn0gZnJvbSBcIi4vdXRpbFwiO1xuXG5leHBvcnQge1xuICBEaWFnbm9zdGljQ29kZSxcbiAgZGlhZ25vc3RpY0NvZGVUb1N0cmluZ1xufSBmcm9tIFwiLi9kaWFnbm9zdGljTWVzc2FnZXMuZ2VuZXJhdGVkXCI7XG5cbi8qKiBJbmRpY2F0ZXMgdGhlIGNhdGVnb3J5IG9mIGEge0BsaW5rIERpYWdub3N0aWNNZXNzYWdlfS4gKi9cbmV4cG9ydCBlbnVtIERpYWdub3N0aWNDYXRlZ29yeSB7XG4gIC8qKiBJbmZvcm1hdG9yeSBtZXNzYWdlLiAqL1xuICBJTkZPLFxuICAvKiogV2FybmluZyBtZXNzYWdlLiAqL1xuICBXQVJOSU5HLFxuICAvKiogRXJyb3IgbWVzc2FnZS4gKi9cbiAgRVJST1Jcbn1cblxuLyoqIFJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgc3BlY2lmaWVkIGRpYWdub3N0aWMgY2F0ZWdvcnkuICovXG5leHBvcnQgZnVuY3Rpb24gZGlhZ25vc3RpY0NhdGVnb3J5VG9TdHJpbmcoY2F0ZWdvcnk6IERpYWdub3N0aWNDYXRlZ29yeSk6IHN0cmluZyB7XG4gIHN3aXRjaCAoY2F0ZWdvcnkpIHtcbiAgICBjYXNlIERpYWdub3N0aWNDYXRlZ29yeS5JTkZPOiByZXR1cm4gXCJJTkZPXCI7XG4gICAgY2FzZSBEaWFnbm9zdGljQ2F0ZWdvcnkuV0FSTklORzogcmV0dXJuIFwiV0FSTklOR1wiO1xuICAgIGNhc2UgRGlhZ25vc3RpY0NhdGVnb3J5LkVSUk9SOiByZXR1cm4gXCJFUlJPUlwiO1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGFzc2VydChmYWxzZSk7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cbn1cblxuLyoqIEFOU0kgZXNjYXBlIHNlcXVlbmNlIGZvciBibHVlIGZvcmVncm91bmQuICovXG5leHBvcnQgY29uc3QgQ09MT1JfQkxVRTogc3RyaW5nID0gXCJcXHUwMDFiWzk2bVwiO1xuLyoqIEFOU0kgZXNjYXBlIHNlcXVlbmNlIGZvciB5ZWxsb3cgZm9yZWdyb3VuZC4gKi9cbmV4cG9ydCBjb25zdCBDT0xPUl9ZRUxMT1c6IHN0cmluZyA9IFwiXFx1MDAxYls5M21cIjtcbi8qKiBBTlNJIGVzY2FwZSBzZXF1ZW5jZSBmb3IgcmVkIGZvcmVncm91bmQuICovXG5leHBvcnQgY29uc3QgQ09MT1JfUkVEOiBzdHJpbmcgPSBcIlxcdTAwMWJbOTFtXCI7XG4vKiogQU5TSSBlc2NhcGUgc2VxdWVuY2UgdG8gcmVzZXQgdGhlIGZvcmVncm91bmQgY29sb3IuICovXG5leHBvcnQgY29uc3QgQ09MT1JfUkVTRVQ6IHN0cmluZyA9IFwiXFx1MDAxYlswbVwiO1xuXG4vKiogUmV0dXJucyB0aGUgQU5TSSBlc2NhcGUgc2VxdWVuY2UgZm9yIHRoZSBzcGVjaWZpZWQgY2F0ZWdvcnkuICovXG5leHBvcnQgZnVuY3Rpb24gZGlhZ25vc3RpY0NhdGVnb3J5VG9Db2xvcihjYXRlZ29yeTogRGlhZ25vc3RpY0NhdGVnb3J5KTogc3RyaW5nIHtcbiAgc3dpdGNoIChjYXRlZ29yeSkge1xuICAgIGNhc2UgRGlhZ25vc3RpY0NhdGVnb3J5LklORk86IHJldHVybiBDT0xPUl9CTFVFO1xuICAgIGNhc2UgRGlhZ25vc3RpY0NhdGVnb3J5LldBUk5JTkc6IHJldHVybiBDT0xPUl9ZRUxMT1c7XG4gICAgY2FzZSBEaWFnbm9zdGljQ2F0ZWdvcnkuRVJST1I6IHJldHVybiBDT0xPUl9SRUQ7XG4gICAgZGVmYXVsdDoge1xuICAgICAgYXNzZXJ0KGZhbHNlKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG4vKiogUmVwcmVzZW50cyBhIGRpYWdub3N0aWMgbWVzc2FnZS4gKi9cbmV4cG9ydCBjbGFzcyBEaWFnbm9zdGljTWVzc2FnZSB7XG5cbiAgLyoqIE1lc3NhZ2UgY29kZS4gKi9cbiAgY29kZTogaTMyO1xuICAvKiogTWVzc2FnZSBjYXRlZ29yeS4gKi9cbiAgY2F0ZWdvcnk6IERpYWdub3N0aWNDYXRlZ29yeTtcbiAgLyoqIE1lc3NhZ2UgdGV4dC4gKi9cbiAgbWVzc2FnZTogc3RyaW5nO1xuICAvKiogUmVzcGVjdGl2ZSBzb3VyY2UgcmFuZ2UsIGlmIGFueS4gKi9cbiAgcmFuZ2U6IFJhbmdlIHwgbnVsbCA9IG51bGw7XG4gIC8qKiBSZWxhdGVkIHJhbmdlLCBpZiBhbnkuICovXG4gIHJlbGF0ZWRSYW5nZTogUmFuZ2UgfCBudWxsID0gbnVsbDtcblxuICAvKiogQ29uc3RydWN0cyBhIG5ldyBkaWFnbm9zdGljIG1lc3NhZ2UuICovXG4gIHByaXZhdGUgY29uc3RydWN0b3IoY29kZTogaTMyLCBjYXRlZ29yeTogRGlhZ25vc3RpY0NhdGVnb3J5LCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBuZXcgZGlhZ25vc3RpYyBtZXNzYWdlIG9mIHRoZSBzcGVjaWZpZWQgY2F0ZWdvcnkuICovXG4gIHN0YXRpYyBjcmVhdGUoXG4gICAgY29kZTogRGlhZ25vc3RpY0NvZGUsXG4gICAgY2F0ZWdvcnk6IERpYWdub3N0aWNDYXRlZ29yeSxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcyOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiBEaWFnbm9zdGljTWVzc2FnZSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBkaWFnbm9zdGljQ29kZVRvU3RyaW5nKGNvZGUpO1xuICAgIGlmIChhcmcwICE9IG51bGwpIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoXCJ7MH1cIiwgYXJnMCk7XG4gICAgaWYgKGFyZzEgIT0gbnVsbCkgbWVzc2FnZSA9IG1lc3NhZ2UucmVwbGFjZShcInsxfVwiLCBhcmcxKTtcbiAgICBpZiAoYXJnMiAhPSBudWxsKSBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFwiezJ9XCIsIGFyZzIpO1xuICAgIHJldHVybiBuZXcgRGlhZ25vc3RpY01lc3NhZ2UoY29kZSwgY2F0ZWdvcnksIG1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBuZXcgaW5mb3JtYXRvcnkgZGlhZ25vc3RpYyBtZXNzYWdlLiAqL1xuICBzdGF0aWMgY3JlYXRlSW5mbyhcbiAgICBjb2RlOiBEaWFnbm9zdGljQ29kZSxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiBEaWFnbm9zdGljTWVzc2FnZSB7XG4gICAgcmV0dXJuIERpYWdub3N0aWNNZXNzYWdlLmNyZWF0ZShjb2RlLCBEaWFnbm9zdGljQ2F0ZWdvcnkuSU5GTywgYXJnMCwgYXJnMSk7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhIG5ldyB3YXJuaW5nIGRpYWdub3N0aWMgbWVzc2FnZS4gKi9cbiAgc3RhdGljIGNyZWF0ZVdhcm5pbmcoXG4gICAgY29kZTogRGlhZ25vc3RpY0NvZGUsXG4gICAgYXJnMDogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgYXJnMTogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgKTogRGlhZ25vc3RpY01lc3NhZ2Uge1xuICAgIHJldHVybiBEaWFnbm9zdGljTWVzc2FnZS5jcmVhdGUoY29kZSwgRGlhZ25vc3RpY0NhdGVnb3J5LldBUk5JTkcsIGFyZzAsIGFyZzEpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBuZXcgZXJyb3IgZGlhZ25vc3RpYyBtZXNzYWdlLiAqL1xuICBzdGF0aWMgY3JlYXRlRXJyb3IoXG4gICAgY29kZTogRGlhZ25vc3RpY0NvZGUsXG4gICAgYXJnMDogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgYXJnMTogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgKTogRGlhZ25vc3RpY01lc3NhZ2Uge1xuICAgIHJldHVybiBEaWFnbm9zdGljTWVzc2FnZS5jcmVhdGUoY29kZSwgRGlhZ25vc3RpY0NhdGVnb3J5LkVSUk9SLCBhcmcwLCBhcmcxKTtcbiAgfVxuXG4gIC8qKiBBZGRzIGEgc291cmNlIHJhbmdlIHRvIHRoaXMgbWVzc2FnZS4gKi9cbiAgd2l0aFJhbmdlKHJhbmdlOiBSYW5nZSk6IHRoaXMge1xuICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKiBBZGRzIGEgcmVsYXRlZCBzb3VyY2UgcmFuZ2UgdG8gdGhpcyBtZXNzYWdlLiAqL1xuICB3aXRoUmVsYXRlZFJhbmdlKHJhbmdlOiBSYW5nZSk6IHRoaXMge1xuICAgIHRoaXMucmVsYXRlZFJhbmdlID0gcmFuZ2U7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogQ29udmVydHMgdGhpcyBtZXNzYWdlIHRvIGEgc3RyaW5nLiAqL1xuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBkaWFnbm9zdGljQ2F0ZWdvcnlUb1N0cmluZyh0aGlzLmNhdGVnb3J5KSArXG4gICAgICAgIFwiIFwiICtcbiAgICAgICAgdGhpcy5jb2RlLnRvU3RyaW5nKDEwKSArXG4gICAgICAgIFwiOiBcXFwiXCIgK1xuICAgICAgICB0aGlzLm1lc3NhZ2UgK1xuICAgICAgICBcIlxcXCIgaW4gXCIgK1xuICAgICAgICB0aGlzLnJhbmdlLnNvdXJjZS5ub3JtYWxpemVkUGF0aCArXG4gICAgICAgIFwiOlwiICtcbiAgICAgICAgdGhpcy5yYW5nZS5saW5lLnRvU3RyaW5nKDEwKSArXG4gICAgICAgIFwiOlwiICtcbiAgICAgICAgdGhpcy5yYW5nZS5jb2x1bW4udG9TdHJpbmcoMTApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgZGlhZ25vc3RpY0NhdGVnb3J5VG9TdHJpbmcodGhpcy5jYXRlZ29yeSkgK1xuICAgICAgXCIgXCIgK1xuICAgICAgdGhpcy5jb2RlLnRvU3RyaW5nKDEwKSArXG4gICAgICBcIjogXCIgK1xuICAgICAgdGhpcy5tZXNzYWdlXG4gICAgKTtcbiAgfVxufVxuXG4vKiogRm9ybWF0cyBhIGRpYWdub3N0aWMgbWVzc2FnZSwgb3B0aW9uYWxseSB3aXRoIHRlcm1pbmFsIGNvbG9ycyBhbmQgc291cmNlIGNvbnRleHQuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGlhZ25vc3RpY01lc3NhZ2UoXG4gIG1lc3NhZ2U6IERpYWdub3N0aWNNZXNzYWdlLFxuICB1c2VDb2xvcnM6IGJvb2wgPSBmYWxzZSxcbiAgc2hvd0NvbnRleHQ6IGJvb2wgPSBmYWxzZVxuKTogc3RyaW5nIHtcblxuICAvLyBnZW5lcmFsIGluZm9ybWF0aW9uXG4gIHZhciBzYjogc3RyaW5nW10gPSBbXTtcbiAgaWYgKHVzZUNvbG9ycykgc2IucHVzaChkaWFnbm9zdGljQ2F0ZWdvcnlUb0NvbG9yKG1lc3NhZ2UuY2F0ZWdvcnkpKTtcbiAgc2IucHVzaChkaWFnbm9zdGljQ2F0ZWdvcnlUb1N0cmluZyhtZXNzYWdlLmNhdGVnb3J5KSk7XG4gIGlmICh1c2VDb2xvcnMpIHNiLnB1c2goQ09MT1JfUkVTRVQpO1xuICBzYi5wdXNoKG1lc3NhZ2UuY29kZSA8IDEwMDAgPyBcIiBBU1wiIDogXCIgVFNcIik7XG4gIHNiLnB1c2gobWVzc2FnZS5jb2RlLnRvU3RyaW5nKDEwKSk7XG4gIHNiLnB1c2goXCI6IFwiKTtcbiAgc2IucHVzaChtZXNzYWdlLm1lc3NhZ2UpO1xuXG4gIC8vIGluY2x1ZGUgcmFuZ2UgaW5mb3JtYXRpb24gaWYgYXZhaWxhYmxlXG4gIGlmIChtZXNzYWdlLnJhbmdlKSB7XG5cbiAgICAvLyBpbmNsdWRlIGNvbnRleHQgaW5mb3JtYXRpb24gaWYgcmVxdWVzdGVkXG4gICAgbGV0IHJhbmdlID0gbWVzc2FnZS5yYW5nZTtcbiAgICBpZiAoc2hvd0NvbnRleHQpIHtcbiAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgICBzYi5wdXNoKGZvcm1hdERpYWdub3N0aWNDb250ZXh0KHJhbmdlLCB1c2VDb2xvcnMpKTtcbiAgICB9XG4gICAgc2IucHVzaChcIlxcblwiKTtcbiAgICBzYi5wdXNoKFwiIGluIFwiKTtcbiAgICBzYi5wdXNoKHJhbmdlLnNvdXJjZS5ub3JtYWxpemVkUGF0aCk7XG4gICAgc2IucHVzaChcIihcIik7XG4gICAgc2IucHVzaChyYW5nZS5saW5lLnRvU3RyaW5nKDEwKSk7XG4gICAgc2IucHVzaChcIixcIik7XG4gICAgc2IucHVzaChyYW5nZS5jb2x1bW4udG9TdHJpbmcoMTApKTtcbiAgICBzYi5wdXNoKFwiKVwiKTtcblxuICAgIGxldCByZWxhdGVkUmFuZ2UgPSBtZXNzYWdlLnJlbGF0ZWRSYW5nZTtcbiAgICBpZiAocmVsYXRlZFJhbmdlKSB7XG4gICAgICBpZiAoc2hvd0NvbnRleHQpIHtcbiAgICAgICAgc2IucHVzaChcIlxcblwiKTtcbiAgICAgICAgc2IucHVzaChmb3JtYXREaWFnbm9zdGljQ29udGV4dChyZWxhdGVkUmFuZ2UsIHVzZUNvbG9ycykpO1xuICAgICAgfVxuICAgICAgc2IucHVzaChcIlxcblwiKTtcbiAgICAgIHNiLnB1c2goXCIgaW4gXCIpO1xuICAgICAgc2IucHVzaChyYW5nZS5zb3VyY2Uubm9ybWFsaXplZFBhdGgpO1xuICAgICAgc2IucHVzaChcIihcIik7XG4gICAgICBzYi5wdXNoKHJhbmdlLmxpbmUudG9TdHJpbmcoMTApKTtcbiAgICAgIHNiLnB1c2goXCIsXCIpO1xuICAgICAgc2IucHVzaChyYW5nZS5jb2x1bW4udG9TdHJpbmcoMTApKTtcbiAgICAgIHNiLnB1c2goXCIpXCIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2Iuam9pbihcIlwiKTtcbn1cblxuLyoqIEZvcm1hdHMgdGhlIGRpYWdub3N0aWMgY29udGV4dCBmb3IgdGhlIHNwZWNpZmllZCByYW5nZSwgb3B0aW9uYWxseSB3aXRoIHRlcm1pbmFsIGNvbG9ycy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREaWFnbm9zdGljQ29udGV4dChyYW5nZTogUmFuZ2UsIHVzZUNvbG9yczogYm9vbCA9IGZhbHNlKTogc3RyaW5nIHtcbiAgdmFyIHRleHQgPSByYW5nZS5zb3VyY2UudGV4dDtcbiAgdmFyIGxlbiA9IHRleHQubGVuZ3RoO1xuICB2YXIgc3RhcnQgPSByYW5nZS5zdGFydDtcbiAgdmFyIGVuZCA9IHJhbmdlLmVuZDtcbiAgd2hpbGUgKHN0YXJ0ID4gMCAmJiAhaXNMaW5lQnJlYWsodGV4dC5jaGFyQ29kZUF0KHN0YXJ0IC0gMSkpKSBzdGFydC0tO1xuICB3aGlsZSAoZW5kIDwgbGVuICYmICFpc0xpbmVCcmVhayh0ZXh0LmNoYXJDb2RlQXQoZW5kKSkpIGVuZCsrO1xuICB2YXIgc2I6IHN0cmluZ1tdID0gW1xuICAgIFwiXFxuIFwiLFxuICAgIHRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpLFxuICAgIFwiXFxuIFwiXG4gIF07XG4gIHdoaWxlIChzdGFydCA8IHJhbmdlLnN0YXJ0KSB7XG4gICAgc2IucHVzaChcIiBcIik7XG4gICAgc3RhcnQrKztcbiAgfVxuICBpZiAodXNlQ29sb3JzKSBzYi5wdXNoKENPTE9SX1JFRCk7XG4gIGlmIChyYW5nZS5zdGFydCA9PSByYW5nZS5lbmQpIHtcbiAgICBzYi5wdXNoKFwiXlwiKTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3RhcnQrKyA8IHJhbmdlLmVuZCkge1xuICAgICAgaWYgKGlzTGluZUJyZWFrKHRleHQuY2hhckNvZGVBdChzdGFydCkpKSB7XG4gICAgICAgIHNiLnB1c2goc3RhcnQgPT0gcmFuZ2Uuc3RhcnQgKyAxID8gXCJeXCIgOiBcIn5cIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2IucHVzaChcIn5cIik7XG4gICAgfVxuICB9XG4gIGlmICh1c2VDb2xvcnMpIHNiLnB1c2goQ09MT1JfUkVTRVQpO1xuICByZXR1cm4gc2Iuam9pbihcIlwiKTtcbn1cblxuLyoqIEJhc2UgY2xhc3Mgb2YgYWxsIGRpYWdub3N0aWMgZW1pdHRlcnMuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlhZ25vc3RpY0VtaXR0ZXIge1xuXG4gIC8qKiBEaWFnbm9zdGljIG1lc3NhZ2VzIGVtaXR0ZWQgc28gZmFyLiAqL1xuICBkaWFnbm9zdGljczogRGlhZ25vc3RpY01lc3NhZ2VbXTtcblxuICAvKiogSW5pdGlhbGl6ZXMgdGhpcyBkaWFnbm9zdGljIGVtaXR0ZXIuICovXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihkaWFnbm9zdGljczogRGlhZ25vc3RpY01lc3NhZ2VbXSB8IG51bGwgPSBudWxsKSB7XG4gICAgdGhpcy5kaWFnbm9zdGljcyA9IGRpYWdub3N0aWNzID8gPERpYWdub3N0aWNNZXNzYWdlW10+ZGlhZ25vc3RpY3MgOiBuZXcgQXJyYXkoKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhIGRpYWdub3N0aWMgbWVzc2FnZSBvZiB0aGUgc3BlY2lmaWVkIGNhdGVnb3J5LiAqL1xuICBlbWl0RGlhZ25vc3RpYyhcbiAgICBjb2RlOiBEaWFnbm9zdGljQ29kZSxcbiAgICBjYXRlZ29yeTogRGlhZ25vc3RpY0NhdGVnb3J5LFxuICAgIHJhbmdlOiBSYW5nZSxcbiAgICByZWxhdGVkUmFuZ2U6IFJhbmdlIHwgbnVsbCxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcyOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiB2b2lkIHtcbiAgICB2YXIgbWVzc2FnZSA9IERpYWdub3N0aWNNZXNzYWdlLmNyZWF0ZShjb2RlLCBjYXRlZ29yeSwgYXJnMCwgYXJnMSwgYXJnMikud2l0aFJhbmdlKHJhbmdlKTtcbiAgICBpZiAocmVsYXRlZFJhbmdlKSBtZXNzYWdlLnJlbGF0ZWRSYW5nZSA9IHJlbGF0ZWRSYW5nZTtcbiAgICB0aGlzLmRpYWdub3N0aWNzLnB1c2gobWVzc2FnZSk7XG4gICAgLy8gY29uc29sZS5sb2coZm9ybWF0RGlhZ25vc3RpY01lc3NhZ2UobWVzc2FnZSwgdHJ1ZSwgdHJ1ZSkgKyBcIlxcblwiKTsgLy8gdGVtcG9yYXJ5XG4gICAgLy8gY29uc29sZS5sb2coPHN0cmluZz5uZXcgRXJyb3IoXCJzdGFja1wiKS5zdGFjayk7XG4gIH1cblxuICAvKiogRW1pdHMgYW4gaW5mb3JtYXRvcnkgZGlhZ25vc3RpYyBtZXNzYWdlLiAqL1xuICBpbmZvKFxuICAgIGNvZGU6IERpYWdub3N0aWNDb2RlLFxuICAgIHJhbmdlOiBSYW5nZSxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcyOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmVtaXREaWFnbm9zdGljKGNvZGUsIERpYWdub3N0aWNDYXRlZ29yeS5JTkZPLCByYW5nZSwgbnVsbCwgYXJnMCwgYXJnMSwgYXJnMik7XG4gIH1cblxuICAvKiogRW1pdHMgYW4gaW5mb3JtYXRvcnkgZGlhZ25vc3RpYyBtZXNzYWdlIHdpdGggYSByZWxhdGVkIHJhbmdlLiAqL1xuICBpbmZvUmVsYXRlZChcbiAgICBjb2RlOiBEaWFnbm9zdGljQ29kZSxcbiAgICByYW5nZTogUmFuZ2UsXG4gICAgcmVsYXRlZFJhbmdlOiBSYW5nZSxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcyOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmVtaXREaWFnbm9zdGljKGNvZGUsIERpYWdub3N0aWNDYXRlZ29yeS5JTkZPLCByYW5nZSwgcmVsYXRlZFJhbmdlLCBhcmcwLCBhcmcxLCBhcmcyKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhIHdhcm5pbmcgZGlhZ25vc3RpYyBtZXNzYWdlLiAqL1xuICB3YXJuaW5nKFxuICAgIGNvZGU6IERpYWdub3N0aWNDb2RlLFxuICAgIHJhbmdlOiBSYW5nZSxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcyOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmVtaXREaWFnbm9zdGljKGNvZGUsIERpYWdub3N0aWNDYXRlZ29yeS5XQVJOSU5HLCByYW5nZSwgbnVsbCwgYXJnMCwgYXJnMSwgYXJnMik7XG4gIH1cblxuICAvKiogRW1pdHMgYSB3YXJuaW5nIGRpYWdub3N0aWMgbWVzc2FnZSB3aXRoIGEgcmVsYXRlZCByYW5nZS4gKi9cbiAgd2FybmluZ1JlbGF0ZWQoXG4gICAgY29kZTogRGlhZ25vc3RpY0NvZGUsXG4gICAgcmFuZ2U6IFJhbmdlLFxuICAgIHJlbGF0ZWRSYW5nZTogUmFuZ2UsXG4gICAgYXJnMDogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgYXJnMTogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgYXJnMjogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0RGlhZ25vc3RpYyhjb2RlLCBEaWFnbm9zdGljQ2F0ZWdvcnkuV0FSTklORywgcmFuZ2UsIHJlbGF0ZWRSYW5nZSwgYXJnMCwgYXJnMSwgYXJnMik7XG4gIH1cblxuICAvKiogRW1pdHMgYW4gZXJyb3IgZGlhZ25vc3RpYyBtZXNzYWdlLiAqL1xuICBlcnJvcihcbiAgICBjb2RlOiBEaWFnbm9zdGljQ29kZSxcbiAgICByYW5nZTogUmFuZ2UsXG4gICAgYXJnMDogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgYXJnMTogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4gICAgYXJnMjogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0RGlhZ25vc3RpYyhjb2RlLCBEaWFnbm9zdGljQ2F0ZWdvcnkuRVJST1IsIHJhbmdlLCBudWxsLCBhcmcwLCBhcmcxLCBhcmcyKTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhbiBlcnJvciBkaWFnbm9zdGljIG1lc3NhZ2Ugd2l0aCBhIHJlbGF0ZWQgcmFuZ2UuICovXG4gIGVycm9yUmVsYXRlZChcbiAgICBjb2RlOiBEaWFnbm9zdGljQ29kZSxcbiAgICByYW5nZTogUmFuZ2UsXG4gICAgcmVsYXRlZFJhbmdlOiBSYW5nZSxcbiAgICBhcmcwOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcxOiBzdHJpbmcgfCBudWxsID0gbnVsbCxcbiAgICBhcmcyOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmVtaXREaWFnbm9zdGljKGNvZGUsIERpYWdub3N0aWNDYXRlZ29yeS5FUlJPUiwgcmFuZ2UsIHJlbGF0ZWRSYW5nZSwgYXJnMCwgYXJnMSwgYXJnMik7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/assemblyscript/src/glue/js/float.js":
/*!**********************************************************!*\
  !*** ./node_modules/assemblyscript/src/glue/js/float.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const F64 = new Float64Array(1);
const F32 = new Float32Array(F64.buffer);
const I32 = new Int32Array(F64.buffer);

global.f32_as_i32 = function(value) {
  F32[0] = value;
  return I32[0];
};

global.i32_as_f32 = function(value) {
  I32[0] = value;
  return F32[0];
};

global.f64_as_i64 = function(value) {
  F64[0] = value;
  return i64_new(I32[0], I32[1]);
};

global.i64_as_f64 = function(value) {
  I32[0] = i64_low(value);
  I32[1] = i64_high(value);
  return F64[0];
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/assemblyscript/src/glue/js/i64.js":
/*!********************************************************!*\
  !*** ./node_modules/assemblyscript/src/glue/js/i64.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Long = global.Long || __webpack_require__(/*! long */ "./node_modules/long/src/long.js");

global.i64_zero = Long.ZERO;

global.i64_one = Long.ONE;

global.i64_new = function(lo, hi) {
  return Long.fromBits(lo, hi);
};

global.i64_low = function(value) {
  return value.low;
};

global.i64_high = function(value) {
  return value.high;
};

global.i64_add = function(left, right) {
  return left.add(right);
};

global.i64_sub = function(left, right) {
  return left.sub(right);
};

global.i64_mul = function(left, right) {
  return left.mul(right);
};

global.i64_div = function(left, right) {
  return left.div(right);
};

global.i64_div_u = function(left, right) {
  return left.toUnsigned().div(right.toUnsigned()).toSigned();
};

global.i64_rem = function(left, right) {
  return left.mod(right);
};

global.i64_rem_u = function(left, right) {
  return left.toUnsigned().mod(right.toUnsigned()).toSigned();
};

global.i64_and = function(left, right) {
  return left.and(right);
};

global.i64_or = function(left, right) {
  return left.or(right);
};

global.i64_xor = function(left, right) {
  return left.xor(right);
};

global.i64_shl = function(left, right) {
  return left.shl(right);
};

global.i64_shr = function(left, right) {
  return left.shr(right);
};

global.i64_shr_u = function(left, right) {
  return left.shru(right);
};

global.i64_not = function(value) {
  return value.not();
};

global.i64_eq = function(left, right) {
  return left.eq(right);
};

global.i64_ne = function(left, right) {
  return left.ne(right);
};

global.i64_align = function(value, alignment) {
  assert(alignment && (alignment & (alignment - 1)) == 0);
  var mask = Long.fromInt(alignment - 1);
  return value.add(mask).and(mask.not());
};

global.i64_is_i8 = function(value) {
  return value.high === 0 && (value.low >= 0 && value.low <= i8.MAX_VALUE)
      || value.high === -1 && (value.low >= i8.MIN_VALUE && value.low < 0);
};

global.i64_is_i16 = function(value) {
  return value.high === 0 && (value.low >= 0 && value.low <= i16.MAX_VALUE)
      || value.high === -1 && (value.low >= i16.MIN_VALUE && value.low < 0);
};

global.i64_is_i32 = function(value) {
  return (value.high === 0 && value.low >= 0)
      || (value.high === -1 && value.low < 0);
};

global.i64_is_u8 = function(value) {
  return value.high === 0 && value.low >= 0 && value.low <= u8.MAX_VALUE;
};

global.i64_is_u16 = function(value) {
  return value.high === 0 && value.low >= 0 && value.low <= u16.MAX_VALUE;
};

global.i64_is_u32 = function(value) {
  return value.high === 0;
};

global.i64_is_bool = function(value) {
  return value.high === 0 && (value.low === 0 || value.low === 1);
};

const minSafeF32 = Long.fromNumber(f32.MIN_SAFE_INTEGER);
const maxSafeF32 = Long.fromNumber(f32.MAX_SAFE_INTEGER);

global.i64_is_f32 = function(value) {
  return value.gte(minSafeF32) && value.lte(maxSafeF32);
};

const minSafeF64 = Long.fromNumber(f64.MIN_SAFE_INTEGER);
const maxSafeF64 = Long.fromNumber(f64.MAX_SAFE_INTEGER);

global.i64_is_f64 = function(value) {
  return value.gte(minSafeF64) && value.lte(maxSafeF64);
};

global.i64_to_f32 = function(value) {
  return global.Math.fround(value.toNumber());
};

global.i64_to_f64 = function(value) {
  return value.toNumber();
};

global.i64_to_string = function(value, unsigned) {
  return (unsigned ? value.toUnsigned() : value).toString(10);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/assemblyscript/src/tokenizer.ts":
/*!******************************************************!*\
  !*** ./node_modules/assemblyscript/src/tokenizer.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A TypeScript tokenizer modified for AssemblyScript.
 *
 * Skips over trivia and provides a general mark/reset mechanism for the parser to utilize on
 * ambiguous tokens.
 *
 * @module tokenizer
 */ /***/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var diagnostics_1 = __webpack_require__(/*! ./diagnostics */ "./node_modules/assemblyscript/src/diagnostics.ts");
var ast_1 = __webpack_require__(/*! ./ast */ "./node_modules/assemblyscript/src/ast.ts");
var util_1 = __webpack_require__(/*! ./util */ "./node_modules/assemblyscript/src/util/index.ts");
/** Named token types. */
var Token;
(function (Token) {
    // keywords
    // discarded: ANY, BOOLEAN, NEVER, NUMBER, STRING, SYMBOL, UNDEFINED, LESSTHAN_SLASH
    Token[Token["ABSTRACT"] = 0] = "ABSTRACT";
    Token[Token["AS"] = 1] = "AS";
    Token[Token["ASYNC"] = 2] = "ASYNC";
    Token[Token["AWAIT"] = 3] = "AWAIT";
    Token[Token["BREAK"] = 4] = "BREAK";
    Token[Token["CASE"] = 5] = "CASE";
    Token[Token["CATCH"] = 6] = "CATCH";
    Token[Token["CLASS"] = 7] = "CLASS";
    Token[Token["CONST"] = 8] = "CONST";
    Token[Token["CONTINUE"] = 9] = "CONTINUE";
    Token[Token["CONSTRUCTOR"] = 10] = "CONSTRUCTOR";
    Token[Token["DEBUGGER"] = 11] = "DEBUGGER";
    Token[Token["DECLARE"] = 12] = "DECLARE";
    Token[Token["DEFAULT"] = 13] = "DEFAULT";
    Token[Token["DELETE"] = 14] = "DELETE";
    Token[Token["DO"] = 15] = "DO";
    Token[Token["ELSE"] = 16] = "ELSE";
    Token[Token["ENUM"] = 17] = "ENUM";
    Token[Token["EXPORT"] = 18] = "EXPORT";
    Token[Token["EXTENDS"] = 19] = "EXTENDS";
    Token[Token["FALSE"] = 20] = "FALSE";
    Token[Token["FINALLY"] = 21] = "FINALLY";
    Token[Token["FOR"] = 22] = "FOR";
    Token[Token["FROM"] = 23] = "FROM";
    Token[Token["FUNCTION"] = 24] = "FUNCTION";
    Token[Token["GET"] = 25] = "GET";
    Token[Token["IF"] = 26] = "IF";
    Token[Token["IMPLEMENTS"] = 27] = "IMPLEMENTS";
    Token[Token["IMPORT"] = 28] = "IMPORT";
    Token[Token["IN"] = 29] = "IN";
    Token[Token["INSTANCEOF"] = 30] = "INSTANCEOF";
    Token[Token["INTERFACE"] = 31] = "INTERFACE";
    Token[Token["IS"] = 32] = "IS";
    Token[Token["KEYOF"] = 33] = "KEYOF";
    Token[Token["LET"] = 34] = "LET";
    Token[Token["MODULE"] = 35] = "MODULE";
    Token[Token["NAMESPACE"] = 36] = "NAMESPACE";
    Token[Token["NEW"] = 37] = "NEW";
    Token[Token["NULL"] = 38] = "NULL";
    Token[Token["OF"] = 39] = "OF";
    Token[Token["PACKAGE"] = 40] = "PACKAGE";
    Token[Token["PRIVATE"] = 41] = "PRIVATE";
    Token[Token["PROTECTED"] = 42] = "PROTECTED";
    Token[Token["PUBLIC"] = 43] = "PUBLIC";
    Token[Token["READONLY"] = 44] = "READONLY";
    Token[Token["RETURN"] = 45] = "RETURN";
    Token[Token["SET"] = 46] = "SET";
    Token[Token["STATIC"] = 47] = "STATIC";
    Token[Token["SUPER"] = 48] = "SUPER";
    Token[Token["SWITCH"] = 49] = "SWITCH";
    Token[Token["THIS"] = 50] = "THIS";
    Token[Token["THROW"] = 51] = "THROW";
    Token[Token["TRUE"] = 52] = "TRUE";
    Token[Token["TRY"] = 53] = "TRY";
    Token[Token["TYPE"] = 54] = "TYPE";
    Token[Token["TYPEOF"] = 55] = "TYPEOF";
    Token[Token["VAR"] = 56] = "VAR";
    Token[Token["VOID"] = 57] = "VOID";
    Token[Token["WHILE"] = 58] = "WHILE";
    Token[Token["WITH"] = 59] = "WITH";
    Token[Token["YIELD"] = 60] = "YIELD";
    // punctuation
    Token[Token["OPENBRACE"] = 61] = "OPENBRACE";
    Token[Token["CLOSEBRACE"] = 62] = "CLOSEBRACE";
    Token[Token["OPENPAREN"] = 63] = "OPENPAREN";
    Token[Token["CLOSEPAREN"] = 64] = "CLOSEPAREN";
    Token[Token["OPENBRACKET"] = 65] = "OPENBRACKET";
    Token[Token["CLOSEBRACKET"] = 66] = "CLOSEBRACKET";
    Token[Token["DOT"] = 67] = "DOT";
    Token[Token["DOT_DOT_DOT"] = 68] = "DOT_DOT_DOT";
    Token[Token["SEMICOLON"] = 69] = "SEMICOLON";
    Token[Token["COMMA"] = 70] = "COMMA";
    Token[Token["LESSTHAN"] = 71] = "LESSTHAN";
    Token[Token["GREATERTHAN"] = 72] = "GREATERTHAN";
    Token[Token["LESSTHAN_EQUALS"] = 73] = "LESSTHAN_EQUALS";
    Token[Token["GREATERTHAN_EQUALS"] = 74] = "GREATERTHAN_EQUALS";
    Token[Token["EQUALS_EQUALS"] = 75] = "EQUALS_EQUALS";
    Token[Token["EXCLAMATION_EQUALS"] = 76] = "EXCLAMATION_EQUALS";
    Token[Token["EQUALS_EQUALS_EQUALS"] = 77] = "EQUALS_EQUALS_EQUALS";
    Token[Token["EXCLAMATION_EQUALS_EQUALS"] = 78] = "EXCLAMATION_EQUALS_EQUALS";
    Token[Token["EQUALS_GREATERTHAN"] = 79] = "EQUALS_GREATERTHAN";
    Token[Token["PLUS"] = 80] = "PLUS";
    Token[Token["MINUS"] = 81] = "MINUS";
    Token[Token["ASTERISK_ASTERISK"] = 82] = "ASTERISK_ASTERISK";
    Token[Token["ASTERISK"] = 83] = "ASTERISK";
    Token[Token["SLASH"] = 84] = "SLASH";
    Token[Token["PERCENT"] = 85] = "PERCENT";
    Token[Token["PLUS_PLUS"] = 86] = "PLUS_PLUS";
    Token[Token["MINUS_MINUS"] = 87] = "MINUS_MINUS";
    Token[Token["LESSTHAN_LESSTHAN"] = 88] = "LESSTHAN_LESSTHAN";
    Token[Token["GREATERTHAN_GREATERTHAN"] = 89] = "GREATERTHAN_GREATERTHAN";
    Token[Token["GREATERTHAN_GREATERTHAN_GREATERTHAN"] = 90] = "GREATERTHAN_GREATERTHAN_GREATERTHAN";
    Token[Token["AMPERSAND"] = 91] = "AMPERSAND";
    Token[Token["BAR"] = 92] = "BAR";
    Token[Token["CARET"] = 93] = "CARET";
    Token[Token["EXCLAMATION"] = 94] = "EXCLAMATION";
    Token[Token["TILDE"] = 95] = "TILDE";
    Token[Token["AMPERSAND_AMPERSAND"] = 96] = "AMPERSAND_AMPERSAND";
    Token[Token["BAR_BAR"] = 97] = "BAR_BAR";
    Token[Token["QUESTION"] = 98] = "QUESTION";
    Token[Token["COLON"] = 99] = "COLON";
    Token[Token["EQUALS"] = 100] = "EQUALS";
    Token[Token["PLUS_EQUALS"] = 101] = "PLUS_EQUALS";
    Token[Token["MINUS_EQUALS"] = 102] = "MINUS_EQUALS";
    Token[Token["ASTERISK_EQUALS"] = 103] = "ASTERISK_EQUALS";
    Token[Token["ASTERISK_ASTERISK_EQUALS"] = 104] = "ASTERISK_ASTERISK_EQUALS";
    Token[Token["SLASH_EQUALS"] = 105] = "SLASH_EQUALS";
    Token[Token["PERCENT_EQUALS"] = 106] = "PERCENT_EQUALS";
    Token[Token["LESSTHAN_LESSTHAN_EQUALS"] = 107] = "LESSTHAN_LESSTHAN_EQUALS";
    Token[Token["GREATERTHAN_GREATERTHAN_EQUALS"] = 108] = "GREATERTHAN_GREATERTHAN_EQUALS";
    Token[Token["GREATERTHAN_GREATERTHAN_GREATERTHAN_EQUALS"] = 109] = "GREATERTHAN_GREATERTHAN_GREATERTHAN_EQUALS";
    Token[Token["AMPERSAND_EQUALS"] = 110] = "AMPERSAND_EQUALS";
    Token[Token["BAR_EQUALS"] = 111] = "BAR_EQUALS";
    Token[Token["CARET_EQUALS"] = 112] = "CARET_EQUALS";
    Token[Token["AT"] = 113] = "AT";
    // literals
    Token[Token["IDENTIFIER"] = 114] = "IDENTIFIER";
    Token[Token["STRINGLITERAL"] = 115] = "STRINGLITERAL";
    Token[Token["INTEGERLITERAL"] = 116] = "INTEGERLITERAL";
    Token[Token["FLOATLITERAL"] = 117] = "FLOATLITERAL";
    // meta
    Token[Token["INVALID"] = 118] = "INVALID";
    Token[Token["ENDOFFILE"] = 119] = "ENDOFFILE";
})(Token = exports.Token || (exports.Token = {}));
var IdentifierHandling;
(function (IdentifierHandling) {
    IdentifierHandling[IdentifierHandling["DEFAULT"] = 0] = "DEFAULT";
    IdentifierHandling[IdentifierHandling["PREFER"] = 1] = "PREFER";
    IdentifierHandling[IdentifierHandling["ALWAYS"] = 2] = "ALWAYS";
})(IdentifierHandling = exports.IdentifierHandling || (exports.IdentifierHandling = {}));
function tokenFromKeyword(text) {
    assert(text.length);
    switch (text.charCodeAt(0)) {
        case 97 /* a */: {
            switch (text) {
                case "abstract": return Token.ABSTRACT;
                case "as": return Token.AS;
                case "async": return Token.ASYNC;
                case "await": return Token.AWAIT;
            }
            break;
        }
        case 98 /* b */: {
            switch (text) {
                case "break": return Token.BREAK;
            }
            break;
        }
        case 99 /* c */: {
            switch (text) {
                case "case": return Token.CASE;
                case "catch": return Token.CATCH;
                case "class": return Token.CLASS;
                case "continue": return Token.CONTINUE;
                case "const": return Token.CONST;
                case "constructor": return Token.CONSTRUCTOR;
            }
            break;
        }
        case 100 /* d */: {
            switch (text) {
                case "debugger": return Token.DEBUGGER;
                case "declare": return Token.DECLARE;
                case "default": return Token.DEFAULT;
                case "delete": return Token.DELETE;
                case "do": return Token.DO;
            }
            break;
        }
        case 101 /* e */: {
            switch (text) {
                case "else": return Token.ELSE;
                case "enum": return Token.ENUM;
                case "export": return Token.EXPORT;
                case "extends": return Token.EXTENDS;
            }
            break;
        }
        case 102 /* f */: {
            switch (text) {
                case "false": return Token.FALSE;
                case "finally": return Token.FINALLY;
                case "for": return Token.FOR;
                case "from": return Token.FROM;
                case "function": return Token.FUNCTION;
            }
            break;
        }
        case 103 /* g */: {
            switch (text) {
                case "get": return Token.GET;
            }
            break;
        }
        case 105 /* i */: {
            switch (text) {
                case "if": return Token.IF;
                case "implements": return Token.IMPLEMENTS;
                case "import": return Token.IMPORT;
                case "in": return Token.IN;
                case "instanceof": return Token.INSTANCEOF;
                case "interface": return Token.INTERFACE;
                case "is": return Token.IS;
            }
            break;
        }
        case 107 /* k */: {
            switch (text) {
                case "keyof": return Token.KEYOF;
            }
            break;
        }
        case 108 /* l */: {
            switch (text) {
                case "let": return Token.LET;
            }
            break;
        }
        case 109 /* m */: {
            switch (text) {
                case "module": return Token.MODULE;
            }
            break;
        }
        case 110 /* n */: {
            switch (text) {
                case "namespace": return Token.NAMESPACE;
                case "new": return Token.NEW;
                case "null": return Token.NULL;
            }
            break;
        }
        case 111 /* o */: {
            switch (text) {
                case "of": return Token.OF;
            }
            break;
        }
        case 112 /* p */: {
            switch (text) {
                case "package": return Token.PACKAGE;
                case "private": return Token.PRIVATE;
                case "protected": return Token.PROTECTED;
                case "public": return Token.PUBLIC;
            }
            break;
        }
        case 114 /* r */: {
            switch (text) {
                case "readonly": return Token.READONLY;
                case "return": return Token.RETURN;
            }
            break;
        }
        case 115 /* s */: {
            switch (text) {
                case "set": return Token.SET;
                case "static": return Token.STATIC;
                case "super": return Token.SUPER;
                case "switch": return Token.SWITCH;
            }
            break;
        }
        case 116 /* t */: {
            switch (text) {
                case "this": return Token.THIS;
                case "throw": return Token.THROW;
                case "true": return Token.TRUE;
                case "try": return Token.TRY;
                case "type": return Token.TYPE;
                case "typeof": return Token.TYPEOF;
            }
            break;
        }
        case 118 /* v */: {
            switch (text) {
                case "var": return Token.VAR;
                case "void": return Token.VOID;
            }
            break;
        }
        case 119 /* w */: {
            switch (text) {
                case "while": return Token.WHILE;
                case "with": return Token.WITH;
            }
            break;
        }
        case 121 /* y */: {
            switch (text) {
                case "yield": return Token.YIELD;
            }
            break;
        }
    }
    return Token.INVALID;
}
exports.tokenFromKeyword = tokenFromKeyword;
function tokenIsAlsoIdentifier(token) {
    switch (token) {
        case Token.ABSTRACT:
        case Token.AS:
        case Token.CONSTRUCTOR:
        case Token.DECLARE:
        case Token.DELETE:
        case Token.FROM:
        case Token.FOR:
        case Token.GET:
        case Token.INSTANCEOF:
        case Token.IS:
        case Token.KEYOF:
        case Token.MODULE:
        case Token.NAMESPACE:
        case Token.NULL:
        case Token.READONLY:
        case Token.SET:
        case Token.TYPE:
        case Token.VOID: return true;
        default: return false;
    }
}
exports.tokenIsAlsoIdentifier = tokenIsAlsoIdentifier;
function isIllegalVariableIdentifier(name) {
    assert(name.length);
    switch (name.charCodeAt(0)) {
        case 100 /* d */: return name == "delete";
        case 102 /* f */: return name == "for";
        case 105 /* i */: return name == "instanceof";
        case 110 /* n */: return name == "null";
        case 118 /* v */: return name == "void";
    }
    return false;
}
exports.isIllegalVariableIdentifier = isIllegalVariableIdentifier;
function operatorTokenToString(token) {
    switch (token) {
        case Token.DELETE: return "delete";
        case Token.IN: return "in";
        case Token.INSTANCEOF: return "instanceof";
        case Token.NEW: return "new";
        case Token.TYPEOF: return "typeof";
        case Token.VOID: return "void";
        case Token.YIELD: return "yield";
        case Token.DOT_DOT_DOT: return "...";
        case Token.COMMA: return ",";
        case Token.LESSTHAN: return "<";
        case Token.GREATERTHAN: return ">";
        case Token.LESSTHAN_EQUALS: return "<=";
        case Token.GREATERTHAN_EQUALS: return ">=";
        case Token.EQUALS_EQUALS: return "==";
        case Token.EXCLAMATION_EQUALS: return "!=";
        case Token.EQUALS_EQUALS_EQUALS: return "===";
        case Token.EXCLAMATION_EQUALS_EQUALS: return "!==";
        case Token.PLUS: return "+";
        case Token.MINUS: return "-";
        case Token.ASTERISK_ASTERISK: return "**";
        case Token.ASTERISK: return "*";
        case Token.SLASH: return "/";
        case Token.PERCENT: return "%";
        case Token.PLUS_PLUS: return "++";
        case Token.MINUS_MINUS: return "--";
        case Token.LESSTHAN_LESSTHAN: return "<<";
        case Token.GREATERTHAN_GREATERTHAN: return ">>";
        case Token.GREATERTHAN_GREATERTHAN_GREATERTHAN: return ">>>";
        case Token.AMPERSAND: return "&";
        case Token.BAR: return "|";
        case Token.CARET: return "^";
        case Token.EXCLAMATION: return "!";
        case Token.TILDE: return "~";
        case Token.AMPERSAND_AMPERSAND: return "&&";
        case Token.BAR_BAR: return "||";
        case Token.EQUALS: return "=";
        case Token.PLUS_EQUALS: return "+=";
        case Token.MINUS_EQUALS: return "-=";
        case Token.ASTERISK_EQUALS: return "*=";
        case Token.ASTERISK_ASTERISK_EQUALS: return "**=";
        case Token.SLASH_EQUALS: return "/=";
        case Token.PERCENT_EQUALS: return "%=";
        case Token.LESSTHAN_LESSTHAN_EQUALS: return "<<=";
        case Token.GREATERTHAN_GREATERTHAN_EQUALS: return ">>=";
        case Token.GREATERTHAN_GREATERTHAN_GREATERTHAN_EQUALS: return ">>>=";
        case Token.AMPERSAND_EQUALS: return "&=";
        case Token.BAR_EQUALS: return "|=";
        case Token.CARET_EQUALS: return "^=";
        default: {
            assert(false);
            return "";
        }
    }
}
exports.operatorTokenToString = operatorTokenToString;
var Range = /** @class */ (function () {
    // TODO: set these while tokenizing
    // line: i32;
    // column: i32;
    function Range(source, start, end) {
        this.debugInfoRef = 0;
        this.source = source;
        this.start = start;
        this.end = end;
    }
    Range.join = function (a, b) {
        if (a.source != b.source)
            throw new Error("source mismatch");
        return new Range(a.source, a.start < b.start ? a.start : b.start, a.end > b.end ? a.end : b.end);
    };
    Object.defineProperty(Range.prototype, "atStart", {
        get: function () {
            return new Range(this.source, this.start, this.start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "atEnd", {
        get: function () {
            return new Range(this.source, this.end, this.end);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "line", {
        get: function () {
            var text = this.source.text;
            var line = 1;
            for (var pos = this.start; pos >= 0; --pos) {
                if (text.charCodeAt(pos) == 10 /* LINEFEED */)
                    line++;
            }
            return line;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "column", {
        get: function () {
            var text = this.source.text;
            var column = 0;
            for (var pos = this.start - 1; pos >= 0; --pos) {
                if (text.charCodeAt(pos) == 10 /* LINEFEED */)
                    break;
                ++column;
            }
            return column;
        },
        enumerable: true,
        configurable: true
    });
    Range.prototype.toString = function () {
        return this.source.text.substring(this.start, this.end);
    };
    return Range;
}());
exports.Range = Range;
/** Tokenizes a source to individual {@link Token}s. */
var Tokenizer = /** @class */ (function (_super) {
    __extends(Tokenizer, _super);
    /** Constructs a new tokenizer. */
    function Tokenizer(source, diagnostics) {
        if (diagnostics === void 0) { diagnostics = null; }
        var _this = _super.call(this, diagnostics) || this;
        _this.end = 0;
        _this.pos = 0;
        _this.token = -1;
        _this.tokenPos = 0;
        _this.nextToken = -1;
        _this.nextTokenPos = 0;
        _this.nextTokenOnNewLine = false;
        _this.onComment = null;
        _this.source = source;
        _this.pos = 0;
        _this.end = source.text.length;
        _this.diagnostics = diagnostics || new Array();
        var end = _this.end;
        var text = source.text;
        // skip bom
        if (_this.pos < end &&
            text.charCodeAt(_this.pos) == 65279 /* BYTEORDERMARK */) {
            ++_this.pos;
        }
        // skip shebang
        if (_this.pos + 1 < end &&
            text.charCodeAt(_this.pos) == 35 /* HASH */ &&
            text.charCodeAt(_this.pos + 1) == 33 /* EXCLAMATION */) {
            _this.pos += 2;
            while (_this.pos < end &&
                text.charCodeAt(_this.pos) != 10 /* LINEFEED */) {
                ++_this.pos;
            }
            // 'next' now starts at lf or eof
        }
        return _this;
    }
    Tokenizer.prototype.next = function (identifierHandling) {
        if (identifierHandling === void 0) { identifierHandling = IdentifierHandling.DEFAULT; }
        this.nextToken = -1;
        return this.token = this.unsafeNext(identifierHandling);
    };
    Tokenizer.prototype.unsafeNext = function (identifierHandling, maxTokenLength) {
        if (identifierHandling === void 0) { identifierHandling = IdentifierHandling.DEFAULT; }
        if (maxTokenLength === void 0) { maxTokenLength = i32.MAX_VALUE; }
        var end = this.end;
        var text = this.source.text;
        while (this.pos < end) {
            this.tokenPos = this.pos;
            var c = text.charCodeAt(this.pos);
            switch (c) {
                case 13 /* CARRIAGERETURN */: {
                    if (!(++this.pos < end &&
                        text.charCodeAt(this.pos) == 10 /* LINEFEED */))
                        break;
                    // otherwise fall-through
                }
                case 10 /* LINEFEED */:
                case 9 /* TAB */:
                case 11 /* VERTICALTAB */:
                case 12 /* FORMFEED */:
                case 32 /* SPACE */: {
                    ++this.pos;
                    break;
                }
                case 33 /* EXCLAMATION */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end &&
                        text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                        ++this.pos;
                        if (maxTokenLength > 2 && this.pos < end &&
                            text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.EXCLAMATION_EQUALS_EQUALS;
                        }
                        return Token.EXCLAMATION_EQUALS;
                    }
                    return Token.EXCLAMATION;
                }
                case 34 /* DOUBLEQUOTE */:
                case 39 /* SINGLEQUOTE */:
                case 96 /* BACKTICK */: { // TODO
                    return Token.STRINGLITERAL; // expects a call to readString
                }
                case 37 /* PERCENT */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end &&
                        text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                        ++this.pos;
                        return Token.PERCENT_EQUALS;
                    }
                    return Token.PERCENT;
                }
                case 38 /* AMPERSAND */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 38 /* AMPERSAND */) {
                            ++this.pos;
                            return Token.AMPERSAND_AMPERSAND;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.AMPERSAND_EQUALS;
                        }
                    }
                    return Token.AMPERSAND;
                }
                case 40 /* OPENPAREN */: {
                    ++this.pos;
                    return Token.OPENPAREN;
                }
                case 41 /* CLOSEPAREN */: {
                    ++this.pos;
                    return Token.CLOSEPAREN;
                }
                case 42 /* ASTERISK */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.ASTERISK_EQUALS;
                        }
                        if (chr == 42 /* ASTERISK */) {
                            ++this.pos;
                            if (maxTokenLength > 2 && this.pos < end &&
                                text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                                ++this.pos;
                                return Token.ASTERISK_ASTERISK_EQUALS;
                            }
                            return Token.ASTERISK_ASTERISK;
                        }
                    }
                    return Token.ASTERISK;
                }
                case 43 /* PLUS */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 43 /* PLUS */) {
                            ++this.pos;
                            return Token.PLUS_PLUS;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.PLUS_EQUALS;
                        }
                    }
                    return Token.PLUS;
                }
                case 44 /* COMMA */: {
                    ++this.pos;
                    return Token.COMMA;
                }
                case 45 /* MINUS */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 45 /* MINUS */) {
                            ++this.pos;
                            return Token.MINUS_MINUS;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.MINUS_EQUALS;
                        }
                    }
                    return Token.MINUS;
                }
                case 46 /* DOT */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (util_1.isDecimalDigit(chr)) {
                            --this.pos;
                            return Token.FLOATLITERAL; // expects a call to readFloat
                        }
                        if (maxTokenLength > 2 && this.pos + 1 < end &&
                            chr == 46 /* DOT */ &&
                            text.charCodeAt(this.pos + 1) == 46 /* DOT */) {
                            this.pos += 2;
                            return Token.DOT_DOT_DOT;
                        }
                    }
                    return Token.DOT;
                }
                case 47 /* SLASH */: {
                    var commentStartPos = this.pos;
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 47 /* SLASH */) { // single-line
                            var commentKind = ast_1.CommentKind.LINE;
                            if (this.pos + 1 < end &&
                                text.charCodeAt(this.pos + 1) == 47 /* SLASH */) {
                                ++this.pos;
                                commentKind = ast_1.CommentKind.TRIPLE;
                            }
                            while (++this.pos < end) {
                                if (text.charCodeAt(this.pos) == 10 /* LINEFEED */) {
                                    ++this.pos;
                                    break;
                                }
                            }
                            if (this.onComment) {
                                this.onComment(commentKind, text.substring(commentStartPos, this.pos), this.range(commentStartPos, this.pos));
                            }
                            break;
                        }
                        if (chr == 42 /* ASTERISK */) { // multi-line
                            var closed = false;
                            while (++this.pos < end) {
                                c = text.charCodeAt(this.pos);
                                if (c == 42 /* ASTERISK */ &&
                                    this.pos + 1 < end &&
                                    text.charCodeAt(this.pos + 1) == 47 /* SLASH */) {
                                    this.pos += 2;
                                    closed = true;
                                    break;
                                }
                            }
                            if (!closed) {
                                this.error(diagnostics_1.DiagnosticCode._0_expected, this.range(this.pos), "*/");
                            }
                            else if (this.onComment) {
                                this.onComment(ast_1.CommentKind.BLOCK, text.substring(commentStartPos, this.pos), this.range(commentStartPos, this.pos));
                            }
                            break;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.SLASH_EQUALS;
                        }
                    }
                    return Token.SLASH;
                }
                case 48 /* _0 */:
                case 49 /* _1 */:
                case 50 /* _2 */:
                case 51 /* _3 */:
                case 52 /* _4 */:
                case 53 /* _5 */:
                case 54 /* _6 */:
                case 55 /* _7 */:
                case 56 /* _8 */:
                case 57 /* _9 */: {
                    return this.testInteger()
                        ? Token.INTEGERLITERAL // expects a call to readInteger
                        : Token.FLOATLITERAL; // expects a call to readFloat
                }
                case 58 /* COLON */: {
                    ++this.pos;
                    return Token.COLON;
                }
                case 59 /* SEMICOLON */: {
                    ++this.pos;
                    return Token.SEMICOLON;
                }
                case 60 /* LESSTHAN */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 60 /* LESSTHAN */) {
                            ++this.pos;
                            if (maxTokenLength > 2 &&
                                this.pos < end &&
                                text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                                ++this.pos;
                                return Token.LESSTHAN_LESSTHAN_EQUALS;
                            }
                            return Token.LESSTHAN_LESSTHAN;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.LESSTHAN_EQUALS;
                        }
                    }
                    return Token.LESSTHAN;
                }
                case 61 /* EQUALS */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            if (maxTokenLength > 2 &&
                                this.pos < end &&
                                text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                                ++this.pos;
                                return Token.EQUALS_EQUALS_EQUALS;
                            }
                            return Token.EQUALS_EQUALS;
                        }
                        if (chr == 62 /* GREATERTHAN */) {
                            ++this.pos;
                            return Token.EQUALS_GREATERTHAN;
                        }
                    }
                    return Token.EQUALS;
                }
                case 62 /* GREATERTHAN */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 62 /* GREATERTHAN */) {
                            ++this.pos;
                            if (maxTokenLength > 2 && this.pos < end) {
                                chr = text.charCodeAt(this.pos);
                                if (chr == 62 /* GREATERTHAN */) {
                                    ++this.pos;
                                    if (maxTokenLength > 3 && this.pos < end &&
                                        text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                                        ++this.pos;
                                        return Token.GREATERTHAN_GREATERTHAN_GREATERTHAN_EQUALS;
                                    }
                                    return Token.GREATERTHAN_GREATERTHAN_GREATERTHAN;
                                }
                                if (chr == 61 /* EQUALS */) {
                                    ++this.pos;
                                    return Token.GREATERTHAN_GREATERTHAN_EQUALS;
                                }
                            }
                            return Token.GREATERTHAN_GREATERTHAN;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.GREATERTHAN_EQUALS;
                        }
                    }
                    return Token.GREATERTHAN;
                }
                case 63 /* QUESTION */: {
                    ++this.pos;
                    return Token.QUESTION;
                }
                case 91 /* OPENBRACKET */: {
                    ++this.pos;
                    return Token.OPENBRACKET;
                }
                case 93 /* CLOSEBRACKET */: {
                    ++this.pos;
                    return Token.CLOSEBRACKET;
                }
                case 94 /* CARET */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end &&
                        text.charCodeAt(this.pos) == 61 /* EQUALS */) {
                        ++this.pos;
                        return Token.CARET_EQUALS;
                    }
                    return Token.CARET;
                }
                case 123 /* OPENBRACE */: {
                    ++this.pos;
                    return Token.OPENBRACE;
                }
                case 124 /* BAR */: {
                    ++this.pos;
                    if (maxTokenLength > 1 && this.pos < end) {
                        var chr = text.charCodeAt(this.pos);
                        if (chr == 124 /* BAR */) {
                            ++this.pos;
                            return Token.BAR_BAR;
                        }
                        if (chr == 61 /* EQUALS */) {
                            ++this.pos;
                            return Token.BAR_EQUALS;
                        }
                    }
                    return Token.BAR;
                }
                case 125 /* CLOSEBRACE */: {
                    ++this.pos;
                    return Token.CLOSEBRACE;
                }
                case 126 /* TILDE */: {
                    ++this.pos;
                    return Token.TILDE;
                }
                case 64 /* AT */: {
                    ++this.pos;
                    return Token.AT;
                }
                default: {
                    if (util_1.isIdentifierStart(c)) {
                        if (util_1.isKeywordCharacter(c)) {
                            var posBefore = this.pos;
                            while (++this.pos < end &&
                                util_1.isIdentifierPart(c = text.charCodeAt(this.pos))) {
                                if (!util_1.isKeywordCharacter(c)) {
                                    this.pos = posBefore;
                                    return Token.IDENTIFIER;
                                }
                            }
                            var keywordText = text.substring(posBefore, this.pos);
                            var keywordToken = tokenFromKeyword(keywordText);
                            if (keywordToken !== Token.INVALID &&
                                identifierHandling !== IdentifierHandling.ALWAYS &&
                                !(identifierHandling === IdentifierHandling.PREFER &&
                                    tokenIsAlsoIdentifier(keywordToken))) {
                                return keywordToken;
                            }
                            this.pos = posBefore;
                        }
                        return Token.IDENTIFIER; // expects a call to readIdentifier
                    }
                    else if (util_1.isWhiteSpace(c)) {
                        ++this.pos;
                        break;
                    }
                    this.error(diagnostics_1.DiagnosticCode.Invalid_character, this.range(this.pos, this.pos + 1));
                    ++this.pos;
                    return Token.INVALID;
                }
            }
        }
        return Token.ENDOFFILE;
    };
    Tokenizer.prototype.peek = function (checkOnNewLine, identifierHandling, maxCompoundLength) {
        if (checkOnNewLine === void 0) { checkOnNewLine = false; }
        if (identifierHandling === void 0) { identifierHandling = IdentifierHandling.DEFAULT; }
        if (maxCompoundLength === void 0) { maxCompoundLength = i32.MAX_VALUE; }
        var text = this.source.text;
        if (this.nextToken < 0) {
            var posBefore = this.pos;
            var tokenBefore = this.token;
            var tokenPosBefore = this.tokenPos;
            this.nextToken = this.unsafeNext(identifierHandling, maxCompoundLength);
            this.nextTokenPos = this.tokenPos;
            if (checkOnNewLine) {
                this.nextTokenOnNewLine = false;
                for (var pos = posBefore, end = this.nextTokenPos; pos < end; ++pos) {
                    if (util_1.isLineBreak(text.charCodeAt(pos))) {
                        this.nextTokenOnNewLine = true;
                        break;
                    }
                }
            }
            this.pos = posBefore;
            this.token = tokenBefore;
            this.tokenPos = tokenPosBefore;
        }
        return this.nextToken;
    };
    Tokenizer.prototype.skipIdentifier = function (identifierHandling) {
        if (identifierHandling === void 0) { identifierHandling = IdentifierHandling.PREFER; }
        return this.skip(Token.IDENTIFIER, identifierHandling);
    };
    Tokenizer.prototype.skip = function (token, identifierHandling) {
        if (identifierHandling === void 0) { identifierHandling = IdentifierHandling.DEFAULT; }
        var posBefore = this.pos;
        var tokenBefore = this.token;
        var tokenPosBefore = this.tokenPos;
        var maxCompoundLength = i32.MAX_VALUE;
        switch (token) {
            case Token.GREATERTHAN: { // where parsing type arguments
                maxCompoundLength = 1;
                break;
            }
        }
        this.token = this.unsafeNext(identifierHandling, maxCompoundLength);
        if (this.token == token) {
            this.nextToken = -1;
            return true;
        }
        else {
            this.pos = posBefore;
            this.token = tokenBefore;
            this.tokenPos = tokenPosBefore;
            return false;
        }
    };
    Tokenizer.prototype.mark = function () {
        var state;
        if (reusableState) {
            state = reusableState;
            reusableState = null;
        }
        else {
            state = new State();
        }
        state.pos = this.pos;
        state.token = this.token;
        state.tokenPos = this.tokenPos;
        return state;
    };
    Tokenizer.prototype.discard = function (state) {
        reusableState = state;
    };
    Tokenizer.prototype.reset = function (state) {
        this.pos = state.pos;
        this.token = state.token;
        this.tokenPos = state.tokenPos;
        this.nextToken = -1;
    };
    Tokenizer.prototype.range = function (start, end) {
        if (start === void 0) { start = -1; }
        if (end === void 0) { end = -1; }
        if (start < 0) {
            start = this.tokenPos;
            end = this.pos;
        }
        else if (end < 0) {
            end = start;
        }
        return new Range(this.source, start, end);
    };
    Tokenizer.prototype.readIdentifier = function () {
        var text = this.source.text;
        var start = this.pos;
        var end = this.end;
        while (++this.pos < end &&
            util_1.isIdentifierPart(text.charCodeAt(this.pos)))
            ;
        return text.substring(start, this.pos);
    };
    Tokenizer.prototype.readString = function () {
        var text = this.source.text;
        var quote = text.charCodeAt(this.pos++);
        var start = this.pos;
        var end = this.end;
        var result = "";
        while (true) {
            if (this.pos >= end) {
                result += text.substring(start, this.pos);
                this.error(diagnostics_1.DiagnosticCode.Unterminated_string_literal, this.range(start - 1, end));
                break;
            }
            var c = text.charCodeAt(this.pos);
            if (c == quote) {
                result += text.substring(start, this.pos++);
                break;
            }
            if (c == 92 /* BACKSLASH */) {
                result += text.substring(start, this.pos);
                result += this.readEscapeSequence();
                start = this.pos;
                continue;
            }
            if (util_1.isLineBreak(c) && quote != 96 /* BACKTICK */) {
                result += text.substring(start, this.pos);
                this.error(diagnostics_1.DiagnosticCode.Unterminated_string_literal, this.range(start - 1, this.pos));
                break;
            }
            ++this.pos;
        }
        return result;
    };
    Tokenizer.prototype.readEscapeSequence = function () {
        var end = this.end;
        if (++this.pos >= end) {
            this.error(diagnostics_1.DiagnosticCode.Unexpected_end_of_text, this.range(end));
            return "";
        }
        var text = this.source.text;
        var c = text.charCodeAt(this.pos++);
        switch (c) {
            case 48 /* _0 */: return "\0";
            case 98 /* b */: return "\b";
            case 116 /* t */: return "\t";
            case 110 /* n */: return "\n";
            case 118 /* v */: return "\v";
            case 102 /* f */: return "\f";
            case 114 /* r */: return "\r";
            case 39 /* SINGLEQUOTE */: return "'";
            case 34 /* DOUBLEQUOTE */: return "\"";
            case 117 /* u */: {
                if (this.pos < end &&
                    text.charCodeAt(this.pos) == 123 /* OPENBRACE */) {
                    ++this.pos;
                    return this.readExtendedUnicodeEscape(); // \u{DDDDDDDD}
                }
                return this.readUnicodeEscape(); // \uDDDD
            }
            case 13 /* CARRIAGERETURN */: {
                if (this.pos < end &&
                    text.charCodeAt(this.pos) == 10 /* LINEFEED */) {
                    ++this.pos;
                }
                // fall through
            }
            case 10 /* LINEFEED */:
            case 8232 /* LINESEPARATOR */:
            case 8233 /* PARAGRAPHSEPARATOR */: return "";
            default: return String.fromCharCode(c);
        }
    };
    Tokenizer.prototype.readRegexpPattern = function () {
        var text = this.source.text;
        var start = this.pos;
        var end = this.end;
        var escaped = false;
        while (true) {
            if (this.pos >= end) {
                this.error(diagnostics_1.DiagnosticCode.Unterminated_regular_expression_literal, this.range(start, end));
                break;
            }
            if (text.charCodeAt(this.pos) == 92 /* BACKSLASH */) {
                ++this.pos;
                escaped = true;
                continue;
            }
            var c = text.charCodeAt(this.pos);
            if (!escaped && c == 47 /* SLASH */)
                break;
            if (util_1.isLineBreak(c)) {
                this.error(diagnostics_1.DiagnosticCode.Unterminated_regular_expression_literal, this.range(start, this.pos));
                break;
            }
            ++this.pos;
            escaped = false;
        }
        return text.substring(start, this.pos);
    };
    Tokenizer.prototype.readRegexpFlags = function () {
        var text = this.source.text;
        var start = this.pos;
        var end = this.end;
        var flags = 0;
        while (this.pos < end) {
            var c = text.charCodeAt(this.pos);
            if (!util_1.isIdentifierPart(c))
                break;
            ++this.pos;
            // make sure each supported flag is unique
            switch (c) {
                case 103 /* g */: {
                    flags |= flags & 1 ? -1 : 1;
                    break;
                }
                case 105 /* i */: {
                    flags |= flags & 2 ? -1 : 2;
                    break;
                }
                case 109 /* m */: {
                    flags |= flags & 4 ? -1 : 4;
                    break;
                }
                default: {
                    flags = -1;
                    break;
                }
            }
        }
        if (flags == -1) {
            this.error(diagnostics_1.DiagnosticCode.Invalid_regular_expression_flags, this.range(start, this.pos));
        }
        return text.substring(start, this.pos);
    };
    Tokenizer.prototype.testInteger = function () {
        var end = this.end;
        var text = this.source.text;
        if (this.pos + 1 < end && text.charCodeAt(this.pos) == 48 /* _0 */) {
            switch (text.charCodeAt(this.pos + 2)) {
                case 120 /* x */:
                case 88 /* X */:
                case 98 /* b */:
                case 66 /* B */:
                case 111 /* o */:
                case 79 /* O */: return true;
            }
        }
        var pos = this.pos;
        while (pos < end) {
            var c = text.charCodeAt(pos);
            if (c == 46 /* DOT */ || c == 101 /* e */ || c == 69 /* E */)
                return false;
            if ((c < 48 /* _0 */ || c > 57 /* _9 */) && c != 95 /* _ */)
                break;
            // does not validate separator placement (this is done in readXYInteger)
            pos++;
        }
        return true;
    };
    Tokenizer.prototype.readInteger = function () {
        var text = this.source.text;
        if (this.pos + 2 < this.end && text.charCodeAt(this.pos) == 48 /* _0 */) {
            switch (text.charCodeAt(this.pos + 1)) {
                case 120 /* x */:
                case 88 /* X */: {
                    this.pos += 2;
                    return this.readHexInteger();
                }
                case 98 /* b */:
                case 66 /* B */: {
                    this.pos += 2;
                    return this.readBinaryInteger();
                }
                case 111 /* o */:
                case 79 /* O */: {
                    this.pos += 2;
                    return this.readOctalInteger();
                }
            }
            if (util_1.isOctalDigit(text.charCodeAt(this.pos + 1))) {
                var start = this.pos;
                ++this.pos;
                var value = this.readOctalInteger();
                this.error(diagnostics_1.DiagnosticCode.Octal_literals_are_not_allowed_in_strict_mode, this.range(start, this.pos));
                return value;
            }
        }
        return this.readDecimalInteger();
    };
    Tokenizer.prototype.readHexInteger = function () {
        var text = this.source.text;
        var start = this.pos;
        var value = i64_new(0);
        var i64_4 = i64_new(4);
        var sepEnd = start;
        var end = this.end;
        while (this.pos < end) {
            var pos = this.pos;
            var c = text.charCodeAt(pos);
            if (c >= 48 /* _0 */ && c <= 57 /* _9 */) {
                // value = (value << 4) + c - CharCode._0;
                value = i64_add(i64_shl(value, i64_4), i64_new(c - 48 /* _0 */));
            }
            else if (c >= 65 /* A */ && c <= 70 /* F */) {
                // value = (value << 4) + 10 + c - CharCode.A;
                value = i64_add(i64_shl(value, i64_4), i64_new(10 + c - 65 /* A */));
            }
            else if (c >= 97 /* a */ && c <= 102 /* f */) {
                // value = (value << 4) + 10 + c - CharCode.a;
                value = i64_add(i64_shl(value, i64_4), i64_new(10 + c - 97 /* a */));
            }
            else if (c == 95 /* _ */) {
                if (sepEnd == pos) {
                    this.error(sepEnd == start
                        ? diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here
                        : diagnostics_1.DiagnosticCode.Multiple_consecutive_numeric_separators_are_not_permitted, this.range(pos));
                }
                sepEnd = pos + 1;
            }
            else {
                break;
            }
            this.pos = pos + 1;
        }
        if (this.pos == start) {
            this.error(diagnostics_1.DiagnosticCode.Hexadecimal_digit_expected, this.range(start));
        }
        else if (sepEnd == this.pos) {
            this.error(diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here, this.range(sepEnd - 1));
        }
        return value;
    };
    Tokenizer.prototype.readDecimalInteger = function () {
        var text = this.source.text;
        var start = this.pos;
        var end = this.end;
        var value = i64_new(0);
        var i64_10 = i64_new(10);
        var sepEnd = start;
        while (this.pos < end) {
            var pos = this.pos;
            var c = text.charCodeAt(pos);
            if (c >= 48 /* _0 */ && c <= 57 /* _9 */) {
                // value = value * 10 + c - CharCode._0;
                value = i64_add(i64_mul(value, i64_10), i64_new(c - 48 /* _0 */));
            }
            else if (c == 95 /* _ */) {
                if (sepEnd == pos) {
                    this.error(sepEnd == start
                        ? diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here
                        : diagnostics_1.DiagnosticCode.Multiple_consecutive_numeric_separators_are_not_permitted, this.range(pos));
                }
                sepEnd = pos + 1;
            }
            else {
                break;
            }
            this.pos = pos + 1;
        }
        if (this.pos == start) {
            this.error(diagnostics_1.DiagnosticCode.Digit_expected, this.range(start));
        }
        else if (sepEnd == this.pos) {
            this.error(diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here, this.range(sepEnd - 1));
        }
        return value;
    };
    Tokenizer.prototype.readOctalInteger = function () {
        var text = this.source.text;
        var start = this.pos;
        var value = i64_new(0);
        var i64_3 = i64_new(3);
        var sepEnd = start;
        var end = this.end;
        while (this.pos < end) {
            var pos = this.pos;
            var c = text.charCodeAt(pos);
            if (c >= 48 /* _0 */ && c <= 55 /* _7 */) {
                // value = (value << 3) + c - CharCode._0;
                value = i64_add(i64_shl(value, i64_3), i64_new(c - 48 /* _0 */));
            }
            else if (c == 95 /* _ */) {
                if (sepEnd == pos) {
                    this.error(sepEnd == start
                        ? diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here
                        : diagnostics_1.DiagnosticCode.Multiple_consecutive_numeric_separators_are_not_permitted, this.range(pos));
                }
                sepEnd = pos + 1;
            }
            else {
                break;
            }
            ++this.pos;
        }
        if (this.pos == start) {
            this.error(diagnostics_1.DiagnosticCode.Octal_digit_expected, this.range(start));
        }
        else if (sepEnd == this.pos) {
            this.error(diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here, this.range(sepEnd - 1));
        }
        return value;
    };
    Tokenizer.prototype.readBinaryInteger = function () {
        var text = this.source.text;
        var start = this.pos;
        var value = i64_new(0);
        var i64_1 = i64_new(1);
        var sepEnd = start;
        var end = this.end;
        while (this.pos < end) {
            var pos = this.pos;
            var c = text.charCodeAt(pos);
            if (c == 48 /* _0 */) {
                // value = (value << 1);
                value = i64_shl(value, i64_1);
            }
            else if (c == 49 /* _1 */) {
                // value = (value << 1) + 1;
                value = i64_add(i64_shl(value, i64_1), i64_1);
            }
            else if (c == 95 /* _ */) {
                if (sepEnd == pos) {
                    this.error(sepEnd == start
                        ? diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here
                        : diagnostics_1.DiagnosticCode.Multiple_consecutive_numeric_separators_are_not_permitted, this.range(pos));
                }
                sepEnd = pos + 1;
            }
            else {
                break;
            }
            this.pos = pos + 1;
        }
        if (this.pos == start) {
            this.error(diagnostics_1.DiagnosticCode.Binary_digit_expected, this.range(start));
        }
        else if (sepEnd == this.pos) {
            this.error(diagnostics_1.DiagnosticCode.Numeric_separators_are_not_allowed_here, this.range(sepEnd - 1));
        }
        return value;
    };
    Tokenizer.prototype.readFloat = function () {
        // var text = this.source.text;
        // if (text.charCodeAt(this.pos) == CharCode._0 && this.pos + 2 < this.end) {
        //   switch (text.charCodeAt(this.pos + 1)) {
        //     case CharCode.X:
        //     case CharCode.x: {
        //       this.pos += 2;
        //       return this.readHexFloat();
        //     }
        //   }
        // }
        return this.readDecimalFloat();
    };
    Tokenizer.prototype.readDecimalFloat = function () {
        // TODO: numeric separators (parseFloat can't handle these)
        var start = this.pos;
        var end = this.end;
        var text = this.source.text;
        while (this.pos < end && util_1.isDecimalDigit(text.charCodeAt(this.pos))) {
            ++this.pos;
        }
        if (this.pos < end && text.charCodeAt(this.pos) == 46 /* DOT */) {
            ++this.pos;
            while (this.pos < end && util_1.isDecimalDigit(text.charCodeAt(this.pos))) {
                ++this.pos;
            }
        }
        if (this.pos < end) {
            var c = text.charCodeAt(this.pos);
            if (c == 101 /* e */ || c == 69 /* E */) {
                if (++this.pos < end &&
                    (c = text.charCodeAt(this.pos)) == 45 /* MINUS */ || c == 43 /* PLUS */ &&
                    util_1.isDecimalDigit(text.charCodeAt(this.pos + 1))) {
                    ++this.pos;
                }
                while (this.pos < end && util_1.isDecimalDigit(text.charCodeAt(this.pos))) {
                    ++this.pos;
                }
            }
        }
        return parseFloat(text.substring(start, this.pos));
    };
    Tokenizer.prototype.readHexFloat = function () {
        throw new Error("not implemented"); // TBD
    };
    Tokenizer.prototype.readUnicodeEscape = function () {
        var remain = 4;
        var value = 0;
        var end = this.end;
        var text = this.source.text;
        while (this.pos < end) {
            var c = text.charCodeAt(this.pos++);
            if (c >= 48 /* _0 */ && c <= 57 /* _9 */) {
                value = (value << 4) + c - 48 /* _0 */;
            }
            else if (c >= 65 /* A */ && c <= 70 /* F */) {
                value = (value << 4) + c + (10 - 65 /* A */);
            }
            else if (c >= 97 /* a */ && c <= 102 /* f */) {
                value = (value << 4) + c + (10 - 97 /* a */);
            }
            else {
                this.error(diagnostics_1.DiagnosticCode.Hexadecimal_digit_expected, this.range(this.pos - 1, this.pos));
                return "";
            }
            if (--remain == 0)
                break;
        }
        if (remain) {
            this.error(diagnostics_1.DiagnosticCode.Unexpected_end_of_text, this.range(this.pos));
            return "";
        }
        return String.fromCharCode(value);
    };
    Tokenizer.prototype.readExtendedUnicodeEscape = function () {
        var start = this.pos;
        var value = this.readHexInteger();
        var value32 = i64_low(value);
        var invalid = false;
        assert(!i64_high(value));
        if (value32 > 0x10FFFF) {
            this.error(diagnostics_1.DiagnosticCode.An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive, this.range(start, this.pos));
            invalid = true;
        }
        var end = this.end;
        var text = this.source.text;
        if (this.pos >= end) {
            this.error(diagnostics_1.DiagnosticCode.Unexpected_end_of_text, this.range(start, end));
            invalid = true;
        }
        else if (text.charCodeAt(this.pos) == 125 /* CLOSEBRACE */) {
            ++this.pos;
        }
        else {
            this.error(diagnostics_1.DiagnosticCode.Unterminated_Unicode_escape_sequence, this.range(start, this.pos));
            invalid = true;
        }
        if (invalid)
            return "";
        return value32 < 65536
            ? String.fromCharCode(value32)
            : String.fromCharCode(((value32 - 65536) >>> 10) + 0xD800, ((value32 - 65536) & 1023) + 0xDC00);
    };
    Tokenizer.prototype.finish = function () {
    };
    return Tokenizer;
}(diagnostics_1.DiagnosticEmitter));
exports.Tokenizer = Tokenizer;
/** Tokenizer state as returned by {@link Tokenizer#mark} and consumed by {@link Tokenizer#reset}. */
var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());
exports.State = State;
// Reusable state object to reduce allocations
var reusableState = null;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5pemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3NyYy90b2tlbml6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7O0dBT0csQ0FBQSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUFFUiw2Q0FJdUI7QUFFdkIsNkJBR2U7QUFFZiwrQkFTZ0I7QUFFaEIseUJBQXlCO0FBQ3pCLElBQVksS0FzSVg7QUF0SUQsV0FBWSxLQUFLO0lBRWYsV0FBVztJQUNYLG9GQUFvRjtJQUVwRix5Q0FBUSxDQUFBO0lBQ1IsNkJBQUUsQ0FBQTtJQUNGLG1DQUFLLENBQUE7SUFDTCxtQ0FBSyxDQUFBO0lBQ0wsbUNBQUssQ0FBQTtJQUNMLGlDQUFJLENBQUE7SUFDSixtQ0FBSyxDQUFBO0lBQ0wsbUNBQUssQ0FBQTtJQUNMLG1DQUFLLENBQUE7SUFDTCx5Q0FBUSxDQUFBO0lBQ1IsZ0RBQVcsQ0FBQTtJQUNYLDBDQUFRLENBQUE7SUFDUix3Q0FBTyxDQUFBO0lBQ1Asd0NBQU8sQ0FBQTtJQUNQLHNDQUFNLENBQUE7SUFDTiw4QkFBRSxDQUFBO0lBQ0Ysa0NBQUksQ0FBQTtJQUNKLGtDQUFJLENBQUE7SUFDSixzQ0FBTSxDQUFBO0lBQ04sd0NBQU8sQ0FBQTtJQUNQLG9DQUFLLENBQUE7SUFDTCx3Q0FBTyxDQUFBO0lBQ1AsZ0NBQUcsQ0FBQTtJQUNILGtDQUFJLENBQUE7SUFDSiwwQ0FBUSxDQUFBO0lBQ1IsZ0NBQUcsQ0FBQTtJQUNILDhCQUFFLENBQUE7SUFDRiw4Q0FBVSxDQUFBO0lBQ1Ysc0NBQU0sQ0FBQTtJQUNOLDhCQUFFLENBQUE7SUFDRiw4Q0FBVSxDQUFBO0lBQ1YsNENBQVMsQ0FBQTtJQUNULDhCQUFFLENBQUE7SUFDRixvQ0FBSyxDQUFBO0lBQ0wsZ0NBQUcsQ0FBQTtJQUNILHNDQUFNLENBQUE7SUFDTiw0Q0FBUyxDQUFBO0lBQ1QsZ0NBQUcsQ0FBQTtJ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OGxDdEIscUdBQXFHO0FBQ3JHO0lBQUE7SUFPQSxDQUFDO0lBQUQsWUFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksc0JBQUs7QUFTbEIsOENBQThDO0FBQzlDLElBQUksYUFBYSxHQUFpQixJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgVHlwZVNjcmlwdCB0b2tlbml6ZXIgbW9kaWZpZWQgZm9yIEFzc2VtYmx5U2NyaXB0LlxuICpcbiAqIFNraXBzIG92ZXIgdHJpdmlhIGFuZCBwcm92aWRlcyBhIGdlbmVyYWwgbWFyay9yZXNldCBtZWNoYW5pc20gZm9yIHRoZSBwYXJzZXIgdG8gdXRpbGl6ZSBvblxuICogYW1iaWd1b3VzIHRva2Vucy5cbiAqXG4gKiBAbW9kdWxlIHRva2VuaXplclxuICovLyoqKi9cblxuaW1wb3J0IHtcbiAgRGlhZ25vc3RpY0NvZGUsXG4gIERpYWdub3N0aWNNZXNzYWdlLFxuICBEaWFnbm9zdGljRW1pdHRlclxufSBmcm9tIFwiLi9kaWFnbm9zdGljc1wiO1xuXG5pbXBvcnQge1xuICBTb3VyY2UsXG4gIENvbW1lbnRLaW5kXG59IGZyb20gXCIuL2FzdFwiO1xuXG5pbXBvcnQge1xuICBDaGFyQ29kZSxcbiAgaXNMaW5lQnJlYWssXG4gIGlzV2hpdGVTcGFjZSxcbiAgaXNJZGVudGlmaWVyU3RhcnQsXG4gIGlzSWRlbnRpZmllclBhcnQsXG4gIGlzRGVjaW1hbERpZ2l0LFxuICBpc09jdGFsRGlnaXQsXG4gIGlzS2V5d29yZENoYXJhY3RlclxufSBmcm9tIFwiLi91dGlsXCI7XG5cbi8qKiBOYW1lZCB0b2tlbiB0eXBlcy4gKi9cbmV4cG9ydCBlbnVtIFRva2VuIHtcblxuICAvLyBrZXl3b3Jkc1xuICAvLyBkaXNjYXJkZWQ6IEFOWSwgQk9PTEVBTiwgTkVWRVIsIE5VTUJFUiwgU1RSSU5HLCBTWU1CT0wsIFVOREVGSU5FRCwgTEVTU1RIQU5fU0xBU0hcblxuICBBQlNUUkFDVCxcbiAgQVMsXG4gIEFTWU5DLFxuICBBV0FJVCwgICAgICAgIC8vIEVTMjAxN1xuICBCUkVBSywgICAgICAgIC8vIEVTMjAxN1xuICBDQVNFLCAgICAgICAgIC8vIEVTMjAxN1xuICBDQVRDSCwgICAgICAgIC8vIEVTMjAxN1xuICBDTEFTUywgICAgICAgIC8vIEVTMjAxN1xuICBDT05TVCwgICAgICAgIC8vIEVTMjAxN1xuICBDT05USU5VRSwgICAgIC8vIEVTMjAxN1xuICBDT05TVFJVQ1RPUixcbiAgREVCVUdHRVIsICAgICAvLyBFUzIwMTdcbiAgREVDTEFSRSxcbiAgREVGQVVMVCwgICAgICAvLyBFUzIwMTdcbiAgREVMRVRFLCAgICAgICAvLyBFUzIwMTdcbiAgRE8sICAgICAgICAgICAvLyBFUzIwMTdcbiAgRUxTRSwgICAgICAgICAvLyBFUzIwMTdcbiAgRU5VTSwgICAgICAgICAvLyBFUzIwMTcgZnV0dXJlXG4gIEVYUE9SVCwgICAgICAgLy8gRVMyMDE3XG4gIEVYVEVORFMsICAgICAgLy8gRVMyMDE3XG4gIEZBTFNFLCAgICAgICAgLy8gRVNcbiAgRklOQUxMWSwgICAgICAvLyBFUzIwMTdcbiAgRk9SLCAgICAgICAgICAvLyBFUzIwMTdcbiAgRlJPTSwgICAgICAgICAvLyBBUyBwb3NzaWJsZSBpZGVudGlmaWVyXG4gIEZVTkNUSU9OLCAgICAgLy8gRVMyMDE3XG4gIEdFVCxcbiAgSUYsICAgICAgICAgICAvLyBFUzIwMTdcbiAgSU1QTEVNRU5UUywgICAvLyBFUzIwMTcgbm9uLWxleGljYWxcbiAgSU1QT1JULCAgICAgICAvLyBFUzIwMTdcbiAgSU4sICAgICAgICAgICAvLyBFUzIwMTdcbiAgSU5TVEFOQ0VPRiwgICAvLyBFUzIwMTdcbiAgSU5URVJGQUNFLCAgICAvLyBFUzIwMTcgbm9uLWxleGljYWxcbiAgSVMsXG4gIEtFWU9GLFxuICBMRVQsICAgICAgICAgIC8vIEVTMjAxNyBub24tbGV4aWNhbFxuICBNT0RVTEUsICAgICAgIC8vIEFTIHBvc3NpYmxlIGlkZW50aWZpZXJcbiAgTkFNRVNQQUNFLCAgICAvLyBBUyBwb3NzaWJsZSBpZGVudGlmaWVyXG4gIE5FVywgICAgICAgICAgLy8gRVMyMDE3XG4gIE5VTEwsICAgICAgICAgLy8gRVNcbiAgT0YsXG4gIFBBQ0tBR0UsICAgICAgLy8gRVMyMDE3IG5vbi1sZXhpY2FsXG4gIFBSSVZBVEUsICAgICAgLy8gRVMyMDE3IG5vbi1sZXhpY2FsXG4gIFBST1RFQ1RFRCwgICAgLy8gRVMyMDE3IG5vbi1sZXhpY2FsXG4gIFBVQkxJQywgICAgICAgLy8gRVMyMDE3IG5vbi1sZXhpY2FsXG4gIFJFQURPTkxZLFxuICBSRVRVUk4sICAgICAgIC8vIEVTMjAxN1xuICBTRVQsXG4gIFNUQVRJQywgICAgICAgLy8gRVMyMDE3IG5vbi1sZXhpY2FsXG4gIFNVUEVSLCAgICAgICAgLy8gRVMyMDE3XG4gIFNXSVRDSCwgICAgICAgLy8gRVMyMDE3XG4gIFRISVMsICAgICAgICAgLy8gRVMyMDE3XG4gIFRIUk9XLCAgICAgICAgLy8gRVMyMDE3XG4gIFRSVUUsICAgICAgICAgLy8gRVNcbiAgVFJZLCAgICAgICAgICAvLyBFUzIwMTdcbiAgVFlQRSwgICAgICAgICAvLyBBUyBwb3NzaWJsZSBpZGVudGlmaWVyXG4gIFRZUEVPRiwgICAgICAgLy8gRVMyMDE3XG4gIFZBUiwgICAgICAgICAgLy8gRVMyMDE3XG4gIFZPSUQsICAgICAgICAgLy8gRVMyMDE3XG4gIFdISUxFLCAgICAgICAgLy8gRVMyMDE3XG4gIFdJVEgsICAgICAgICAgLy8gRVMyMDE3XG4gIFlJRUxELCAgICAgICAgLy8gRVMyMDE3XG5cbiAgLy8gcHVuY3R1YXRpb25cblxuICBPUEVOQlJBQ0UsXG4gIENMT1NFQlJBQ0UsXG4gIE9QRU5QQVJFTixcbiAgQ0xPU0VQQVJFTixcbiAgT1BFTkJSQUNLRVQsXG4gIENMT1NFQlJBQ0tFVCxcbiAgRE9ULFxuICBET1RfRE9UX0RPVCxcbiAgU0VNSUNPTE9OLFxuICBDT01NQSxcbiAgTEVTU1RIQU4sXG4gIEdSRUFURVJUSEFOLFxuICBMRVNTVEhBTl9FUVVBTFMsXG4gIEdSRUFURVJUSEFOX0VRVUFMUyxcbiAgRVFVQUxTX0VRVUFMUyxcbiAgRVhDTEFNQVRJT05fRVFVQUxTLFxuICBFUVVBTFNfRVFVQUxTX0VRVUFMUyxcbiAgRVhDTEFNQVRJT05fRVFVQUxTX0VRVUFMUyxcbiAgRVFVQUxTX0dSRUFURVJUSEFOLFxuICBQTFVTLFxuICBNSU5VUyxcbiAgQVNURVJJU0tfQVNURVJJU0ssXG4gIEFTVEVSSVNLLFxuICBTTEFTSCxcbiAgUEVSQ0VOVCxcbiAgUExVU19QTFVTLFxuICBNSU5VU19NSU5VUyxcbiAgTEVTU1RIQU5fTEVTU1RIQU4sXG4gIEdSRUFURVJUSEFOX0dSRUFURVJUSEFOLFxuICBHUkVBVEVSVEhBTl9HUkVBVEVSVEhBTl9HUkVBVEVSVEhBTixcbiAgQU1QRVJTQU5ELFxuICBCQVIsXG4gIENBUkVULFxuICBFWENMQU1BVElPTixcbiAgVElMREUsXG4gIEFNUEVSU0FORF9BTVBFUlNBTkQsXG4gIEJBUl9CQVIsXG4gIFFVRVNUSU9OLFxuICBDT0xPTixcbiAgRVFVQUxTLFxuICBQTFVTX0VRVUFMUyxcbiAgTUlOVVNfRVFVQUxTLFxuICBBU1RFUklTS19FUVVBTFMsXG4gIEFTVEVSSVNLX0FTVEVSSVNLX0VRVUFMUyxcbiAgU0xBU0hfRVFVQUxTLFxuICBQRVJDRU5UX0VRVUFMUyxcbiAgTEVTU1RIQU5fTEVTU1RIQU5fRVFVQUxTLFxuICBHUkVBVEVSVEhBTl9HUkVBVEVSVEhBTl9FUVVBTFMsXG4gIEdSRUFURVJUSEFOX0dSRUFURVJUSEFOX0dSRUFURVJUSEFOX0VRVUFMUyxcbiAgQU1QRVJTQU5EX0VRVUFMUyxcbiAgQkFSX0VRVUFMUyxcbiAgQ0FSRVRfRVFVQUxTLFxuICBBVCxcblxuICAvLyBsaXRlcmFsc1xuXG4gIElERU5USUZJRVIsXG4gIFNUUklOR0xJVEVSQUwsXG4gIElOVEVHRVJMSVRFUkFMLFxuICBGTE9BVExJVEVSQUwsXG5cbiAgLy8gbWV0YVxuXG4gIElOVkFMSUQsXG4gIEVORE9GRklMRVxufVxuXG5leHBvcnQgZW51bSBJZGVudGlmaWVySGFuZGxpbmcge1xuICBERUZBVUxULFxuICBQUkVGRVIsXG4gIEFMV0FZU1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5Gcm9tS2V5d29yZCh0ZXh0OiBzdHJpbmcpOiBUb2tlbiB7XG4gIGFzc2VydCh0ZXh0Lmxlbmd0aCk7XG4gIHN3aXRjaCAodGV4dC5jaGFyQ29kZUF0KDApKSB7XG4gICAgY2FzZSBDaGFyQ29kZS5hOiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcImFic3RyYWN0XCI6IHJldHVybiBUb2tlbi5BQlNUUkFDVDtcbiAgICAgICAgY2FzZSBcImFzXCI6IHJldHVybiBUb2tlbi5BUztcbiAgICAgICAgY2FzZSBcImFzeW5jXCI6IHJldHVybiBUb2tlbi5BU1lOQztcbiAgICAgICAgY2FzZSBcImF3YWl0XCI6IHJldHVybiBUb2tlbi5BV0FJVDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLmI6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwiYnJlYWtcIjogcmV0dXJuIFRva2VuLkJSRUFLO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUuYzoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJjYXNlXCI6IHJldHVybiBUb2tlbi5DQVNFO1xuICAgICAgICBjYXNlIFwiY2F0Y2hcIjogcmV0dXJuIFRva2VuLkNBVENIO1xuICAgICAgICBjYXNlIFwiY2xhc3NcIjogcmV0dXJuIFRva2VuLkNMQVNTO1xuICAgICAgICBjYXNlIFwiY29udGludWVcIjogcmV0dXJuIFRva2VuLkNPTlRJTlVFO1xuICAgICAgICBjYXNlIFwiY29uc3RcIjogcmV0dXJuIFRva2VuLkNPTlNUO1xuICAgICAgICBjYXNlIFwiY29uc3RydWN0b3JcIjogcmV0dXJuIFRva2VuLkNPTlNUUlVDVE9SO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUuZDoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJkZWJ1Z2dlclwiOiByZXR1cm4gVG9rZW4uREVCVUdHRVI7XG4gICAgICAgIGNhc2UgXCJkZWNsYXJlXCI6IHJldHVybiBUb2tlbi5ERUNMQVJFO1xuICAgICAgICBjYXNlIFwiZGVmYXVsdFwiOiByZXR1cm4gVG9rZW4uREVGQVVMVDtcbiAgICAgICAgY2FzZSBcImRlbGV0ZVwiOiByZXR1cm4gVG9rZW4uREVMRVRFO1xuICAgICAgICBjYXNlIFwiZG9cIjogcmV0dXJuIFRva2VuLkRPO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUuZToge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJlbHNlXCI6IHJldHVybiBUb2tlbi5FTFNFO1xuICAgICAgICBjYXNlIFwiZW51bVwiOiByZXR1cm4gVG9rZW4uRU5VTTtcbiAgICAgICAgY2FzZSBcImV4cG9ydFwiOiByZXR1cm4gVG9rZW4uRVhQT1JUO1xuICAgICAgICBjYXNlIFwiZXh0ZW5kc1wiOiByZXR1cm4gVG9rZW4uRVhURU5EUztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLmY6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwiZmFsc2VcIjogcmV0dXJuIFRva2VuLkZBTFNFO1xuICAgICAgICBjYXNlIFwiZmluYWxseVwiOiByZXR1cm4gVG9rZW4uRklOQUxMWTtcbiAgICAgICAgY2FzZSBcImZvclwiOiByZXR1cm4gVG9rZW4uRk9SO1xuICAgICAgICBjYXNlIFwiZnJvbVwiOiByZXR1cm4gVG9rZW4uRlJPTTtcbiAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6IHJldHVybiBUb2tlbi5GVU5DVElPTjtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLmc6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwiZ2V0XCI6IHJldHVybiBUb2tlbi5HRVQ7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS5pOiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcImlmXCI6IHJldHVybiBUb2tlbi5JRjtcbiAgICAgICAgY2FzZSBcImltcGxlbWVudHNcIjogcmV0dXJuIFRva2VuLklNUExFTUVOVFM7XG4gICAgICAgIGNhc2UgXCJpbXBvcnRcIjogcmV0dXJuIFRva2VuLklNUE9SVDtcbiAgICAgICAgY2FzZSBcImluXCI6IHJldHVybiBUb2tlbi5JTjtcbiAgICAgICAgY2FzZSBcImluc3RhbmNlb2ZcIjogcmV0dXJuIFRva2VuLklOU1RBTkNFT0Y7XG4gICAgICAgIGNhc2UgXCJpbnRlcmZhY2VcIjogcmV0dXJuIFRva2VuLklOVEVSRkFDRTtcbiAgICAgICAgY2FzZSBcImlzXCI6IHJldHVybiBUb2tlbi5JUztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLms6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwia2V5b2ZcIjogcmV0dXJuIFRva2VuLktFWU9GO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUubDoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJsZXRcIjogcmV0dXJuIFRva2VuLkxFVDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLm06IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwibW9kdWxlXCI6IHJldHVybiBUb2tlbi5NT0RVTEU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS5uOiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcIm5hbWVzcGFjZVwiOiByZXR1cm4gVG9rZW4uTkFNRVNQQUNFO1xuICAgICAgICBjYXNlIFwibmV3XCI6IHJldHVybiBUb2tlbi5ORVc7XG4gICAgICAgIGNhc2UgXCJudWxsXCI6IHJldHVybiBUb2tlbi5OVUxMO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUubzoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJvZlwiOiByZXR1cm4gVG9rZW4uT0Y7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS5wOiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcInBhY2thZ2VcIjogcmV0dXJuIFRva2VuLlBBQ0tBR0U7XG4gICAgICAgIGNhc2UgXCJwcml2YXRlXCI6IHJldHVybiBUb2tlbi5QUklWQVRFO1xuICAgICAgICBjYXNlIFwicHJvdGVjdGVkXCI6IHJldHVybiBUb2tlbi5QUk9URUNURUQ7XG4gICAgICAgIGNhc2UgXCJwdWJsaWNcIjogcmV0dXJuIFRva2VuLlBVQkxJQztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLnI6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwicmVhZG9ubHlcIjogcmV0dXJuIFRva2VuLlJFQURPTkxZO1xuICAgICAgICBjYXNlIFwicmV0dXJuXCI6IHJldHVybiBUb2tlbi5SRVRVUk47XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBDaGFyQ29kZS5zOiB7XG4gICAgICBzd2l0Y2ggKHRleHQpIHtcbiAgICAgICAgY2FzZSBcInNldFwiOiByZXR1cm4gVG9rZW4uU0VUO1xuICAgICAgICBjYXNlIFwic3RhdGljXCI6IHJldHVybiBUb2tlbi5TVEFUSUM7XG4gICAgICAgIGNhc2UgXCJzdXBlclwiOiByZXR1cm4gVG9rZW4uU1VQRVI7XG4gICAgICAgIGNhc2UgXCJzd2l0Y2hcIjogcmV0dXJuIFRva2VuLlNXSVRDSDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLnQ6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwidGhpc1wiOiByZXR1cm4gVG9rZW4uVEhJUztcbiAgICAgICAgY2FzZSBcInRocm93XCI6IHJldHVybiBUb2tlbi5USFJPVztcbiAgICAgICAgY2FzZSBcInRydWVcIjogcmV0dXJuIFRva2VuLlRSVUU7XG4gICAgICAgIGNhc2UgXCJ0cnlcIjogcmV0dXJuIFRva2VuLlRSWTtcbiAgICAgICAgY2FzZSBcInR5cGVcIjogcmV0dXJuIFRva2VuLlRZUEU7XG4gICAgICAgIGNhc2UgXCJ0eXBlb2ZcIjogcmV0dXJuIFRva2VuLlRZUEVPRjtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIENoYXJDb2RlLnY6IHtcbiAgICAgIHN3aXRjaCAodGV4dCkge1xuICAgICAgICBjYXNlIFwidmFyXCI6IHJldHVybiBUb2tlbi5WQVI7XG4gICAgICAgIGNhc2UgXCJ2b2lkXCI6IHJldHVybiBUb2tlbi5WT0lEO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUudzoge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJ3aGlsZVwiOiByZXR1cm4gVG9rZW4uV0hJTEU7XG4gICAgICAgIGNhc2UgXCJ3aXRoXCI6IHJldHVybiBUb2tlbi5XSVRIO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgQ2hhckNvZGUueToge1xuICAgICAgc3dpdGNoICh0ZXh0KSB7XG4gICAgICAgIGNhc2UgXCJ5aWVsZFwiOiByZXR1cm4gVG9rZW4uWUlFTEQ7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFRva2VuLklOVkFMSUQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbklzQWxzb0lkZW50aWZpZXIodG9rZW46IFRva2VuKTogYm9vbCB7XG4gIHN3aXRjaCAodG9rZW4pIHtcbiAgICBjYXNlIFRva2VuLkFCU1RSQUNUOlxuICAgIGNhc2UgVG9rZW4uQVM6XG4gICAgY2FzZSBUb2tlbi5DT05TVFJVQ1RPUjpcbiAgICBjYXNlIFRva2VuLkRFQ0xBUkU6XG4gICAgY2FzZSBUb2tlbi5ERUxFVEU6XG4gICAgY2FzZSBUb2tlbi5GUk9NOlxuICAgIGNhc2UgVG9rZW4uRk9SOlxuICAgIGNhc2UgVG9rZW4uR0VUOlxuICAgIGNhc2UgVG9rZW4uSU5TVEFOQ0VPRjpcbiAgICBjYXNlIFRva2VuLklTOlxuICAgIGNhc2UgVG9rZW4uS0VZT0Y6XG4gICAgY2FzZSBUb2tlbi5NT0RVTEU6XG4gICAgY2FzZSBUb2tlbi5OQU1FU1BBQ0U6XG4gICAgY2FzZSBUb2tlbi5OVUxMOlxuICAgIGNhc2UgVG9rZW4uUkVBRE9OTFk6XG4gICAgY2FzZSBUb2tlbi5TRVQ6XG4gICAgY2FzZSBUb2tlbi5UWVBFOlxuICAgIGNhc2UgVG9rZW4uVk9JRDogcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lsbGVnYWxWYXJpYWJsZUlkZW50aWZpZXIobmFtZTogc3RyaW5nKTogYm9vbCB7XG4gIGFzc2VydChuYW1lLmxlbmd0aCk7XG4gIHN3aXRjaCAobmFtZS5jaGFyQ29kZUF0KDApKSB7XG4gICAgY2FzZSBDaGFyQ29kZS5kOiByZXR1cm4gbmFtZSA9PSBcImRlbGV0ZVwiO1xuICAgIGNhc2UgQ2hhckNvZGUuZjogcmV0dXJuIG5hbWUgPT0gXCJmb3JcIjtcbiAgICBjYXNlIENoYXJDb2RlLmk6IHJldHVybiBuYW1lID09IFwiaW5zdGFuY2VvZlwiO1xuICAgIGNhc2UgQ2hhckNvZGUubjogcmV0dXJuIG5hbWUgPT0gXCJudWxsXCI7XG4gICAgY2FzZSBDaGFyQ29kZS52OiByZXR1cm4gbmFtZSA9PSBcInZvaWRcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVyYXRvclRva2VuVG9TdHJpbmcodG9rZW46IFRva2VuKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0b2tlbikge1xuICAgIGNhc2UgVG9rZW4uREVMRVRFOiByZXR1cm4gXCJkZWxldGVcIjtcbiAgICBjYXNlIFRva2VuLklOOiByZXR1cm4gXCJpblwiO1xuICAgIGNhc2UgVG9rZW4uSU5TVEFOQ0VPRjogcmV0dXJuIFwiaW5zdGFuY2VvZlwiO1xuICAgIGNhc2UgVG9rZW4uTkVXOiByZXR1cm4gXCJuZXdcIjtcbiAgICBjYXNlIFRva2VuLlRZUEVPRjogcmV0dXJuIFwidHlwZW9mXCI7XG4gICAgY2FzZSBUb2tlbi5WT0lEOiByZXR1cm4gXCJ2b2lkXCI7XG4gICAgY2FzZSBUb2tlbi5ZSUVMRDogcmV0dXJuIFwieWllbGRcIjtcbiAgICBjYXNlIFRva2VuLkRPVF9ET1RfRE9UOiByZXR1cm4gXCIuLi5cIjtcbiAgICBjYXNlIFRva2VuLkNPTU1BOiByZXR1cm4gXCIsXCI7XG4gICAgY2FzZSBUb2tlbi5MRVNTVEhBTjogcmV0dXJuIFwiPFwiO1xuICAgIGNhc2UgVG9rZW4uR1JFQVRFUlRIQU46IHJldHVybiBcIj5cIjtcbiAgICBjYXNlIFRva2VuLkxFU1NUSEFOX0VRVUFMUzogcmV0dXJuIFwiPD1cIjtcbiAgICBjYXNlIFRva2VuLkdSRUFURVJUSEFOX0VRVUFMUzogcmV0dXJuIFwiPj1cIjtcbiAgICBjYXNlIFRva2VuLkVRVUFMU19FUVVBTFM6IHJldHVybiBcIj09XCI7XG4gICAgY2FzZSBUb2tlbi5FWENMQU1BVElPTl9FUVVBTFM6IHJldHVybiBcIiE9XCI7XG4gICAgY2FzZSBUb2tlbi5FUVVBTFNfRVFVQUxTX0VRVUFMUzogcmV0dXJuIFwiPT09XCI7XG4gICAgY2FzZSBUb2tlbi5FWENMQU1BVElPTl9FUVVBTFNfRVFVQUxTOiByZXR1cm4gXCIhPT1cIjtcbiAgICBjYXNlIFRva2VuLlBMVVM6IHJldHVybiBcIitcIjtcbiAgICBjYXNlIFRva2VuLk1JTlVTOiByZXR1cm4gXCItXCI7XG4gICAgY2FzZSBUb2tlbi5BU1RFUklTS19BU1RFUklTSzogcmV0dXJuIFwiKipcIjtcbiAgICBjYXNlIFRva2VuLkFTVEVSSVNLOiByZXR1cm4gXCIqXCI7XG4gICAgY2FzZSBUb2tlbi5TTEFTSDogcmV0dXJuIFwiL1wiO1xuICAgIGNhc2UgVG9rZW4uUEVSQ0VOVDogcmV0dXJuIFwiJVwiO1xuICAgIGNhc2UgVG9rZW4uUExVU19QTFVTOiByZXR1cm4gXCIrK1wiO1xuICAgIGNhc2UgVG9rZW4uTUlOVVNfTUlOVVM6IHJldHVybiBcIi0tXCI7XG4gICAgY2FzZSBUb2tlbi5MRVNTVEhBTl9MRVNTVEhBTjogcmV0dXJuIFwiPDxcIjtcbiAgICBjYXNlIFRva2VuLkdSRUFURVJUSEFOX0dSRUFURVJUSEFOOiByZXR1cm4gXCI+PlwiO1xuICAgIGNhc2UgVG9rZW4uR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU46IHJldHVybiBcIj4+PlwiO1xuICAgIGNhc2UgVG9rZW4uQU1QRVJTQU5EOiByZXR1cm4gXCImXCI7XG4gICAgY2FzZSBUb2tlbi5CQVI6IHJldHVybiBcInxcIjtcbiAgICBjYXNlIFRva2VuLkNBUkVUOiByZXR1cm4gXCJeXCI7XG4gICAgY2FzZSBUb2tlbi5FWENMQU1BVElPTjogcmV0dXJuIFwiIVwiO1xuICAgIGNhc2UgVG9rZW4uVElMREU6IHJldHVybiBcIn5cIjtcbiAgICBjYXNlIFRva2VuLkFNUEVSU0FORF9BTVBFUlNBTkQ6IHJldHVybiBcIiYmXCI7XG4gICAgY2FzZSBUb2tlbi5CQVJfQkFSOiByZXR1cm4gXCJ8fFwiO1xuICAgIGNhc2UgVG9rZW4uRVFVQUxTOiByZXR1cm4gXCI9XCI7XG4gICAgY2FzZSBUb2tlbi5QTFVTX0VRVUFMUzogcmV0dXJuIFwiKz1cIjtcbiAgICBjYXNlIFRva2VuLk1JTlVTX0VRVUFMUzogcmV0dXJuIFwiLT1cIjtcbiAgICBjYXNlIFRva2VuLkFTVEVSSVNLX0VRVUFMUzogcmV0dXJuIFwiKj1cIjtcbiAgICBjYXNlIFRva2VuLkFTVEVSSVNLX0FTVEVSSVNLX0VRVUFMUzogcmV0dXJuIFwiKio9XCI7XG4gICAgY2FzZSBUb2tlbi5TTEFTSF9FUVVBTFM6IHJldHVybiBcIi89XCI7XG4gICAgY2FzZSBUb2tlbi5QRVJDRU5UX0VRVUFMUzogcmV0dXJuIFwiJT1cIjtcbiAgICBjYXNlIFRva2VuLkxFU1NUSEFOX0xFU1NUSEFOX0VRVUFMUzogcmV0dXJuIFwiPDw9XCI7XG4gICAgY2FzZSBUb2tlbi5HUkVBVEVSVEhBTl9HUkVBVEVSVEhBTl9FUVVBTFM6IHJldHVybiBcIj4+PVwiO1xuICAgIGNhc2UgVG9rZW4uR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU5fRVFVQUxTOiByZXR1cm4gXCI+Pj49XCI7XG4gICAgY2FzZSBUb2tlbi5BTVBFUlNBTkRfRVFVQUxTOiByZXR1cm4gXCImPVwiO1xuICAgIGNhc2UgVG9rZW4uQkFSX0VRVUFMUzogcmV0dXJuIFwifD1cIjtcbiAgICBjYXNlIFRva2VuLkNBUkVUX0VRVUFMUzogcmV0dXJuIFwiXj1cIjtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBhc3NlcnQoZmFsc2UpO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSYW5nZSB7XG5cbiAgc291cmNlOiBTb3VyY2U7XG4gIHN0YXJ0OiBpMzI7XG4gIGVuZDogaTMyO1xuXG4gIC8vIFRPRE86IHNldCB0aGVzZSB3aGlsZSB0b2tlbml6aW5nXG4gIC8vIGxpbmU6IGkzMjtcbiAgLy8gY29sdW1uOiBpMzI7XG5cbiAgY29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UsIHN0YXJ0OiBpMzIsIGVuZDogaTMyKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuZW5kID0gZW5kO1xuICB9XG5cbiAgc3RhdGljIGpvaW4oYTogUmFuZ2UsIGI6IFJhbmdlKTogUmFuZ2Uge1xuICAgIGlmIChhLnNvdXJjZSAhPSBiLnNvdXJjZSkgdGhyb3cgbmV3IEVycm9yKFwic291cmNlIG1pc21hdGNoXCIpO1xuICAgIHJldHVybiBuZXcgUmFuZ2UoYS5zb3VyY2UsXG4gICAgICBhLnN0YXJ0IDwgYi5zdGFydCA/IGEuc3RhcnQgOiBiLnN0YXJ0LFxuICAgICAgYS5lbmQgPiBiLmVuZCA/IGEuZW5kIDogYi5lbmRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGF0U3RhcnQoKTogUmFuZ2Uge1xuICAgIHJldHVybiBuZXcgUmFuZ2UodGhpcy5zb3VyY2UsIHRoaXMuc3RhcnQsIHRoaXMuc3RhcnQpO1xuICB9XG5cbiAgZ2V0IGF0RW5kKCk6IFJhbmdlIHtcbiAgICByZXR1cm4gbmV3IFJhbmdlKHRoaXMuc291cmNlLCB0aGlzLmVuZCwgdGhpcy5lbmQpO1xuICB9XG5cbiAgZ2V0IGxpbmUoKTogaTMyIHtcbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgdmFyIGxpbmUgPSAxO1xuICAgIGZvciAobGV0IHBvcyA9IHRoaXMuc3RhcnQ7IHBvcyA+PSAwOyAtLXBvcykge1xuICAgICAgaWYgKHRleHQuY2hhckNvZGVBdChwb3MpID09IENoYXJDb2RlLkxJTkVGRUVEKSBsaW5lKys7XG4gICAgfVxuICAgIHJldHVybiBsaW5lO1xuICB9XG5cbiAgZ2V0IGNvbHVtbigpOiBpMzIge1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICB2YXIgY29sdW1uID0gMDtcbiAgICBmb3IgKGxldCBwb3MgPSB0aGlzLnN0YXJ0IC0gMTsgcG9zID49IDA7IC0tcG9zKSB7XG4gICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KHBvcykgPT0gQ2hhckNvZGUuTElORUZFRUQpIGJyZWFrO1xuICAgICAgKytjb2x1bW47XG4gICAgfVxuICAgIHJldHVybiBjb2x1bW47XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZS50ZXh0LnN1YnN0cmluZyh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XG4gIH1cblxuICBkZWJ1Z0luZm9SZWY6IHVzaXplID0gMDtcbn1cblxuZGVjbGFyZSBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cjogc3RyaW5nKTogZjY0O1xuXG4vKiogSGFuZGxlciBmb3IgaW50ZXJjZXB0aW5nIGNvbW1lbnRzIHdoaWxlIHRva2VuaXppbmcuICovXG5leHBvcnQgdHlwZSBDb21tZW50SGFuZGxlciA9IChraW5kOiBDb21tZW50S2luZCwgdGV4dDogc3RyaW5nLCByYW5nZTogUmFuZ2UpID0+IHZvaWQ7XG5cbi8qKiBUb2tlbml6ZXMgYSBzb3VyY2UgdG8gaW5kaXZpZHVhbCB7QGxpbmsgVG9rZW59cy4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlbml6ZXIgZXh0ZW5kcyBEaWFnbm9zdGljRW1pdHRlciB7XG5cbiAgc291cmNlOiBTb3VyY2U7XG4gIGVuZDogaTMyID0gMDtcblxuICBwb3M6IGkzMiA9IDA7XG4gIHRva2VuOiBUb2tlbiA9IC0xO1xuICB0b2tlblBvczogaTMyID0gMDtcblxuICBuZXh0VG9rZW46IFRva2VuID0gLTE7XG4gIG5leHRUb2tlblBvczogaTMyID0gMDtcbiAgbmV4dFRva2VuT25OZXdMaW5lOiBib29sID0gZmFsc2U7XG5cbiAgb25Db21tZW50OiBDb21tZW50SGFuZGxlciB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBDb25zdHJ1Y3RzIGEgbmV3IHRva2VuaXplci4gKi9cbiAgY29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2UsIGRpYWdub3N0aWNzOiBEaWFnbm9zdGljTWVzc2FnZVtdIHwgbnVsbCA9IG51bGwpIHtcbiAgICBzdXBlcihkaWFnbm9zdGljcyk7XG5cbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLnBvcyA9IDA7XG4gICAgdGhpcy5lbmQgPSBzb3VyY2UudGV4dC5sZW5ndGg7XG4gICAgdGhpcy5kaWFnbm9zdGljcyA9IGRpYWdub3N0aWNzIHx8IG5ldyBBcnJheSgpO1xuXG4gICAgdmFyIGVuZCA9IHRoaXMuZW5kO1xuICAgIHZhciB0ZXh0ID0gc291cmNlLnRleHQ7XG5cbiAgICAvLyBza2lwIGJvbVxuICAgIGlmIChcbiAgICAgIHRoaXMucG9zIDwgZW5kICYmXG4gICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLkJZVEVPUkRFUk1BUktcbiAgICApIHtcbiAgICAgICsrdGhpcy5wb3M7XG4gICAgfVxuXG4gICAgLy8gc2tpcCBzaGViYW5nXG4gICAgaWYgKFxuICAgICAgdGhpcy5wb3MgKyAxIDwgZW5kICYmXG4gICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLkhBU0ggJiZcbiAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpID09IENoYXJDb2RlLkVYQ0xBTUFUSU9OXG4gICAgKSB7XG4gICAgICB0aGlzLnBvcyArPSAyO1xuICAgICAgd2hpbGUgKFxuICAgICAgICB0aGlzLnBvcyA8IGVuZCAmJlxuICAgICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpICE9IENoYXJDb2RlLkxJTkVGRUVEXG4gICAgICApIHtcbiAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgIH1cbiAgICAgIC8vICduZXh0JyBub3cgc3RhcnRzIGF0IGxmIG9yIGVvZlxuICAgIH1cbiAgfVxuXG4gIG5leHQoaWRlbnRpZmllckhhbmRsaW5nOiBJZGVudGlmaWVySGFuZGxpbmcgPSBJZGVudGlmaWVySGFuZGxpbmcuREVGQVVMVCk6IFRva2VuIHtcbiAgICB0aGlzLm5leHRUb2tlbiA9IC0xO1xuICAgIHJldHVybiB0aGlzLnRva2VuID0gdGhpcy51bnNhZmVOZXh0KGlkZW50aWZpZXJIYW5kbGluZyk7XG4gIH1cblxuICBwcml2YXRlIHVuc2FmZU5leHQoXG4gICAgaWRlbnRpZmllckhhbmRsaW5nOiBJZGVudGlmaWVySGFuZGxpbmcgPSBJZGVudGlmaWVySGFuZGxpbmcuREVGQVVMVCxcbiAgICBtYXhUb2tlbkxlbmd0aDogaTMyID0gaTMyLk1BWF9WQUxVRVxuICApOiBUb2tlbiB7XG4gICAgdmFyIGVuZCA9IHRoaXMuZW5kO1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgIHRoaXMudG9rZW5Qb3MgPSB0aGlzLnBvcztcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICBjYXNlIENoYXJDb2RlLkNBUlJJQUdFUkVUVVJOOiB7XG4gICAgICAgICAgaWYgKCEoXG4gICAgICAgICAgICArK3RoaXMucG9zIDwgZW5kICYmXG4gICAgICAgICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLkxJTkVGRUVEXG4gICAgICAgICAgKSkgYnJlYWs7XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGwtdGhyb3VnaFxuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuTElORUZFRUQ6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuVEFCOlxuICAgICAgICBjYXNlIENoYXJDb2RlLlZFUlRJQ0FMVEFCOlxuICAgICAgICBjYXNlIENoYXJDb2RlLkZPUk1GRUVEOlxuICAgICAgICBjYXNlIENoYXJDb2RlLlNQQUNFOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkVYQ0xBTUFUSU9OOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuRVFVQUxTXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBtYXhUb2tlbkxlbmd0aCA+IDIgJiYgdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgICAgICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5FUVVBTFNcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uRVhDTEFNQVRJT05fRVFVQUxTX0VRVUFMUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBUb2tlbi5FWENMQU1BVElPTl9FUVVBTFM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBUb2tlbi5FWENMQU1BVElPTjtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkRPVUJMRVFVT1RFOlxuICAgICAgICBjYXNlIENoYXJDb2RlLlNJTkdMRVFVT1RFOlxuICAgICAgICBjYXNlIENoYXJDb2RlLkJBQ0tUSUNLOiB7IC8vIFRPRE9cbiAgICAgICAgICByZXR1cm4gVG9rZW4uU1RSSU5HTElURVJBTDsgLy8gZXhwZWN0cyBhIGNhbGwgdG8gcmVhZFN0cmluZ1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuUEVSQ0VOVDoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbWF4VG9rZW5MZW5ndGggPiAxICYmIHRoaXMucG9zIDwgZW5kICYmXG4gICAgICAgICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLkVRVUFMU1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgIHJldHVybiBUb2tlbi5QRVJDRU5UX0VRVUFMUztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLlBFUkNFTlQ7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5BTVBFUlNBTkQ6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5BTVBFUlNBTkQpIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkFNUEVSU0FORF9BTVBFUlNBTkQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkVRVUFMUykge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uQU1QRVJTQU5EX0VRVUFMUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkFNUEVSU0FORDtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLk9QRU5QQVJFTjoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgcmV0dXJuIFRva2VuLk9QRU5QQVJFTjtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkNMT1NFUEFSRU46IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIHJldHVybiBUb2tlbi5DTE9TRVBBUkVOO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQVNURVJJU0s6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5FUVVBTFMpIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkFTVEVSSVNLX0VRVUFMUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuQVNURVJJU0spIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG1heFRva2VuTGVuZ3RoID4gMiAmJiB0aGlzLnBvcyA8IGVuZCAmJlxuICAgICAgICAgICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuRVFVQUxTXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkFTVEVSSVNLX0FTVEVSSVNLX0VRVUFMUztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uQVNURVJJU0tfQVNURVJJU0s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBUb2tlbi5BU1RFUklTSztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLlBMVVM6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIGlmIChtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgIGxldCBjaHIgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5QTFVTKSB7XG4gICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5QTFVTX1BMVVM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkVRVUFMUykge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uUExVU19FUVVBTFM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBUb2tlbi5QTFVTO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQ09NTUE6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIHJldHVybiBUb2tlbi5DT01NQTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLk1JTlVTOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBpZiAobWF4VG9rZW5MZW5ndGggPiAxICYmIHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICBsZXQgY2hyID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuTUlOVVMpIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLk1JTlVTX01JTlVTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5FUVVBTFMpIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLk1JTlVTX0VRVUFMUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLk1JTlVTO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuRE9UOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBpZiAobWF4VG9rZW5MZW5ndGggPiAxICYmIHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICBsZXQgY2hyID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgICAgICAgIGlmIChpc0RlY2ltYWxEaWdpdChjaHIpKSB7XG4gICAgICAgICAgICAgIC0tdGhpcy5wb3M7XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5GTE9BVExJVEVSQUw7IC8vIGV4cGVjdHMgYSBjYWxsIHRvIHJlYWRGbG9hdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBtYXhUb2tlbkxlbmd0aCA+IDIgJiYgdGhpcy5wb3MgKyAxIDwgZW5kICYmXG4gICAgICAgICAgICAgIGNociA9PSBDaGFyQ29kZS5ET1QgJiZcbiAgICAgICAgICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zICsgMSkgPT0gQ2hhckNvZGUuRE9UXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gMjtcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkRPVF9ET1RfRE9UO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gVG9rZW4uRE9UO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuU0xBU0g6IHtcbiAgICAgICAgICBsZXQgY29tbWVudFN0YXJ0UG9zID0gdGhpcy5wb3M7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBpZiAobWF4VG9rZW5MZW5ndGggPiAxICYmIHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICBsZXQgY2hyID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuU0xBU0gpIHsgLy8gc2luZ2xlLWxpbmVcbiAgICAgICAgICAgICAgbGV0IGNvbW1lbnRLaW5kID0gQ29tbWVudEtpbmQuTElORTtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucG9zICsgMSA8IGVuZCAmJlxuICAgICAgICAgICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpID09IENoYXJDb2RlLlNMQVNIXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgICAgY29tbWVudEtpbmQgPSBDb21tZW50S2luZC5UUklQTEU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2hpbGUgKCsrdGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5MSU5FRkVFRCkge1xuICAgICAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5vbkNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tbWVudChcbiAgICAgICAgICAgICAgICAgIGNvbW1lbnRLaW5kLFxuICAgICAgICAgICAgICAgICAgdGV4dC5zdWJzdHJpbmcoY29tbWVudFN0YXJ0UG9zLCB0aGlzLnBvcyksXG4gICAgICAgICAgICAgICAgICB0aGlzLnJhbmdlKGNvbW1lbnRTdGFydFBvcywgdGhpcy5wb3MpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuQVNURVJJU0spIHsgLy8gbXVsdGktbGluZVxuICAgICAgICAgICAgICBsZXQgY2xvc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIHdoaWxlICgrK3RoaXMucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgYyA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgYyA9PSBDaGFyQ29kZS5BU1RFUklTSyAmJlxuICAgICAgICAgICAgICAgICAgdGhpcy5wb3MgKyAxIDwgZW5kICYmXG4gICAgICAgICAgICAgICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKSA9PSBDaGFyQ29kZS5TTEFTSFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5wb3MgKz0gMjtcbiAgICAgICAgICAgICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFjbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgRGlhZ25vc3RpY0NvZGUuXzBfZXhwZWN0ZWQsXG4gICAgICAgICAgICAgICAgICB0aGlzLnJhbmdlKHRoaXMucG9zKSwgXCIqL1wiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9uQ29tbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25Db21tZW50KFxuICAgICAgICAgICAgICAgICAgQ29tbWVudEtpbmQuQkxPQ0ssXG4gICAgICAgICAgICAgICAgICB0ZXh0LnN1YnN0cmluZyhjb21tZW50U3RhcnRQb3MsIHRoaXMucG9zKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMucmFuZ2UoY29tbWVudFN0YXJ0UG9zLCB0aGlzLnBvcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5FUVVBTFMpIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLlNMQVNIX0VRVUFMUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLlNMQVNIO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuXzA6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuXzE6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuXzI6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuXzM6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuXzQ6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuXzU6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuXzY6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuXzc6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuXzg6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuXzk6IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50ZXN0SW50ZWdlcigpXG4gICAgICAgICAgICA/IFRva2VuLklOVEVHRVJMSVRFUkFMIC8vIGV4cGVjdHMgYSBjYWxsIHRvIHJlYWRJbnRlZ2VyXG4gICAgICAgICAgICA6IFRva2VuLkZMT0FUTElURVJBTDsgIC8vIGV4cGVjdHMgYSBjYWxsIHRvIHJlYWRGbG9hdFxuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQ09MT046IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIHJldHVybiBUb2tlbi5DT0xPTjtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLlNFTUlDT0xPTjoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgcmV0dXJuIFRva2VuLlNFTUlDT0xPTjtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkxFU1NUSEFOOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBpZiAobWF4VG9rZW5MZW5ndGggPiAxICYmIHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICBsZXQgY2hyID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuTEVTU1RIQU4pIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG1heFRva2VuTGVuZ3RoID4gMiAmJlxuICAgICAgICAgICAgICAgIHRoaXMucG9zIDwgZW5kICYmXG4gICAgICAgICAgICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5FUVVBTFNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uTEVTU1RIQU5fTEVTU1RIQU5fRVFVQUxTO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5MRVNTVEhBTl9MRVNTVEhBTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuRVFVQUxTKSB7XG4gICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5MRVNTVEhBTl9FUVVBTFM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBUb2tlbi5MRVNTVEhBTjtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkVRVUFMUzoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgaWYgKG1heFRva2VuTGVuZ3RoID4gMSAmJiB0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgICAgICAgbGV0IGNociA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkVRVUFMUykge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbWF4VG9rZW5MZW5ndGggPiAyICYmXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgICAgICAgICAgICB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLkVRVUFMU1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICAgIHJldHVybiBUb2tlbi5FUVVBTFNfRVFVQUxTX0VRVUFMUztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uRVFVQUxTX0VRVUFMUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuR1JFQVRFUlRIQU4pIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkVRVUFMU19HUkVBVEVSVEhBTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkVRVUFMUztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkdSRUFURVJUSEFOOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBpZiAobWF4VG9rZW5MZW5ndGggPiAxICYmIHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICBsZXQgY2hyID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuR1JFQVRFUlRIQU4pIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgaWYgKG1heFRva2VuTGVuZ3RoID4gMiAmJiB0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgICAgICAgICAgIGNociA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5HUkVBVEVSVEhBTikge1xuICAgICAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbWF4VG9rZW5MZW5ndGggPiAzICYmIHRoaXMucG9zIDwgZW5kICYmXG4gICAgICAgICAgICAgICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuRVFVQUxTXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkdSRUFURVJUSEFOX0dSRUFURVJUSEFOX0dSRUFURVJUSEFOX0VRVUFMUztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBUb2tlbi5HUkVBVEVSVEhBTl9HUkVBVEVSVEhBTl9HUkVBVEVSVEhBTjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5FUVVBTFMpIHtcbiAgICAgICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU5fRVFVQUxTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uR1JFQVRFUlRIQU5fR1JFQVRFUlRIQU47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hyID09IENoYXJDb2RlLkVRVUFMUykge1xuICAgICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgICByZXR1cm4gVG9rZW4uR1JFQVRFUlRIQU5fRVFVQUxTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gVG9rZW4uR1JFQVRFUlRIQU47XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5RVUVTVElPTjoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgcmV0dXJuIFRva2VuLlFVRVNUSU9OO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuT1BFTkJSQUNLRVQ6IHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIHJldHVybiBUb2tlbi5PUEVOQlJBQ0tFVDtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkNMT1NFQlJBQ0tFVDoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkNMT1NFQlJBQ0tFVDtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkNBUkVUOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBtYXhUb2tlbkxlbmd0aCA+IDEgJiYgdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuRVFVQUxTXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgICAgcmV0dXJuIFRva2VuLkNBUkVUX0VRVUFMUztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkNBUkVUO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuT1BFTkJSQUNFOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICByZXR1cm4gVG9rZW4uT1BFTkJSQUNFO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQkFSOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICBpZiAobWF4VG9rZW5MZW5ndGggPiAxICYmIHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICAgICAgICBsZXQgY2hyID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgICAgICAgIGlmIChjaHIgPT0gQ2hhckNvZGUuQkFSKSB7XG4gICAgICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgICAgIHJldHVybiBUb2tlbi5CQVJfQkFSO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNociA9PSBDaGFyQ29kZS5FUVVBTFMpIHtcbiAgICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgICAgcmV0dXJuIFRva2VuLkJBUl9FUVVBTFM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBUb2tlbi5CQVI7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5DTE9TRUJSQUNFOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICByZXR1cm4gVG9rZW4uQ0xPU0VCUkFDRTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLlRJTERFOiB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICByZXR1cm4gVG9rZW4uVElMREU7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5BVDoge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgICAgcmV0dXJuIFRva2VuLkFUO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBpZiAoaXNJZGVudGlmaWVyU3RhcnQoYykpIHtcbiAgICAgICAgICAgIGlmIChpc0tleXdvcmRDaGFyYWN0ZXIoYykpIHtcbiAgICAgICAgICAgICAgbGV0IHBvc0JlZm9yZSA9IHRoaXMucG9zO1xuICAgICAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICAgICAgKyt0aGlzLnBvcyA8IGVuZCAmJlxuICAgICAgICAgICAgICAgIGlzSWRlbnRpZmllclBhcnQoYyA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGlmICghaXNLZXl3b3JkQ2hhcmFjdGVyKGMpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnBvcyA9IHBvc0JlZm9yZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBUb2tlbi5JREVOVElGSUVSO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZXQga2V5d29yZFRleHQgPSB0ZXh0LnN1YnN0cmluZyhwb3NCZWZvcmUsIHRoaXMucG9zKTtcbiAgICAgICAgICAgICAgbGV0IGtleXdvcmRUb2tlbiA9IHRva2VuRnJvbUtleXdvcmQoa2V5d29yZFRleHQpO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAga2V5d29yZFRva2VuICE9PSBUb2tlbi5JTlZBTElEICYmXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllckhhbmRsaW5nICE9PSBJZGVudGlmaWVySGFuZGxpbmcuQUxXQVlTICYmXG4gICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgIGlkZW50aWZpZXJIYW5kbGluZyA9PT0gSWRlbnRpZmllckhhbmRsaW5nLlBSRUZFUiAmJlxuICAgICAgICAgICAgICAgICAgdG9rZW5Jc0Fsc29JZGVudGlmaWVyKGtleXdvcmRUb2tlbilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXl3b3JkVG9rZW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3NCZWZvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gVG9rZW4uSURFTlRJRklFUjsgLy8gZXhwZWN0cyBhIGNhbGwgdG8gcmVhZElkZW50aWZpZXJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzV2hpdGVTcGFjZShjKSkge1xuICAgICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgRGlhZ25vc3RpY0NvZGUuSW52YWxpZF9jaGFyYWN0ZXIsXG4gICAgICAgICAgICB0aGlzLnJhbmdlKHRoaXMucG9zLCB0aGlzLnBvcyArIDEpXG4gICAgICAgICAgKTtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICAgIHJldHVybiBUb2tlbi5JTlZBTElEO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBUb2tlbi5FTkRPRkZJTEU7XG4gIH1cblxuICBwZWVrKFxuICAgIGNoZWNrT25OZXdMaW5lOiBib29sID0gZmFsc2UsXG4gICAgaWRlbnRpZmllckhhbmRsaW5nOiBJZGVudGlmaWVySGFuZGxpbmcgPSBJZGVudGlmaWVySGFuZGxpbmcuREVGQVVMVCxcbiAgICBtYXhDb21wb3VuZExlbmd0aDogaTMyID0gaTMyLk1BWF9WQUxVRVxuICApOiBUb2tlbiB7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIGlmICh0aGlzLm5leHRUb2tlbiA8IDApIHtcbiAgICAgIGxldCBwb3NCZWZvcmUgPSB0aGlzLnBvcztcbiAgICAgIGxldCB0b2tlbkJlZm9yZSA9IHRoaXMudG9rZW47XG4gICAgICBsZXQgdG9rZW5Qb3NCZWZvcmUgPSB0aGlzLnRva2VuUG9zO1xuICAgICAgdGhpcy5uZXh0VG9rZW4gPSB0aGlzLnVuc2FmZU5leHQoaWRlbnRpZmllckhhbmRsaW5nLCBtYXhDb21wb3VuZExlbmd0aCk7XG4gICAgICB0aGlzLm5leHRUb2tlblBvcyA9IHRoaXMudG9rZW5Qb3M7XG4gICAgICBpZiAoY2hlY2tPbk5ld0xpbmUpIHtcbiAgICAgICAgdGhpcy5uZXh0VG9rZW5Pbk5ld0xpbmUgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgcG9zID0gcG9zQmVmb3JlLCBlbmQgPSB0aGlzLm5leHRUb2tlblBvczsgcG9zIDwgZW5kOyArK3Bvcykge1xuICAgICAgICAgIGlmIChpc0xpbmVCcmVhayh0ZXh0LmNoYXJDb2RlQXQocG9zKSkpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFRva2VuT25OZXdMaW5lID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5wb3MgPSBwb3NCZWZvcmU7XG4gICAgICB0aGlzLnRva2VuID0gdG9rZW5CZWZvcmU7XG4gICAgICB0aGlzLnRva2VuUG9zID0gdG9rZW5Qb3NCZWZvcmU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5leHRUb2tlbjtcbiAgfVxuXG4gIHNraXBJZGVudGlmaWVyKGlkZW50aWZpZXJIYW5kbGluZzogSWRlbnRpZmllckhhbmRsaW5nID0gSWRlbnRpZmllckhhbmRsaW5nLlBSRUZFUik6IGJvb2wge1xuICAgIHJldHVybiB0aGlzLnNraXAoVG9rZW4uSURFTlRJRklFUiwgaWRlbnRpZmllckhhbmRsaW5nKTtcbiAgfVxuXG4gIHNraXAodG9rZW46IFRva2VuLCBpZGVudGlmaWVySGFuZGxpbmc6IElkZW50aWZpZXJIYW5kbGluZyA9IElkZW50aWZpZXJIYW5kbGluZy5ERUZBVUxUKTogYm9vbCB7XG4gICAgdmFyIHBvc0JlZm9yZSA9IHRoaXMucG9zO1xuICAgIHZhciB0b2tlbkJlZm9yZSA9IHRoaXMudG9rZW47XG4gICAgdmFyIHRva2VuUG9zQmVmb3JlID0gdGhpcy50b2tlblBvcztcbiAgICB2YXIgbWF4Q29tcG91bmRMZW5ndGggPSBpMzIuTUFYX1ZBTFVFO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgVG9rZW4uR1JFQVRFUlRIQU46IHsgLy8gd2hlcmUgcGFyc2luZyB0eXBlIGFyZ3VtZW50c1xuICAgICAgICBtYXhDb21wb3VuZExlbmd0aCA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRva2VuID0gdGhpcy51bnNhZmVOZXh0KGlkZW50aWZpZXJIYW5kbGluZywgbWF4Q29tcG91bmRMZW5ndGgpO1xuICAgIGlmICh0aGlzLnRva2VuID09IHRva2VuKSB7XG4gICAgICB0aGlzLm5leHRUb2tlbiA9IC0xO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zID0gcG9zQmVmb3JlO1xuICAgICAgdGhpcy50b2tlbiA9IHRva2VuQmVmb3JlO1xuICAgICAgdGhpcy50b2tlblBvcyA9IHRva2VuUG9zQmVmb3JlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1hcmsoKTogU3RhdGUge1xuICAgIHZhciBzdGF0ZTogU3RhdGU7XG4gICAgaWYgKHJldXNhYmxlU3RhdGUpIHtcbiAgICAgIHN0YXRlID0gcmV1c2FibGVTdGF0ZTtcbiAgICAgIHJldXNhYmxlU3RhdGUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xuICAgIH1cbiAgICBzdGF0ZS5wb3MgPSB0aGlzLnBvcztcbiAgICBzdGF0ZS50b2tlbiA9IHRoaXMudG9rZW47XG4gICAgc3RhdGUudG9rZW5Qb3MgPSB0aGlzLnRva2VuUG9zO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGRpc2NhcmQoc3RhdGU6IFN0YXRlKTogdm9pZCB7XG4gICAgcmV1c2FibGVTdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgcmVzZXQoc3RhdGU6IFN0YXRlKTogdm9pZCB7XG4gICAgdGhpcy5wb3MgPSBzdGF0ZS5wb3M7XG4gICAgdGhpcy50b2tlbiA9IHN0YXRlLnRva2VuO1xuICAgIHRoaXMudG9rZW5Qb3MgPSBzdGF0ZS50b2tlblBvcztcbiAgICB0aGlzLm5leHRUb2tlbiA9IC0xO1xuICB9XG5cbiAgcmFuZ2Uoc3RhcnQ6IGkzMiA9IC0xLCBlbmQ6IGkzMiA9IC0xKTogUmFuZ2Uge1xuICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgIHN0YXJ0ID0gdGhpcy50b2tlblBvcztcbiAgICAgIGVuZCA9IHRoaXMucG9zO1xuICAgIH0gZWxzZSBpZiAoZW5kIDwgMCkge1xuICAgICAgZW5kID0gc3RhcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmFuZ2UodGhpcy5zb3VyY2UsIHN0YXJ0LCBlbmQpO1xuICB9XG5cbiAgcmVhZElkZW50aWZpZXIoKTogc3RyaW5nIHtcbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5wb3M7XG4gICAgdmFyIGVuZCA9IHRoaXMuZW5kO1xuICAgIHdoaWxlIChcbiAgICAgICsrdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgIGlzSWRlbnRpZmllclBhcnQodGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSlcbiAgICApO1xuICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5wb3MpO1xuICB9XG5cbiAgcmVhZFN0cmluZygpOiBzdHJpbmcge1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICB2YXIgcXVvdGUgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MrKyk7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5wb3M7XG4gICAgdmFyIGVuZCA9IHRoaXMuZW5kO1xuICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAodGhpcy5wb3MgPj0gZW5kKSB7XG4gICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5wb3MpO1xuICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgIERpYWdub3N0aWNDb2RlLlVudGVybWluYXRlZF9zdHJpbmdfbGl0ZXJhbCxcbiAgICAgICAgICB0aGlzLnJhbmdlKHN0YXJ0IC0gMSwgZW5kKVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgIGlmIChjID09IHF1b3RlKSB7XG4gICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5wb3MrKyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGMgPT0gQ2hhckNvZGUuQkFDS1NMQVNIKSB7XG4gICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhzdGFydCwgdGhpcy5wb3MpO1xuICAgICAgICByZXN1bHQgKz0gdGhpcy5yZWFkRXNjYXBlU2VxdWVuY2UoKTtcbiAgICAgICAgc3RhcnQgPSB0aGlzLnBvcztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXNMaW5lQnJlYWsoYykgJiYgcXVvdGUgIT0gQ2hhckNvZGUuQkFDS1RJQ0spIHtcbiAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLnBvcyk7XG4gICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgRGlhZ25vc3RpY0NvZGUuVW50ZXJtaW5hdGVkX3N0cmluZ19saXRlcmFsLFxuICAgICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQgLSAxLCB0aGlzLnBvcylcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICArK3RoaXMucG9zO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmVhZEVzY2FwZVNlcXVlbmNlKCk6IHN0cmluZyB7XG4gICAgdmFyIGVuZCA9IHRoaXMuZW5kO1xuICAgIGlmICgrK3RoaXMucG9zID49IGVuZCkge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuVW5leHBlY3RlZF9lbmRfb2ZfdGV4dCxcbiAgICAgICAgdGhpcy5yYW5nZShlbmQpXG4gICAgICApO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIHZhciBjID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKyspO1xuICAgIHN3aXRjaCAoYykge1xuICAgICAgY2FzZSBDaGFyQ29kZS5fMDogcmV0dXJuIFwiXFwwXCI7XG4gICAgICBjYXNlIENoYXJDb2RlLmI6IHJldHVybiBcIlxcYlwiO1xuICAgICAgY2FzZSBDaGFyQ29kZS50OiByZXR1cm4gXCJcXHRcIjtcbiAgICAgIGNhc2UgQ2hhckNvZGUubjogcmV0dXJuIFwiXFxuXCI7XG4gICAgICBjYXNlIENoYXJDb2RlLnY6IHJldHVybiBcIlxcdlwiO1xuICAgICAgY2FzZSBDaGFyQ29kZS5mOiByZXR1cm4gXCJcXGZcIjtcbiAgICAgIGNhc2UgQ2hhckNvZGUucjogcmV0dXJuIFwiXFxyXCI7XG4gICAgICBjYXNlIENoYXJDb2RlLlNJTkdMRVFVT1RFOiByZXR1cm4gXCInXCI7XG4gICAgICBjYXNlIENoYXJDb2RlLkRPVUJMRVFVT1RFOiByZXR1cm4gXCJcXFwiXCI7XG4gICAgICBjYXNlIENoYXJDb2RlLnU6IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMucG9zIDwgZW5kICYmXG4gICAgICAgICAgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5PUEVOQlJBQ0VcbiAgICAgICAgKSB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkRXh0ZW5kZWRVbmljb2RlRXNjYXBlKCk7IC8vIFxcdXtERERERERERH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkVW5pY29kZUVzY2FwZSgpOyAvLyBcXHVEREREXG4gICAgICB9XG4gICAgICBjYXNlIENoYXJDb2RlLkNBUlJJQUdFUkVUVVJOOiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLnBvcyA8IGVuZCAmJlxuICAgICAgICAgIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuTElORUZFRURcbiAgICAgICAgKSB7XG4gICAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgfVxuICAgICAgICAvLyBmYWxsIHRocm91Z2hcbiAgICAgIH1cbiAgICAgIGNhc2UgQ2hhckNvZGUuTElORUZFRUQ6XG4gICAgICBjYXNlIENoYXJDb2RlLkxJTkVTRVBBUkFUT1I6XG4gICAgICBjYXNlIENoYXJDb2RlLlBBUkFHUkFQSFNFUEFSQVRPUjogcmV0dXJuIFwiXCI7XG4gICAgICBkZWZhdWx0OiByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICB9XG4gIH1cblxuICByZWFkUmVnZXhwUGF0dGVybigpOiBzdHJpbmcge1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgdmFyIGVzY2FwZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHRoaXMucG9zID49IGVuZCkge1xuICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgIERpYWdub3N0aWNDb2RlLlVudGVybWluYXRlZF9yZWd1bGFyX2V4cHJlc3Npb25fbGl0ZXJhbCxcbiAgICAgICAgICB0aGlzLnJhbmdlKHN0YXJ0LCBlbmQpXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuQkFDS1NMQVNIKSB7XG4gICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgIGVzY2FwZWQgPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKTtcbiAgICAgIGlmICghZXNjYXBlZCAmJiBjID09IENoYXJDb2RlLlNMQVNIKSBicmVhaztcbiAgICAgIGlmIChpc0xpbmVCcmVhayhjKSkge1xuICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgIERpYWdub3N0aWNDb2RlLlVudGVybWluYXRlZF9yZWd1bGFyX2V4cHJlc3Npb25fbGl0ZXJhbCxcbiAgICAgICAgICB0aGlzLnJhbmdlKHN0YXJ0LCB0aGlzLnBvcylcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICArK3RoaXMucG9zO1xuICAgICAgZXNjYXBlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMucG9zKTtcbiAgfVxuXG4gIHJlYWRSZWdleHBGbGFncygpOiBzdHJpbmcge1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgdmFyIGZsYWdzID0gMDtcbiAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgIGxldCBjOiBpMzIgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgaWYgKCFpc0lkZW50aWZpZXJQYXJ0KGMpKSBicmVhaztcbiAgICAgICsrdGhpcy5wb3M7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSBlYWNoIHN1cHBvcnRlZCBmbGFnIGlzIHVuaXF1ZVxuICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuZzoge1xuICAgICAgICAgIGZsYWdzIHw9IGZsYWdzICYgMSA/IC0xIDogMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLmk6IHtcbiAgICAgICAgICBmbGFncyB8PSBmbGFncyAmIDIgPyAtMSA6IDI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5tOiB7XG4gICAgICAgICAgZmxhZ3MgfD0gZmxhZ3MgJiA0ID8gLTEgOiA0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBmbGFncyA9IC0xO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmbGFncyA9PSAtMSkge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuSW52YWxpZF9yZWd1bGFyX2V4cHJlc3Npb25fZmxhZ3MsXG4gICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQsIHRoaXMucG9zKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKHN0YXJ0LCB0aGlzLnBvcyk7XG4gIH1cblxuICB0ZXN0SW50ZWdlcigpOiBib29sIHtcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIGlmICh0aGlzLnBvcyArIDEgPCBlbmQgJiYgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5fMCkge1xuICAgICAgc3dpdGNoICh0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAyKSkge1xuICAgICAgICBjYXNlIENoYXJDb2RlLng6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuWDpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5iOlxuICAgICAgICBjYXNlIENoYXJDb2RlLkI6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUubzpcbiAgICAgICAgY2FzZSBDaGFyQ29kZS5POiByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHBvcyA9IHRoaXMucG9zO1xuICAgIHdoaWxlIChwb3MgPCBlbmQpIHtcbiAgICAgIGxldCBjID0gdGV4dC5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICBpZiAoYyA9PSBDaGFyQ29kZS5ET1QgfHwgYyA9PSBDaGFyQ29kZS5lIHx8IGMgPT0gQ2hhckNvZGUuRSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKChjIDwgQ2hhckNvZGUuXzAgfHwgYyA+IENoYXJDb2RlLl85KSAmJiBjICE9IENoYXJDb2RlLl8pIGJyZWFrO1xuICAgICAgLy8gZG9lcyBub3QgdmFsaWRhdGUgc2VwYXJhdG9yIHBsYWNlbWVudCAodGhpcyBpcyBkb25lIGluIHJlYWRYWUludGVnZXIpXG4gICAgICBwb3MrKztcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZWFkSW50ZWdlcigpOiBJNjQge1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICBpZiAodGhpcy5wb3MgKyAyIDwgdGhpcy5lbmQgJiYgdGV4dC5jaGFyQ29kZUF0KHRoaXMucG9zKSA9PSBDaGFyQ29kZS5fMCkge1xuICAgICAgc3dpdGNoICh0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MgKyAxKSkge1xuICAgICAgICBjYXNlIENoYXJDb2RlLng6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuWDoge1xuICAgICAgICAgIHRoaXMucG9zICs9IDI7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVhZEhleEludGVnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLmI6XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQjoge1xuICAgICAgICAgIHRoaXMucG9zICs9IDI7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVhZEJpbmFyeUludGVnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLm86XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuTzoge1xuICAgICAgICAgIHRoaXMucG9zICs9IDI7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVhZE9jdGFsSW50ZWdlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNPY3RhbERpZ2l0KHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpKSkge1xuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLnBvcztcbiAgICAgICAgKyt0aGlzLnBvcztcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkT2N0YWxJbnRlZ2VyKCk7XG4gICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgRGlhZ25vc3RpY0NvZGUuT2N0YWxfbGl0ZXJhbHNfYXJlX25vdF9hbGxvd2VkX2luX3N0cmljdF9tb2RlLFxuICAgICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQsIHRoaXMucG9zKVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlYWREZWNpbWFsSW50ZWdlcigpO1xuICB9XG5cbiAgcmVhZEhleEludGVnZXIoKTogSTY0IHtcbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5wb3M7XG4gICAgdmFyIHZhbHVlID0gaTY0X25ldygwKTtcbiAgICB2YXIgaTY0XzQgPSBpNjRfbmV3KDQpO1xuICAgIHZhciBzZXBFbmQgPSBzdGFydDtcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICBsZXQgcG9zID0gdGhpcy5wb3M7XG4gICAgICBsZXQgYyA9IHRleHQuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGMgPj0gQ2hhckNvZGUuXzAgJiYgYyA8PSBDaGFyQ29kZS5fOSkge1xuICAgICAgICAvLyB2YWx1ZSA9ICh2YWx1ZSA8PCA0KSArIGMgLSBDaGFyQ29kZS5fMDtcbiAgICAgICAgdmFsdWUgPSBpNjRfYWRkKFxuICAgICAgICAgIGk2NF9zaGwodmFsdWUsIGk2NF80KSxcbiAgICAgICAgICBpNjRfbmV3KGMgLSBDaGFyQ29kZS5fMClcbiAgICAgICAgKTtcbiAgICAgICB9IGVsc2UgaWYgKGMgPj0gQ2hhckNvZGUuQSAmJiBjIDw9IENoYXJDb2RlLkYpIHtcbiAgICAgICAgLy8gdmFsdWUgPSAodmFsdWUgPDwgNCkgKyAxMCArIGMgLSBDaGFyQ29kZS5BO1xuICAgICAgICB2YWx1ZSA9IGk2NF9hZGQoXG4gICAgICAgICAgaTY0X3NobCh2YWx1ZSwgaTY0XzQpLFxuICAgICAgICAgIGk2NF9uZXcoMTAgKyBjIC0gQ2hhckNvZGUuQSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoYyA+PSBDaGFyQ29kZS5hICYmIGMgPD0gQ2hhckNvZGUuZikge1xuICAgICAgICAvLyB2YWx1ZSA9ICh2YWx1ZSA8PCA0KSArIDEwICsgYyAtIENoYXJDb2RlLmE7XG4gICAgICAgIHZhbHVlID0gaTY0X2FkZChcbiAgICAgICAgICBpNjRfc2hsKHZhbHVlLCBpNjRfNCksXG4gICAgICAgICAgaTY0X25ldygxMCArIGMgLSBDaGFyQ29kZS5hKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjID09IENoYXJDb2RlLl8pIHtcbiAgICAgICAgaWYgKHNlcEVuZCA9PSBwb3MpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgc2VwRW5kID09IHN0YXJ0XG4gICAgICAgICAgICAgID8gRGlhZ25vc3RpY0NvZGUuTnVtZXJpY19zZXBhcmF0b3JzX2FyZV9ub3RfYWxsb3dlZF9oZXJlXG4gICAgICAgICAgICAgIDogRGlhZ25vc3RpY0NvZGUuTXVsdGlwbGVfY29uc2VjdXRpdmVfbnVtZXJpY19zZXBhcmF0b3JzX2FyZV9ub3RfcGVybWl0dGVkLFxuICAgICAgICAgICAgdGhpcy5yYW5nZShwb3MpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBzZXBFbmQgPSBwb3MgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLnBvcyA9IHBvcyArIDE7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvcyA9PSBzdGFydCkge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuSGV4YWRlY2ltYWxfZGlnaXRfZXhwZWN0ZWQsXG4gICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQpXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoc2VwRW5kID09IHRoaXMucG9zKSB7XG4gICAgICB0aGlzLmVycm9yKFxuICAgICAgICBEaWFnbm9zdGljQ29kZS5OdW1lcmljX3NlcGFyYXRvcnNfYXJlX25vdF9hbGxvd2VkX2hlcmUsXG4gICAgICAgIHRoaXMucmFuZ2Uoc2VwRW5kIC0gMSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlYWREZWNpbWFsSW50ZWdlcigpOiBJNjQge1xuICAgIHZhciB0ZXh0ID0gdGhpcy5zb3VyY2UudGV4dDtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgdmFyIHZhbHVlID0gaTY0X25ldygwKTtcbiAgICB2YXIgaTY0XzEwID0gaTY0X25ldygxMCk7XG4gICAgdmFyIHNlcEVuZCA9IHN0YXJ0O1xuICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgbGV0IHBvcyA9IHRoaXMucG9zO1xuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmIChjID49IENoYXJDb2RlLl8wICYmIGMgPD0gQ2hhckNvZGUuXzkpIHtcbiAgICAgICAgLy8gdmFsdWUgPSB2YWx1ZSAqIDEwICsgYyAtIENoYXJDb2RlLl8wO1xuICAgICAgICB2YWx1ZSA9IGk2NF9hZGQoXG4gICAgICAgICAgaTY0X211bCh2YWx1ZSwgaTY0XzEwKSxcbiAgICAgICAgICBpNjRfbmV3KGMgLSBDaGFyQ29kZS5fMClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoYyA9PSBDaGFyQ29kZS5fKSB7XG4gICAgICAgIGlmIChzZXBFbmQgPT0gcG9zKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgIHNlcEVuZCA9PSBzdGFydFxuICAgICAgICAgICAgICA/IERpYWdub3N0aWNDb2RlLk51bWVyaWNfc2VwYXJhdG9yc19hcmVfbm90X2FsbG93ZWRfaGVyZVxuICAgICAgICAgICAgICA6IERpYWdub3N0aWNDb2RlLk11bHRpcGxlX2NvbnNlY3V0aXZlX251bWVyaWNfc2VwYXJhdG9yc19hcmVfbm90X3Blcm1pdHRlZCxcbiAgICAgICAgICAgIHRoaXMucmFuZ2UocG9zKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgc2VwRW5kID0gcG9zICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5wb3MgPSBwb3MgKyAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3MgPT0gc3RhcnQpIHtcbiAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgIERpYWdub3N0aWNDb2RlLkRpZ2l0X2V4cGVjdGVkLFxuICAgICAgICB0aGlzLnJhbmdlKHN0YXJ0KVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHNlcEVuZCA9PSB0aGlzLnBvcykge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuTnVtZXJpY19zZXBhcmF0b3JzX2FyZV9ub3RfYWxsb3dlZF9oZXJlLFxuICAgICAgICB0aGlzLnJhbmdlKHNlcEVuZCAtIDEpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZWFkT2N0YWxJbnRlZ2VyKCk6IEk2NCB7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIHZhciBzdGFydCA9IHRoaXMucG9zO1xuICAgIHZhciB2YWx1ZSA9IGk2NF9uZXcoMCk7XG4gICAgdmFyIGk2NF8zID0gaTY0X25ldygzKTtcbiAgICB2YXIgc2VwRW5kID0gc3RhcnQ7XG4gICAgdmFyIGVuZCA9IHRoaXMuZW5kO1xuICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgbGV0IHBvcyA9IHRoaXMucG9zO1xuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmIChjID49IENoYXJDb2RlLl8wICYmIGMgPD0gQ2hhckNvZGUuXzcpIHtcbiAgICAgICAgLy8gdmFsdWUgPSAodmFsdWUgPDwgMykgKyBjIC0gQ2hhckNvZGUuXzA7XG4gICAgICAgIHZhbHVlID0gaTY0X2FkZChcbiAgICAgICAgICBpNjRfc2hsKHZhbHVlLCBpNjRfMyksXG4gICAgICAgICAgaTY0X25ldyhjIC0gQ2hhckNvZGUuXzApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGMgPT0gQ2hhckNvZGUuXykge1xuICAgICAgICBpZiAoc2VwRW5kID09IHBvcykge1xuICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICBzZXBFbmQgPT0gc3RhcnRcbiAgICAgICAgICAgICAgPyBEaWFnbm9zdGljQ29kZS5OdW1lcmljX3NlcGFyYXRvcnNfYXJlX25vdF9hbGxvd2VkX2hlcmVcbiAgICAgICAgICAgICAgOiBEaWFnbm9zdGljQ29kZS5NdWx0aXBsZV9jb25zZWN1dGl2ZV9udW1lcmljX3NlcGFyYXRvcnNfYXJlX25vdF9wZXJtaXR0ZWQsXG4gICAgICAgICAgICB0aGlzLnJhbmdlKHBvcylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHNlcEVuZCA9IHBvcyArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgICsrdGhpcy5wb3M7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvcyA9PSBzdGFydCkge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuT2N0YWxfZGlnaXRfZXhwZWN0ZWQsXG4gICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQpXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoc2VwRW5kID09IHRoaXMucG9zKSB7XG4gICAgICB0aGlzLmVycm9yKFxuICAgICAgICBEaWFnbm9zdGljQ29kZS5OdW1lcmljX3NlcGFyYXRvcnNfYXJlX25vdF9hbGxvd2VkX2hlcmUsXG4gICAgICAgIHRoaXMucmFuZ2Uoc2VwRW5kIC0gMSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJlYWRCaW5hcnlJbnRlZ2VyKCk6IEk2NCB7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIHZhciBzdGFydCA9IHRoaXMucG9zO1xuICAgIHZhciB2YWx1ZSA9IGk2NF9uZXcoMCk7XG4gICAgdmFyIGk2NF8xID0gaTY0X25ldygxKTtcbiAgICB2YXIgc2VwRW5kID0gc3RhcnQ7XG4gICAgdmFyIGVuZCA9IHRoaXMuZW5kO1xuICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgbGV0IHBvcyA9IHRoaXMucG9zO1xuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmIChjID09IENoYXJDb2RlLl8wKSB7XG4gICAgICAgIC8vIHZhbHVlID0gKHZhbHVlIDw8IDEpO1xuICAgICAgICB2YWx1ZSA9IGk2NF9zaGwodmFsdWUsIGk2NF8xKTtcbiAgICAgIH0gZWxzZSBpZiAoYyA9PSBDaGFyQ29kZS5fMSkge1xuICAgICAgICAvLyB2YWx1ZSA9ICh2YWx1ZSA8PCAxKSArIDE7XG4gICAgICAgIHZhbHVlID0gaTY0X2FkZChcbiAgICAgICAgICBpNjRfc2hsKHZhbHVlLCBpNjRfMSksXG4gICAgICAgICAgaTY0XzFcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoYyA9PSBDaGFyQ29kZS5fKSB7XG4gICAgICAgIGlmIChzZXBFbmQgPT0gcG9zKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgIHNlcEVuZCA9PSBzdGFydFxuICAgICAgICAgICAgICA/IERpYWdub3N0aWNDb2RlLk51bWVyaWNfc2VwYXJhdG9yc19hcmVfbm90X2FsbG93ZWRfaGVyZVxuICAgICAgICAgICAgICA6IERpYWdub3N0aWNDb2RlLk11bHRpcGxlX2NvbnNlY3V0aXZlX251bWVyaWNfc2VwYXJhdG9yc19hcmVfbm90X3Blcm1pdHRlZCxcbiAgICAgICAgICAgIHRoaXMucmFuZ2UocG9zKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgc2VwRW5kID0gcG9zICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5wb3MgPSBwb3MgKyAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3MgPT0gc3RhcnQpIHtcbiAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgIERpYWdub3N0aWNDb2RlLkJpbmFyeV9kaWdpdF9leHBlY3RlZCxcbiAgICAgICAgdGhpcy5yYW5nZShzdGFydClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChzZXBFbmQgPT0gdGhpcy5wb3MpIHtcbiAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgIERpYWdub3N0aWNDb2RlLk51bWVyaWNfc2VwYXJhdG9yc19hcmVfbm90X2FsbG93ZWRfaGVyZSxcbiAgICAgICAgdGhpcy5yYW5nZShzZXBFbmQgLSAxKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVhZEZsb2F0KCk6IGY2NCB7XG4gICAgLy8gdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIC8vIGlmICh0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpID09IENoYXJDb2RlLl8wICYmIHRoaXMucG9zICsgMiA8IHRoaXMuZW5kKSB7XG4gICAgLy8gICBzd2l0Y2ggKHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpKSB7XG4gICAgLy8gICAgIGNhc2UgQ2hhckNvZGUuWDpcbiAgICAvLyAgICAgY2FzZSBDaGFyQ29kZS54OiB7XG4gICAgLy8gICAgICAgdGhpcy5wb3MgKz0gMjtcbiAgICAvLyAgICAgICByZXR1cm4gdGhpcy5yZWFkSGV4RmxvYXQoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICByZXR1cm4gdGhpcy5yZWFkRGVjaW1hbEZsb2F0KCk7XG4gIH1cblxuICByZWFkRGVjaW1hbEZsb2F0KCk6IGY2NCB7XG4gICAgLy8gVE9ETzogbnVtZXJpYyBzZXBhcmF0b3JzIChwYXJzZUZsb2F0IGNhbid0IGhhbmRsZSB0aGVzZSlcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnBvcztcbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCAmJiBpc0RlY2ltYWxEaWdpdCh0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpKSkge1xuICAgICAgKyt0aGlzLnBvcztcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zIDwgZW5kICYmIHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuRE9UKSB7XG4gICAgICArK3RoaXMucG9zO1xuICAgICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kICYmIGlzRGVjaW1hbERpZ2l0KHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykpKSB7XG4gICAgICAgICsrdGhpcy5wb3M7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgbGV0IGMgPSB0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpO1xuICAgICAgaWYgKGMgPT0gQ2hhckNvZGUuZSB8fCBjID09IENoYXJDb2RlLkUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICsrdGhpcy5wb3MgPCBlbmQgJiZcbiAgICAgICAgICAoYyA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykpID09IENoYXJDb2RlLk1JTlVTIHx8IGMgPT0gQ2hhckNvZGUuUExVUyAmJlxuICAgICAgICAgIGlzRGVjaW1hbERpZ2l0KHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcyArIDEpKVxuICAgICAgICApIHtcbiAgICAgICAgICArK3RoaXMucG9zO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCAmJiBpc0RlY2ltYWxEaWdpdCh0ZXh0LmNoYXJDb2RlQXQodGhpcy5wb3MpKSkge1xuICAgICAgICAgICsrdGhpcy5wb3M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGV4dC5zdWJzdHJpbmcoc3RhcnQsIHRoaXMucG9zKSk7XG4gIH1cblxuICByZWFkSGV4RmxvYXQoKTogZjY0IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7IC8vIFRCRFxuICB9XG5cbiAgcmVhZFVuaWNvZGVFc2NhcGUoKTogc3RyaW5nIHtcbiAgICB2YXIgcmVtYWluID0gNDtcbiAgICB2YXIgdmFsdWUgPSAwO1xuICAgIHZhciBlbmQgPSB0aGlzLmVuZDtcbiAgICB2YXIgdGV4dCA9IHRoaXMuc291cmNlLnRleHQ7XG4gICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICBsZXQgYyA9IHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcysrKTtcbiAgICAgIGlmIChjID49IENoYXJDb2RlLl8wICYmIGMgPD0gQ2hhckNvZGUuXzkpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgPDwgNCkgKyBjIC0gQ2hhckNvZGUuXzA7XG4gICAgICB9IGVsc2UgaWYgKGMgPj0gQ2hhckNvZGUuQSAmJiBjIDw9IENoYXJDb2RlLkYpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgPDwgNCkgKyBjICsgKDEwIC0gQ2hhckNvZGUuQSk7XG4gICAgICB9IGVsc2UgaWYgKGMgPj0gQ2hhckNvZGUuYSAmJiBjIDw9IENoYXJDb2RlLmYpIHtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgPDwgNCkgKyBjICsgKDEwIC0gQ2hhckNvZGUuYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgIERpYWdub3N0aWNDb2RlLkhleGFkZWNpbWFsX2RpZ2l0X2V4cGVjdGVkLFxuICAgICAgICAgIHRoaXMucmFuZ2UodGhpcy5wb3MgLSAxLCB0aGlzLnBvcylcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgICBpZiAoLS1yZW1haW4gPT0gMCkgYnJlYWs7XG4gICAgfVxuICAgIGlmIChyZW1haW4pIHtcbiAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgIERpYWdub3N0aWNDb2RlLlVuZXhwZWN0ZWRfZW5kX29mX3RleHQsXG4gICAgICAgIHRoaXMucmFuZ2UodGhpcy5wb3MpXG4gICAgICApO1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVhZEV4dGVuZGVkVW5pY29kZUVzY2FwZSgpOiBzdHJpbmcge1xuICAgIHZhciBzdGFydCA9IHRoaXMucG9zO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMucmVhZEhleEludGVnZXIoKTtcbiAgICB2YXIgdmFsdWUzMiA9IGk2NF9sb3codmFsdWUpO1xuICAgIHZhciBpbnZhbGlkID0gZmFsc2U7XG5cbiAgICBhc3NlcnQoIWk2NF9oaWdoKHZhbHVlKSk7XG4gICAgaWYgKHZhbHVlMzIgPiAweDEwRkZGRikge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuQW5fZXh0ZW5kZWRfVW5pY29kZV9lc2NhcGVfdmFsdWVfbXVzdF9iZV9iZXR3ZWVuXzB4MF9hbmRfMHgxMEZGRkZfaW5jbHVzaXZlLFxuICAgICAgICB0aGlzLnJhbmdlKHN0YXJ0LCB0aGlzLnBvcylcbiAgICAgICk7XG4gICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gdGhpcy5lbmQ7XG4gICAgdmFyIHRleHQgPSB0aGlzLnNvdXJjZS50ZXh0O1xuICAgIGlmICh0aGlzLnBvcyA+PSBlbmQpIHtcbiAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgIERpYWdub3N0aWNDb2RlLlVuZXhwZWN0ZWRfZW5kX29mX3RleHQsXG4gICAgICAgIHRoaXMucmFuZ2Uoc3RhcnQsIGVuZClcbiAgICAgICk7XG4gICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRleHQuY2hhckNvZGVBdCh0aGlzLnBvcykgPT0gQ2hhckNvZGUuQ0xPU0VCUkFDRSkge1xuICAgICAgKyt0aGlzLnBvcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgRGlhZ25vc3RpY0NvZGUuVW50ZXJtaW5hdGVkX1VuaWNvZGVfZXNjYXBlX3NlcXVlbmNlLFxuICAgICAgICB0aGlzLnJhbmdlKHN0YXJ0LCB0aGlzLnBvcylcbiAgICAgICk7XG4gICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaW52YWxpZCkgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIHZhbHVlMzIgPCA2NTUzNlxuICAgICAgPyBTdHJpbmcuZnJvbUNoYXJDb2RlKHZhbHVlMzIpXG4gICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICgodmFsdWUzMiAtIDY1NTM2KSA+Pj4gMTApICsgMHhEODAwLFxuICAgICAgICAoKHZhbHVlMzIgLSA2NTUzNikgJiAxMDIzKSArIDB4REMwMFxuICAgICAgKTtcbiAgfVxuXG4gIGZpbmlzaCgpOiB2b2lkIHtcbiAgfVxufVxuXG4vKiogVG9rZW5pemVyIHN0YXRlIGFzIHJldHVybmVkIGJ5IHtAbGluayBUb2tlbml6ZXIjbWFya30gYW5kIGNvbnN1bWVkIGJ5IHtAbGluayBUb2tlbml6ZXIjcmVzZXR9LiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRlIHtcbiAgLyoqIEN1cnJlbnQgcG9zaXRpb24uICovXG4gIHBvczogaTMyO1xuICAvKiogQ3VycmVudCB0b2tlbi4gKi9cbiAgdG9rZW46IFRva2VuO1xuICAvKiogQ3VycmVudCB0b2tlbidzIHBvc2l0aW9uLiAqL1xuICB0b2tlblBvczogaTMyO1xufVxuXG4vLyBSZXVzYWJsZSBzdGF0ZSBvYmplY3QgdG8gcmVkdWNlIGFsbG9jYXRpb25zXG52YXIgcmV1c2FibGVTdGF0ZTogU3RhdGUgfCBudWxsID0gbnVsbDtcbiJdfQ==

/***/ }),

/***/ "./node_modules/assemblyscript/src/util/binary.ts":
/*!********************************************************!*\
  !*** ./node_modules/assemblyscript/src/util/binary.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module util */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
/** Reads an 8-bit integer from the specified buffer. */
function readI8(buffer, offset) {
    return buffer[offset];
}
exports.readI8 = readI8;
/** Writes an 8-bit integer to the specified buffer. */
function writeI8(value, buffer, offset) {
    buffer[offset] = value;
}
exports.writeI8 = writeI8;
/** Reads a 16-bit integer from the specified buffer. */
function readI16(buffer, offset) {
    return buffer[offset]
        | buffer[offset + 1] << 8;
}
exports.readI16 = readI16;
/** Writes a 16-bit integer to the specified buffer. */
function writeI16(value, buffer, offset) {
    buffer[offset] = value;
    buffer[offset + 1] = value >>> 8;
}
exports.writeI16 = writeI16;
/** Reads a 32-bit integer from the specified buffer. */
function readI32(buffer, offset) {
    return buffer[offset]
        | buffer[offset + 1] << 8
        | buffer[offset + 2] << 16
        | buffer[offset + 3] << 24;
}
exports.readI32 = readI32;
/** Writes a 32-bit integer to the specified buffer. */
function writeI32(value, buffer, offset) {
    buffer[offset] = value;
    buffer[offset + 1] = value >>> 8;
    buffer[offset + 2] = value >>> 16;
    buffer[offset + 3] = value >>> 24;
}
exports.writeI32 = writeI32;
/** Reads a 64-bit integer from the specified buffer. */
function readI64(buffer, offset) {
    var lo = readI32(buffer, offset);
    var hi = readI32(buffer, offset + 4);
    return i64_new(lo, hi);
}
exports.readI64 = readI64;
/** Writes a 64-bit integer to the specified buffer. */
function writeI64(value, buffer, offset) {
    writeI32(i64_low(value), buffer, offset);
    writeI32(i64_high(value), buffer, offset + 4);
}
exports.writeI64 = writeI64;
/** Reads a 32-bit float from the specified buffer. */
function readF32(buffer, offset) {
    return i32_as_f32(readI32(buffer, offset));
}
exports.readF32 = readF32;
/** Writes a 32-bit float to the specified buffer. */
function writeF32(value, buffer, offset) {
    writeI32(f32_as_i32(value), buffer, offset);
}
exports.writeF32 = writeF32;
/** Reads a 64-bit float from the specified buffer. */
function readF64(buffer, offset) {
    return i64_as_f64(readI64(buffer, offset));
}
exports.readF64 = readF64;
/** Writes a 64-bit float to the specified buffer. */
function writeF64(value, buffer, offset) {
    var valueI64 = f64_as_i64(value);
    writeI32(i64_low(valueI64), buffer, offset);
    writeI32(i64_high(valueI64), buffer, offset + 4);
}
exports.writeF64 = writeF64;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluYXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3NyYy91dGlsL2JpbmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQW1CLENBQUEsS0FBSzs7QUFFeEIsd0RBQXdEO0FBQ3hELFNBQWdCLE1BQU0sQ0FBQyxNQUFrQixFQUFFLE1BQVc7SUFDcEQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUZELHdCQUVDO0FBRUQsdURBQXVEO0FBQ3ZELFNBQWdCLE9BQU8sQ0FBQyxLQUFVLEVBQUUsTUFBa0IsRUFBRSxNQUFXO0lBQ2pFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDekIsQ0FBQztBQUZELDBCQUVDO0FBRUQsd0RBQXdEO0FBQ3hELFNBQWdCLE9BQU8sQ0FBQyxNQUFrQixFQUFFLE1BQVc7SUFDckQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFLO1VBQ2xCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFIRCwwQkFHQztBQUVELHVEQUF1RDtBQUN2RCxTQUFnQixRQUFRLENBQUMsS0FBVSxFQUFFLE1BQWtCLEVBQUUsTUFBVztJQUNsRSxNQUFNLENBQUMsTUFBTSxDQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBSEQsNEJBR0M7QUFFRCx3REFBd0Q7QUFDeEQsU0FBZ0IsT0FBTyxDQUFDLE1BQWtCLEVBQUUsTUFBVztJQUNyRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUs7VUFDbEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1VBQ3ZCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRTtVQUN4QixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxDQUFDO0FBTEQsMEJBS0M7QUFFRCx1REFBdUQ7QUFDdkQsU0FBZ0IsUUFBUSxDQUFDLEtBQVUsRUFBRSxNQUFrQixFQUFFLE1BQVc7SUFDbEUsTUFBTSxDQUFDLE1BQU0sQ0FBSyxHQUFHLEtBQUssQ0FBQztJQUMzQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBTEQsNEJBS0M7QUFFRCx3REFBd0Q7QUFDeEQsU0FBZ0IsT0FBTyxDQUFDLE1BQWtCLEVBQUUsTUFBVztJQUNyRCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBSkQsMEJBSUM7QUFFRCx1REFBdUQ7QUFDdkQsU0FBZ0IsUUFBUSxDQUFDLEtBQVUsRUFBRSxNQUFrQixFQUFFLE1BQVc7SUFDbEUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFIRCw0QkFHQztBQUVELHNEQUFzRDtBQUN0RCxTQUFnQixPQUFPLENBQUMsTUFBa0IsRUFBRSxNQUFXO0lBQ3JELE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRkQsMEJBRUM7QUFFRCxxREFBcUQ7QUFDckQsU0FBZ0IsUUFBUSxDQUFDLEtBQVUsRUFBRSxNQUFrQixFQUFFLE1BQVc7SUFDbEUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUZELDRCQUVDO0FBRUQsc0RBQXNEO0FBQ3RELFNBQWdCLE9BQU8sQ0FBQyxNQUFrQixFQUFFLE1BQVc7SUFDckQsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFGRCwwQkFFQztBQUVELHFEQUFxRDtBQUNyRCxTQUFnQixRQUFRLENBQUMsS0FBVSxFQUFFLE1BQWtCLEVBQUUsTUFBVztJQUNsRSxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFKRCw0QkFJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbW9kdWxlIHV0aWwgKi8vKioqL1xuXG4vKiogUmVhZHMgYW4gOC1iaXQgaW50ZWdlciBmcm9tIHRoZSBzcGVjaWZpZWQgYnVmZmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWRJOChidWZmZXI6IFVpbnQ4QXJyYXksIG9mZnNldDogaTMyKTogaTMyIHtcbiAgcmV0dXJuIGJ1ZmZlcltvZmZzZXRdO1xufVxuXG4vKiogV3JpdGVzIGFuIDgtYml0IGludGVnZXIgdG8gdGhlIHNwZWNpZmllZCBidWZmZXIuICovXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVJOCh2YWx1ZTogaTMyLCBidWZmZXI6IFVpbnQ4QXJyYXksIG9mZnNldDogaTMyKTogdm9pZCB7XG4gIGJ1ZmZlcltvZmZzZXRdID0gdmFsdWU7XG59XG5cbi8qKiBSZWFkcyBhIDE2LWJpdCBpbnRlZ2VyIGZyb20gdGhlIHNwZWNpZmllZCBidWZmZXIuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZEkxNihidWZmZXI6IFVpbnQ4QXJyYXksIG9mZnNldDogaTMyKTogaTMyIHtcbiAgcmV0dXJuIGJ1ZmZlcltvZmZzZXQgICAgXVxuICAgICAgIHwgYnVmZmVyW29mZnNldCArIDFdIDw8IDg7XG59XG5cbi8qKiBXcml0ZXMgYSAxNi1iaXQgaW50ZWdlciB0byB0aGUgc3BlY2lmaWVkIGJ1ZmZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUkxNih2YWx1ZTogaTMyLCBidWZmZXI6IFVpbnQ4QXJyYXksIG9mZnNldDogaTMyKTogdm9pZCB7XG4gIGJ1ZmZlcltvZmZzZXQgICAgXSA9IHZhbHVlO1xuICBidWZmZXJbb2Zmc2V0ICsgMV0gPSB2YWx1ZSA+Pj4gODtcbn1cblxuLyoqIFJlYWRzIGEgMzItYml0IGludGVnZXIgZnJvbSB0aGUgc3BlY2lmaWVkIGJ1ZmZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkSTMyKGJ1ZmZlcjogVWludDhBcnJheSwgb2Zmc2V0OiBpMzIpOiBpMzIge1xuICByZXR1cm4gYnVmZmVyW29mZnNldCAgICBdXG4gICAgICAgfCBidWZmZXJbb2Zmc2V0ICsgMV0gPDwgOFxuICAgICAgIHwgYnVmZmVyW29mZnNldCArIDJdIDw8IDE2XG4gICAgICAgfCBidWZmZXJbb2Zmc2V0ICsgM10gPDwgMjQ7XG59XG5cbi8qKiBXcml0ZXMgYSAzMi1iaXQgaW50ZWdlciB0byB0aGUgc3BlY2lmaWVkIGJ1ZmZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUkzMih2YWx1ZTogaTMyLCBidWZmZXI6IFVpbnQ4QXJyYXksIG9mZnNldDogaTMyKTogdm9pZCB7XG4gIGJ1ZmZlcltvZmZzZXQgICAgXSA9IHZhbHVlO1xuICBidWZmZXJbb2Zmc2V0ICsgMV0gPSB2YWx1ZSA+Pj4gODtcbiAgYnVmZmVyW29mZnNldCArIDJdID0gdmFsdWUgPj4+IDE2O1xuICBidWZmZXJbb2Zmc2V0ICsgM10gPSB2YWx1ZSA+Pj4gMjQ7XG59XG5cbi8qKiBSZWFkcyBhIDY0LWJpdCBpbnRlZ2VyIGZyb20gdGhlIHNwZWNpZmllZCBidWZmZXIuICovXG5leHBvcnQgZnVuY3Rpb24gcmVhZEk2NChidWZmZXI6IFVpbnQ4QXJyYXksIG9mZnNldDogaTMyKTogSTY0IHtcbiAgdmFyIGxvID0gcmVhZEkzMihidWZmZXIsIG9mZnNldCk7XG4gIHZhciBoaSA9IHJlYWRJMzIoYnVmZmVyLCBvZmZzZXQgKyA0KTtcbiAgcmV0dXJuIGk2NF9uZXcobG8sIGhpKTtcbn1cblxuLyoqIFdyaXRlcyBhIDY0LWJpdCBpbnRlZ2VyIHRvIHRoZSBzcGVjaWZpZWQgYnVmZmVyLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlSTY0KHZhbHVlOiBJNjQsIGJ1ZmZlcjogVWludDhBcnJheSwgb2Zmc2V0OiBpMzIpOiB2b2lkIHtcbiAgd3JpdGVJMzIoaTY0X2xvdyh2YWx1ZSksIGJ1ZmZlciwgb2Zmc2V0KTtcbiAgd3JpdGVJMzIoaTY0X2hpZ2godmFsdWUpLCBidWZmZXIsIG9mZnNldCArIDQpO1xufVxuXG4vKiogUmVhZHMgYSAzMi1iaXQgZmxvYXQgZnJvbSB0aGUgc3BlY2lmaWVkIGJ1ZmZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkRjMyKGJ1ZmZlcjogVWludDhBcnJheSwgb2Zmc2V0OiBpMzIpOiBmMzIge1xuICByZXR1cm4gaTMyX2FzX2YzMihyZWFkSTMyKGJ1ZmZlciwgb2Zmc2V0KSk7XG59XG5cbi8qKiBXcml0ZXMgYSAzMi1iaXQgZmxvYXQgdG8gdGhlIHNwZWNpZmllZCBidWZmZXIuICovXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGMzIodmFsdWU6IGYzMiwgYnVmZmVyOiBVaW50OEFycmF5LCBvZmZzZXQ6IGkzMik6IHZvaWQge1xuICB3cml0ZUkzMihmMzJfYXNfaTMyKHZhbHVlKSwgYnVmZmVyLCBvZmZzZXQpO1xufVxuXG4vKiogUmVhZHMgYSA2NC1iaXQgZmxvYXQgZnJvbSB0aGUgc3BlY2lmaWVkIGJ1ZmZlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWFkRjY0KGJ1ZmZlcjogVWludDhBcnJheSwgb2Zmc2V0OiBpMzIpOiBmNjQge1xuICByZXR1cm4gaTY0X2FzX2Y2NChyZWFkSTY0KGJ1ZmZlciwgb2Zmc2V0KSk7XG59XG5cbi8qKiBXcml0ZXMgYSA2NC1iaXQgZmxvYXQgdG8gdGhlIHNwZWNpZmllZCBidWZmZXIuICovXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGNjQodmFsdWU6IGY2NCwgYnVmZmVyOiBVaW50OEFycmF5LCBvZmZzZXQ6IGkzMik6IHZvaWQge1xuICB2YXIgdmFsdWVJNjQgPSBmNjRfYXNfaTY0KHZhbHVlKTtcbiAgd3JpdGVJMzIoaTY0X2xvdyh2YWx1ZUk2NCksIGJ1ZmZlciwgb2Zmc2V0KTtcbiAgd3JpdGVJMzIoaTY0X2hpZ2godmFsdWVJNjQpLCBidWZmZXIsIG9mZnNldCArIDQpO1xufVxuIl19

/***/ }),

/***/ "./node_modules/assemblyscript/src/util/bitset.ts":
/*!********************************************************!*\
  !*** ./node_modules/assemblyscript/src/util/bitset.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module util */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
/** Tests if the bit at the specified index is set within a 64-bit map. */
function bitsetIs(map, index) {
    assert(index >= 0 && index < 64);
    return i64_ne(i64_and(map, i64_shl(i64_one, i64_new(index))), i64_zero);
}
exports.bitsetIs = bitsetIs;
/** Sets or unsets the bit at the specified index within a 64-bit map and returns the new map. */
function bitsetSet(map, index, isSet) {
    assert(index >= 0 && index < 64);
    return isSet
        ? i64_or(map, i64_shl(i64_one, i64_new(index)))
        : i64_and(map, i64_not(i64_shl(i64_one, i64_new(index))));
}
exports.bitsetSet = bitsetSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYml0c2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3NyYy91dGlsL2JpdHNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQW1CLENBQUEsS0FBSzs7QUFFeEIsMEVBQTBFO0FBQzFFLFNBQWdCLFFBQVEsQ0FBQyxHQUFRLEVBQUUsS0FBVTtJQUMzQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsT0FBTyxNQUFNLENBQ1gsT0FBTyxDQUNMLEdBQUcsRUFDSCxPQUFPLENBQ0wsT0FBTyxFQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FDZixDQUNGLEVBQ0QsUUFBUSxDQUNULENBQUM7QUFDSixDQUFDO0FBWkQsNEJBWUM7QUFFRCxpR0FBaUc7QUFDakcsU0FBZ0IsU0FBUyxDQUFDLEdBQVEsRUFBRSxLQUFVLEVBQUUsS0FBVztJQUN6RCxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakMsT0FBTyxLQUFLO1FBQ1YsQ0FBQyxDQUFDLE1BQU0sQ0FDSixHQUFHLEVBQ0gsT0FBTyxDQUNMLE9BQU8sRUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQ2YsQ0FDRjtRQUNILENBQUMsQ0FBQyxPQUFPLENBQ0wsR0FBRyxFQUNILE9BQU8sQ0FDTCxPQUFPLENBQ0wsT0FBTyxFQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FDZixDQUNGLENBQ0YsQ0FBQztBQUNSLENBQUM7QUFuQkQsOEJBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgdXRpbCAqLy8qKiovXG5cbi8qKiBUZXN0cyBpZiB0aGUgYml0IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggaXMgc2V0IHdpdGhpbiBhIDY0LWJpdCBtYXAuICovXG5leHBvcnQgZnVuY3Rpb24gYml0c2V0SXMobWFwOiBJNjQsIGluZGV4OiBpMzIpOiBib29sIHtcbiAgYXNzZXJ0KGluZGV4ID49IDAgJiYgaW5kZXggPCA2NCk7XG4gIHJldHVybiBpNjRfbmUoXG4gICAgaTY0X2FuZChcbiAgICAgIG1hcCxcbiAgICAgIGk2NF9zaGwoXG4gICAgICAgIGk2NF9vbmUsXG4gICAgICAgIGk2NF9uZXcoaW5kZXgpXG4gICAgICApXG4gICAgKSxcbiAgICBpNjRfemVyb1xuICApO1xufVxuXG4vKiogU2V0cyBvciB1bnNldHMgdGhlIGJpdCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IHdpdGhpbiBhIDY0LWJpdCBtYXAgYW5kIHJldHVybnMgdGhlIG5ldyBtYXAuICovXG5leHBvcnQgZnVuY3Rpb24gYml0c2V0U2V0KG1hcDogSTY0LCBpbmRleDogaTMyLCBpc1NldDogYm9vbCk6IEk2NCB7XG4gIGFzc2VydChpbmRleCA+PSAwICYmIGluZGV4IDwgNjQpO1xuICByZXR1cm4gaXNTZXRcbiAgICA/IGk2NF9vcihcbiAgICAgICAgbWFwLFxuICAgICAgICBpNjRfc2hsKFxuICAgICAgICAgIGk2NF9vbmUsXG4gICAgICAgICAgaTY0X25ldyhpbmRleClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIDogaTY0X2FuZChcbiAgICAgICAgbWFwLFxuICAgICAgICBpNjRfbm90KFxuICAgICAgICAgIGk2NF9zaGwoXG4gICAgICAgICAgICBpNjRfb25lLFxuICAgICAgICAgICAgaTY0X25ldyhpbmRleClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/assemblyscript/src/util/charcode.ts":
/*!**********************************************************!*\
  !*** ./node_modules/assemblyscript/src/util/charcode.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module util */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
/** An enum of named character codes. */
var CharCode;
(function (CharCode) {
    CharCode[CharCode["NULL"] = 0] = "NULL";
    CharCode[CharCode["LINEFEED"] = 10] = "LINEFEED";
    CharCode[CharCode["CARRIAGERETURN"] = 13] = "CARRIAGERETURN";
    CharCode[CharCode["LINESEPARATOR"] = 8232] = "LINESEPARATOR";
    CharCode[CharCode["PARAGRAPHSEPARATOR"] = 8233] = "PARAGRAPHSEPARATOR";
    CharCode[CharCode["NEXTLINE"] = 133] = "NEXTLINE";
    CharCode[CharCode["SPACE"] = 32] = "SPACE";
    CharCode[CharCode["NONBREAKINGSPACE"] = 160] = "NONBREAKINGSPACE";
    CharCode[CharCode["ENQUAD"] = 8192] = "ENQUAD";
    CharCode[CharCode["EMQUAD"] = 8193] = "EMQUAD";
    CharCode[CharCode["ENSPACE"] = 8194] = "ENSPACE";
    CharCode[CharCode["EMSPACE"] = 8195] = "EMSPACE";
    CharCode[CharCode["THREEPEREMSPACE"] = 8196] = "THREEPEREMSPACE";
    CharCode[CharCode["FOURPEREMSPACE"] = 8197] = "FOURPEREMSPACE";
    CharCode[CharCode["SIXPEREMSPACE"] = 8198] = "SIXPEREMSPACE";
    CharCode[CharCode["FIGURESPACE"] = 8199] = "FIGURESPACE";
    CharCode[CharCode["PUNCTUATIONSPACE"] = 8200] = "PUNCTUATIONSPACE";
    CharCode[CharCode["THINSPACE"] = 8201] = "THINSPACE";
    CharCode[CharCode["HAIRSPACE"] = 8202] = "HAIRSPACE";
    CharCode[CharCode["ZEROWIDTHSPACE"] = 8203] = "ZEROWIDTHSPACE";
    CharCode[CharCode["NARROWNOBREAKSPACE"] = 8239] = "NARROWNOBREAKSPACE";
    CharCode[CharCode["IDEOGRAPHICSPACE"] = 12288] = "IDEOGRAPHICSPACE";
    CharCode[CharCode["MATHEMATICALSPACE"] = 8287] = "MATHEMATICALSPACE";
    CharCode[CharCode["OGHAM"] = 5760] = "OGHAM";
    CharCode[CharCode["_"] = 95] = "_";
    CharCode[CharCode["_0"] = 48] = "_0";
    CharCode[CharCode["_1"] = 49] = "_1";
    CharCode[CharCode["_2"] = 50] = "_2";
    CharCode[CharCode["_3"] = 51] = "_3";
    CharCode[CharCode["_4"] = 52] = "_4";
    CharCode[CharCode["_5"] = 53] = "_5";
    CharCode[CharCode["_6"] = 54] = "_6";
    CharCode[CharCode["_7"] = 55] = "_7";
    CharCode[CharCode["_8"] = 56] = "_8";
    CharCode[CharCode["_9"] = 57] = "_9";
    CharCode[CharCode["a"] = 97] = "a";
    CharCode[CharCode["b"] = 98] = "b";
    CharCode[CharCode["c"] = 99] = "c";
    CharCode[CharCode["d"] = 100] = "d";
    CharCode[CharCode["e"] = 101] = "e";
    CharCode[CharCode["f"] = 102] = "f";
    CharCode[CharCode["g"] = 103] = "g";
    CharCode[CharCode["h"] = 104] = "h";
    CharCode[CharCode["i"] = 105] = "i";
    CharCode[CharCode["j"] = 106] = "j";
    CharCode[CharCode["k"] = 107] = "k";
    CharCode[CharCode["l"] = 108] = "l";
    CharCode[CharCode["m"] = 109] = "m";
    CharCode[CharCode["n"] = 110] = "n";
    CharCode[CharCode["o"] = 111] = "o";
    CharCode[CharCode["p"] = 112] = "p";
    CharCode[CharCode["q"] = 113] = "q";
    CharCode[CharCode["r"] = 114] = "r";
    CharCode[CharCode["s"] = 115] = "s";
    CharCode[CharCode["t"] = 116] = "t";
    CharCode[CharCode["u"] = 117] = "u";
    CharCode[CharCode["v"] = 118] = "v";
    CharCode[CharCode["w"] = 119] = "w";
    CharCode[CharCode["x"] = 120] = "x";
    CharCode[CharCode["y"] = 121] = "y";
    CharCode[CharCode["z"] = 122] = "z";
    CharCode[CharCode["A"] = 65] = "A";
    CharCode[CharCode["B"] = 66] = "B";
    CharCode[CharCode["C"] = 67] = "C";
    CharCode[CharCode["D"] = 68] = "D";
    CharCode[CharCode["E"] = 69] = "E";
    CharCode[CharCode["F"] = 70] = "F";
    CharCode[CharCode["G"] = 71] = "G";
    CharCode[CharCode["H"] = 72] = "H";
    CharCode[CharCode["I"] = 73] = "I";
    CharCode[CharCode["J"] = 74] = "J";
    CharCode[CharCode["K"] = 75] = "K";
    CharCode[CharCode["L"] = 76] = "L";
    CharCode[CharCode["M"] = 77] = "M";
    CharCode[CharCode["N"] = 78] = "N";
    CharCode[CharCode["O"] = 79] = "O";
    CharCode[CharCode["P"] = 80] = "P";
    CharCode[CharCode["Q"] = 81] = "Q";
    CharCode[CharCode["R"] = 82] = "R";
    CharCode[CharCode["S"] = 83] = "S";
    CharCode[CharCode["T"] = 84] = "T";
    CharCode[CharCode["U"] = 85] = "U";
    CharCode[CharCode["V"] = 86] = "V";
    CharCode[CharCode["W"] = 87] = "W";
    CharCode[CharCode["X"] = 88] = "X";
    CharCode[CharCode["Y"] = 89] = "Y";
    CharCode[CharCode["Z"] = 90] = "Z";
    CharCode[CharCode["AMPERSAND"] = 38] = "AMPERSAND";
    CharCode[CharCode["ASTERISK"] = 42] = "ASTERISK";
    CharCode[CharCode["AT"] = 64] = "AT";
    CharCode[CharCode["BACKSLASH"] = 92] = "BACKSLASH";
    CharCode[CharCode["BACKTICK"] = 96] = "BACKTICK";
    CharCode[CharCode["BAR"] = 124] = "BAR";
    CharCode[CharCode["CARET"] = 94] = "CARET";
    CharCode[CharCode["CLOSEBRACE"] = 125] = "CLOSEBRACE";
    CharCode[CharCode["CLOSEBRACKET"] = 93] = "CLOSEBRACKET";
    CharCode[CharCode["CLOSEPAREN"] = 41] = "CLOSEPAREN";
    CharCode[CharCode["COLON"] = 58] = "COLON";
    CharCode[CharCode["COMMA"] = 44] = "COMMA";
    CharCode[CharCode["DOLLAR"] = 36] = "DOLLAR";
    CharCode[CharCode["DOT"] = 46] = "DOT";
    CharCode[CharCode["DOUBLEQUOTE"] = 34] = "DOUBLEQUOTE";
    CharCode[CharCode["EQUALS"] = 61] = "EQUALS";
    CharCode[CharCode["EXCLAMATION"] = 33] = "EXCLAMATION";
    CharCode[CharCode["GREATERTHAN"] = 62] = "GREATERTHAN";
    CharCode[CharCode["HASH"] = 35] = "HASH";
    CharCode[CharCode["LESSTHAN"] = 60] = "LESSTHAN";
    CharCode[CharCode["MINUS"] = 45] = "MINUS";
    CharCode[CharCode["OPENBRACE"] = 123] = "OPENBRACE";
    CharCode[CharCode["OPENBRACKET"] = 91] = "OPENBRACKET";
    CharCode[CharCode["OPENPAREN"] = 40] = "OPENPAREN";
    CharCode[CharCode["PERCENT"] = 37] = "PERCENT";
    CharCode[CharCode["PLUS"] = 43] = "PLUS";
    CharCode[CharCode["QUESTION"] = 63] = "QUESTION";
    CharCode[CharCode["SEMICOLON"] = 59] = "SEMICOLON";
    CharCode[CharCode["SINGLEQUOTE"] = 39] = "SINGLEQUOTE";
    CharCode[CharCode["SLASH"] = 47] = "SLASH";
    CharCode[CharCode["TILDE"] = 126] = "TILDE";
    CharCode[CharCode["BACKSPACE"] = 8] = "BACKSPACE";
    CharCode[CharCode["FORMFEED"] = 12] = "FORMFEED";
    CharCode[CharCode["BYTEORDERMARK"] = 65279] = "BYTEORDERMARK";
    CharCode[CharCode["TAB"] = 9] = "TAB";
    CharCode[CharCode["VERTICALTAB"] = 11] = "VERTICALTAB";
})(CharCode = exports.CharCode || (exports.CharCode = {}));
/** Tests if the specified character code is some sort of line break. */
function isLineBreak(c) {
    switch (c) {
        case 10 /* LINEFEED */:
        case 13 /* CARRIAGERETURN */:
        case 8232 /* LINESEPARATOR */:
        case 8233 /* PARAGRAPHSEPARATOR */: {
            return true;
        }
        default: {
            return false;
        }
    }
}
exports.isLineBreak = isLineBreak;
/** Tests if the specified character code is some sort of white space. */
function isWhiteSpace(c) {
    switch (c) {
        case 32 /* SPACE */:
        case 9 /* TAB */:
        case 11 /* VERTICALTAB */:
        case 12 /* FORMFEED */:
        case 160 /* NONBREAKINGSPACE */:
        case 133 /* NEXTLINE */:
        case 5760 /* OGHAM */:
        case 8239 /* NARROWNOBREAKSPACE */:
        case 8287 /* MATHEMATICALSPACE */:
        case 12288 /* IDEOGRAPHICSPACE */:
        case 65279 /* BYTEORDERMARK */: {
            return true;
        }
        default: {
            return c >= 8192 /* ENQUAD */ && c <= 8203 /* ZEROWIDTHSPACE */;
        }
    }
}
exports.isWhiteSpace = isWhiteSpace;
/** Tests if the specified character code is a valid decimal digit. */
function isDecimalDigit(c) {
    return c >= 48 /* _0 */ && c <= 57 /* _9 */;
}
exports.isDecimalDigit = isDecimalDigit;
/** Tests if the specified character code is a valid octal digit. */
function isOctalDigit(c) {
    return c >= 48 /* _0 */ && c <= 55 /* _7 */;
}
exports.isOctalDigit = isOctalDigit;
/** Tests if the specified character code is a valid start of an identifier. */
function isIdentifierStart(c) {
    return c >= 97 /* a */ && c <= 122 /* z */
        || c >= 65 /* A */ && c <= 90 /* Z */
        || c == 95 /* _ */
        || c == 36 /* DOLLAR */
        || c > 0x7f && isUnicodeIdentifierStart(c);
}
exports.isIdentifierStart = isIdentifierStart;
/** Tests if the specified character code is a valid keyword character. */
function isKeywordCharacter(c) {
    return c >= 97 /* a */ && c <= 122 /* z */;
}
exports.isKeywordCharacter = isKeywordCharacter;
/** Tests if the specified character code is a valid part of an identifier. */
function isIdentifierPart(c) {
    return c >= 97 /* a */ && c <= 122 /* z */
        || c >= 65 /* A */ && c <= 90 /* Z */
        || c >= 48 /* _0 */ && c <= 57 /* _9 */
        || c == 95 /* _ */
        || c == 36 /* DOLLAR */
        || c > 0x7f && isUnicodeIdentifierPart(c);
}
exports.isIdentifierPart = isIdentifierPart;
// storing as u16 to save memory
var unicodeIdentifierStart = [
    170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736,
    740, 748, 748, 750, 750, 880, 884, 886, 887, 890, 893, 902, 902, 904, 906,
    908, 908, 910, 929, 931,
    1013, 1015, 1153, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514,
    1520, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1749, 1749, 1765, 1766, 1774,
    1775, 1786, 1788, 1791, 1791, 1808, 1808, 1810, 1839, 1869, 1957, 1969, 1969,
    1994, 2026, 2036, 2037, 2042, 2042, 2048, 2069, 2074, 2074, 2084, 2084, 2088,
    2088, 2112, 2136, 2208, 2208, 2210, 2220, 2308, 2361, 2365, 2365, 2384, 2384,
    2392, 2401, 2417, 2423, 2425, 2431, 2437, 2444, 2447, 2448, 2451, 2472, 2474,
    2480, 2482, 2482, 2486, 2489, 2493, 2493, 2510, 2510, 2524, 2525, 2527, 2529,
    2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613,
    2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2701, 2703, 2705,
    2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784,
    2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873,
    2877, 2877, 2908, 2909, 2911, 2913, 2929, 2929, 2947, 2947, 2949, 2954, 2958,
    2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986,
    2990, 3001, 3024, 3024, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125,
    3129, 3133, 3133, 3160, 3161, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240,
    3242, 3251, 3253, 3257, 3261, 3261, 3294, 3294, 3296, 3297, 3313, 3314, 3333,
    3340, 3342, 3344, 3346, 3386, 3389, 3389, 3406, 3406, 3424, 3425, 3450, 3455,
    3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634,
    3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725,
    3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757,
    3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3807, 3840, 3840,
    3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4159, 4159, 4176, 4181, 4186,
    4189, 4193, 4193, 4197, 4198, 4206, 4208, 4213, 4225, 4238, 4238, 4256, 4293,
    4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696,
    4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798,
    4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992,
    5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872,
    5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6000, 6016,
    6067, 6103, 6103, 6108, 6108, 6176, 6263, 6272, 6312, 6314, 6314, 6320, 6389,
    6400, 6428, 6480, 6509, 6512, 6516, 6528, 6571, 6593, 6599, 6656, 6678, 6688,
    6740, 6823, 6823, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7098, 7141,
    7168, 7203, 7245, 7247, 7258, 7293, 7401, 7404, 7406, 7409, 7413, 7414, 7424,
    7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025,
    8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130,
    8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188,
    8305, 8305, 8319, 8319, 8336, 8348, 8450, 8450, 8455, 8455, 8458, 8467, 8469,
    8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505,
    8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584,
    11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11506, 11507, 11520,
    11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11648, 11670,
    11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720,
    11726, 11728, 11734, 11736, 11742, 11823, 11823, 12293, 12295, 12321, 12329,
    12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540,
    12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 19893,
    19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538,
    42539, 42560, 42606, 42623, 42647, 42656, 42735, 42775, 42783, 42786, 42888,
    42891, 42894, 42896, 42899, 42912, 42922, 43000, 43009, 43011, 43013, 43015,
    43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43259, 43259,
    43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43471, 43471, 43520,
    43560, 43584, 43586, 43588, 43595, 43616, 43638, 43642, 43642, 43648, 43695,
    43697, 43697, 43701, 43702, 43705, 43709, 43712, 43712, 43714, 43714, 43739,
    43741, 43744, 43754, 43762, 43764, 43777, 43782, 43785, 43790, 43793, 43798,
    43808, 43814, 43816, 43822, 43968, 44002, 44032, 55203, 55216, 55238, 55243,
    55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64285,
    64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323,
    64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019,
    65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474,
    65479, 65482, 65487, 65490, 65495, 65498, 65500,
];
var unicodeIdentifierPart = [
    170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736,
    740, 748, 748, 750, 750, 768, 884, 886, 887, 890, 893, 902, 902, 904, 906,
    908, 908, 910, 929, 931,
    1013, 1015, 1153, 1155, 1159, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415,
    1425, 1469, 1471, 1471, 1473, 1474, 1476, 1477, 1479, 1479, 1488, 1514, 1520,
    1522, 1552, 1562, 1568, 1641, 1646, 1747, 1749, 1756, 1759, 1768, 1770, 1788,
    1791, 1791, 1808, 1866, 1869, 1969, 1984, 2037, 2042, 2042, 2048, 2093, 2112,
    2139, 2208, 2208, 2210, 2220, 2276, 2302, 2304, 2403, 2406, 2415, 2417, 2423,
    2425, 2431, 2433, 2435, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482,
    2482, 2486, 2489, 2492, 2500, 2503, 2504, 2507, 2510, 2519, 2519, 2524, 2525,
    2527, 2531, 2534, 2545, 2561, 2563, 2565, 2570, 2575, 2576, 2579, 2600, 2602,
    2608, 2610, 2611, 2613, 2614, 2616, 2617, 2620, 2620, 2622, 2626, 2631, 2632,
    2635, 2637, 2641, 2641, 2649, 2652, 2654, 2654, 2662, 2677, 2689, 2691, 2693,
    2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2748, 2757,
    2759, 2761, 2763, 2765, 2768, 2768, 2784, 2787, 2790, 2799, 2817, 2819, 2821,
    2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2876, 2884,
    2887, 2888, 2891, 2893, 2902, 2903, 2908, 2909, 2911, 2915, 2918, 2927, 2929,
    2929, 2946, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972,
    2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3006, 3010, 3014, 3016, 3018,
    3021, 3024, 3024, 3031, 3031, 3046, 3055, 3073, 3075, 3077, 3084, 3086, 3088,
    3090, 3112, 3114, 3123, 3125, 3129, 3133, 3140, 3142, 3144, 3146, 3149, 3157,
    3158, 3160, 3161, 3168, 3171, 3174, 3183, 3202, 3203, 3205, 3212, 3214, 3216,
    3218, 3240, 3242, 3251, 3253, 3257, 3260, 3268, 3270, 3272, 3274, 3277, 3285,
    3286, 3294, 3294, 3296, 3299, 3302, 3311, 3313, 3314, 3330, 3331, 3333, 3340,
    3342, 3344, 3346, 3386, 3389, 3396, 3398, 3400, 3402, 3406, 3415, 3415, 3424,
    3427, 3430, 3439, 3450, 3455, 3458, 3459, 3461, 3478, 3482, 3505, 3507, 3515,
    3517, 3517, 3520, 3526, 3530, 3530, 3535, 3540, 3542, 3542, 3544, 3551, 3570,
    3571, 3585, 3642, 3648, 3662, 3664, 3673, 3713, 3714, 3716, 3716, 3719, 3720,
    3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751,
    3751, 3754, 3755, 3757, 3769, 3771, 3773, 3776, 3780, 3782, 3782, 3784, 3789,
    3792, 3801, 3804, 3807, 3840, 3840, 3864, 3865, 3872, 3881, 3893, 3893, 3895,
    3895, 3897, 3897, 3902, 3911, 3913, 3948, 3953, 3972, 3974, 3991, 3993, 4028,
    4038, 4038, 4096, 4169, 4176, 4253, 4256, 4293, 4295, 4295, 4301, 4301, 4304,
    4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744,
    4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808,
    4822, 4824, 4880, 4882, 4885, 4888, 4954, 4957, 4959, 4992, 5007, 5024, 5108,
    5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902,
    5908, 5920, 5940, 5952, 5971, 5984, 5996, 5998, 6000, 6002, 6003, 6016, 6099,
    6103, 6103, 6108, 6109, 6112, 6121, 6155, 6157, 6160, 6169, 6176, 6263, 6272,
    6314, 6320, 6389, 6400, 6428, 6432, 6443, 6448, 6459, 6470, 6509, 6512, 6516,
    6528, 6571, 6576, 6601, 6608, 6617, 6656, 6683, 6688, 6750, 6752, 6780, 6783,
    6793, 6800, 6809, 6823, 6823, 6912, 6987, 6992, 7001, 7019, 7027, 7040, 7155,
    7168, 7223, 7232, 7241, 7245, 7293, 7376, 7378, 7380, 7414, 7424, 7654, 7676,
    7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027,
    8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134,
    8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8204, 8205,
    8255, 8256, 8276, 8276, 8305, 8305, 8319, 8319, 8336, 8348, 8400, 8412, 8417,
    8417, 8421, 8432, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477,
    8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517,
    8521, 8526, 8526, 8544, 8584,
    11264, 11310, 11312, 11358, 11360, 11492, 11499, 11507, 11520, 11557, 11559,
    11559, 11565, 11565, 11568, 11623, 11631, 11631, 11647, 11670, 11680, 11686,
    11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728,
    11734, 11736, 11742, 11744, 11775, 11823, 11823, 12293, 12295, 12321, 12335,
    12337, 12341, 12344, 12348, 12353, 12438, 12441, 12442, 12445, 12447, 12449,
    12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799,
    13312, 19893, 19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512,
    42539, 42560, 42607, 42612, 42621, 42623, 42647, 42655, 42737, 42775, 42783,
    42786, 42888, 42891, 42894, 42896, 42899, 42912, 42922, 43000, 43047, 43072,
    43123, 43136, 43204, 43216, 43225, 43232, 43255, 43259, 43259, 43264, 43309,
    43312, 43347, 43360, 43388, 43392, 43456, 43471, 43481, 43520, 43574, 43584,
    43597, 43600, 43609, 43616, 43638, 43642, 43643, 43648, 43714, 43739, 43741,
    43744, 43759, 43762, 43766, 43777, 43782, 43785, 43790, 43793, 43798, 43808,
    43814, 43816, 43822, 43968, 44010, 44012, 44013, 44016, 44025, 44032, 55203,
    55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275,
    64279, 64285, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321,
    64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008,
    65019, 65024, 65039, 65056, 65062, 65075, 65076, 65101, 65103, 65136, 65140,
    65142, 65276, 65296, 65305, 65313, 65338, 65343, 65343, 65345, 65370, 65382,
    65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,
];
function lookupInUnicodeMap(code, map) {
    if (code < map[0])
        return false;
    var lo = 0;
    var hi = map.length;
    var mid;
    var midVal;
    while (lo + 1 < hi) {
        mid = lo + ((hi - lo) >> 1);
        mid -= (mid & 1);
        midVal = map[mid];
        if (midVal <= code && code <= map[mid + 1]) {
            return true;
        }
        if (code < midVal) {
            hi = mid;
        }
        else {
            lo = mid + 2;
        }
    }
    return false;
}
function isUnicodeIdentifierStart(code) {
    return code < 0 || code > 0xffff ? false
        : lookupInUnicodeMap(code, unicodeIdentifierStart);
}
function isUnicodeIdentifierPart(code) {
    return code < 0 || code > 0xffff ? false
        : lookupInUnicodeMap(code, unicodeIdentifierPart);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXNzZW1ibHlzY3JpcHQvc3JjL3V0aWwvY2hhcmNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUFtQixDQUFBLEtBQUs7O0FBRXhCLHdDQUF3QztBQUN4QyxJQUFrQixRQW9JakI7QUFwSUQsV0FBa0IsUUFBUTtJQUV4Qix1Q0FBUSxDQUFBO0lBQ1IsZ0RBQWUsQ0FBQTtJQUNmLDREQUFxQixDQUFBO0lBQ3JCLDREQUFzQixDQUFBO0lBQ3RCLHNFQUEyQixDQUFBO0lBQzNCLGlEQUFpQixDQUFBO0lBRWpCLDBDQUFZLENBQUE7SUFDWixpRUFBdUIsQ0FBQTtJQUN2Qiw4Q0FBZSxDQUFBO0lBQ2YsOENBQWUsQ0FBQTtJQUNmLGdEQUFnQixDQUFBO0lBQ2hCLGdEQUFnQixDQUFBO0lBQ2hCLGdFQUF3QixDQUFBO0lBQ3hCLDhEQUF1QixDQUFBO0lBQ3ZCLDREQUFzQixDQUFBO0lBQ3RCLHdEQUFvQixDQUFBO0lBQ3BCLGtFQUF5QixDQUFBO0lBQ3pCLG9EQUFrQixDQUFBO0lBQ2xCLG9EQUFrQixDQUFBO0lBQ2xCLDhEQUF1QixDQUFBO0lBQ3ZCLHNFQUEyQixDQUFBO0lBQzNCLG1FQUF5QixDQUFBO0lBQ3pCLG9FQUEwQixDQUFBO0lBQzFCLDRDQUFjLENBQUE7SUFFZCxrQ0FBUSxDQUFBO0lBRVIsb0NBQVMsQ0FBQTtJQUNULG9DQUFTLENBQUE7SUFDVCxvQ0FBUyxDQUFBO0lBQ1Qsb0NBQVMsQ0FBQTtJQUNULG9DQUFTLENBQUE7SUFDVCxvQ0FBUyxDQUFBO0lBQ1Qsb0NBQVMsQ0FBQTtJQUNULG9DQUFTLENBQUE7SUFDVCxvQ0FBUyxDQUFBO0lBQ1Qsb0NBQVMsQ0FBQTtJQUVULGtDQUFRLENBQUE7SUFDUixrQ0FBUSxDQUFBO0lBQ1Isa0NBQVEsQ0FBQTtJQUNSLG1DQUFRLENBQUE7SUFDUixtQ0FBUSxDQUFBO0lBQ1IsbUNBQVEsQ0FBQTtJQUNSLG1DQUFRLENBQUE7SUFDUixtQ0FBUSxDQUFBO0lBQ1IsbUNBQVEsQ0FBQTtJQUNSLG1DQUFRLENBQUE7SUFDUixtQ0FBUSxDQUFBO0lBQ1IsbUNBQVEsQ0FBQTtJQUNSLG1DQUFRLENBQUE7SUFDUixtQ0FBUSxDQUFBO0lBQ1IsbUNBQVEsQ0FBQTtJQUNSLG1DQUFRLENBQUE7SUFDUixtQ0FBUSxDQUFBO0lBQ1IsbUNBQVEsQ0FBQTtJQUNSLG1DQUFRLENBQUE7SUFDUixtQ0FBUSxDQUFBO0lBQ1IsbUNBQVEsQ0FBQTtJQUNSLG1DQUFRLENBQUE7SUFDUixtQ0FBUSxDQUFBO0lBQ1IsbUNBQVEsQ0FBQTtJQUNSLG1DQUFRLENBQUE7SUFDUixtQ0FBUSxDQUFBO0lBRVIsa0NBQVEsQ0FBQTtJQUNSLGtDQUFRLENBQUE7SUFDUixrQ0FBUSxDQUFBO0lBQ1Isa0NBQVEsQ0FBQTtJQUNSLGtDQUFRLENBQUE7SUFDUixrQ0FBUSxDQUFBO0lBQ1Isa0NBQVEsQ0FBQTtJQUNSLGtDQUFRLENBQUE7SUFDUixrQ0FBUSxDQUFBO0lBQ1Isa0NBQVEsQ0FBQTtJQUNSLGtDQUFRLENBQUE7SUFDUixrQ0FBUSxDQUFBO0lBQ1Isa0NBQVEsQ0FBQTtJQUNSLGtDQUFRLENBQUE7SUFDUixrQ0FBUSxDQUFBO0lBQ1Isa0NBQVEsQ0FBQTtJQUNSLGtDQUFRLENBQUE7SUFDUixrQ0FBUSxDQUFBO0lBQ1Isa0NBQVEsQ0FBQTtJQUNSLGtDQUFRLENBQUE7SUFDUixrQ0FBUSxDQUFBO0lBQ1Isa0NBQVEsQ0FBQTtJQUNSLGtDQUFRLENBQUE7SUFDUixrQ0FBUSxDQUFBO0lBQ1Isa0NBQVEsQ0FBQTtJQUNSLGtDQUFRLENBQUE7SUFFUixrREFBZ0IsQ0FBQTtJQUNoQixnREFBZSxDQUFBO0lBQ2Ysb0NBQVMsQ0FBQTtJQUNULGtEQUFnQixDQUFBO0lBQ2hCLGdEQUFlLENBQUE7SUFDZix1Q0FBVSxDQUFBO0lBQ1YsMENBQVksQ0FBQTtJQUNaLHFEQUFpQixDQUFBO0lBQ2pCLHdEQUFtQixD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QUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzlDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7Q0FDaEQsQ0FBQztBQUNGLElBQU0scUJBQXFCLEdBQVU7SUFDbkMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQ3pFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUN6RSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztJQUN2QixJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUM1RSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO0lBQzVCLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQzNFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztDQUM5RCxDQUFDO0FBRUYsU0FBUyxrQkFBa0IsQ0FBQyxJQUFTLEVBQUUsR0FBVTtJQUMvQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFFaEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNwQixJQUFJLEdBQVEsQ0FBQztJQUNiLElBQUksTUFBVyxDQUFDO0lBRWhCLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDbEIsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqQixNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLEdBQUcsTUFBTSxFQUFFO1lBQ2pCLEVBQUUsR0FBRyxHQUFHLENBQUM7U0FDVjthQUFNO1lBQ0wsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsU0FBUyx3QkFBd0IsQ0FBQyxJQUFTO0lBQ3pDLE9BQU8sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQ25DLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFXLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxJQUFTO0lBQ3hDLE9BQU8sSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLO1FBQ25DLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFXLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUNoRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgdXRpbCAqLy8qKiovXG5cbi8qKiBBbiBlbnVtIG9mIG5hbWVkIGNoYXJhY3RlciBjb2Rlcy4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIENoYXJDb2RlIHtcblxuICBOVUxMID0gMCxcbiAgTElORUZFRUQgPSAweDBBLFxuICBDQVJSSUFHRVJFVFVSTiA9IDB4MEQsXG4gIExJTkVTRVBBUkFUT1IgPSAweDIwMjgsXG4gIFBBUkFHUkFQSFNFUEFSQVRPUiA9IDB4MjAyOSxcbiAgTkVYVExJTkUgPSAweDAwODUsXG5cbiAgU1BBQ0UgPSAweDIwLFxuICBOT05CUkVBS0lOR1NQQUNFID0gMHhBMCxcbiAgRU5RVUFEID0gMHgyMDAwLFxuICBFTVFVQUQgPSAweDIwMDEsXG4gIEVOU1BBQ0UgPSAweDIwMDIsXG4gIEVNU1BBQ0UgPSAweDIwMDMsXG4gIFRIUkVFUEVSRU1TUEFDRSA9IDB4MjAwNCxcbiAgRk9VUlBFUkVNU1BBQ0UgPSAweDIwMDUsXG4gIFNJWFBFUkVNU1BBQ0UgPSAweDIwMDYsXG4gIEZJR1VSRVNQQUNFID0gMHgyMDA3LFxuICBQVU5DVFVBVElPTlNQQUNFID0gMHgyMDA4LFxuICBUSElOU1BBQ0UgPSAweDIwMDksXG4gIEhBSVJTUEFDRSA9IDB4MjAwQSxcbiAgWkVST1dJRFRIU1BBQ0UgPSAweDIwMEIsXG4gIE5BUlJPV05PQlJFQUtTUEFDRSA9IDB4MjAyRixcbiAgSURFT0dSQVBISUNTUEFDRSA9IDB4MzAwMCxcbiAgTUFUSEVNQVRJQ0FMU1BBQ0UgPSAweDIwNUYsXG4gIE9HSEFNID0gMHgxNjgwLFxuXG4gIF8gPSAweDVGLFxuXG4gIF8wID0gMHgzMCxcbiAgXzEgPSAweDMxLFxuICBfMiA9IDB4MzIsXG4gIF8zID0gMHgzMyxcbiAgXzQgPSAweDM0LFxuICBfNSA9IDB4MzUsXG4gIF82ID0gMHgzNixcbiAgXzcgPSAweDM3LFxuICBfOCA9IDB4MzgsXG4gIF85ID0gMHgzOSxcblxuICBhID0gMHg2MSxcbiAgYiA9IDB4NjIsXG4gIGMgPSAweDYzLFxuICBkID0gMHg2NCxcbiAgZSA9IDB4NjUsXG4gIGYgPSAweDY2LFxuICBnID0gMHg2NyxcbiAgaCA9IDB4NjgsXG4gIGkgPSAweDY5LFxuICBqID0gMHg2QSxcbiAgayA9IDB4NkIsXG4gIGwgPSAweDZDLFxuICBtID0gMHg2RCxcbiAgbiA9IDB4NkUsXG4gIG8gPSAweDZGLFxuICBwID0gMHg3MCxcbiAgcSA9IDB4NzEsXG4gIHIgPSAweDcyLFxuICBzID0gMHg3MyxcbiAgdCA9IDB4NzQsXG4gIHUgPSAweDc1LFxuICB2ID0gMHg3NixcbiAgdyA9IDB4NzcsXG4gIHggPSAweDc4LFxuICB5ID0gMHg3OSxcbiAgeiA9IDB4N0EsXG5cbiAgQSA9IDB4NDEsXG4gIEIgPSAweDQyLFxuICBDID0gMHg0MyxcbiAgRCA9IDB4NDQsXG4gIEUgPSAweDQ1LFxuICBGID0gMHg0NixcbiAgRyA9IDB4NDcsXG4gIEggPSAweDQ4LFxuICBJID0gMHg0OSxcbiAgSiA9IDB4NEEsXG4gIEsgPSAweDRCLFxuICBMID0gMHg0QyxcbiAgTSA9IDB4NEQsXG4gIE4gPSAweDRFLFxuICBPID0gMHg0RixcbiAgUCA9IDB4NTAsXG4gIFEgPSAweDUxLFxuICBSID0gMHg1MixcbiAgUyA9IDB4NTMsXG4gIFQgPSAweDU0LFxuICBVID0gMHg1NSxcbiAgViA9IDB4NTYsXG4gIFcgPSAweDU3LFxuICBYID0gMHg1OCxcbiAgWSA9IDB4NTksXG4gIFogPSAweDVhLFxuXG4gIEFNUEVSU0FORCA9IDB4MjYsXG4gIEFTVEVSSVNLID0gMHgyQSxcbiAgQVQgPSAweDQwLFxuICBCQUNLU0xBU0ggPSAweDVDLFxuICBCQUNLVElDSyA9IDB4NjAsXG4gIEJBUiA9IDB4N0MsXG4gIENBUkVUID0gMHg1RSxcbiAgQ0xPU0VCUkFDRSA9IDB4N0QsXG4gIENMT1NFQlJBQ0tFVCA9IDB4NUQsXG4gIENMT1NFUEFSRU4gPSAweDI5LFxuICBDT0xPTiA9IDB4M0EsXG4gIENPTU1BID0gMHgyQyxcbiAgRE9MTEFSID0gMHgyNCxcbiAgRE9UID0gMHgyRSxcbiAgRE9VQkxFUVVPVEUgPSAweDIyLFxuICBFUVVBTFMgPSAweDNELFxuICBFWENMQU1BVElPTiA9IDB4MjEsXG4gIEdSRUFURVJUSEFOID0gMHgzRSxcbiAgSEFTSCA9IDB4MjMsXG4gIExFU1NUSEFOID0gMHgzQyxcbiAgTUlOVVMgPSAweDJELFxuICBPUEVOQlJBQ0UgPSAweDdCLFxuICBPUEVOQlJBQ0tFVCA9IDB4NUIsXG4gIE9QRU5QQVJFTiA9IDB4MjgsXG4gIFBFUkNFTlQgPSAweDI1LFxuICBQTFVTID0gMHgyQixcbiAgUVVFU1RJT04gPSAweDNGLFxuICBTRU1JQ09MT04gPSAweDNCLFxuICBTSU5HTEVRVU9URSA9IDB4MjcsXG4gIFNMQVNIID0gMHgyRixcbiAgVElMREUgPSAweDdFLFxuXG4gIEJBQ0tTUEFDRSA9IDB4MDgsXG4gIEZPUk1GRUVEID0gMHgwQyxcbiAgQllURU9SREVSTUFSSyA9IDB4RkVGRixcbiAgVEFCID0gMHgwOSxcbiAgVkVSVElDQUxUQUIgPSAweDBCXG59XG5cbi8qKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIGNoYXJhY3RlciBjb2RlIGlzIHNvbWUgc29ydCBvZiBsaW5lIGJyZWFrLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTGluZUJyZWFrKGM6IENoYXJDb2RlKTogYm9vbCB7XG4gIHN3aXRjaCAoYykge1xuICAgIGNhc2UgQ2hhckNvZGUuTElORUZFRUQ6XG4gICAgY2FzZSBDaGFyQ29kZS5DQVJSSUFHRVJFVFVSTjpcbiAgICBjYXNlIENoYXJDb2RlLkxJTkVTRVBBUkFUT1I6XG4gICAgY2FzZSBDaGFyQ29kZS5QQVJBR1JBUEhTRVBBUkFUT1I6IHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbi8qKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIGNoYXJhY3RlciBjb2RlIGlzIHNvbWUgc29ydCBvZiB3aGl0ZSBzcGFjZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1doaXRlU3BhY2UoYzogaTMyKTogYm9vbCB7XG4gIHN3aXRjaCAoYykge1xuICAgIGNhc2UgQ2hhckNvZGUuU1BBQ0U6XG4gICAgY2FzZSBDaGFyQ29kZS5UQUI6XG4gICAgY2FzZSBDaGFyQ29kZS5WRVJUSUNBTFRBQjpcbiAgICBjYXNlIENoYXJDb2RlLkZPUk1GRUVEOlxuICAgIGNhc2UgQ2hhckNvZGUuTk9OQlJFQUtJTkdTUEFDRTpcbiAgICBjYXNlIENoYXJDb2RlLk5FWFRMSU5FOlxuICAgIGNhc2UgQ2hhckNvZGUuT0dIQU06XG4gICAgY2FzZSBDaGFyQ29kZS5OQVJST1dOT0JSRUFLU1BBQ0U6XG4gICAgY2FzZSBDaGFyQ29kZS5NQVRIRU1BVElDQUxTUEFDRTpcbiAgICBjYXNlIENoYXJDb2RlLklERU9HUkFQSElDU1BBQ0U6XG4gICAgY2FzZSBDaGFyQ29kZS5CWVRFT1JERVJNQVJLOiB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIGMgPj0gQ2hhckNvZGUuRU5RVUFEICYmIGMgPD0gQ2hhckNvZGUuWkVST1dJRFRIU1BBQ0U7XG4gICAgfVxuICB9XG59XG5cbi8qKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIGNoYXJhY3RlciBjb2RlIGlzIGEgdmFsaWQgZGVjaW1hbCBkaWdpdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RlY2ltYWxEaWdpdChjOiBpMzIpOiBib29sIHtcbiAgcmV0dXJuIGMgPj0gQ2hhckNvZGUuXzAgJiYgYyA8PSBDaGFyQ29kZS5fOTtcbn1cblxuLyoqIFRlc3RzIGlmIHRoZSBzcGVjaWZpZWQgY2hhcmFjdGVyIGNvZGUgaXMgYSB2YWxpZCBvY3RhbCBkaWdpdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09jdGFsRGlnaXQoYzogaTMyKTogYm9vbCB7XG4gIHJldHVybiBjID49IENoYXJDb2RlLl8wICYmIGMgPD0gQ2hhckNvZGUuXzc7XG59XG5cbi8qKiBUZXN0cyBpZiB0aGUgc3BlY2lmaWVkIGNoYXJhY3RlciBjb2RlIGlzIGEgdmFsaWQgc3RhcnQgb2YgYW4gaWRlbnRpZmllci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lkZW50aWZpZXJTdGFydChjOiBpMzIpOiBib29sIHtcbiAgcmV0dXJuIGMgPj0gQ2hhckNvZGUuYSAmJiBjIDw9IENoYXJDb2RlLnpcbiAgICAgIHx8IGMgPj0gQ2hhckNvZGUuQSAmJiBjIDw9IENoYXJDb2RlLlpcbiAgICAgIHx8IGMgPT0gQ2hhckNvZGUuX1xuICAgICAgfHwgYyA9PSBDaGFyQ29kZS5ET0xMQVJcbiAgICAgIHx8IGMgPiAweDdmICYmIGlzVW5pY29kZUlkZW50aWZpZXJTdGFydChjKTtcbn1cblxuLyoqIFRlc3RzIGlmIHRoZSBzcGVjaWZpZWQgY2hhcmFjdGVyIGNvZGUgaXMgYSB2YWxpZCBrZXl3b3JkIGNoYXJhY3Rlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0tleXdvcmRDaGFyYWN0ZXIoYzogaTMyKTogYm9vbCB7XG4gIHJldHVybiBjID49IENoYXJDb2RlLmEgJiYgYyA8PSBDaGFyQ29kZS56O1xufVxuXG4vKiogVGVzdHMgaWYgdGhlIHNwZWNpZmllZCBjaGFyYWN0ZXIgY29kZSBpcyBhIHZhbGlkIHBhcnQgb2YgYW4gaWRlbnRpZmllci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lkZW50aWZpZXJQYXJ0KGM6IGkzMik6IGJvb2wge1xuICByZXR1cm4gYyA+PSBDaGFyQ29kZS5hICYmIGMgPD0gQ2hhckNvZGUuelxuICAgICAgfHwgYyA+PSBDaGFyQ29kZS5BICYmIGMgPD0gQ2hhckNvZGUuWlxuICAgICAgfHwgYyA+PSBDaGFyQ29kZS5fMCAmJiBjIDw9IENoYXJDb2RlLl85XG4gICAgICB8fCBjID09IENoYXJDb2RlLl9cbiAgICAgIHx8IGMgPT0gQ2hhckNvZGUuRE9MTEFSXG4gICAgICB8fCBjID4gMHg3ZiAmJiBpc1VuaWNvZGVJZGVudGlmaWVyUGFydChjKTtcbn1cblxuLy8gc3RvcmluZyBhcyB1MTYgdG8gc2F2ZSBtZW1vcnlcbmNvbnN0IHVuaWNvZGVJZGVudGlmaWVyU3RhcnQ6IHUxNltdID0gW1xuICAxNzAsIDE3MCwgMTgxLCAxODEsIDE4NiwgMTg2LCAxOTIsIDIxNCwgMjE2LCAyNDYsIDI0OCwgNzA1LCA3MTAsIDcyMSwgNzM2LFxuICA3NDAsIDc0OCwgNzQ4LCA3NTAsIDc1MCwgODgwLCA4ODQsIDg4NiwgODg3LCA4OTAsIDg5MywgOTAyLCA5MDIsIDkwNCwgOTA2LFxuICA5MDgsIDkwOCwgOTEwLCA5MjksIDkzMSxcbiAgMTAxMywgMTAxNSwgMTE1MywgMTE2MiwgMTMxOSwgMTMyOSwgMTM2NiwgMTM2OSwgMTM2OSwgMTM3NywgMTQxNSwgMTQ4OCwgMTUxNCxcbiAgMTUyMCwgMTUyMiwgMTU2OCwgMTYxMCwgMTY0NiwgMTY0NywgMTY0OSwgMTc0NywgMTc0OSwgMTc0OSwgMTc2NSwgMTc2NiwgMTc3NCxcbiAgMTc3NSwgMTc4NiwgMTc4OCwgMTc5MSwgMTc5MSwgMTgwOCwgMTgwOCwgMTgxMCwgMTgzOSwgMTg2OSwgMTk1NywgMTk2OSwgMTk2OSxcbiAgMTk5NCwgMjAyNiwgMjAzNiwgMjAzNywgMjA0MiwgMjA0MiwgMjA0OCwgMjA2OSwgMjA3NCwgMjA3NCwgMjA4NCwgMjA4NCwgMjA4OCxcbiAgMjA4OCwgMjExMiwgMjEzNiwgMjIwOCwgMjIwOCwgMjIxMCwgMjIyMCwgMjMwOCwgMjM2MSwgMjM2NSwgMjM2NSwgMjM4NCwgMjM4NCxcbiAgMjM5MiwgMjQwMSwgMjQxNywgMjQyMywgMjQyNSwgMjQzMSwgMjQzNywgMjQ0NCwgMjQ0NywgMjQ0OCwgMjQ1MSwgMjQ3MiwgMjQ3NCxcbiAgMjQ4MCwgMjQ4MiwgMjQ4MiwgMjQ4NiwgMjQ4OSwgMjQ5MywgMjQ5MywgMjUxMCwgMjUxMCwgMjUyNCwgMjUyNSwgMjUyNywgMjUyOSxcbiAgMjU0NCwgMjU0NSwgMjU2NSwgMjU3MCwgMjU3NSwgMjU3NiwgMjU3OSwgMjYwMCwgMjYwMiwgMjYwOCwgMjYxMCwgMjYxMSwgMjYxMyxcbiAgMjYxNCwgMjYxNiwgMjYxNywgMjY0OSwgMjY1MiwgMjY1NCwgMjY1NCwgMjY3NCwgMjY3NiwgMjY5MywgMjcwMSwgMjcwMywgMjcwNSxcbiAgMjcwNywgMjcyOCwgMjczMCwgMjczNiwgMjczOCwgMjczOSwgMjc0MSwgMjc0NSwgMjc0OSwgMjc0OSwgMjc2OCwgMjc2OCwgMjc4NCxcbiAgMjc4NSwgMjgyMSwgMjgyOCwgMjgzMSwgMjgzMiwgMjgzNSwgMjg1NiwgMjg1OCwgMjg2NCwgMjg2NiwgMjg2NywgMjg2OSwgMjg3MyxcbiAgMjg3NywgMjg3NywgMjkwOCwgMjkwOSwgMjkxMSwgMjkxMywgMjkyOSwgMjkyOSwgMjk0NywgMjk0NywgMjk0OSwgMjk1NCwgMjk1OCxcbiAgMjk2MCwgMjk2MiwgMjk2NSwgMjk2OSwgMjk3MCwgMjk3MiwgMjk3MiwgMjk3NCwgMjk3NSwgMjk3OSwgMjk4MCwgMjk4NCwgMjk4NixcbiAgMjk5MCwgMzAwMSwgMzAyNCwgMzAyNCwgMzA3NywgMzA4NCwgMzA4NiwgMzA4OCwgMzA5MCwgMzExMiwgMzExNCwgMzEyMywgMzEyNSxcbiAgMzEyOSwgMzEzMywgMzEzMywgMzE2MCwgMzE2MSwgMzE2OCwgMzE2OSwgMzIwNSwgMzIxMiwgMzIxNCwgMzIxNiwgMzIxOCwgMzI0MCxcbiAgMzI0MiwgMzI1MSwgMzI1MywgMzI1NywgMzI2MSwgMzI2MSwgMzI5NCwgMzI5NCwgMzI5NiwgMzI5NywgMzMxMywgMzMxNCwgMzMzMyxcbiAgMzM0MCwgMzM0MiwgMzM0NCwgMzM0NiwgMzM4NiwgMzM4OSwgMzM4OSwgMzQwNiwgMzQwNiwgMzQyNCwgMzQyNSwgMzQ1MCwgMzQ1NSxcbiAgMzQ2MSwgMzQ3OCwgMzQ4MiwgMzUwNSwgMzUwNywgMzUxNSwgMzUxNywgMzUxNywgMzUyMCwgMzUyNiwgMzU4NSwgMzYzMiwgMzYzNCxcbiAgMzYzNSwgMzY0OCwgMzY1NCwgMzcxMywgMzcxNCwgMzcxNiwgMzcxNiwgMzcxOSwgMzcyMCwgMzcyMiwgMzcyMiwgMzcyNSwgMzcyNSxcbiAgMzczMiwgMzczNSwgMzczNywgMzc0MywgMzc0NSwgMzc0NywgMzc0OSwgMzc0OSwgMzc1MSwgMzc1MSwgMzc1NCwgMzc1NSwgMzc1NyxcbiAgMzc2MCwgMzc2MiwgMzc2MywgMzc3MywgMzc3MywgMzc3NiwgMzc4MCwgMzc4MiwgMzc4MiwgMzgwNCwgMzgwNywgMzg0MCwgMzg0MCxcbiAgMzkwNCwgMzkxMSwgMzkxMywgMzk0OCwgMzk3NiwgMzk4MCwgNDA5NiwgNDEzOCwgNDE1OSwgNDE1OSwgNDE3NiwgNDE4MSwgNDE4NixcbiAgNDE4OSwgNDE5MywgNDE5MywgNDE5NywgNDE5OCwgNDIwNiwgNDIwOCwgNDIxMywgNDIyNSwgNDIzOCwgNDIzOCwgNDI1NiwgNDI5MyxcbiAgNDI5NSwgNDI5NSwgNDMwMSwgNDMwMSwgNDMwNCwgNDM0NiwgNDM0OCwgNDY4MCwgNDY4MiwgNDY4NSwgNDY4OCwgNDY5NCwgNDY5NixcbiAgNDY5NiwgNDY5OCwgNDcwMSwgNDcwNCwgNDc0NCwgNDc0NiwgNDc0OSwgNDc1MiwgNDc4NCwgNDc4NiwgNDc4OSwgNDc5MiwgNDc5OCxcbiAgNDgwMCwgNDgwMCwgNDgwMiwgNDgwNSwgNDgwOCwgNDgyMiwgNDgyNCwgNDg4MCwgNDg4MiwgNDg4NSwgNDg4OCwgNDk1NCwgNDk5MixcbiAgNTAwNywgNTAyNCwgNTEwOCwgNTEyMSwgNTc0MCwgNTc0MywgNTc1OSwgNTc2MSwgNTc4NiwgNTc5MiwgNTg2NiwgNTg3MCwgNTg3MixcbiAgNTg4OCwgNTkwMCwgNTkwMiwgNTkwNSwgNTkyMCwgNTkzNywgNTk1MiwgNTk2OSwgNTk4NCwgNTk5NiwgNTk5OCwgNjAwMCwgNjAxNixcbiAgNjA2NywgNjEwMywgNjEwMywgNjEwOCwgNjEwOCwgNjE3NiwgNjI2MywgNjI3MiwgNjMxMiwgNjMxNCwgNjMxNCwgNjMyMCwgNjM4OSxcbiAgNjQwMCwgNjQyOCwgNjQ4MCwgNjUwOSwgNjUxMiwgNjUxNiwgNjUyOCwgNjU3MSwgNjU5MywgNjU5OSwgNjY1NiwgNjY3OCwgNjY4OCxcbiAgNjc0MCwgNjgyMywgNjgyMywgNjkxNywgNjk2MywgNjk4MSwgNjk4NywgNzA0MywgNzA3MiwgNzA4NiwgNzA4NywgNzA5OCwgNzE0MSxcbiAgNzE2OCwgNzIwMywgNzI0NSwgNzI0NywgNzI1OCwgNzI5MywgNzQwMSwgNzQwNCwgNzQwNiwgNzQwOSwgNzQxMywgNzQxNCwgNzQyNCxcbiAgNzYxNSwgNzY4MCwgNzk1NywgNzk2MCwgNzk2NSwgNzk2OCwgODAwNSwgODAwOCwgODAxMywgODAxNiwgODAyMywgODAyNSwgODAyNSxcbiAgODAyNywgODAyNywgODAyOSwgODAyOSwgODAzMSwgODA2MSwgODA2NCwgODExNiwgODExOCwgODEyNCwgODEyNiwgODEyNiwgODEzMCxcbiAgODEzMiwgODEzNCwgODE0MCwgODE0NCwgODE0NywgODE1MCwgODE1NSwgODE2MCwgODE3MiwgODE3OCwgODE4MCwgODE4MiwgODE4OCxcbiAgODMwNSwgODMwNSwgODMxOSwgODMxOSwgODMzNiwgODM0OCwgODQ1MCwgODQ1MCwgODQ1NSwgODQ1NSwgODQ1OCwgODQ2NywgODQ2OSxcbiAgODQ2OSwgODQ3MywgODQ3NywgODQ4NCwgODQ4NCwgODQ4NiwgODQ4NiwgODQ4OCwgODQ4OCwgODQ5MCwgODQ5MywgODQ5NSwgODUwNSxcbiAgODUwOCwgODUxMSwgODUxNywgODUyMSwgODUyNiwgODUyNiwgODU0NCwgODU4NCxcbiAgMTEyNjQsIDExMzEwLCAxMTMxMiwgMTEzNTgsIDExMzYwLCAxMTQ5MiwgMTE0OTksIDExNTAyLCAxMTUwNiwgMTE1MDcsIDExNTIwLFxuICAxMTU1NywgMTE1NTksIDExNTU5LCAxMTU2NSwgMTE1NjUsIDExNTY4LCAxMTYyMywgMTE2MzEsIDExNjMxLCAxMTY0OCwgMTE2NzAsXG4gIDExNjgwLCAxMTY4NiwgMTE2ODgsIDExNjk0LCAxMTY5NiwgMTE3MDIsIDExNzA0LCAxMTcxMCwgMTE3MTIsIDExNzE4LCAxMTcyMCxcbiAgMTE3MjYsIDExNzI4LCAxMTczNCwgMTE3MzYsIDExNzQyLCAxMTgyMywgMTE4MjMsIDEyMjkzLCAxMjI5NSwgMTIzMjEsIDEyMzI5LFxuICAxMjMzNywgMTIzNDEsIDEyMzQ0LCAxMjM0OCwgMTIzNTMsIDEyNDM4LCAxMjQ0NSwgMTI0NDcsIDEyNDQ5LCAxMjUzOCwgMTI1NDAsXG4gIDEyNTQzLCAxMjU0OSwgMTI1ODksIDEyNTkzLCAxMjY4NiwgMTI3MDQsIDEyNzMwLCAxMjc4NCwgMTI3OTksIDEzMzEyLCAxOTg5MyxcbiAgMTk5NjgsIDQwOTA4LCA0MDk2MCwgNDIxMjQsIDQyMTkyLCA0MjIzNywgNDIyNDAsIDQyNTA4LCA0MjUxMiwgNDI1MjcsIDQyNTM4LFxuICA0MjUzOSwgNDI1NjAsIDQyNjA2LCA0MjYyMywgNDI2NDcsIDQyNjU2LCA0MjczNSwgNDI3NzUsIDQyNzgzLCA0Mjc4NiwgNDI4ODgsXG4gIDQyODkxLCA0Mjg5NCwgNDI4OTYsIDQyODk5LCA0MjkxMiwgNDI5MjIsIDQzMDAwLCA0MzAwOSwgNDMwMTEsIDQzMDEzLCA0MzAxNSxcbiAgNDMwMTgsIDQzMDIwLCA0MzA0MiwgNDMwNzIsIDQzMTIzLCA0MzEzOCwgNDMxODcsIDQzMjUwLCA0MzI1NSwgNDMyNTksIDQzMjU5LFxuICA0MzI3NCwgNDMzMDEsIDQzMzEyLCA0MzMzNCwgNDMzNjAsIDQzMzg4LCA0MzM5NiwgNDM0NDIsIDQzNDcxLCA0MzQ3MSwgNDM1MjAsXG4gIDQzNTYwLCA0MzU4NCwgNDM1ODYsIDQzNTg4LCA0MzU5NSwgNDM2MTYsIDQzNjM4LCA0MzY0MiwgNDM2NDIsIDQzNjQ4LCA0MzY5NSxcbiAgNDM2OTcsIDQzNjk3LCA0MzcwMSwgNDM3MDIsIDQzNzA1LCA0MzcwOSwgNDM3MTIsIDQzNzEyLCA0MzcxNCwgNDM3MTQsIDQzNzM5LFxuICA0Mzc0MSwgNDM3NDQsIDQzNzU0LCA0Mzc2MiwgNDM3NjQsIDQzNzc3LCA0Mzc4MiwgNDM3ODUsIDQzNzkwLCA0Mzc5MywgNDM3OTgsXG4gIDQzODA4LCA0MzgxNCwgNDM4MTYsIDQzODIyLCA0Mzk2OCwgNDQwMDIsIDQ0MDMyLCA1NTIwMywgNTUyMTYsIDU1MjM4LCA1NTI0MyxcbiAgNTUyOTEsIDYzNzQ0LCA2NDEwOSwgNjQxMTIsIDY0MjE3LCA2NDI1NiwgNjQyNjIsIDY0Mjc1LCA2NDI3OSwgNjQyODUsIDY0Mjg1LFxuICA2NDI4NywgNjQyOTYsIDY0Mjk4LCA2NDMxMCwgNjQzMTIsIDY0MzE2LCA2NDMxOCwgNjQzMTgsIDY0MzIwLCA2NDMyMSwgNjQzMjMsXG4gIDY0MzI0LCA2NDMyNiwgNjQ0MzMsIDY0NDY3LCA2NDgyOSwgNjQ4NDgsIDY0OTExLCA2NDkxNCwgNjQ5NjcsIDY1MDA4LCA2NTAxOSxcbiAgNjUxMzYsIDY1MTQwLCA2NTE0MiwgNjUyNzYsIDY1MzEzLCA2NTMzOCwgNjUzNDUsIDY1MzcwLCA2NTM4MiwgNjU0NzAsIDY1NDc0LFxuICA2NTQ3OSwgNjU0ODIsIDY1NDg3LCA2NTQ5MCwgNjU0OTUsIDY1NDk4LCA2NTUwMCxcbl07XG5jb25zdCB1bmljb2RlSWRlbnRpZmllclBhcnQ6IHUxNltdID0gW1xuICAxNzAsIDE3MCwgMTgxLCAxODEsIDE4NiwgMTg2LCAxOTIsIDIxNCwgMjE2LCAyNDYsIDI0OCwgNzA1LCA3MTAsIDcyMSwgNzM2LFxuICA3NDAsIDc0OCwgNzQ4LCA3NTAsIDc1MCwgNzY4LCA4ODQsIDg4NiwgODg3LCA4OTAsIDg5MywgOTAyLCA5MDIsIDkwNCwgOTA2LFxuICA5MDgsIDkwOCwgOTEwLCA5MjksIDkzMSxcbiAgMTAxMywgMTAxNSwgMTE1MywgMTE1NSwgMTE1OSwgMTE2MiwgMTMxOSwgMTMyOSwgMTM2NiwgMTM2OSwgMTM2OSwgMTM3NywgMTQxNSxcbiAgMTQyNSwgMTQ2OSwgMTQ3MSwgMTQ3MSwgMTQ3MywgMTQ3NCwgMTQ3NiwgMTQ3NywgMTQ3OSwgMTQ3OSwgMTQ4OCwgMTUxNCwgMTUyMCxcbiAgMTUyMiwgMTU1MiwgMTU2MiwgMTU2OCwgMTY0MSwgMTY0NiwgMTc0NywgMTc0OSwgMTc1NiwgMTc1OSwgMTc2OCwgMTc3MCwgMTc4OCxcbiAgMTc5MSwgMTc5MSwgMTgwOCwgMTg2NiwgMTg2OSwgMTk2OSwgMTk4NCwgMjAzNywgMjA0MiwgMjA0MiwgMjA0OCwgMjA5MywgMjExMixcbiAgMjEzOSwgMjIwOCwgMjIwOCwgMjIxMCwgMjIyMCwgMjI3NiwgMjMwMiwgMjMwNCwgMjQwMywgMjQwNiwgMjQxNSwgMjQxNywgMjQyMyxcbiAgMjQyNSwgMjQzMSwgMjQzMywgMjQzNSwgMjQzNywgMjQ0NCwgMjQ0NywgMjQ0OCwgMjQ1MSwgMjQ3MiwgMjQ3NCwgMjQ4MCwgMjQ4MixcbiAgMjQ4MiwgMjQ4NiwgMjQ4OSwgMjQ5MiwgMjUwMCwgMjUwMywgMjUwNCwgMjUwNywgMjUxMCwgMjUxOSwgMjUxOSwgMjUyNCwgMjUyNSxcbiAgMjUyNywgMjUzMSwgMjUzNCwgMjU0NSwgMjU2MSwgMjU2MywgMjU2NSwgMjU3MCwgMjU3NSwgMjU3NiwgMjU3OSwgMjYwMCwgMjYwMixcbiAgMjYwOCwgMjYxMCwgMjYxMSwgMjYxMywgMjYxNCwgMjYxNiwgMjYxNywgMjYyMCwgMjYyMCwgMjYyMiwgMjYyNiwgMjYzMSwgMjYzMixcbiAgMjYzNSwgMjYzNywgMjY0MSwgMjY0MSwgMjY0OSwgMjY1MiwgMjY1NCwgMjY1NCwgMjY2MiwgMjY3NywgMjY4OSwgMjY5MSwgMjY5MyxcbiAgMjcwMSwgMjcwMywgMjcwNSwgMjcwNywgMjcyOCwgMjczMCwgMjczNiwgMjczOCwgMjczOSwgMjc0MSwgMjc0NSwgMjc0OCwgMjc1NyxcbiAgMjc1OSwgMjc2MSwgMjc2MywgMjc2NSwgMjc2OCwgMjc2OCwgMjc4NCwgMjc4NywgMjc5MCwgMjc5OSwgMjgxNywgMjgxOSwgMjgyMSxcbiAgMjgyOCwgMjgzMSwgMjgzMiwgMjgzNSwgMjg1NiwgMjg1OCwgMjg2NCwgMjg2NiwgMjg2NywgMjg2OSwgMjg3MywgMjg3NiwgMjg4NCxcbiAgMjg4NywgMjg4OCwgMjg5MSwgMjg5MywgMjkwMiwgMjkwMywgMjkwOCwgMjkwOSwgMjkxMSwgMjkxNSwgMjkxOCwgMjkyNywgMjkyOSxcbiAgMjkyOSwgMjk0NiwgMjk0NywgMjk0OSwgMjk1NCwgMjk1OCwgMjk2MCwgMjk2MiwgMjk2NSwgMjk2OSwgMjk3MCwgMjk3MiwgMjk3MixcbiAgMjk3NCwgMjk3NSwgMjk3OSwgMjk4MCwgMjk4NCwgMjk4NiwgMjk5MCwgMzAwMSwgMzAwNiwgMzAxMCwgMzAxNCwgMzAxNiwgMzAxOCxcbiAgMzAyMSwgMzAyNCwgMzAyNCwgMzAzMSwgMzAzMSwgMzA0NiwgMzA1NSwgMzA3MywgMzA3NSwgMzA3NywgMzA4NCwgMzA4NiwgMzA4OCxcbiAgMzA5MCwgMzExMiwgMzExNCwgMzEyMywgMzEyNSwgMzEyOSwgMzEzMywgMzE0MCwgMzE0MiwgMzE0NCwgMzE0NiwgMzE0OSwgMzE1NyxcbiAgMzE1OCwgMzE2MCwgMzE2MSwgMzE2OCwgMzE3MSwgMzE3NCwgMzE4MywgMzIwMiwgMzIwMywgMzIwNSwgMzIxMiwgMzIxNCwgMzIxNixcbiAgMzIxOCwgMzI0MCwgMzI0MiwgMzI1MSwgMzI1MywgMzI1NywgMzI2MCwgMzI2OCwgMzI3MCwgMzI3MiwgMzI3NCwgMzI3NywgMzI4NSxcbiAgMzI4NiwgMzI5NCwgMzI5NCwgMzI5NiwgMzI5OSwgMzMwMiwgMzMxMSwgMzMxMywgMzMxNCwgMzMzMCwgMzMzMSwgMzMzMywgMzM0MCxcbiAgMzM0MiwgMzM0NCwgMzM0NiwgMzM4NiwgMzM4OSwgMzM5NiwgMzM5OCwgMzQwMCwgMzQwMiwgMzQwNiwgMzQxNSwgMzQxNSwgMzQyNCxcbiAgMzQyNywgMzQzMCwgMzQzOSwgMzQ1MCwgMzQ1NSwgMzQ1OCwgMzQ1OSwgMzQ2MSwgMzQ3OCwgMzQ4MiwgMzUwNSwgMzUwNywgMzUxNSxcbiAgMzUxNywgMzUxNywgMzUyMCwgMzUyNiwgMzUzMCwgMzUzMCwgMzUzNSwgMzU0MCwgMzU0MiwgMzU0MiwgMzU0NCwgMzU1MSwgMzU3MCxcbiAgMzU3MSwgMzU4NSwgMzY0MiwgMzY0OCwgMzY2MiwgMzY2NCwgMzY3MywgMzcxMywgMzcxNCwgMzcxNiwgMzcxNiwgMzcxOSwgMzcyMCxcbiAgMzcyMiwgMzcyMiwgMzcyNSwgMzcyNSwgMzczMiwgMzczNSwgMzczNywgMzc0MywgMzc0NSwgMzc0NywgMzc0OSwgMzc0OSwgMzc1MSxcbiAgMzc1MSwgMzc1NCwgMzc1NSwgMzc1NywgMzc2OSwgMzc3MSwgMzc3MywgMzc3NiwgMzc4MCwgMzc4MiwgMzc4MiwgMzc4NCwgMzc4OSxcbiAgMzc5MiwgMzgwMSwgMzgwNCwgMzgwNywgMzg0MCwgMzg0MCwgMzg2NCwgMzg2NSwgMzg3MiwgMzg4MSwgMzg5MywgMzg5MywgMzg5NSxcbiAgMzg5NSwgMzg5NywgMzg5NywgMzkwMiwgMzkxMSwgMzkxMywgMzk0OCwgMzk1MywgMzk3MiwgMzk3NCwgMzk5MSwgMzk5MywgNDAyOCxcbiAgNDAzOCwgNDAzOCwgNDA5NiwgNDE2OSwgNDE3NiwgNDI1MywgNDI1NiwgNDI5MywgNDI5NSwgNDI5NSwgNDMwMSwgNDMwMSwgNDMwNCxcbiAgNDM0NiwgNDM0OCwgNDY4MCwgNDY4MiwgNDY4NSwgNDY4OCwgNDY5NCwgNDY5NiwgNDY5NiwgNDY5OCwgNDcwMSwgNDcwNCwgNDc0NCxcbiAgNDc0NiwgNDc0OSwgNDc1MiwgNDc4NCwgNDc4NiwgNDc4OSwgNDc5MiwgNDc5OCwgNDgwMCwgNDgwMCwgNDgwMiwgNDgwNSwgNDgwOCxcbiAgNDgyMiwgNDgyNCwgNDg4MCwgNDg4MiwgNDg4NSwgNDg4OCwgNDk1NCwgNDk1NywgNDk1OSwgNDk5MiwgNTAwNywgNTAyNCwgNTEwOCxcbiAgNTEyMSwgNTc0MCwgNTc0MywgNTc1OSwgNTc2MSwgNTc4NiwgNTc5MiwgNTg2NiwgNTg3MCwgNTg3MiwgNTg4OCwgNTkwMCwgNTkwMixcbiAgNTkwOCwgNTkyMCwgNTk0MCwgNTk1MiwgNTk3MSwgNTk4NCwgNTk5NiwgNTk5OCwgNjAwMCwgNjAwMiwgNjAwMywgNjAxNiwgNjA5OSxcbiAgNjEwMywgNjEwMywgNjEwOCwgNjEwOSwgNjExMiwgNjEyMSwgNjE1NSwgNjE1NywgNjE2MCwgNjE2OSwgNjE3NiwgNjI2MywgNjI3MixcbiAgNjMxNCwgNjMyMCwgNjM4OSwgNjQwMCwgNjQyOCwgNjQzMiwgNjQ0MywgNjQ0OCwgNjQ1OSwgNjQ3MCwgNjUwOSwgNjUxMiwgNjUxNixcbiAgNjUyOCwgNjU3MSwgNjU3NiwgNjYwMSwgNjYwOCwgNjYxNywgNjY1NiwgNjY4MywgNjY4OCwgNjc1MCwgNjc1MiwgNjc4MCwgNjc4MyxcbiAgNjc5MywgNjgwMCwgNjgwOSwgNjgyMywgNjgyMywgNjkxMiwgNjk4NywgNjk5MiwgNzAwMSwgNzAxOSwgNzAyNywgNzA0MCwgNzE1NSxcbiAgNzE2OCwgNzIyMywgNzIzMiwgNzI0MSwgNzI0NSwgNzI5MywgNzM3NiwgNzM3OCwgNzM4MCwgNzQxNCwgNzQyNCwgNzY1NCwgNzY3NixcbiAgNzk1NywgNzk2MCwgNzk2NSwgNzk2OCwgODAwNSwgODAwOCwgODAxMywgODAxNiwgODAyMywgODAyNSwgODAyNSwgODAyNywgODAyNyxcbiAgODAyOSwgODAyOSwgODAzMSwgODA2MSwgODA2NCwgODExNiwgODExOCwgODEyNCwgODEyNiwgODEyNiwgODEzMCwgODEzMiwgODEzNCxcbiAgODE0MCwgODE0NCwgODE0NywgODE1MCwgODE1NSwgODE2MCwgODE3MiwgODE3OCwgODE4MCwgODE4MiwgODE4OCwgODIwNCwgODIwNSxcbiAgODI1NSwgODI1NiwgODI3NiwgODI3NiwgODMwNSwgODMwNSwgODMxOSwgODMxOSwgODMzNiwgODM0OCwgODQwMCwgODQxMiwgODQxNyxcbiAgODQxNywgODQyMSwgODQzMiwgODQ1MCwgODQ1MCwgODQ1NSwgODQ1NSwgODQ1OCwgODQ2NywgODQ2OSwgODQ2OSwgODQ3MywgODQ3NyxcbiAgODQ4NCwgODQ4NCwgODQ4NiwgODQ4NiwgODQ4OCwgODQ4OCwgODQ5MCwgODQ5MywgODQ5NSwgODUwNSwgODUwOCwgODUxMSwgODUxNyxcbiAgODUyMSwgODUyNiwgODUyNiwgODU0NCwgODU4NCxcbiAgMTEyNjQsIDExMzEwLCAxMTMxMiwgMTEzNTgsIDExMzYwLCAxMTQ5MiwgMTE0OTksIDExNTA3LCAxMTUyMCwgMTE1NTcsIDExNTU5LFxuICAxMTU1OSwgMTE1NjUsIDExNTY1LCAxMTU2OCwgMTE2MjMsIDExNjMxLCAxMTYzMSwgMTE2NDcsIDExNjcwLCAxMTY4MCwgMTE2ODYsXG4gIDExNjg4LCAxMTY5NCwgMTE2OTYsIDExNzAyLCAxMTcwNCwgMTE3MTAsIDExNzEyLCAxMTcxOCwgMTE3MjAsIDExNzI2LCAxMTcyOCxcbiAgMTE3MzQsIDExNzM2LCAxMTc0MiwgMTE3NDQsIDExNzc1LCAxMTgyMywgMTE4MjMsIDEyMjkzLCAxMjI5NSwgMTIzMjEsIDEyMzM1LFxuICAxMjMzNywgMTIzNDEsIDEyMzQ0LCAxMjM0OCwgMTIzNTMsIDEyNDM4LCAxMjQ0MSwgMTI0NDIsIDEyNDQ1LCAxMjQ0NywgMTI0NDksXG4gIDEyNTM4LCAxMjU0MCwgMTI1NDMsIDEyNTQ5LCAxMjU4OSwgMTI1OTMsIDEyNjg2LCAxMjcwNCwgMTI3MzAsIDEyNzg0LCAxMjc5OSxcbiAgMTMzMTIsIDE5ODkzLCAxOTk2OCwgNDA5MDgsIDQwOTYwLCA0MjEyNCwgNDIxOTIsIDQyMjM3LCA0MjI0MCwgNDI1MDgsIDQyNTEyLFxuICA0MjUzOSwgNDI1NjAsIDQyNjA3LCA0MjYxMiwgNDI2MjEsIDQyNjIzLCA0MjY0NywgNDI2NTUsIDQyNzM3LCA0Mjc3NSwgNDI3ODMsXG4gIDQyNzg2LCA0Mjg4OCwgNDI4OTEsIDQyODk0LCA0Mjg5NiwgNDI4OTksIDQyOTEyLCA0MjkyMiwgNDMwMDAsIDQzMDQ3LCA0MzA3MixcbiAgNDMxMjMsIDQzMTM2LCA0MzIwNCwgNDMyMTYsIDQzMjI1LCA0MzIzMiwgNDMyNTUsIDQzMjU5LCA0MzI1OSwgNDMyNjQsIDQzMzA5LFxuICA0MzMxMiwgNDMzNDcsIDQzMzYwLCA0MzM4OCwgNDMzOTIsIDQzNDU2LCA0MzQ3MSwgNDM0ODEsIDQzNTIwLCA0MzU3NCwgNDM1ODQsXG4gIDQzNTk3LCA0MzYwMCwgNDM2MDksIDQzNjE2LCA0MzYzOCwgNDM2NDIsIDQzNjQzLCA0MzY0OCwgNDM3MTQsIDQzNzM5LCA0Mzc0MSxcbiAgNDM3NDQsIDQzNzU5LCA0Mzc2MiwgNDM3NjYsIDQzNzc3LCA0Mzc4MiwgNDM3ODUsIDQzNzkwLCA0Mzc5MywgNDM3OTgsIDQzODA4LFxuICA0MzgxNCwgNDM4MTYsIDQzODIyLCA0Mzk2OCwgNDQwMTAsIDQ0MDEyLCA0NDAxMywgNDQwMTYsIDQ0MDI1LCA0NDAzMiwgNTUyMDMsXG4gIDU1MjE2LCA1NTIzOCwgNTUyNDMsIDU1MjkxLCA2Mzc0NCwgNjQxMDksIDY0MTEyLCA2NDIxNywgNjQyNTYsIDY0MjYyLCA2NDI3NSxcbiAgNjQyNzksIDY0Mjg1LCA2NDI5NiwgNjQyOTgsIDY0MzEwLCA2NDMxMiwgNjQzMTYsIDY0MzE4LCA2NDMxOCwgNjQzMjAsIDY0MzIxLFxuICA2NDMyMywgNjQzMjQsIDY0MzI2LCA2NDQzMywgNjQ0NjcsIDY0ODI5LCA2NDg0OCwgNjQ5MTEsIDY0OTE0LCA2NDk2NywgNjUwMDgsXG4gIDY1MDE5LCA2NTAyNCwgNjUwMzksIDY1MDU2LCA2NTA2MiwgNjUwNzUsIDY1MDc2LCA2NTEwMSwgNjUxMDMsIDY1MTM2LCA2NTE0MCxcbiAgNjUxNDIsIDY1Mjc2LCA2NTI5NiwgNjUzMDUsIDY1MzEzLCA2NTMzOCwgNjUzNDMsIDY1MzQzLCA2NTM0NSwgNjUzNzAsIDY1MzgyLFxuICA2NTQ3MCwgNjU0NzQsIDY1NDc5LCA2NTQ4MiwgNjU0ODcsIDY1NDkwLCA2NTQ5NSwgNjU0OTgsIDY1NTAwLFxuXTtcblxuZnVuY3Rpb24gbG9va3VwSW5Vbmljb2RlTWFwKGNvZGU6IHUxNiwgbWFwOiB1MTZbXSk6IGJvb2wge1xuICBpZiAoY29kZSA8IG1hcFswXSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsbyA9IDA7XG4gIHZhciBoaSA9IG1hcC5sZW5ndGg7XG4gIHZhciBtaWQ6IGkzMjtcbiAgdmFyIG1pZFZhbDogdTE2O1xuXG4gIHdoaWxlIChsbyArIDEgPCBoaSkge1xuICAgIG1pZCA9IGxvICsgKChoaSAtIGxvKSA+PiAxKTtcbiAgICBtaWQgLT0gKG1pZCAmIDEpO1xuICAgIG1pZFZhbCA9IG1hcFttaWRdO1xuICAgIGlmIChtaWRWYWwgPD0gY29kZSAmJiBjb2RlIDw9IG1hcFttaWQgKyAxXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChjb2RlIDwgbWlkVmFsKSB7XG4gICAgICBoaSA9IG1pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG8gPSBtaWQgKyAyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzVW5pY29kZUlkZW50aWZpZXJTdGFydChjb2RlOiBpMzIpOiBib29sIHtcbiAgcmV0dXJuIGNvZGUgPCAwIHx8IGNvZGUgPiAweGZmZmYgPyBmYWxzZVxuICAgICAgIDogbG9va3VwSW5Vbmljb2RlTWFwKGNvZGUgYXMgdTE2LCB1bmljb2RlSWRlbnRpZmllclN0YXJ0KTtcbn1cblxuZnVuY3Rpb24gaXNVbmljb2RlSWRlbnRpZmllclBhcnQoY29kZTogaTMyKTogYm9vbCB7XG4gIHJldHVybiBjb2RlIDwgMCB8fCBjb2RlID4gMHhmZmZmID8gZmFsc2VcbiAgICAgICA6IGxvb2t1cEluVW5pY29kZU1hcChjb2RlIGFzIHUxNiwgdW5pY29kZUlkZW50aWZpZXJQYXJ0KTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/assemblyscript/src/util/collections.ts":
/*!*************************************************************!*\
  !*** ./node_modules/assemblyscript/src/util/collections.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function makeArray(original) {
    if (original === void 0) { original = null; }
    if (original) {
        var cloned = new Array(original.length);
        for (var i = 0, k = original.length; i < k; ++i)
            unchecked(cloned[i] = original[i]);
        return cloned;
    }
    return new Array();
}
exports.makeArray = makeArray;
function makeSet(original) {
    var e_1, _a;
    if (original === void 0) { original = null; }
    if (original) {
        var cloned = new Set();
        try {
            for (var original_1 = __values(original), original_1_1 = original_1.next(); !original_1_1.done; original_1_1 = original_1.next()) {
                var v = original_1_1.value;
                cloned.add(v);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (original_1_1 && !original_1_1.done && (_a = original_1.return)) _a.call(original_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return cloned;
    }
    return new Set();
}
exports.makeSet = makeSet;
function makeMap(original, overrides) {
    var e_2, _a, e_3, _b, e_4, _c;
    if (original === void 0) { original = null; }
    if (overrides === void 0) { overrides = null; }
    var cloned = new Map();
    if (original) {
        try {
            for (var original_2 = __values(original), original_2_1 = original_2.next(); !original_2_1.done; original_2_1 = original_2.next()) {
                var _d = __read(original_2_1.value, 2), k = _d[0], v = _d[1];
                cloned.set(k, v);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (original_2_1 && !original_2_1.done && (_a = original_2.return)) _a.call(original_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (overrides)
            try {
                for (var overrides_1 = __values(overrides), overrides_1_1 = overrides_1.next(); !overrides_1_1.done; overrides_1_1 = overrides_1.next()) {
                    var _e = __read(overrides_1_1.value, 2), k = _e[0], v = _e[1];
                    cloned.set(k, v);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (overrides_1_1 && !overrides_1_1.done && (_b = overrides_1.return)) _b.call(overrides_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
    }
    else if (overrides) {
        try {
            for (var overrides_2 = __values(overrides), overrides_2_1 = overrides_2.next(); !overrides_2_1.done; overrides_2_1 = overrides_2.next()) {
                var _f = __read(overrides_2_1.value, 2), k = _f[0], v = _f[1];
                cloned.set(k, v);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (overrides_2_1 && !overrides_2_1.done && (_c = overrides_2.return)) _c.call(overrides_2);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
    return cloned;
}
exports.makeMap = makeMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXNzZW1ibHlzY3JpcHQvc3JjL3V0aWwvY29sbGVjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFnQixTQUFTLENBQUksUUFBZ0M7SUFBaEMseUJBQUEsRUFBQSxlQUFnQztJQUMzRCxJQUFJLFFBQVEsRUFBRTtRQUNaLElBQUksTUFBTSxHQUFHLElBQUksS0FBSyxDQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUNELE9BQU8sSUFBSSxLQUFLLEVBQUssQ0FBQztBQUN4QixDQUFDO0FBUEQsOEJBT0M7QUFFRCxTQUFnQixPQUFPLENBQUksUUFBOEI7O0lBQTlCLHlCQUFBLEVBQUEsZUFBOEI7SUFDdkQsSUFBSSxRQUFRLEVBQUU7UUFDWixJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBSyxDQUFDOztZQUMxQixLQUFjLElBQUEsYUFBQSxTQUFBLFFBQVEsQ0FBQSxrQ0FBQTtnQkFBakIsSUFBSSxDQUFDLHFCQUFBO2dCQUFjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBQTs7Ozs7Ozs7O1FBQ3RDLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLElBQUksR0FBRyxFQUFLLENBQUM7QUFDdEIsQ0FBQztBQVBELDBCQU9DO0FBRUQsU0FBZ0IsT0FBTyxDQUFNLFFBQWdDLEVBQUUsU0FBaUM7O0lBQW5FLHlCQUFBLEVBQUEsZUFBZ0M7SUFBRSwwQkFBQSxFQUFBLGdCQUFpQztJQUM5RixJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDO0lBQzVCLElBQUksUUFBUSxFQUFFOztZQUNaLEtBQW1CLElBQUEsYUFBQSxTQUFBLFFBQVEsQ0FBQSxrQ0FBQTtnQkFBbEIsSUFBQSxrQ0FBTSxFQUFMLFNBQUMsRUFBRSxTQUFDO2dCQUFlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQUE7Ozs7Ozs7OztRQUM5QyxJQUFJLFNBQVM7O2dCQUFFLEtBQW1CLElBQUEsY0FBQSxTQUFBLFNBQVMsQ0FBQSxvQ0FBQTtvQkFBbkIsSUFBQSxtQ0FBTSxFQUFMLFNBQUMsRUFBRSxTQUFDO29CQUFnQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFBQTs7Ozs7Ozs7YUFBQTtLQUMvRDtTQUFNLElBQUksU0FBUyxFQUFFOztZQUNwQixLQUFtQixJQUFBLGNBQUEsU0FBQSxTQUFTLENBQUEsb0NBQUE7Z0JBQW5CLElBQUEsbUNBQU0sRUFBTCxTQUFDLEVBQUUsU0FBQztnQkFBZ0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFBQTs7Ozs7Ozs7O0tBQ2hEO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQVRELDBCQVNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG1ha2VBcnJheTxWPihvcmlnaW5hbDogQXJyYXk8Vj4gfCBudWxsID0gbnVsbCk6IEFycmF5PFY+IHtcbiAgaWYgKG9yaWdpbmFsKSB7XG4gICAgbGV0IGNsb25lZCA9IG5ldyBBcnJheTxWPihvcmlnaW5hbC5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gb3JpZ2luYWwubGVuZ3RoOyBpIDwgazsgKytpKSB1bmNoZWNrZWQoY2xvbmVkW2ldID0gb3JpZ2luYWxbaV0pO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBBcnJheTxWPigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNldDxWPihvcmlnaW5hbDogU2V0PFY+IHwgbnVsbCA9IG51bGwpOiBTZXQ8Vj4ge1xuICBpZiAob3JpZ2luYWwpIHtcbiAgICBsZXQgY2xvbmVkID0gbmV3IFNldDxWPigpO1xuICAgIGZvciAobGV0IHYgb2Ygb3JpZ2luYWwpIGNsb25lZC5hZGQodik7XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxuICByZXR1cm4gbmV3IFNldDxWPigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1hcDxLLFY+KG9yaWdpbmFsOiBNYXA8SyxWPiB8IG51bGwgPSBudWxsLCBvdmVycmlkZXM6IE1hcDxLLFY+IHwgbnVsbCA9IG51bGwpOiBNYXA8SyxWPiB7XG4gIHZhciBjbG9uZWQgPSBuZXcgTWFwPEssVj4oKTtcbiAgaWYgKG9yaWdpbmFsKSB7XG4gICAgZm9yIChsZXQgW2ssIHZdIG9mIG9yaWdpbmFsKSBjbG9uZWQuc2V0KGssIHYpO1xuICAgIGlmIChvdmVycmlkZXMpIGZvciAobGV0IFtrLCB2XSBvZiBvdmVycmlkZXMpIGNsb25lZC5zZXQoaywgdik7XG4gIH0gZWxzZSBpZiAob3ZlcnJpZGVzKSB7XG4gICAgZm9yIChsZXQgW2ssIHZdIG9mIG92ZXJyaWRlcykgY2xvbmVkLnNldChrLCB2KTtcbiAgfVxuICByZXR1cm4gY2xvbmVkO1xufVxuIl19

/***/ }),

/***/ "./node_modules/assemblyscript/src/util/index.ts":
/*!*******************************************************!*\
  !*** ./node_modules/assemblyscript/src/util/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Various compiler utilities.
 * @module util
 * @preferred
 */ /***/
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./bitset */ "./node_modules/assemblyscript/src/util/bitset.ts"));
__export(__webpack_require__(/*! ./charcode */ "./node_modules/assemblyscript/src/util/charcode.ts"));
__export(__webpack_require__(/*! ./collections */ "./node_modules/assemblyscript/src/util/collections.ts"));
__export(__webpack_require__(/*! ./path */ "./node_modules/assemblyscript/src/util/path.ts"));
__export(__webpack_require__(/*! ./text */ "./node_modules/assemblyscript/src/util/text.ts"));
__export(__webpack_require__(/*! ./binary */ "./node_modules/assemblyscript/src/util/binary.ts"));
/** Tests if `x` is a power of two. */
function isPowerOf2(x) {
    return x != 0 && (x & (x - 1)) == 0;
}
exports.isPowerOf2 = isPowerOf2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXNzZW1ibHlzY3JpcHQvc3JjL3V0aWwvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUcsQ0FBQSxLQUFLOzs7OztBQUVSLDhCQUF5QjtBQUN6QixnQ0FBMkI7QUFDM0IsbUNBQThCO0FBQzlCLDRCQUF1QjtBQUN2Qiw0QkFBdUI7QUFDdkIsOEJBQXlCO0FBRXpCLHNDQUFzQztBQUN0QyxTQUFnQixVQUFVLENBQUMsQ0FBTTtJQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUZELGdDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWYXJpb3VzIGNvbXBpbGVyIHV0aWxpdGllcy5cbiAqIEBtb2R1bGUgdXRpbFxuICogQHByZWZlcnJlZFxuICovLyoqKi9cblxuZXhwb3J0ICogZnJvbSBcIi4vYml0c2V0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jaGFyY29kZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29sbGVjdGlvbnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhdGhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RleHRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2JpbmFyeVwiO1xuXG4vKiogVGVzdHMgaWYgYHhgIGlzIGEgcG93ZXIgb2YgdHdvLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUG93ZXJPZjIoeDogaTMyKTogYm9vbCB7XG4gIHJldHVybiB4ICE9IDAgJiYgKHggJiAoeCAtIDEpKSA9PSAwO1xufVxuIl19

/***/ }),

/***/ "./node_modules/assemblyscript/src/util/path.ts":
/*!******************************************************!*\
  !*** ./node_modules/assemblyscript/src/util/path.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module util */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/assemblyscript/src/common.ts");
var separator = 47 /* SLASH */;
/**
 * Normalizes the specified path, removing interior placeholders.
 * Expects a posix-compatible relative path (not Windows compatible).
 */
function normalizePath(path) {
    var pos = 0;
    var len = path.length;
    // trim leading './'
    while (pos + 1 < len &&
        path.charCodeAt(pos) == 46 /* DOT */ &&
        path.charCodeAt(pos + 1) == separator) {
        pos += 2;
    }
    if (pos > 0 || len < path.length) {
        path = path.substring(pos, len);
        len -= pos;
        pos = 0;
    }
    var atEnd;
    while (pos + 1 < len) {
        atEnd = false;
        // we are only interested in '/.' sequences ...
        if (path.charCodeAt(pos) == separator &&
            path.charCodeAt(pos + 1) == 46 /* DOT */) {
            // '/.' ( '/' | $ )
            atEnd = pos + 2 == len;
            if (atEnd ||
                pos + 2 < len &&
                    path.charCodeAt(pos + 2) == separator) {
                path = atEnd
                    ? path.substring(0, pos)
                    : path.substring(0, pos) + path.substring(pos + 2);
                len -= 2;
                continue;
            }
            // '/.' ( './' | '.' $ )
            atEnd = pos + 3 == len;
            if (atEnd && path.charCodeAt(pos + 2) == 46 /* DOT */ ||
                pos + 3 < len &&
                    path.charCodeAt(pos + 2) == 46 /* DOT */ &&
                    path.charCodeAt(pos + 3) == separator) {
                // find preceeding '/'
                var ipos = pos;
                while (--ipos >= 0) {
                    if (path.charCodeAt(ipos) == separator) {
                        if (pos - ipos != 3 ||
                            path.charCodeAt(ipos + 1) != 46 /* DOT */ ||
                            path.charCodeAt(ipos + 2) != 46 /* DOT */) { // exclude '..' itself
                            path = atEnd
                                ? path.substring(0, ipos)
                                : path.substring(0, ipos) + path.substring(pos + 3);
                            len -= pos + 3 - ipos;
                            pos = ipos - 1; // incremented again at end of loop
                        }
                        break;
                    }
                }
                // if there's no preceeding '/', trim start if non-empty
                if (ipos < 0 && pos > 0) {
                    if (pos != 2 ||
                        path.charCodeAt(0) != 46 /* DOT */ ||
                        path.charCodeAt(1) != 46 /* DOT */) { // exclude '..' itself
                        path = path.substring(pos + 4);
                        len = path.length;
                        continue;
                    }
                }
            }
        }
        pos++;
    }
    return len > 0 ? path : ".";
}
exports.normalizePath = normalizePath;
/** Resolves the specified path relative to the specified origin. */
function resolvePath(normalizedPath, origin) {
    if (normalizedPath.startsWith("std/")) {
        return normalizedPath;
    }
    return normalizePath(dirname(origin) + common_1.PATH_DELIMITER + normalizedPath);
}
exports.resolvePath = resolvePath;
/** Obtains the directory portion of a normalized path. */
function dirname(normalizedPath) {
    var pos = normalizedPath.length;
    if (pos <= 1) {
        if (pos == 0)
            return ".";
        if (normalizedPath.charCodeAt(0) == separator) {
            return normalizedPath;
        }
    }
    while (--pos > 0) {
        if (normalizedPath.charCodeAt(pos) == separator) {
            return normalizedPath.substring(0, pos);
        }
    }
    return ".";
}
exports.dirname = dirname;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hc3NlbWJseXNjcmlwdC9zcmMvdXRpbC9wYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQkFBbUIsQ0FBQSxLQUFLOztBQU14QixvQ0FFbUI7QUFFbkIsSUFBTSxTQUFTLGlCQUFpQixDQUFDO0FBRWpDOzs7R0FHRztBQUNILFNBQWdCLGFBQWEsQ0FBQyxJQUFZO0lBQ3hDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFdEIsb0JBQW9CO0lBQ3BCLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLGdCQUFnQjtRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLEVBQ3JDO1FBQ0EsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNWO0lBRUQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2hDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ1gsR0FBRyxHQUFHLENBQUMsQ0FBQztLQUNUO0lBRUQsSUFBSSxLQUFXLENBQUM7SUFDaEIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUNwQixLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWQsK0NBQStDO1FBQy9DLElBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFDeEM7WUFDQSxtQkFBbUI7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QU0sQ0FBQyxFQUFFO1FBQ3JDLE9BQU8sY0FBYyxDQUFDO0tBQ3ZCO0lBQ0QsT0FBTyxhQUFhLENBQ2xCLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyx1QkFBYyxHQUFHLGNBQWMsQ0FDbEQsQ0FBQztBQUNKLENBQUM7QUFQRCxrQ0FPQztBQUVELDBEQUEwRDtBQUMxRCxTQUFnQixPQUFPLENBQUMsY0FBc0I7SUFDNUMsSUFBSSxHQUFHLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDWixJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQUUsT0FBTyxHQUFHLENBQUM7UUFDekIsSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUM3QyxPQUFPLGNBQWMsQ0FBQztTQUN2QjtLQUNGO0lBQ0QsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUU7UUFDaEIsSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUMvQyxPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFkRCwwQkFjQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbW9kdWxlIHV0aWwgKi8vKioqL1xuXG5pbXBvcnQge1xuICBDaGFyQ29kZVxufSBmcm9tIFwiLi9jaGFyY29kZVwiO1xuXG5pbXBvcnQge1xuICBQQVRIX0RFTElNSVRFUlxufSBmcm9tIFwiLi4vY29tbW9uXCI7XG5cbmNvbnN0IHNlcGFyYXRvciA9IENoYXJDb2RlLlNMQVNIO1xuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHNwZWNpZmllZCBwYXRoLCByZW1vdmluZyBpbnRlcmlvciBwbGFjZWhvbGRlcnMuXG4gKiBFeHBlY3RzIGEgcG9zaXgtY29tcGF0aWJsZSByZWxhdGl2ZSBwYXRoIChub3QgV2luZG93cyBjb21wYXRpYmxlKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgdmFyIHBvcyA9IDA7XG4gIHZhciBsZW4gPSBwYXRoLmxlbmd0aDtcblxuICAvLyB0cmltIGxlYWRpbmcgJy4vJ1xuICB3aGlsZSAocG9zICsgMSA8IGxlbiAmJlxuICAgIHBhdGguY2hhckNvZGVBdChwb3MpID09IENoYXJDb2RlLkRPVCAmJlxuICAgIHBhdGguY2hhckNvZGVBdChwb3MgKyAxKSA9PSBzZXBhcmF0b3JcbiAgKSB7XG4gICAgcG9zICs9IDI7XG4gIH1cblxuICBpZiAocG9zID4gMCB8fCBsZW4gPCBwYXRoLmxlbmd0aCkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZyhwb3MsIGxlbik7XG4gICAgbGVuIC09IHBvcztcbiAgICBwb3MgPSAwO1xuICB9XG5cbiAgdmFyIGF0RW5kOiBib29sO1xuICB3aGlsZSAocG9zICsgMSA8IGxlbikge1xuICAgIGF0RW5kID0gZmFsc2U7XG5cbiAgICAvLyB3ZSBhcmUgb25seSBpbnRlcmVzdGVkIGluICcvLicgc2VxdWVuY2VzIC4uLlxuICAgIGlmIChcbiAgICAgIHBhdGguY2hhckNvZGVBdChwb3MpID09IHNlcGFyYXRvciAmJlxuICAgICAgcGF0aC5jaGFyQ29kZUF0KHBvcyArIDEpID09IENoYXJDb2RlLkRPVFxuICAgICkge1xuICAgICAgLy8gJy8uJyAoICcvJyB8ICQgKVxuICAgICAgYXRFbmQgPSBwb3MgKyAyID09IGxlbjtcbiAgICAgIGlmIChhdEVuZCB8fFxuICAgICAgICBwb3MgKyAyIDwgbGVuICYmXG4gICAgICAgIHBhdGguY2hhckNvZGVBdChwb3MgKyAyKSA9PSBzZXBhcmF0b3JcbiAgICAgICkge1xuICAgICAgICBwYXRoID0gYXRFbmRcbiAgICAgICAgICA/IHBhdGguc3Vic3RyaW5nKDAsIHBvcylcbiAgICAgICAgICA6IHBhdGguc3Vic3RyaW5nKDAsIHBvcykgKyBwYXRoLnN1YnN0cmluZyhwb3MgKyAyKTtcbiAgICAgICAgbGVuIC09IDI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyAnLy4nICggJy4vJyB8ICcuJyAkIClcbiAgICAgIGF0RW5kID0gcG9zICsgMyA9PSBsZW47XG4gICAgICBpZiAoYXRFbmQgJiYgcGF0aC5jaGFyQ29kZUF0KHBvcyArIDIpID09IENoYXJDb2RlLkRPVCB8fFxuICAgICAgICBwb3MgKyAzIDwgbGVuICYmXG4gICAgICAgIHBhdGguY2hhckNvZGVBdChwb3MgKyAyKSA9PSBDaGFyQ29kZS5ET1QgJiZcbiAgICAgICAgcGF0aC5jaGFyQ29kZUF0KHBvcyArIDMpID09IHNlcGFyYXRvclxuICAgICAgKSB7XG4gICAgICAgIC8vIGZpbmQgcHJlY2VlZGluZyAnLydcbiAgICAgICAgbGV0IGlwb3MgPSBwb3M7XG4gICAgICAgIHdoaWxlICgtLWlwb3MgPj0gMCkge1xuICAgICAgICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaXBvcykgPT0gc2VwYXJhdG9yKSB7XG4gICAgICAgICAgICBpZiAocG9zIC0gaXBvcyAhPSAzIHx8XG4gICAgICAgICAgICAgIHBhdGguY2hhckNvZGVBdChpcG9zICsgMSkgIT0gQ2hhckNvZGUuRE9UIHx8XG4gICAgICAgICAgICAgIHBhdGguY2hhckNvZGVBdChpcG9zICsgMikgIT0gQ2hhckNvZGUuRE9UXG4gICAgICAgICAgICApIHsgLy8gZXhjbHVkZSAnLi4nIGl0c2VsZlxuICAgICAgICAgICAgICBwYXRoID0gYXRFbmRcbiAgICAgICAgICAgICAgICA/IHBhdGguc3Vic3RyaW5nKDAsIGlwb3MpXG4gICAgICAgICAgICAgICAgOiBwYXRoLnN1YnN0cmluZygwLCBpcG9zKSArIHBhdGguc3Vic3RyaW5nKHBvcyArIDMpO1xuICAgICAgICAgICAgICBsZW4gLT0gcG9zICsgMyAtIGlwb3M7XG4gICAgICAgICAgICAgIHBvcyA9IGlwb3MgLSAxOyAvLyBpbmNyZW1lbnRlZCBhZ2FpbiBhdCBlbmQgb2YgbG9vcFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUncyBubyBwcmVjZWVkaW5nICcvJywgdHJpbSBzdGFydCBpZiBub24tZW1wdHlcbiAgICAgICAgaWYgKGlwb3MgPCAwICYmIHBvcyA+IDApIHtcbiAgICAgICAgICBpZiAocG9zICE9IDIgfHxcbiAgICAgICAgICAgIHBhdGguY2hhckNvZGVBdCgwKSAhPSBDaGFyQ29kZS5ET1QgfHxcbiAgICAgICAgICAgIHBhdGguY2hhckNvZGVBdCgxKSAhPSBDaGFyQ29kZS5ET1RcbiAgICAgICAgICApIHsgLy8gZXhjbHVkZSAnLi4nIGl0c2VsZlxuICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKHBvcyArIDQpO1xuICAgICAgICAgICAgbGVuID0gcGF0aC5sZW5ndGg7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcG9zKys7XG4gIH1cbiAgcmV0dXJuIGxlbiA+IDAgPyBwYXRoIDogXCIuXCI7XG59XG5cbi8qKiBSZXNvbHZlcyB0aGUgc3BlY2lmaWVkIHBhdGggcmVsYXRpdmUgdG8gdGhlIHNwZWNpZmllZCBvcmlnaW4uICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVBhdGgobm9ybWFsaXplZFBhdGg6IHN0cmluZywgb3JpZ2luOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAobm9ybWFsaXplZFBhdGguc3RhcnRzV2l0aChcInN0ZC9cIikpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplZFBhdGg7XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZVBhdGgoXG4gICAgZGlybmFtZShvcmlnaW4pICsgUEFUSF9ERUxJTUlURVIgKyBub3JtYWxpemVkUGF0aFxuICApO1xufVxuXG4vKiogT2J0YWlucyB0aGUgZGlyZWN0b3J5IHBvcnRpb24gb2YgYSBub3JtYWxpemVkIHBhdGguICovXG5leHBvcnQgZnVuY3Rpb24gZGlybmFtZShub3JtYWxpemVkUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgdmFyIHBvcyA9IG5vcm1hbGl6ZWRQYXRoLmxlbmd0aDtcbiAgaWYgKHBvcyA8PSAxKSB7XG4gICAgaWYgKHBvcyA9PSAwKSByZXR1cm4gXCIuXCI7XG4gICAgaWYgKG5vcm1hbGl6ZWRQYXRoLmNoYXJDb2RlQXQoMCkgPT0gc2VwYXJhdG9yKSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplZFBhdGg7XG4gICAgfVxuICB9XG4gIHdoaWxlICgtLXBvcyA+IDApIHtcbiAgICBpZiAobm9ybWFsaXplZFBhdGguY2hhckNvZGVBdChwb3MpID09IHNlcGFyYXRvcikge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRQYXRoLnN1YnN0cmluZygwLCBwb3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCIuXCI7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/assemblyscript/src/util/text.ts":
/*!******************************************************!*\
  !*** ./node_modules/assemblyscript/src/util/text.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @module util */ /***/
Object.defineProperty(exports, "__esModule", { value: true });
var indentX1 = "  ";
var indentX2 = "    ";
var indentX4 = "        ";
/** Creates an indentation matching the number of specified levels. */
function indent(sb, level) {
    while (level >= 4) {
        sb.push(indentX4);
        level -= 4;
    }
    if (level >= 2) {
        sb.push(indentX2);
        level -= 2;
    }
    if (level) {
        sb.push(indentX1);
    }
}
exports.indent = indent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hc3NlbWJseXNjcmlwdC9zcmMvdXRpbC90ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQkFBbUIsQ0FBQSxLQUFLOztBQUV4QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDdEIsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUU1QixzRUFBc0U7QUFDdEUsU0FBZ0IsTUFBTSxDQUFDLEVBQVksRUFBRSxLQUFVO0lBQzdDLE9BQU8sS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNqQixFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLENBQUM7S0FDWjtJQUNELElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEIsS0FBSyxJQUFJLENBQUMsQ0FBQztLQUNaO0lBQ0QsSUFBSSxLQUFLLEVBQUU7UUFDVCxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ25CO0FBQ0gsQ0FBQztBQVpELHdCQVlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgdXRpbCAqLy8qKiovXG5cbmNvbnN0IGluZGVudFgxID0gXCIgIFwiO1xuY29uc3QgaW5kZW50WDIgPSBcIiAgICBcIjtcbmNvbnN0IGluZGVudFg0ID0gXCIgICAgICAgIFwiO1xuXG4vKiogQ3JlYXRlcyBhbiBpbmRlbnRhdGlvbiBtYXRjaGluZyB0aGUgbnVtYmVyIG9mIHNwZWNpZmllZCBsZXZlbHMuICovXG5leHBvcnQgZnVuY3Rpb24gaW5kZW50KHNiOiBzdHJpbmdbXSwgbGV2ZWw6IGkzMik6IHZvaWQge1xuICB3aGlsZSAobGV2ZWwgPj0gNCkge1xuICAgIHNiLnB1c2goaW5kZW50WDQpO1xuICAgIGxldmVsIC09IDQ7XG4gIH1cbiAgaWYgKGxldmVsID49IDIpIHtcbiAgICBzYi5wdXNoKGluZGVudFgyKTtcbiAgICBsZXZlbCAtPSAyO1xuICB9XG4gIGlmIChsZXZlbCkge1xuICAgIHNiLnB1c2goaW5kZW50WDEpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/assemblyscript/std/assembly/shared/feature.ts":
/*!********************************************************************!*\
  !*** ./node_modules/assemblyscript/std/assembly/shared/feature.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file is shared with the compiler and must remain portable
Object.defineProperty(exports, "__esModule", { value: true });
/** Indicates specific features to activate. */
var Feature;
(function (Feature) {
    /** No additional features. */
    Feature[Feature["NONE"] = 0] = "NONE";
    /** Sign extension operations. */
    Feature[Feature["SIGN_EXTENSION"] = 1] = "SIGN_EXTENSION";
    /** Mutable global imports and exports. */
    Feature[Feature["MUTABLE_GLOBALS"] = 2] = "MUTABLE_GLOBALS";
    /** Non-trapping float to integer operations. */
    Feature[Feature["NONTRAPPING_F2I"] = 4] = "NONTRAPPING_F2I";
    /** Bulk memory operations. */
    Feature[Feature["BULK_MEMORY"] = 8] = "BULK_MEMORY";
    /** SIMD types and operations. */
    Feature[Feature["SIMD"] = 16] = "SIMD";
    /** Threading and atomic operations. */
    Feature[Feature["THREADS"] = 32] = "THREADS";
    /** Exception handling operations. */
    Feature[Feature["EXCEPTION_HANDLING"] = 64] = "EXCEPTION_HANDLING";
    /** Tail call operations. */
    Feature[Feature["TAIL_CALLS"] = 128] = "TAIL_CALLS";
    /** Reference types. */
    Feature[Feature["REFERENCE_TYPES"] = 256] = "REFERENCE_TYPES"; // see: https://github.com/WebAssembly/reference-types
})(Feature = exports.Feature || (exports.Feature = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hc3NlbWJseXNjcmlwdC9zdGQvYXNzZW1ibHkvc2hhcmVkL2ZlYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlFQUFpRTs7QUFFakUsK0NBQStDO0FBQy9DLElBQWtCLE9BcUJqQjtBQXJCRCxXQUFrQixPQUFPO0lBQ3ZCLDhCQUE4QjtJQUM5QixxQ0FBUSxDQUFBO0lBQ1IsaUNBQWlDO0lBQ2pDLHlEQUF1QixDQUFBO0lBQ3ZCLDBDQUEwQztJQUMxQywyREFBd0IsQ0FBQTtJQUN4QixnREFBZ0Q7SUFDaEQsMkRBQXdCLENBQUE7SUFDeEIsOEJBQThCO0lBQzlCLG1EQUFvQixDQUFBO0lBQ3BCLGlDQUFpQztJQUNqQyxzQ0FBYSxDQUFBO0lBQ2IsdUNBQXVDO0lBQ3ZDLDRDQUFnQixDQUFBO0lBQ2hCLHFDQUFxQztJQUNyQyxrRUFBMkIsQ0FBQTtJQUMzQiw0QkFBNEI7SUFDNUIsbURBQW1CLENBQUE7SUFDbkIsdUJBQXVCO0lBQ3ZCLDZEQUF3QixDQUFBLENBQUMsc0RBQXNEO0FBQ2pGLENBQUMsRUFyQmlCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQXFCeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgc2hhcmVkIHdpdGggdGhlIGNvbXBpbGVyIGFuZCBtdXN0IHJlbWFpbiBwb3J0YWJsZVxuXG4vKiogSW5kaWNhdGVzIHNwZWNpZmljIGZlYXR1cmVzIHRvIGFjdGl2YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gRmVhdHVyZSB7XG4gIC8qKiBObyBhZGRpdGlvbmFsIGZlYXR1cmVzLiAqL1xuICBOT05FID0gMCxcbiAgLyoqIFNpZ24gZXh0ZW5zaW9uIG9wZXJhdGlvbnMuICovXG4gIFNJR05fRVhURU5TSU9OID0gMSA8PCAwLCAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJBc3NlbWJseS9zaWduLWV4dGVuc2lvbi1vcHNcbiAgLyoqIE11dGFibGUgZ2xvYmFsIGltcG9ydHMgYW5kIGV4cG9ydHMuICovXG4gIE1VVEFCTEVfR0xPQkFMUyA9IDEgPDwgMSwgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vV2ViQXNzZW1ibHkvbXV0YWJsZS1nbG9iYWxcbiAgLyoqIE5vbi10cmFwcGluZyBmbG9hdCB0byBpbnRlZ2VyIG9wZXJhdGlvbnMuICovXG4gIE5PTlRSQVBQSU5HX0YySSA9IDEgPDwgMiwgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vV2ViQXNzZW1ibHkvbm9udHJhcHBpbmctZmxvYXQtdG8taW50LWNvbnZlcnNpb25zXG4gIC8qKiBCdWxrIG1lbW9yeSBvcGVyYXRpb25zLiAqL1xuICBCVUxLX01FTU9SWSA9IDEgPDwgMywgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vV2ViQXNzZW1ibHkvYnVsay1tZW1vcnktb3BlcmF0aW9uc1xuICAvKiogU0lNRCB0eXBlcyBhbmQgb3BlcmF0aW9ucy4gKi9cbiAgU0lNRCA9IDEgPDwgNCwgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vV2ViQXNzZW1ibHkvc2ltZFxuICAvKiogVGhyZWFkaW5nIGFuZCBhdG9taWMgb3BlcmF0aW9ucy4gKi9cbiAgVEhSRUFEUyA9IDEgPDwgNSwgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vV2ViQXNzZW1ibHkvdGhyZWFkc1xuICAvKiogRXhjZXB0aW9uIGhhbmRsaW5nIG9wZXJhdGlvbnMuICovXG4gIEVYQ0VQVElPTl9IQU5ETElORyA9IDEgPDwgNiwgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vV2ViQXNzZW1ibHkvZXhjZXB0aW9uLWhhbmRsaW5nXG4gIC8qKiBUYWlsIGNhbGwgb3BlcmF0aW9ucy4gKi9cbiAgVEFJTF9DQUxMUyA9IDEgPDwgNywgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vV2ViQXNzZW1ibHkvdGFpbC1jYWxsXG4gIC8qKiBSZWZlcmVuY2UgdHlwZXMuICovXG4gIFJFRkVSRU5DRV9UWVBFUyA9IDEgPDwgOCAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9XZWJBc3NlbWJseS9yZWZlcmVuY2UtdHlwZXNcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/assemblyscript/std/assembly/shared/target.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/assemblyscript/std/assembly/shared/target.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file is shared with the compiler and must remain portable
Object.defineProperty(exports, "__esModule", { value: true });
/** Compilation target. */
var Target;
(function (Target) {
    /** WebAssembly with 32-bit pointers. */
    Target[Target["WASM32"] = 0] = "WASM32";
    /** WebAssembly with 64-bit pointers. Experimental and not supported by any runtime yet. */
    Target[Target["WASM64"] = 1] = "WASM64";
    /** Portable. */
    Target[Target["JS"] = 2] = "JS";
})(Target = exports.Target || (exports.Target = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3N0ZC9hc3NlbWJseS9zaGFyZWQvdGFyZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpRUFBaUU7O0FBRWpFLDBCQUEwQjtBQUMxQixJQUFZLE1BT1g7QUFQRCxXQUFZLE1BQU07SUFDaEIsd0NBQXdDO0lBQ3hDLHVDQUFNLENBQUE7SUFDTiwyRkFBMkY7SUFDM0YsdUNBQU0sQ0FBQTtJQUNOLGdCQUFnQjtJQUNoQiwrQkFBRSxDQUFBO0FBQ0osQ0FBQyxFQVBXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQU9qQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBzaGFyZWQgd2l0aCB0aGUgY29tcGlsZXIgYW5kIG11c3QgcmVtYWluIHBvcnRhYmxlXG5cbi8qKiBDb21waWxhdGlvbiB0YXJnZXQuICovXG5leHBvcnQgZW51bSBUYXJnZXQge1xuICAvKiogV2ViQXNzZW1ibHkgd2l0aCAzMi1iaXQgcG9pbnRlcnMuICovXG4gIFdBU00zMixcbiAgLyoqIFdlYkFzc2VtYmx5IHdpdGggNjQtYml0IHBvaW50ZXJzLiBFeHBlcmltZW50YWwgYW5kIG5vdCBzdXBwb3J0ZWQgYnkgYW55IHJ1bnRpbWUgeWV0LiAqL1xuICBXQVNNNjQsXG4gIC8qKiBQb3J0YWJsZS4gKi9cbiAgSlNcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/assemblyscript/std/assembly/shared/typeinfo.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/assemblyscript/std/assembly/shared/typeinfo.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file is shared with the compiler and must remain portable
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ╒═══════════════════ Typeinfo interpretation ═══════════════════╕
//    3                   2                   1
//  1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0  bits
// ├─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┤ ◄─ __rtti_base
// │                             count                             │
// ╞═══════════════════════════════════════════════════════════════╡ ┐
// │                      Typeinfo#flags [id=0]                    │ id < count
// ├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┤
// │                      Typeinfo#base  [id=0]                    │
// ├───────────────────────────────────────────────────────────────┤
// │                              ...                              │
/** Runtime type information data structure. */
var Typeinfo = /** @class */ (function () {
    function Typeinfo() {
    }
    Typeinfo = __decorate([
        (()=>{})
    ], Typeinfo);
    return Typeinfo;
}());
exports.Typeinfo = Typeinfo;
/** Runtime type information flags. */
var TypeinfoFlags;
(function (TypeinfoFlags) {
    /** No specific flags. */
    TypeinfoFlags[TypeinfoFlags["NONE"] = 0] = "NONE";
    /** Type is an `ArrayBufferView`. */
    TypeinfoFlags[TypeinfoFlags["ARRAYBUFFERVIEW"] = 1] = "ARRAYBUFFERVIEW";
    /** Type is an `Array`. */
    TypeinfoFlags[TypeinfoFlags["ARRAY"] = 2] = "ARRAY";
    /** Type is a `Set`. */
    TypeinfoFlags[TypeinfoFlags["SET"] = 4] = "SET";
    /** Type is a `Map`. */
    TypeinfoFlags[TypeinfoFlags["MAP"] = 8] = "MAP";
    /** Type is inherently acyclic. */
    TypeinfoFlags[TypeinfoFlags["ACYCLIC"] = 16] = "ACYCLIC";
    /** Value alignment of 1 byte. */
    TypeinfoFlags[TypeinfoFlags["VALUE_ALIGN_0"] = 32] = "VALUE_ALIGN_0";
    /** Value alignment of 2 bytes. */
    TypeinfoFlags[TypeinfoFlags["VALUE_ALIGN_1"] = 64] = "VALUE_ALIGN_1";
    /** Value alignment of 4 bytes. */
    TypeinfoFlags[TypeinfoFlags["VALUE_ALIGN_2"] = 128] = "VALUE_ALIGN_2";
    /** Value alignment of 8 bytes. */
    TypeinfoFlags[TypeinfoFlags["VALUE_ALIGN_3"] = 256] = "VALUE_ALIGN_3";
    /** Value alignment of 16 bytes. */
    TypeinfoFlags[TypeinfoFlags["VALUE_ALIGN_4"] = 512] = "VALUE_ALIGN_4";
    /** Value is a signed type. */
    TypeinfoFlags[TypeinfoFlags["VALUE_SIGNED"] = 1024] = "VALUE_SIGNED";
    /** Value is a float type. */
    TypeinfoFlags[TypeinfoFlags["VALUE_FLOAT"] = 2048] = "VALUE_FLOAT";
    /** Value type is nullable. */
    TypeinfoFlags[TypeinfoFlags["VALUE_NULLABLE"] = 4096] = "VALUE_NULLABLE";
    /** Value type is managed. */
    TypeinfoFlags[TypeinfoFlags["VALUE_MANAGED"] = 8192] = "VALUE_MANAGED";
    /** Key alignment of 1 byte. */
    TypeinfoFlags[TypeinfoFlags["KEY_ALIGN_0"] = 16384] = "KEY_ALIGN_0";
    /** Key alignment of 2 bytes. */
    TypeinfoFlags[TypeinfoFlags["KEY_ALIGN_1"] = 32768] = "KEY_ALIGN_1";
    /** Key alignment of 4 bytes. */
    TypeinfoFlags[TypeinfoFlags["KEY_ALIGN_2"] = 65536] = "KEY_ALIGN_2";
    /** Key alignment of 8 bytes. */
    TypeinfoFlags[TypeinfoFlags["KEY_ALIGN_3"] = 131072] = "KEY_ALIGN_3";
    /** Key alignment of 16 bytes. */
    TypeinfoFlags[TypeinfoFlags["KEY_ALIGN_4"] = 262144] = "KEY_ALIGN_4";
    /** Key is a signed type. */
    TypeinfoFlags[TypeinfoFlags["KEY_SIGNED"] = 524288] = "KEY_SIGNED";
    /** Key is a float type. */
    TypeinfoFlags[TypeinfoFlags["KEY_FLOAT"] = 1048576] = "KEY_FLOAT";
    /** Key type is nullable. */
    TypeinfoFlags[TypeinfoFlags["KEY_NULLABLE"] = 2097152] = "KEY_NULLABLE";
    /** Key type is managed. */
    TypeinfoFlags[TypeinfoFlags["KEY_MANAGED"] = 4194304] = "KEY_MANAGED";
})(TypeinfoFlags = exports.TypeinfoFlags || (exports.TypeinfoFlags = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXNzZW1ibHlzY3JpcHQvc3RkL2Fzc2VtYmx5L3NoYXJlZC90eXBlaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUVBQWlFOzs7Ozs7OztBQUVqRSxvRUFBb0U7QUFDcEUsK0NBQStDO0FBQy9DLHlFQUF5RTtBQUN6RSxtRkFBbUY7QUFDbkYsb0VBQW9FO0FBQ3BFLHNFQUFzRTtBQUN0RSwrRUFBK0U7QUFDL0Usb0VBQW9FO0FBQ3BFLG9FQUFvRTtBQUNwRSxvRUFBb0U7QUFDcEUsb0VBQW9FO0FBRXBFLCtDQUErQztBQUUvQztJQUFBO0lBS0EsQ0FBQztJQUxZLFFBQVE7UUFEcEIsU0FBUztPQUNHLFFBQVEsQ0FLcEI7SUFBRCxlQUFDO0NBQUEsQUFMRCxJQUtDO0FBTFksNEJBQVE7QUFPckIsc0NBQXNDO0FBQ3RDLElBQWtCLGFBaURqQjtBQWpERCxXQUFrQixhQUFhO0lBQzdCLHlCQUF5QjtJQUN6QixpREFBUSxDQUFBO0lBQ1Isb0NBQW9DO0lBQ3BDLHVFQUF3QixDQUFBO0lBQ3hCLDBCQUEwQjtJQUMxQixtREFBYyxDQUFBO0lBQ2QsdUJBQXVCO0lBQ3ZCLCtDQUFZLENBQUE7SUFDWix1QkFBdUI7SUFDdkIsK0NBQVksQ0FBQTtJQUNaLGtDQUFrQztJQUNsQyx3REFBZ0IsQ0FBQTtJQUNoQixpQ0FBaUM7SUFDakMsb0VBQXNCLENBQUE7SUFDdEIsa0NBQWtDO0lBQ2xDLG9FQUFzQixDQUFBO0lBQ3RCLGtDQUFrQztJQUNsQyxxRUFBc0IsQ0FBQTtJQUN0QixrQ0FBa0M7SUFDbEMscUVBQXNCLENBQUE7SUFDdEIsbUNBQW1DO0lBQ25DLHFFQUFzQixDQUFBO0lBQ3RCLDhCQUE4QjtJQUM5QixvRUFBc0IsQ0FBQTtJQUN0Qiw2QkFBNkI7SUFDN0Isa0VBQXFCLENBQUE7SUFDckIsOEJBQThCO0lBQzlCLHdFQUF3QixDQUFBO0lBQ3hCLDZCQUE2QjtJQUM3QixzRUFBdUIsQ0FBQTtJQUN2QiwrQkFBK0I7SUFDL0IsbUVBQXFCLENBQUE7SUFDckIsZ0NBQWdDO0lBQ2hDLG1FQUFxQixDQUFBO0lBQ3JCLGdDQUFnQztJQUNoQyxtRUFBcUIsQ0FBQTtJQUNyQixnQ0FBZ0M7SUFDaEMsb0VBQXFCLENBQUE7SUFDckIsaUNBQWlDO0lBQ2pDLG9FQUFxQixDQUFBO0lBQ3JCLDRCQUE0QjtJQUM1QixrRUFBb0IsQ0FBQTtJQUNwQiwyQkFBMkI7SUFDM0IsaUVBQW1CLENBQUE7SUFDbkIsNEJBQTRCO0lBQzVCLHVFQUFzQixDQUFBO0lBQ3RCLDJCQUEyQjtJQUMzQixxRUFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBakRpQixhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQWlEOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgc2hhcmVkIHdpdGggdGhlIGNvbXBpbGVyIGFuZCBtdXN0IHJlbWFpbiBwb3J0YWJsZVxuXG4vLyDilZLilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZAgVHlwZWluZm8gaW50ZXJwcmV0YXRpb24g4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWVXG4vLyAgICAzICAgICAgICAgICAgICAgICAgIDIgICAgICAgICAgICAgICAgICAgMVxuLy8gIDEgMCA5IDggNyA2IDUgNCAzIDIgMSAwIDkgOCA3IDYgNSA0IDMgMiAxIDAgOSA4IDcgNiA1IDQgMyAyIDEgMCAgYml0c1xuLy8g4pSc4pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pS04pSA4pSkIOKXhOKUgCBfX3J0dGlfYmFzZVxuLy8g4pSCICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCXG4vLyDilZ7ilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilZDilaEg4pSQXG4vLyDilIIgICAgICAgICAgICAgICAgICAgICAgVHlwZWluZm8jZmxhZ3MgW2lkPTBdICAgICAgICAgICAgICAgICAgICDilIIgaWQgPCBjb3VudFxuLy8g4pScIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilIAg4pSAIOKUgCDilKRcbi8vIOKUgiAgICAgICAgICAgICAgICAgICAgICBUeXBlaW5mbyNiYXNlICBbaWQ9MF0gICAgICAgICAgICAgICAgICAgIOKUglxuLy8g4pSc4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSkXG4vLyDilIIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIJcblxuLyoqIFJ1bnRpbWUgdHlwZSBpbmZvcm1hdGlvbiBkYXRhIHN0cnVjdHVyZS4gKi9cbkB1bm1hbmFnZWRcbmV4cG9ydCBjbGFzcyBUeXBlaW5mbyB7XG4gIC8qKiBGbGFncyBkZXNjcmliaW5nIHRoZSBzaGFwZSBvZiB0aGlzIGNsYXNzIHR5cGUuICovXG4gIGZsYWdzOiBUeXBlaW5mb0ZsYWdzO1xuICAvKiogQmFzZSBjbGFzcyBpZCBvciBgMGAgaWYgbm9uZS4gKi9cbiAgYmFzZTogdTMyO1xufVxuXG4vKiogUnVudGltZSB0eXBlIGluZm9ybWF0aW9uIGZsYWdzLiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gVHlwZWluZm9GbGFncyB7XG4gIC8qKiBObyBzcGVjaWZpYyBmbGFncy4gKi9cbiAgTk9ORSA9IDAsXG4gIC8qKiBUeXBlIGlzIGFuIGBBcnJheUJ1ZmZlclZpZXdgLiAqL1xuICBBUlJBWUJVRkZFUlZJRVcgPSAxIDw8IDAsXG4gIC8qKiBUeXBlIGlzIGFuIGBBcnJheWAuICovXG4gIEFSUkFZID0gMSA8PCAxLFxuICAvKiogVHlwZSBpcyBhIGBTZXRgLiAqL1xuICBTRVQgPSAxIDw8IDIsXG4gIC8qKiBUeXBlIGlzIGEgYE1hcGAuICovXG4gIE1BUCA9IDEgPDwgMyxcbiAgLyoqIFR5cGUgaXMgaW5oZXJlbnRseSBhY3ljbGljLiAqL1xuICBBQ1lDTElDID0gMSA8PCA0LFxuICAvKiogVmFsdWUgYWxpZ25tZW50IG9mIDEgYnl0ZS4gKi9cbiAgVkFMVUVfQUxJR05fMCA9IDEgPDwgNSxcbiAgLyoqIFZhbHVlIGFsaWdubWVudCBvZiAyIGJ5dGVzLiAqL1xuICBWQUxVRV9BTElHTl8xID0gMSA8PCA2LFxuICAvKiogVmFsdWUgYWxpZ25tZW50IG9mIDQgYnl0ZXMuICovXG4gIFZBTFVFX0FMSUdOXzIgPSAxIDw8IDcsXG4gIC8qKiBWYWx1ZSBhbGlnbm1lbnQgb2YgOCBieXRlcy4gKi9cbiAgVkFMVUVfQUxJR05fMyA9IDEgPDwgOCxcbiAgLyoqIFZhbHVlIGFsaWdubWVudCBvZiAxNiBieXRlcy4gKi9cbiAgVkFMVUVfQUxJR05fNCA9IDEgPDwgOSxcbiAgLyoqIFZhbHVlIGlzIGEgc2lnbmVkIHR5cGUuICovXG4gIFZBTFVFX1NJR05FRCA9IDEgPDwgMTAsXG4gIC8qKiBWYWx1ZSBpcyBhIGZsb2F0IHR5cGUuICovXG4gIFZBTFVFX0ZMT0FUID0gMSA8PCAxMSxcbiAgLyoqIFZhbHVlIHR5cGUgaXMgbnVsbGFibGUuICovXG4gIFZBTFVFX05VTExBQkxFID0gMSA8PCAxMixcbiAgLyoqIFZhbHVlIHR5cGUgaXMgbWFuYWdlZC4gKi9cbiAgVkFMVUVfTUFOQUdFRCA9IDEgPDwgMTMsXG4gIC8qKiBLZXkgYWxpZ25tZW50IG9mIDEgYnl0ZS4gKi9cbiAgS0VZX0FMSUdOXzAgPSAxIDw8IDE0LFxuICAvKiogS2V5IGFsaWdubWVudCBvZiAyIGJ5dGVzLiAqL1xuICBLRVlfQUxJR05fMSA9IDEgPDwgMTUsXG4gIC8qKiBLZXkgYWxpZ25tZW50IG9mIDQgYnl0ZXMuICovXG4gIEtFWV9BTElHTl8yID0gMSA8PCAxNixcbiAgLyoqIEtleSBhbGlnbm1lbnQgb2YgOCBieXRlcy4gKi9cbiAgS0VZX0FMSUdOXzMgPSAxIDw8IDE3LFxuICAvKiogS2V5IGFsaWdubWVudCBvZiAxNiBieXRlcy4gKi9cbiAgS0VZX0FMSUdOXzQgPSAxIDw8IDE4LFxuICAvKiogS2V5IGlzIGEgc2lnbmVkIHR5cGUuICovXG4gIEtFWV9TSUdORUQgPSAxIDw8IDE5LFxuICAvKiogS2V5IGlzIGEgZmxvYXQgdHlwZS4gKi9cbiAgS0VZX0ZMT0FUID0gMSA8PCAyMCxcbiAgLyoqIEtleSB0eXBlIGlzIG51bGxhYmxlLiAqL1xuICBLRVlfTlVMTEFCTEUgPSAxIDw8IDIxLFxuICAvKiogS2V5IHR5cGUgaXMgbWFuYWdlZC4gKi9cbiAgS0VZX01BTkFHRUQgPSAxIDw8IDIyXG59XG4iXX0=

/***/ }),

/***/ "./node_modules/assemblyscript/std/portable/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/assemblyscript/std/portable/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** @module std/portable *//***/

var globalScope = typeof window !== "undefined" && window || typeof global !== "undefined" && global || self;

globalScope.ASC_TARGET = 2; // Target.JS
globalScope.ASC_NO_ASSERT = false;
globalScope.ASC_MEMORY_BASE = 0;
globalScope.ASC_OPTIMIZE_LEVEL = 3;
globalScope.ASC_SHRINK_LEVEL = 0;
globalScope.ASC_FEATURE_MUTABLE_GLOBAL = false;
globalScope.ASC_FEATURE_SIGN_EXTENSION = false;
globalScope.ASC_FEATURE_BULK_MEMORY = false;
globalScope.ASC_FEATURE_SIMD = false;
globalScope.ASC_FEATURE_THREADS = false;

var F64 = new Float64Array(1);
var U64 = new Uint32Array(F64.buffer);

Object.defineProperties(
  globalScope["i8"] = function i8(value) { return value << 24 >> 24; }
, {
  "MIN_VALUE": { value: -128, writable: false },
  "MAX_VALUE": { value:  127, writable: false }
});

Object.defineProperties(
  globalScope["i16"] = function i16(value) { return value << 16 >> 16; }
, {
  "MIN_VALUE": { value: -32768, writable: false },
  "MAX_VALUE": { value:  32767, writable: false }
});

Object.defineProperties(
  globalScope["i32"] = globalScope["isize"] = function i32(value) { return value | 0; }
, {
  "MIN_VALUE": { value: -2147483648, writable: false },
  "MAX_VALUE": { value:  2147483647, writable: false }
});

Object.defineProperties(
  globalScope["u8"] = function u8(value) { return value & 0xff; }
, {
  "MIN_VALUE": { value:   0, writable: false },
  "MAX_VALUE": { value: 255, writable: false }
});

Object.defineProperties(
  globalScope["u16"] = function u16(value) { return value & 0xffff; }
, {
  "MIN_VALUE": { value:     0, writable: false },
  "MAX_VALUE": { value: 65535, writable: false }
});

Object.defineProperties(
  globalScope["u32"] = globalScope["usize"] = function u32(value) { return value >>> 0; }
, {
  "MIN_VALUE": { value:          0, writable: false },
  "MAX_VALUE": { value: 4294967295, writable: false }
});

Object.defineProperties(
  globalScope["bool"] = function bool(value) { return !!value; }
, {
  "MIN_VALUE": { value: false, writable: false },
  "MAX_VALUE": { value: true,  writable: false }
});

Object.defineProperties(
  globalScope["f32"] = function f32(value) { return Math.fround(value); }
, {
  "EPSILON":   { value: Math.fround(1.1920929e-07), writable: false },
  "MIN_VALUE": { value: Math.fround(1.4012985e-45), writable: false },
  "MAX_VALUE": { value: Math.fround(3.4028235e+38), writable: false },
  "MIN_NORMAL_VALUE":  { value:  Math.fround(1.17549435e-38), writable: false },
  "MIN_SAFE_INTEGER":  { value: -16777215, writable: false },
  "MAX_SAFE_INTEGER":  { value:  16777215, writable: false }
});

Object.defineProperties(
  globalScope["f64"] = function f64(value) { return +value; }
, {
  "EPSILON":   { value: 2.2204460492503131e-16,  writable: false },
  "MIN_VALUE": { value:                  5e-324, writable: false },
  "MAX_VALUE": { value: 1.7976931348623157e+308, writable: false },
  "MIN_NORMAL_VALUE":  { value: 2.2250738585072014e-308 , writable: false },
  "MIN_SAFE_INTEGER":  { value: -9007199254740991, writable: false },
  "MAX_SAFE_INTEGER":  { value:  9007199254740991, writable: false }
});

globalScope["clz"] = Math.clz32;

globalScope["ctz"] = function ctz(value) {
  var c = Math.clz32(value & -value);
  return value ? 31 - c : c;
};

globalScope["popcnt"] = function popcnt(value) {
  value -= value >>> 1 & 0x55555555;
  value = (value & 0x33333333) + (value >>> 2 & 0x33333333);
  return (((value + (value >>> 4)) & 0x0F0F0F0F) * 0x01010101) >>> 24;
};

globalScope["rotl"] = function rotl(value, shift) {
  shift &= 31;
  return (value << shift) | (value >>> (32 - shift));
};

globalScope["rotr"] = function rotr(value, shift) {
  shift &= 31;
  return (value >>> shift) | (value << (32 - shift));
};

globalScope["abs"] = Math.abs;

globalScope["max"] = Math.max;

globalScope["min"] = Math.min;

globalScope["ceil"] = Math.ceil;

globalScope["floor"] = Math.floor;

// Adopt code from https://github.com/rfk/wasm-polyfill
globalScope["nearest"] = function nearest(value) {
  if (Math.abs(value - Math.trunc(value)) === 0.5) {
    return 2.0 * Math.round(value * 0.5);
  }
  return Math.round(value);
};

globalScope["select"] = function select(ifTrue, ifFalse, condition) {
  return condition ? ifTrue : ifFalse;
};

globalScope["sqrt"] = Math.sqrt;

globalScope["trunc"] = Math.trunc;

globalScope["copysign"] = function copysign(x, y) {
  return Math.abs(x) * Math.sign(y);
};

globalScope["bswap"] = function bswap(value) {
  var a = value >> 8 & 0x00FF00FF;
  var b = (value & 0x00FF00FF) << 8;
  value = a | b;
  a = value >> 16 & 0x0000FFFF;
  b = (value & 0x0000FFFF) << 16;
  return a | b;
};

globalScope["bswap16"] = function bswap16(value) {
  return ((value << 8) & 0xFF00) | ((value >> 8) & 0x00FF) | (value & 0xFFFF0000);
};

function UnreachableError() {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, UnreachableError);
  } else {
    this.stack = this.name + ": " + this.message + "\n" + new Error().stack;
  }
}
UnreachableError.prototype = Object.create(Error.prototype);
UnreachableError.prototype.name = "UnreachableError";
UnreachableError.prototype.message = "unreachable";

globalScope["unreachable"] = function unreachable() {
  throw new UnreachableError();
};

function AssertionError(message) {
  this.message = message || "assertion failed";
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, AssertionError);
  } else {
    this.stack = this.name + ": " + this.message + "\n" + new Error().stack;
  }
}
AssertionError.prototype = Object.create(Error.prototype);
AssertionError.prototype.name = "AssertionError";

globalScope["assert"] = function assert(isTrueish, message) {
  if (isTrueish) return isTrueish;
  throw new AssertionError(message);
};

globalScope["changetype"] = function changetype(value) {
  return value;
};

String["fromCharCodes"] = function fromCharCodes(arr) {
  return String.fromCharCode.apply(String, arr);
};

String["fromCodePoints"] = function fromCodePoints(arr) {
  return String.fromCodePoint.apply(String, arr);
};

if (!String.prototype.replaceAll) {
  Object.defineProperty(String.prototype, "replaceAll", {
    value: function replaceAll(search, replacment) {
      var res = this.split(search).join(replacment);
      if (!search.length) res = replacment + res + replacment;
      return res;
    }
  });
}

globalScope["isInteger"] = Number.isInteger;

globalScope["isFloat"] = function isFloat(arg) {
  return typeof arg === "number";
};

globalScope["isNullable"] = function isNullable(arg) {
  return true;
}

globalScope["isReference"] = function isReference(arg) {
  return typeof arg === "object" || typeof arg === "string";
};

globalScope["isFunction"] = function isFunction(arg) {
  return typeof arg === "function";
}

globalScope["isString"] = function isString(arg) {
  return typeof arg === "string" || arg instanceof String;
};

globalScope["isArray"] = Array.isArray;
globalScope["isArrayLike"] = function isArrayLike(expr) {
  return expr
    && typeof expr === 'object'
    && typeof expr.length === 'number'
    && expr.length >= 0
    && Math.trunc(expr.length) === expr.length;
};

globalScope["isDefined"] = function isDefined(expr) {
  return typeof expr !== "undefined";
}

globalScope["isConstant"] = function isConstant(expr) {
  return false;
};

globalScope["unchecked"] = function unchecked(expr) {
  return expr;
};

globalScope["fmod"] = function fmod(x, y) {
  return x % y;
};

globalScope["fmodf"] = function fmodf(x, y) {
  return Math.fround(x % y);
};

globalScope["JSMath"] = Math;

Object.defineProperties(globalScope["JSMath"], {
  sincos_sin: { value: 0.0, writable: true },
  sincos_cos: { value: 0.0, writable: true },
  signbit: {
    value: function signbit(x) {
      F64[0] = x; return Boolean((U64[1] >>> 31) & (x == x));
    }
  },
  sincos: {
    value: function sincos(x) {
      this.sincos_sin = Math.sin(x);
      this.sincos_cos = Math.cos(x);
    }
  }
});

globalScope["memory"] = (() => {
  var HEAP = new Uint8Array(0);
  var HEAP_OFFSET = 0;
  return {
    allocate: globalScope["__memory_allocate"] || function allocate(size) {
      if (!(size >>>= 0)) return 0;
      if (HEAP_OFFSET + size > HEAP.length) {
        var oldHeap = HEAP;
        HEAP = new Uint8Array(Math.max(65536, HEAP.length + size, HEAP.length * 2));
        HEAP.set(oldHeap);
      }
      var ptr = HEAP_OFFSET;
      if ((HEAP_OFFSET += size) & 7) HEAP_OFFSET = (HEAP_OFFSET | 7) + 1;
      return ptr;
    },
    fill: globalScope["__memory_fill"] || function fill(dest, value, size) {
      HEAP.fill(value, dest, dest + size);
    },
    free: globalScope["__memory_free"] || function free(ptr) { },
    copy: globalScope["__memory_copy"] || function copy(dest, src, size) {
      HEAP.copyWithin(dest, src, src + size);
    },
    reset: globalScope["__memory_reset"] || function reset() {
      HEAP = new Uint8Array(0);
      HEAP_OFFSET = 0;
    }
  };
})();

globalScope["store"] = globalScope["__store"] || function store(ptr, value, offset) {
  HEAP[(ptr | 0) + (offset | 0)] = value;
};

globalScope["load"] = globalScope["__load"] || function load(ptr, offset) {
  return HEAP[(ptr | 0) + (offset | 0)];
};

globalScope["unmanaged"] = function() {};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/long/src/long.js":
/*!***************************************!*\
  !*** ./node_modules/long/src/long.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Long;

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
  ])), {}).exports;
} catch (e) {
  // no wasm support :(
}

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {

    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;

    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;

    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}

// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;

Object.defineProperty(Long.prototype, "__isLong__", { value: true });

/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}

/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};

/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}

/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
        unsigned = false;
    } else {
        unsigned = !! unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');

    var p;
    if ((p = str.indexOf('-')) > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }

    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));

    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}

/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
Long.fromValue = fromValue;

// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);

/**
 * Signed zero.
 * @type {!Long}
 */
Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);

/**
 * Unsigned zero.
 * @type {!Long}
 */
Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);

/**
 * Signed one.
 * @type {!Long}
 */
Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);

/**
 * Unsigned one.
 * @type {!Long}
 */
Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);

/**
 * Signed negative one.
 * @type {!Long}
 */
Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

/**
 * Maximum signed value.
 * @type {!Long}
 */
Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

/**
 * Maximum unsigned value.
 * @type {!Long}
 */
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000|0, false);

/**
 * Minimum signed value.
 * @type {!Long}
 */
Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @returns {number}
 */
LongPrototype.toInt = function toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @returns {number}
 */
LongPrototype.toNumber = function toNumber() {
    if (this.unsigned)
        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};

/**
 * Converts the Long to a string written in the specified radix.
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
LongPrototype.toString = function toString(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (this.isZero())
        return '0';
    if (this.isNegative()) { // Unsigned Longs are never negative
        if (this.eq(MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix),
                div = this.div(radixLong),
                rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
        } else
            return '-' + this.neg().toString(radix);
    }

    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
        rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower),
            intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
            digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
};

/**
 * Gets the high 32 bits as a signed integer.
 * @returns {number} Signed high bits
 */
LongPrototype.getHighBits = function getHighBits() {
    return this.high;
};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @returns {number} Unsigned high bits
 */
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
    return this.high >>> 0;
};

/**
 * Gets the low 32 bits as a signed integer.
 * @returns {number} Signed low bits
 */
LongPrototype.getLowBits = function getLowBits() {
    return this.low;
};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @returns {number} Unsigned low bits
 */
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
    return this.low >>> 0;
};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @returns {number}
 */
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
    if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    var val = this.high != 0 ? this.high : this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return this.high != 0 ? bit + 33 : bit + 1;
};

/**
 * Tests if this Long's value equals zero.
 * @returns {boolean}
 */
LongPrototype.isZero = function isZero() {
    return this.high === 0 && this.low === 0;
};

/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @returns {boolean}
 */
LongPrototype.isNegative = function isNegative() {
    return !this.unsigned && this.high < 0;
};

/**
 * Tests if this Long's value is positive.
 * @returns {boolean}
 */
LongPrototype.isPositive = function isPositive() {
    return this.unsigned || this.high >= 0;
};

/**
 * Tests if this Long's value is odd.
 * @returns {boolean}
 */
LongPrototype.isOdd = function isOdd() {
    return (this.low & 1) === 1;
};

/**
 * Tests if this Long's value is even.
 * @returns {boolean}
 */
LongPrototype.isEven = function isEven() {
    return (this.low & 1) === 0;
};

/**
 * Tests if this Long's value equals the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.equals = function equals(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return this.high === other.high && this.low === other.low;
};

/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.notEquals = function notEquals(other) {
    return !this.eq(/* validates */ other);
};

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThan = function lessThan(other) {
    return this.comp(/* validates */ other) < 0;
};

/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
    return this.comp(/* validates */ other) <= 0;
};

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThan = function greaterThan(other) {
    return this.comp(/* validates */ other) > 0;
};

/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
    return this.comp(/* validates */ other) >= 0;
};

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.compare = function compare(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.eq(other))
        return 0;
    var thisNeg = this.isNegative(),
        otherNeg = other.isNegative();
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
};

/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @returns {!Long} Negated Long
 */
LongPrototype.negate = function negate() {
    if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
    return this.not().add(ONE);
};

/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
LongPrototype.add = function add(addend) {
    if (!isLong(addend))
        addend = fromValue(addend);

    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the difference of this and the specified Long.
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.subtract = function subtract(subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return this.add(subtrahend.neg());
};

/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.multiply = function multiply(multiplier) {
    if (this.isZero())
        return ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);

    // use wasm support if present
    if (wasm) {
        var low = wasm.mul(this.low,
                           this.high,
                           multiplier.low,
                           multiplier.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (multiplier.isZero())
        return ZERO;
    if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
    if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;

    if (this.isNegative()) {
        if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
        else
            return this.neg().mul(multiplier).neg();
    } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();

    // If both longs are small, use float multiplication
    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.divide = function divide(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (divisor.isZero())
        throw Error('division by zero');

    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!this.unsigned &&
            this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return this;
        }
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
            else if (divisor.eq(MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = this.shr(1);
                approx = halfThis.div(divisor).shl(1);
                if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                }
            }
        } else if (divisor.eq(MIN_VALUE))
            return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
            if (divisor.isNegative())
                return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
        res = ZERO;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
        if (divisor.gt(this))
            return UZERO;
        if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }

    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = this;
    while (rem.gte(divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
            delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
            approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero())
            approxRes = ONE;

        res = res.add(approxRes);
        rem = rem.sub(approxRem);
    }
    return res;
};

/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.modulo = function modulo(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);

    // use wasm support if present
    if (wasm) {
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    return this.sub(this.div(divisor).mul(divisor));
};

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @returns {!Long}
 */
LongPrototype.not = function not() {
    return fromBits(~this.low, ~this.high, this.unsigned);
};

/**
 * Returns the bitwise AND of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.and = function and(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.or = function or(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.xor = function xor(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftLeft = function shiftLeft(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
    else
        return fromBits(0, this.low << (numBits - 32), this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRight = function shiftRight(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
    else
        return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    numBits &= 63;
    if (numBits === 0)
        return this;
    else {
        var high = this.high;
        if (numBits < 32) {
            var low = this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
        } else if (numBits === 32)
            return fromBits(high, 0, this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, this.unsigned);
    }
};

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Converts this Long to signed.
 * @returns {!Long} Signed long
 */
LongPrototype.toSigned = function toSigned() {
    if (!this.unsigned)
        return this;
    return fromBits(this.low, this.high, false);
};

/**
 * Converts this Long to unsigned.
 * @returns {!Long} Unsigned long
 */
LongPrototype.toUnsigned = function toUnsigned() {
    if (this.unsigned)
        return this;
    return fromBits(this.low, this.high, true);
};

/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {!Array.<number>} Byte representation
 */
LongPrototype.toBytes = function toBytes(le) {
    return le ? this.toBytesLE() : this.toBytesBE();
};

/**
 * Converts this Long to its little endian byte representation.
 * @returns {!Array.<number>} Little endian byte representation
 */
LongPrototype.toBytesLE = function toBytesLE() {
    var hi = this.high,
        lo = this.low;
    return [
        lo        & 0xff,
        lo >>>  8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24       ,
        hi        & 0xff,
        hi >>>  8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
};

/**
 * Converts this Long to its big endian byte representation.
 * @returns {!Array.<number>} Big endian byte representation
 */
LongPrototype.toBytesBE = function toBytesBE() {
    var hi = this.high,
        lo = this.low;
    return [
        hi >>> 24       ,
        hi >>> 16 & 0xff,
        hi >>>  8 & 0xff,
        hi        & 0xff,
        lo >>> 24       ,
        lo >>> 16 & 0xff,
        lo >>>  8 & 0xff,
        lo        & 0xff
    ];
};

/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};

/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
    return new Long(
        bytes[0]       |
        bytes[1] <<  8 |
        bytes[2] << 16 |
        bytes[3] << 24,
        bytes[4]       |
        bytes[5] <<  8 |
        bytes[6] << 16 |
        bytes[7] << 24,
        unsigned
    );
};

/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
    return new Long(
        bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] <<  8 |
        bytes[7],
        bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] <<  8 |
        bytes[3],
        unsigned
    );
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/base.ts":
/*!*********************!*\
  !*** ./src/base.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var ast_1 = __webpack_require__(/*! ../node_modules/assemblyscript/src/ast */ "./node_modules/assemblyscript/src/ast.ts");
var visitor_1 = __webpack_require__(/*! ./visitor */ "./src/visitor.ts");
var BaseVisitor = /** @class */ (function (_super) {
    __extends(BaseVisitor, _super);
    function BaseVisitor(writer) {
        var _this = _super.call(this, writer) || this;
        _this.depth = 0;
        return _this;
    }
    BaseVisitor.prototype._visit = function (node) {
        switch (node.kind) {
            case ast_1.NodeKind.SOURCE: {
                this.visitSource(node);
                break;
            }
            // types
            case ast_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case ast_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            case ast_1.NodeKind.TYPENAME: {
                this.visitTypeName(node);
            }
            case ast_1.NodeKind.TYPEPARAMETER: {
                this.visitTypeParameter(node);
                break;
            }
            // expressions
            case ast_1.NodeKind.FALSE:
            case ast_1.NodeKind.NULL:
            case ast_1.NodeKind.SUPER:
            case ast_1.NodeKind.THIS:
            case ast_1.NodeKind.TRUE:
            case ast_1.NodeKind.CONSTRUCTOR:
            case ast_1.NodeKind.IDENTIFIER: {
                this.visitIdentifierExpression(node);
                break;
            }
            case ast_1.NodeKind.ASSERTION: {
                this.visitAssertionExpression(node);
                break;
            }
            case ast_1.NodeKind.BINARY: {
                this.visitBinaryExpression(node);
                break;
            }
            case ast_1.NodeKind.CALL: {
                this.visitCallExpression(node);
                break;
            }
            case ast_1.NodeKind.CLASS: {
                this.visitClassExpression(node);
                break;
            }
            case ast_1.NodeKind.COMMA: {
                this.visitCommaExpression(node);
                break;
            }
            case ast_1.NodeKind.ELEMENTACCESS: {
                this.visitElementAccessExpression(node);
                break;
            }
            case ast_1.NodeKind.FUNCTION: {
                this.visitFunctionExpression(node);
                break;
            }
            case ast_1.NodeKind.INSTANCEOF: {
                this.visitInstanceOfExpression(node);
                break;
            }
            case ast_1.NodeKind.LITERAL: {
                this.visitLiteralExpression(node);
                break;
            }
            case ast_1.NodeKind.NEW: {
                this.visitNewExpression(node);
                break;
            }
            case ast_1.NodeKind.PARENTHESIZED: {
                this.visitParenthesizedExpression(node);
                break;
            }
            case ast_1.NodeKind.PROPERTYACCESS: {
                this.visitPropertyAccessExpression(node);
                break;
            }
            case ast_1.NodeKind.TERNARY: {
                this.visitTernaryExpression(node);
                break;
            }
            case ast_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case ast_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            // statements
            case ast_1.NodeKind.BLOCK: {
                this.visitBlockStatement(node);
                break;
            }
            case ast_1.NodeKind.BREAK: {
                this.visitBreakStatement(node);
                break;
            }
            case ast_1.NodeKind.CONTINUE: {
                this.visitContinueStatement(node);
                break;
            }
            case ast_1.NodeKind.DO: {
                this.visitDoStatement(node);
                break;
            }
            case ast_1.NodeKind.EMPTY: {
                this.visitEmptyStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORT: {
                this.visitExportStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORTDEFAULT: {
                this.visitExportDefaultStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORTIMPORT: {
                this.visitExportImportStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPRESSION: {
                this.visitExpressionStatement(node);
                break;
            }
            case ast_1.NodeKind.FOR: {
                this.visitForStatement(node);
                break;
            }
            case ast_1.NodeKind.IF: {
                this.visitIfStatement(node);
                break;
            }
            case ast_1.NodeKind.IMPORT: {
                this.visitImportStatement(node);
                break;
            }
            case ast_1.NodeKind.RETURN: {
                this.visitReturnStatement(node);
                break;
            }
            case ast_1.NodeKind.SWITCH: {
                this.visitSwitchStatement(node);
                break;
            }
            case ast_1.NodeKind.THROW: {
                this.visitThrowStatement(node);
                break;
            }
            case ast_1.NodeKind.TRY: {
                this.visitTryStatement(node);
                break;
            }
            case ast_1.NodeKind.VARIABLE: {
                this.visitVariableStatement(node);
                break;
            }
            case ast_1.NodeKind.WHILE: {
                this.visitWhileStatement(node);
                break;
            }
            // declaration statements
            case ast_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(node);
                break;
            }
            case ast_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(node);
                break;
            }
            case ast_1.NodeKind.ENUMVALUEDECLARATION: {
                this.visitEnumValueDeclaration(node);
                break;
            }
            case ast_1.NodeKind.FIELDDECLARATION: {
                this.visitFieldDeclaration(node);
                break;
            }
            case ast_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(node);
                break;
            }
            case ast_1.NodeKind.IMPORTDECLARATION: {
                this.visitImportDeclaration(node);
                break;
            }
            case ast_1.NodeKind.INDEXSIGNATUREDECLARATION: {
                this.visitIndexSignatureDeclaration(node);
                break;
            }
            case ast_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(node);
                break;
            }
            case ast_1.NodeKind.METHODDECLARATION: {
                this.visitMethodDeclaration(node);
                break;
            }
            case ast_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(node);
                break;
            }
            case ast_1.NodeKind.TYPEDECLARATION: {
                this.visitTypeDeclaration(node);
                break;
            }
            case ast_1.NodeKind.VARIABLEDECLARATION: {
                this.visitVariableDeclaration(node);
                break;
            }
            // other
            case ast_1.NodeKind.DECORATOR: {
                this.visitDecoratorNode(node);
                break;
            }
            case ast_1.NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case ast_1.NodeKind.PARAMETER: {
                this.visitParameter(node);
                break;
            }
            case ast_1.NodeKind.SWITCHCASE: {
                this.visitSwitchCase(node);
                break;
            }
            default: assert(false);
        }
    };
    BaseVisitor.prototype.visitSource = function (node) {
        var e_1, _a;
        try {
            for (var _b = __values(node.statements), _c = _b.next(); !_c.done; _c = _b.next()) {
                var stmt = _c.value;
                this.depth++;
                this.visit(stmt);
                this.depth--;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BaseVisitor.prototype.visitTypeNode = function (node) { };
    BaseVisitor.prototype.visitTypeName = function (node) {
        this.visit(node.identifier);
        if (node.next) {
            this.visit(node);
        }
    };
    BaseVisitor.prototype.visitNamedTypeNode = function (node) {
        this.visit(node.name);
        this.visit(node.typeArguments);
    };
    BaseVisitor.prototype.visitFunctionTypeNode = function (node) {
        var e_2, _a;
        try {
            for (var _b = __values(node.parameters), _c = _b.next(); !_c.done; _c = _b.next()) {
                var param = _c.value;
                this.visit(param);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.visit(node.returnType);
    };
    BaseVisitor.prototype.visitTypeParameter = function (node) {
        this.visit(node.name);
        if (node.extendsType)
            this.visit(node.extendsType);
        if (node.defaultType)
            this.visit(node.defaultType);
    };
    BaseVisitor.prototype.visitIdentifierExpression = function (node) { };
    BaseVisitor.prototype.visitArrayLiteralExpression = function (node) {
        var _this = this;
        node.elementExpressions.map(function (e) {
            if (e)
                _this.visit(e);
        });
    };
    BaseVisitor.prototype.visitObjectLiteralExpression = function (node) {
        if (node.values && node.names) {
            assert(node.values.length == node.names.length);
            for (var i = 0; i < node.values.length; i++) {
                this.visit(node.names[i]);
                this.visit(node.values[i]);
            }
        }
    };
    BaseVisitor.prototype.visitAssertionExpression = function (node) {
        if (node.toType)
            this.visit(node.toType);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitBinaryExpression = function (node) {
        this.visit(node.left);
        this.visit(node.right);
    };
    BaseVisitor.prototype.visitCallExpression = function (node) {
        this.visit(node.expression);
        this.visit(node.typeArguments);
        this.visit(node.arguments);
    };
    BaseVisitor.prototype.visitClassExpression = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitCommaExpression = function (node) {
        this.visit(node.expressions);
    };
    BaseVisitor.prototype.visitElementAccessExpression = function (node) {
        this.visit(node.elementExpression);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitFunctionExpression = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitLiteralExpression = function (node) {
        // node.
    };
    BaseVisitor.prototype.visitFloatLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitInstanceOfExpression = function (node) {
        this.visit(node.expression);
        this.visit(node.isType);
    };
    BaseVisitor.prototype.visitIntegerLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitStringLiteral = function (str, singleQuoted) { };
    BaseVisitor.prototype.visitStringLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitRegexpLiteralExpression = function (node) { };
    BaseVisitor.prototype.visitNewExpression = function (node) {
        this.visit(node.expression);
        this.visit(node.typeArguments);
        this.visit(node.arguments);
    };
    BaseVisitor.prototype.visitParenthesizedExpression = function (node) {
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitPropertyAccessExpression = function (node) {
        this.visit(node.property);
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitTernaryExpression = function (node) {
        this.visit(node.condition);
        this.visit(node.ifThen);
        this.visit(node.ifElse);
    };
    BaseVisitor.prototype.visitUnaryExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitUnaryPostfixExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitUnaryPrefixExpression = function (node) {
        this.visit(node.operand);
    };
    BaseVisitor.prototype.visitSuperExpression = function (node) { };
    BaseVisitor.prototype.visitFalseExpression = function (node) { };
    BaseVisitor.prototype.visitTrueExpression = function (node) { };
    BaseVisitor.prototype.visitThisExpression = function (node) { };
    BaseVisitor.prototype.visitNullExperssion = function (node) { };
    BaseVisitor.prototype.visitConstructorExpression = function (node) { };
    BaseVisitor.prototype.visitNodeAndTerminate = function (statement) { };
    BaseVisitor.prototype.visitBlockStatement = function (node) {
        this.depth++;
        this.visit(node.statements);
        this.depth--;
    };
    BaseVisitor.prototype.visitBreakStatement = function (node) {
        if (node.label) {
            this.visit(node.label);
        }
    };
    BaseVisitor.prototype.visitContinueStatement = function (node) {
        if (node.label) {
            this.visit(node.label);
        }
    };
    BaseVisitor.prototype.visitClassDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.depth++;
        this.visit(node.decorators);
        assert(node.isGeneric ? node.typeParameters != null : node.typeParameters == null);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        if (node.extendsType) {
            this.visit(node.extendsType);
        }
        this.visit(node.implementsTypes);
        this.visit(node.members);
        this.depth--;
    };
    BaseVisitor.prototype.visitDoStatement = function (node) {
        this.visit(node.condition);
        this.visit(node.statement);
    };
    BaseVisitor.prototype.visitEmptyStatement = function (node) { };
    BaseVisitor.prototype.visitEnumDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.values);
    };
    BaseVisitor.prototype.visitEnumValueDeclaration = function (node) {
        this.visit(node.name);
        if (node.initializer) {
            this.visit(node.initializer);
        }
    };
    BaseVisitor.prototype.visitExportImportStatement = function (node) {
        this.visit(node.name);
        this.visit(node.externalName);
    };
    BaseVisitor.prototype.visitExportMember = function (node) {
        this.visit(node.localName);
        this.visit(node.exportedName);
    };
    BaseVisitor.prototype.visitExportStatement = function (node) {
        if (node.path) {
            this.visit(node.path);
        }
        this.visit(node.members);
    };
    BaseVisitor.prototype.visitExportDefaultStatement = function (node) {
        this.visit(node.declaration);
    };
    BaseVisitor.prototype.visitExpressionStatement = function (node) {
        this.visit(node.expression);
    };
    BaseVisitor.prototype.visitFieldDeclaration = function (node) {
        this.visit(node.name);
        if (node.type) {
            this.visit(node.type);
        }
        if (node.initializer) {
            this.visit(node.initializer);
        }
        this.visit(node.decorators);
    };
    BaseVisitor.prototype.visitForStatement = function (node) {
        if (node.initializer)
            this.visit(node.initializer);
        if (node.condition)
            this.visit(node.condition);
        if (node.incrementor)
            this.visit(node.incrementor);
        this.visit(node.statement);
    };
    BaseVisitor.prototype.visitFunctionDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.signature);
        this.depth++;
        if (node.body)
            this.visit(node.body);
        this.depth--;
    };
    BaseVisitor.prototype.visitFunctionCommon = function (node) {
        // this.visit(node.name)
    };
    BaseVisitor.prototype.visitIfStatement = function (node) {
        this.visit(node.condition);
        this.visit(node.ifTrue);
        if (node.ifFalse)
            this.visit(node.ifFalse);
    };
    BaseVisitor.prototype.visitImportDeclaration = function (node) {
        this.visit(node.foreignName);
        this.visit(node.name);
        this.visit(node.decorators);
    };
    BaseVisitor.prototype.visitImportStatement = function (node) {
        if (node.namespaceName)
            this.visit(node.namespaceName);
        this.visit(node.declarations);
    };
    BaseVisitor.prototype.visitIndexSignatureDeclaration = function (node) {
        // this.visit(node.name);
        // this.visit(node.keyType);
        // this.visit(node.valueType);
    };
    BaseVisitor.prototype.visitInterfaceDeclaration = function (node, isDefault) {
        this.visit(node.name);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.implementsTypes);
        if (node.extendsType)
            this.visit(node.extendsType);
        this.depth++;
        this.visit(node.members);
        this.depth--;
    };
    BaseVisitor.prototype.visitMethodDeclaration = function (node) {
        this.visit(node.name);
        if (node.isGeneric) {
            this.visit(node.typeParameters);
        }
        this.visit(node.signature);
        this.visit(node.decorators);
        this.depth++;
        if (node.body)
            this.visit(node.body);
        this.depth--;
    };
    BaseVisitor.prototype.visitNamespaceDeclaration = function (node, isDefault) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.members);
    };
    BaseVisitor.prototype.visitReturnStatement = function (node) {
        if (node.value)
            this.visit(node.value);
    };
    BaseVisitor.prototype.visitSwitchCase = function (node) {
        if (node.label)
            this.visit(node.label);
        this.visit(node.statements);
    };
    BaseVisitor.prototype.visitSwitchStatement = function (node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.cases);
        this.depth--;
    };
    BaseVisitor.prototype.visitThrowStatement = function (node) {
        this.visit(node.value);
    };
    BaseVisitor.prototype.visitTryStatement = function (node) {
        this.visit(node.statements);
        if (node.catchVariable)
            this.visit(node.catchVariable);
        this.visit(node.catchStatements);
        this.visit(node.finallyStatements);
    };
    BaseVisitor.prototype.visitTypeDeclaration = function (node) {
        this.visit(node.name);
        this.visit(node.decorators);
        this.visit(node.type);
        this.visit(node.typeParameters);
    };
    BaseVisitor.prototype.visitVariableDeclaration = function (node) {
        this.visit(node.name);
        if (node.type)
            this.visit(node.type);
        if (node.initializer)
            this.visit(node.initializer);
    };
    BaseVisitor.prototype.visitVariableStatement = function (node) {
        this.visit(node.decorators);
        this.visit(node.declarations);
    };
    BaseVisitor.prototype.visitWhileStatement = function (node) {
        this.visit(node.condition);
        this.depth++;
        this.visit(node.statement);
        this.depth--;
    };
    BaseVisitor.prototype.visitVoidStatement = function (node) { };
    BaseVisitor.prototype.visitComment = function (node) { };
    BaseVisitor.prototype.visitDecoratorNode = function (node) {
        this.visit(node.name);
        this.visit(node.arguments);
    };
    BaseVisitor.prototype.visitParameter = function (node) {
        this.visit(node.name);
        if (node.implicitFieldDeclaration) {
            this.visit(node.implicitFieldDeclaration);
        }
        if (node.initializer)
            this.visit(node.initializer);
        this.visit(node.type);
    };
    return BaseVisitor;
}(visitor_1.AbstractVisitor));
exports.BaseVisitor = BaseVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBNEVnRDtBQUVoRCxxQ0FBb0Q7QUFFcEQ7SUFBaUMsK0JBQXFCO0lBR3BELHFCQUFZLE1BQXFCO1FBQWpDLFlBQ0Usa0JBQU0sTUFBTSxDQUFDLFNBQ2Q7UUFKRCxXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQUlsQixDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLElBQVU7UUFDZixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxjQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQVMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07YUFDUDtZQUVELFFBQVE7WUFFUixLQUFLLGNBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFnQixJQUFJLENBQUMsQ0FBQztnQkFDN0MsTUFBTTthQUNQO1lBQ0QsS0FBSyxjQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBbUIsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELE1BQU07YUFDUDtZQUNELEtBQUssY0FBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFXLElBQUksQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsS0FBSyxjQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBb0IsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELE1BQU07YUFDUDtZQUVELGNBQWM7WUFFZCxLQUFLLGNBQVEsQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSyxjQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssY0FBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixL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QUM3QixDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLElBQW1CO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVILGtCQUFDO0FBQUQsQ0FBQyxBQTVvQkQsQ0FBaUMseUJBQWUsR0E0b0IvQztBQTVvQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBTb3VyY2UsXG4gIFR5cGVOb2RlLFxuICBUeXBlTmFtZSxcbiAgTmFtZWRUeXBlTm9kZSxcbiAgRnVuY3Rpb25UeXBlTm9kZSxcbiAgVHlwZVBhcmFtZXRlck5vZGUsXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxuICBBcnJheUxpdGVyYWxFeHByZXNzaW9uLFxuICBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbixcbiAgQXNzZXJ0aW9uRXhwcmVzc2lvbixcbiAgQmluYXJ5RXhwcmVzc2lvbixcbiAgQ2FsbEV4cHJlc3Npb24sXG4gIENsYXNzRXhwcmVzc2lvbixcbiAgQ29tbWFFeHByZXNzaW9uLFxuICBFbGVtZW50QWNjZXNzRXhwcmVzc2lvbixcbiAgRnVuY3Rpb25FeHByZXNzaW9uLFxuICBMaXRlcmFsRXhwcmVzc2lvbixcbiAgRmxvYXRMaXRlcmFsRXhwcmVzc2lvbixcbiAgSW5zdGFuY2VPZkV4cHJlc3Npb24sXG4gIEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbixcbiAgU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uLFxuICBOZXdFeHByZXNzaW9uLFxuICBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbixcbiAgUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uLFxuICBUZXJuYXJ5RXhwcmVzc2lvbixcbiAgVW5hcnlFeHByZXNzaW9uLFxuICBVbmFyeVBvc3RmaXhFeHByZXNzaW9uLFxuICBVbmFyeVByZWZpeEV4cHJlc3Npb24sXG4gIFN1cGVyRXhwcmVzc2lvbixcbiAgRmFsc2VFeHByZXNzaW9uLFxuICBUcnVlRXhwcmVzc2lvbixcbiAgVGhpc0V4cHJlc3Npb24sXG4gIE51bGxFeHByZXNzaW9uLFxuICBDb25zdHJ1Y3RvckV4cHJlc3Npb24sXG4gIFN0YXRlbWVudCxcbiAgQmxvY2tTdGF0ZW1lbnQsXG4gIEJyZWFrU3RhdGVtZW50LFxuICBDb250aW51ZVN0YXRlbWVudCxcbiAgQ2xhc3NEZWNsYXJhdGlvbixcbiAgRG9TdGF0ZW1lbnQsXG4gIEVtcHR5U3RhdGVtZW50LFxuICBFbnVtRGVjbGFyYXRpb24sXG4gIEVudW1WYWx1ZURlY2xhcmF0aW9uLFxuICBFeHBvcnRJbXBvcnRTdGF0ZW1lbnQsXG4gIEV4cG9ydE1lbWJlcixcbiAgRXhwb3J0U3RhdGVtZW50LFxuICBFeHBvcnREZWZhdWx0U3RhdGVtZW50LFxuICBFeHByZXNzaW9uU3RhdGVtZW50LFxuICBGaWVsZERlY2xhcmF0aW9uLFxuICBGb3JTdGF0ZW1lbnQsXG4gIEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gIElmU3RhdGVtZW50LFxuICBJbXBvcnREZWNsYXJhdGlvbixcbiAgSW1wb3J0U3RhdGVtZW50LFxuICBJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uLFxuICBJbnRlcmZhY2VEZWNsYXJhdGlvbixcbiAgTWV0aG9kRGVjbGFyYXRpb24sXG4gIE5hbWVzcGFjZURlY2xhcmF0aW9uLFxuICBSZXR1cm5TdGF0ZW1lbnQsXG4gIFN3aXRjaENhc2UsXG4gIFN3aXRjaFN0YXRlbWVudCxcbiAgVGhyb3dTdGF0ZW1lbnQsXG4gIFRyeVN0YXRlbWVudCxcbiAgVHlwZURlY2xhcmF0aW9uLFxuICBWYXJpYWJsZURlY2xhcmF0aW9uLFxuICBWYXJpYWJsZVN0YXRlbWVudCxcbiAgV2hpbGVTdGF0ZW1lbnQsXG4gIFZvaWRTdGF0ZW1lbnQsXG4gIENvbW1lbnROb2RlLFxuICBEZWNvcmF0b3JOb2RlLFxuICBQYXJhbWV0ZXJOb2RlLFxuICBOb2RlLFxuICBOb2RlS2luZCxcbiAgRXhwcmVzc2lvblxufSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3NyYy9hc3RcIjtcblxuaW1wb3J0IHsgQWJzdHJhY3RWaXNpdG9yLCBXcml0ZXIgfSBmcm9tIFwiLi92aXNpdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlVmlzaXRvciBleHRlbmRzIEFic3RyYWN0VmlzaXRvcjxOb2RlPiB7XG4gIGRlcHRoOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHdyaXRlcj86IFdyaXRlcjxOb2RlPikge1xuICAgIHN1cGVyKHdyaXRlcik7XG4gIH1cblxuICBfdmlzaXQobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLlNPVVJDRToge1xuICAgICAgICB0aGlzLnZpc2l0U291cmNlKDxTb3VyY2U+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyB0eXBlc1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVEVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0TmFtZWRUeXBlTm9kZSg8TmFtZWRUeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OVFlQRToge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25UeXBlTm9kZSg8RnVuY3Rpb25UeXBlTm9kZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVOQU1FOiB7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTmFtZSg8VHlwZU5hbWU+bm9kZSk7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVQQVJBTUVURVI6IHtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIoPFR5cGVQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZXhwcmVzc2lvbnNcblxuICAgICAgY2FzZSBOb2RlS2luZC5GQUxTRTpcbiAgICAgIGNhc2UgTm9kZUtpbmQuTlVMTDpcbiAgICAgIGNhc2UgTm9kZUtpbmQuU1VQRVI6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRISVM6XG4gICAgICBjYXNlIE5vZGVLaW5kLlRSVUU6XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlNUUlVDVE9SOlxuICAgICAgY2FzZSBOb2RlS2luZC5JREVOVElGSUVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbig8SWRlbnRpZmllckV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5BU1NFUlRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEFzc2VydGlvbkV4cHJlc3Npb24oPEFzc2VydGlvbkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5CSU5BUlk6IHtcbiAgICAgICAgdGhpcy52aXNpdEJpbmFyeUV4cHJlc3Npb24oPEJpbmFyeUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DQUxMOiB7XG4gICAgICAgIHRoaXMudmlzaXRDYWxsRXhwcmVzc2lvbig8Q2FsbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DTEFTUzoge1xuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NFeHByZXNzaW9uKDxDbGFzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT01NQToge1xuICAgICAgICB0aGlzLnZpc2l0Q29tbWFFeHByZXNzaW9uKDxDb21tYUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTEVNRU5UQUNDRVNTOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbGVtZW50QWNjZXNzRXhwcmVzc2lvbig8RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKDxGdW5jdGlvbkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlNUQU5DRU9GOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnN0YW5jZU9mRXhwcmVzc2lvbig8SW5zdGFuY2VPZkV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5MSVRFUkFMOiB7XG4gICAgICAgIHRoaXMudmlzaXRMaXRlcmFsRXhwcmVzc2lvbig8TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5ORVc6IHtcbiAgICAgICAgdGhpcy52aXNpdE5ld0V4cHJlc3Npb24oPE5ld0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QQVJFTlRIRVNJWkVEOiB7XG4gICAgICAgIHRoaXMudmlzaXRQYXJlbnRoZXNpemVkRXhwcmVzc2lvbig8UGFyZW50aGVzaXplZEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5QUk9QRVJUWUFDQ0VTUzoge1xuICAgICAgICB0aGlzLnZpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKDxQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5URVJOQVJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRUZXJuYXJ5RXhwcmVzc2lvbig8VGVybmFyeUV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBPU1RGSVg6IHtcbiAgICAgICAgdGhpcy52aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24oPFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5VTkFSWVBSRUZJWDoge1xuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKDxVbmFyeVByZWZpeEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBzdGF0ZW1lbnRzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuQkxPQ0s6IHtcbiAgICAgICAgdGhpcy52aXNpdEJsb2NrU3RhdGVtZW50KDxCbG9ja1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkJSRUFLOiB7XG4gICAgICAgIHRoaXMudmlzaXRCcmVha1N0YXRlbWVudCg8QnJlYWtTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5DT05USU5VRToge1xuICAgICAgICB0aGlzLnZpc2l0Q29udGludWVTdGF0ZW1lbnQoPENvbnRpbnVlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRE86IHtcbiAgICAgICAgdGhpcy52aXNpdERvU3RhdGVtZW50KDxEb1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVNUFRZOiB7XG4gICAgICAgIHRoaXMudmlzaXRFbXB0eVN0YXRlbWVudCg8RW1wdHlTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydFN0YXRlbWVudCg8RXhwb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUREVGQVVMVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0RGVmYXVsdFN0YXRlbWVudCg8RXhwb3J0RGVmYXVsdFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVElNUE9SVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KDxFeHBvcnRJbXBvcnRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBSRVNTSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KDxFeHByZXNzaW9uU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRk9SOiB7XG4gICAgICAgIHRoaXMudmlzaXRGb3JTdGF0ZW1lbnQoPEZvclN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklGOiB7XG4gICAgICAgIHRoaXMudmlzaXRJZlN0YXRlbWVudCg8SWZTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTVBPUlQ6IHtcbiAgICAgICAgdGhpcy52aXNpdEltcG9ydFN0YXRlbWVudCg8SW1wb3J0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUkVUVVJOOiB7XG4gICAgICAgIHRoaXMudmlzaXRSZXR1cm5TdGF0ZW1lbnQoPFJldHVyblN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlNXSVRDSDoge1xuICAgICAgICB0aGlzLnZpc2l0U3dpdGNoU3RhdGVtZW50KDxTd2l0Y2hTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5USFJPVzoge1xuICAgICAgICB0aGlzLnZpc2l0VGhyb3dTdGF0ZW1lbnQoPFRocm93U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFJZOiB7XG4gICAgICAgIHRoaXMudmlzaXRUcnlTdGF0ZW1lbnQoPFRyeVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlZBUklBQkxFOiB7XG4gICAgICAgIHRoaXMudmlzaXRWYXJpYWJsZVN0YXRlbWVudCg8VmFyaWFibGVTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5XSElMRToge1xuICAgICAgICB0aGlzLnZpc2l0V2hpbGVTdGF0ZW1lbnQoPFdoaWxlU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gZGVjbGFyYXRpb24gc3RhdGVtZW50c1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkNMQVNTREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdENsYXNzRGVjbGFyYXRpb24oPENsYXNzRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEVudW1EZWNsYXJhdGlvbig8RW51bURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU5VTVZBTFVFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKDxFbnVtVmFsdWVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZpZWxkRGVjbGFyYXRpb24oPEZpZWxkRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTkRFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKDxGdW5jdGlvbkRlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU1QT1JUREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEltcG9ydERlY2xhcmF0aW9uKDxJbXBvcnREZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOREVYU0lHTkFUVVJFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24oPEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlRFUkZBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oPEludGVyZmFjZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTUVUSE9EREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE1ldGhvZERlY2xhcmF0aW9uKDxNZXRob2REZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVTUEFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbig8TmFtZXNwYWNlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UWVBFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVEZWNsYXJhdGlvbig8VHlwZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVkFSSUFCTEVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbig8VmFyaWFibGVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuREVDT1JBVE9SOiB7XG4gICAgICAgIHRoaXMudmlzaXREZWNvcmF0b3JOb2RlKDxEZWNvcmF0b3JOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUTUVNQkVSOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRNZW1iZXIoPEV4cG9ydE1lbWJlcj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkFNRVRFUjoge1xuICAgICAgICB0aGlzLnZpc2l0UGFyYW1ldGVyKDxQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuU1dJVENIQ0FTRToge1xuICAgICAgICB0aGlzLnZpc2l0U3dpdGNoQ2FzZSg8U3dpdGNoQ2FzZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiBhc3NlcnQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0U291cmNlKG5vZGU6IFNvdXJjZSk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc3RtdCBvZiBub2RlLnN0YXRlbWVudHMpIHtcbiAgICAgIHRoaXMuZGVwdGgrKztcbiAgICAgIHRoaXMudmlzaXQoc3RtdCk7XG4gICAgICB0aGlzLmRlcHRoLS07XG4gICAgfVxuICB9XG5cbiAgdmlzaXRUeXBlTm9kZShub2RlOiBUeXBlTm9kZSk6IHZvaWQge31cblxuICB2aXNpdFR5cGVOYW1lKG5vZGU6IFR5cGVOYW1lKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmlkZW50aWZpZXIpO1xuICAgIGlmIChub2RlLm5leHQpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXROYW1lZFR5cGVOb2RlKG5vZGU6IE5hbWVkVHlwZU5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVBcmd1bWVudHMpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvblR5cGVOb2RlKG5vZGU6IEZ1bmN0aW9uVHlwZU5vZGUpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBwYXJhbSBvZiBub2RlLnBhcmFtZXRlcnMpIHtcbiAgICAgIHRoaXMudmlzaXQocGFyYW0pO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUucmV0dXJuVHlwZSk7XG4gIH1cblxuICB2aXNpdFR5cGVQYXJhbWV0ZXIobm9kZTogVHlwZVBhcmFtZXRlck5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgaWYgKG5vZGUuZXh0ZW5kc1R5cGUpIHRoaXMudmlzaXQobm9kZS5leHRlbmRzVHlwZSk7XG4gICAgaWYgKG5vZGUuZGVmYXVsdFR5cGUpIHRoaXMudmlzaXQobm9kZS5kZWZhdWx0VHlwZSk7XG4gIH1cblxuICB2aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGU6IElkZW50aWZpZXJFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0QXJyYXlMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBBcnJheUxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgbm9kZS5lbGVtZW50RXhwcmVzc2lvbnMubWFwKChlOiBFeHByZXNzaW9uKTogdm9pZCA9PiB7XG4gICAgICBpZiAoZSkgdGhpcy52aXNpdChlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZpc2l0T2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24obm9kZTogT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBpZiAobm9kZS52YWx1ZXMgJiYgbm9kZS5uYW1lcykge1xuICAgICAgYXNzZXJ0KG5vZGUudmFsdWVzLmxlbmd0aCA9PSBub2RlLm5hbWVzLmxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMudmlzaXQobm9kZS5uYW1lc1tpXSk7XG4gICAgICAgIHRoaXMudmlzaXQobm9kZS52YWx1ZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0QXNzZXJ0aW9uRXhwcmVzc2lvbihub2RlOiBBc3NlcnRpb25FeHByZXNzaW9uKTogdm9pZCB7XG4gICAgaWYgKG5vZGUudG9UeXBlKSB0aGlzLnZpc2l0KG5vZGUudG9UeXBlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdEJpbmFyeUV4cHJlc3Npb24obm9kZTogQmluYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5sZWZ0KTtcbiAgICB0aGlzLnZpc2l0KG5vZGUucmlnaHQpO1xuICB9XG5cbiAgdmlzaXRDYWxsRXhwcmVzc2lvbihub2RlOiBDYWxsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cyk7XG4gICAgdGhpcy52aXNpdChub2RlLmFyZ3VtZW50cyk7XG4gIH1cblxuICB2aXNpdENsYXNzRXhwcmVzc2lvbihub2RlOiBDbGFzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjbGFyYXRpb24pO1xuICB9XG5cbiAgdmlzaXRDb21tYUV4cHJlc3Npb24obm9kZTogQ29tbWFFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb25zKTtcbiAgfVxuXG4gIHZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24obm9kZTogRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZWxlbWVudEV4cHJlc3Npb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25FeHByZXNzaW9uKG5vZGU6IEZ1bmN0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgLy8gbm9kZS5cbiAgfVxuXG4gIHZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBGbG9hdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24obm9kZTogSW5zdGFuY2VPZkV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gICAgdGhpcy52aXNpdChub2RlLmlzVHlwZSk7XG4gIH1cblxuICB2aXNpdEludGVnZXJMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsKHN0cjogc3RyaW5nLCBzaW5nbGVRdW90ZWQ/OiBib29sZWFuKTogdm9pZCB7fVxuXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRSZWdleHBMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdE5ld0V4cHJlc3Npb24obm9kZTogTmV3RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZUFyZ3VtZW50cyk7XG4gICAgdGhpcy52aXNpdChub2RlLmFyZ3VtZW50cyk7XG4gIH1cblxuICB2aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKG5vZGU6IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24obm9kZTogUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnByb3BlcnR5KTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdFRlcm5hcnlFeHByZXNzaW9uKG5vZGU6IFRlcm5hcnlFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy52aXNpdChub2RlLmlmVGhlbik7XG4gICAgdGhpcy52aXNpdChub2RlLmlmRWxzZSk7XG4gIH1cblxuICB2aXNpdFVuYXJ5RXhwcmVzc2lvbihub2RlOiBVbmFyeUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUub3BlcmFuZCk7XG4gIH1cblxuICB2aXNpdFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24obm9kZTogVW5hcnlQb3N0Zml4RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKTtcbiAgfVxuXG4gIHZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKG5vZGU6IFVuYXJ5UHJlZml4RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5vcGVyYW5kKTtcbiAgfVxuXG4gIHZpc2l0U3VwZXJFeHByZXNzaW9uKG5vZGU6IFN1cGVyRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdEZhbHNlRXhwcmVzc2lvbihub2RlOiBGYWxzZUV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRUcnVlRXhwcmVzc2lvbihub2RlOiBUcnVlRXhwcmVzc2lvbik6IHZvaWQge31cblxuICB2aXNpdFRoaXNFeHByZXNzaW9uKG5vZGU6IFRoaXNFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0TnVsbEV4cGVyc3Npb24obm9kZTogTnVsbEV4cHJlc3Npb24pOiB2b2lkIHt9XG5cbiAgdmlzaXRDb25zdHJ1Y3RvckV4cHJlc3Npb24obm9kZTogQ29uc3RydWN0b3JFeHByZXNzaW9uKTogdm9pZCB7fVxuXG4gIHZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShzdGF0ZW1lbnQ6IFN0YXRlbWVudCk6IHZvaWQge31cblxuICB2aXNpdEJsb2NrU3RhdGVtZW50KG5vZGU6IEJsb2NrU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdEJyZWFrU3RhdGVtZW50KG5vZGU6IEJyZWFrU3RhdGVtZW50KTogdm9pZCB7XG4gICAgaWYgKG5vZGUubGFiZWwpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5sYWJlbCk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRDb250aW51ZVN0YXRlbWVudChub2RlOiBDb250aW51ZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLmxhYmVsKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUubGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Q2xhc3NEZWNsYXJhdGlvbihub2RlOiBDbGFzc0RlY2xhcmF0aW9uLCBpc0RlZmF1bHQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgYXNzZXJ0KFxuICAgICAgbm9kZS5pc0dlbmVyaWMgPyBub2RlLnR5cGVQYXJhbWV0ZXJzICE9IG51bGwgOiBub2RlLnR5cGVQYXJhbWV0ZXJzID09IG51bGxcbiAgICApO1xuICAgIGlmIChub2RlLmlzR2VuZXJpYykge1xuICAgICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuZXh0ZW5kc1R5cGUpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5leHRlbmRzVHlwZSk7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5pbXBsZW1lbnRzVHlwZXMpO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdERvU3RhdGVtZW50KG5vZGU6IERvU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCk7XG4gIH1cblxuICB2aXNpdEVtcHR5U3RhdGVtZW50KG5vZGU6IEVtcHR5U3RhdGVtZW50KTogdm9pZCB7fVxuXG4gIHZpc2l0RW51bURlY2xhcmF0aW9uKG5vZGU6IEVudW1EZWNsYXJhdGlvbiwgaXNEZWZhdWx0PzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLnZhbHVlcyk7XG4gIH1cblxuICB2aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGU6IEVudW1WYWx1ZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLmluaXRpYWxpemVyKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydEltcG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZXh0ZXJuYWxOYW1lKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0TWVtYmVyKG5vZGU6IEV4cG9ydE1lbWJlcik6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5sb2NhbE5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5leHBvcnRlZE5hbWUpO1xuICB9XG5cbiAgdmlzaXRFeHBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgaWYgKG5vZGUucGF0aCkge1xuICAgICAgdGhpcy52aXNpdChub2RlLnBhdGgpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUubWVtYmVycyk7XG4gIH1cblxuICB2aXNpdEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQobm9kZTogRXhwb3J0RGVmYXVsdFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZTogRXhwcmVzc2lvblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5leHByZXNzaW9uKTtcbiAgfVxuXG4gIHZpc2l0RmllbGREZWNsYXJhdGlvbihub2RlOiBGaWVsZERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLnR5cGUpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS50eXBlKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gICAgfVxuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgfVxuXG4gIHZpc2l0Rm9yU3RhdGVtZW50KG5vZGU6IEZvclN0YXRlbWVudCk6IHZvaWQge1xuICAgIGlmIChub2RlLmluaXRpYWxpemVyKSB0aGlzLnZpc2l0KG5vZGUuaW5pdGlhbGl6ZXIpO1xuICAgIGlmIChub2RlLmNvbmRpdGlvbikgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgaWYgKG5vZGUuaW5jcmVtZW50b3IpIHRoaXMudmlzaXQobm9kZS5pbmNyZW1lbnRvcik7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudCk7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24oXG4gICAgbm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbixcbiAgICBpc0RlZmF1bHQ/OiBib29sZWFuXG4gICk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgaWYgKG5vZGUuaXNHZW5lcmljKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUudHlwZVBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0KG5vZGUuc2lnbmF0dXJlKTtcbiAgICB0aGlzLmRlcHRoKys7XG4gICAgaWYgKG5vZGUuYm9keSkgdGhpcy52aXNpdChub2RlLmJvZHkpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25Db21tb24obm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIC8vIHRoaXMudmlzaXQobm9kZS5uYW1lKVxuICB9XG5cbiAgdmlzaXRJZlN0YXRlbWVudChub2RlOiBJZlN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMudmlzaXQobm9kZS5pZlRydWUpO1xuICAgIGlmIChub2RlLmlmRmFsc2UpIHRoaXMudmlzaXQobm9kZS5pZkZhbHNlKTtcbiAgfVxuXG4gIHZpc2l0SW1wb3J0RGVjbGFyYXRpb24obm9kZTogSW1wb3J0RGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZm9yZWlnbk5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gIH1cblxuICB2aXNpdEltcG9ydFN0YXRlbWVudChub2RlOiBJbXBvcnRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAobm9kZS5uYW1lc3BhY2VOYW1lKSB0aGlzLnZpc2l0KG5vZGUubmFtZXNwYWNlTmFtZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICB2aXNpdEluZGV4U2lnbmF0dXJlRGVjbGFyYXRpb24obm9kZTogSW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIC8vIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICAvLyB0aGlzLnZpc2l0KG5vZGUua2V5VHlwZSk7XG4gICAgLy8gdGhpcy52aXNpdChub2RlLnZhbHVlVHlwZSk7XG4gIH1cblxuICB2aXNpdEludGVyZmFjZURlY2xhcmF0aW9uKFxuICAgIG5vZGU6IEludGVyZmFjZURlY2xhcmF0aW9uLFxuICAgIGlzRGVmYXVsdD86IGJvb2xlYW5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLmlzR2VuZXJpYykge1xuICAgICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLmltcGxlbWVudHNUeXBlcyk7XG4gICAgaWYgKG5vZGUuZXh0ZW5kc1R5cGUpIHRoaXMudmlzaXQobm9kZS5leHRlbmRzVHlwZSk7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5tZW1iZXJzKTtcbiAgICB0aGlzLmRlcHRoLS07XG4gIH1cblxuICB2aXNpdE1ldGhvZERlY2xhcmF0aW9uKG5vZGU6IE1ldGhvZERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLmlzR2VuZXJpYykge1xuICAgICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdChub2RlLnNpZ25hdHVyZSk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY29yYXRvcnMpO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICBpZiAobm9kZS5ib2R5KSB0aGlzLnZpc2l0KG5vZGUuYm9keSk7XG4gICAgdGhpcy5kZXB0aC0tO1xuICB9XG5cbiAgdmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbihcbiAgICBub2RlOiBOYW1lc3BhY2VEZWNsYXJhdGlvbixcbiAgICBpc0RlZmF1bHQ/OiBib29sZWFuXG4gICk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLm1lbWJlcnMpO1xuICB9XG5cbiAgdmlzaXRSZXR1cm5TdGF0ZW1lbnQobm9kZTogUmV0dXJuU3RhdGVtZW50KTogdm9pZCB7XG4gICAgaWYgKG5vZGUudmFsdWUpIHRoaXMudmlzaXQobm9kZS52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFN3aXRjaENhc2Uobm9kZTogU3dpdGNoQ2FzZSk6IHZvaWQge1xuICAgIGlmIChub2RlLmxhYmVsKSB0aGlzLnZpc2l0KG5vZGUubGFiZWwpO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0U3dpdGNoU3RhdGVtZW50KG5vZGU6IFN3aXRjaFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5jb25kaXRpb24pO1xuICAgIHRoaXMuZGVwdGgrKztcbiAgICB0aGlzLnZpc2l0KG5vZGUuY2FzZXMpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0VGhyb3dTdGF0ZW1lbnQobm9kZTogVGhyb3dTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUudmFsdWUpO1xuICB9XG5cbiAgdmlzaXRUcnlTdGF0ZW1lbnQobm9kZTogVHJ5U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLnN0YXRlbWVudHMpO1xuICAgIGlmIChub2RlLmNhdGNoVmFyaWFibGUpIHRoaXMudmlzaXQobm9kZS5jYXRjaFZhcmlhYmxlKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuY2F0Y2hTdGF0ZW1lbnRzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZmluYWxseVN0YXRlbWVudHMpO1xuICB9XG5cbiAgdmlzaXRUeXBlRGVjbGFyYXRpb24obm9kZTogVHlwZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIHRoaXMudmlzaXQobm9kZS5kZWNvcmF0b3JzKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUudHlwZSk7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGVQYXJhbWV0ZXJzKTtcbiAgfVxuXG4gIHZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlOiBWYXJpYWJsZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLm5hbWUpO1xuICAgIGlmIChub2RlLnR5cGUpIHRoaXMudmlzaXQobm9kZS50eXBlKTtcbiAgICBpZiAobm9kZS5pbml0aWFsaXplcikgdGhpcy52aXNpdChub2RlLmluaXRpYWxpemVyKTtcbiAgfVxuXG4gIHZpc2l0VmFyaWFibGVTdGF0ZW1lbnQobm9kZTogVmFyaWFibGVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUuZGVjb3JhdG9ycyk7XG4gICAgdGhpcy52aXNpdChub2RlLmRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICB2aXNpdFdoaWxlU3RhdGVtZW50KG5vZGU6IFdoaWxlU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdChub2RlLmNvbmRpdGlvbik7XG4gICAgdGhpcy5kZXB0aCsrO1xuICAgIHRoaXMudmlzaXQobm9kZS5zdGF0ZW1lbnQpO1xuICAgIHRoaXMuZGVwdGgtLTtcbiAgfVxuXG4gIHZpc2l0Vm9pZFN0YXRlbWVudChub2RlOiBWb2lkU3RhdGVtZW50KTogdm9pZCB7fVxuXG4gIHZpc2l0Q29tbWVudChub2RlOiBDb21tZW50Tm9kZSk6IHZvaWQge31cblxuICB2aXNpdERlY29yYXRvck5vZGUobm9kZTogRGVjb3JhdG9yTm9kZSk6IHZvaWQge1xuICAgIHRoaXMudmlzaXQobm9kZS5uYW1lKTtcbiAgICB0aGlzLnZpc2l0KG5vZGUuYXJndW1lbnRzKTtcbiAgfVxuXG4gIHZpc2l0UGFyYW1ldGVyKG5vZGU6IFBhcmFtZXRlck5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0KG5vZGUubmFtZSk7XG4gICAgaWYgKG5vZGUuaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uKSB7XG4gICAgICB0aGlzLnZpc2l0KG5vZGUuaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuaW5pdGlhbGl6ZXIpIHRoaXMudmlzaXQobm9kZS5pbml0aWFsaXplcik7XG4gICAgdGhpcy52aXNpdChub2RlLnR5cGUpO1xuICB9XG5cbn1cbiJdfQ==

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable: no-void-expression as-types as-variables
var ast_1 = __webpack_require__(/*! ../node_modules/assemblyscript/src/ast */ "./node_modules/assemblyscript/src/ast.ts");
var common_1 = __webpack_require__(/*! ../node_modules/assemblyscript/src/common */ "./node_modules/assemblyscript/src/common.ts");
var sourceBuilder_1 = __webpack_require__(/*! ./sourceBuilder */ "./src/sourceBuilder.ts");
var base_1 = __webpack_require__(/*! ./base */ "./src/base.ts");
var preamble_1 = __webpack_require__(/*! ./preamble */ "./src/preamble.ts");
function returnsVoid(node) {
    return toString(node.signature.returnType) === "void";
}
function numOfParameters(node) {
    return node.signature.parameters.length;
}
function isComment(stmt) {
    return stmt.kind == ast_1.NodeKind.COMMENT;
}
function hasNearDecorator(stmt) {
    return stmt.text.includes("@nearfile") || isEntry(stmt);
}
function toString(node) {
    return sourceBuilder_1.ASTBuilder.build(node);
}
function isEntry(source) {
    var _source = ((source.kind == ast_1.NodeKind.SOURCE) ? source : source.range.source);
    return _source.sourceKind == ast_1.SourceKind.USER_ENTRY;
}
function isArrayType(type) {
    return !!((type.kind == ast_1.NodeKind.NAMEDTYPE) &&
        toString(type).startsWith("Array") &&
        type.typeArguments &&
        type.typeArguments.length > 0);
}
function isClass(type) {
    return type.kind == ast_1.NodeKind.CLASSDECLARATION;
}
function isField(mem) {
    return mem.kind == ast_1.NodeKind.FIELDDECLARATION;
}
function isReference(type) {
    var simpleTypes = [
        "i32",
        "u32",
        "bool",
        "i64",
        "u64",
        "boolean",
    ];
    return !simpleTypes.includes(toString(type));
}
// TODO: Extract this into separate module, preferrable pluggable
var NEARBindingsBuilder = /** @class */ (function (_super) {
    __extends(NEARBindingsBuilder, _super);
    function NEARBindingsBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typeMapping = {
            i32: "Integer",
            u32: "Integer",
            i64: "String",
            u64: "String",
            string: "String",
            bool: "Boolean",
            Uint8Array: "String",
        };
        _this.nonNullableTypes = ["i32", "u32", "i64", "u64", "bool", "boolean"];
        _this.sb = [];
        _this.exportedClasses = new Map();
        _this.wrappedFuncs = new Set();
        return _this;
    }
    NEARBindingsBuilder.build = function (parser, source) {
        return (new NEARBindingsBuilder().build(source));
    };
    NEARBindingsBuilder.nearFiles = function (parser) {
        return parser.program.sources.filter(hasNearDecorator);
    };
    NEARBindingsBuilder.prototype.visitClassDeclaration = function (node) {
        if (this.exportedClasses.has(toString(node.name)))
            return;
        this.exportedClasses.set(toString(node.name), node);
    };
    NEARBindingsBuilder.prototype.visitFunctionDeclaration = function (node) {
        if (!isEntry(node)
            || this.wrappedFuncs.has(toString(node.name))
            || !node.is(common_1.CommonFlags.EXPORT)
            || (numOfParameters(node) == 0 && returnsVoid(node))) {
            _super.prototype.visitFunctionDeclaration.call(this, node);
            return;
        }
        // if (numOfParameters(node) > 0){
        //   this.generateArgsParser(node);
        // }
        this.generateWrapperFunction(node);
        // Change function to not be an export
        node.flags = node.flags ^ common_1.CommonFlags.EXPORT;
        this.wrappedFuncs.add(toString(node.name));
    };
    /*
    Create a wrapper function that will be export in the function's place.
    */
    NEARBindingsBuilder.prototype.generateWrapperFunction = function (func) {
        var signature = func.signature;
        var params = signature.parameters;
        var returnType = signature.returnType;
        var returnTypeName = toString(returnType).split("|").filter(function (name) { return name.trim() !== "null"; }).join("|");
        var hasNull = toString(returnType).includes("null");
        var name = func.name.symbol;
        this.sb.push("\n//@ts-ignore\nfunction __wrapper_" + name + "(): void {");
        if (params.length > 0) {
            this.sb.push("  // Reading input bytes.\n  input(0);\n  let json_len = register_len(0);\n  if (json_len == U32.MAX_VALUE) {\n    panic();\n  }\n  let json = new Uint8Array(json_len as u32);\n  read_register(0, <usize>json.buffer);\n  const obj: Obj = JSON.parse(json);");
        }
        if (toString(returnType) !== "void") {
            this.sb.push("  let result: " + toString(returnType) + " = " + name + "(");
        }
        else {
            this.sb.push("  " + name + "(");
        }
        if (params.length > 0) {
            this.sb[this.sb.length - 1] += (params
                .map(function (param) { return createDecodeStatement(param); })
                .join(", "));
        }
        this.sb[this.sb.length - 1] += ");";
        if (toString(returnType) !== "void") {
            this.sb.push("\n  let encoder = new JSONEncoder();\n  let val: Uint8Array;\n  if ((isString<" + returnTypeName + ">() || isNullable<" + returnTypeName + ">()) && result == null) {\n    encoder.setNull(null);\n    val = encoder.serialize();\n  } else {\n    val = encode<" + returnTypeName + ">(result" + (hasNull ? "!" : "") + ", null, encoder);\n  }\n  value_return(val.byteLength, <usize>val.buffer);");
        }
        this.sb.push("}\n\nexport { __wrapper_" + name + " as " + name + " }\n");
    };
    NEARBindingsBuilder.prototype.typeName = function (type) {
        if (!isClass(type)) {
            return sourceBuilder_1.ASTBuilder.build(type);
        }
        type = (type);
        var className = toString(type.name);
        if (type.isGeneric) {
            className += "<" + type.typeParameters.map(toString).join(", ") + ">";
        }
        return className;
    };
    NEARBindingsBuilder.prototype.build = function (source) {
        var _this = this;
        this.sb = [preamble_1.preamble];
        this.visit(source);
        var sourceText = source.statements.map(function (stmt) {
            var str = sourceBuilder_1.ASTBuilder.build(stmt);
            if (isClass(stmt)) {
                var _class = stmt;
                str = str.slice(0, str.lastIndexOf("}"));
                var fields = _class.members.filter(isField).map(function (field) { return field; });
                if (fields.some(function (field) { return field.type == null; })) {
                    throw new Error("All Fields must have explict type declaration.");
                }
                var className = _this.typeName(_class);
                str += "\n  static decode(json: Uint8Array): " + className + " {\n    let value = instantiate<" + className + ">(); // Allocate without constructor\n    return value.decode<Uint8Array>(json);\n  }\n\n  decode<V = Uint8Array>(buf: V): " + className + " {\n    let json: Obj;\n    if (buf instanceof Uint8Array) {\n      json = JSON.parse(buf);\n    }else {\n      assert(buf instanceof Obj, \"argument must be Uint8Array or Json Object\");\n      json = <Obj> buf;\n    }\n    return this._decode(json);\n  }\n\n  private _decode(obj: Obj): " + className + " {\n    " + createDecodeStatements(_class).join("\n    ") + "\n    return this;\n  }\n\n  _encode(name: string | null = \"\", _encoder: JSONEncoder | null = null): JSONEncoder {\n    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;\n    encoder.pushObject(name);\n    " + createEncodeStatements(_class).join("\n    ") + "\n    encoder.popObject();\n    return encoder;\n  }\n\n  encode(): Uint8Array {\n    return this._encode().serialize();\n  }\n\n  serialize(): Uint8Array {\n    return this.encode();\n  }\n\n  toJSON(): string {\n    return this._encode().toString();\n  }\n}";
            }
            return str;
        });
        return this.sb.concat(sourceText).join("\n");
    };
    return NEARBindingsBuilder;
}(base_1.BaseVisitor));
function createDecodeStatements(_class) {
    return _class.members.filter(isField).map(function (field) {
        var name = toString(field.name);
        return createDecodeStatement(field, "this." + name + " = obj.has(\"" + name + "\") ? ") + (": this." + name + ";");
    });
}
function createDecodeStatement(field, setterPrefix) {
    if (setterPrefix === void 0) { setterPrefix = ""; }
    var T = toString(field.type);
    var name = toString(field.name);
    return setterPrefix + "decode<" + T + ", Obj>(obj, \"" + name + "\")";
}
function createEncodeStatements(_class) {
    return _class.members.filter(isField).map(function (field) {
        var T = toString(field.type);
        var name = toString(field.name);
        return "encode<" + T + ", JSONEncoder>(this." + name + ", \"" + name + "\", encoder);";
    });
}
// TODO: Make work for non-simple generics e.g. field: Array<T>
function isGeneric(_class, field) {
    if (_class.typeParameters == null) {
        return false;
    }
    return _class.typeParameters.some(function (param) { return toString(param.name) == toString(field.type); });
}
function afterParse(parser, writeFile, baseDir) {
    var files = NEARBindingsBuilder.nearFiles(parser);
    files.forEach(function (source) {
        var writeOut = source.text.substr(0, source.text.indexOf("\n")).includes("out");
        // Remove from logs in parser
        parser.donelog.delete(source.internalPath);
        parser.seenlog.delete(source.internalPath);
        // Remove from programs sources
        parser.program.sources = parser.program.sources.filter(function (_source) { return _source !== source; });
        // Build new Source
        var sourceText = NEARBindingsBuilder.build(parser, source);
        if (writeOut) {
            writeFile("out/" + source.normalizedPath, sourceText, baseDir);
        }
        // Parses file and any new imports added to the source
        parser.parseFile(sourceText, (isEntry(source) ? "" : "./") + source.normalizedPath, isEntry(source));
    });
}
exports.afterParse = afterParse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTJEO0FBQzNELDhEQWNnRDtBQUNoRCxvRUFBd0U7QUFHeEUsaURBQTZDO0FBQzdDLCtCQUFxQztBQUNyQyx1Q0FBc0M7QUFFdEMsU0FBUyxXQUFXLENBQUMsSUFBeUI7SUFDNUMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxNQUFNLENBQUM7QUFDeEQsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLElBQXlCO0lBQ2hELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO0FBQzFDLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFlO0lBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxjQUFRLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLElBQVk7SUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLElBQVU7SUFDMUIsT0FBTywwQkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsTUFBcUI7SUFDcEMsSUFBSSxPQUFPLEdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksY0FBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEYsT0FBTyxPQUFPLENBQUMsVUFBVSxJQUFJLGdCQUFVLENBQUMsVUFBVSxDQUFDO0FBQ3JELENB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LEtBQUssQ0FBQyxDQUFDO1FBQ2hGLDZCQUE2QjtRQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLCtCQUErQjtRQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQ3BELFVBQUMsT0FBZSxJQUFLLE9BQUEsT0FBTyxLQUFLLE1BQU0sRUFBbEIsQ0FBa0IsQ0FDeEMsQ0FBQztRQUNGLG1CQUFtQjtRQUNuQixJQUFJLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNELElBQUksUUFBUSxFQUFFO1lBQ2IsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUMvRDtRQUNELHNEQUFzRDtRQUN0RCxNQUFNLENBQUMsU0FBUyxDQUNkLFVBQVUsRUFDVixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsY0FBYyxFQUNyRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQ2hCLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUVMLENBQUM7QUF4QkQsZ0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IG5vLXZvaWQtZXhwcmVzc2lvbiBhcy10eXBlcyBhcy12YXJpYWJsZXNcbmltcG9ydCB7XG4gIFNvdXJjZSxcbiAgTm9kZUtpbmQsXG4gIENsYXNzRGVjbGFyYXRpb24sXG4gIEZ1bmN0aW9uRGVjbGFyYXRpb24sXG4gIFR5cGVOb2RlLFxuICBGaWVsZERlY2xhcmF0aW9uLFxuICBTdGF0ZW1lbnQsXG4gIE5vZGUsXG4gIE5hbWVkVHlwZU5vZGUsXG4gIFNvdXJjZUtpbmQsXG4gIERlY2xhcmF0aW9uU3RhdGVtZW50LFxuICBUeXBlTmFtZSxcbiAgUGFyYW1ldGVyTm9kZVxufSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3NyYy9hc3RcIjtcbmltcG9ydCB7IENvbW1vbkZsYWdzIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9hc3NlbWJseXNjcmlwdC9zcmMvY29tbW9uXCI7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi9tb2NrVHlwZXNcIjtcblxuaW1wb3J0IHsgQVNUQnVpbGRlciB9IGZyb20gXCIuL3NvdXJjZUJ1aWxkZXJcIjtcbmltcG9ydCB7IEJhc2VWaXNpdG9yIH0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHsgcHJlYW1ibGUgfSBmcm9tIFwiLi9wcmVhbWJsZVwiO1xuXG5mdW5jdGlvbiByZXR1cm5zVm9pZChub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uKTogYm9vbGVhbiB7XG4gIHJldHVybiB0b1N0cmluZyhub2RlLnNpZ25hdHVyZS5yZXR1cm5UeXBlKSA9PT0gXCJ2b2lkXCI7XG59XG5cbmZ1bmN0aW9uIG51bU9mUGFyYW1ldGVycyhub2RlOiBGdW5jdGlvbkRlY2xhcmF0aW9uKTogbnVtYmVyIHtcbiAgcmV0dXJuIG5vZGUuc2lnbmF0dXJlLnBhcmFtZXRlcnMubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBpc0NvbW1lbnQoc3RtdDogU3RhdGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiBzdG10LmtpbmQgPT0gTm9kZUtpbmQuQ09NTUVOVDtcbn1cblxuZnVuY3Rpb24gaGFzTmVhckRlY29yYXRvcihzdG10OiBTb3VyY2UpOiBib29sZWFuIHtcbiAgcmV0dXJuIHN0bXQudGV4dC5pbmNsdWRlcyhcIkBuZWFyZmlsZVwiKSB8fCBpc0VudHJ5KHN0bXQpO1xufVxuXG5mdW5jdGlvbiB0b1N0cmluZyhub2RlOiBOb2RlKTogc3RyaW5nIHtcbiAgcmV0dXJuIEFTVEJ1aWxkZXIuYnVpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGlzRW50cnkoc291cmNlOiBTb3VyY2UgfCBOb2RlKTogYm9vbGVhbiB7XG4gIGxldCBfc291cmNlID0gPFNvdXJjZT4oKHNvdXJjZS5raW5kID09IE5vZGVLaW5kLlNPVVJDRSkgPyBzb3VyY2UgOiBzb3VyY2UucmFuZ2Uuc291cmNlKTtcbiAgcmV0dXJuIF9zb3VyY2Uuc291cmNlS2luZCA9PSBTb3VyY2VLaW5kLlVTRVJfRU5UUlk7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlUeXBlKHR5cGU6IFR5cGVOb2RlIHwgQ2xhc3NEZWNsYXJhdGlvbik6IGJvb2xlYW4ge1xuICByZXR1cm4gISEoXG4gICAgKHR5cGUua2luZCA9PSBOb2RlS2luZC5OQU1FRFRZUEUpICYmXG4gICAgdG9TdHJpbmcodHlwZSkuc3RhcnRzV2l0aChcIkFycmF5XCIpICYmXG4gICAgKDxOYW1lZFR5cGVOb2RlPnR5cGUpLnR5cGVBcmd1bWVudHMgJiZcbiAgICAoPE5hbWVkVHlwZU5vZGU+dHlwZSkudHlwZUFyZ3VtZW50cyEubGVuZ3RoID4gMFxuICApO1xufVxuXG5mdW5jdGlvbiBpc0NsYXNzKHR5cGU6IE5vZGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGUua2luZCA9PSBOb2RlS2luZC5DTEFTU0RFQ0xBUkFUSU9OO1xufVxuXG5mdW5jdGlvbiBpc0ZpZWxkKG1lbTogRGVjbGFyYXRpb25TdGF0ZW1lbnQpIHtcbiAgcmV0dXJuIG1lbS5raW5kID09IE5vZGVLaW5kLkZJRUxEREVDTEFSQVRJT047XG59XG5cbmZ1bmN0aW9uIGlzUmVmZXJlbmNlKHR5cGU6IFR5cGVOb2RlKTogYm9vbGVhbiB7XG4gIGxldCBzaW1wbGVUeXBlcyA9IFtcbiAgICBcImkzMlwiLFxuICAgIFwidTMyXCIsXG4gICAgXCJib29sXCIsXG4gICAgXCJpNjRcIixcbiAgICBcInU2NFwiLFxuICAgIFwiYm9vbGVhblwiLFxuICBdO1xuICByZXR1cm4gIXNpbXBsZVR5cGVzLmluY2x1ZGVzKHRvU3RyaW5nKHR5cGUpKTtcbn1cblxuLy8gVE9ETzogRXh0cmFjdCB0aGlzIGludG8gc2VwYXJhdGUgbW9kdWxlLCBwcmVmZXJyYWJsZSBwbHVnZ2FibGVcbmNsYXNzIE5FQVJCaW5kaW5nc0J1aWxkZXIgZXh0ZW5kcyBCYXNlVmlzaXRvciB7XG4gIHByaXZhdGUgdHlwZU1hcHBpbmc6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgaTMyOiBcIkludGVnZXJcIixcbiAgICB1MzI6IFwiSW50ZWdlclwiLFxuICAgIGk2NDogXCJTdHJpbmdcIixcbiAgICB1NjQ6IFwiU3RyaW5nXCIsXG4gICAgc3RyaW5nOiBcIlN0cmluZ1wiLFxuICAgIGJvb2w6IFwiQm9vbGVhblwiLFxuICAgIFVpbnQ4QXJyYXk6IFwiU3RyaW5nXCIsXG4gIH07XG5cbiAgcHJpdmF0ZSBub25OdWxsYWJsZVR5cGVzID0gW1wiaTMyXCIsIFwidTMyXCIsIFwiaTY0XCIsIFwidTY0XCIsIFwiYm9vbFwiLCBcImJvb2xlYW5cIl07XG5cbiAgcHJpdmF0ZSBzYjogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBleHBvcnRlZENsYXNzZXM6IE1hcDxzdHJpbmcsIENsYXNzRGVjbGFyYXRpb24+ID0gbmV3IE1hcCgpO1xuICB3cmFwcGVkRnVuY3M6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuXG4gIHN0YXRpYyBidWlsZChwYXJzZXI6IFBhcnNlciwgc291cmNlOiBTb3VyY2UpOiBzdHJpbmcge1xuICAgIHJldHVybiAobmV3IE5FQVJCaW5kaW5nc0J1aWxkZXIoKS5idWlsZChzb3VyY2UpKTtcbiAgfVxuXG4gIHN0YXRpYyBuZWFyRmlsZXMocGFyc2VyOiBQYXJzZXIpOiBTb3VyY2VbXSB7XG4gICAgcmV0dXJuIHBhcnNlci5wcm9ncmFtLnNvdXJjZXMuZmlsdGVyKGhhc05lYXJEZWNvcmF0b3IpO1xuICB9XG5cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBvcnRlZENsYXNzZXMuaGFzKHRvU3RyaW5nKG5vZGUubmFtZSkpKSByZXR1cm47XG4gICAgdGhpcy5leHBvcnRlZENsYXNzZXMuc2V0KHRvU3RyaW5nKG5vZGUubmFtZSksIG5vZGUpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICBpZiAoIWlzRW50cnkobm9kZSlcbiAgICAgICAgfHwgdGhpcy53cmFwcGVkRnVuY3MuaGFzKHRvU3RyaW5nKG5vZGUubmFtZSkpXG4gICAgICAgIHx8ICFub2RlLmlzKENvbW1vbkZsYWdzLkVYUE9SVClcbiAgICAgICAgfHwgKG51bU9mUGFyYW1ldGVycyhub2RlKSA9PSAwICYmIHJldHVybnNWb2lkKG5vZGUpKVxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIudmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKG5vZGUpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIChudW1PZlBhcmFtZXRlcnMobm9kZSkgPiAwKXtcbiAgICAvLyAgIHRoaXMuZ2VuZXJhdGVBcmdzUGFyc2VyKG5vZGUpO1xuICAgIC8vIH1cbiAgICB0aGlzLmdlbmVyYXRlV3JhcHBlckZ1bmN0aW9uKG5vZGUpO1xuICAgIC8vIENoYW5nZSBmdW5jdGlvbiB0byBub3QgYmUgYW4gZXhwb3J0XG4gICAgbm9kZS5mbGFncyA9IG5vZGUuZmxhZ3MgXiBDb21tb25GbGFncy5FWFBPUlQ7XG4gICAgdGhpcy53cmFwcGVkRnVuY3MuYWRkKHRvU3RyaW5nKG5vZGUubmFtZSkpO1xuICB9XG5cbiAgLypcbiAgQ3JlYXRlIGEgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhwb3J0IGluIHRoZSBmdW5jdGlvbidzIHBsYWNlLlxuICAqL1xuICBwcml2YXRlIGdlbmVyYXRlV3JhcHBlckZ1bmN0aW9uKGZ1bmM6IEZ1bmN0aW9uRGVjbGFyYXRpb24pIHtcbiAgICBsZXQgc2lnbmF0dXJlID0gZnVuYy5zaWduYXR1cmU7XG4gICAgbGV0IHBhcmFtcyA9IHNpZ25hdHVyZS5wYXJhbWV0ZXJzO1xuICAgIGxldCByZXR1cm5UeXBlID0gc2lnbmF0dXJlLnJldHVyblR5cGU7XG4gICAgbGV0IHJldHVyblR5cGVOYW1lID0gdG9TdHJpbmcocmV0dXJuVHlwZSkuc3BsaXQoXCJ8XCIpLmZpbHRlcihuYW1lID0+IG5hbWUudHJpbSgpICE9PSBcIm51bGxcIikuam9pbihcInxcIik7XG4gICAgbGV0IGhhc051bGwgPSB0b1N0cmluZyhyZXR1cm5UeXBlKS5pbmNsdWRlcyhcIm51bGxcIik7XG4gICAgbGV0IG5hbWUgPSBmdW5jLm5hbWUuc3ltYm9sO1xuICAgIHRoaXMuc2IucHVzaChgXG4vL0B0cy1pZ25vcmVcbmZ1bmN0aW9uIF9fd3JhcHBlcl8ke25hbWV9KCk6IHZvaWQge2ApO1xuICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKXtcbiAgICAgdGhpcy5zYi5wdXNoKFxuYCAgLy8gUmVhZGluZyBpbnB1dCBieXRlcy5cbiAgaW5wdXQoMCk7XG4gIGxldCBqc29uX2xlbiA9IHJlZ2lzdGVyX2xlbigwKTtcbiAgaWYgKGpzb25fbGVuID09IFUzMi5NQVhfVkFMVUUpIHtcbiAgICBwYW5pYygpO1xuICB9XG4gIGxldCBqc29uID0gbmV3IFVpbnQ4QXJyYXkoanNvbl9sZW4gYXMgdTMyKTtcbiAgcmVhZF9yZWdpc3RlcigwLCA8dXNpemU+anNvbi5idWZmZXIpO1xuICBjb25zdCBvYmo6IE9iaiA9IEpTT04ucGFyc2UoanNvbik7YCk7XG4gICAgfVxuICAgIGlmICh0b1N0cmluZyhyZXR1cm5UeXBlKSAhPT0gXCJ2b2lkXCIpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcbmAgIGxldCByZXN1bHQ6ICR7dG9TdHJpbmcocmV0dXJuVHlwZSl9ID0gJHtuYW1lfShgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zYi5wdXNoKFxuYCAgJHtuYW1lfShgKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNiW3RoaXMuc2IubGVuZ3RoIC0gMV0gKz0gKFxuICAgICAgICBwYXJhbXNcbiAgICAgICAgICAubWFwKChwYXJhbSkgPT4gY3JlYXRlRGVjb2RlU3RhdGVtZW50KHBhcmFtKSlcbiAgICAgICAgICAuam9pbihcIiwgXCIpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnNiW3RoaXMuc2IubGVuZ3RoIC0gMV0gKz0gXCIpO1wiO1xuICAgIGlmICh0b1N0cmluZyhyZXR1cm5UeXBlKSAhPT0gXCJ2b2lkXCIpIHtcbiAgICAgIHRoaXMuc2IucHVzaChgXG4gIGxldCBlbmNvZGVyID0gbmV3IEpTT05FbmNvZGVyKCk7XG4gIGxldCB2YWw6IFVpbnQ4QXJyYXk7XG4gIGlmICgoaXNTdHJpbmc8JHtyZXR1cm5UeXBlTmFtZX0+KCkgfHwgaXNOdWxsYWJsZTwke3JldHVyblR5cGVOYW1lfT4oKSkgJiYgcmVzdWx0ID09IG51bGwpIHtcbiAgICBlbmNvZGVyLnNldE51bGwobnVsbCk7XG4gICAgdmFsID0gZW5jb2Rlci5zZXJpYWxpemUoKTtcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBlbmNvZGU8JHtyZXR1cm5UeXBlTmFtZX0+KHJlc3VsdCR7aGFzTnVsbCA/IFwiIVwiIDogXCJcIn0sIG51bGwsIGVuY29kZXIpO1xuICB9XG4gIHZhbHVlX3JldHVybih2YWwuYnl0ZUxlbmd0aCwgPHVzaXplPnZhbC5idWZmZXIpO2ApO1xuICAgIH1cbiAgICB0aGlzLnNiLnB1c2goYH1cblxuZXhwb3J0IHsgX193cmFwcGVyXyR7bmFtZX0gYXMgJHtuYW1lfSB9XG5gKTtcbiAgfVxuXG4gIHByaXZhdGUgdHlwZU5hbWUodHlwZTogVHlwZU5vZGUgfCBDbGFzc0RlY2xhcmF0aW9uKTogc3RyaW5nIHtcbiAgICBpZiAoIWlzQ2xhc3ModHlwZSkpIHtcbiAgICAgIHJldHVybiBBU1RCdWlsZGVyLmJ1aWxkKHR5cGUpO1xuICAgIH1cbiAgICB0eXBlID0gPENsYXNzRGVjbGFyYXRpb24+KHR5cGUpO1xuICAgIGxldCBjbGFzc05hbWUgPSB0b1N0cmluZyh0eXBlLm5hbWUpO1xuICAgIGlmICh0eXBlLmlzR2VuZXJpYykge1xuICAgICAgY2xhc3NOYW1lICs9IFwiPFwiICsgdHlwZS50eXBlUGFyYW1ldGVycyEubWFwKHRvU3RyaW5nKS5qb2luKFwiLCBcIikgKyBcIj5cIjtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIGJ1aWxkKHNvdXJjZTogU291cmNlKTogc3RyaW5nIHtcbiAgICAgIHRoaXMuc2IgPSBbcHJlYW1ibGVdO1xuICAgICAgdGhpcy52aXNpdChzb3VyY2UpO1xuICAgICAgbGV0IHNvdXJjZVRleHQgPSBzb3VyY2Uuc3RhdGVtZW50cy5tYXAoc3RtdCA9PiB7XG4gICAgICAgIGxldCBzdHIgPSBBU1RCdWlsZGVyLmJ1aWxkKHN0bXQpO1xuICAgICAgICBpZiAoaXNDbGFzcyhzdG10KSkge1xuICAgICAgICAgIGxldCBfY2xhc3MgPSA8Q2xhc3NEZWNsYXJhdGlvbj4gc3RtdDtcbiAgICAgICAgICBzdHIgPSBzdHIuc2xpY2UoMCwgc3RyLmxhc3RJbmRleE9mKFwifVwiKSk7XG4gICAgICAgICAgbGV0IGZpZWxkcyA9IF9jbGFzcy5tZW1iZXJzLmZpbHRlcihpc0ZpZWxkKS5tYXAoKGZpZWxkOiBGaWVsZERlY2xhcmF0aW9uKSA9PiBmaWVsZCk7XG4gICAgICAgICAgaWYgKGZpZWxkcy5zb21lKGZpZWxkID0+IGZpZWxkLnR5cGUgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFsbCBGaWVsZHMgbXVzdCBoYXZlIGV4cGxpY3QgdHlwZSBkZWNsYXJhdGlvbi5cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnR5cGVOYW1lKF9jbGFzcyk7XG4gICAgICAgICAgc3RyICs9IGBcbiAgc3RhdGljIGRlY29kZShqc29uOiBVaW50OEFycmF5KTogJHtjbGFzc05hbWV9IHtcbiAgICBsZXQgdmFsdWUgPSBpbnN0YW50aWF0ZTwke2NsYXNzTmFtZX0+KCk7IC8vIEFsbG9jYXRlIHdpdGhvdXQgY29uc3RydWN0b3JcbiAgICByZXR1cm4gdmFsdWUuZGVjb2RlPFVpbnQ4QXJyYXk+KGpzb24pO1xuICB9XG5cbiAgZGVjb2RlPFYgPSBVaW50OEFycmF5PihidWY6IFYpOiAke2NsYXNzTmFtZX0ge1xuICAgIGxldCBqc29uOiBPYmo7XG4gICAgaWYgKGJ1ZiBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgIGpzb24gPSBKU09OLnBhcnNlKGJ1Zik7XG4gICAgfWVsc2Uge1xuICAgICAgYXNzZXJ0KGJ1ZiBpbnN0YW5jZW9mIE9iaiwgXCJhcmd1bWVudCBtdXN0IGJlIFVpbnQ4QXJyYXkgb3IgSnNvbiBPYmplY3RcIik7XG4gICAgICBqc29uID0gPE9iaj4gYnVmO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGVjb2RlKGpzb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVjb2RlKG9iajogT2JqKTogJHtjbGFzc05hbWV9IHtcbiAgICAke2NyZWF0ZURlY29kZVN0YXRlbWVudHMoX2NsYXNzKS5qb2luKFwiXFxuICAgIFwiKX1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9lbmNvZGUobmFtZTogc3RyaW5nIHwgbnVsbCA9IFwiXCIsIF9lbmNvZGVyOiBKU09ORW5jb2RlciB8IG51bGwgPSBudWxsKTogSlNPTkVuY29kZXIge1xuICAgIGxldCBlbmNvZGVyID0gKF9lbmNvZGVyICE9IG51bGwgPyBfZW5jb2RlciA6IG5ldyBKU09ORW5jb2RlcigpKSE7XG4gICAgZW5jb2Rlci5wdXNoT2JqZWN0KG5hbWUpO1xuICAgICR7Y3JlYXRlRW5jb2RlU3RhdGVtZW50cyhfY2xhc3MpLmpvaW4oXCJcXG4gICAgXCIpfVxuICAgIGVuY29kZXIucG9wT2JqZWN0KCk7XG4gICAgcmV0dXJuIGVuY29kZXI7XG4gIH1cblxuICBlbmNvZGUoKTogVWludDhBcnJheSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY29kZSgpLnNlcmlhbGl6ZSgpO1xuICB9XG5cbiAgc2VyaWFsaXplKCk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybiB0aGlzLmVuY29kZSgpO1xuICB9XG5cbiAgdG9KU09OKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2VuY29kZSgpLnRvU3RyaW5nKCk7XG4gIH1cbn1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2IuY29uY2F0KHNvdXJjZVRleHQpLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlY29kZVN0YXRlbWVudHMoX2NsYXNzOiBDbGFzc0RlY2xhcmF0aW9uKTogc3RyaW5nW10ge1xuICByZXR1cm4gX2NsYXNzLm1lbWJlcnMuZmlsdGVyKGlzRmllbGQpLm1hcCgoZmllbGQ6IEZpZWxkRGVjbGFyYXRpb24pOiBzdHJpbmcgID0+IHtcbiAgICBjb25zdCBuYW1lID0gdG9TdHJpbmcoZmllbGQubmFtZSk7XG4gICAgcmV0dXJuIGNyZWF0ZURlY29kZVN0YXRlbWVudChmaWVsZCwgYHRoaXMuJHtuYW1lfSA9IG9iai5oYXMoXCIke25hbWV9XCIpID8gYCkgKyBgOiB0aGlzLiR7bmFtZX07YFxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWNvZGVTdGF0ZW1lbnQoZmllbGQ6IEZpZWxkRGVjbGFyYXRpb24gfCBQYXJhbWV0ZXJOb2RlLCBzZXR0ZXJQcmVmaXg6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmcge1xuICBsZXQgVCA9IHRvU3RyaW5nKGZpZWxkLnR5cGUhKTtcbiAgbGV0IG5hbWUgPSB0b1N0cmluZyhmaWVsZC5uYW1lKTtcbiAgcmV0dXJuIGAke3NldHRlclByZWZpeH1kZWNvZGU8JHtUfSwgT2JqPihvYmosIFwiJHtuYW1lfVwiKWA7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW5jb2RlU3RhdGVtZW50cyhfY2xhc3M6IENsYXNzRGVjbGFyYXRpb24pOiBzdHJpbmdbXSB7XG4gIHJldHVybiBfY2xhc3MubWVtYmVycy5maWx0ZXIoaXNGaWVsZCkubWFwKFxuICAgIChmaWVsZDogRmllbGREZWNsYXJhdGlvbik6IHN0cmluZyAgPT4ge1xuICAgICAgbGV0IFQgPSB0b1N0cmluZyhmaWVsZC50eXBlISk7XG4gICAgICBsZXQgbmFtZSA9IHRvU3RyaW5nKGZpZWxkLm5hbWUpO1xuICAgICAgcmV0dXJuIGBlbmNvZGU8JHtUfSwgSlNPTkVuY29kZXI+KHRoaXMuJHtuYW1lfSwgXCIke25hbWV9XCIsIGVuY29kZXIpO2A7XG4gICAgfVxuICApO1xufVxuLy8gVE9ETzogTWFrZSB3b3JrIGZvciBub24tc2ltcGxlIGdlbmVyaWNzIGUuZy4gZmllbGQ6IEFycmF5PFQ+XG5mdW5jdGlvbiBpc0dlbmVyaWMoX2NsYXNzOiBDbGFzc0RlY2xhcmF0aW9uLCBmaWVsZDogRmllbGREZWNsYXJhdGlvbik6IGJvb2xlYW4ge1xuICBpZiAoX2NsYXNzLnR5cGVQYXJhbWV0ZXJzID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIF9jbGFzcy50eXBlUGFyYW1ldGVycy5zb21lKHBhcmFtID0+IHRvU3RyaW5nKHBhcmFtLm5hbWUpID09IHRvU3RyaW5nKGZpZWxkLnR5cGUhKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZnRlclBhcnNlKHBhcnNlcjogUGFyc2VyLCB3cml0ZUZpbGU6IEZpbGVXcml0ZXIsIGJhc2VEaXI6IHN0cmluZyk6IHZvaWQge1xuICBsZXQgZmlsZXMgPSBORUFSQmluZGluZ3NCdWlsZGVyLm5lYXJGaWxlcyhwYXJzZXIpO1xuICBmaWxlcy5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgbGV0IHdyaXRlT3V0ID0gc291cmNlLnRleHQuc3Vic3RyKDAsIHNvdXJjZS50ZXh0LmluZGV4T2YoXCJcXG5cIikpLmluY2x1ZGVzKFwib3V0XCIpO1xuICAgIC8vIFJlbW92ZSBmcm9tIGxvZ3MgaW4gcGFyc2VyXG4gICAgcGFyc2VyLmRvbmVsb2cuZGVsZXRlKHNvdXJjZS5pbnRlcm5hbFBhdGgpO1xuICAgIHBhcnNlci5zZWVubG9nLmRlbGV0ZShzb3VyY2UuaW50ZXJuYWxQYXRoKTtcbiAgICAvLyBSZW1vdmUgZnJvbSBwcm9ncmFtcyBzb3VyY2VzXG4gICAgcGFyc2VyLnByb2dyYW0uc291cmNlcyA9IHBhcnNlci5wcm9ncmFtLnNvdXJjZXMuZmlsdGVyKFxuICAgICAgKF9zb3VyY2U6IFNvdXJjZSkgPT4gX3NvdXJjZSAhPT0gc291cmNlXG4gICAgKTtcbiAgICAvLyBCdWlsZCBuZXcgU291cmNlXG4gICAgbGV0IHNvdXJjZVRleHQgPSBORUFSQmluZGluZ3NCdWlsZGVyLmJ1aWxkKHBhcnNlciwgc291cmNlKTtcbiAgICBpZiAod3JpdGVPdXQpIHtcbiAgICAgd3JpdGVGaWxlKFwib3V0L1wiICsgc291cmNlLm5vcm1hbGl6ZWRQYXRoLCBzb3VyY2VUZXh0LCBiYXNlRGlyKTtcbiAgICB9XG4gICAgLy8gUGFyc2VzIGZpbGUgYW5kIGFueSBuZXcgaW1wb3J0cyBhZGRlZCB0byB0aGUgc291cmNlXG4gICAgcGFyc2VyLnBhcnNlRmlsZShcbiAgICAgIHNvdXJjZVRleHQsXG4gICAgICAoaXNFbnRyeShzb3VyY2UpID8gXCJcIiA6IFwiLi9cIikgKyBzb3VyY2Uubm9ybWFsaXplZFBhdGgsXG4gICAgICBpc0VudHJ5KHNvdXJjZSlcbiAgICApO1xuICB9KTtcblxufVxuIl19

/***/ }),

/***/ "./src/preamble.ts":
/*!*************************!*\
  !*** ./src/preamble.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.preamble = "import { base64 } from \"near-runtime-ts\";\nimport { JSONEncoder } from \"assemblyscript-json\";\nimport { JSONDecoder, ThrowingJSONHandler, DecoderState } from \"assemblyscript-json\";\n";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYW1ibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHJlYW1ibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDYSxRQUFBLFFBQVEsR0FBRyw4TEFHdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IHByZWFtYmxlID0gYGltcG9ydCB7IGJhc2U2NCB9IGZyb20gXCJuZWFyLXJ1bnRpbWUtdHNcIjtcbmltcG9ydCB7IEpTT05FbmNvZGVyIH0gZnJvbSBcImFzc2VtYmx5c2NyaXB0LWpzb25cIjtcbmltcG9ydCB7IEpTT05EZWNvZGVyLCBUaHJvd2luZ0pTT05IYW5kbGVyLCBEZWNvZGVyU3RhdGUgfSBmcm9tIFwiYXNzZW1ibHlzY3JpcHQtanNvblwiO1xuYDtcbiJdfQ==

/***/ }),

/***/ "./src/sourceBuilder.ts":
/*!******************************!*\
  !*** ./src/sourceBuilder.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ast_1 = __webpack_require__(/*! ../node_modules/assemblyscript/src/ast */ "./node_modules/assemblyscript/src/ast.ts");
__webpack_require__(/*! ../node_modules/assemblyscript/std/portable/index */ "./node_modules/assemblyscript/std/portable/index.js");
__webpack_require__(/*! ../node_modules/assemblyscript/src/glue/js/float */ "./node_modules/assemblyscript/src/glue/js/float.js");
__webpack_require__(/*! ../node_modules/assemblyscript/src/glue/js/i64 */ "./node_modules/assemblyscript/src/glue/js/i64.js");
var common_1 = __webpack_require__(/*! ../node_modules/assemblyscript/src/common */ "./node_modules/assemblyscript/src/common.ts");
var index_1 = __webpack_require__(/*! ../node_modules/assemblyscript/src/util/index */ "./node_modules/assemblyscript/src/util/index.ts");
var tokenizer_1 = __webpack_require__(/*! ../node_modules/assemblyscript/src/tokenizer */ "./node_modules/assemblyscript/src/tokenizer.ts");
/** An AST builder. */
var ASTBuilder = /** @class */ (function () {
    function ASTBuilder() {
        this.sb = [];
        this.indentLevel = 0;
    }
    /** Rebuilds the textual source from the specified AST, as far as possible. */
    ASTBuilder.build = function (node) {
        var builder = new ASTBuilder();
        builder.visitNode(node);
        return builder.finish();
    };
    ASTBuilder.prototype.visitNode = function (node) {
        switch (node.kind) {
            case ast_1.NodeKind.SOURCE: {
                this.visitSource(node);
                break;
            }
            // types
            case ast_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case ast_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            case ast_1.NodeKind.TYPEPARAMETER: {
                this.visitTypeParameter(node);
                break;
            }
            // expressions
            case ast_1.NodeKind.FALSE:
            case ast_1.NodeKind.NULL:
            case ast_1.NodeKind.SUPER:
            case ast_1.NodeKind.THIS:
            case ast_1.NodeKind.TRUE:
            case ast_1.NodeKind.CONSTRUCTOR:
            case ast_1.NodeKind.IDENTIFIER: {
                this.visitIdentifierExpression(node);
                break;
            }
            case ast_1.NodeKind.ASSERTION: {
                this.visitAssertionExpression(node);
                break;
            }
            case ast_1.NodeKind.BINARY: {
                this.visitBinaryExpression(node);
                break;
            }
            case ast_1.NodeKind.CALL: {
                this.visitCallExpression(node);
                break;
            }
            case ast_1.NodeKind.CLASS: {
                this.visitClassExpression(node);
                break;
            }
            case ast_1.NodeKind.COMMA: {
                this.visitCommaExpression(node);
                break;
            }
            case ast_1.NodeKind.ELEMENTACCESS: {
                this.visitElementAccessExpression(node);
                break;
            }
            case ast_1.NodeKind.FUNCTION: {
                this.visitFunctionExpression(node);
                break;
            }
            case ast_1.NodeKind.INSTANCEOF: {
                this.visitInstanceOfExpression(node);
                break;
            }
            case ast_1.NodeKind.LITERAL: {
                this.visitLiteralExpression(node);
                break;
            }
            case ast_1.NodeKind.NEW: {
                this.visitNewExpression(node);
                break;
            }
            case ast_1.NodeKind.PARENTHESIZED: {
                this.visitParenthesizedExpression(node);
                break;
            }
            case ast_1.NodeKind.PROPERTYACCESS: {
                this.visitPropertyAccessExpression(node);
                break;
            }
            case ast_1.NodeKind.TERNARY: {
                this.visitTernaryExpression(node);
                break;
            }
            case ast_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case ast_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            // statements
            case ast_1.NodeKind.BLOCK: {
                this.visitBlockStatement(node);
                break;
            }
            case ast_1.NodeKind.BREAK: {
                this.visitBreakStatement(node);
                break;
            }
            case ast_1.NodeKind.CONTINUE: {
                this.visitContinueStatement(node);
                break;
            }
            case ast_1.NodeKind.DO: {
                this.visitDoStatement(node);
                break;
            }
            case ast_1.NodeKind.EMPTY: {
                this.visitEmptyStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORT: {
                this.visitExportStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORTDEFAULT: {
                this.visitExportDefaultStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPORTIMPORT: {
                this.visitExportImportStatement(node);
                break;
            }
            case ast_1.NodeKind.EXPRESSION: {
                this.visitExpressionStatement(node);
                break;
            }
            case ast_1.NodeKind.FOR: {
                this.visitForStatement(node);
                break;
            }
            case ast_1.NodeKind.IF: {
                this.visitIfStatement(node);
                break;
            }
            case ast_1.NodeKind.IMPORT: {
                this.visitImportStatement(node);
                break;
            }
            case ast_1.NodeKind.RETURN: {
                this.visitReturnStatement(node);
                break;
            }
            case ast_1.NodeKind.SWITCH: {
                this.visitSwitchStatement(node);
                break;
            }
            case ast_1.NodeKind.THROW: {
                this.visitThrowStatement(node);
                break;
            }
            case ast_1.NodeKind.TRY: {
                this.visitTryStatement(node);
                break;
            }
            case ast_1.NodeKind.VARIABLE: {
                this.visitVariableStatement(node);
                break;
            }
            case ast_1.NodeKind.WHILE: {
                this.visitWhileStatement(node);
                break;
            }
            // declaration statements
            case ast_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(node);
                break;
            }
            case ast_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(node);
                break;
            }
            case ast_1.NodeKind.ENUMVALUEDECLARATION: {
                this.visitEnumValueDeclaration(node);
                break;
            }
            case ast_1.NodeKind.FIELDDECLARATION: {
                this.visitFieldDeclaration(node);
                break;
            }
            case ast_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(node);
                break;
            }
            case ast_1.NodeKind.IMPORTDECLARATION: {
                this.visitImportDeclaration(node);
                break;
            }
            case ast_1.NodeKind.INDEXSIGNATUREDECLARATION: {
                this.visitIndexSignatureDeclaration(node);
                break;
            }
            case ast_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(node);
                break;
            }
            case ast_1.NodeKind.METHODDECLARATION: {
                this.visitMethodDeclaration(node);
                break;
            }
            case ast_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(node);
                break;
            }
            case ast_1.NodeKind.TYPEDECLARATION: {
                this.visitTypeDeclaration(node);
                break;
            }
            case ast_1.NodeKind.VARIABLEDECLARATION: {
                this.visitVariableDeclaration(node);
                break;
            }
            // other
            case ast_1.NodeKind.DECORATOR: {
                this.serializeDecorator(node);
                break;
            }
            case ast_1.NodeKind.EXPORTMEMBER: {
                this.visitExportMember(node);
                break;
            }
            case ast_1.NodeKind.PARAMETER: {
                this.serializeParameter(node);
                break;
            }
            case ast_1.NodeKind.SWITCHCASE: {
                this.visitSwitchCase(node);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitSource = function (source) {
        var statements = source.statements;
        for (var i = 0, k = statements.length; i < k; ++i) {
            this.visitNodeAndTerminate(statements[i]);
        }
    };
    // types
    ASTBuilder.prototype.visitTypeNode = function (node) {
        switch (node.kind) {
            case ast_1.NodeKind.NAMEDTYPE: {
                this.visitNamedTypeNode(node);
                break;
            }
            case ast_1.NodeKind.FUNCTIONTYPE: {
                this.visitFunctionTypeNode(node);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitTypeName = function (node) {
        this.visitIdentifierExpression(node.identifier);
        var sb = this.sb;
        var current = node.next;
        while (current) {
            sb.push(".");
            this.visitIdentifierExpression(current.identifier);
            current = current.next;
        }
    };
    ASTBuilder.prototype.visitNamedTypeNode = function (node) {
        this.visitTypeName(node.name);
        var typeArguments = node.typeArguments;
        if (typeArguments) {
            var numTypeArguments = typeArguments.length;
            var sb = this.sb;
            if (numTypeArguments) {
                sb.push("<");
                this.visitTypeNode(typeArguments[0]);
                for (var i = 1; i < numTypeArguments; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(typeArguments[i]);
                }
                sb.push(">");
            }
            if (node.isNullable)
                sb.push(" | null");
        }
    };
    ASTBuilder.prototype.visitFunctionTypeNode = function (node) {
        var isNullable = node.isNullable;
        var sb = this.sb;
        sb.push(isNullable ? "((" : "(");
        var explicitThisType = node.explicitThisType;
        if (explicitThisType) {
            sb.push("this: ");
            this.visitTypeNode(explicitThisType);
        }
        var parameters = node.parameters;
        var numParameters = parameters.length;
        if (numParameters) {
            if (explicitThisType)
                sb.push(", ");
            this.serializeParameter(parameters[0]);
            for (var i = 1; i < numParameters; ++i) {
                sb.push(", ");
                this.serializeParameter(parameters[i]);
            }
        }
        var returnType = node.returnType;
        if (returnType) {
            sb.push(") => ");
            this.visitTypeNode(returnType);
        }
        else {
            sb.push(") => void");
        }
        if (isNullable)
            sb.push(") | null");
    };
    ASTBuilder.prototype.visitTypeParameter = function (node) {
        this.visitIdentifierExpression(node.name);
        var extendsType = node.extendsType;
        if (extendsType) {
            this.sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        var defaultType = node.defaultType;
        if (defaultType) {
            this.sb.push("=");
            this.visitTypeNode(defaultType);
        }
    };
    // expressions
    ASTBuilder.prototype.visitIdentifierExpression = function (node) {
        if (node.isQuoted)
            this.visitStringLiteral(node.text);
        else
            this.sb.push(node.text);
    };
    ASTBuilder.prototype.visitArrayLiteralExpression = function (node) {
        var sb = this.sb;
        sb.push("[");
        var elements = node.elementExpressions;
        var numElements = elements.length;
        if (numElements) {
            if (elements[0])
                this.visitNode(elements[0]);
            for (var i = 1; i < numElements; ++i) {
                sb.push(", ");
                if (elements[i])
                    this.visitNode(elements[i]);
            }
        }
        sb.push("]");
    };
    ASTBuilder.prototype.visitObjectLiteralExpression = function (node) {
        var sb = this.sb;
        var names = node.names;
        var values = node.values;
        var numElements = names.length;
        assert(numElements == values.length);
        if (numElements) {
            sb.push("{\n");
            index_1.indent(sb, ++this.indentLevel);
            this.visitNode(names[0]);
            sb.push(": ");
            this.visitNode(values[0]);
            for (var i = 1; i < numElements; ++i) {
                sb.push(",\n");
                index_1.indent(sb, this.indentLevel);
                var name = names[i];
                var value = values[i];
                if (name === value) {
                    this.visitNode(name);
                }
                else {
                    this.visitNode(name);
                    sb.push(": ");
                    this.visitNode(value);
                }
            }
            sb.push("\n");
            index_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push("{}");
        }
    };
    ASTBuilder.prototype.visitAssertionExpression = function (node) {
        var sb = this.sb;
        switch (node.assertionKind) {
            case ast_1.AssertionKind.PREFIX: {
                sb.push("<");
                this.visitTypeNode(assert(node.toType));
                sb.push(">");
                this.visitNode(node.expression);
                break;
            }
            case ast_1.AssertionKind.AS: {
                this.visitNode(node.expression);
                sb.push(" as ");
                this.visitTypeNode(assert(node.toType));
                break;
            }
            case ast_1.AssertionKind.NONNULL: {
                this.visitNode(node.expression);
                sb.push("!");
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitBinaryExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.left);
        sb.push(" ");
        sb.push(tokenizer_1.operatorTokenToString(node.operator));
        sb.push(" ");
        this.visitNode(node.right);
    };
    ASTBuilder.prototype.visitCallExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.expression);
        var typeArguments = node.typeArguments;
        if (typeArguments) {
            var numTypeArguments = typeArguments.length;
            if (numTypeArguments) {
                sb.push("<");
                this.visitTypeNode(typeArguments[0]);
                for (var i = 1; i < numTypeArguments; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(typeArguments[i]);
                }
                sb.push(">(");
            }
        }
        else {
            sb.push("(");
        }
        var args = node.arguments;
        var numArgs = args.length;
        if (numArgs) {
            this.visitNode(args[0]);
            for (var i = 1; i < numArgs; ++i) {
                sb.push(", ");
                this.visitNode(args[i]);
            }
        }
        sb.push(")");
    };
    ASTBuilder.prototype.visitClassExpression = function (node) {
        var declaration = node.declaration;
        this.visitClassDeclaration(declaration);
    };
    ASTBuilder.prototype.visitCommaExpression = function (node) {
        var expressions = node.expressions;
        var numExpressions = assert(expressions.length);
        this.visitNode(expressions[0]);
        var sb = this.sb;
        for (var i = 1; i < numExpressions; ++i) {
            sb.push(",");
            this.visitNode(expressions[i]);
        }
    };
    ASTBuilder.prototype.visitElementAccessExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.expression);
        sb.push("[");
        this.visitNode(node.elementExpression);
        sb.push("]");
    };
    ASTBuilder.prototype.visitFunctionExpression = function (node) {
        var declaration = node.declaration;
        if (!declaration.arrowKind) {
            if (declaration.name.text.length) {
                this.sb.push("function ");
            }
            else {
                this.sb.push("function");
            }
        }
        else {
            assert(declaration.name.text.length == 0);
        }
        this.visitFunctionCommon(declaration);
    };
    ASTBuilder.prototype.visitLiteralExpression = function (node) {
        switch (node.literalKind) {
            case ast_1.LiteralKind.FLOAT: {
                this.visitFloatLiteralExpression(node);
                break;
            }
            case ast_1.LiteralKind.INTEGER: {
                this.visitIntegerLiteralExpression(node);
                break;
            }
            case ast_1.LiteralKind.STRING: {
                this.visitStringLiteralExpression(node);
                break;
            }
            case ast_1.LiteralKind.REGEXP: {
                this.visitRegexpLiteralExpression(node);
                break;
            }
            case ast_1.LiteralKind.ARRAY: {
                this.visitArrayLiteralExpression(node);
                break;
            }
            case ast_1.LiteralKind.OBJECT: {
                this.visitObjectLiteralExpression(node);
                break;
            }
            default: {
                assert(false);
                break;
            }
        }
    };
    ASTBuilder.prototype.visitFloatLiteralExpression = function (node) {
        this.sb.push(node.value.toString(10));
    };
    ASTBuilder.prototype.visitInstanceOfExpression = function (node) {
        this.visitNode(node.expression);
        this.sb.push(" instanceof ");
        this.visitTypeNode(node.isType);
    };
    ASTBuilder.prototype.visitIntegerLiteralExpression = function (node) {
        this.sb.push(i64_to_string(node.value));
    };
    ASTBuilder.prototype.visitStringLiteral = function (str, singleQuoted) {
        if (singleQuoted === void 0) { singleQuoted = false; }
        var sb = this.sb;
        var off = 0;
        var quote = singleQuoted ? "'" : "\"";
        sb.push(quote);
        var i = 0;
        for (var k = str.length; i < k;) {
            switch (str.charCodeAt(i)) {
                case 0 /* NULL */: {
                    if (i > off)
                        sb.push(str.substring(off, off = i + 1));
                    sb.push("\\0");
                    off = ++i;
                    break;
                }
                case 8 /* BACKSPACE */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\b");
                    break;
                }
                case 9 /* TAB */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\t");
                    break;
                }
                case 10 /* LINEFEED */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\n");
                    break;
                }
                case 11 /* VERTICALTAB */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\v");
                    break;
                }
                case 12 /* FORMFEED */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    off = ++i;
                    sb.push("\\f");
                    break;
                }
                case 13 /* CARRIAGERETURN */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    sb.push("\\r");
                    off = ++i;
                    break;
                }
                case 34 /* DOUBLEQUOTE */: {
                    if (!singleQuoted) {
                        if (i > off)
                            sb.push(str.substring(off, i));
                        sb.push("\\\"");
                        off = ++i;
                    }
                    else {
                        ++i;
                    }
                    break;
                }
                case 39 /* SINGLEQUOTE */: {
                    if (singleQuoted) {
                        if (i > off)
                            sb.push(str.substring(off, i));
                        sb.push("\\'");
                        off = ++i;
                    }
                    else {
                        ++i;
                    }
                    break;
                }
                case 92 /* BACKSLASH */: {
                    if (i > off)
                        sb.push(str.substring(off, i));
                    sb.push("\\\\");
                    off = ++i;
                    break;
                }
                default: {
                    ++i;
                    break;
                }
            }
        }
        if (i > off)
            sb.push(str.substring(off, i));
        sb.push(quote);
    };
    ASTBuilder.prototype.visitStringLiteralExpression = function (node) {
        this.visitStringLiteral(node.value);
    };
    ASTBuilder.prototype.visitRegexpLiteralExpression = function (node) {
        var sb = this.sb;
        sb.push("/");
        sb.push(node.pattern);
        sb.push("/");
        sb.push(node.patternFlags);
    };
    ASTBuilder.prototype.visitNewExpression = function (node) {
        this.sb.push("new ");
        this.visitCallExpression(node);
    };
    ASTBuilder.prototype.visitParenthesizedExpression = function (node) {
        var sb = this.sb;
        sb.push("(");
        this.visitNode(node.expression);
        sb.push(")");
    };
    ASTBuilder.prototype.visitPropertyAccessExpression = function (node) {
        this.visitNode(node.expression);
        this.sb.push(".");
        this.visitIdentifierExpression(node.property);
    };
    ASTBuilder.prototype.visitTernaryExpression = function (node) {
        var sb = this.sb;
        this.visitNode(node.condition);
        sb.push(" ? ");
        this.visitNode(node.ifThen);
        sb.push(" : ");
        this.visitNode(node.ifElse);
    };
    ASTBuilder.prototype.visitUnaryExpression = function (node) {
        switch (node.kind) {
            case ast_1.NodeKind.UNARYPOSTFIX: {
                this.visitUnaryPostfixExpression(node);
                break;
            }
            case ast_1.NodeKind.UNARYPREFIX: {
                this.visitUnaryPrefixExpression(node);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitUnaryPostfixExpression = function (node) {
        this.visitNode(node.operand);
        this.sb.push(tokenizer_1.operatorTokenToString(node.operator));
    };
    ASTBuilder.prototype.visitUnaryPrefixExpression = function (node) {
        this.sb.push(tokenizer_1.operatorTokenToString(node.operator));
        this.visitNode(node.operand);
    };
    // statements
    ASTBuilder.prototype.visitNodeAndTerminate = function (statement) {
        this.visitNode(statement);
        var sb = this.sb;
        if (!sb.length || // leading EmptyStatement
            statement.kind == ast_1.NodeKind.VARIABLE || // potentially assigns a FunctionExpression
            statement.kind == ast_1.NodeKind.EXPRESSION // potentially assigns a FunctionExpression
        ) {
            sb.push(";\n");
        }
        else {
            var last = sb[sb.length - 1];
            var lastCharPos = last.length - 1;
            if (lastCharPos >= 0 && (last.charCodeAt(lastCharPos) == 125 /* CLOSEBRACE */ ||
                last.charCodeAt(lastCharPos) == 59 /* SEMICOLON */)) {
                sb.push("\n");
            }
            else {
                sb.push(";\n");
            }
        }
    };
    ASTBuilder.prototype.visitBlockStatement = function (node) {
        var sb = this.sb;
        var statements = node.statements;
        var numStatements = statements.length;
        if (numStatements) {
            sb.push("{\n");
            var indentLevel = ++this.indentLevel;
            for (var i = 0; i < numStatements; ++i) {
                index_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(statements[i]);
            }
            index_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push("{}");
        }
    };
    ASTBuilder.prototype.visitBreakStatement = function (node) {
        var label = node.label;
        if (label) {
            this.sb.push("break ");
            this.visitIdentifierExpression(label);
        }
        else {
            this.sb.push("break");
        }
    };
    ASTBuilder.prototype.visitContinueStatement = function (node) {
        var label = node.label;
        if (label) {
            this.sb.push("continue ");
            this.visitIdentifierExpression(label);
        }
        else {
            this.sb.push("continue");
        }
    };
    ASTBuilder.prototype.visitClassDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        if (node.is(common_1.CommonFlags.ABSTRACT))
            sb.push("abstract ");
        if (node.name.text.length) {
            sb.push("class ");
            this.visitIdentifierExpression(node.name);
        }
        else {
            sb.push("class");
        }
        var typeParameters = node.typeParameters;
        if (typeParameters && typeParameters.length) {
            sb.push("<");
            this.visitTypeParameter(typeParameters[0]);
            for (var i = 1, k = typeParameters.length; i < k; ++i) {
                sb.push(", ");
                this.visitTypeParameter(typeParameters[i]);
            }
            sb.push(">");
        }
        var extendsType = node.extendsType;
        if (extendsType) {
            sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        var implementsTypes = node.implementsTypes;
        if (implementsTypes) {
            var numImplementsTypes = implementsTypes.length;
            if (numImplementsTypes) {
                sb.push(" implements ");
                this.visitTypeNode(implementsTypes[0]);
                for (var i = 1; i < numImplementsTypes; ++i) {
                    sb.push(", ");
                    this.visitTypeNode(implementsTypes[i]);
                }
            }
        }
        var members = node.members;
        var numMembers = members.length;
        if (numMembers) {
            sb.push(" {\n");
            var indentLevel = ++this.indentLevel;
            for (var i = 0, k = members.length; i < k; ++i) {
                var member = members[i];
                if (member.kind != ast_1.NodeKind.FIELDDECLARATION || member.parameterIndex < 0) {
                    index_1.indent(sb, indentLevel);
                    this.visitNodeAndTerminate(member);
                }
            }
            index_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    };
    ASTBuilder.prototype.visitDoStatement = function (node) {
        var sb = this.sb;
        sb.push("do ");
        this.visitNode(node.statement);
        if (node.statement.kind == ast_1.NodeKind.BLOCK) {
            sb.push(" while (");
        }
        else {
            sb.push(";\n");
            index_1.indent(sb, this.indentLevel);
            sb.push("while (");
        }
        this.visitNode(node.condition);
        sb.push(")");
    };
    ASTBuilder.prototype.visitEmptyStatement = function (node) {
    };
    ASTBuilder.prototype.visitEnumDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        if (node.is(common_1.CommonFlags.CONST))
            sb.push("const ");
        sb.push("enum ");
        this.visitIdentifierExpression(node.name);
        var values = node.values;
        var numValues = values.length;
        if (numValues) {
            sb.push(" {\n");
            var indentLevel = ++this.indentLevel;
            index_1.indent(sb, indentLevel);
            this.visitEnumValueDeclaration(node.values[0]);
            for (var i = 1; i < numValues; ++i) {
                sb.push(",\n");
                index_1.indent(sb, indentLevel);
                this.visitEnumValueDeclaration(node.values[i]);
            }
            sb.push("\n");
            index_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    };
    ASTBuilder.prototype.visitEnumValueDeclaration = function (node) {
        this.visitIdentifierExpression(node.name);
        if (node.value) {
            this.sb.push(" = ");
            this.visitNode(node.value);
        }
    };
    ASTBuilder.prototype.visitExportImportStatement = function (node) {
        var sb = this.sb;
        sb.push("export import ");
        this.visitIdentifierExpression(node.externalName);
        sb.push(" = ");
        this.visitIdentifierExpression(node.name);
    };
    ASTBuilder.prototype.visitExportMember = function (node) {
        this.visitIdentifierExpression(node.localName);
        if (node.exportedName.text != node.localName.text) {
            this.sb.push(" as ");
            this.visitIdentifierExpression(node.exportedName);
        }
    };
    ASTBuilder.prototype.visitExportStatement = function (node) {
        var sb = this.sb;
        if (node.isDeclare) {
            sb.push("declare ");
        }
        var members = node.members;
        if (members && members.length) {
            var numMembers = members.length;
            sb.push("export {\n");
            var indentLevel = ++this.indentLevel;
            index_1.indent(sb, indentLevel);
            this.visitExportMember(members[0]);
            for (var i = 1; i < numMembers; ++i) {
                sb.push(",\n");
                index_1.indent(sb, indentLevel);
                this.visitExportMember(members[i]);
            }
            --this.indentLevel;
            sb.push("\n}");
        }
        else {
            sb.push("export {}");
        }
        var path = node.path;
        if (path) {
            sb.push(" from ");
            this.visitStringLiteralExpression(path);
        }
        sb.push(";");
    };
    ASTBuilder.prototype.visitExportDefaultStatement = function (node) {
        var declaration = node.declaration;
        switch (declaration.kind) {
            case ast_1.NodeKind.ENUMDECLARATION: {
                this.visitEnumDeclaration(declaration, true);
                break;
            }
            case ast_1.NodeKind.FUNCTIONDECLARATION: {
                this.visitFunctionDeclaration(declaration, true);
                break;
            }
            case ast_1.NodeKind.CLASSDECLARATION: {
                this.visitClassDeclaration(declaration, true);
                break;
            }
            case ast_1.NodeKind.INTERFACEDECLARATION: {
                this.visitInterfaceDeclaration(declaration, true);
                break;
            }
            case ast_1.NodeKind.NAMESPACEDECLARATION: {
                this.visitNamespaceDeclaration(declaration, true);
                break;
            }
            default: assert(false);
        }
    };
    ASTBuilder.prototype.visitExpressionStatement = function (node) {
        this.visitNode(node.expression);
    };
    ASTBuilder.prototype.visitFieldDeclaration = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        this.serializeAccessModifiers(node);
        this.visitIdentifierExpression(node.name);
        var sb = this.sb;
        if (node.flags & common_1.CommonFlags.DEFINITE_ASSIGNMENT) {
            sb.push("!");
        }
        var type = node.type;
        if (type) {
            sb.push(": ");
            this.visitTypeNode(type);
        }
        var initializer = node.initializer;
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    };
    ASTBuilder.prototype.visitForStatement = function (node) {
        var sb = this.sb;
        sb.push("for (");
        var initializer = node.initializer;
        if (initializer) {
            this.visitNode(initializer);
        }
        var condition = node.condition;
        if (condition) {
            sb.push("; ");
            this.visitNode(condition);
        }
        else {
            sb.push(";");
        }
        var incrementor = node.incrementor;
        if (incrementor) {
            sb.push("; ");
            this.visitNode(incrementor);
        }
        else {
            sb.push(";");
        }
        sb.push(") ");
        this.visitNode(node.statement);
    };
    ASTBuilder.prototype.visitFunctionDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var sb = this.sb;
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
            this.serializeAccessModifiers(node);
        }
        if (node.name.text.length) {
            sb.push("function ");
        }
        else {
            sb.push("function");
        }
        this.visitFunctionCommon(node);
    };
    ASTBuilder.prototype.visitFunctionCommon = function (node) {
        var sb = this.sb;
        this.visitIdentifierExpression(node.name);
        var signature = node.signature;
        var typeParameters = node.typeParameters;
        if (typeParameters) {
            var numTypeParameters = typeParameters.length;
            if (numTypeParameters) {
                sb.push("<");
                this.visitTypeParameter(typeParameters[0]);
                for (var i = 1; i < numTypeParameters; ++i) {
                    sb.push(", ");
                    this.visitTypeParameter(typeParameters[i]);
                }
                sb.push(">");
            }
        }
        if (node.arrowKind == 2 /* ARROW_SINGLE */) {
            var parameters = signature.parameters;
            assert(parameters.length == 1);
            assert(!signature.explicitThisType);
            this.serializeParameter(parameters[0]);
        }
        else {
            sb.push("(");
            var parameters = signature.parameters;
            var numParameters = parameters.length;
            var explicitThisType = signature.explicitThisType;
            if (explicitThisType) {
                sb.push("this: ");
                this.visitTypeNode(explicitThisType);
            }
            if (numParameters) {
                if (explicitThisType)
                    sb.push(", ");
                this.serializeParameter(parameters[0]);
                for (var i = 1; i < numParameters; ++i) {
                    sb.push(", ");
                    this.serializeParameter(parameters[i]);
                }
            }
        }
        var body = node.body;
        var returnType = signature.returnType;
        if (node.arrowKind) {
            if (body) {
                if (node.arrowKind == 2 /* ARROW_SINGLE */) {
                    assert(ast_1.isTypeOmitted(returnType));
                }
                else {
                    if (ast_1.isTypeOmitted(returnType)) {
                        sb.push(")");
                    }
                    else {
                        sb.push("): ");
                        this.visitTypeNode(returnType);
                    }
                }
                sb.push(" => ");
                this.visitNode(body);
            }
            else {
                assert(!ast_1.isTypeOmitted(returnType));
                sb.push(" => ");
                this.visitTypeNode(returnType);
            }
        }
        else {
            if (!ast_1.isTypeOmitted(returnType) &&
                !node.isAny(common_1.CommonFlags.CONSTRUCTOR | common_1.CommonFlags.SET)) {
                sb.push("): ");
                this.visitTypeNode(returnType);
            }
            else {
                sb.push(")");
            }
            if (body) {
                sb.push(" ");
                this.visitNode(body);
            }
        }
    };
    ASTBuilder.prototype.visitIfStatement = function (node) {
        var sb = this.sb;
        sb.push("if (");
        this.visitNode(node.condition);
        sb.push(") ");
        var ifTrue = node.ifTrue;
        this.visitNode(ifTrue);
        if (ifTrue.kind != ast_1.NodeKind.BLOCK) {
            sb.push(";\n");
        }
        var ifFalse = node.ifFalse;
        if (ifFalse) {
            if (ifTrue.kind == ast_1.NodeKind.BLOCK) {
                sb.push(" else ");
            }
            else {
                sb.push("else ");
            }
            this.visitNode(ifFalse);
        }
    };
    ASTBuilder.prototype.visitImportDeclaration = function (node) {
        var externalName = node.foreignName;
        var name = node.name;
        this.visitIdentifierExpression(externalName);
        if (externalName.text != name.text) {
            this.sb.push(" as ");
            this.visitIdentifierExpression(name);
        }
    };
    ASTBuilder.prototype.visitImportStatement = function (node) {
        var sb = this.sb;
        sb.push("import ");
        var declarations = node.declarations;
        var namespaceName = node.namespaceName;
        if (declarations) {
            var numDeclarations = declarations.length;
            if (numDeclarations) {
                sb.push("{\n");
                var indentLevel = ++this.indentLevel;
                index_1.indent(sb, indentLevel);
                this.visitImportDeclaration(declarations[0]);
                for (var i = 1; i < numDeclarations; ++i) {
                    sb.push(",\n");
                    index_1.indent(sb, indentLevel);
                    this.visitImportDeclaration(declarations[i]);
                }
                --this.indentLevel;
                sb.push("\n} from ");
            }
            else {
                sb.push("{} from ");
            }
        }
        else if (namespaceName) {
            sb.push("* as ");
            this.visitIdentifierExpression(namespaceName);
            sb.push(" from ");
        }
        this.visitStringLiteralExpression(node.path);
    };
    ASTBuilder.prototype.visitIndexSignatureDeclaration = function (node) {
        var sb = this.sb;
        sb.push("[key: ");
        this.visitTypeNode(node.keyType);
        sb.push("]: ");
        this.visitTypeNode(node.valueType);
    };
    ASTBuilder.prototype.visitInterfaceDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        sb.push("interface ");
        this.visitIdentifierExpression(node.name);
        var typeParameters = node.typeParameters;
        if (typeParameters && typeParameters.length) {
            sb.push("<");
            this.visitTypeParameter(typeParameters[0]);
            for (var i = 1, k = typeParameters.length; i < k; ++i) {
                sb.push(", ");
                this.visitTypeParameter(typeParameters[i]);
            }
            sb.push(">");
        }
        var extendsType = node.extendsType;
        if (extendsType) {
            sb.push(" extends ");
            this.visitTypeNode(extendsType);
        }
        // must not have implementsTypes
        sb.push(" {\n");
        var indentLevel = ++this.indentLevel;
        var members = node.members;
        for (var i = 0, k = members.length; i < k; ++i) {
            index_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(members[i]);
        }
        --this.indentLevel;
        sb.push("}");
    };
    ASTBuilder.prototype.visitMethodDeclaration = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        this.serializeAccessModifiers(node);
        if (node.is(common_1.CommonFlags.GET)) {
            this.sb.push("get ");
        }
        else if (node.is(common_1.CommonFlags.SET)) {
            this.sb.push("set ");
        }
        this.visitFunctionCommon(node);
    };
    ASTBuilder.prototype.visitNamespaceDeclaration = function (node, isDefault) {
        if (isDefault === void 0) { isDefault = false; }
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        if (isDefault) {
            sb.push("export default ");
        }
        else {
            this.serializeExternalModifiers(node);
        }
        sb.push("namespace ");
        this.visitIdentifierExpression(node.name);
        var members = node.members;
        var numMembers = members.length;
        if (numMembers) {
            sb.push(" {\n");
            var indentLevel = ++this.indentLevel;
            for (var i = 0, k = members.length; i < k; ++i) {
                index_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(members[i]);
            }
            index_1.indent(sb, --this.indentLevel);
            sb.push("}");
        }
        else {
            sb.push(" {}");
        }
    };
    ASTBuilder.prototype.visitReturnStatement = function (node) {
        var value = node.value;
        if (value) {
            this.sb.push("return ");
            this.visitNode(value);
        }
        else {
            this.sb.push("return");
        }
    };
    ASTBuilder.prototype.visitSwitchCase = function (node) {
        var sb = this.sb;
        var label = node.label;
        if (label) {
            sb.push("case ");
            this.visitNode(label);
            sb.push(":\n");
        }
        else {
            sb.push("default:\n");
        }
        var statements = node.statements;
        var numStatements = statements.length;
        if (numStatements) {
            var indentLevel = ++this.indentLevel;
            index_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[0]);
            for (var i = 1; i < numStatements; ++i) {
                index_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(statements[i]);
            }
            --this.indentLevel;
        }
    };
    ASTBuilder.prototype.visitSwitchStatement = function (node) {
        var sb = this.sb;
        sb.push("switch (");
        this.visitNode(node.condition);
        sb.push(") {\n");
        var indentLevel = ++this.indentLevel;
        var cases = node.cases;
        for (var i = 0, k = cases.length; i < k; ++i) {
            index_1.indent(sb, indentLevel);
            this.visitSwitchCase(cases[i]);
            sb.push("\n");
        }
        --this.indentLevel;
        sb.push("}");
    };
    ASTBuilder.prototype.visitThrowStatement = function (node) {
        this.sb.push("throw ");
        this.visitNode(node.value);
    };
    ASTBuilder.prototype.visitTryStatement = function (node) {
        var sb = this.sb;
        sb.push("try {\n");
        var indentLevel = ++this.indentLevel;
        var statements = node.statements;
        for (var i = 0, k = statements.length; i < k; ++i) {
            index_1.indent(sb, indentLevel);
            this.visitNodeAndTerminate(statements[i]);
        }
        var catchVariable = node.catchVariable;
        if (catchVariable) {
            index_1.indent(sb, indentLevel - 1);
            sb.push("} catch (");
            this.visitIdentifierExpression(catchVariable);
            sb.push(") {\n");
            var catchStatements = node.catchStatements;
            if (catchStatements) {
                for (var i = 0, k = catchStatements.length; i < k; ++i) {
                    index_1.indent(sb, indentLevel);
                    this.visitNodeAndTerminate(catchStatements[i]);
                }
            }
        }
        var finallyStatements = node.finallyStatements;
        if (finallyStatements) {
            index_1.indent(sb, indentLevel - 1);
            sb.push("} finally {\n");
            for (var i = 0, k = finallyStatements.length; i < k; ++i) {
                index_1.indent(sb, indentLevel);
                this.visitNodeAndTerminate(finallyStatements[i]);
            }
        }
        index_1.indent(sb, indentLevel - 1);
        sb.push("}");
    };
    ASTBuilder.prototype.visitTypeDeclaration = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        this.serializeExternalModifiers(node);
        sb.push("type ");
        this.visitIdentifierExpression(node.name);
        var typeParameters = node.typeParameters;
        if (typeParameters) {
            var numTypeParameters = typeParameters.length;
            if (numTypeParameters) {
                sb.push("<");
                for (var i = 0; i < numTypeParameters; ++i) {
                    this.visitTypeParameter(typeParameters[i]);
                }
                sb.push(">");
            }
        }
        sb.push(" = ");
        this.visitTypeNode(node.type);
    };
    ASTBuilder.prototype.visitVariableDeclaration = function (node) {
        this.visitIdentifierExpression(node.name);
        var type = node.type;
        var sb = this.sb;
        if (node.flags & common_1.CommonFlags.DEFINITE_ASSIGNMENT) {
            sb.push("!");
        }
        if (type) {
            sb.push(": ");
            this.visitTypeNode(type);
        }
        var initializer = node.initializer;
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    };
    ASTBuilder.prototype.visitVariableStatement = function (node) {
        var decorators = node.decorators;
        if (decorators) {
            for (var i = 0, k = decorators.length; i < k; ++i) {
                this.serializeDecorator(decorators[i]);
            }
        }
        var sb = this.sb;
        var declarations = node.declarations;
        var numDeclarations = assert(declarations.length);
        var firstDeclaration = declarations[0];
        this.serializeExternalModifiers(firstDeclaration);
        sb.push(firstDeclaration.is(common_1.CommonFlags.CONST) ? "const " : firstDeclaration.is(common_1.CommonFlags.LET) ? "let " : "var ");
        this.visitVariableDeclaration(node.declarations[0]);
        for (var i = 1; i < numDeclarations; ++i) {
            sb.push(", ");
            this.visitVariableDeclaration(node.declarations[i]);
        }
    };
    ASTBuilder.prototype.visitWhileStatement = function (node) {
        var sb = this.sb;
        sb.push("while (");
        this.visitNode(node.condition);
        var statement = node.statement;
        if (statement.kind == ast_1.NodeKind.EMPTY) {
            sb.push(")");
        }
        else {
            sb.push(") ");
            this.visitNode(node.statement);
        }
    };
    // other
    ASTBuilder.prototype.serializeDecorator = function (node) {
        var sb = this.sb;
        sb.push("@");
        this.visitNode(node.name);
        var args = node.arguments;
        if (args) {
            sb.push("(");
            var numArgs = args.length;
            if (numArgs) {
                this.visitNode(args[0]);
                for (var i = 1; i < numArgs; ++i) {
                    sb.push(", ");
                    this.visitNode(args[i]);
                }
            }
            sb.push(")\n");
        }
        else {
            sb.push("\n");
        }
        index_1.indent(sb, this.indentLevel);
    };
    ASTBuilder.prototype.serializeParameter = function (node) {
        var sb = this.sb;
        var kind = node.parameterKind;
        var implicitFieldDeclaration = node.implicitFieldDeclaration;
        if (implicitFieldDeclaration) {
            this.serializeAccessModifiers(implicitFieldDeclaration);
        }
        if (kind == ast_1.ParameterKind.REST) {
            sb.push("...");
        }
        this.visitIdentifierExpression(node.name);
        var type = node.type;
        var initializer = node.initializer;
        if (type) {
            if (kind == ast_1.ParameterKind.OPTIONAL && !initializer)
                sb.push("?");
            if (!ast_1.isTypeOmitted(type)) {
                sb.push(": ");
                this.visitTypeNode(type);
            }
        }
        if (initializer) {
            sb.push(" = ");
            this.visitNode(initializer);
        }
    };
    ASTBuilder.prototype.serializeExternalModifiers = function (node) {
        var sb = this.sb;
        if (node.is(common_1.CommonFlags.EXPORT)) {
            sb.push("export ");
        }
        else if (node.is(common_1.CommonFlags.IMPORT)) {
            sb.push("import ");
        }
        else if (node.is(common_1.CommonFlags.DECLARE)) {
            sb.push("declare ");
        }
    };
    ASTBuilder.prototype.serializeAccessModifiers = function (node) {
        var sb = this.sb;
        if (node.is(common_1.CommonFlags.PUBLIC)) {
            sb.push("public ");
        }
        else if (node.is(common_1.CommonFlags.PRIVATE)) {
            sb.push("private ");
        }
        else if (node.is(common_1.CommonFlags.PROTECTED)) {
            sb.push("protected ");
        }
        if (node.is(common_1.CommonFlags.STATIC)) {
            sb.push("static ");
        }
        else if (node.is(common_1.CommonFlags.ABSTRACT)) {
            sb.push("abstract ");
        }
        if (node.is(common_1.CommonFlags.READONLY)) {
            sb.push("readonly ");
        }
    };
    ASTBuilder.prototype.finish = function () {
        var ret = this.sb.join("");
        this.sb = [];
        return ret;
    };
    return ASTBuilder;
}());
exports.ASTBuilder = ASTBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zb3VyY2VCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOERBMEVnRDtBQUVoRCw2REFBMkQ7QUFDM0QsNERBQTBEO0FBQzFELDBEQUF3RDtBQUV4RCxvRUFBd0U7QUFFeEUsdUVBQWlGO0FBRWpGLDBFQUF1RjtBQUN2RixzQkFBc0I7QUFDdEI7SUFBQTtRQVNVLE9BQUUsR0FBYSxFQUFFLENBQUM7UUFDbEIsZ0JBQVcsR0FBUSxDQUFDLENBQUM7SUE2K0MvQixDQUFDO0lBci9DQyw4RUFBOEU7SUFDdkUsZ0JBQUssR0FBWixVQUFhLElBQVU7UUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUMvQixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFLRCw4QkFBUyxHQUFULFVBQVUsSUFBVTtRQUNsQixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxjQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQVMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE1BQU07YUFDUDtZQUVELFFBQVE7WUFFUixLQUFLLGNBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFnQixJQUFJLENBQUMsQ0FBQztnQkFDN0MsTUFBTTthQUNQO1lBQ0QsS0FBSyxjQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxxQkFBcUIsQ0FBbUIsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELE1BQU07YUFDUDtZQUNELEtBQUssY0FBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQW9CLElBQUksQ0FBQyxD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QjtJQUNILENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0UsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUF2L0NELElBdS9DQztBQXYvQ1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEZWNsYXJhdGlvblN0YXRlbWVudCxcbiAgTm9kZSxcbiAgTm9kZUtpbmQsXG4gIFNvdXJjZSxcbiAgTmFtZWRUeXBlTm9kZSxcbiAgRnVuY3Rpb25UeXBlTm9kZSxcbiAgVHlwZVBhcmFtZXRlck5vZGUsXG4gIElkZW50aWZpZXJFeHByZXNzaW9uLFxuICBBc3NlcnRpb25FeHByZXNzaW9uLFxuICBCaW5hcnlFeHByZXNzaW9uLFxuICBDYWxsRXhwcmVzc2lvbixcbiAgQ2xhc3NFeHByZXNzaW9uLFxuICBDb21tYUV4cHJlc3Npb24sXG4gIEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uLFxuICBGdW5jdGlvbkV4cHJlc3Npb24sXG4gIEluc3RhbmNlT2ZFeHByZXNzaW9uLFxuICBMaXRlcmFsRXhwcmVzc2lvbixcbiAgTmV3RXhwcmVzc2lvbixcbiAgUGFyZW50aGVzaXplZEV4cHJlc3Npb24sXG4gIFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbixcbiAgVGVybmFyeUV4cHJlc3Npb24sXG4gIFVuYXJ5UG9zdGZpeEV4cHJlc3Npb24sXG4gIFVuYXJ5UHJlZml4RXhwcmVzc2lvbixcbiAgQmxvY2tTdGF0ZW1lbnQsXG4gIEJyZWFrU3RhdGVtZW50LFxuICBDb250aW51ZVN0YXRlbWVudCxcbiAgRG9TdGF0ZW1lbnQsXG4gIEVtcHR5U3RhdGVtZW50LFxuICBFeHBvcnRTdGF0ZW1lbnQsXG4gIEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQsXG4gIEV4cG9ydEltcG9ydFN0YXRlbWVudCxcbiAgRXhwcmVzc2lvblN0YXRlbWVudCxcbiAgRm9yU3RhdGVtZW50LFxuICBJZlN0YXRlbWVudCxcbiAgSW1wb3J0U3RhdGVtZW50LFxuICBSZXR1cm5TdGF0ZW1lbnQsXG4gIFN3aXRjaFN0YXRlbWVudCxcbiAgVGhyb3dTdGF0ZW1lbnQsXG4gIFRyeVN0YXRlbWVudCxcbiAgVmFyaWFibGVTdGF0ZW1lbnQsXG4gIFdoaWxlU3RhdGVtZW50LFxuICBDbGFzc0RlY2xhcmF0aW9uLFxuICBFbnVtRGVjbGFyYXRpb24sXG4gIEVudW1WYWx1ZURlY2xhcmF0aW9uLFxuICBGaWVsZERlY2xhcmF0aW9uLFxuICBGdW5jdGlvbkRlY2xhcmF0aW9uLFxuICBJbXBvcnREZWNsYXJhdGlvbixcbiAgSW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbixcbiAgSW50ZXJmYWNlRGVjbGFyYXRpb24sXG4gIE1ldGhvZERlY2xhcmF0aW9uLFxuICBOYW1lc3BhY2VEZWNsYXJhdGlvbixcbiAgVHlwZURlY2xhcmF0aW9uLFxuICBWYXJpYWJsZURlY2xhcmF0aW9uLFxuICBEZWNvcmF0b3JOb2RlLFxuICBFeHBvcnRNZW1iZXIsXG4gIFBhcmFtZXRlck5vZGUsXG4gIFN3aXRjaENhc2UsXG4gIFR5cGVOb2RlLFxuICBUeXBlTmFtZSxcbiAgQXJyYXlMaXRlcmFsRXhwcmVzc2lvbixcbiAgRXhwcmVzc2lvbixcbiAgT2JqZWN0TGl0ZXJhbEV4cHJlc3Npb24sXG4gIEFzc2VydGlvbktpbmQsXG4gIExpdGVyYWxLaW5kLFxuICBGbG9hdExpdGVyYWxFeHByZXNzaW9uLFxuICBJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24sXG4gIFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uLFxuICBSZWdleHBMaXRlcmFsRXhwcmVzc2lvbixcbiAgVW5hcnlFeHByZXNzaW9uLFxuICBTdGF0ZW1lbnQsXG4gIEFycm93S2luZCxcbiAgaXNUeXBlT21pdHRlZCxcbiAgUGFyYW1ldGVyS2luZFxufSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3NyYy9hc3RcIjtcblxuaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3N0ZC9wb3J0YWJsZS9pbmRleFwiO1xuaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3NyYy9nbHVlL2pzL2Zsb2F0XCI7XG5pbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvYXNzZW1ibHlzY3JpcHQvc3JjL2dsdWUvanMvaTY0XCI7XG5cbmltcG9ydCB7IENvbW1vbkZsYWdzIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9hc3NlbWJseXNjcmlwdC9zcmMvY29tbW9uXCI7XG5cbmltcG9ydCB7IGluZGVudCwgQ2hhckNvZGUgfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Fzc2VtYmx5c2NyaXB0L3NyYy91dGlsL2luZGV4XCI7XG5cbmltcG9ydCB7ICBvcGVyYXRvclRva2VuVG9TdHJpbmcsIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9hc3NlbWJseXNjcmlwdC9zcmMvdG9rZW5pemVyXCI7XG4vKiogQW4gQVNUIGJ1aWxkZXIuICovXG5leHBvcnQgY2xhc3MgQVNUQnVpbGRlciB7XG5cbiAgLyoqIFJlYnVpbGRzIHRoZSB0ZXh0dWFsIHNvdXJjZSBmcm9tIHRoZSBzcGVjaWZpZWQgQVNULCBhcyBmYXIgYXMgcG9zc2libGUuICovXG4gIHN0YXRpYyBidWlsZChub2RlOiBOb2RlKTogc3RyaW5nIHtcbiAgICB2YXIgYnVpbGRlciA9IG5ldyBBU1RCdWlsZGVyKCk7XG4gICAgYnVpbGRlci52aXNpdE5vZGUobm9kZSk7XG4gICAgcmV0dXJuIGJ1aWxkZXIuZmluaXNoKCk7XG4gIH1cblxuICBwcml2YXRlIHNiOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGluZGVudExldmVsOiBpMzIgPSAwO1xuXG4gIHZpc2l0Tm9kZShub2RlOiBOb2RlKTogdm9pZCB7XG4gICAgc3dpdGNoIChub2RlLmtpbmQpIHtcbiAgICAgIGNhc2UgTm9kZUtpbmQuU09VUkNFOiB7XG4gICAgICAgIHRoaXMudmlzaXRTb3VyY2UoPFNvdXJjZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIHR5cGVzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRURUWVBFOiB7XG4gICAgICAgIHRoaXMudmlzaXROYW1lZFR5cGVOb2RlKDxOYW1lZFR5cGVOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRlVOQ1RJT05UWVBFOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvblR5cGVOb2RlKDxGdW5jdGlvblR5cGVOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVFlQRVBBUkFNRVRFUjoge1xuICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcig8VHlwZVBhcmFtZXRlck5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBleHByZXNzaW9uc1xuXG4gICAgICBjYXNlIE5vZGVLaW5kLkZBTFNFOlxuICAgICAgY2FzZSBOb2RlS2luZC5OVUxMOlxuICAgICAgY2FzZSBOb2RlS2luZC5TVVBFUjpcbiAgICAgIGNhc2UgTm9kZUtpbmQuVEhJUzpcbiAgICAgIGNhc2UgTm9kZUtpbmQuVFJVRTpcbiAgICAgIGNhc2UgTm9kZUtpbmQuQ09OU1RSVUNUT1I6XG4gICAgICBjYXNlIE5vZGVLaW5kLklERU5USUZJRVI6IHtcbiAgICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKDxJZGVudGlmaWVyRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkFTU0VSVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0QXNzZXJ0aW9uRXhwcmVzc2lvbig8QXNzZXJ0aW9uRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkJJTkFSWToge1xuICAgICAgICB0aGlzLnZpc2l0QmluYXJ5RXhwcmVzc2lvbig8QmluYXJ5RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkNBTEw6IHtcbiAgICAgICAgdGhpcy52aXNpdENhbGxFeHByZXNzaW9uKDxDYWxsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkNMQVNTOiB7XG4gICAgICAgIHRoaXMudmlzaXRDbGFzc0V4cHJlc3Npb24oPENsYXNzRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTU1BOiB7XG4gICAgICAgIHRoaXMudmlzaXRDb21tYUV4cHJlc3Npb24oPENvbW1hRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVMRU1FTlRBQ0NFU1M6IHtcbiAgICAgICAgdGhpcy52aXNpdEVsZW1lbnRBY2Nlc3NFeHByZXNzaW9uKDxFbGVtZW50QWNjZXNzRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRGdW5jdGlvbkV4cHJlc3Npb24oPEZ1bmN0aW9uRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOU1RBTkNFT0Y6IHtcbiAgICAgICAgdGhpcy52aXNpdEluc3RhbmNlT2ZFeHByZXNzaW9uKDxJbnN0YW5jZU9mRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkxJVEVSQUw6IHtcbiAgICAgICAgdGhpcy52aXNpdExpdGVyYWxFeHByZXNzaW9uKDxMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk5FVzoge1xuICAgICAgICB0aGlzLnZpc2l0TmV3RXhwcmVzc2lvbig8TmV3RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBBUkVOVEhFU0laRUQ6IHtcbiAgICAgICAgdGhpcy52aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKDxQYXJlbnRoZXNpemVkRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlBST1BFUlRZQUNDRVNTOiB7XG4gICAgICAgIHRoaXMudmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24oPFByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRFUk5BUlk6IHtcbiAgICAgICAgdGhpcy52aXNpdFRlcm5hcnlFeHByZXNzaW9uKDxUZXJuYXJ5RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUE9TVEZJWDoge1xuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbig8VW5hcnlQb3N0Zml4RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUFJFRklYOiB7XG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVByZWZpeEV4cHJlc3Npb24oPFVuYXJ5UHJlZml4RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIHN0YXRlbWVudHNcblxuICAgICAgY2FzZSBOb2RlS2luZC5CTE9DSzoge1xuICAgICAgICB0aGlzLnZpc2l0QmxvY2tTdGF0ZW1lbnQoPEJsb2NrU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQlJFQUs6IHtcbiAgICAgICAgdGhpcy52aXNpdEJyZWFrU3RhdGVtZW50KDxCcmVha1N0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkNPTlRJTlVFOiB7XG4gICAgICAgIHRoaXMudmlzaXRDb250aW51ZVN0YXRlbWVudCg8Q29udGludWVTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5ETzoge1xuICAgICAgICB0aGlzLnZpc2l0RG9TdGF0ZW1lbnQoPERvU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRU1QVFk6IHtcbiAgICAgICAgdGhpcy52aXNpdEVtcHR5U3RhdGVtZW50KDxFbXB0eVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUE9SVDoge1xuICAgICAgICB0aGlzLnZpc2l0RXhwb3J0U3RhdGVtZW50KDxFeHBvcnRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRERUZBVUxUOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnREZWZhdWx0U3RhdGVtZW50KDxFeHBvcnREZWZhdWx0U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRVhQT1JUSU1QT1JUOiB7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRJbXBvcnRTdGF0ZW1lbnQoPEV4cG9ydEltcG9ydFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVYUFJFU1NJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cHJlc3Npb25TdGF0ZW1lbnQoPEV4cHJlc3Npb25TdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GT1I6IHtcbiAgICAgICAgdGhpcy52aXNpdEZvclN0YXRlbWVudCg8Rm9yU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSUY6IHtcbiAgICAgICAgdGhpcy52aXNpdElmU3RhdGVtZW50KDxJZlN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklNUE9SVDoge1xuICAgICAgICB0aGlzLnZpc2l0SW1wb3J0U3RhdGVtZW50KDxJbXBvcnRTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5SRVRVUk46IHtcbiAgICAgICAgdGhpcy52aXNpdFJldHVyblN0YXRlbWVudCg8UmV0dXJuU3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuU1dJVENIOiB7XG4gICAgICAgIHRoaXMudmlzaXRTd2l0Y2hTdGF0ZW1lbnQoPFN3aXRjaFN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRIUk9XOiB7XG4gICAgICAgIHRoaXMudmlzaXRUaHJvd1N0YXRlbWVudCg8VGhyb3dTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5UUlk6IHtcbiAgICAgICAgdGhpcy52aXNpdFRyeVN0YXRlbWVudCg8VHJ5U3RhdGVtZW50Pm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuVkFSSUFCTEU6IHtcbiAgICAgICAgdGhpcy52aXNpdFZhcmlhYmxlU3RhdGVtZW50KDxWYXJpYWJsZVN0YXRlbWVudD5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLldISUxFOiB7XG4gICAgICAgIHRoaXMudmlzaXRXaGlsZVN0YXRlbWVudCg8V2hpbGVTdGF0ZW1lbnQ+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBkZWNsYXJhdGlvbiBzdGF0ZW1lbnRzXG5cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1NERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbig8Q2xhc3NEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkVOVU1ERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RW51bURlY2xhcmF0aW9uKDxFbnVtRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNVkFMVUVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RW51bVZhbHVlRGVjbGFyYXRpb24oPEVudW1WYWx1ZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuRklFTERERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0RmllbGREZWNsYXJhdGlvbig8RmllbGREZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24oPEZ1bmN0aW9uRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTVBPUlRERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0SW1wb3J0RGVjbGFyYXRpb24oPEltcG9ydERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuSU5ERVhTSUdOQVRVUkVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0SW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbig8SW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLklOVEVSRkFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRJbnRlcmZhY2VEZWNsYXJhdGlvbig8SW50ZXJmYWNlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5NRVRIT0RERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0TWV0aG9kRGVjbGFyYXRpb24oPE1ldGhvZERlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuTkFNRVNQQUNFREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVzcGFjZURlY2xhcmF0aW9uKDxOYW1lc3BhY2VEZWNsYXJhdGlvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlRZUEVERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0VHlwZURlY2xhcmF0aW9uKDxUeXBlRGVjbGFyYXRpb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5WQVJJQUJMRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXRWYXJpYWJsZURlY2xhcmF0aW9uKDxWYXJpYWJsZURlY2xhcmF0aW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJcblxuICAgICAgY2FzZSBOb2RlS2luZC5ERUNPUkFUT1I6IHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoPERlY29yYXRvck5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5FWFBPUlRNRU1CRVI6IHtcbiAgICAgICAgdGhpcy52aXNpdEV4cG9ydE1lbWJlcig8RXhwb3J0TWVtYmVyPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuUEFSQU1FVEVSOiB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKDxQYXJhbWV0ZXJOb2RlPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuU1dJVENIQ0FTRToge1xuICAgICAgICB0aGlzLnZpc2l0U3dpdGNoQ2FzZSg8U3dpdGNoQ2FzZT5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiBhc3NlcnQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0U291cmNlKHNvdXJjZTogU291cmNlKTogdm9pZCB7XG4gICAgdmFyIHN0YXRlbWVudHMgPSBzb3VyY2Uuc3RhdGVtZW50cztcbiAgICBmb3IgKGxldCBpID0gMCwgayA9IHN0YXRlbWVudHMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShzdGF0ZW1lbnRzW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyB0eXBlc1xuXG4gIHZpc2l0VHlwZU5vZGUobm9kZTogVHlwZU5vZGUpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKG5vZGUua2luZCkge1xuICAgICAgY2FzZSBOb2RlS2luZC5OQU1FRFRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdE5hbWVkVHlwZU5vZGUoPE5hbWVkVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5GVU5DVElPTlRZUEU6IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uVHlwZU5vZGUoPEZ1bmN0aW9uVHlwZU5vZGU+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDogYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdFR5cGVOYW1lKG5vZGU6IFR5cGVOYW1lKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUuaWRlbnRpZmllcik7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgY3VycmVudCA9IG5vZGUubmV4dDtcbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgc2IucHVzaChcIi5cIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oY3VycmVudC5pZGVudGlmaWVyKTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICB9XG5cbiAgdmlzaXROYW1lZFR5cGVOb2RlKG5vZGU6IE5hbWVkVHlwZU5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0VHlwZU5hbWUobm9kZS5uYW1lKTtcbiAgICB2YXIgdHlwZUFyZ3VtZW50cyA9IG5vZGUudHlwZUFyZ3VtZW50cztcbiAgICBpZiAodHlwZUFyZ3VtZW50cykge1xuICAgICAgbGV0IG51bVR5cGVBcmd1bWVudHMgPSB0eXBlQXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIGxldCBzYiA9IHRoaXMuc2I7XG4gICAgICBpZiAobnVtVHlwZUFyZ3VtZW50cykge1xuICAgICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGVBcmd1bWVudHNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVR5cGVBcmd1bWVudHM7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZUFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgICB9XG4gICAgICBpZiAobm9kZS5pc051bGxhYmxlKSBzYi5wdXNoKFwiIHwgbnVsbFwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uVHlwZU5vZGUobm9kZTogRnVuY3Rpb25UeXBlTm9kZSk6IHZvaWQge1xuICAgIHZhciBpc051bGxhYmxlID0gbm9kZS5pc051bGxhYmxlO1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChpc051bGxhYmxlID8gXCIoKFwiIDogXCIoXCIpO1xuICAgIHZhciBleHBsaWNpdFRoaXNUeXBlID0gbm9kZS5leHBsaWNpdFRoaXNUeXBlO1xuICAgIGlmIChleHBsaWNpdFRoaXNUeXBlKSB7XG4gICAgICBzYi5wdXNoKFwidGhpczogXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGV4cGxpY2l0VGhpc1R5cGUpO1xuICAgIH1cbiAgICB2YXIgcGFyYW1ldGVycyA9IG5vZGUucGFyYW1ldGVycztcbiAgICB2YXIgbnVtUGFyYW1ldGVycyA9IHBhcmFtZXRlcnMubGVuZ3RoO1xuICAgIGlmIChudW1QYXJhbWV0ZXJzKSB7XG4gICAgICBpZiAoZXhwbGljaXRUaGlzVHlwZSkgc2IucHVzaChcIiwgXCIpO1xuICAgICAgdGhpcy5zZXJpYWxpemVQYXJhbWV0ZXIocGFyYW1ldGVyc1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVBhcmFtZXRlcnM7ICsraSkge1xuICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmV0dXJuVHlwZSA9IG5vZGUucmV0dXJuVHlwZTtcbiAgICBpZiAocmV0dXJuVHlwZSkge1xuICAgICAgc2IucHVzaChcIikgPT4gXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHJldHVyblR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiKSA9PiB2b2lkXCIpO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsYWJsZSkgc2IucHVzaChcIikgfCBudWxsXCIpO1xuICB9XG5cbiAgdmlzaXRUeXBlUGFyYW1ldGVyKG5vZGU6IFR5cGVQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIGV4dGVuZHNUeXBlID0gbm9kZS5leHRlbmRzVHlwZTtcbiAgICBpZiAoZXh0ZW5kc1R5cGUpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcIiBleHRlbmRzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShleHRlbmRzVHlwZSk7XG4gICAgfVxuICAgIHZhciBkZWZhdWx0VHlwZSA9IG5vZGUuZGVmYXVsdFR5cGU7XG4gICAgaWYgKGRlZmF1bHRUeXBlKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCI9XCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGRlZmF1bHRUeXBlKTtcbiAgICB9XG4gIH1cblxuICAvLyBleHByZXNzaW9uc1xuXG4gIHZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZTogSWRlbnRpZmllckV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICBpZiAobm9kZS5pc1F1b3RlZCkgdGhpcy52aXNpdFN0cmluZ0xpdGVyYWwobm9kZS50ZXh0KTtcbiAgICBlbHNlIHRoaXMuc2IucHVzaChub2RlLnRleHQpO1xuICB9XG5cbiAgdmlzaXRBcnJheUxpdGVyYWxFeHByZXNzaW9uKG5vZGU6IEFycmF5TGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJbXCIpO1xuICAgIHZhciBlbGVtZW50cyA9IG5vZGUuZWxlbWVudEV4cHJlc3Npb25zO1xuICAgIHZhciBudW1FbGVtZW50cyA9IGVsZW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobnVtRWxlbWVudHMpIHtcbiAgICAgIGlmIChlbGVtZW50c1swXSkgdGhpcy52aXNpdE5vZGUoPEV4cHJlc3Npb24+ZWxlbWVudHNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1FbGVtZW50czsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldKSB0aGlzLnZpc2l0Tm9kZSg8RXhwcmVzc2lvbj5lbGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNiLnB1c2goXCJdXCIpO1xuICB9XG5cbiAgdmlzaXRPYmplY3RMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBPYmplY3RMaXRlcmFsRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIG5hbWVzID0gbm9kZS5uYW1lcztcbiAgICB2YXIgdmFsdWVzID0gbm9kZS52YWx1ZXM7XG4gICAgdmFyIG51bUVsZW1lbnRzID0gbmFtZXMubGVuZ3RoO1xuICAgIGFzc2VydChudW1FbGVtZW50cyA9PSB2YWx1ZXMubGVuZ3RoKTtcbiAgICBpZiAobnVtRWxlbWVudHMpIHtcbiAgICAgIHNiLnB1c2goXCJ7XFxuXCIpO1xuICAgICAgaW5kZW50KHNiLCArK3RoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdE5vZGUobmFtZXNbMF0pO1xuICAgICAgc2IucHVzaChcIjogXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUodmFsdWVzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtRWxlbWVudHM7ICsraSkge1xuICAgICAgICBzYi5wdXNoKFwiLFxcblwiKTtcbiAgICAgICAgaW5kZW50KHNiLCB0aGlzLmluZGVudExldmVsKTtcbiAgICAgICAgbGV0IG5hbWUgPSBuYW1lc1tpXTtcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICBpZiAobmFtZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZShuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZShuYW1lKTtcbiAgICAgICAgICBzYi5wdXNoKFwiOiBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzYi5wdXNoKFwiXFxuXCIpO1xuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJ7fVwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEFzc2VydGlvbkV4cHJlc3Npb24obm9kZTogQXNzZXJ0aW9uRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc3dpdGNoIChub2RlLmFzc2VydGlvbktpbmQpIHtcbiAgICAgIGNhc2UgQXNzZXJ0aW9uS2luZC5QUkVGSVg6IHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShhc3NlcnQobm9kZS50b1R5cGUpKTtcbiAgICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLkFTOiB7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgICAgIHNiLnB1c2goXCIgYXMgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoYXNzZXJ0KG5vZGUudG9UeXBlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBBc3NlcnRpb25LaW5kLk5PTk5VTEw6IHtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICAgICAgc2IucHVzaChcIiFcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDogYXNzZXJ0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEJpbmFyeUV4cHJlc3Npb24obm9kZTogQmluYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5sZWZ0KTtcbiAgICBzYi5wdXNoKFwiIFwiKTtcbiAgICBzYi5wdXNoKG9wZXJhdG9yVG9rZW5Ub1N0cmluZyhub2RlLm9wZXJhdG9yKSk7XG4gICAgc2IucHVzaChcIiBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5yaWdodCk7XG4gIH1cblxuICB2aXNpdENhbGxFeHByZXNzaW9uKG5vZGU6IENhbGxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xuICAgIHZhciB0eXBlQXJndW1lbnRzID0gbm9kZS50eXBlQXJndW1lbnRzO1xuICAgIGlmICh0eXBlQXJndW1lbnRzKSB7XG4gICAgICBsZXQgbnVtVHlwZUFyZ3VtZW50cyA9IHR5cGVBcmd1bWVudHMubGVuZ3RoO1xuICAgICAgaWYgKG51bVR5cGVBcmd1bWVudHMpIHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlQXJndW1lbnRzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1UeXBlQXJndW1lbnRzOyArK2kpIHtcbiAgICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGVBcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHNiLnB1c2goXCI+KFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIihcIik7XG4gICAgfVxuICAgIHZhciBhcmdzID0gbm9kZS5hcmd1bWVudHM7XG4gICAgdmFyIG51bUFyZ3MgPSBhcmdzLmxlbmd0aDtcbiAgICBpZiAobnVtQXJncykge1xuICAgICAgdGhpcy52aXNpdE5vZGUoYXJnc1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUFyZ3M7ICsraSkge1xuICAgICAgICBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKGFyZ3NbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBzYi5wdXNoKFwiKVwiKTtcbiAgfVxuXG4gIHZpc2l0Q2xhc3NFeHByZXNzaW9uKG5vZGU6IENsYXNzRXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHZhciBkZWNsYXJhdGlvbiA9IG5vZGUuZGVjbGFyYXRpb247XG4gICAgdGhpcy52aXNpdENsYXNzRGVjbGFyYXRpb24oZGVjbGFyYXRpb24pO1xuICB9XG5cbiAgdmlzaXRDb21tYUV4cHJlc3Npb24obm9kZTogQ29tbWFFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIGV4cHJlc3Npb25zID0gbm9kZS5leHByZXNzaW9ucztcbiAgICB2YXIgbnVtRXhwcmVzc2lvbnMgPSBhc3NlcnQoZXhwcmVzc2lvbnMubGVuZ3RoKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShleHByZXNzaW9uc1swXSk7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUV4cHJlc3Npb25zOyArK2kpIHtcbiAgICAgIHNiLnB1c2goXCIsXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUoZXhwcmVzc2lvbnNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RWxlbWVudEFjY2Vzc0V4cHJlc3Npb24obm9kZTogRWxlbWVudEFjY2Vzc0V4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuZXhwcmVzc2lvbik7XG4gICAgc2IucHVzaChcIltcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5lbGVtZW50RXhwcmVzc2lvbik7XG4gICAgc2IucHVzaChcIl1cIik7XG4gIH1cblxuICB2aXNpdEZ1bmN0aW9uRXhwcmVzc2lvbihub2RlOiBGdW5jdGlvbkV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgZGVjbGFyYXRpb24gPSBub2RlLmRlY2xhcmF0aW9uO1xuICAgIGlmICghZGVjbGFyYXRpb24uYXJyb3dLaW5kKSB7XG4gICAgICBpZiAoZGVjbGFyYXRpb24ubmFtZS50ZXh0Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNiLnB1c2goXCJmdW5jdGlvbiBcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNiLnB1c2goXCJmdW5jdGlvblwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXNzZXJ0KGRlY2xhcmF0aW9uLm5hbWUudGV4dC5sZW5ndGggPT0gMCk7XG4gICAgfVxuICAgIHRoaXMudmlzaXRGdW5jdGlvbkNvbW1vbihkZWNsYXJhdGlvbik7XG4gIH1cblxuICB2aXNpdExpdGVyYWxFeHByZXNzaW9uKG5vZGU6IExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgc3dpdGNoIChub2RlLmxpdGVyYWxLaW5kKSB7XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLkZMT0FUOiB7XG4gICAgICAgIHRoaXMudmlzaXRGbG9hdExpdGVyYWxFeHByZXNzaW9uKDxGbG9hdExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuSU5URUdFUjoge1xuICAgICAgICB0aGlzLnZpc2l0SW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKDxJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5TVFJJTkc6IHtcbiAgICAgICAgdGhpcy52aXNpdFN0cmluZ0xpdGVyYWxFeHByZXNzaW9uKDxTdHJpbmdMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExpdGVyYWxLaW5kLlJFR0VYUDoge1xuICAgICAgICB0aGlzLnZpc2l0UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24oPFJlZ2V4cExpdGVyYWxFeHByZXNzaW9uPm5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGl0ZXJhbEtpbmQuQVJSQVk6IHtcbiAgICAgICAgdGhpcy52aXNpdEFycmF5TGl0ZXJhbEV4cHJlc3Npb24oPEFycmF5TGl0ZXJhbEV4cHJlc3Npb24+bm9kZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBMaXRlcmFsS2luZC5PQkpFQ1Q6IHtcbiAgICAgICAgdGhpcy52aXNpdE9iamVjdExpdGVyYWxFeHByZXNzaW9uKDxPYmplY3RMaXRlcmFsRXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGFzc2VydChmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0RmxvYXRMaXRlcmFsRXhwcmVzc2lvbihub2RlOiBGbG9hdExpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy5zYi5wdXNoKG5vZGUudmFsdWUudG9TdHJpbmcoMTApKTtcbiAgfVxuXG4gIHZpc2l0SW5zdGFuY2VPZkV4cHJlc3Npb24obm9kZTogSW5zdGFuY2VPZkV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xuICAgIHRoaXMuc2IucHVzaChcIiBpbnN0YW5jZW9mIFwiKTtcbiAgICB0aGlzLnZpc2l0VHlwZU5vZGUobm9kZS5pc1R5cGUpO1xuICB9XG5cbiAgdmlzaXRJbnRlZ2VyTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogSW50ZWdlckxpdGVyYWxFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy5zYi5wdXNoKGk2NF90b19zdHJpbmcobm9kZS52YWx1ZSkpO1xuICB9XG5cbiAgdmlzaXRTdHJpbmdMaXRlcmFsKHN0cjogc3RyaW5nLCBzaW5nbGVRdW90ZWQ6IGJvb2wgPSBmYWxzZSk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdmFyIG9mZiA9IDA7XG4gICAgdmFyIHF1b3RlID0gc2luZ2xlUXVvdGVkID8gXCInXCIgOiBcIlxcXCJcIjtcbiAgICBzYi5wdXNoKHF1b3RlKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgZm9yIChsZXQgayA9IHN0ci5sZW5ndGg7IGkgPCBrOykge1xuICAgICAgc3dpdGNoIChzdHIuY2hhckNvZGVBdChpKSkge1xuICAgICAgICBjYXNlIENoYXJDb2RlLk5VTEw6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgb2ZmID0gaSArIDEpKTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXDBcIik7XG4gICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQkFDS1NQQUNFOiB7XG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFxiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuVEFCOiB7XG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFx0XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuTElORUZFRUQ6IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIG9mZiA9ICsraTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXG5cIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5WRVJUSUNBTFRBQjoge1xuICAgICAgICAgIGlmIChpID4gb2ZmKSBzYi5wdXNoKHN0ci5zdWJzdHJpbmcob2ZmLCBpKSk7XG4gICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcdlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIENoYXJDb2RlLkZPUk1GRUVEOiB7XG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgc2IucHVzaChcIlxcXFxmXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQ0FSUklBR0VSRVRVUk46IHtcbiAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgIHNiLnB1c2goXCJcXFxcclwiKTtcbiAgICAgICAgICBvZmYgPSArK2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBDaGFyQ29kZS5ET1VCTEVRVU9URToge1xuICAgICAgICAgIGlmICghc2luZ2xlUXVvdGVkKSB7XG4gICAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgICAgc2IucHVzaChcIlxcXFxcXFwiXCIpO1xuICAgICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuU0lOR0xFUVVPVEU6IHtcbiAgICAgICAgICBpZiAoc2luZ2xlUXVvdGVkKSB7XG4gICAgICAgICAgICBpZiAoaSA+IG9mZikgc2IucHVzaChzdHIuc3Vic3RyaW5nKG9mZiwgaSkpO1xuICAgICAgICAgICAgc2IucHVzaChcIlxcXFwnXCIpO1xuICAgICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgQ2hhckNvZGUuQkFDS1NMQVNIOiB7XG4gICAgICAgICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICAgICAgICBzYi5wdXNoKFwiXFxcXFxcXFxcIik7XG4gICAgICAgICAgb2ZmID0gKytpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICArK2k7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkgPiBvZmYpIHNiLnB1c2goc3RyLnN1YnN0cmluZyhvZmYsIGkpKTtcbiAgICBzYi5wdXNoKHF1b3RlKTtcbiAgfVxuXG4gIHZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogU3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbChub2RlLnZhbHVlKTtcbiAgfVxuXG4gIHZpc2l0UmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24obm9kZTogUmVnZXhwTGl0ZXJhbEV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCIvXCIpO1xuICAgIHNiLnB1c2gobm9kZS5wYXR0ZXJuKTtcbiAgICBzYi5wdXNoKFwiL1wiKTtcbiAgICBzYi5wdXNoKG5vZGUucGF0dGVybkZsYWdzKTtcbiAgfVxuXG4gIHZpc2l0TmV3RXhwcmVzc2lvbihub2RlOiBOZXdFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy5zYi5wdXNoKFwibmV3IFwiKTtcbiAgICB0aGlzLnZpc2l0Q2FsbEV4cHJlc3Npb24obm9kZSk7XG4gIH1cblxuICB2aXNpdFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKG5vZGU6IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiKFwiKTtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xuICAgIHNiLnB1c2goXCIpXCIpO1xuICB9XG5cbiAgdmlzaXRQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24obm9kZTogUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5leHByZXNzaW9uKTtcbiAgICB0aGlzLnNiLnB1c2goXCIuXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLnByb3BlcnR5KTtcbiAgfVxuXG4gIHZpc2l0VGVybmFyeUV4cHJlc3Npb24obm9kZTogVGVybmFyeUV4cHJlc3Npb24pOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcbiAgICBzYi5wdXNoKFwiID8gXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuaWZUaGVuKTtcbiAgICBzYi5wdXNoKFwiIDogXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuaWZFbHNlKTtcbiAgfVxuXG4gIHZpc2l0VW5hcnlFeHByZXNzaW9uKG5vZGU6IFVuYXJ5RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUE9TVEZJWDoge1xuICAgICAgICB0aGlzLnZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbig8VW5hcnlQb3N0Zml4RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLlVOQVJZUFJFRklYOiB7XG4gICAgICAgIHRoaXMudmlzaXRVbmFyeVByZWZpeEV4cHJlc3Npb24oPFVuYXJ5UHJlZml4RXhwcmVzc2lvbj5ub2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiBhc3NlcnQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VW5hcnlQb3N0Zml4RXhwcmVzc2lvbihub2RlOiBVbmFyeVBvc3RmaXhFeHByZXNzaW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5vcGVyYW5kKTtcbiAgICB0aGlzLnNiLnB1c2gob3BlcmF0b3JUb2tlblRvU3RyaW5nKG5vZGUub3BlcmF0b3IpKTtcbiAgfVxuXG4gIHZpc2l0VW5hcnlQcmVmaXhFeHByZXNzaW9uKG5vZGU6IFVuYXJ5UHJlZml4RXhwcmVzc2lvbik6IHZvaWQge1xuICAgIHRoaXMuc2IucHVzaChvcGVyYXRvclRva2VuVG9TdHJpbmcobm9kZS5vcGVyYXRvcikpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUub3BlcmFuZCk7XG4gIH1cblxuICAvLyBzdGF0ZW1lbnRzXG5cbiAgdmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudDogU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy52aXNpdE5vZGUoc3RhdGVtZW50KTtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIGlmIChcbiAgICAgICFzYi5sZW5ndGggfHwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxlYWRpbmcgRW1wdHlTdGF0ZW1lbnRcbiAgICAgIHN0YXRlbWVudC5raW5kID09IE5vZGVLaW5kLlZBUklBQkxFIHx8IC8vIHBvdGVudGlhbGx5IGFzc2lnbnMgYSBGdW5jdGlvbkV4cHJlc3Npb25cbiAgICAgIHN0YXRlbWVudC5raW5kID09IE5vZGVLaW5kLkVYUFJFU1NJT04gIC8vIHBvdGVudGlhbGx5IGFzc2lnbnMgYSBGdW5jdGlvbkV4cHJlc3Npb25cbiAgICApIHtcbiAgICAgIHNiLnB1c2goXCI7XFxuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbGFzdCA9IHNiW3NiLmxlbmd0aCAtIDFdO1xuICAgICAgbGV0IGxhc3RDaGFyUG9zID0gbGFzdC5sZW5ndGggLSAxO1xuICAgICAgaWYgKGxhc3RDaGFyUG9zID49IDAgJiYgKFxuICAgICAgICBsYXN0LmNoYXJDb2RlQXQobGFzdENoYXJQb3MpID09IENoYXJDb2RlLkNMT1NFQlJBQ0UgfHxcbiAgICAgICAgbGFzdC5jaGFyQ29kZUF0KGxhc3RDaGFyUG9zKSA9PSBDaGFyQ29kZS5TRU1JQ09MT04pXG4gICAgICApIHtcbiAgICAgICAgc2IucHVzaChcIlxcblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNiLnB1c2goXCI7XFxuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0QmxvY2tTdGF0ZW1lbnQobm9kZTogQmxvY2tTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBzdGF0ZW1lbnRzID0gbm9kZS5zdGF0ZW1lbnRzO1xuICAgIHZhciBudW1TdGF0ZW1lbnRzID0gc3RhdGVtZW50cy5sZW5ndGg7XG4gICAgaWYgKG51bVN0YXRlbWVudHMpIHtcbiAgICAgIHNiLnB1c2goXCJ7XFxuXCIpO1xuICAgICAgbGV0IGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TdGF0ZW1lbnRzOyArK2kpIHtcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbaV0pO1xuICAgICAgfVxuICAgICAgaW5kZW50KHNiLCAtLXRoaXMuaW5kZW50TGV2ZWwpO1xuICAgICAgc2IucHVzaChcIn1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCJ7fVwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEJyZWFrU3RhdGVtZW50KG5vZGU6IEJyZWFrU3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIGxhYmVsID0gbm9kZS5sYWJlbDtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcImJyZWFrIFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihsYWJlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2IucHVzaChcImJyZWFrXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0Q29udGludWVTdGF0ZW1lbnQobm9kZTogQ29udGludWVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgbGFiZWwgPSBub2RlLmxhYmVsO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiY29udGludWUgXCIpO1xuICAgICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKGxhYmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiY29udGludWVcIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IENsYXNzRGVjbGFyYXRpb24sIGlzRGVmYXVsdDogYm9vbCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKGlzRGVmYXVsdCkge1xuICAgICAgc2IucHVzaChcImV4cG9ydCBkZWZhdWx0IFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhub2RlKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuQUJTVFJBQ1QpKSBzYi5wdXNoKFwiYWJzdHJhY3QgXCIpO1xuICAgIGlmIChub2RlLm5hbWUudGV4dC5sZW5ndGgpIHtcbiAgICAgIHNiLnB1c2goXCJjbGFzcyBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcImNsYXNzXCIpO1xuICAgIH1cbiAgICB2YXIgdHlwZVBhcmFtZXRlcnMgPSBub2RlLnR5cGVQYXJhbWV0ZXJzO1xuICAgIGlmICh0eXBlUGFyYW1ldGVycyAmJiB0eXBlUGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgIHNiLnB1c2goXCI8XCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDEsIGsgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcih0eXBlUGFyYW1ldGVyc1tpXSk7XG4gICAgICB9XG4gICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICB9XG4gICAgdmFyIGV4dGVuZHNUeXBlID0gbm9kZS5leHRlbmRzVHlwZTtcbiAgICBpZiAoZXh0ZW5kc1R5cGUpIHtcbiAgICAgIHNiLnB1c2goXCIgZXh0ZW5kcyBcIik7XG4gICAgICB0aGlzLnZpc2l0VHlwZU5vZGUoZXh0ZW5kc1R5cGUpO1xuICAgIH1cbiAgICB2YXIgaW1wbGVtZW50c1R5cGVzID0gbm9kZS5pbXBsZW1lbnRzVHlwZXM7XG4gICAgaWYgKGltcGxlbWVudHNUeXBlcykge1xuICAgICAgbGV0IG51bUltcGxlbWVudHNUeXBlcyA9IGltcGxlbWVudHNUeXBlcy5sZW5ndGg7XG4gICAgICBpZiAobnVtSW1wbGVtZW50c1R5cGVzKSB7XG4gICAgICAgIHNiLnB1c2goXCIgaW1wbGVtZW50cyBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShpbXBsZW1lbnRzVHlwZXNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bUltcGxlbWVudHNUeXBlczsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShpbXBsZW1lbnRzVHlwZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xuICAgIHZhciBudW1NZW1iZXJzID0gbWVtYmVycy5sZW5ndGg7XG4gICAgaWYgKG51bU1lbWJlcnMpIHtcbiAgICAgIHNiLnB1c2goXCIge1xcblwiKTtcbiAgICAgIGxldCBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gbWVtYmVycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgbGV0IG1lbWJlciA9IG1lbWJlcnNbaV07XG4gICAgICAgIGlmIChtZW1iZXIua2luZCAhPSBOb2RlS2luZC5GSUVMRERFQ0xBUkFUSU9OIHx8ICg8RmllbGREZWNsYXJhdGlvbj5tZW1iZXIpLnBhcmFtZXRlckluZGV4IDwgMCkge1xuICAgICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKG1lbWJlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGluZGVudChzYiwgLS10aGlzLmluZGVudExldmVsKTtcbiAgICAgIHNiLnB1c2goXCJ9XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiIHt9XCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RG9TdGF0ZW1lbnQobm9kZTogRG9TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJkbyBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5zdGF0ZW1lbnQpO1xuICAgIGlmIChub2RlLnN0YXRlbWVudC5raW5kID09IE5vZGVLaW5kLkJMT0NLKSB7XG4gICAgICBzYi5wdXNoKFwiIHdoaWxlIChcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCI7XFxuXCIpO1xuICAgICAgaW5kZW50KHNiLCB0aGlzLmluZGVudExldmVsKTtcbiAgICAgIHNiLnB1c2goXCJ3aGlsZSAoXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmNvbmRpdGlvbik7XG4gICAgc2IucHVzaChcIilcIik7XG4gIH1cblxuICB2aXNpdEVtcHR5U3RhdGVtZW50KG5vZGU6IEVtcHR5U3RhdGVtZW50KTogdm9pZCB7XG4gIH1cblxuICB2aXNpdEVudW1EZWNsYXJhdGlvbihub2RlOiBFbnVtRGVjbGFyYXRpb24sIGlzRGVmYXVsdDogYm9vbCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5DT05TVCkpIHNiLnB1c2goXCJjb25zdCBcIik7XG4gICAgc2IucHVzaChcImVudW0gXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciB2YWx1ZXMgPSBub2RlLnZhbHVlcztcbiAgICB2YXIgbnVtVmFsdWVzID0gdmFsdWVzLmxlbmd0aDtcbiAgICBpZiAobnVtVmFsdWVzKSB7XG4gICAgICBzYi5wdXNoKFwiIHtcXG5cIik7XG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXRFbnVtVmFsdWVEZWNsYXJhdGlvbihub2RlLnZhbHVlc1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVZhbHVlczsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsXFxuXCIpO1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGUudmFsdWVzW2ldKTtcbiAgICAgIH1cbiAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgICBpbmRlbnQoc2IsIC0tdGhpcy5pbmRlbnRMZXZlbCk7XG4gICAgICBzYi5wdXNoKFwifVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIiB7fVwiKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEVudW1WYWx1ZURlY2xhcmF0aW9uKG5vZGU6IEVudW1WYWx1ZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgaWYgKG5vZGUudmFsdWUpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcIiA9IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKG5vZGUudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0RXhwb3J0SW1wb3J0U3RhdGVtZW50KG5vZGU6IEV4cG9ydEltcG9ydFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcImV4cG9ydCBpbXBvcnQgXCIpO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLmV4dGVybmFsTmFtZSk7XG4gICAgc2IucHVzaChcIiA9IFwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgfVxuXG4gIHZpc2l0RXhwb3J0TWVtYmVyKG5vZGU6IEV4cG9ydE1lbWJlcik6IHZvaWQge1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLmxvY2FsTmFtZSk7XG4gICAgaWYgKG5vZGUuZXhwb3J0ZWROYW1lLnRleHQgIT0gbm9kZS5sb2NhbE5hbWUudGV4dCkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiIGFzIFwiKTtcbiAgICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLmV4cG9ydGVkTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHBvcnRTdGF0ZW1lbnQobm9kZTogRXhwb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAobm9kZS5pc0RlY2xhcmUpIHtcbiAgICAgIHNiLnB1c2goXCJkZWNsYXJlIFwiKTtcbiAgICB9XG4gICAgdmFyIG1lbWJlcnMgPSBub2RlLm1lbWJlcnM7XG4gICAgaWYgKG1lbWJlcnMgJiYgbWVtYmVycy5sZW5ndGgpIHtcbiAgICAgIGxldCBudW1NZW1iZXJzID0gbWVtYmVycy5sZW5ndGg7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IHtcXG5cIik7XG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXRFeHBvcnRNZW1iZXIobWVtYmVyc1swXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bU1lbWJlcnM7ICsraSkge1xuICAgICAgICBzYi5wdXNoKFwiLFxcblwiKTtcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgIHRoaXMudmlzaXRFeHBvcnRNZW1iZXIobWVtYmVyc1tpXSk7XG4gICAgICB9XG4gICAgICAtLXRoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBzYi5wdXNoKFwiXFxufVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcImV4cG9ydCB7fVwiKTtcbiAgICB9XG4gICAgdmFyIHBhdGggPSBub2RlLnBhdGg7XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHNiLnB1c2goXCIgZnJvbSBcIik7XG4gICAgICB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24ocGF0aCk7XG4gICAgfVxuICAgIHNiLnB1c2goXCI7XCIpO1xuICB9XG5cbiAgdmlzaXRFeHBvcnREZWZhdWx0U3RhdGVtZW50KG5vZGU6IEV4cG9ydERlZmF1bHRTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgZGVjbGFyYXRpb24gPSBub2RlLmRlY2xhcmF0aW9uO1xuICAgIHN3aXRjaCAoZGVjbGFyYXRpb24ua2luZCkge1xuICAgICAgY2FzZSBOb2RlS2luZC5FTlVNREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEVudW1EZWNsYXJhdGlvbig8RW51bURlY2xhcmF0aW9uPmRlY2xhcmF0aW9uLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLkZVTkNUSU9OREVDTEFSQVRJT046IHtcbiAgICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uRGVjbGFyYXRpb24oPEZ1bmN0aW9uRGVjbGFyYXRpb24+ZGVjbGFyYXRpb24sIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgTm9kZUtpbmQuQ0xBU1NERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0Q2xhc3NEZWNsYXJhdGlvbig8Q2xhc3NEZWNsYXJhdGlvbj5kZWNsYXJhdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBOb2RlS2luZC5JTlRFUkZBQ0VERUNMQVJBVElPTjoge1xuICAgICAgICB0aGlzLnZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24oPEludGVyZmFjZURlY2xhcmF0aW9uPmRlY2xhcmF0aW9uLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIE5vZGVLaW5kLk5BTUVTUEFDRURFQ0xBUkFUSU9OOiB7XG4gICAgICAgIHRoaXMudmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbig8TmFtZXNwYWNlRGVjbGFyYXRpb24+ZGVjbGFyYXRpb24sIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IGFzc2VydChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRFeHByZXNzaW9uU3RhdGVtZW50KG5vZGU6IEV4cHJlc3Npb25TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2l0Tm9kZShub2RlLmV4cHJlc3Npb24pO1xuICB9XG5cbiAgdmlzaXRGaWVsZERlY2xhcmF0aW9uKG5vZGU6IEZpZWxkRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXJpYWxpemVBY2Nlc3NNb2RpZmllcnMobm9kZSk7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAobm9kZS5mbGFncyAmIENvbW1vbkZsYWdzLkRFRklOSVRFX0FTU0lHTk1FTlQpIHtcbiAgICAgIHNiLnB1c2goXCIhXCIpO1xuICAgIH1cbiAgICB2YXIgdHlwZSA9IG5vZGUudHlwZTtcbiAgICBpZiAodHlwZSkge1xuICAgICAgc2IucHVzaChcIjogXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHR5cGUpO1xuICAgIH1cbiAgICB2YXIgaW5pdGlhbGl6ZXIgPSBub2RlLmluaXRpYWxpemVyO1xuICAgIGlmIChpbml0aWFsaXplcikge1xuICAgICAgc2IucHVzaChcIiA9IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluaXRpYWxpemVyKTtcbiAgICB9XG4gIH1cblxuICB2aXNpdEZvclN0YXRlbWVudChub2RlOiBGb3JTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJmb3IgKFwiKTtcbiAgICB2YXIgaW5pdGlhbGl6ZXIgPSBub2RlLmluaXRpYWxpemVyO1xuICAgIGlmIChpbml0aWFsaXplcikge1xuICAgICAgdGhpcy52aXNpdE5vZGUoaW5pdGlhbGl6ZXIpO1xuICAgIH1cbiAgICB2YXIgY29uZGl0aW9uID0gbm9kZS5jb25kaXRpb247XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgc2IucHVzaChcIjsgXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUoY29uZGl0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIjtcIik7XG4gICAgfVxuICAgIHZhciBpbmNyZW1lbnRvciA9IG5vZGUuaW5jcmVtZW50b3I7XG4gICAgaWYgKGluY3JlbWVudG9yKSB7XG4gICAgICBzYi5wdXNoKFwiOyBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpbmNyZW1lbnRvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNiLnB1c2goXCI7XCIpO1xuICAgIH1cbiAgICBzYi5wdXNoKFwiKSBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS5zdGF0ZW1lbnQpO1xuICB9XG5cbiAgdmlzaXRGdW5jdGlvbkRlY2xhcmF0aW9uKG5vZGU6IEZ1bmN0aW9uRGVjbGFyYXRpb24sIGlzRGVmYXVsdDogYm9vbCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzRGVmYXVsdCkge1xuICAgICAgc2IucHVzaChcImV4cG9ydCBkZWZhdWx0IFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhub2RlKTtcbiAgICAgIHRoaXMuc2VyaWFsaXplQWNjZXNzTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5uYW1lLnRleHQubGVuZ3RoKSB7XG4gICAgICBzYi5wdXNoKFwiZnVuY3Rpb24gXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIHRoaXMudmlzaXRGdW5jdGlvbkNvbW1vbihub2RlKTtcbiAgfVxuXG4gIHZpc2l0RnVuY3Rpb25Db21tb24obm9kZTogRnVuY3Rpb25EZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHNpZ25hdHVyZSA9IG5vZGUuc2lnbmF0dXJlO1xuICAgIHZhciB0eXBlUGFyYW1ldGVycyA9IG5vZGUudHlwZVBhcmFtZXRlcnM7XG4gICAgaWYgKHR5cGVQYXJhbWV0ZXJzKSB7XG4gICAgICBsZXQgbnVtVHlwZVBhcmFtZXRlcnMgPSB0eXBlUGFyYW1ldGVycy5sZW5ndGg7XG4gICAgICBpZiAobnVtVHlwZVBhcmFtZXRlcnMpIHtcbiAgICAgICAgc2IucHVzaChcIjxcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1UeXBlUGFyYW1ldGVyczsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzYi5wdXNoKFwiPlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5vZGUuYXJyb3dLaW5kID09IEFycm93S2luZC5BUlJPV19TSU5HTEUpIHtcbiAgICAgIGxldCBwYXJhbWV0ZXJzID0gc2lnbmF0dXJlLnBhcmFtZXRlcnM7XG4gICAgICBhc3NlcnQocGFyYW1ldGVycy5sZW5ndGggPT0gMSk7XG4gICAgICBhc3NlcnQoIXNpZ25hdHVyZS5leHBsaWNpdFRoaXNUeXBlKTtcbiAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiKFwiKTtcbiAgICAgIGxldCBwYXJhbWV0ZXJzID0gc2lnbmF0dXJlLnBhcmFtZXRlcnM7XG4gICAgICBsZXQgbnVtUGFyYW1ldGVycyA9IHBhcmFtZXRlcnMubGVuZ3RoO1xuICAgICAgbGV0IGV4cGxpY2l0VGhpc1R5cGUgPSBzaWduYXR1cmUuZXhwbGljaXRUaGlzVHlwZTtcbiAgICAgIGlmIChleHBsaWNpdFRoaXNUeXBlKSB7XG4gICAgICAgIHNiLnB1c2goXCJ0aGlzOiBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShleHBsaWNpdFRoaXNUeXBlKTtcbiAgICAgIH1cbiAgICAgIGlmIChudW1QYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmIChleHBsaWNpdFRoaXNUeXBlKSBzYi5wdXNoKFwiLCBcIik7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplUGFyYW1ldGVyKHBhcmFtZXRlcnNbMF0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG51bVBhcmFtZXRlcnM7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgICB0aGlzLnNlcmlhbGl6ZVBhcmFtZXRlcihwYXJhbWV0ZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgYm9keSA9IG5vZGUuYm9keTtcbiAgICB2YXIgcmV0dXJuVHlwZSA9IHNpZ25hdHVyZS5yZXR1cm5UeXBlO1xuICAgIGlmIChub2RlLmFycm93S2luZCkge1xuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgaWYgKG5vZGUuYXJyb3dLaW5kID09IEFycm93S2luZC5BUlJPV19TSU5HTEUpIHtcbiAgICAgICAgICBhc3NlcnQoaXNUeXBlT21pdHRlZChyZXR1cm5UeXBlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzVHlwZU9taXR0ZWQocmV0dXJuVHlwZSkpIHtcbiAgICAgICAgICAgIHNiLnB1c2goXCIpXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzYi5wdXNoKFwiKTogXCIpO1xuICAgICAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHJldHVyblR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzYi5wdXNoKFwiID0+IFwiKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUoYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhc3NlcnQoIWlzVHlwZU9taXR0ZWQocmV0dXJuVHlwZSkpO1xuICAgICAgICBzYi5wdXNoKFwiID0+IFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKHJldHVyblR5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXG4gICAgICAgICFpc1R5cGVPbWl0dGVkKHJldHVyblR5cGUpICYmXG4gICAgICAgICFub2RlLmlzQW55KENvbW1vbkZsYWdzLkNPTlNUUlVDVE9SIHwgQ29tbW9uRmxhZ3MuU0VUKVxuICAgICAgKSB7XG4gICAgICAgIHNiLnB1c2goXCIpOiBcIik7XG4gICAgICAgIHRoaXMudmlzaXRUeXBlTm9kZShyZXR1cm5UeXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNiLnB1c2goXCIpXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgc2IucHVzaChcIiBcIik7XG4gICAgICAgIHRoaXMudmlzaXROb2RlKGJvZHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZpc2l0SWZTdGF0ZW1lbnQobm9kZTogSWZTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJpZiAoXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcbiAgICBzYi5wdXNoKFwiKSBcIik7XG4gICAgdmFyIGlmVHJ1ZSA9IG5vZGUuaWZUcnVlO1xuICAgIHRoaXMudmlzaXROb2RlKGlmVHJ1ZSk7XG4gICAgaWYgKGlmVHJ1ZS5raW5kICE9IE5vZGVLaW5kLkJMT0NLKSB7XG4gICAgICBzYi5wdXNoKFwiO1xcblwiKTtcbiAgICB9XG4gICAgdmFyIGlmRmFsc2UgPSBub2RlLmlmRmFsc2U7XG4gICAgaWYgKGlmRmFsc2UpIHtcbiAgICAgIGlmIChpZlRydWUua2luZCA9PSBOb2RlS2luZC5CTE9DSykge1xuICAgICAgICBzYi5wdXNoKFwiIGVsc2UgXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2IucHVzaChcImVsc2UgXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy52aXNpdE5vZGUoaWZGYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRJbXBvcnREZWNsYXJhdGlvbihub2RlOiBJbXBvcnREZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHZhciBleHRlcm5hbE5hbWUgPSBub2RlLmZvcmVpZ25OYW1lO1xuICAgIHZhciBuYW1lID0gbm9kZS5uYW1lO1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihleHRlcm5hbE5hbWUpO1xuICAgIGlmIChleHRlcm5hbE5hbWUudGV4dCAhPSBuYW1lLnRleHQpIHtcbiAgICAgIHRoaXMuc2IucHVzaChcIiBhcyBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obmFtZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRJbXBvcnRTdGF0ZW1lbnQobm9kZTogSW1wb3J0U3RhdGVtZW50KTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiaW1wb3J0IFwiKTtcbiAgICB2YXIgZGVjbGFyYXRpb25zID0gbm9kZS5kZWNsYXJhdGlvbnM7XG4gICAgdmFyIG5hbWVzcGFjZU5hbWUgPSBub2RlLm5hbWVzcGFjZU5hbWU7XG4gICAgaWYgKGRlY2xhcmF0aW9ucykge1xuICAgICAgbGV0IG51bURlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucy5sZW5ndGg7XG4gICAgICBpZiAobnVtRGVjbGFyYXRpb25zKSB7XG4gICAgICAgIHNiLnB1c2goXCJ7XFxuXCIpO1xuICAgICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0SW1wb3J0RGVjbGFyYXRpb24oZGVjbGFyYXRpb25zWzBdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1EZWNsYXJhdGlvbnM7ICsraSkge1xuICAgICAgICAgIHNiLnB1c2goXCIsXFxuXCIpO1xuICAgICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICAgIHRoaXMudmlzaXRJbXBvcnREZWNsYXJhdGlvbihkZWNsYXJhdGlvbnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcbiAgICAgICAgc2IucHVzaChcIlxcbn0gZnJvbSBcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYi5wdXNoKFwie30gZnJvbSBcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChuYW1lc3BhY2VOYW1lKSB7XG4gICAgICBzYi5wdXNoKFwiKiBhcyBcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obmFtZXNwYWNlTmFtZSk7XG4gICAgICBzYi5wdXNoKFwiIGZyb20gXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0U3RyaW5nTGl0ZXJhbEV4cHJlc3Npb24obm9kZS5wYXRoKTtcbiAgfVxuXG4gIHZpc2l0SW5kZXhTaWduYXR1cmVEZWNsYXJhdGlvbihub2RlOiBJbmRleFNpZ25hdHVyZURlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBzYi5wdXNoKFwiW2tleTogXCIpO1xuICAgIHRoaXMudmlzaXRUeXBlTm9kZShub2RlLmtleVR5cGUpO1xuICAgIHNiLnB1c2goXCJdOiBcIik7XG4gICAgdGhpcy52aXNpdFR5cGVOb2RlKG5vZGUudmFsdWVUeXBlKTtcbiAgfVxuXG4gIHZpc2l0SW50ZXJmYWNlRGVjbGFyYXRpb24obm9kZTogSW50ZXJmYWNlRGVjbGFyYXRpb24sIGlzRGVmYXVsdDogYm9vbCA9IGZhbHNlKTogdm9pZCB7XG4gICAgdmFyIGRlY29yYXRvcnMgPSBub2RlLmRlY29yYXRvcnM7XG4gICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBrID0gZGVjb3JhdG9ycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgdGhpcy5zZXJpYWxpemVEZWNvcmF0b3IoZGVjb3JhdG9yc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKGlzRGVmYXVsdCkge1xuICAgICAgc2IucHVzaChcImV4cG9ydCBkZWZhdWx0IFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhub2RlKTtcbiAgICB9XG4gICAgc2IucHVzaChcImludGVyZmFjZSBcIik7XG4gICAgdGhpcy52aXNpdElkZW50aWZpZXJFeHByZXNzaW9uKG5vZGUubmFtZSk7XG4gICAgdmFyIHR5cGVQYXJhbWV0ZXJzID0gbm9kZS50eXBlUGFyYW1ldGVycztcbiAgICBpZiAodHlwZVBhcmFtZXRlcnMgJiYgdHlwZVBhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICBzYi5wdXNoKFwiPFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlUGFyYW1ldGVyKHR5cGVQYXJhbWV0ZXJzWzBdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxLCBrID0gdHlwZVBhcmFtZXRlcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHNiLnB1c2goXCIsIFwiKTtcbiAgICAgICAgdGhpcy52aXNpdFR5cGVQYXJhbWV0ZXIodHlwZVBhcmFtZXRlcnNbaV0pO1xuICAgICAgfVxuICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgfVxuICAgIHZhciBleHRlbmRzVHlwZSA9IG5vZGUuZXh0ZW5kc1R5cGU7XG4gICAgaWYgKGV4dGVuZHNUeXBlKSB7XG4gICAgICBzYi5wdXNoKFwiIGV4dGVuZHMgXCIpO1xuICAgICAgdGhpcy52aXNpdFR5cGVOb2RlKGV4dGVuZHNUeXBlKTtcbiAgICB9XG4gICAgLy8gbXVzdCBub3QgaGF2ZSBpbXBsZW1lbnRzVHlwZXNcbiAgICBzYi5wdXNoKFwiIHtcXG5cIik7XG4gICAgdmFyIGluZGVudExldmVsID0gKyt0aGlzLmluZGVudExldmVsO1xuICAgIHZhciBtZW1iZXJzID0gbm9kZS5tZW1iZXJzO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gbWVtYmVycy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUobWVtYmVyc1tpXSk7XG4gICAgfVxuICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcbiAgICBzYi5wdXNoKFwifVwiKTtcbiAgfVxuXG4gIHZpc2l0TWV0aG9kRGVjbGFyYXRpb24obm9kZTogTWV0aG9kRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXJpYWxpemVBY2Nlc3NNb2RpZmllcnMobm9kZSk7XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuR0VUKSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwiZ2V0IFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuU0VUKSkge1xuICAgICAgdGhpcy5zYi5wdXNoKFwic2V0IFwiKTtcbiAgICB9XG4gICAgdGhpcy52aXNpdEZ1bmN0aW9uQ29tbW9uKG5vZGUpO1xuICB9XG5cbiAgdmlzaXROYW1lc3BhY2VEZWNsYXJhdGlvbihub2RlOiBOYW1lc3BhY2VEZWNsYXJhdGlvbiwgaXNEZWZhdWx0OiBib29sID0gZmFsc2UpOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICBpZiAoaXNEZWZhdWx0KSB7XG4gICAgICBzYi5wdXNoKFwiZXhwb3J0IGRlZmF1bHQgXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIH1cbiAgICBzYi5wdXNoKFwibmFtZXNwYWNlIFwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgbWVtYmVycyA9IG5vZGUubWVtYmVycztcbiAgICB2YXIgbnVtTWVtYmVycyA9IG1lbWJlcnMubGVuZ3RoO1xuICAgIGlmIChudW1NZW1iZXJzKSB7XG4gICAgICBzYi5wdXNoKFwiIHtcXG5cIik7XG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IG1lbWJlcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwpO1xuICAgICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShtZW1iZXJzW2ldKTtcbiAgICAgIH1cbiAgICAgIGluZGVudChzYiwgLS10aGlzLmluZGVudExldmVsKTtcbiAgICAgIHNiLnB1c2goXCJ9XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYi5wdXNoKFwiIHt9XCIpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0UmV0dXJuU3RhdGVtZW50KG5vZGU6IFJldHVyblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciB2YWx1ZSA9IG5vZGUudmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJyZXR1cm4gXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNiLnB1c2goXCJyZXR1cm5cIik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRTd2l0Y2hDYXNlKG5vZGU6IFN3aXRjaENhc2UpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBsYWJlbCA9IG5vZGUubGFiZWw7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICBzYi5wdXNoKFwiY2FzZSBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShsYWJlbCk7XG4gICAgICBzYi5wdXNoKFwiOlxcblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcImRlZmF1bHQ6XFxuXCIpO1xuICAgIH1cbiAgICB2YXIgc3RhdGVtZW50cyA9IG5vZGUuc3RhdGVtZW50cztcbiAgICB2YXIgbnVtU3RhdGVtZW50cyA9IHN0YXRlbWVudHMubGVuZ3RoO1xuICAgIGlmIChudW1TdGF0ZW1lbnRzKSB7XG4gICAgICBsZXQgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbMF0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1TdGF0ZW1lbnRzOyArK2kpIHtcbiAgICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICAgIHRoaXMudmlzaXROb2RlQW5kVGVybWluYXRlKHN0YXRlbWVudHNbaV0pO1xuICAgICAgfVxuICAgICAgLS10aGlzLmluZGVudExldmVsO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0U3dpdGNoU3RhdGVtZW50KG5vZGU6IFN3aXRjaFN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgc2IucHVzaChcInN3aXRjaCAoXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcbiAgICBzYi5wdXNoKFwiKSB7XFxuXCIpO1xuICAgIHZhciBpbmRlbnRMZXZlbCA9ICsrdGhpcy5pbmRlbnRMZXZlbDtcbiAgICB2YXIgY2FzZXMgPSBub2RlLmNhc2VzO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gY2FzZXMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgIHRoaXMudmlzaXRTd2l0Y2hDYXNlKGNhc2VzW2ldKTtcbiAgICAgIHNiLnB1c2goXCJcXG5cIik7XG4gICAgfVxuICAgIC0tdGhpcy5pbmRlbnRMZXZlbDtcbiAgICBzYi5wdXNoKFwifVwiKTtcbiAgfVxuXG4gIHZpc2l0VGhyb3dTdGF0ZW1lbnQobm9kZTogVGhyb3dTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNiLnB1c2goXCJ0aHJvdyBcIik7XG4gICAgdGhpcy52aXNpdE5vZGUobm9kZS52YWx1ZSk7XG4gIH1cblxuICB2aXNpdFRyeVN0YXRlbWVudChub2RlOiBUcnlTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJ0cnkge1xcblwiKTtcbiAgICB2YXIgaW5kZW50TGV2ZWwgPSArK3RoaXMuaW5kZW50TGV2ZWw7XG4gICAgdmFyIHN0YXRlbWVudHMgPSBub2RlLnN0YXRlbWVudHM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGsgPSBzdGF0ZW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgaW5kZW50KHNiLCBpbmRlbnRMZXZlbCk7XG4gICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShzdGF0ZW1lbnRzW2ldKTtcbiAgICB9XG4gICAgdmFyIGNhdGNoVmFyaWFibGUgPSBub2RlLmNhdGNoVmFyaWFibGU7XG4gICAgaWYgKGNhdGNoVmFyaWFibGUpIHtcbiAgICAgIGluZGVudChzYiwgaW5kZW50TGV2ZWwgLSAxKTtcbiAgICAgIHNiLnB1c2goXCJ9IGNhdGNoIChcIik7XG4gICAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24oY2F0Y2hWYXJpYWJsZSk7XG4gICAgICBzYi5wdXNoKFwiKSB7XFxuXCIpO1xuICAgICAgbGV0IGNhdGNoU3RhdGVtZW50cyA9IG5vZGUuY2F0Y2hTdGF0ZW1lbnRzO1xuICAgICAgaWYgKGNhdGNoU3RhdGVtZW50cykge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgayA9IGNhdGNoU3RhdGVtZW50cy5sZW5ndGg7IGkgPCBrOyArK2kpIHtcbiAgICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgICB0aGlzLnZpc2l0Tm9kZUFuZFRlcm1pbmF0ZShjYXRjaFN0YXRlbWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBmaW5hbGx5U3RhdGVtZW50cyA9IG5vZGUuZmluYWxseVN0YXRlbWVudHM7XG4gICAgaWYgKGZpbmFsbHlTdGF0ZW1lbnRzKSB7XG4gICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsIC0gMSk7XG4gICAgICBzYi5wdXNoKFwifSBmaW5hbGx5IHtcXG5cIik7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGZpbmFsbHlTdGF0ZW1lbnRzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICBpbmRlbnQoc2IsIGluZGVudExldmVsKTtcbiAgICAgICAgdGhpcy52aXNpdE5vZGVBbmRUZXJtaW5hdGUoZmluYWxseVN0YXRlbWVudHNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpbmRlbnQoc2IsIGluZGVudExldmVsIC0gMSk7XG4gICAgc2IucHVzaChcIn1cIik7XG4gIH1cblxuICB2aXNpdFR5cGVEZWNsYXJhdGlvbihub2RlOiBUeXBlRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICB2YXIgZGVjb3JhdG9ycyA9IG5vZGUuZGVjb3JhdG9ycztcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGsgPSBkZWNvcmF0b3JzLmxlbmd0aDsgaSA8IGs7ICsraSkge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZURlY29yYXRvcihkZWNvcmF0b3JzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB0aGlzLnNlcmlhbGl6ZUV4dGVybmFsTW9kaWZpZXJzKG5vZGUpO1xuICAgIHNiLnB1c2goXCJ0eXBlIFwiKTtcbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgdHlwZVBhcmFtZXRlcnMgPSBub2RlLnR5cGVQYXJhbWV0ZXJzO1xuICAgIGlmICh0eXBlUGFyYW1ldGVycykge1xuICAgICAgbGV0IG51bVR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnMubGVuZ3RoO1xuICAgICAgaWYgKG51bVR5cGVQYXJhbWV0ZXJzKSB7XG4gICAgICAgIHNiLnB1c2goXCI8XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVR5cGVQYXJhbWV0ZXJzOyArK2kpIHtcbiAgICAgICAgICB0aGlzLnZpc2l0VHlwZVBhcmFtZXRlcih0eXBlUGFyYW1ldGVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgc2IucHVzaChcIj5cIik7XG4gICAgICB9XG4gICAgfVxuICAgIHNiLnB1c2goXCIgPSBcIik7XG4gICAgdGhpcy52aXNpdFR5cGVOb2RlKG5vZGUudHlwZSk7XG4gIH1cblxuICB2aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZTogVmFyaWFibGVEZWNsYXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMudmlzaXRJZGVudGlmaWVyRXhwcmVzc2lvbihub2RlLm5hbWUpO1xuICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKG5vZGUuZmxhZ3MgJiBDb21tb25GbGFncy5ERUZJTklURV9BU1NJR05NRU5UKSB7XG4gICAgICBzYi5wdXNoKFwiIVwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHNiLnB1c2goXCI6IFwiKTtcbiAgICAgIHRoaXMudmlzaXRUeXBlTm9kZSh0eXBlKTtcbiAgICB9XG4gICAgdmFyIGluaXRpYWxpemVyID0gbm9kZS5pbml0aWFsaXplcjtcbiAgICBpZiAoaW5pdGlhbGl6ZXIpIHtcbiAgICAgIHNiLnB1c2goXCIgPSBcIik7XG4gICAgICB0aGlzLnZpc2l0Tm9kZShpbml0aWFsaXplcik7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRWYXJpYWJsZVN0YXRlbWVudChub2RlOiBWYXJpYWJsZVN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBkZWNvcmF0b3JzID0gbm9kZS5kZWNvcmF0b3JzO1xuICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IGRlY29yYXRvcnMubGVuZ3RoOyBpIDwgazsgKytpKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplRGVjb3JhdG9yKGRlY29yYXRvcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHZhciBkZWNsYXJhdGlvbnMgPSBub2RlLmRlY2xhcmF0aW9ucztcbiAgICB2YXIgbnVtRGVjbGFyYXRpb25zID0gYXNzZXJ0KGRlY2xhcmF0aW9ucy5sZW5ndGgpO1xuICAgIHZhciBmaXJzdERlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25zWzBdO1xuICAgIHRoaXMuc2VyaWFsaXplRXh0ZXJuYWxNb2RpZmllcnMoZmlyc3REZWNsYXJhdGlvbik7XG4gICAgc2IucHVzaChmaXJzdERlY2xhcmF0aW9uLmlzKENvbW1vbkZsYWdzLkNPTlNUKSA/IFwiY29uc3QgXCIgOiBmaXJzdERlY2xhcmF0aW9uLmlzKENvbW1vbkZsYWdzLkxFVCkgPyBcImxldCBcIiA6IFwidmFyIFwiKTtcbiAgICB0aGlzLnZpc2l0VmFyaWFibGVEZWNsYXJhdGlvbihub2RlLmRlY2xhcmF0aW9uc1swXSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1EZWNsYXJhdGlvbnM7ICsraSkge1xuICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgdGhpcy52aXNpdFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZS5kZWNsYXJhdGlvbnNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0V2hpbGVTdGF0ZW1lbnQobm9kZTogV2hpbGVTdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJ3aGlsZSAoXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUuY29uZGl0aW9uKTtcbiAgICB2YXIgc3RhdGVtZW50ID0gbm9kZS5zdGF0ZW1lbnQ7XG4gICAgaWYgKHN0YXRlbWVudC5raW5kID09IE5vZGVLaW5kLkVNUFRZKSB7XG4gICAgICBzYi5wdXNoKFwiKVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIikgXCIpO1xuICAgICAgdGhpcy52aXNpdE5vZGUobm9kZS5zdGF0ZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG90aGVyXG5cbiAgc2VyaWFsaXplRGVjb3JhdG9yKG5vZGU6IERlY29yYXRvck5vZGUpOiB2b2lkIHtcbiAgICB2YXIgc2IgPSB0aGlzLnNiO1xuICAgIHNiLnB1c2goXCJAXCIpO1xuICAgIHRoaXMudmlzaXROb2RlKG5vZGUubmFtZSk7XG4gICAgdmFyIGFyZ3MgPSBub2RlLmFyZ3VtZW50cztcbiAgICBpZiAoYXJncykge1xuICAgICAgc2IucHVzaChcIihcIik7XG4gICAgICBsZXQgbnVtQXJncyA9IGFyZ3MubGVuZ3RoO1xuICAgICAgaWYgKG51bUFyZ3MpIHtcbiAgICAgICAgdGhpcy52aXNpdE5vZGUoYXJnc1swXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbnVtQXJnczsgKytpKSB7XG4gICAgICAgICAgc2IucHVzaChcIiwgXCIpO1xuICAgICAgICAgIHRoaXMudmlzaXROb2RlKGFyZ3NbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzYi5wdXNoKFwiKVxcblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2IucHVzaChcIlxcblwiKTtcbiAgICB9XG4gICAgaW5kZW50KHNiLCB0aGlzLmluZGVudExldmVsKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZVBhcmFtZXRlcihub2RlOiBQYXJhbWV0ZXJOb2RlKTogdm9pZCB7XG4gICAgdmFyIHNiID0gdGhpcy5zYjtcbiAgICB2YXIga2luZCA9IG5vZGUucGFyYW1ldGVyS2luZDtcbiAgICB2YXIgaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uID0gbm9kZS5pbXBsaWNpdEZpZWxkRGVjbGFyYXRpb247XG4gICAgaWYgKGltcGxpY2l0RmllbGREZWNsYXJhdGlvbikge1xuICAgICAgdGhpcy5zZXJpYWxpemVBY2Nlc3NNb2RpZmllcnMoaW1wbGljaXRGaWVsZERlY2xhcmF0aW9uKTtcbiAgICB9XG4gICAgaWYgKGtpbmQgPT0gUGFyYW1ldGVyS2luZC5SRVNUKSB7XG4gICAgICBzYi5wdXNoKFwiLi4uXCIpO1xuICAgIH1cbiAgICB0aGlzLnZpc2l0SWRlbnRpZmllckV4cHJlc3Npb24obm9kZS5uYW1lKTtcbiAgICB2YXIgdHlwZSA9IG5vZGUudHlwZTtcbiAgICB2YXIgaW5pdGlhbGl6ZXIgPSBub2RlLmluaXRpYWxpemVyO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICBpZiAoa2luZCA9PSBQYXJhbWV0ZXJLaW5kLk9QVElPTkFMICYmICFpbml0aWFsaXplcikgc2IucHVzaChcIj9cIik7XG4gICAgICBpZiAoIWlzVHlwZU9taXR0ZWQodHlwZSkpIHtcbiAgICAgICAgc2IucHVzaChcIjogXCIpO1xuICAgICAgICB0aGlzLnZpc2l0VHlwZU5vZGUodHlwZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpbml0aWFsaXplcikge1xuICAgICAgc2IucHVzaChcIiA9IFwiKTtcbiAgICAgIHRoaXMudmlzaXROb2RlKGluaXRpYWxpemVyKTtcbiAgICB9XG4gIH1cblxuICBzZXJpYWxpemVFeHRlcm5hbE1vZGlmaWVycyhub2RlOiBEZWNsYXJhdGlvblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuRVhQT1JUKSkge1xuICAgICAgc2IucHVzaChcImV4cG9ydCBcIik7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLklNUE9SVCkpIHtcbiAgICAgIHNiLnB1c2goXCJpbXBvcnQgXCIpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5pcyhDb21tb25GbGFncy5ERUNMQVJFKSkge1xuICAgICAgc2IucHVzaChcImRlY2xhcmUgXCIpO1xuICAgIH1cbiAgfVxuXG4gIHNlcmlhbGl6ZUFjY2Vzc01vZGlmaWVycyhub2RlOiBEZWNsYXJhdGlvblN0YXRlbWVudCk6IHZvaWQge1xuICAgIHZhciBzYiA9IHRoaXMuc2I7XG4gICAgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuUFVCTElDKSkge1xuICAgICAgc2IucHVzaChcInB1YmxpYyBcIik7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlBSSVZBVEUpKSB7XG4gICAgICBzYi5wdXNoKFwicHJpdmF0ZSBcIik7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzKENvbW1vbkZsYWdzLlBST1RFQ1RFRCkpIHtcbiAgICAgIHNiLnB1c2goXCJwcm90ZWN0ZWQgXCIpO1xuICAgIH1cbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5TVEFUSUMpKSB7XG4gICAgICBzYi5wdXNoKFwic3RhdGljIFwiKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXMoQ29tbW9uRmxhZ3MuQUJTVFJBQ1QpKSB7XG4gICAgICBzYi5wdXNoKFwiYWJzdHJhY3QgXCIpO1xuICAgIH1cbiAgICBpZiAobm9kZS5pcyhDb21tb25GbGFncy5SRUFET05MWSkpIHtcbiAgICAgIHNiLnB1c2goXCJyZWFkb25seSBcIik7XG4gICAgfVxuICB9XG5cbiAgZmluaXNoKCk6IHN0cmluZyB7XG4gICAgdmFyIHJldCA9IHRoaXMuc2Iuam9pbihcIlwiKTtcbiAgICB0aGlzLnNiID0gW107XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./src/visitor.ts":
/*!************************!*\
  !*** ./src/visitor.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
// export type Collection<T> = NonNullCollection<T>| null;
var isIterable = function (object) {
    //@ts-ignore
    return object != null && typeof object[Symbol.iterator] === "function";
};
var DefaultWriter = /** @class */ (function () {
    function DefaultWriter() {
    }
    DefaultWriter.prototype.writeString = function (s) { };
    DefaultWriter.prototype.writeNode = function (node) { };
    return DefaultWriter;
}());
exports.DefaultWriter = DefaultWriter;
var AbstractVisitor = /** @class */ (function () {
    function AbstractVisitor(writer) {
        if (writer === void 0) { writer = new DefaultWriter(); }
        this.writer = writer;
    }
    AbstractVisitor.prototype.writeString = function (str) {
        return this.writeString(str);
    };
    AbstractVisitor.prototype.writeNode = function (item) {
        this.writer.writeNode(item);
    };
    AbstractVisitor.prototype.visit = function (node) {
        var e_1, _a, e_2, _b;
        var _this = this;
        if (node == null)
            return;
        if (node instanceof Array) {
            node.map(function (node) { _this.visit(node); });
        }
        else if (node instanceof Map) {
            try {
                for (var _c = __values(node.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), key = _e[0], _node = _e[1];
                    this.visit(_node);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            //@ts-ignore Need a better way to test type
        }
        else if (isIterable(node)) {
            try {
                //TODO: Find better way to test if iterable
                for (var node_1 = __values(node), node_1_1 = node_1.next(); !node_1_1.done; node_1_1 = node_1.next()) {
                    var _node = node_1_1.value;
                    this.visit(_node);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (node_1_1 && !node_1_1.done && (_b = node_1.return)) _b.call(node_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else {
            //@ts-ignore Node is not iterable.
            this._visit(node);
        }
    };
    return AbstractVisitor;
}());
exports.AbstractVisitor = AbstractVisitor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aXNpdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMERBQTBEO0FBRTFELElBQU0sVUFBVSxHQUFHLFVBQUMsTUFBYztJQUNoQyxZQUFZO0lBQ1osT0FBQSxNQUFNLElBQUksSUFBSSxJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxVQUFVO0FBQS9ELENBQStELENBQUM7QUFPbEU7SUFBQTtJQUlBLENBQUM7SUFIQyxtQ0FBVyxHQUFYLFVBQVksQ0FBUyxJQUFVLENBQUM7SUFDaEMsaUNBQVMsR0FBVCxVQUFVLElBQW1CLElBQVMsQ0FBQztJQUV6QyxvQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksc0NBQWE7QUFNMUI7SUFFRSx5QkFBc0IsTUFBMEM7UUFBMUMsdUJBQUEsRUFBQSxhQUF3QixhQUFhLEVBQUs7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBb0M7SUFBRyxDQUFDO0lBRXBFLHFDQUFXLEdBQVgsVUFBWSxHQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsbUNBQVMsR0FBVCxVQUFVLElBQW1CO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCwrQkFBSyxHQUFMLFVBQU0sSUFBMEI7O1FBQWhDLGlCQWtCQztRQWpCQyxJQUFJLElBQUksSUFBSSxJQUFJO1lBQUUsT0FBTztRQUN6QixJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQU8sSUFBYSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7YUFBTSxJQUFJLElBQUksWUFBWSxHQUFHLEVBQUU7O2dCQUM5QixLQUF5QixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7b0JBQWhDLElBQUEsd0JBQVksRUFBWCxXQUFHLEVBQUUsYUFBSztvQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkI7Ozs7Ozs7OztZQUNELDJDQUEyQztTQUM1QzthQUFNLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDekIsMkNBQTJDO2dCQUM3QyxLQUFrQixJQUFBLFNBQUEsU0FBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7b0JBQW5CLElBQUksS0FBSyxpQkFBQTtvQkFDVixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNyQjs7Ozs7Ozs7O1NBQ0Y7YUFBTTtZQUNMLGtDQUFrQztZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUdILHNCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDcUIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB0eXBlIENvbGxlY3Rpb248VD4gPSBUIHwgVFtdIHwgTWFwPHN0cmluZywgVCB8IFRbXSB8IEl0ZXJhYmxlPFQ+PiB8IEl0ZXJhYmxlPFQ+O1xuLy8gZXhwb3J0IHR5cGUgQ29sbGVjdGlvbjxUPiA9IE5vbk51bGxDb2xsZWN0aW9uPFQ+fCBudWxsO1xuXG5jb25zdCBpc0l0ZXJhYmxlID0gKG9iamVjdDogb2JqZWN0KTogYm9vbGVhbiA9PlxuICAvL0B0cy1pZ25vcmVcbiAgb2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdFtTeW1ib2wuaXRlcmF0b3JdID09PSBcImZ1bmN0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3JpdGVyPFQ+IHtcbiAgd3JpdGVTdHJpbmcoeDogQ29sbGVjdGlvbjxUPiB8IHN0cmluZyk6IHZvaWQ7XG4gIHdyaXRlTm9kZSh4OiBDb2xsZWN0aW9uPFQ+KTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRXcml0ZXI8VD4gaW1wbGVtZW50cyBXcml0ZXI8VD4ge1xuICB3cml0ZVN0cmluZyhzOiBzdHJpbmcpOiB2b2lkIHsgfVxuICB3cml0ZU5vZGUobm9kZTogQ29sbGVjdGlvbjxUPik6IHZvaWQge31cblxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RWaXNpdG9yPFQ+IHtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgd3JpdGVyOiBXcml0ZXI8VD4gPSBuZXcgRGVmYXVsdFdyaXRlcjxUPigpKSB7fVxuXG4gIHdyaXRlU3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy53cml0ZVN0cmluZyhzdHIpO1xuICB9XG5cbiAgd3JpdGVOb2RlKGl0ZW06IENvbGxlY3Rpb248VD4gKTogdm9pZCB7XG4gICAgdGhpcy53cml0ZXIud3JpdGVOb2RlKGl0ZW0pO1xuICB9XG5cbiAgdmlzaXQobm9kZTogQ29sbGVjdGlvbjxUPiB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAobm9kZSA9PSBudWxsKSByZXR1cm47XG4gICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbm9kZS5tYXAoKG5vZGU6IFQpOiB2b2lkID0+IHsgdGhpcy52aXNpdChub2RlKTsgfSk7XG4gICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBmb3IgKGxldCBba2V5LCBfbm9kZV0gb2Ygbm9kZS5lbnRyaWVzKCkpIHtcbiAgICAgICAgdGhpcy52aXNpdChfbm9kZSk7XG4gICAgICB9XG4gICAgICAvL0B0cy1pZ25vcmUgTmVlZCBhIGJldHRlciB3YXkgdG8gdGVzdCB0eXBlXG4gICAgfSBlbHNlIGlmIChpc0l0ZXJhYmxlKG5vZGUpKSB7XG4gICAgICAgIC8vVE9ETzogRmluZCBiZXR0ZXIgd2F5IHRvIHRlc3QgaWYgaXRlcmFibGVcbiAgICAgIGZvciAobGV0IF9ub2RlIG9mIG5vZGUpIHtcbiAgICAgICAgICB0aGlzLnZpc2l0KF9ub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy9AdHMtaWdub3JlIE5vZGUgaXMgbm90IGl0ZXJhYmxlLlxuICAgICAgdGhpcy5fdmlzaXQobm9kZSk7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfdmlzaXQobm9kZTogVCk6IHZvaWQ7XG5cbn1cbiJdfQ==

/***/ })

/******/ });
});
//# sourceMappingURL=transformerBundle.js.map