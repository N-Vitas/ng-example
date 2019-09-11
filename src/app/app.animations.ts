import {
    trigger,
    state,
    style,
    animate,
    // keyframes,
    transition
} from '@angular/animations';

export const openClose = trigger('openClose', [
    state('true', style({ height: '*' })),
    state('false', style({ height: '0px' })),
    transition('false <=> true', animate(500))
]);
  
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