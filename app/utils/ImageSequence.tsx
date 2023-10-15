export type ImageSequenceCanvasController = {
    preload: (frameStart: number, frameEnd: number) => Promise<void>;
    draw: (frame: number) => Promise<void>;
    canvas: HTMLCanvasElement | null;
};

export function findClosestFrame(timeline: { start: number }[], time: number) {
    // find the item in in the timeline that has the closest start time to the time
    // and then return its index
    let closest = 0;
    let closestDiff = 10;
    for (let i = 0; i < timeline.length; i++) {
        const diff = Math.abs(timeline[i].start - time);
        if (diff < closestDiff) {
            closestDiff = diff;
            closest = i;
        }
    }
    return closest;
}