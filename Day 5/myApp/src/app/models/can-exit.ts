export interface CanExit {
    canExit(): boolean | Promise<boolean>;
}