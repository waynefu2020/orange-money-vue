const localStorageKeyName = 'recordList';

const recordListModel = {
    clone(data: RecordItem[]) {
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    save(data: RecordItem[]) {
        localStorage.setItem('recordList', JSON.stringify(data));
    }
};

export default recordListModel;