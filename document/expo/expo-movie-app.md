# Movie app 

Instalasi 

```Js 
npm install --save-dev eslint
npm init @eslint/config

# =========== Konfigurasi ke 
.eslintrc.json

#================= dengan 

"parserOptions": {
  "ecmaVersion": "latest",
  "sourceType": "module",
  "project": "./tsconfig.json" // Ditambahkan
},

# ====================== test 

npx eslint App.tsx
```

priter 

```Js
npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json

# ================= konf 

.prettierrc.json

# ================ dengan 

{
  "semi": false,
  "singleQuote": true,
  "bracketSpacing": true,
  "tabWidth": 2
}

# ================ test 

npx prettier --check App.tsx
```

agar tidak konflik 

```Js
npm install --save-dev eslint-config-prettier

# =================== konf 

.eslintrc.json

# ================ dengan 

"extends": [
  "plugin:react/recommended",
  "standard-with-typescript",
  "prettier" // Ditambahkan
],
```

## Module 

```sh 
npx expo install react-navigation react-native-screens react-native-safe-area-context @react-navigation/bottom-tabs
```
