const localStorageKeyName = 'tagList';

type TagListModel = {
    data: string[],
    fetch: () => string[],
    create: (name: string) => 'success' | 'duplicated',// success成功，duplicated标签重复
    save: () => void
}

const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
        return this.data;
    },
    save() {
        localStorage.setItem('recordList', JSON.stringify(this.data));
    },
    create(name: string) {
        if(this.data.indexOf(name)>=0){return 'duplicated';}
        this.data.push(name);
        this.save();
        return 'success';
    }
};

export default tagListModel;