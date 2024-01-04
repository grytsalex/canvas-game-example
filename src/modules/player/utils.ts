import Player from './PlayerClass';

// export function animate (player: Player) {
//     console.log('animate');
//     requestAnimationFrame(animate);
//     player.draw();
// }

export function animate(player: Player) {
    function step() {
        requestAnimationFrame(step);
        player.draw();
    }

    requestAnimationFrame(step);
}
