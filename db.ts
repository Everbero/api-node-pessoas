// db.ts
export interface Pessoa {
  id: number;
  nome: string;
  idade: number;
  email: string;
}

export const pessoas: Pessoa[] = [
  { id: 1, nome: 'Fulano', idade: 30, email: 'fulano@example.com' },
  { id: 2, nome: 'Ciclano', idade: 25, email: 'ciclano@example.com' },
  { id: 3, nome: 'Beltrano', idade: 40, email: 'beltrano@example.com' },
];
