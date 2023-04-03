import Dexie from 'dexie';
let db = null;


export function createDB(nameDB) {
    db = new Dexie(nameDB);
    db.version(1).stores({
        contribuction: '++id, type, date, ammount'
    });
    return {db};
}

export function getExteriorSupport() {
    db.contribuction.where('type').equals('exterior')
}
export function addNewData(data) {

}