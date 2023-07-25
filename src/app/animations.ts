import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    })
  ),
  state(
    'highlighted',
    style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(92%)',
    })
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),
    animate(200),
  ]),
]);

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate(
      '400ms ease-in',
      style({
        transform: 'scale(0.4)',
      })
    ),
  ]),
]);

export const filterTrigger = trigger('filterAnimation', [
  // Quando os estados iniciais e finais não importam podemos simplesmente criar uma transition
  // Além de servir como um estado 'sem nome' o operador coringo pode ser usado também em propriedades CSS como definir uma largura
  // de forma automática
  transition(':enter', [
    style({
      opacity: 0,
      width: 0,
    }),
    animate(
      '2000ms ease-out',
      // Os keyframes permitem criar animações intermediárias assim conseguimos controlar o que irá acontecer entre o início e o final da animação
      // Além disso, os keyframes permitem que definamos o tempo que cada efeito da animação irá durar
      keyframes([
        style({
          offset: 0,
          opacity: 0,
          width: 0,
        }),
        style({
          opacity: 0.8,
          width: '*',
          backgroundColor: 'lightgreen',
        }),
        style({
          offset: 1,
          opacity: 1,
          width: '*',
          backgroundColor: 'lightblue',
        }),
      ])
    ),
  ]),
  transition(':leave', [
    // Ao invés de simplesmente adicionarmos a função ease-out, podemos criar uma curva personalizada usando a função
    // cubic-bezier
    animate(
      '400ms cubic-bezier(.17,.67,.32,1.47)',
      style({ opacity: '0', width: '0' })
    ),
  ]),
]);
