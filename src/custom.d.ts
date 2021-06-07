type RecordItem = {
    tags: string[],
    notes: string,
    type: string,
    amount: number,
    createAt?: Date
}
type Tag = {
    id: string,
    name: string
}

type TagListModel = {
    data: Tag[],
    fetch: () => Tag[],
    create: (name: string) => 'success' | 'duplicated',// success成功，duplicated标签重复
    save: () => void,
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated',
    remove: (id: string) => boolean
}

interface Window {
    tagList: Tag[]
    createTag: (name: string) => void
}