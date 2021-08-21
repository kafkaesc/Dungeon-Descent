export interface IDungeon {
    id: number,
    dungeonMap: IDungeonFloor[]
};

export interface IDungeonFloor {
    id: number,
    rooms: IDungeonRoom[],
    tier: number
};

export interface IDungeonFloorSeed {
    roomCount: number
};

export interface IDungeonRoom {
    id: number,
    roomName?: string,
    exits: boolean[],
    type: string,
    width: number
};
