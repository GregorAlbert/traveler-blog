import {animate, animateChild, group, query, state, style, transition, trigger} from "@angular/animations";

export const routerTransition =
//   trigger('routerTransition', [
//   transition('* <=> *', [
//     query('routerTransition, :leave', style({opacity: 1})),
//     group([
//       query('routerTransition', [
//         style({opacity: 0}),
//         animate('1000ms ease-in-out', style({opacity: 1}))
//       ]),
//       query(':leave', [
//         style({opacity: 1}),
//         animate('1000ms ease-in-out', style({opacity: 0}))]),
//     ])
//   ])
// ]);

trigger('routerTransition', [
  // ...
  state('routerTransition', style({
    opacity: 1,
  })),
  state('a', style({
    opacity: 0.5,
  })),
  transition('routerTransition => a', [
    animate('1s')
  ]),
  transition('a => routerTransition', [
    animate('1s')
  ]),
]);
