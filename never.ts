function error(message: string): never{
    throw new Error(message);
};

function fail(){
    return error('railed');
};

function infiniteLoop(): never {
    while (true) {};
};

// let e : string = "hello";
declare const e : string | number;

if (typeof e !== "string") {
    e;
};

type Indexable<T> = T extends string ? T & { [index : string] : any} : never;

type ObjectIndexable = Indexable<{}>;

