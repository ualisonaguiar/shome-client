src/
├── components/ # UI reutilizável (burra)
│ ├── Button/
│ ├── Input/
│ └── Modal/
│
├── pages/ # Telas / rotas
│ ├── Login/
│ ├── Dashboard/
│ └── Users/
│
├── routes/
│ ├── AppRoutes.tsx
│ ├── PrivateRoute.tsx
├── features/ # Casos de uso (regra de negócio)
│ ├── auth/
│ │ ├── login.usecase.ts
│ │ ├── auth.service.ts
│ │ └── auth.types.ts
│ │
│ └── users/
│ ├── create-user.usecase.ts
│ ├── list-users.usecase.ts
│ └── user.service.ts
│
├── hooks/ # Hooks customizados
│ └── useAuth.ts
│
├── services/ # API, http, storage
│ └── api.ts
│
├── App.tsx
└── main.tsx
