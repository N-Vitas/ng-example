import {
    trigger,
    state,
    style,
    animate,
    query,
    stagger,
    // keyframes,
    transition
} from '@angular/animations';

export const openClose = trigger('openClose', [
    state('true', style({ height: '*' })),
    state('false', style({ height: '0px' })),
    transition('false <=> true', animate(500))
]);
  
export const showHide = trigger('showHide', [
    transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate(200, style({ transform: 'scale(1)' }))
    ]),
    transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate(200, style({ transform: 'scale(0)'  }))
    ]),
]);
export const flyInOut = trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'translateX(100%)' }))
    ])
])
export const flipBoxFront = trigger('flipBoxFront', [
    state('true', style({
        'background-size': 'cover',
        'background-position': 'center',
        'border-radius': '8px',
        'min-height': '70px',
        '-webkit-backface-visibility': 'hidden',
        'backface-visibility': 'hidden',
        'cursor': 'pointer',
        'transform': 'rotateY(0deg)',
        'transform-style': 'preserve-3d',
        // 'transition': 'all 0.7s cubic-bezier(.4,.2,.2,1)',
    })),
    state('false', style({
        'transform': 'rotateY(-180deg)',
        'transform-style': 'preserve-3d',
        // 'transition': 'all 0.7s cubic-bezier(.4,.2,.2,1)',
     })),
    transition('false <=> true', animate(500))
]);
export const flipBoxBack = trigger('flipBoxBack', [
    state('true', style({ 
        'background-size': 'cover',
        'background-position': 'center',
        'border-radius': '8px',
        'min-height': '70px',
        '-webkit-backface-visibility': 'hidden',
        'backface-visibility': 'hidden',
        'cursor': 'pointer',
        'transform': 'rotateY(180deg)',
        'transform-style': 'preserve-3d',
        'transition': 'all 0.7s cubic-bezier(.4,.2,.2,1)',
    })),
    state('false', style({
        'transform': 'rotateY(0deg)',
        'transform-style': 'preserve-3d',
        'transition': 'all 0.7s cubic-bezier(.4,.2,.2,1)',
    })),
    transition('false <=> true', animate(500))
]);