- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] CheckBox
- [ ] Avatar
- [ ] MultiStep


## Libs
#### tsup
``
convert to esm, commonjs.
``

## Config MonoRepo
``
use when the project has dependency between an other project
``

### React package
#### We need install react development dependency, the project that install our lib has react instaled. 
``
npm i -D react @types/react @types/react-dom 
add flag in package.json script: --external react",
``
## folder Docs storybook
``
npx sb init --builder @storybook/builder-vite --type react --use-npm

npm i -D vite @vitejs/plugin-react

npm i react react-dom
``
