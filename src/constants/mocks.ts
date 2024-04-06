import { Power } from '../app/powers/interfaces/power';

export const MOCK_POWERS: Power[] = [
  {
    id: 1,
    name: 'Bola de fogo',
    type: 'fogo',
    description:
      'Dispara uma bola de fogo, causando dano e aplicando "incêndio" ao alvo por um turno.',
  },
  {
    id: 2,
    name: 'Vento congelante',
    type: 'gelo',
    description:
      'Conjura uma ventania congelada em direção ao alvo, causando dano em área e aplicando "congelamento" por um turno.',
  },
  {
    id: 3,
    name: 'Chicotes de vinha',
    type: 'natureza',
    description:
      'Conjura chicotes de vinha, causando dano e aplicando "imobilidade" ao alvo por um turno.',
  },
];
