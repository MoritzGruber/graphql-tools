(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{193:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},h=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),b=a,d=h["".concat(i,".").concat(b)]||h[b]||m[b]||o;return n?r.a.createElement(d,s({ref:t},p,{components:n})):r.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(193)),i={id:"stitch-api",title:"Stitching API",description:"Stitching API"},s={unversionedId:"stitch-api",id:"stitch-api",isDocsHomePage:!1,title:"Stitching API",description:"Stitching API",source:"@site/docs/stitch-api.md",permalink:"/docs/stitch-api",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/stitch-api.md",sidebar:"someSidebar",previous:{title:"Type merging",permalink:"/docs/stitch-type-merging"},next:{title:"Setup an HTTP server",permalink:"/docs/server-setup"}},c=[{value:"API",id:"api",children:[{value:"subschemas",id:"subschemas",children:[]},{value:"types",id:"types",children:[]},{value:"typeDefs",id:"typedefs",children:[]},{value:"resolvers",id:"resolvers",children:[]},{value:"delegateToSchema",id:"delegatetoschema",children:[]}]}],p={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type SubschemaConfig = {\n  schema: GraphQLSchema;\n  rootValue?: Record<string, any>;\n  executor?: Executor;\n  subscriber?: Subscriber;\n  transforms?: Array<Transform>;\n};\n\nexport type SchemaLikeObject =\n  SubschemaConfig |\n  GraphQLSchema |\n  string |\n  DocumentNode |\n  Array<GraphQLNamedType>;\n\nstitchSchemas({\n  subschemas: Array<SubschemaConfig>;\n  types: Array<GraphQLNamedType>;\n  typeDefs: string | DocumentNode;\n  schemas: Array<SchemaLikeObject>;\n  resolvers?: Array<IResolvers> | IResolvers;\n  onTypeConflict?: (\n    left: GraphQLNamedType,\n    right: GraphQLNamedType,\n    info?: {\n      left: {\n        schema?: GraphQLSchema;\n      };\n      right: {\n        schema?: GraphQLSchema;\n      };\n    },\n  ) => GraphQLNamedType;\n})\n")),Object(o.b)("p",null,"This is the main function that implements schema stitching. Note that in addition to the above arguments, the function also takes all the same arguments as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/generate-schema/"}),Object(o.b)("inlineCode",{parentName:"a"},"makeExecutableSchema")),". Read below for a description of each option."),Object(o.b)("h3",{id:"subschemas"},"subschemas"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"subschemas")," is an array of ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," or ",Object(o.b)("inlineCode",{parentName:"p"},"SubschemaConfig")," objects. These subschemas are wrapped with proxying resolvers in the final schema."),Object(o.b)("h3",{id:"types"},"types"),Object(o.b)("p",null,"Additional types to add to the final type map, most useful for custom scalars or enums."),Object(o.b)("h3",{id:"typedefs"},"typeDefs"),Object(o.b)("p",null,"Strings or parsed documents that can contain additional types or type extensions. Note that type extensions are always applied last, while types are defined in the order in which they are provided."),Object(o.b)("h3",{id:"resolvers"},"resolvers"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"resolvers")," accepts resolvers in same format as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/resolvers/"}),"makeExecutableSchema"),". It can also take an Array of resolvers. One addition to the resolver format is the possibility to specify a ",Object(o.b)("inlineCode",{parentName:"p"},"selectionSet")," for a resolver. The ",Object(o.b)("inlineCode",{parentName:"p"},"selectionSet")," must be a GraphQL selection set definition string, specifying which fields from the parent schema are required for the resolver to function properly."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"resolvers: {\n  Booking: {\n    property: {\n      selectionSet: '{ propertyId }',\n      resolve(parent, args, context, info) {\n        return delegateToSchema({\n          schema: bookingSchema,\n          operation: 'query',\n          fieldName: 'propertyById',\n          args: {\n            id: parent.propertyId,\n          },\n          context,\n          info,\n        });\n      },\n    },\n  },\n}\n")),Object(o.b)("h3",{id:"delegatetoschema"},"delegateToSchema"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"delegateToSchema")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"delegateToSchema<TContext>(options: IDelegateToSchemaOptions<TContext>): any;\n\ninterface IDelegateToSchemaOptions<TContext = Record<string, any>> {\n    schemaOrSchemaConfig: GraphQLSchema | SubschemaConfig;\n    operation: Operation;\n    fieldName: string;\n    args?: Record<string, any>;\n    context: TContext;\n    info: GraphQLResolveInfo;\n    transforms?: Array<Transform>;\n}\n")),Object(o.b)("p",null,"As described in the documentation above, ",Object(o.b)("inlineCode",{parentName:"p"},"delegateToSchema")," allows delegating to any ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," or ",Object(o.b)("inlineCode",{parentName:"p"},"SubschemaConfig")," object. Transforms do not have to be re-specified when passing a ",Object(o.b)("inlineCode",{parentName:"p"},"SubschemaConfig")," object, which is the preserved workflow. Additional transforms can also be passed as needed. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/schema-delegation/"}),"Schema Delegation")," and the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#using-with-transforms"}),Object(o.b)("em",{parentName:"a"},"Using with transforms"))," section of this document."),Object(o.b)("h4",{id:"ontypeconflict"},"onTypeConflict"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"type OnTypeConflict = (\n  left: GraphQLNamedType,\n  right: GraphQLNamedType,\n  info?: {\n    left: {\n      schema?: GraphQLSchema;\n    };\n    right: {\n      schema?: GraphQLSchema;\n    };\n  },\n) => GraphQLNamedType;\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"onTypeConflict")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"stitchSchemas")," allows customization of type resolving logic."),Object(o.b)("p",null,"The default behavior of ",Object(o.b)("inlineCode",{parentName:"p"},"stitchSchemas")," is to take the ",Object(o.b)("em",{parentName:"p"},"last")," encountered type of all the types with the same name, with a warning that type conflicts have been encountered. If specified, ",Object(o.b)("inlineCode",{parentName:"p"},"onTypeConflict")," enables explicit selection of the winning type."),Object(o.b)("p",null,"For example, here's how we could select the ",Object(o.b)("em",{parentName:"p"},"first")," type among multiple types with the same name:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const onTypeConflict = (left, right) => left;\n")),Object(o.b)("p",null,"And here's how we might select the type whose schema has the latest ",Object(o.b)("inlineCode",{parentName:"p"},"version"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const onTypeConflict = (left, right, info) => {\n  if (info.left.schema.version >= info.right.schema.version) {\n    return left;\n  } else {\n    return right;\n  }\n}\n")),Object(o.b)("p",null,"When using schema transforms, ",Object(o.b)("inlineCode",{parentName:"p"},"onTypeConflict")," is often unnecessary, since transforms can be used to prevent conflicts before merging schemas. However, if you're not using schema transforms, ",Object(o.b)("inlineCode",{parentName:"p"},"onTypeConflict")," can be a quick way to make ",Object(o.b)("inlineCode",{parentName:"p"},"stitchSchemas")," produce more desirable results."),Object(o.b)("h4",{id:"inheritresolversfrominterfaces"},"inheritResolversFromInterfaces"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"inheritResolversFromInterfaces")," option is simply passed through to ",Object(o.b)("inlineCode",{parentName:"p"},"addResolversToSchema"),", which is called when adding resolvers to the schema under the covers. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/resolvers/#addresolverstoschema-schema-resolvers-resolvervalidationoptions-inheritresolversfrominterfaces-"}),Object(o.b)("inlineCode",{parentName:"a"},"addResolversToSchema"))," for more info."))}l.isMDXComponent=!0}}]);